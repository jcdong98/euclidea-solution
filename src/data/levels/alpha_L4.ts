import type { LevelSpecData, Vec2 } from '../../types/level';

const THETA = 0.09;
const COS = Math.cos(THETA);
const SIN = Math.sin(THETA);
const HALF_SIDE = 1.45;

function rotSquarePt(lx: number, ly: number): Vec2 {
  return {
    x: lx * COS - ly * SIN,
    y: lx * SIN + ly * COS,
  };
}

const PT_A = rotSquarePt(-HALF_SIDE, -HALF_SIDE);
const PT_B = rotSquarePt(HALF_SIDE, -HALF_SIDE);
const PT_C = rotSquarePt(HALF_SIDE, HALF_SIDE);
const PT_D = rotSquarePt(-HALF_SIDE, HALF_SIDE);

export const ALPHA_L4_CIRCLE_IN_SQUARE: LevelSpecData = {
  code: '1.4',
  shortId: 'L4',
  chapterId: 'Alpha',
  chapterNumber: 1,
  title: 'Circle in Square',
  isTutorial: false,
  prompt: 'Inscribe a circle in the given square ABCD.',
  targetL: 3,
  targetE: 5,
  numVariants: 1,
  allowedTools: ['line', 'circle', 'perpBisector'],
  initPoints: [
    { index: 0, key: 'A', label: 'A', coords: PT_A },
    { index: 1, key: 'B', label: 'B', coords: PT_B },
    { index: 2, key: 'C', label: 'C', coords: PT_C },
    { index: 3, key: 'D', label: 'D', coords: PT_D },
  ],
  initLoci: [
    {
      index: 0,
      key: 'line(A, B)',
      label: 'AB',
      kind: 'linear',
      bounds: 'segment',
      p1: PT_A,
      p2: PT_B,
      oriented: true,
    },
    {
      index: 1,
      key: 'line(B, C)',
      label: 'BC',
      kind: 'linear',
      bounds: 'segment',
      p1: PT_B,
      p2: PT_C,
      oriented: true,
    },
    {
      index: 2,
      key: 'line(C, D)',
      label: 'CD',
      kind: 'linear',
      bounds: 'segment',
      p1: PT_C,
      p2: PT_D,
      oriented: true,
    },
    {
      index: 3,
      key: 'line(D, A)',
      label: 'DA',
      kind: 'linear',
      bounds: 'segment',
      p1: PT_D,
      p2: PT_A,
      oriented: true,
    },
  ],
  givenPolygons: [{ vertices: [PT_A, PT_B, PT_C, PT_D] }],
  solutions: [
    {
      id: 'le-3L-5E',
      tabTitle: 'L & E Stars',
      starsEarned: ['L', 'E'],
      expectedLCost: 3,
      expectedECost: 5,
      steps: [
        {
          stepNumber: 1,
          entityIndex: 4,
          entityType: 'locus',
          key: 'perpBisector(A, B)',
          label: 'm₁',
          expr: 'perpBisector(A, B)',
          rationale: 'Construct the perpendicular bisector of side AB.',
          action: { kind: 'usePerpBisector', p1: 0, p2: 1 },
        },
        {
          stepNumber: 2,
          entityIndex: 4,
          entityType: 'point',
          key: 'M_AB',
          label: 'M_AB',
          expr: 'M_AB ∈ line(A, B) ∩ perpBisector(A, B)',
          rationale: 'Mark the midpoint M_AB of side AB.',
          action: { kind: 'interPoint', locus1: 0, locus2: 4 },
        },
        {
          stepNumber: 3,
          entityIndex: 5,
          entityType: 'locus',
          key: 'line(A, C)',
          label: 'l₁',
          expr: 'line(A, C)',
          rationale: 'Draw diagonal AC of square ABCD.',
          action: { kind: 'useLine', p1: 0, p2: 2 },
        },
        {
          stepNumber: 4,
          entityIndex: 5,
          entityType: 'point',
          key: 'O',
          label: 'O',
          expr: 'O ∈ perpBisector(A, B) ∩ line(A, C)',
          rationale: 'Mark the center O where perpBisector(A, B) meets diagonal AC.',
          action: { kind: 'interPoint', locus1: 4, locus2: 5 },
        },
        {
          stepNumber: 5,
          entityIndex: 6,
          entityType: 'locus',
          key: 'circle(O, M_AB)',
          label: 'c₁',
          expr: 'circle(O, M_AB)',
          rationale: 'Draw circle(O, M_AB) centered at O passing through M_AB.',
          action: { kind: 'useCircle', center: 5, through: 4 },
        },
      ],
      goalVariants: [
        {
          variantIndex: 1,
          label: 'circle(O, M_AB)',
          pointKeys: [],
          locusKeys: ['circle(O, M_AB)'],
          highlightCircleKeys: ['circle(O, M_AB)'],
        },
      ],
      proof: {
        steps: [
          'By symmetry of square $ABCD$, [[perpBisector(A, B)]] is the midline parallel to [[line(B, C)|BC]] and [[line(D, A)|DA]]; it bisects [[line(A, B)|AB]] at [[M_AB]] and meets diagonal [[line(A, C)]] at the square\'s center [[O]]. Since [[O]] lies at equal perpendicular distance $|OM_{AB}|$ from all four sides, [[circle(O, M_AB)]] is tangent to each side at its midpoint.',
        ],
      },
    },
  ],
};
