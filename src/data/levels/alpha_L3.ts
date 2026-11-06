import type { LevelSpecData } from '../../types/level';

export const ALPHA_L3_MIDPOINT: LevelSpecData = {
  code: '1.3',
  shortId: 'L3',
  chapterId: 'Alpha',
  chapterNumber: 1,
  title: 'Midpoint',
  isTutorial: false,
  prompt: 'Construct the midpoint M of the segment defined by points A and B.',
  targetL: 2,
  targetE: 4,
  numVariants: 1,
  allowedTools: ['line', 'circle', 'perpBisector'],
  initPoints: [
    { index: 0, key: 'A', label: 'A', coords: { x: -1.55, y: -0.22 } },
    { index: 1, key: 'B', label: 'B', coords: { x: 1.55, y: 0.22 } },
  ],
  initLoci: [],
  solutions: [
    {
      id: 'le-2L-4E',
      tabTitle: 'L & E Stars',
      starsEarned: ['L', 'E'],
      expectedLCost: 2,
      expectedECost: 4,
      steps: [
        {
          stepNumber: 1,
          entityIndex: 0,
          entityType: 'locus',
          key: 'line(A, B)',
          label: 'l₁',
          expr: 'line(A, B)',
          rationale: 'Draw the line connecting A and B.',
          action: { kind: 'useLine', p1: 0, p2: 1 },
        },
        {
          stepNumber: 2,
          entityIndex: 1,
          entityType: 'locus',
          key: 'perpBisector(A, B)',
          label: 'm₁',
          expr: 'perpBisector(A, B)',
          rationale: 'Construct the perpendicular bisector of A and B.',
          action: { kind: 'usePerpBisector', p1: 0, p2: 1 },
        },
        {
          stepNumber: 3,
          entityIndex: 2,
          entityType: 'point',
          key: 'M',
          label: 'M',
          expr: 'M ∈ line(A, B) ∩ perpBisector(A, B)',
          rationale: 'Mark the intersection M of line(A, B) and perpBisector(A, B).',
          action: { kind: 'interPoint', locus1: 0, locus2: 1 },
        },
      ],
      goalVariants: [
        {
          variantIndex: 1,
          label: 'Midpoint M',
          pointKeys: ['M'],
          locusKeys: [],
        },
      ],
      proof: {
        steps: [
          'Since [[M]] lies on [[line(A, B)]] and satisfies $|MA| = |MB|$ via [[perpBisector(A, B)]], [[M]] is the unique midpoint of segment $AB$.',
        ],
      },
    },
  ],
};
