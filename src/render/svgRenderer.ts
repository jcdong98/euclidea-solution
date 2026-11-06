import {
  type CameraState,
  clipInfiniteLineToScreen,
  computeSolutionBounds,
  fitCameraToBounds,
  worldToScreen,
} from '../geometry/camera';
import type { ExecutedSolution } from '../geometry/executor';
import { type BoardLocus, type BoardPoint, satisfiesLinearBounds } from '../geometry/intersections';
import { det2, normalize, sub } from '../geometry/vec2';
import type { Vec2 } from '../types/level';
import { computeLocusLabelLayout, computePointLabelLayout } from './labelLayout';
import { parseGeometricLabel } from './mathFormat';

const SVG_NS = 'http://www.w3.org/2000/svg';

const VARIANT_PALETTE = [
  { stroke: '#059669', fill: 'rgba(5, 150, 105, 0.085)' },
  { stroke: '#0284c7', fill: 'rgba(2, 132, 199, 0.080)' },
  { stroke: '#7c3aed', fill: 'rgba(124, 58, 237, 0.075)' },
  { stroke: '#d97706', fill: 'rgba(217, 119, 6, 0.080)' },
];

export interface RenderOptions {
  readonly showPointLabels: boolean;
  readonly showLocusLabels: boolean;
  readonly showGhostPreview: boolean;
  readonly highlightedKey: string | null;
}

function svgEl<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string | number> = {}
): SVGElementTagNameMap[K] {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, String(v));
  }
  return el;
}

/**
 * Checks whether segment `[a, b]` is already drawn as a solid linear stroke by any visible locus,
 * avoiding redundant dashed overlays when a solid line/ray/segment already connects `a` and `b`.
 */
function isSegmentCoveredBySolidLocus(
  a: Vec2,
  b: Vec2,
  loci: readonly BoardLocus[]
): boolean {
  for (const loc of loci) {
    if (loc.kind !== 'linear') continue;
    const u = normalize(loc.dir);
    const distA = Math.abs(det2(sub(a, loc.anchor), u));
    const distB = Math.abs(det2(sub(b, loc.anchor), u));
    if (distA <= 1e-5 && distB <= 1e-5) {
      const strokeLoc =
        loc.displayBounds && loc.displayBounds !== loc.bounds
          ? { ...loc, bounds: loc.displayBounds }
          : loc;
      if (satisfiesLinearBounds(a, strokeLoc, 1e-5) && satisfiesLinearBounds(b, strokeLoc, 1e-5)) {
        return true;
      }
    }
  }
  return false;
}

function createMathLabelSvg(
  label: string,
  x: number,
  y: number,
  className: string
): SVGTextElement {
  const parsed = parseGeometricLabel(label);
  const textEl = svgEl('text', {
    x: x.toFixed(1),
    y: y.toFixed(1),
    'text-anchor': 'middle',
    'dominant-baseline': 'central',
    class: className,
  });

  const baseSpan = svgEl('tspan', { class: 'svg-math-base' });
  baseSpan.textContent = parsed.base + parsed.prime;
  textEl.appendChild(baseSpan);

  if (parsed.sub) {
    const subSpan = svgEl('tspan', {
      dy: '3.5',
      dx: '0.6',
      'font-size': '74%',
      class: 'svg-math-sub',
    });
    subSpan.textContent = parsed.sub;
    textEl.appendChild(subSpan);
  }

  return textEl;
}

export class SvgGeometryRenderer {
  private readonly container: HTMLElement;
  private readonly svg: SVGSVGElement;
  private readonly onHoverKeyChange?: (key: string | null) => void;

  private executed: ExecutedSolution | null = null;
  private stepIndex = 0;
  private options: RenderOptions = {
    showPointLabels: true,
    showLocusLabels: false,
    showGhostPreview: false,
    highlightedKey: null,
  };

  private camera: CameraState = {
    centerX: 0,
    centerY: 0,
    scale: 100,
    width: 640,
    height: 480,
  };
  private hasCustomCamera = false;
  private isDragging = false;
  private dragStart: Vec2 = { x: 0, y: 0 };
  private camStart: Vec2 = { x: 0, y: 0 };
  private resizeObserver: ResizeObserver;

  constructor(container: HTMLElement, onHoverKeyChange?: (key: string | null) => void) {
    this.container = container;
    this.onHoverKeyChange = onHoverKeyChange;
    this.svg = svgEl('svg', {
      class: 'geometry-svg',
      width: '100%',
      height: '100%',
    });
    this.container.appendChild(this.svg);

    this.bindInteractions();
    this.resizeObserver = new ResizeObserver(() => {
      this.syncViewportSize();
    });
    this.resizeObserver.observe(this.container);
  }

  public setSolution(executed: ExecutedSolution, initialStepIndex = 0): void {
    this.executed = executed;
    this.stepIndex = initialStepIndex;
    this.hasCustomCamera = false;
    this.resetCamera();
  }

  public setStepIndex(stepIndex: number): void {
    this.stepIndex = stepIndex;
    this.render();
  }

  public updateOptions(partial: Partial<RenderOptions>): void {
    this.options = { ...this.options, ...partial };
    this.render();
  }

  public resetCamera(): void {
    if (!this.executed) return;
    const rect = this.container.getBoundingClientRect();
    const width = Math.max(320, rect.width || 640);
    const height = Math.max(280, rect.height || 480);
    const bounds = computeSolutionBounds(this.executed);
    this.camera = fitCameraToBounds(bounds, width, height);
    this.hasCustomCamera = false;
    this.render();
  }

  public zoomBy(factor: number): void {
    this.camera.scale = Math.max(8, Math.min(4000, this.camera.scale * factor));
    this.hasCustomCamera = true;
    this.render();
  }

  private syncViewportSize(): void {
    const rect = this.container.getBoundingClientRect();
    if (rect.width < 20 || rect.height < 20) return;
    if (!this.hasCustomCamera && this.executed) {
      const bounds = computeSolutionBounds(this.executed);
      this.camera = fitCameraToBounds(bounds, rect.width, rect.height);
    } else {
      this.camera.width = rect.width;
      this.camera.height = rect.height;
    }
    this.render();
  }

  private bindInteractions(): void {
    this.svg.addEventListener('pointerdown', (e: PointerEvent) => {
      if (e.button !== 0) return;
      // Ignore drags starting directly on interactive hit targets only if quick click
      this.isDragging = true;
      this.dragStart = { x: e.clientX, y: e.clientY };
      this.camStart = { x: this.camera.centerX, y: this.camera.centerY };
      this.svg.setPointerCapture(e.pointerId);
      this.svg.classList.add('is-panning');
    });

    this.svg.addEventListener('pointermove', (e: PointerEvent) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.dragStart.x;
      const dy = e.clientY - this.dragStart.y;
      if (Math.hypot(dx, dy) > 2) {
        this.hasCustomCamera = true;
      }
      this.camera.centerX = this.camStart.x - dx / this.camera.scale;
      this.camera.centerY = this.camStart.y + dy / this.camera.scale;
      this.render();
    });

    const endDrag = (e: PointerEvent) => {
      if (!this.isDragging) return;
      this.isDragging = false;
      if (this.svg.hasPointerCapture(e.pointerId)) {
        this.svg.releasePointerCapture(e.pointerId);
      }
      this.svg.classList.remove('is-panning');
    };
    this.svg.addEventListener('pointerup', endDrag);
    this.svg.addEventListener('pointercancel', endDrag);

    this.svg.addEventListener(
      'wheel',
      (e: WheelEvent) => {
        e.preventDefault();
        const rect = this.svg.getBoundingClientRect();
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;

        // Keep world point under cursor stationary while zooming
        const worldBeforeX =
          this.camera.centerX + (sx - this.camera.width * 0.5) / this.camera.scale;
        const worldBeforeY =
          this.camera.centerY - (sy - this.camera.height * 0.5) / this.camera.scale;

        const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
        const nextScale = Math.max(8, Math.min(4000, this.camera.scale * factor));
        this.camera.scale = nextScale;
        this.camera.centerX = worldBeforeX - (sx - this.camera.width * 0.5) / nextScale;
        this.camera.centerY = worldBeforeY + (sy - this.camera.height * 0.5) / nextScale;
        this.hasCustomCamera = true;
        this.render();
      },
      { passive: false }
    );
  }

  private renderLocusGeometry(
    loc: BoardLocus,
    attrs: Record<string, string | number>
  ): SVGElement | null {
    if (loc.kind === 'circle') {
      const c = worldToScreen(loc.center, this.camera);
      const r = loc.radius * this.camera.scale;
      if (r < 0.5) return null;
      return svgEl('circle', {
        cx: c.x.toFixed(2),
        cy: c.y.toFixed(2),
        r: r.toFixed(2),
        fill: 'none',
        ...attrs,
      });
    }

    const a = worldToScreen(loc.anchor, this.camera);
    const b = worldToScreen(
      loc.p2 ?? { x: loc.anchor.x + loc.dir.x, y: loc.anchor.y + loc.dir.y },
      this.camera
    );

    if (loc.bounds === 'segment') {
      return svgEl('line', {
        x1: a.x.toFixed(2),
        y1: a.y.toFixed(2),
        x2: b.x.toFixed(2),
        y2: b.y.toFixed(2),
        ...attrs,
      });
    }

    if (loc.bounds === 'ray') {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.hypot(dx, dy);
      if (len < 1e-6) return null;
      const diag = Math.hypot(this.camera.width, this.camera.height) + 80;
      return svgEl('line', {
        x1: a.x.toFixed(2),
        y1: a.y.toFixed(2),
        x2: (a.x + (dx / len) * diag).toFixed(2),
        y2: (a.y + (dy / len) * diag).toFixed(2),
        ...attrs,
      });
    }

    const clipped = clipInfiniteLineToScreen(
      a,
      { x: b.x - a.x, y: b.y - a.y },
      this.camera.width,
      this.camera.height
    );
    if (!clipped) return null;
    return svgEl('line', {
      x1: clipped[0].x.toFixed(2),
      y1: clipped[0].y.toFixed(2),
      x2: clipped[1].x.toFixed(2),
      y2: clipped[1].y.toFixed(2),
      ...attrs,
    });
  }

  private attachHoverHandlers(el: SVGElement, key: string): void {
    el.style.cursor = 'pointer';
    el.addEventListener('pointerenter', () => {
      this.onHoverKeyChange?.(key);
    });
    el.addEventListener('pointerleave', () => {
      this.onHoverKeyChange?.(null);
    });
  }

  public render(): void {
    while (this.svg.firstChild) {
      this.svg.removeChild(this.svg.firstChild);
    }
    if (!this.executed) return;

    const { width, height } = this.camera;
    this.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    const snap =
      this.executed.snapshots[
        Math.max(0, Math.min(this.stepIndex, this.executed.snapshots.length - 1))
      ];
    const finalSnap = this.executed.snapshots[this.executed.snapshots.length - 1];

    const pointLabelMap = computePointLabelLayout(this.executed, this.camera);
    const locusLabelMap = computeLocusLabelLayout(finalSnap.loci, pointLabelMap, this.camera);

    const gGoalFills = svgEl('g', { class: 'layer-goal-fills' });
    const gGhost = svgEl('g', { class: 'layer-ghost' });
    const gPast = svgEl('g', { class: 'layer-loci-past' });
    const gGiven = svgEl('g', { class: 'layer-given' });
    const gGoalStrokes = svgEl('g', { class: 'layer-goal-strokes' });
    const gCues = svgEl('g', { class: 'layer-cues' });
    const gActive = svgEl('g', { class: 'layer-active' });
    const gHover = svgEl('g', { class: 'layer-hover' });
    const gHits = svgEl('g', { class: 'layer-hits' });
    const gPoints = svgEl('g', { class: 'layer-points' });
    const gLabels = svgEl('g', { class: 'layer-labels' });

    const visiblePointKeys = new Set(snap.points.map((p) => p.key));
    const visibleLocusKeys = new Set(snap.loci.map((l) => l.key));
    const depLocusKeys = new Set(snap.dependency.locusKeys);
    const depPointKeys = new Set(snap.dependency.pointKeys);

    // 1. Optional Ghost Preview of future steps
    if (this.options.showGhostPreview) {
      for (const loc of finalSnap.loci) {
        if (visibleLocusKeys.has(loc.key)) continue;
        const el = this.renderLocusGeometry(loc, {
          stroke: '#94a3b8',
          'stroke-width': 1.1,
          'stroke-dasharray': '5 5',
          opacity: 0.25,
        });
        if (el) gGhost.appendChild(el);
      }
      for (const pt of finalSnap.points) {
        if (visiblePointKeys.has(pt.key) || !pt.visible) continue;
        const s = worldToScreen(pt.coords, this.camera);
        gGhost.appendChild(
          svgEl('circle', {
            cx: s.x.toFixed(2),
            cy: s.y.toFixed(2),
            r: 3.2,
            fill: 'none',
            stroke: '#94a3b8',
            'stroke-width': 1.2,
            opacity: 0.35,
          })
        );
      }
    }

    // 2. Given Polygons (if any)
    if (this.executed.level.givenPolygons) {
      for (const poly of this.executed.level.givenPolygons) {
        const ptsAttr = poly.vertices
          .map((v) => {
            const sv = worldToScreen(v, this.camera);
            return `${sv.x.toFixed(2)},${sv.y.toFixed(2)}`;
          })
          .join(' ');
        gGoalFills.appendChild(
          svgEl('polygon', {
            points: ptsAttr,
            fill: 'rgba(30, 41, 59, 0.035)',
            stroke: 'none',
          })
        );
      }
    }

    // 3. Completed Goal Variant Fills & Strokes
    snap.completedVariants.forEach((variant, idx) => {
      const palette = VARIANT_PALETTE[idx % VARIANT_PALETTE.length];

      if (variant.highlightPolygonKeys && variant.highlightPolygonKeys.length >= 3) {
        const verts = variant.highlightPolygonKeys
          .map((k) => this.executed!.pointsByKey.get(k))
          .filter((p): p is BoardPoint => Boolean(p));
        if (verts.length === variant.highlightPolygonKeys.length) {
          const ptsStr = verts
            .map((p) => {
              const s = worldToScreen(p.coords, this.camera);
              return `${s.x.toFixed(2)},${s.y.toFixed(2)}`;
            })
            .join(' ');
          gGoalFills.appendChild(
            svgEl('polygon', {
              points: ptsStr,
              fill: palette.fill,
              stroke: 'none',
            })
          );
        }
      }

      if (variant.highlightSegmentPairs) {
        for (const [k1, k2] of variant.highlightSegmentPairs) {
          const p1 = this.executed!.pointsByKey.get(k1);
          const p2 = this.executed!.pointsByKey.get(k2);
          if (!p1 || !p2) continue;
          const s1 = worldToScreen(p1.coords, this.camera);
          const s2 = worldToScreen(p2.coords, this.camera);
          gGoalStrokes.appendChild(
            svgEl('line', {
              x1: s1.x.toFixed(2),
              y1: s1.y.toFixed(2),
              x2: s2.x.toFixed(2),
              y2: s2.y.toFixed(2),
              stroke: palette.stroke,
              'stroke-width': 3.1,
              'stroke-linecap': 'round',
            })
          );
        }
      }

      if (variant.highlightCircleKeys) {
        for (const ck of variant.highlightCircleKeys) {
          const loc = this.executed!.lociByKey.get(ck);
          if (loc && loc.kind === 'circle') {
            const el = this.renderLocusGeometry(loc, {
              stroke: palette.stroke,
              'stroke-width': 2.8,
            });
            if (el) gGoalStrokes.appendChild(el);
          }
        }
      }

      if (variant.highlightLocusKeys) {
        for (const lk of variant.highlightLocusKeys) {
          const loc = this.executed!.lociByKey.get(lk);
          if (loc) {
            const el = this.renderLocusGeometry(loc, {
              stroke: palette.stroke,
              'stroke-width': 2.9,
              'stroke-linecap': 'round',
            });
            if (el) gGoalStrokes.appendChild(el);
          }
        }
      }
    });

    // 4. Visible Loci (Given, Past Auxiliary, Active)
    const completedGoalLocusKeys = new Set(
      snap.completedVariants.flatMap((v) => v.locusKeys)
    );

    for (const loc of snap.loci) {
      const isCreatedNow = snap.createdKey === loc.key;
      const isDepParent = depLocusKeys.has(loc.key);

      if (loc.role === 'given') {
        const strokeLoc =
          loc.kind === 'linear' && loc.displayBounds ? { ...loc, bounds: loc.displayBounds } : loc;

        // Optional infinite carrier line when given object is rendered primarily as a segment/ray
        if (strokeLoc.kind === 'linear' && strokeLoc.bounds !== 'line') {
          let needsCarrier = Boolean(loc.kind === 'linear' && loc.showCarrier);
          if (!needsCarrier && loc.kind === 'linear' && loc.bounds === 'line') {
            const uLoc = normalize(loc.dir);
            needsCarrier = snap.points.some(
              (pt) =>
                pt.visible &&
                Math.abs(det2(sub(pt.coords, loc.anchor), uLoc)) <= 1e-4 &&
                !satisfiesLinearBounds(pt.coords, strokeLoc, 1e-4)
            );
          }
          if (needsCarrier) {
            const carrierEl = this.renderLocusGeometry(
              { ...strokeLoc, bounds: 'line' },
              {
                stroke: '#cbd5e1',
                'stroke-width': 1.15,
                'stroke-dasharray': '5 5',
              }
            );
            if (carrierEl) gPast.appendChild(carrierEl);
          }
        }

        const givenEl = this.renderLocusGeometry(strokeLoc, {
          stroke: isDepParent ? '#4f46e5' : '#1e293b',
          'stroke-width': isDepParent ? 2.8 : 2.5,
          'stroke-linecap': 'round',
        });
        if (givenEl) gGiven.appendChild(givenEl);
      } else if (isCreatedNow) {
        const activeEl = this.renderLocusGeometry(loc, {
          stroke: '#2563eb',
          'stroke-width': 2.4,
          class: 'svg-locus-active',
        });
        if (activeEl) gActive.appendChild(activeEl);
      } else {
        const isGoalLine = completedGoalLocusKeys.has(loc.key);
        const pastEl = this.renderLocusGeometry(loc, {
          stroke: isDepParent ? '#4f46e5' : isGoalLine ? '#64748b' : '#94a3b8',
          'stroke-width': isDepParent ? 2.0 : 1.35,
          opacity: isDepParent ? 0.92 : isGoalLine ? 0.45 : 0.62,
        });
        if (pastEl) gPast.appendChild(pastEl);
      }

      // Invisible comfortable hover hit target for every visible locus
      const hitEl = this.renderLocusGeometry(
        loc.kind === 'linear' && loc.showCarrier ? { ...loc, bounds: 'line' } : loc,
        {
          stroke: 'transparent',
          'stroke-width': 12,
        }
      );
      if (hitEl) {
        this.attachHoverHandlers(hitEl, loc.key);
        gHits.appendChild(hitEl);
      }
    }

    // 5. Geometric Dependency Cues for Current Step
    const dep = snap.dependency;
    if (dep.referenceSegments) {
      for (const [segA, segB] of dep.referenceSegments) {
        if (isSegmentCoveredBySolidLocus(segA, segB, snap.loci)) continue;
        const aScr = worldToScreen(segA, this.camera);
        const bScr = worldToScreen(segB, this.camera);
        gCues.appendChild(
          svgEl('line', {
            x1: aScr.x.toFixed(2),
            y1: aScr.y.toFixed(2),
            x2: bScr.x.toFixed(2),
            y2: bScr.y.toFixed(2),
            stroke: '#4f46e5',
            'stroke-width': 1.5,
            'stroke-dasharray': '5 4',
            'stroke-linecap': 'round',
            opacity: 0.8,
          })
        );
      }
    }

    if (dep.compassCenter && dep.compassThrough) {
      const cScr = worldToScreen(dep.compassCenter, this.camera);
      const tScr = worldToScreen(dep.compassThrough, this.camera);
      gCues.appendChild(
        svgEl('line', {
          x1: cScr.x.toFixed(2),
          y1: cScr.y.toFixed(2),
          x2: tScr.x.toFixed(2),
          y2: tScr.y.toFixed(2),
          stroke: '#2563eb',
          'stroke-width': 1.4,
          'stroke-dasharray': '4 3',
          opacity: 0.8,
        })
      );
      gCues.appendChild(
        svgEl('circle', {
          cx: cScr.x.toFixed(2),
          cy: cScr.y.toFixed(2),
          r: 9.5,
          fill: 'none',
          stroke: '#2563eb',
          'stroke-width': 1.3,
          'stroke-dasharray': '2.5 2.5',
          opacity: 0.75,
        })
      );
    }

    if (dep.compassCenter && dep.compassSourceSegment) {
      const [rs, re] = dep.compassSourceSegment;
      const rsScr = worldToScreen(rs, this.camera);
      const reScr = worldToScreen(re, this.camera);
      const cScr = worldToScreen(dep.compassCenter, this.camera);
      gCues.appendChild(
        svgEl('line', {
          x1: rsScr.x.toFixed(2),
          y1: rsScr.y.toFixed(2),
          x2: reScr.x.toFixed(2),
          y2: reScr.y.toFixed(2),
          stroke: '#4f46e5',
          'stroke-width': 1.6,
          'stroke-dasharray': '5 4',
          opacity: 0.85,
        })
      );
      gCues.appendChild(
        svgEl('circle', {
          cx: cScr.x.toFixed(2),
          cy: cScr.y.toFixed(2),
          r: 9.5,
          fill: 'none',
          stroke: '#2563eb',
          'stroke-width': 1.3,
          'stroke-dasharray': '2.5 2.5',
          opacity: 0.75,
        })
      );
    }

    if (dep.rightAngleAt) {
      const { vertex, u, v } = dep.rightAngleAt;
      const vScr = worldToScreen(vertex, this.camera);
      const uNorm = normalize(u);
      const vNorm = normalize(v);
      const sizePx = 10;
      const ux = uNorm.x * sizePx;
      const uy = -uNorm.y * sizePx;
      const vx = vNorm.x * sizePx;
      const vy = -vNorm.y * sizePx;
      const pathD = [
        `M ${(vScr.x + ux).toFixed(2)} ${(vScr.y + uy).toFixed(2)}`,
        `L ${(vScr.x + ux + vx).toFixed(2)} ${(vScr.y + uy + vy).toFixed(2)}`,
        `L ${(vScr.x + vx).toFixed(2)} ${(vScr.y + vy).toFixed(2)}`,
      ].join(' ');
      gCues.appendChild(
        svgEl('path', {
          d: pathD,
          fill: 'none',
          stroke: '#2563eb',
          'stroke-width': 1.35,
          opacity: 0.85,
        })
      );
    }

    if (dep.bisectedAngle) {
      const { vertex, arm1, arm2 } = dep.bisectedAngle;
      const vScr = worldToScreen(vertex, this.camera);
      const u1 = normalize(sub(arm1, vertex));
      const u2 = normalize(sub(arm2, vertex));
      const arcR = 20;
      const p1x = vScr.x + u1.x * arcR;
      const p1y = vScr.y - u1.y * arcR;
      const p2x = vScr.x + u2.x * arcR;
      const p2y = vScr.y - u2.y * arcR;
      // Screen-space cross product determines minor arc sweep
      const crossScr = (p1x - vScr.x) * (p2y - vScr.y) - (p1y - vScr.y) * (p2x - vScr.x);
      const sweep = crossScr >= 0 ? 1 : 0;
      gCues.appendChild(
        svgEl('path', {
          d: `M ${p1x.toFixed(2)} ${p1y.toFixed(2)} A ${arcR} ${arcR} 0 0 ${sweep} ${p2x.toFixed(2)} ${p2y.toFixed(2)}`,
          fill: 'none',
          stroke: '#2563eb',
          'stroke-width': 1.35,
          opacity: 0.82,
        })
      );
    }

    // 6. Hover Highlight Overlay (works even for future objects referenced in the proof!)
    const hKey = this.options.highlightedKey;
    if (hKey) {
      const hLocus = this.executed.lociByKey.get(hKey);
      if (hLocus) {
        const isFuture = !visibleLocusKeys.has(hKey);
        const hEl = this.renderLocusGeometry(
          hLocus.kind === 'linear' && hLocus.showCarrier ? { ...hLocus, bounds: 'line' } : hLocus,
          {
            stroke: '#d97706',
            'stroke-width': 3.0,
            'stroke-dasharray': isFuture ? '6 4' : 'none',
            opacity: isFuture ? 0.75 : 0.95,
          }
        );
        if (hEl) gHover.appendChild(hEl);
      }

      const hPoint = this.executed.pointsByKey.get(hKey);
      if (hPoint) {
        const s = worldToScreen(hPoint.coords, this.camera);
        gHover.appendChild(
          svgEl('circle', {
            cx: s.x.toFixed(2),
            cy: s.y.toFixed(2),
            r: 10.5,
            fill: 'rgba(217, 119, 6, 0.16)',
            stroke: '#d97706',
            'stroke-width': 2.0,
          })
        );
      }
    }

    // 7. Points & Hit Targets
    const goalPointKeys = new Set(snap.completedVariants.flatMap((v) => v.pointKeys));

    for (const pt of snap.points) {
      if (!pt.visible) continue;
      const s = worldToScreen(pt.coords, this.camera);
      const isCreatedNow = snap.createdKey === pt.key;
      const isHovered = hKey === pt.key;
      const isGoalPt = goalPointKeys.has(pt.key);
      const isDepPt = depPointKeys.has(pt.key);

      if (isCreatedNow) {
        gPoints.appendChild(
          svgEl('circle', {
            cx: s.x.toFixed(2),
            cy: s.y.toFixed(2),
            r: 10,
            fill: 'rgba(37, 99, 235, 0.14)',
            stroke: '#2563eb',
            'stroke-width': 1.4,
            class: 'svg-point-pulse',
          })
        );
      } else if (isDepPt) {
        gPoints.appendChild(
          svgEl('circle', {
            cx: s.x.toFixed(2),
            cy: s.y.toFixed(2),
            r: 7.5,
            fill: 'none',
            stroke: '#4f46e5',
            'stroke-width': 1.4,
          })
        );
      }

      const dotFill =
        pt.role === 'given'
          ? '#0f172a'
          : isHovered
            ? '#d97706'
            : isCreatedNow
              ? '#2563eb'
              : isGoalPt
                ? '#059669'
                : '#ffffff';

      const dotStroke =
        pt.role === 'given'
          ? '#ffffff'
          : isHovered
            ? '#ffffff'
            : isCreatedNow
              ? '#ffffff'
              : isGoalPt
                ? '#ffffff'
                : '#334155';

      gPoints.appendChild(
        svgEl('circle', {
          cx: s.x.toFixed(2),
          cy: s.y.toFixed(2),
          r: pt.role === 'given' || isCreatedNow || isGoalPt ? 4.8 : 4.2,
          fill: dotFill,
          stroke: dotStroke,
          'stroke-width': 1.8,
        })
      );

      const ptHit = svgEl('circle', {
        cx: s.x.toFixed(2),
        cy: s.y.toFixed(2),
        r: 12,
        fill: 'transparent',
      });
      this.attachHoverHandlers(ptHit, pt.key);
      gHits.appendChild(ptHit);
    }

    // If a future point is hovered from the proof, show its ghost dot + label
    if (hKey && !visiblePointKeys.has(hKey)) {
      const futurePt = this.executed.pointsByKey.get(hKey);
      if (futurePt) {
        const s = worldToScreen(futurePt.coords, this.camera);
        gPoints.appendChild(
          svgEl('circle', {
            cx: s.x.toFixed(2),
            cy: s.y.toFixed(2),
            r: 4.2,
            fill: '#fef3c7',
            stroke: '#d97706',
            'stroke-width': 1.8,
          })
        );
      }
    }

    // 8. Point & Locus Labels
    if (this.options.showPointLabels) {
      for (const pt of finalSnap.points) {
        const isVisible = visiblePointKeys.has(pt.key) && pt.visible;
        const isHoveredFuture = hKey === pt.key && !isVisible;
        if (!isVisible && !isHoveredFuture) continue;

        const placed = pointLabelMap.get(pt.key);
        if (!placed) continue;

        const isActiveOrHovered = snap.createdKey === pt.key || hKey === pt.key;
        const dispDx = placed.x - placed.anchorX;
        const dispDy = placed.y - placed.anchorY;
        const dispLen = Math.hypot(dispDx, dispDy);
        if (dispLen >= 31) {
          const ux = dispDx / dispLen;
          const uy = dispDy / dispLen;
          gLabels.appendChild(
            svgEl('line', {
              x1: (placed.anchorX + ux * 6.8).toFixed(2),
              y1: (placed.anchorY + uy * 6.8).toFixed(2),
              x2: (placed.x - ux * 10.5).toFixed(2),
              y2: (placed.y - uy * 10.5).toFixed(2),
              stroke: isActiveOrHovered ? '#d97706' : '#94a3b8',
              'stroke-width': isActiveOrHovered ? 1.25 : 0.95,
              'stroke-dasharray': '2 2',
              opacity: isActiveOrHovered ? 0.9 : 0.7,
            })
          );
        }

        const cls = [
          'svg-point-label',
          pt.role === 'given' ? 'is-given' : 'is-constructed',
          isActiveOrHovered ? 'is-highlighted' : '',
          isHoveredFuture ? 'is-ghost' : '',
        ]
          .filter(Boolean)
          .join(' ');

        const labelEl = createMathLabelSvg(pt.label, placed.x, placed.y, cls);
        this.attachHoverHandlers(labelEl, pt.key);
        gLabels.appendChild(labelEl);
      }
    }

    for (const loc of finalSnap.loci) {
      const isVisible = visibleLocusKeys.has(loc.key);
      const shouldShow =
        (isVisible && (this.options.showLocusLabels || snap.createdKey === loc.key)) ||
        hKey === loc.key;
      if (!shouldShow) continue;

      const placed = locusLabelMap.get(loc.key);
      if (!placed) continue;

      const cls = [
        'svg-locus-label',
        hKey === loc.key ? 'is-highlighted' : '',
        !isVisible ? 'is-ghost' : '',
      ]
        .filter(Boolean)
        .join(' ');

      const labelEl = createMathLabelSvg(loc.label, placed.x, placed.y, cls);
      this.attachHoverHandlers(labelEl, loc.key);
      gLabels.appendChild(labelEl);
    }

    this.svg.append(
      gGoalFills,
      gGhost,
      gPast,
      gGiven,
      gActive,
      gGoalStrokes,
      gCues,
      gHover,
      gPoints,
      gHits,
      gLabels
    );
  }
}
