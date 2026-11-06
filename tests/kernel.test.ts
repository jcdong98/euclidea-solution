import { describe, expect, it } from 'vitest';
import { executeSolution, getActionCost, getNavigableStepIndices } from '../src/geometry/executor';
import { selectDirectedInter, selectOtherInterPoint, type BoardLocus } from '../src/geometry/intersections';
import { det2, dist, dot, sub } from '../src/geometry/vec2';
import type { LevelSpecData, SolutionSpec } from '../src/types/level';

describe('Geometry Intersections & Directed Conventions', () => {
  it('selects circle-circle interFirst (CCW > 0) and interSecond (CW < 0)', () => {
    const c1: BoardLocus = {
      index: 0,
      key: 'c1',
      label: 'c1',
      role: 'constructed',
      kind: 'circle',
      center: { x: 0, y: 0 },
      radius: 2,
    };
    const c2: BoardLocus = {
      index: 1,
      key: 'c2',
      label: 'c2',
      role: 'constructed',
      kind: 'circle',
      center: { x: 2, y: 0 },
      radius: 2,
    };

    const pFirst = selectDirectedInter(true, c1, c2);
    const pSecond = selectDirectedInter(false, c1, c2);

    expect(pFirst.x).toBeCloseTo(1, 9);
    expect(pFirst.y).toBeCloseTo(Math.sqrt(3), 9);
    expect(det2(sub(c2.center, c1.center), sub(pFirst, c1.center))).toBeGreaterThan(0);

    expect(pSecond.x).toBeCloseTo(1, 9);
    expect(pSecond.y).toBeCloseTo(-Math.sqrt(3), 9);
    expect(det2(sub(c2.center, c1.center), sub(pSecond, c1.center))).toBeLessThan(0);

    const other = selectOtherInterPoint(c1, c2, pFirst);
    expect(dist(other, pSecond)).toBeLessThan(1e-12);
  });

  it('selects line-circle interFirst and interSecond regardless of argument order', () => {
    const line: BoardLocus = {
      index: 0,
      key: 'l',
      label: 'l',
      role: 'constructed',
      kind: 'linear',
      bounds: 'line',
      anchor: { x: -3, y: 1 },
      dir: { x: 2, y: 0 },
      oriented: true,
    };
    const circle: BoardLocus = {
      index: 1,
      key: 'c',
      label: 'c',
      role: 'constructed',
      kind: 'circle',
      center: { x: 0, y: 0 },
      radius: 2,
    };

    const pEntry1 = selectDirectedInter(true, line, circle);
    const pEntry2 = selectDirectedInter(true, circle, line);
    const pExit1 = selectDirectedInter(false, line, circle);
    const pExit2 = selectDirectedInter(false, circle, line);

    expect(dist(pEntry1, pEntry2)).toBeLessThan(1e-12);
    expect(dist(pExit1, pExit2)).toBeLessThan(1e-12);
    expect(dot(sub(pEntry1, circle.center), line.dir)).toBeLessThan(0);
    expect(dot(sub(pExit1, circle.center), line.dir)).toBeGreaterThan(0);
    expect(pEntry1.x).toBeCloseTo(-Math.sqrt(3), 9);
    expect(pExit1.x).toBeCloseTo(Math.sqrt(3), 9);
  });
});

describe('Construction Action Executor (All 13 Action Types & Costs)', () => {
  it('executes primitive and composite tools with exact Euclidean invariants and L/E costs', () => {
    const solution: SolutionSpec = {
      id: 'all-tools-check',
      tabTitle: 'Kernel Check',
      starsEarned: ['L', 'E', 'V'],
      expectedLCost: 7,
      expectedECost: 21,
      goalVariants: [],
      proof: {
        steps: ['Step 1'],
      },
      steps: [
        {
          stepNumber: 1,
          entityIndex: 2,
          entityType: 'point',
          key: 'P_free',
          label: 'P',
          expr: 'P (freePoint)',
          rationale: 'Free point above AB',
          action: { kind: 'freePoint', coords: { x: 0.4, y: 2.2 } },
        },
        {
          stepNumber: 2,
          entityIndex: 1,
          entityType: 'locus',
          key: 'pb',
          label: 'm',
          expr: 'm = perpBisector(A, B)',
          rationale: 'Perpendicular bisector of AB',
          action: { kind: 'usePerpBisector', p1: 0, p2: 1 },
        },
        {
          stepNumber: 3,
          entityIndex: 3,
          entityType: 'point',
          key: 'M',
          label: 'M',
          expr: 'M ∈ line(A, B) ∩ m',
          rationale: 'Midpoint M of AB',
          action: { kind: 'interPoint', locus1: 0, locus2: 1 },
        },
        {
          stepNumber: 4,
          entityIndex: 2,
          entityType: 'locus',
          key: 'perpP',
          label: 'h',
          expr: 'h = perp(line(A, B), P)',
          rationale: 'Drop perpendicular from P to AB',
          action: { kind: 'usePerp', locus: 0, point: 2 },
        },
        {
          stepNumber: 5,
          entityIndex: 3,
          entityType: 'locus',
          key: 'parP',
          label: 'q',
          expr: 'q = parallel(line(A, B), P)',
          rationale: 'Parallel to AB through P',
          action: { kind: 'useParallel', locus: 0, point: 2 },
        },
        {
          stepNumber: 6,
          entityIndex: 4,
          entityType: 'locus',
          key: 'bis',
          label: 'b',
          expr: 'b = angleBisector(B, A, P)',
          rationale: 'Angle bisector of angle BAP',
          action: { kind: 'useAngleBisector', arm1: 1, vertex: 0, arm2: 2 },
        },
        {
          stepNumber: 7,
          entityIndex: 5,
          entityType: 'locus',
          key: 'comp',
          label: 'c',
          expr: 'c = compass(A, M, P)',
          rationale: 'Transfer radius |AM| to center P',
          action: { kind: 'useCompass', radiusStart: 0, radiusEnd: 3, center: 2 },
        },
        {
          stepNumber: 8,
          entityIndex: 4,
          entityType: 'point',
          key: 'Q',
          label: 'Q',
          expr: 'Q ∈ q ∩ c (1st)',
          rationale: 'Directed entry intersection of parallel line q with circle c',
          action: { kind: 'interFirst', locus1: 3, locus2: 5 },
        },
        {
          stepNumber: 9,
          entityIndex: 5,
          entityType: 'point',
          key: 'R_on',
          label: 'R',
          expr: 'R ∈ c',
          rationale: 'Point on circle c',
          action: { kind: 'pointOnLocus', locus: 5, witness: { x: 0.4, y: 5.0 } },
        },
        {
          stepNumber: 10,
          entityIndex: 6,
          entityType: 'locus',
          key: 'lQR',
          label: 'l',
          expr: 'l = line(Q, R)',
          rationale: 'Line through Q and R',
          action: { kind: 'useLine', p1: 4, p2: 5 },
        },
        {
          stepNumber: 11,
          entityIndex: 7,
          entityType: 'locus',
          key: 'cMA',
          label: 'c2',
          expr: 'c2 = circle(M, A)',
          rationale: 'Circle centered at M passing through A',
          action: { kind: 'useCircle', center: 3, through: 0 },
        },
      ],
    };

    const level: LevelSpecData = {
      code: '0.0',
      shortId: 'Test',
      chapterId: 'Alpha',
      chapterNumber: 1,
      title: 'Kernel Test',
      isTutorial: false,
      prompt: 'Test level',
      targetL: 7,
      targetE: 21,
      numVariants: 1,
      allowedTools: ['line', 'circle', 'perpBisector', 'perp', 'angleBisector', 'parallel', 'compass'],
      initPoints: [
        { index: 0, key: 'A', label: 'A', coords: { x: -2, y: 0 } },
        { index: 1, key: 'B', label: 'B', coords: { x: 2, y: 0 } },
      ],
      initLoci: [
        {
          index: 0,
          key: 'line(A, B)',
          label: 'AB',
          kind: 'linear',
          bounds: 'line',
          p1: { x: -2, y: 0 },
          p2: { x: 2, y: 0 },
          oriented: true,
        },
      ],
      solutions: [solution],
    };

    const executed = executeSolution(level, solution);
    const finalSnap = executed.snapshots[executed.snapshots.length - 1];

    expect(finalSnap.cumulativeL).toBe(7);
    expect(finalSnap.cumulativeE).toBe(21);

    const M = executed.pointsByKey.get('M')!;
    expect(M.coords.x).toBeCloseTo(0, 9);
    expect(M.coords.y).toBeCloseTo(0, 9);

    const Q = executed.pointsByKey.get('Q')!;
    expect(Q.coords.x).toBeCloseTo(-1.6, 9);
    expect(Q.coords.y).toBeCloseTo(2.2, 9);

    const R = executed.pointsByKey.get('R_on')!;
    expect(dist(R.coords, { x: 0.4, y: 2.2 })).toBeCloseTo(2, 9);

    const navSkip = getNavigableStepIndices(solution, true);
    const navFull = getNavigableStepIndices(solution, false);
    expect(navFull.length).toBe(12);
    expect(navSkip).toEqual([0, 2, 4, 5, 6, 7, 10, 11]);
    expect(getActionCost({ kind: 'useCompass', radiusStart: 0, radiusEnd: 1, center: 2 })).toEqual({
      l: 1,
      e: 5,
    });
  });
});
