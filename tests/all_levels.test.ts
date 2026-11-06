import katex from 'katex';
import { describe, expect, it } from 'vitest';
import { CHAPTERS_CATALOG, getLevelById, IMPLEMENTED_LEVELS } from '../src/data';
import { computeSolutionBounds, fitCameraToBounds, worldToScreen } from '../src/geometry/camera';
import { executeSolution } from '../src/geometry/executor';
import { intersectLineLine } from '../src/geometry/intersections';
import { det2, dist, dot, midpoint, norm, normalize, sub } from '../src/geometry/vec2';
import { computePointLabelLayout } from '../src/render/labelLayout';
import type { ConstructionAction, ToolKind } from '../src/types/level';

function actionToolKind(act: ConstructionAction): ToolKind | null {
  switch (act.kind) {
    case 'freePoint':
    case 'pointOnLocus':
    case 'interPoint':
    case 'otherInterPoint':
    case 'interFirst':
    case 'interSecond':
      return null;
    case 'useLine':
      return 'line';
    case 'useCircle':
      return 'circle';
    case 'usePerpBisector':
      return 'perpBisector';
    case 'usePerp':
      return 'perp';
    case 'useAngleBisector':
      return 'angleBisector';
    case 'useParallel':
      return 'parallel';
    case 'useCompass':
      return 'compass';
  }
}

const RAW_PROJECT_FILES = import.meta.glob<string>(
  [
    '../src/**/*.{ts,css}',
    '../tests/**/*.ts',
    '../public/**/*.svg',
    '../index.html',
    '../*.md',
    '../package.json',
  ],
  { query: '?raw', import: 'default', eager: true }
);

describe('Complete 15-Chapter / 149-Level Suite (Alpha through Omicron)', () => {
  it('registers all 15 chapters and all 149 levels with 1-to-1 catalog alignment', () => {
    expect(CHAPTERS_CATALOG.length).toBe(15);
    expect(IMPLEMENTED_LEVELS.length).toBe(149);

    let totalCatalogLevels = 0;
    const seenIds = new Set<string>();
    const seenCodes = new Set<string>();

    for (const ch of CHAPTERS_CATALOG) {
      expect(ch.levels.length, `Chapter ${ch.id} level count mismatch`).toBe(ch.totalLevels);
      totalCatalogLevels += ch.levels.length;

      for (const summary of ch.levels) {
        expect(summary.implemented, `${ch.id}:${summary.shortId} must be implemented`).toBe(true);
        const uid = `${ch.id}:${summary.shortId}`;
        const ucode = `${ch.id}:${summary.code}`;
        expect(seenIds.has(uid), `Duplicate level id ${uid}`).toBe(false);
        expect(seenCodes.has(ucode), `Duplicate level code ${ucode}`).toBe(false);
        seenIds.add(uid);
        seenCodes.add(ucode);

        const level = getLevelById(ch.id, summary.shortId);
        expect(level, `Missing level implementation for ${uid}`).toBeDefined();
        expect(summary.title.includes('\\'), `${uid} summary title has stray backslash: ${summary.title}`).toBe(false);
        expect(level!.title.includes('\\'), `${uid} level title has stray backslash: ${level!.title}`).toBe(false);
        expect(level!.prompt.includes('\\'), `${uid} prompt has stray backslash: ${level!.prompt}`).toBe(false);
        expect(level!.code).toBe(summary.code);
        expect(level!.title).toBe(summary.title);
        expect(level!.targetL).toBe(summary.targetL);
        expect(level!.targetE).toBe(summary.targetE);
        expect(level!.numVariants).toBe(summary.numVariants);
      }
    }

    expect(totalCatalogLevels).toBe(149);
  });

  it('executes every solution across all 149 levels with full L/E/V coverage, Step 0 cleanliness, and valid chips', () => {
    let totalSolutions = 0;

    for (const level of IMPLEMENTED_LEVELS) {
      const tag = `${level.chapterId}:${level.shortId} (${level.title})`;
      expect(level.solutions.length, `${tag} must have 1..3 deduplicated solution tabs`).toBeGreaterThanOrEqual(1);
      expect(level.solutions.length, `${tag} must have at most 3 solution tabs`).toBeLessThanOrEqual(3);

      const allowedSet = new Set<ToolKind>(level.allowedTools);
      const coveredStars = new Set<string>();

      // Check tab non-redundancy: when > 1 tabs exist, no tab's starsEarned is a subset of another tab's starsEarned
      if (level.solutions.length > 1) {
        for (let i = 0; i < level.solutions.length; i++) {
          const sA = new Set(level.solutions[i].starsEarned);
          for (let j = 0; j < level.solutions.length; j++) {
            if (i === j) continue;
            const sB = new Set(level.solutions[j].starsEarned);
            const isSubset = [...sA].every((st) => sB.has(st));
            expect(
              isSubset,
              `Redundant tab "${level.solutions[i].tabTitle}" dominated by "${level.solutions[j].tabTitle}" in ${tag}`
            ).toBe(false);
          }
        }
      }

      for (const sol of level.solutions) {
        totalSolutions += 1;
        const solTag = `${tag} / ${sol.id}`;
        expect(sol.starsEarned.length, `${solTag} must earn at least 1 star`).toBeGreaterThanOrEqual(1);
        for (const s of sol.starsEarned) coveredStars.add(s);

        const usedPointKeys = new Set<string>(level.initPoints.map((p) => p.key));
        const usedLocusKeys = new Set<string>(level.initLoci.map((l) => l.key));

        let ptCount = level.initPoints.length;
        let locCount = level.initLoci.length;

        sol.steps.forEach((step, idx) => {
          expect(step.stepNumber, `${solTag} stepNumber`).toBe(idx + 1);
          const tk = actionToolKind(step.action);
          if (tk !== null) {
            expect(allowedSet.has(tk), `${solTag} step ${step.stepNumber} uses disallowed tool "${tk}"`).toBe(true);
          }
          if (step.entityType === 'point') {
            expect(step.entityIndex, `${solTag} point entityIndex at step ${step.stepNumber}`).toBe(ptCount);
            expect(step.key.endsWith('_'), `${solTag} trailing underscore in point key "${step.key}"`).toBe(false);
            expect(usedPointKeys.has(step.key), `${solTag} duplicate point key "${step.key}"`).toBe(false);
            usedPointKeys.add(step.key);
            ptCount += 1;
          } else {
            expect(step.entityIndex, `${solTag} locus entityIndex at step ${step.stepNumber}`).toBe(locCount);
            expect(usedLocusKeys.has(step.key), `${solTag} duplicate locus key "${step.key}"`).toBe(false);
            usedLocusKeys.add(step.key);
            locCount += 1;
          }
        });

        const executed = executeSolution(level, sol);
        expect(executed.snapshots.length).toBe(sol.steps.length + 1);

        // Step 0 must NEVER pre-complete any variant
        expect(
          executed.snapshots[0].completedVariants.length,
          `${solTag} Step 0 should have 0 completed variants`
        ).toBe(0);

        const finalSnap = executed.snapshots[executed.snapshots.length - 1];

        // Finite non-degenerate geometry on all board objects
        for (const pt of finalSnap.points) {
          expect(Number.isFinite(pt.coords.x), `${solTag} NaN/Inf point x on ${pt.key}`).toBe(true);
          expect(Number.isFinite(pt.coords.y), `${solTag} NaN/Inf point y on ${pt.key}`).toBe(true);
        }
        for (const loc of finalSnap.loci) {
          if (loc.kind === 'circle') {
            expect(Number.isFinite(loc.center.x), `${solTag} NaN/Inf circle x on ${loc.key}`).toBe(true);
            expect(Number.isFinite(loc.center.y), `${solTag} NaN/Inf circle y on ${loc.key}`).toBe(true);
            expect(loc.radius, `${solTag} degenerate circle radius on ${loc.key}`).toBeGreaterThan(1e-6);
          } else {
            expect(Number.isFinite(loc.anchor.x), `${solTag} NaN/Inf line anchor on ${loc.key}`).toBe(true);
            expect(norm(loc.dir), `${solTag} degenerate linear dir on ${loc.key}`).toBeGreaterThan(1e-8);
          }
        }

        expect(finalSnap.cumulativeL, `${solTag} L cost`).toBe(sol.expectedLCost);
        expect(finalSnap.cumulativeE, `${solTag} E cost`).toBe(sol.expectedECost);

        if (sol.starsEarned.includes('L')) {
          expect(finalSnap.cumulativeL, `${solTag} exceeds targetL`).toBeLessThanOrEqual(level.targetL);
        }
        if (sol.starsEarned.includes('E')) {
          expect(finalSnap.cumulativeE, `${solTag} exceeds targetE`).toBeLessThanOrEqual(level.targetE);
        }
        if (level.numVariants === 1) {
          expect(
            sol.starsEarned.includes('V'),
            `${solTag} must not include V star when numVariants === 1`
          ).toBe(false);
        }
        if (sol.starsEarned.includes('V')) {
          expect(level.numVariants, `${solTag} V star requires numVariants > 1`).toBeGreaterThan(1);
          expect(finalSnap.completedVariants.length, `${solTag} V-star variant count`).toBe(level.numVariants);
        } else {
          expect(finalSnap.completedVariants.length, `${solTag} completed variant count`).toBeGreaterThanOrEqual(1);
        }

        // Verify all GoalVariantFootprint references exist
        for (const gv of sol.goalVariants) {
          expect(
            gv.pointKeys.length + gv.locusKeys.length,
            `${solTag} variant ${gv.variantIndex} must require >= 1 constructed object`
          ).toBeGreaterThanOrEqual(1);
          for (const pk of gv.pointKeys) {
            expect(executed.pointsByKey.has(pk), `${solTag} missing variant pointKey "${pk}"`).toBe(true);
          }
          for (const lk of gv.locusKeys) {
            expect(executed.lociByKey.has(lk), `${solTag} missing variant locusKey "${lk}"`).toBe(true);
          }
          for (const pk of gv.highlightPolygonKeys ?? []) {
            expect(executed.pointsByKey.has(pk), `${solTag} missing highlightPolygonKey "${pk}"`).toBe(true);
          }
          for (const [u, v] of gv.highlightSegmentPairs ?? []) {
            expect(executed.pointsByKey.has(u), `${solTag} missing segment key "${u}"`).toBe(true);
            expect(executed.pointsByKey.has(v), `${solTag} missing segment key "${v}"`).toBe(true);
          }
          for (const ck of gv.highlightCircleKeys ?? []) {
            expect(executed.lociByKey.has(ck), `${solTag} missing highlightCircleKey "${ck}"`).toBe(true);
          }
          for (const lk of gv.highlightLocusKeys ?? []) {
            expect(executed.lociByKey.has(lk), `${solTag} missing highlightLocusKey "${lk}"`).toBe(true);
          }
        }

        // Verify proof prose is non-empty, free of placeholders, KaTeX-valid, and all [[chip]] references exist
        expect(sol.proof.steps.length, `${solTag} proof steps must be non-empty`).toBeGreaterThanOrEqual(1);
        const constructedKeys = new Set<string>(sol.steps.map((s) => s.key));
        const placeholderRe =
          /Starting from the given configuration, the auxiliary construction|Directly applying the allowed Euclidean tools produces/i;
        const proseBlocks = [
          sol.proof.keyIdea ?? '',
          ...sol.proof.steps,
          sol.proof.variantNote ?? '',
        ];
        let constructedChipRefs = 0;
        for (const block of proseBlocks) {
          if (!block) continue;
          expect(placeholderRe.test(block), `${solTag} contains placeholder proof text`).toBe(false);
          expect(block.includes('$$'), `${solTag} uses display math $$ instead of inline $`).toBe(false);

          let dollarCount = 0;
          for (const ch of block) {
            if (ch === '$') dollarCount += 1;
          }
          expect(dollarCount % 2, `${solTag} has unbalanced $ delimiters`).toBe(0);

          const tokenRe = /\[\[([^\]]+)\]\]|\$([^$]+)\$/g;
          let m: RegExpExecArray | null;
          while ((m = tokenRe.exec(block)) !== null) {
            if (m[1] !== undefined) {
              const raw = m[1];
              const pipe = raw.indexOf('|');
              const key = (pipe >= 0 ? raw.slice(0, pipe) : raw).trim();
              const exists = executed.pointsByKey.has(key) || executed.lociByKey.has(key);
              expect(exists, `${solTag} missing proof chip symbol "${key}"`).toBe(true);
              if (constructedKeys.has(key)) {
                constructedChipRefs += 1;
              }
            } else if (m[2] !== undefined) {
              const tex = m[2];
              expect(tex.includes('[['), `${solTag} nests [[chip]] inside $...$: $${tex}$`).toBe(false);
              expect(
                () =>
                  katex.renderToString(tex, {
                    throwOnError: true,
                    strict: 'error',
                    displayMode: false,
                  }),
                `${solTag} invalid KaTeX in $${tex}$`
              ).not.toThrow();
            }
          }
        }
        expect(
          constructedChipRefs,
          `${solTag} proof must reference >= 1 constructed object chip`
        ).toBeGreaterThanOrEqual(1);
      }

      expect(coveredStars.has('L'), `${tag} missing L star`).toBe(true);
      expect(coveredStars.has('E'), `${tag} missing E star`).toBe(true);
      if (level.numVariants > 1) {
        expect(coveredStars.has('V'), `${tag} missing V star`).toBe(true);
      } else {
        expect(coveredStars.has('V'), `${tag} single-variant level must not have V star`).toBe(false);
      }
    }

    expect(totalSolutions).toBeGreaterThanOrEqual(149);
  });

  it('spot-checks exact geometric invariants on advanced levels across Chapters 2-15', () => {
    // 1. Beta 2.3: Angle of 30° (2V -> two rays at ±30° from given ray AB)
    const beta3 = getLevelById('Beta', 'L3')!;
    const beta3V = beta3.solutions.find((s) => s.starsEarned.includes('V'))!;
    const b3Exec = executeSolution(beta3, beta3V);
    const rayAB = beta3.initLoci[0];
    expect(rayAB.kind).toBe('linear');
    if (rayAB.kind === 'linear') {
      const uRay = normalize(sub(rayAB.p2, rayAB.p1));
      const vLoci = beta3V.goalVariants.map((gv) => b3Exec.lociByKey.get(gv.locusKeys[0])!);
      expect(vLoci.length).toBe(2);
      const cos30 = Math.sqrt(3) / 2;
      for (const loc of vLoci) {
        expect(loc.kind).toBe('linear');
        if (loc.kind === 'linear') {
          expect(Math.abs(dot(uRay, normalize(loc.dir)))).toBeCloseTo(cos30, 9);
        }
      }
    }

    // 2. Eta 7.3: Angle of 75° (both L and E solutions construct a line at 75° to ray AB)
    const eta3 = getLevelById('Eta', 'L3')!;
    const etaRay = eta3.initLoci[0];
    if (etaRay.kind === 'linear') {
      const uRay = normalize(sub(etaRay.p2, etaRay.p1));
      const cos75 = Math.cos((75 * Math.PI) / 180);
      for (const sol of eta3.solutions) {
        const ex = executeSolution(eta3, sol);
        for (const gv of sol.goalVariants) {
          const loc = ex.lociByKey.get(gv.locusKeys[0])!;
          if (loc.kind === 'linear') {
            expect(Math.abs(dot(uRay, normalize(loc.dir)))).toBeCloseTo(cos75, 9);
          }
        }
      }
    }

    // 3. Zeta 6.9: Nine-Point Circle (passes through the 3 side midpoints of △ABC)
    const zeta9 = getLevelById('Zeta', 'L9')!;
    for (const sol of zeta9.solutions) {
      const ex = executeSolution(zeta9, sol);
      const A = ex.pointsByKey.get('A')!.coords;
      const B = ex.pointsByKey.get('B')!.coords;
      const C = ex.pointsByKey.get('C')!.coords;
      const npc = ex.lociByKey.get(sol.goalVariants[0].locusKeys[0])!;
      expect(npc.kind).toBe('circle');
      if (npc.kind === 'circle') {
        expect(dist(npc.center, midpoint(A, B))).toBeCloseTo(npc.radius, 9);
        expect(dist(npc.center, midpoint(B, C))).toBeCloseTo(npc.radius, 9);
        expect(dist(npc.center, midpoint(C, A))).toBeCloseTo(npc.radius, 9);
      }
    }

    // 4. Nu 13.3: Equilateral Triangle on Concentric Circles (4V constructs 4 distinct equilateral triangles)
    const nu3 = getLevelById('Nu', 'L3')!;
    const nu3V = nu3.solutions.find((s) => s.starsEarned.includes('V'))!;
    const nu3Exec = executeSolution(nu3, nu3V);
    expect(nu3V.goalVariants.length).toBe(4);
    const P0 = nu3Exec.pointsByKey.get('P')!.coords;
    const c1 = nu3.initLoci[0];
    const c2 = nu3.initLoci[1];
    if (c1.kind === 'circle' && c2.kind === 'circle') {
      for (const gv of nu3V.goalVariants) {
        const [l1, l2, l3] = gv.locusKeys.map((k) => nu3Exec.lociByKey.get(k)!);
        if (l1.kind === 'linear' && l2.kind === 'linear' && l3.kind === 'linear') {
          const v1 = intersectLineLine(l1, l2)[0];
          const v2 = intersectLineLine(l2, l3)[0];
          const v3 = intersectLineLine(l3, l1)[0];
          const side = dist(v1, v2);
          expect(dist(v2, v3)).toBeCloseTo(side, 8);
          expect(dist(v3, v1)).toBeCloseTo(side, 8);
          const distsToP = [dist(v1, P0), dist(v2, P0), dist(v3, P0)];
          expect(Math.min(...distsToP)).toBeLessThan(1e-8);
        }
      }
    }

    // 5. Nu 13.9: Square by Four Points (L=7L, E=15E, V=2V)
    const nu9 = getLevelById('Nu', 'L9')!;
    expect(nu9.solutions.length).toBe(3);
    for (const sol of nu9.solutions) {
      const ex = executeSolution(nu9, sol);
      for (const gv of sol.goalVariants) {
        const lines = gv.locusKeys.map((k) => ex.lociByKey.get(k)!);
        expect(lines.length).toBe(4);
        // Partition into 2 parallel pairs and check perpendicularity + equal width
        const dirs = lines.map((l) => (l.kind === 'linear' ? normalize(l.dir) : { x: 1, y: 0 }));
        const anchors = lines.map((l) => (l.kind === 'linear' ? l.anchor : { x: 0, y: 0 }));
        const parIdx = [1, 2, 3].find((idx) => Math.abs(det2(dirs[0], dirs[idx])) < 1e-8)!;
        expect(parIdx).toBeDefined();
        const otherIdxs = [1, 2, 3].filter((idx) => idx !== parIdx);
        expect(Math.abs(dot(dirs[0], dirs[otherIdxs[0]]))).toBeLessThan(1e-8);
        expect(Math.abs(det2(dirs[otherIdxs[0]], dirs[otherIdxs[1]]))).toBeLessThan(1e-8);
        const w1 = Math.abs(det2(sub(anchors[parIdx], anchors[0]), dirs[0]));
        const w2 = Math.abs(det2(sub(anchors[otherIdxs[1]], anchors[otherIdxs[0]]), dirs[otherIdxs[0]]));
        expect(w1).toBeCloseTo(w2, 8);
      }
    }

    // 6. Omicron 15.6: Napoleon's Problem (6L, 6E compass-only circle center)
    const omi6 = getLevelById('Omicron', 'L6')!;
    const omi6Circle = omi6.initLoci[0];
    if (omi6Circle.kind === 'circle') {
      const ex = executeSolution(omi6, omi6.solutions[0]);
      const centerPt = ex.pointsByKey.get(omi6.solutions[0].goalVariants[0].pointKeys[0])!;
      expect(centerPt.coords.x).toBeCloseTo(omi6Circle.center.x, 9);
      expect(centerPt.coords.y).toBeCloseTo(omi6Circle.center.y, 9);
    }

    // 7. Omicron 15.11: Mickey Mouse (L=10L, E=14E, V=2V externally tangent circles with center on line)
    const omi11 = getLevelById('Omicron', 'L11')!;
    const cBig = omi11.initLoci[1];
    const cSmall = omi11.initLoci[2];
    if (cBig.kind === 'circle' && cSmall.kind === 'circle') {
      const vSol = omi11.solutions.find((s) => s.starsEarned.includes('V'))!;
      const ex = executeSolution(omi11, vSol);
      expect(vSol.goalVariants.length).toBe(2);
      for (const gv of vSol.goalVariants) {
        const kCircle = ex.lociByKey.get(gv.locusKeys[0])!;
        expect(kCircle.kind).toBe('circle');
        if (kCircle.kind === 'circle') {
          const dBig = dist(kCircle.center, cBig.center);
          const dSmall = dist(kCircle.center, cSmall.center);
          const tanBig = Math.min(
            Math.abs(dBig - (kCircle.radius + cBig.radius)),
            Math.abs(dBig - Math.abs(kCircle.radius - cBig.radius))
          );
          const tanSmall = Math.min(
            Math.abs(dSmall - (kCircle.radius + cSmall.radius)),
            Math.abs(dSmall - Math.abs(kCircle.radius - cSmall.radius))
          );
          expect(tanBig).toBeLessThan(1e-8);
          expect(tanSmall).toBeLessThan(1e-8);
        }
      }
    }
  });

  it('frames all 307 solutions cleanly with zero clipped goal circles and zero point-label collisions', () => {
    const viewW = 760;
    const viewH = 680;

    for (const level of IMPLEMENTED_LEVELS) {
      for (const sol of level.solutions) {
        const solTag = `${level.chapterId}:${level.shortId}/${sol.id}`;
        const ex = executeSolution(level, sol);
        const bounds = computeSolutionBounds(ex);
        const cam = fitCameraToBounds(bounds, viewW, viewH);

        expect(cam.scale, `${solTag} camera scale too small`).toBeGreaterThan(15);

        for (const gv of sol.goalVariants) {
          const cKeys = new Set([...(gv.highlightCircleKeys ?? []), ...gv.locusKeys]);
          for (const ck of cKeys) {
            const loc = ex.lociByKey.get(ck);
            if (loc && loc.kind === 'circle') {
              const s = worldToScreen(loc.center, cam);
              const r = loc.radius * cam.scale;
              expect(s.x - r, `${solTag} goal circle ${ck} clipped left`).toBeGreaterThanOrEqual(4);
              expect(s.x + r, `${solTag} goal circle ${ck} clipped right`).toBeLessThanOrEqual(viewW - 4);
              expect(s.y - r, `${solTag} goal circle ${ck} clipped top`).toBeGreaterThanOrEqual(4);
              expect(s.y + r, `${solTag} goal circle ${ck} clipped bottom`).toBeLessThanOrEqual(viewH - 4);
            }
          }
        }

        const labels = [...computePointLabelLayout(ex, cam).values()];
        for (let i = 0; i < labels.length; i++) {
          const a = labels[i];
          const aw = Math.max(18, a.label.length * 8.2 + 8);
          for (let j = i + 1; j < labels.length; j++) {
            const b = labels[j];
            const bw = Math.max(18, b.label.length * 8.2 + 8);
            const overlap =
              Math.abs(a.x - b.x) < (aw + bw) * 0.5 && Math.abs(a.y - b.y) < 17;
            expect(overlap, `${solTag} point label collision between ${a.key} and ${b.key}`).toBe(false);
          }
        }
      }
    }
  });

  it('enforces repository hygiene: strictly isolated i18n catalogs and zero forbidden theorem-prover references', () => {
    const entries = Object.entries(RAW_PROJECT_FILES);
    expect(entries.length).toBeGreaterThan(25);

    // Construct regex dynamically so this test file itself never contains the forbidden word literally
    const forbiddenWord = ['l', 'e', 'a', 'n'].join('');
    const forbiddenRe = new RegExp(`(\\b${forbiddenWord}\\b|\\.${forbiddenWord}\\b)`, 'i');
    const cjkRe = /[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/;

    for (const [rel, content] of entries) {
      expect(forbiddenRe.test(content), `Forbidden reference found in ${rel}`).toBe(false);
      const isLocaleCatalogOrTest =
        rel.startsWith('../src/i18n/') ||
        rel === '../tests/i18n.test.ts' ||
        rel === './i18n.test.ts' ||
        /^\.\.\/README\.[a-zA-Z0-9-]+\.md$/.test(rel);
      if (!isLocaleCatalogOrTest) {
        const textToCheck =
          rel === '../README.md'
            ? content
                .split('\n')
                .filter(
                  (line) =>
                    !line.startsWith('#### (Choose your language below') &&
                    !/^\[!\[.*\]\(https:\/\/img\.shields\.io\/badge\/Language-/.test(line)
                )
                .join('\n')
            : content;
        expect(cjkRe.test(textToCheck), `Non-English CJK characters leaked outside src/i18n in ${rel}`).toBe(
          false
        );
      }
    }
  });
});
