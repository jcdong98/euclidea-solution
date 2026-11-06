import type { CameraState } from '../geometry/camera';
import { worldToScreen } from '../geometry/camera';
import type { ExecutedSolution } from '../geometry/executor';
import type { BoardLocus } from '../geometry/intersections';
import type { Vec2 } from '../types/level';

export interface PlacedLabel {
  readonly key: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly anchorX: number;
  readonly anchorY: number;
}

interface Box {
  readonly minX: number;
  readonly maxX: number;
  readonly minY: number;
  readonly maxY: number;
}

function boxesOverlap(a: Box, b: Box): boolean {
  return a.minX < b.maxX && a.maxX > b.minX && a.minY < b.maxY && a.maxY > b.minY;
}

function estimateLabelBox(cx: number, cy: number, text: string): Box {
  const width = Math.max(18, text.length * 8.2 + 8);
  const height = 18;
  return {
    minX: cx - width * 0.5,
    maxX: cx + width * 0.5,
    minY: cy - height * 0.5,
    maxY: cy + height * 0.5,
  };
}

function collectIncidentTangentAngles(
  ptWorld: Vec2,
  ptScreen: Vec2,
  loci: readonly BoardLocus[],
  cam: CameraState
): number[] {
  const angles: number[] = [];

  for (const loc of loci) {
    if (loc.kind === 'linear') {
      const aScr = worldToScreen(loc.anchor, cam);
      const bScr = worldToScreen(
        { x: loc.anchor.x + loc.dir.x, y: loc.anchor.y + loc.dir.y },
        cam
      );
      const dx = bScr.x - aScr.x;
      const dy = bScr.y - aScr.y;
      const len = Math.hypot(dx, dy);
      if (len < 1e-6) continue;
      // Perpendicular screen distance from point to line
      const distLine =
        Math.abs((ptScreen.x - aScr.x) * dy - (ptScreen.y - aScr.y) * dx) / len;
      if (distLine <= 6) {
        const ang = Math.atan2(dy, dx);
        angles.push(ang, ang + Math.PI);
      }
    } else {
      const dWorld = Math.hypot(ptWorld.x - loc.center.x, ptWorld.y - loc.center.y);
      const rPx = loc.radius * cam.scale;
      if (Math.abs(dWorld - loc.radius) * cam.scale <= 6 && rPx > 6) {
        const cScr = worldToScreen(loc.center, cam);
        const radAng = Math.atan2(ptScreen.y - cScr.y, ptScreen.x - cScr.x);
        angles.push(radAng + Math.PI * 0.5, radAng - Math.PI * 0.5);
      }
    }
  }

  return angles;
}

function angularDiff(a: number, b: number): number {
  let d = Math.abs(a - b) % (Math.PI * 2);
  if (d > Math.PI) d = Math.PI * 2 - d;
  return d;
}

/**
 * Deterministically solves collision-free screen-space positions for all points in the
 * construction against the complete final scene so labels never jump during step playback.
 */
export function computePointLabelLayout(
  executed: ExecutedSolution,
  cam: CameraState
): ReadonlyMap<string, PlacedLabel> {
  const finalSnap = executed.snapshots[executed.snapshots.length - 1];
  const visiblePts = finalSnap.points.filter((p) => p.visible);
  const result = new Map<string, PlacedLabel>();
  if (visiblePts.length === 0) return result;

  const screenPts = visiblePts.map((p) => ({
    pt: p,
    scr: worldToScreen(p.coords, cam),
  }));

  // Compute screen-space centroid to gently bias labels outward from the figure interior
  const centroidX = screenPts.reduce((acc, item) => acc + item.scr.x, 0) / screenPts.length;
  const centroidY = screenPts.reduce((acc, item) => acc + item.scr.y, 0) / screenPts.length;

  const occupiedBoxes: Box[] = screenPts.map(({ scr }) => ({
    minX: scr.x - 7,
    maxX: scr.x + 7,
    minY: scr.y - 7,
    maxY: scr.y + 7,
  }));

  const NUM_DIRS = 32;
  const DISTANCES: readonly { radiusPx: number; penalty: number }[] = [
    { radiusPx: 18, penalty: 0 },
    { radiusPx: 26, penalty: 10 },
    { radiusPx: 36, penalty: 28 },
    { radiusPx: 48, penalty: 48 },
  ];

  for (const { pt, scr } of screenPts) {
    const tangents = collectIncidentTangentAngles(pt.coords, scr, finalSnap.loci, cam);
    const outAngle = Math.atan2(scr.y - centroidY, scr.x - centroidX);

    let bestScore = -Infinity;
    let bestPos: Vec2 = { x: scr.x + 15, y: scr.y - 15 };

    for (const { radiusPx, penalty } of DISTANCES) {
      for (let i = 0; i < NUM_DIRS; i++) {
        const theta = (i * Math.PI * 2) / NUM_DIRS - Math.PI * 0.25;
        const cx = scr.x + Math.cos(theta) * radiusPx;
        const cy = scr.y + Math.sin(theta) * radiusPx;
        const box = estimateLabelBox(cx, cy, pt.label);

        let score = -penalty;

        // 1. Penalize overlap with existing point markers and placed labels (strict top priority)
        for (const occ of occupiedBoxes) {
          if (boxesOverlap(box, occ)) {
            score -= 1800;
          }
        }

        // 2. Reward angular separation from incident lines & circle tangents
        for (const tAng of tangents) {
          const diff = angularDiff(theta, tAng);
          if (diff < 0.55) {
            score -= 45 / (diff * diff + 0.03);
          } else {
            score += diff * 4;
          }
        }

        // 3. Gentle outward bias away from figure centroid
        const outDiff = angularDiff(theta, outAngle);
        score += (Math.PI - outDiff) * 3.5;

        // 4. Keep inside viewport margins
        if (
          box.minX < 10 ||
          box.maxX > cam.width - 10 ||
          box.minY < 10 ||
          box.maxY > cam.height - 10
        ) {
          score -= 120;
        }

        if (score > bestScore) {
          bestScore = score;
          bestPos = { x: cx, y: cy };
        }
      }
    }

    occupiedBoxes.push(estimateLabelBox(bestPos.x, bestPos.y, pt.label));
    result.set(pt.key, {
      key: pt.key,
      label: pt.label,
      x: bestPos.x,
      y: bestPos.y,
      anchorX: scr.x,
      anchorY: scr.y,
    });
  }

  return result;
}

/**
 * Places concise labels for visible loci (`c₁`, `l₁`, `m₁`, etc.) away from points and viewport edges.
 */
export function computeLocusLabelLayout(
  loci: readonly BoardLocus[],
  pointLabels: ReadonlyMap<string, PlacedLabel>,
  cam: CameraState
): ReadonlyMap<string, PlacedLabel> {
  const placed = new Map<string, PlacedLabel>();
  const occupied: Box[] = [];
  for (const pl of pointLabels.values()) {
    occupied.push(estimateLabelBox(pl.x, pl.y, pl.label));
    occupied.push({
      minX: pl.anchorX - 10,
      maxX: pl.anchorX + 10,
      minY: pl.anchorY - 10,
      maxY: pl.anchorY + 10,
    });
  }

  for (const loc of loci) {
    if (loc.kind === 'circle') {
      const cScr = worldToScreen(loc.center, cam);
      const rPx = loc.radius * cam.scale;
      if (rPx < 20) continue;

      let bestScore = -Infinity;
      let best: Vec2 | null = null;

      for (let i = 0; i < 20; i++) {
        const ang = -Math.PI * 0.65 + (i * Math.PI * 2) / 20;
        const lx = cScr.x + Math.cos(ang) * (rPx + 14);
        const ly = cScr.y + Math.sin(ang) * (rPx + 14);
        const box = estimateLabelBox(lx, ly, loc.label);
        if (
          box.minX < 14 ||
          box.maxX > cam.width - 14 ||
          box.minY < 14 ||
          box.maxY > cam.height - 14
        ) {
          continue;
        }
        let score = 0;
        for (const occ of occupied) {
          if (boxesOverlap(box, occ)) score -= 200;
          const ox = 0.5 * (occ.minX + occ.maxX);
          const oy = 0.5 * (occ.minY + occ.maxY);
          const d = Math.hypot(lx - ox, ly - oy);
          if (d < 42) score -= (42 - d) * 2;
        }
        if (score > bestScore) {
          bestScore = score;
          best = { x: lx, y: ly };
        }
      }

      if (best) {
        occupied.push(estimateLabelBox(best.x, best.y, loc.label));
        placed.set(loc.key, {
          key: loc.key,
          label: loc.label,
          x: best.x,
          y: best.y,
          anchorX: best.x,
          anchorY: best.y,
        });
      }
    } else {
      const aScr = worldToScreen(loc.anchor, cam);
      const bScr = worldToScreen(
        loc.p2 ?? { x: loc.anchor.x + loc.dir.x, y: loc.anchor.y + loc.dir.y },
        cam
      );
      const dx = bScr.x - aScr.x;
      const dy = bScr.y - aScr.y;
      const len = Math.hypot(dx, dy);
      if (len < 1e-5) continue;
      const ux = dx / len;
      const uy = dy / len;
      const nx = -uy;
      const ny = ux;

      const candidatesT = loc.bounds === 'segment' ? [0.5] : [0.35, 0.65, -0.35, 1.35];
      let bestScore = -Infinity;
      let best: Vec2 | null = null;

      for (const t of candidatesT) {
        for (const side of [1, -1]) {
          const lx = aScr.x + dx * t + nx * 14 * side;
          const ly = aScr.y + dy * t + ny * 14 * side;
          const box = estimateLabelBox(lx, ly, loc.label);
          if (
            box.minX < 14 ||
            box.maxX > cam.width - 14 ||
            box.minY < 14 ||
            box.maxY > cam.height - 14
          ) {
            continue;
          }
          let score = 0;
          for (const occ of occupied) {
            if (boxesOverlap(box, occ)) score -= 220;
            const ox = 0.5 * (occ.minX + occ.maxX);
            const oy = 0.5 * (occ.minY + occ.maxY);
            const d = Math.hypot(lx - ox, ly - oy);
            if (d < 36) score -= (36 - d) * 2;
          }
          if (score > bestScore) {
            bestScore = score;
            best = { x: lx, y: ly };
          }
        }
      }

      if (best) {
        occupied.push(estimateLabelBox(best.x, best.y, loc.label));
        placed.set(loc.key, {
          key: loc.key,
          label: loc.label,
          x: best.x,
          y: best.y,
          anchorX: best.x,
          anchorY: best.y,
        });
      }
    }
  }

  return placed;
}
