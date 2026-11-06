import type { Vec2 } from '../types/level';

export const EPS = 1e-9;

export function vec(x: number, y: number): Vec2 {
  return { x, y };
}

export function add(a: Vec2, b: Vec2): Vec2 {
  return { x: a.x + b.x, y: a.y + b.y };
}

export function sub(a: Vec2, b: Vec2): Vec2 {
  return { x: a.x - b.x, y: a.y - b.y };
}

export function scale(v: Vec2, s: number): Vec2 {
  return { x: v.x * s, y: v.y * s };
}

export function midpoint(a: Vec2, b: Vec2): Vec2 {
  return { x: 0.5 * (a.x + b.x), y: 0.5 * (a.y + b.y) };
}

export function lerp(a: Vec2, b: Vec2, t: number): Vec2 {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

export function dot(u: Vec2, v: Vec2): number {
  return u.x * v.x + u.y * v.y;
}

/**
 * Signed 2D determinant (`det2 u v = u.x * v.y - u.y * v.x`).
 * Positive when rotating counterclockwise from `u` to `v` by an angle in `(0, pi)`.
 */
export function det2(u: Vec2, v: Vec2): number {
  return u.x * v.y - u.y * v.x;
}

/**
 * Counterclockwise 90-degree rotation (`rot90 (x, y) = (-y, x)`).
 */
export function rot90(v: Vec2): Vec2 {
  return { x: -v.y, y: v.x };
}

export function normSq(v: Vec2): number {
  return v.x * v.x + v.y * v.y;
}

export function norm(v: Vec2): number {
  return Math.hypot(v.x, v.y);
}

export function dist(a: Vec2, b: Vec2): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function normalize(v: Vec2): Vec2 {
  const n = norm(v);
  if (n < 1e-15) {
    throw new Error('Cannot normalize zero vector');
  }
  return { x: v.x / n, y: v.y / n };
}

export function approxEqPoint(a: Vec2, b: Vec2, tol = 1e-7): boolean {
  return dist(a, b) <= tol;
}
