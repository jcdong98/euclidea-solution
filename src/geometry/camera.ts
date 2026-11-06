import type { Vec2 } from '../types/level';
import type { ExecutedSolution } from './executor';

export interface CameraState {
  /** World-space center X. */
  centerX: number;
  /** World-space center Y. */
  centerY: number;
  /** Pixels per world unit. */
  scale: number;
  /** Viewport width in CSS pixels. */
  width: number;
  /** Viewport height in CSS pixels. */
  height: number;
}

export interface WorldBounds {
  readonly minX: number;
  readonly maxX: number;
  readonly minY: number;
  readonly maxY: number;
}

/**
 * Computes a clean framing bounding box around the construction's points and primary circles,
 * clamping extreme auxiliary circles so the core geometry always fills the canvas gracefully.
 */
export function computeSolutionBounds(executed: ExecutedSolution): WorldBounds {
  const finalSnap = executed.snapshots[executed.snapshots.length - 1];
  const xs: number[] = [];
  const ys: number[] = [];

  for (const pt of finalSnap.points) {
    xs.push(pt.coords.x);
    ys.push(pt.coords.y);
  }

  for (const loc of finalSnap.loci) {
    if (loc.kind === 'linear' && loc.p2) {
      xs.push(loc.anchor.x, loc.p2.x);
      ys.push(loc.anchor.y, loc.p2.y);
    } else if (loc.kind === 'circle' && loc.role === 'given') {
      xs.push(loc.center.x - loc.radius, loc.center.x + loc.radius);
      ys.push(loc.center.y - loc.radius, loc.center.y + loc.radius);
    }
  }

  const baseMinX = xs.length > 0 ? Math.min(...xs) : -2;
  const baseMaxX = xs.length > 0 ? Math.max(...xs) : 2;
  const baseMinY = ys.length > 0 ? Math.min(...ys) : -2;
  const baseMaxY = ys.length > 0 ? Math.max(...ys) : 2;
  const coreSpan = Math.max(1, baseMaxX - baseMinX, baseMaxY - baseMinY);

  // Include constructed circles unless their diameter dwarfs the core figure (> 3.2x core span)
  for (const loc of finalSnap.loci) {
    if (loc.kind === 'circle' && loc.role === 'constructed' && loc.radius <= coreSpan * 1.6) {
      xs.push(loc.center.x - loc.radius, loc.center.x + loc.radius);
      ys.push(loc.center.y - loc.radius, loc.center.y + loc.radius);
    }
  }

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const padX = Math.max(0.5, (maxX - minX) * 0.15);
  const padBottom = Math.max(0.5, (maxY - minY) * 0.14);
  const padTop = Math.max(0.65, (maxY - minY) * 0.21);

  return {
    minX: minX - padX,
    maxX: maxX + padX,
    minY: minY - padBottom,
    maxY: maxY + padTop,
  };
}

export function fitCameraToBounds(
  bounds: WorldBounds,
  width: number,
  height: number
): CameraState {
  const safeW = Math.max(240, width);
  const safeH = Math.max(240, height);
  const worldW = Math.max(1e-3, bounds.maxX - bounds.minX);
  const worldH = Math.max(1e-3, bounds.maxY - bounds.minY);
  const scale = Math.min(safeW / worldW, safeH / worldH);

  return {
    centerX: 0.5 * (bounds.minX + bounds.maxX),
    centerY: 0.5 * (bounds.minY + bounds.maxY),
    scale,
    width: safeW,
    height: safeH,
  };
}

/** Projects right-handed world coordinates `(x right, y up)` to SVG pixel coordinates `(x right, y down)`. */
export function worldToScreen(p: Vec2, cam: CameraState): Vec2 {
  return {
    x: cam.width * 0.5 + (p.x - cam.centerX) * cam.scale,
    y: cam.height * 0.5 - (p.y - cam.centerY) * cam.scale,
  };
}

/** Inverse transform from SVG pixel coordinates to right-handed world coordinates. */
export function screenToWorld(s: Vec2, cam: CameraState): Vec2 {
  return {
    x: cam.centerX + (s.x - cam.width * 0.5) / cam.scale,
    y: cam.centerY - (s.y - cam.height * 0.5) / cam.scale,
  };
}

/** Clips an infinite or bounded linear locus to the current SVG screen rectangle for crisp rendering. */
export function clipInfiniteLineToScreen(
  anchorScreen: Vec2,
  dirScreen: Vec2,
  width: number,
  height: number,
  margin = 40
): [Vec2, Vec2] | null {
  const len = Math.hypot(dirScreen.x, dirScreen.y);
  if (len < 1e-9) return null;
  const ux = dirScreen.x / len;
  const uy = dirScreen.y / len;
  const diag = Math.hypot(width, height) + margin * 2;
  return [
    { x: anchorScreen.x - ux * diag, y: anchorScreen.y - uy * diag },
    { x: anchorScreen.x + ux * diag, y: anchorScreen.y + uy * diag },
  ];
}
