import type { LevelSpecData } from '../../types/level';

export const ALPHA_T3_PERP_BISECTOR_TOOL: LevelSpecData = {
  code: 'T3',
  shortId: 'T3',
  chapterId: 'Alpha',
  chapterNumber: 1,
  title: 'Perpendicular Bisector Tool',
  isTutorial: true,
  prompt:
    'Construct the perpendicular bisector of segment AB using the Perpendicular Bisector tool.',
  targetL: 1,
  targetE: 3,
  numVariants: 1,
  allowedTools: ['perpBisector'],
  initPoints: [
    { index: 0, key: 'A', label: 'A', coords: { x: -1.45, y: -0.15 } },
    { index: 1, key: 'B', label: 'B', coords: { x: 1.45, y: 0.15 } },
  ],
  initLoci: [
    {
      index: 0,
      key: 'line(A, B)',
      label: 'AB',
      kind: 'linear',
      bounds: 'segment',
      p1: { x: -1.45, y: -0.15 },
      p2: { x: 1.45, y: 0.15 },
      oriented: true,
      showCarrier: true,
    },
  ],
  solutions: [
    {
      id: 'le-1L-3E',
      tabTitle: 'L & E Stars',
      starsEarned: ['L', 'E'],
      expectedLCost: 1,
      expectedECost: 3,
      steps: [
        {
          stepNumber: 1,
          entityIndex: 1,
          entityType: 'locus',
          key: 'perpBisector(A, B)',
          label: 'm₁',
          expr: 'perpBisector(A, B)',
          rationale: 'Apply the Perpendicular Bisector tool directly to endpoints A and B.',
          action: { kind: 'usePerpBisector', p1: 0, p2: 1 },
        },
      ],
      goalVariants: [
        {
          variantIndex: 1,
          label: 'perpBisector(A, B)',
          pointKeys: [],
          locusKeys: ['perpBisector(A, B)'],
          highlightLocusKeys: ['perpBisector(A, B)'],
        },
      ],
      proof: {
        steps: [
          'Applying the Perpendicular Bisector macro to [[A]] and [[B]] constructs [[perpBisector(A, B)]] in a single `1L` step, expanding internally to the `3E` two-circle construction proven in Level 1.2.',
        ],
      },
    },
  ],
};
