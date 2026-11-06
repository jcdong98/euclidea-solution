import type { LinearBoundsKind, Vec2 } from '../types/level';
import { add, approxEqPoint, det2, dist, dot, EPS, norm, normalize, rot90, scale, sub } from './vec2';

export type BoardLocus =
  | {
      readonly index: number;
      readonly key: string;
      readonly label: string;
      readonly role: 'given' | 'constructed';
      readonly kind: 'linear';
      readonly bounds: LinearBoundsKind;
      readonly displayBounds?: LinearBoundsKind;
      readonly anchor: Vec2;
      /** Non-zero direction vector (`p2 - p1` or canonical tool orientation). */
      readonly dir: Vec2;
      /** Second defining point when created from two points or given segment/ray. */
      readonly p2?: Vec2;
      readonly oriented: boolean;
      readonly showCarrier?: boolean;
      readonly showLabel?: boolean;
    }
  | {
      readonly index: number;
      readonly key: string;
      readonly label: string;
      readonly role: 'given' | 'constructed';
      readonly kind: 'circle';
      readonly center: Vec2;
      readonly radius: number;
      readonly showLabel?: boolean;
    };

export interface BoardPoint {
  readonly index: number;
  readonly key: string;
  readonly label: string;
  readonly role: 'given' | 'constructed';
  readonly coords: Vec2;
  readonly visible: boolean;
}

/**
 * Checks whether a point `p` already known to lie on the infinite carrier line `(anchor, dir)`
 * satisfies the linear subset bounds (`line`, `ray`, or `segment`).
 */
export function satisfiesLinearBounds(
  p: Vec2,
  loc: Extract<BoardLocus, { kind: 'linear' }>,
  tol = 1e-7
): boolean {
  if (loc.bounds === 'line') {
    return true;
  }
  const lenSq = dot(loc.dir, loc.dir);
  const t = dot(sub(p, loc.anchor), loc.dir) / lenSq;
  if (loc.bounds === 'ray') {
    return t >= -tol;
  }
  return t >= -tol && t <= 1 + tol;
}

/**
 * Projects a witness point onto a locus so `pointOnLocus` lies on the curve to machine precision.
 */
export function projectOntoLocus(witness: Vec2, loc: BoardLocus): Vec2 {
  if (loc.kind === 'linear') {
    const u = normalize(loc.dir);
    let t = dot(sub(witness, loc.anchor), u);
    const segLen = norm(loc.dir);
    if (loc.bounds === 'ray') {
      t = Math.max(0, t);
    } else if (loc.bounds === 'segment') {
      t = Math.max(0, Math.min(segLen, t));
    }
    return add(loc.anchor, scale(u, t));
  }
  const v = sub(witness, loc.center);
  const n = norm(v);
  if (n < EPS) {
    return { x: loc.center.x + loc.radius, y: loc.center.y };
  }
  return add(loc.center, scale(v, loc.radius / n));
}

export function intersectLineLine(
  l1: Extract<BoardLocus, { kind: 'linear' }>,
  l2: Extract<BoardLocus, { kind: 'linear' }>
): Vec2[] {
  const denom = det2(l1.dir, l2.dir);
  if (Math.abs(denom) < 1e-11) {
    return [];
  }
  const delta = sub(l2.anchor, l1.anchor);
  const t = det2(delta, l2.dir) / denom;
  const p = add(l1.anchor, scale(l1.dir, t));
  if (!satisfiesLinearBounds(p, l1) || !satisfiesLinearBounds(p, l2)) {
    return [];
  }
  return [p];
}

export function intersectLineCircle(
  line: Extract<BoardLocus, { kind: 'linear' }>,
  circle: Extract<BoardLocus, { kind: 'circle' }>
): Vec2[] {
  const u = normalize(line.dir);
  const rel = sub(line.anchor, circle.center);
  const b = dot(rel, u);
  const c = dot(rel, rel) - circle.radius * circle.radius;
  const disc = b * b - c;
  if (disc < -1e-9) {
    return [];
  }
  if (Math.abs(disc) <= 1e-9) {
    const p = add(line.anchor, scale(u, -b));
    return satisfiesLinearBounds(p, line) ? [p] : [];
  }
  const s = Math.sqrt(Math.max(0, disc));
  // t1 = -b - s gives dot(p1 - O, u) = -s < 0 (entry along line.dir)
  // t2 = -b + s gives dot(p2 - O, u) = +s > 0 (exit along line.dir)
  const p1 = add(line.anchor, scale(u, -b - s));
  const p2 = add(line.anchor, scale(u, -b + s));
  const results: Vec2[] = [];
  if (satisfiesLinearBounds(p1, line)) results.push(p1);
  if (satisfiesLinearBounds(p2, line)) results.push(p2);
  return results;
}

export function intersectCircleCircle(
  c1: Extract<BoardLocus, { kind: 'circle' }>,
  c2: Extract<BoardLocus, { kind: 'circle' }>
): Vec2[] {
  const dVec = sub(c2.center, c1.center);
  const d = norm(dVec);
  if (d < 1e-11) {
    return [];
  }
  if (d > c1.radius + c2.radius + 1e-9 || d < Math.abs(c1.radius - c2.radius) - 1e-9) {
    return [];
  }
  const a = (c1.radius * c1.radius - c2.radius * c2.radius + d * d) / (2 * d);
  const hSq = c1.radius * c1.radius - a * a;
  const u = scale(dVec, 1 / d);
  const base = add(c1.center, scale(u, a));
  if (Math.abs(hSq) <= 1e-9) {
    return [base];
  }
  const h = Math.sqrt(Math.max(0, hSq));
  // perp = rot90(u): det2(c2 - c1, (base + h * perp) - c1) = d * h > 0 (CCW / first)
  const perp = rot90(u);
  const pFirst = add(base, scale(perp, h));
  const pSecond = add(base, scale(perp, -h));
  return [pFirst, pSecond];
}

export function intersectLoci(loc1: BoardLocus, loc2: BoardLocus): Vec2[] {
  if (loc1.kind === 'linear' && loc2.kind === 'linear') {
    return intersectLineLine(loc1, loc2);
  }
  if (loc1.kind === 'linear' && loc2.kind === 'circle') {
    return intersectLineCircle(loc1, loc2);
  }
  if (loc1.kind === 'circle' && loc2.kind === 'linear') {
    return intersectLineCircle(loc2, loc1);
  }
  if (loc1.kind === 'circle' && loc2.kind === 'circle') {
    return intersectCircleCircle(loc1, loc2);
  }
  return [];
}

/**
 * Directed intersection selection for two oriented loci:
 * - Directed linear `(S, d)` & Circle `(O, r)` (in either argument order):
 *   `first = true`  <=> `dot(P - O, d) < 0`
 *   `first = false` <=> `dot(P - O, d) > 0`
 * - Circle `(O1, r1)` & Circle `(O2, r2)` (ordered `loc1`, `loc2`):
 *   `first = true`  <=> `det2(O2 - O1, P - O1) > 0`
 *   `first = false` <=> `det2(O2 - O1, P - O1) < 0`
 */
export function selectDirectedInter(
  first: boolean,
  loc1: BoardLocus,
  loc2: BoardLocus
): Vec2 {
  const line =
    loc1.kind === 'linear' && loc2.kind === 'circle'
      ? loc1
      : loc2.kind === 'linear' && loc1.kind === 'circle'
        ? loc2
        : null;
  const circle =
    loc1.kind === 'linear' && loc2.kind === 'circle'
      ? loc2
      : loc2.kind === 'linear' && loc1.kind === 'circle'
        ? loc1
        : null;

  if (line && circle) {
    if (!line.oriented) {
      throw new Error(`Directed intersection requires an oriented linear locus (${line.key})`);
    }
    const pts = intersectLineCircle(line, circle);
    for (const p of pts) {
      const sign = dot(sub(p, circle.center), line.dir);
      if (first && sign < -1e-8) return p;
      if (!first && sign > 1e-8) return p;
    }
    throw new Error(`No ${first ? 'interFirst' : 'interSecond'} point on ${loc1.key} ∩ ${loc2.key}`);
  }

  if (loc1.kind === 'circle' && loc2.kind === 'circle') {
    const pts = intersectCircleCircle(loc1, loc2);
    const axis = sub(loc2.center, loc1.center);
    for (const p of pts) {
      const sign = det2(axis, sub(p, loc1.center));
      if (first && sign > 1e-8) return p;
      if (!first && sign < -1e-8) return p;
    }
    throw new Error(`No ${first ? 'interFirst' : 'interSecond'} point on ${loc1.key} ∩ ${loc2.key}`);
  }

  throw new Error(`Directed intersection is undefined for ${loc1.kind} and ${loc2.kind}`);
}

export function selectOtherInterPoint(
  loc1: BoardLocus,
  loc2: BoardLocus,
  excluded: Vec2
): Vec2 {
  const pts = intersectLoci(loc1, loc2);
  if (pts.length < 2) {
    throw new Error(
      `Expected 2 intersections on ${loc1.key} ∩ ${loc2.key} for otherInterPoint, got ${pts.length}`
    );
  }
  const hasExcluded = pts.some((p) => approxEqPoint(p, excluded, 1e-5));
  if (!hasExcluded) {
    throw new Error(
      `Excluded point (${excluded.x.toFixed(4)}, ${excluded.y.toFixed(4)}) does not lie on ${loc1.key} ∩ ${loc2.key}`
    );
  }
  return dist(pts[0], excluded) > dist(pts[1], excluded) ? pts[0] : pts[1];
}
