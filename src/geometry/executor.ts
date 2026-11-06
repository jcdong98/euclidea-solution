import type {
  ConstructionAction,
  GoalVariantFootprint,
  LevelSpecData,
  SolutionSpec,
  SolutionStepSpec,
  ToolKind,
  Vec2,
} from '../types/level';
import {
  type BoardLocus,
  type BoardPoint,
  intersectLoci,
  projectOntoLocus,
  satisfiesLinearBounds,
  selectDirectedInter,
  selectOtherInterPoint,
} from './intersections';
import { add, dist, midpoint, norm, rot90, scale, sub } from './vec2';

export interface StepDependencyCue {
  readonly pointKeys: readonly string[];
  readonly locusKeys: readonly string[];
  readonly toolKind?: ToolKind;
  /** Optional geometric cue metadata for rendering markers (compass radius, right angle, etc.). */
  readonly compassCenter?: Vec2;
  readonly compassThrough?: Vec2;
  readonly compassSourceSegment?: readonly [Vec2, Vec2];
  /** Unconstructed reference segments (rendered dashed if not already covered by a solid locus). */
  readonly referenceSegments?: readonly (readonly [Vec2, Vec2])[];
  readonly rightAngleAt?: { readonly vertex: Vec2; readonly u: Vec2; readonly v: Vec2 };
  readonly bisectedAngle?: { readonly vertex: Vec2; readonly arm1: Vec2; readonly arm2: Vec2 };
}

export interface MacroDecompositionInfo {
  readonly toolName: string;
  readonly lCost: 1;
  readonly eCost: number;
  readonly summary: string;
}

export interface BoardSnapshot {
  /** 0 for initial Given state; 1..N for executed steps. */
  readonly stepIndex: number;
  readonly activeStep?: SolutionStepSpec;
  readonly points: readonly BoardPoint[];
  readonly loci: readonly BoardLocus[];
  readonly cumulativeL: number;
  readonly cumulativeE: number;
  /** Keys created at this step (or recently auto-revealed when skipping 0L steps). */
  readonly createdKey?: string;
  readonly dependency: StepDependencyCue;
  readonly completedVariants: readonly GoalVariantFootprint[];
}

export interface ExecutedSolution {
  readonly level: LevelSpecData;
  readonly solution: SolutionSpec;
  /** Length = steps.length + 1 (index 0 = Given state). */
  readonly snapshots: readonly BoardSnapshot[];
  /** Final board points indexed by key for instant lookup. */
  readonly pointsByKey: ReadonlyMap<string, BoardPoint>;
  /** Final board loci indexed by key for instant lookup. */
  readonly lociByKey: ReadonlyMap<string, BoardLocus>;
}

export function getActionCost(action: ConstructionAction): { l: number; e: number } {
  switch (action.kind) {
    case 'freePoint':
    case 'pointOnLocus':
    case 'interPoint':
    case 'otherInterPoint':
    case 'interFirst':
    case 'interSecond':
      return { l: 0, e: 0 };
    case 'useLine':
    case 'useCircle':
      return { l: 1, e: 1 };
    case 'usePerpBisector':
    case 'usePerp':
      return { l: 1, e: 3 };
    case 'useAngleBisector':
    case 'useParallel':
      return { l: 1, e: 4 };
    case 'useCompass':
      return { l: 1, e: 5 };
  }
}

export function getMacroInfo(action: ConstructionAction): MacroDecompositionInfo | undefined {
  switch (action.kind) {
    case 'usePerpBisector':
      return {
        toolName: 'Perpendicular Bisector',
        lCost: 1,
        eCost: 3,
        summary: '2 symmetric circles circle(A, B) and circle(B, A) + 1 line through their intersections (3E).',
      };
    case 'usePerp':
      return {
        toolName: 'Perpendicular Line',
        lCost: 1,
        eCost: 3,
        summary: '2 circles centered on the target line passing through P (or cutting two symmetric points) + 1 line (3E).',
      };
    case 'useAngleBisector':
      return {
        toolName: 'Angle Bisector',
        lCost: 1,
        eCost: 4,
        summary: '1 circle at vertex O cutting equal arms + 2 circles of equal radius + 1 line through O (4E).',
      };
    case 'useParallel':
      return {
        toolName: 'Parallel Line',
        lCost: 1,
        eCost: 4,
        summary: 'Rhombus / equal-radius circle transfer construction using 3 circles + 1 line through P (4E).',
      };
    case 'useCompass':
      return {
        toolName: 'Non-Collapsing Compass',
        lCost: 1,
        eCost: 5,
        summary: 'Euclid I.2 segment transfer (equilateral triangle + 2 auxiliary circles) + final circle at C (5E).',
      };
    default:
      return undefined;
  }
}

function computeCompletedVariants(
  points: readonly BoardPoint[],
  loci: readonly BoardLocus[],
  variants: readonly GoalVariantFootprint[]
): GoalVariantFootprint[] {
  const ptKeys = new Set(points.filter((p) => p.role === 'constructed').map((p) => p.key));
  const allPtKeys = new Set(points.map((p) => p.key));
  const locKeys = new Set(loci.map((l) => l.key));
  return variants.filter(
    (v) =>
      v.pointKeys.every((k) => ptKeys.has(k) || allPtKeys.has(k)) &&
      v.locusKeys.every((k) => locKeys.has(k))
  );
}

export function executeSolution(
  level: LevelSpecData,
  solution: SolutionSpec
): ExecutedSolution {
  const points: BoardPoint[] = level.initPoints.map((pt, idx) => {
    if (pt.index !== idx) {
      throw new Error(`Init point index mismatch: expected ${idx}, got ${pt.index}`);
    }
    return {
      index: pt.index,
      key: pt.key,
      label: pt.label,
      role: 'given',
      coords: pt.coords,
      visible: pt.visible ?? true,
    };
  });

  const loci: BoardLocus[] = level.initLoci.map((loc, idx) => {
    if (loc.index !== idx) {
      throw new Error(`Init locus index mismatch: expected ${idx}, got ${loc.index}`);
    }
    if (loc.kind === 'linear') {
      return {
        index: loc.index,
        key: loc.key,
        label: loc.label,
        role: 'given',
        kind: 'linear',
        bounds: loc.bounds,
        displayBounds: loc.displayBounds,
        anchor: loc.p1,
        dir: sub(loc.p2, loc.p1),
        p2: loc.p2,
        oriented: loc.oriented,
        showCarrier: loc.showCarrier,
        showLabel: false,
      };
    }
    return {
      index: loc.index,
      key: loc.key,
      label: loc.label,
      role: 'given',
      kind: 'circle',
      center: loc.center,
      radius: loc.radius,
      showLabel: false,
    };
  });

  const snapshots: BoardSnapshot[] = [
    {
      stepIndex: 0,
      points: [...points],
      loci: [...loci],
      cumulativeL: 0,
      cumulativeE: 0,
      dependency: { pointKeys: [], locusKeys: [] },
      completedVariants: computeCompletedVariants(points, loci, solution.goalVariants),
    },
  ];

  let cumL = 0;
  let cumE = 0;

  for (let i = 0; i < solution.steps.length; i++) {
    const step = solution.steps[i];
    const act = step.action;
    const cost = getActionCost(act);
    cumL += cost.l;
    cumE += cost.e;

    let dependency: StepDependencyCue = { pointKeys: [], locusKeys: [] };

    switch (act.kind) {
      case 'freePoint': {
        if (step.entityIndex !== points.length) {
          throw new Error(`Step ${step.stepNumber}: expected Point #${points.length}, got #${step.entityIndex}`);
        }
        points.push({
          index: points.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          coords: act.coords,
          visible: true,
        });
        break;
      }

      case 'pointOnLocus': {
        const loc = loci[act.locus];
        if (!loc) throw new Error(`Invalid locus index ${act.locus}`);
        const coords = projectOntoLocus(act.witness, loc);
        points.push({
          index: points.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          coords,
          visible: true,
        });
        dependency = { pointKeys: [], locusKeys: [loc.key] };
        break;
      }

      case 'interPoint': {
        const l1 = loci[act.locus1];
        const l2 = loci[act.locus2];
        if (!l1 || !l2) throw new Error(`Invalid locus indices ${act.locus1}, ${act.locus2}`);
        const candidates = intersectLoci(l1, l2);
        if (candidates.length === 0) {
          throw new Error(`Step ${step.stepNumber} (${step.key}): empty intersection ${l1.key} ∩ ${l2.key}`);
        }
        const chosen =
          candidates.length === 1
            ? candidates[0]
            : act.prefer === 'second'
              ? candidates[1]
              : candidates[0];
        points.push({
          index: points.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          coords: chosen,
          visible: true,
        });
        dependency = { pointKeys: [], locusKeys: [l1.key, l2.key] };
        break;
      }

      case 'otherInterPoint': {
        const l1 = loci[act.locus1];
        const l2 = loci[act.locus2];
        const excl = points[act.excludePoint];
        if (!l1 || !l2 || !excl) {
          throw new Error(`Invalid indices in otherInterPoint at step ${step.stepNumber}`);
        }
        const chosen = selectOtherInterPoint(l1, l2, excl.coords);
        points.push({
          index: points.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          coords: chosen,
          visible: true,
        });
        dependency = { pointKeys: [excl.key], locusKeys: [l1.key, l2.key] };
        break;
      }

      case 'interFirst':
      case 'interSecond': {
        const l1 = loci[act.locus1];
        const l2 = loci[act.locus2];
        if (!l1 || !l2) throw new Error(`Invalid locus indices at step ${step.stepNumber}`);
        const chosen = selectDirectedInter(act.kind === 'interFirst', l1, l2);
        points.push({
          index: points.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          coords: chosen,
          visible: true,
        });
        dependency = { pointKeys: [], locusKeys: [l1.key, l2.key] };
        break;
      }

      case 'useLine': {
        const p1 = points[act.p1];
        const p2 = points[act.p2];
        if (!p1 || !p2) throw new Error(`Invalid point indices in useLine at step ${step.stepNumber}`);
        const dir = sub(p2.coords, p1.coords);
        if (norm(dir) < 1e-10) throw new Error(`Degenerate line through identical points at step ${step.stepNumber}`);
        loci.push({
          index: loci.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          kind: 'linear',
          bounds: 'line',
          anchor: p1.coords,
          dir,
          p2: p2.coords,
          oriented: true,
          showLabel: step.showLocusLabel,
        });
        dependency = {
          pointKeys: [p1.key, p2.key],
          locusKeys: [],
          toolKind: 'line',
        };
        break;
      }

      case 'useCircle': {
        const o = points[act.center];
        const a = points[act.through];
        if (!o || !a) throw new Error(`Invalid point indices in useCircle at step ${step.stepNumber}`);
        const r = dist(o.coords, a.coords);
        if (r < 1e-10) throw new Error(`Zero-radius circle at step ${step.stepNumber}`);
        loci.push({
          index: loci.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          kind: 'circle',
          center: o.coords,
          radius: r,
          showLabel: step.showLocusLabel,
        });
        dependency = {
          pointKeys: [o.key, a.key],
          locusKeys: [],
          toolKind: 'circle',
          compassCenter: o.coords,
          compassThrough: a.coords,
        };
        break;
      }

      case 'usePerpBisector': {
        const p1 = points[act.p1];
        const p2 = points[act.p2];
        if (!p1 || !p2) throw new Error(`Invalid point indices in usePerpBisector`);
        const mid = midpoint(p1.coords, p2.coords);
        const segVec = sub(p2.coords, p1.coords);
        const dir = rot90(segVec);
        loci.push({
          index: loci.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          kind: 'linear',
          bounds: 'line',
          anchor: mid,
          dir,
          oriented: true,
          showLabel: step.showLocusLabel,
        });
        dependency = {
          pointKeys: [p1.key, p2.key],
          locusKeys: [],
          toolKind: 'perpBisector',
          referenceSegments: [[p1.coords, p2.coords]],
          rightAngleAt: { vertex: mid, u: segVec, v: dir },
        };
        break;
      }

      case 'usePerp': {
        const baseLocus = loci[act.locus];
        const pt = points[act.point];
        if (!baseLocus || baseLocus.kind !== 'linear' || !pt) {
          throw new Error(`Invalid inputs for usePerp at step ${step.stepNumber}`);
        }
        const dir = rot90(baseLocus.dir);
        const foot = projectOntoLocus(pt.coords, {
          ...baseLocus,
          bounds: 'line',
        });
        const refSegs: (readonly [Vec2, Vec2])[] = [];
        const visualBase =
          baseLocus.displayBounds && baseLocus.displayBounds !== baseLocus.bounds
            ? { ...baseLocus, bounds: baseLocus.displayBounds }
            : baseLocus;
        if (visualBase.bounds !== 'line' && !satisfiesLinearBounds(foot, visualBase)) {
          const endB = visualBase.p2 ?? add(visualBase.anchor, visualBase.dir);
          const nearEnd =
            dist(foot, visualBase.anchor) <= dist(foot, endB) ? visualBase.anchor : endB;
          refSegs.push([nearEnd, foot]);
        }
        loci.push({
          index: loci.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          kind: 'linear',
          bounds: 'line',
          anchor: pt.coords,
          dir,
          oriented: baseLocus.oriented,
          showLabel: step.showLocusLabel,
        });
        dependency = {
          pointKeys: [pt.key],
          locusKeys: [baseLocus.key],
          toolKind: 'perp',
          referenceSegments: refSegs.length > 0 ? refSegs : undefined,
          rightAngleAt: { vertex: foot, u: baseLocus.dir, v: dir },
        };
        break;
      }

      case 'useAngleBisector': {
        const a = points[act.arm1];
        const o = points[act.vertex];
        const b = points[act.arm2];
        if (!a || !o || !b) throw new Error(`Invalid inputs for useAngleBisector`);
        const oa = sub(a.coords, o.coords);
        const ob = sub(b.coords, o.coords);
        const lenOA = norm(oa);
        const lenOB = norm(ob);
        if (lenOA < 1e-10 || lenOB < 1e-10) throw new Error(`Degenerate angle arms`);
        // B' = O + (|OA| / |OB|) * (B - O), canonical bisector direction = rot90(B' - A)
        const bPrime = add(o.coords, scale(ob, lenOA / lenOB));
        const dir = rot90(sub(bPrime, a.coords));
        loci.push({
          index: loci.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          kind: 'linear',
          bounds: 'line',
          anchor: o.coords,
          dir,
          oriented: true,
          showLabel: step.showLocusLabel,
        });
        dependency = {
          pointKeys: [a.key, o.key, b.key],
          locusKeys: [],
          toolKind: 'angleBisector',
          referenceSegments: [
            [o.coords, a.coords],
            [o.coords, b.coords],
          ],
          bisectedAngle: { vertex: o.coords, arm1: a.coords, arm2: b.coords },
        };
        break;
      }

      case 'useParallel': {
        const baseLocus = loci[act.locus];
        const pt = points[act.point];
        if (!baseLocus || baseLocus.kind !== 'linear' || !pt) {
          throw new Error(`Invalid inputs for useParallel at step ${step.stepNumber}`);
        }
        loci.push({
          index: loci.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          kind: 'linear',
          bounds: 'line',
          anchor: pt.coords,
          dir: baseLocus.dir,
          oriented: baseLocus.oriented,
          showLabel: step.showLocusLabel,
        });
        dependency = {
          pointKeys: [pt.key],
          locusKeys: [baseLocus.key],
          toolKind: 'parallel',
        };
        break;
      }

      case 'useCompass': {
        const rs = points[act.radiusStart];
        const re = points[act.radiusEnd];
        const c = points[act.center];
        if (!rs || !re || !c) throw new Error(`Invalid inputs for useCompass`);
        const r = dist(rs.coords, re.coords);
        if (r < 1e-10) throw new Error(`Zero compass radius at step ${step.stepNumber}`);
        loci.push({
          index: loci.length,
          key: step.key,
          label: step.label,
          role: 'constructed',
          kind: 'circle',
          center: c.coords,
          radius: r,
          showLabel: step.showLocusLabel,
        });
        dependency = {
          pointKeys: [rs.key, re.key, c.key],
          locusKeys: [],
          toolKind: 'compass',
          compassCenter: c.coords,
          compassSourceSegment: [rs.coords, re.coords],
        };
        break;
      }
    }

    snapshots.push({
      stepIndex: i + 1,
      activeStep: step,
      points: [...points],
      loci: [...loci],
      cumulativeL: cumL,
      cumulativeE: cumE,
      createdKey: step.key,
      dependency,
      completedVariants: computeCompletedVariants(points, loci, solution.goalVariants),
    });
  }

  const finalSnap = snapshots[snapshots.length - 1];
  const pointsByKey = new Map(finalSnap.points.map((p) => [p.key, p]));
  const lociByKey = new Map(finalSnap.loci.map((l) => [l.key, l]));

  return {
    level,
    solution,
    snapshots,
    pointsByKey,
    lociByKey,
  };
}

/**
 * Returns the ordered navigable snapshot indices (`0 .. N`).
 * When `skipZeroCostSteps` is enabled, `0L` point-acquisition steps are folded into
 * the subsequent `1L` tool step (while always keeping `0` and the final step `N`).
 */
export function getNavigableStepIndices(
  solution: SolutionSpec,
  skipZeroCostSteps: boolean
): number[] {
  const total = solution.steps.length;
  if (!skipZeroCostSteps) {
    return Array.from({ length: total + 1 }, (_, i) => i);
  }
  const indices: number[] = [0];
  for (let i = 0; i < total; i++) {
    const cost = getActionCost(solution.steps[i].action);
    if (cost.l > 0 || i === total - 1) {
      indices.push(i + 1);
    }
  }
  return indices;
}
