import { describe, expect, it } from 'vitest';
import { CHAPTERS_CATALOG, getLevelById, IMPLEMENTED_LEVELS } from '../src/data';
import { executeSolution } from '../src/geometry/executor';
import { dist, dot, midpoint, norm, sub } from '../src/geometry/vec2';

function extractProofChipKeys(text: string): string[] {
  const keys: string[] = [];
  const re = /\[\[([^\]]+)\]\]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const raw = m[1];
    const pipe = raw.indexOf('|');
    keys.push((pipe >= 0 ? raw.slice(0, pipe) : raw).trim());
  }
  return keys;
}

describe('Chapter Catalog & Implemented Alpha Levels', () => {
  it('totals exactly 149 levels across 15 chapters', () => {
    expect(CHAPTERS_CATALOG.length).toBe(15);
    const total = CHAPTERS_CATALOG.reduce((sum, ch) => sum + ch.totalLevels, 0);
    expect(total).toBe(149);
  });

  it('verifies all implemented solutions, entity indices, star budgets, and proof chips', () => {
    for (const level of IMPLEMENTED_LEVELS) {
      const coveredStars = new Set<string>();
      for (const sol of level.solutions) {
        for (const s of sol.starsEarned) coveredStars.add(s);

        let ptCount = level.initPoints.length;
        let locCount = level.initLoci.length;
        sol.steps.forEach((step, idx) => {
          expect(step.stepNumber).toBe(idx + 1);
          if (step.entityType === 'point') {
            expect(
              step.entityIndex,
              `Point index mismatch at ${level.shortId}/${sol.id} step ${step.stepNumber}`
            ).toBe(ptCount);
            ptCount += 1;
          } else {
            expect(
              step.entityIndex,
              `Locus index mismatch at ${level.shortId}/${sol.id} step ${step.stepNumber}`
            ).toBe(locCount);
            locCount += 1;
          }
        });

        const executed = executeSolution(level, sol);
        const finalSnap = executed.snapshots[executed.snapshots.length - 1];

        expect(finalSnap.cumulativeL).toBe(sol.expectedLCost);
        expect(finalSnap.cumulativeE).toBe(sol.expectedECost);

        if (sol.starsEarned.includes('L')) {
          expect(finalSnap.cumulativeL).toBeLessThanOrEqual(level.targetL);
        }
        if (sol.starsEarned.includes('E')) {
          expect(finalSnap.cumulativeE).toBeLessThanOrEqual(level.targetE);
        }
        if (sol.starsEarned.includes('V')) {
          expect(finalSnap.completedVariants.length).toBe(level.numVariants);
        } else {
          expect(finalSnap.completedVariants.length).toBeGreaterThanOrEqual(1);
        }

        const proseBlocks = [
          sol.proof.keyIdea ?? '',
          ...sol.proof.steps,
          sol.proof.variantNote ?? '',
        ];
        for (const block of proseBlocks) {
          for (const key of extractProofChipKeys(block)) {
            const exists = executed.pointsByKey.has(key) || executed.lociByKey.has(key);
            expect(exists, `Missing symbol "${key}" in ${level.shortId}/${sol.id}`).toBe(true);
          }
        }
      }

      expect(coveredStars.has('L')).toBe(true);
      expect(coveredStars.has('E')).toBe(true);
      if (level.numVariants > 1) {
        expect(coveredStars.has('V')).toBe(true);
      } else {
        expect(coveredStars.has('V')).toBe(false);
      }
    }
  });

  it('numerically verifies Alpha T1 (Equilateral Triangle) and Alpha 1.1 (Angle of 60°)', () => {
    const t1 = getLevelById('Alpha', 'T1')!;
    const l1 = getLevelById('Alpha', 'L1')!;

    const t1v = executeSolution(t1, t1.solutions[1]);
    const A = t1v.pointsByKey.get('A')!.coords;
    const B = t1v.pointsByKey.get('B')!.coords;
    const C1 = t1v.pointsByKey.get('C₁')!.coords;
    const C2 = t1v.pointsByKey.get('C₂')!.coords;
    const side = dist(A, B);

    expect(dist(C1, A)).toBeCloseTo(side, 11);
    expect(dist(C1, B)).toBeCloseTo(side, 11);
    expect(dist(C2, A)).toBeCloseTo(side, 11);
    expect(dist(C2, B)).toBeCloseTo(side, 11);
    expect(dist(C1, C2)).toBeCloseTo(Math.sqrt(3) * side, 11);

    const l1v = executeSolution(l1, l1.solutions[1]);
    const vA = l1v.pointsByKey.get('A')!.coords;
    const rayDir =
      l1.initLoci[0].kind === 'linear'
        ? sub(l1.initLoci[0].p2, l1.initLoci[0].p1)
        : { x: 1, y: 0 };
    const pC1 = l1v.pointsByKey.get('C₁')!.coords;
    const pC2 = l1v.pointsByKey.get('C₂')!.coords;

    const cos1 = dot(rayDir, sub(pC1, vA)) / (norm(rayDir) * dist(pC1, vA));
    const cos2 = dot(rayDir, sub(pC2, vA)) / (norm(rayDir) * dist(pC2, vA));
    expect(cos1).toBeCloseTo(0.5, 11);
    expect(cos2).toBeCloseTo(0.5, 11);
    expect(dist(pC1, pC2)).toBeGreaterThan(1);
  });

  it('numerically verifies Alpha 1.2, T3, and 1.3 (Perpendicular Bisector & Midpoint)', () => {
    const l2 = getLevelById('Alpha', 'L2')!;
    const l2Exec = executeSolution(l2, l2.solutions[0]);
    const A = l2Exec.pointsByKey.get('A')!.coords;
    const B = l2Exec.pointsByKey.get('B')!.coords;
    const bis1 = l2Exec.lociByKey.get('line(C₁, C₂)')!;
    expect(bis1.kind).toBe('linear');
    if (bis1.kind === 'linear') {
      expect(dot(bis1.dir, sub(B, A))).toBeCloseTo(0, 11);
      expect(dist(bis1.anchor, A)).toBeCloseTo(dist(bis1.anchor, B), 11);
    }

    const t3 = getLevelById('Alpha', 'T3')!;
    const t3Exec = executeSolution(t3, t3.solutions[0]);
    const bis2 = t3Exec.lociByKey.get('perpBisector(A, B)')!;
    expect(bis2.kind).toBe('linear');
    if (bis2.kind === 'linear') {
      expect(dot(bis2.dir, sub(B, A))).toBeCloseTo(0, 11);
      expect(dist(bis2.anchor, A)).toBeCloseTo(dist(bis2.anchor, B), 11);
    }

    const l3 = getLevelById('Alpha', 'L3')!;
    const l3Exec = executeSolution(l3, l3.solutions[0]);
    const pA = l3Exec.pointsByKey.get('A')!.coords;
    const pB = l3Exec.pointsByKey.get('B')!.coords;
    const pM = l3Exec.pointsByKey.get('M')!.coords;
    const expectedMid = midpoint(pA, pB);
    expect(pM.x).toBeCloseTo(expectedMid.x, 11);
    expect(pM.y).toBeCloseTo(expectedMid.y, 11);
  });

  it('numerically verifies Alpha 1.4 (Circle in Square) and Alpha 1.5 (Rhombus in Rectangle)', () => {
    const l4 = getLevelById('Alpha', 'L4')!;
    const l4Exec = executeSolution(l4, l4.solutions[0]);
    const sqA = l4Exec.pointsByKey.get('A')!.coords;
    const sqB = l4Exec.pointsByKey.get('B')!.coords;
    const sqC = l4Exec.pointsByKey.get('C')!.coords;
    const incircle = l4Exec.lociByKey.get('circle(O, M_AB)')!;
    expect(incircle.kind).toBe('circle');
    if (incircle.kind === 'circle') {
      const expectedCenter = midpoint(sqA, sqC);
      expect(incircle.center.x).toBeCloseTo(expectedCenter.x, 11);
      expect(incircle.center.y).toBeCloseTo(expectedCenter.y, 11);
      expect(incircle.radius).toBeCloseTo(0.5 * dist(sqA, sqB), 11);
    }

    const l5 = getLevelById('Alpha', 'L5')!;
    const l5v = executeSolution(l5, l5.solutions[1]);
    const rA = l5v.pointsByKey.get('A')!.coords;
    const rB = l5v.pointsByKey.get('B')!.coords;
    const rC = l5v.pointsByKey.get('C')!.coords;
    const rD = l5v.pointsByKey.get('D')!.coords;
    const E1 = l5v.pointsByKey.get('E₁')!.coords;
    const F1 = l5v.pointsByKey.get('F₁')!.coords;
    const E2 = l5v.pointsByKey.get('E₂')!.coords;
    const F2 = l5v.pointsByKey.get('F₂')!.coords;

    const s1 = dist(rA, E1);
    expect(dist(E1, rC)).toBeCloseTo(s1, 11);
    expect(dist(rC, F1)).toBeCloseTo(s1, 11);
    expect(dist(F1, rA)).toBeCloseTo(s1, 11);
    expect(dist(rA, E1) + dist(E1, rB)).toBeCloseTo(dist(rA, rB), 11);

    const s2 = dist(rB, E2);
    expect(dist(E2, rD)).toBeCloseTo(s2, 11);
    expect(dist(rD, F2)).toBeCloseTo(s2, 11);
    expect(dist(F2, rB)).toBeCloseTo(s2, 11);
    expect(dist(rA, E2) + dist(E2, rB)).toBeCloseTo(dist(rA, rB), 11);
  });

  it('numerically verifies Alpha 1.6 (Circle Center 2L & 5E) and Alpha 1.7 (Inscribed Square 6L & 7E)', () => {
    expect(IMPLEMENTED_LEVELS.filter((l) => l.chapterId === 'Alpha').length).toBe(9);
    const alphaMeta = CHAPTERS_CATALOG.find((c) => c.id === 'Alpha')!;
    expect(alphaMeta.levels.every((l) => l.implemented)).toBe(true);

    const l6 = getLevelById('Alpha', 'L6')!;
    const givenCircle = l6.initLoci[0];
    expect(givenCircle.kind).toBe('circle');
    if (givenCircle.kind === 'circle') {
      for (const sol of l6.solutions) {
        const exec = executeSolution(l6, sol);
        const foundO = exec.pointsByKey.get('O')!.coords;
        expect(foundO.x).toBeCloseTo(givenCircle.center.x, 11);
        expect(foundO.y).toBeCloseTo(givenCircle.center.y, 11);
      }
    }

    const l7 = getLevelById('Alpha', 'L7')!;
    for (const sol of l7.solutions) {
      const exec = executeSolution(l7, sol);
      const O = exec.pointsByKey.get('O')!.coords;
      const A = exec.pointsByKey.get('A')!.coords;
      const V1 = exec.pointsByKey.get('V₁')!.coords;
      const C = exec.pointsByKey.get('C')!.coords;
      const V2 = exec.pointsByKey.get('V₂')!.coords;

      const R = dist(O, A);
      const sqSide = Math.sqrt(2) * R;
      expect(dist(O, V1)).toBeCloseTo(R, 11);
      expect(dist(O, C)).toBeCloseTo(R, 11);
      expect(dist(O, V2)).toBeCloseTo(R, 11);

      expect(dist(A, V1)).toBeCloseTo(sqSide, 11);
      expect(dist(V1, C)).toBeCloseTo(sqSide, 11);
      expect(dist(C, V2)).toBeCloseTo(sqSide, 11);
      expect(dist(V2, A)).toBeCloseTo(sqSide, 11);
      expect(dot(sub(V1, A), sub(V2, A))).toBeCloseTo(0, 11);
    }
  });
});
