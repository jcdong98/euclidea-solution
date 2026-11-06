export interface Vec2 {
  readonly x: number;
  readonly y: number;
}

export type ToolKind =
  | 'line'
  | 'circle'
  | 'perpBisector'
  | 'perp'
  | 'angleBisector'
  | 'parallel'
  | 'compass';

export type StarKind = 'L' | 'E' | 'V';

export type LinearBoundsKind = 'line' | 'ray' | 'segment';

export interface InitPointSpec {
  /** 0-based index in the point table (`#0`, `#1`, ...). */
  readonly index: number;
  /** Unique symbol key for cross-referencing in steps & proofs (e.g. "A", "B"). */
  readonly key: string;
  /** Mathematical display label (e.g. "A", "B", "O_1"). */
  readonly label: string;
  /** World-space right-handed coordinates (x right, y up). */
  readonly coords: Vec2;
  /** Whether to show a solid point dot on the initial diagram (false for hidden circle centers if any). */
  readonly visible?: boolean;
}

export type InitLocusSpec =
  | {
      readonly index: number;
      readonly key: string;
      readonly label: string;
      readonly kind: 'linear';
      readonly bounds: LinearBoundsKind;
      /** Optional visual stroke bounds when given polygon lines have infinite intersection semantics. */
      readonly displayBounds?: LinearBoundsKind;
      /** Anchor point p1 and second point p2 defining direction d = p2 - p1. */
      readonly p1: Vec2;
      readonly p2: Vec2;
      readonly oriented: boolean;
      /** Show faint full carrier line in addition to bold given segment/ray. */
      readonly showCarrier?: boolean;
    }
  | {
      readonly index: number;
      readonly key: string;
      readonly label: string;
      readonly kind: 'circle';
      readonly center: Vec2;
      readonly radius: number;
    };

export interface GivenPolygon {
  readonly vertices: readonly Vec2[];
  readonly label?: string;
}

export type ConstructionAction =
  | { readonly kind: 'freePoint'; readonly coords: Vec2 }
  | { readonly kind: 'pointOnLocus'; readonly locus: number; readonly witness: Vec2 }
  | {
      readonly kind: 'interPoint';
      readonly locus1: number;
      readonly locus2: number;
      readonly prefer?: 'first' | 'second';
    }
  | {
      readonly kind: 'otherInterPoint';
      readonly locus1: number;
      readonly locus2: number;
      readonly excludePoint: number;
    }
  | { readonly kind: 'interFirst'; readonly locus1: number; readonly locus2: number }
  | { readonly kind: 'interSecond'; readonly locus1: number; readonly locus2: number }
  | { readonly kind: 'useLine'; readonly p1: number; readonly p2: number }
  | { readonly kind: 'useCircle'; readonly center: number; readonly through: number }
  | { readonly kind: 'usePerpBisector'; readonly p1: number; readonly p2: number }
  | { readonly kind: 'usePerp'; readonly locus: number; readonly point: number }
  | {
      readonly kind: 'useAngleBisector';
      readonly arm1: number;
      readonly vertex: number;
      readonly arm2: number;
    }
  | { readonly kind: 'useParallel'; readonly locus: number; readonly point: number }
  | {
      readonly kind: 'useCompass';
      readonly radiusStart: number;
      readonly radiusEnd: number;
      readonly center: number;
    };

export interface SolutionStepSpec {
  /** 1-based playback step index (Step 0 is the Given state). */
  readonly stepNumber: number;
  /** 0-based object table index (`Point #k` or `Locus #k`). */
  readonly entityIndex: number;
  readonly entityType: 'point' | 'locus';
  /** Unique symbol key used in `[[key]]` proof chips (e.g. "C", "circle(A, B)"). */
  readonly key: string;
  /** Short mathematical label shown on the diagram (e.g. "C", "c_1", "l_1"). */
  readonly label: string;
  /** Canonical symbolic expression (e.g. "C ∈ circle(A, B) ∩ circle(B, A)"). */
  readonly expr: string;
  /** Concise natural-language explanation of this construction action. */
  readonly rationale: string;
  readonly action: ConstructionAction;
  /** Optional flag indicating whether to display this locus's short label on the diagram when Locus Labels are on. */
  readonly showLocusLabel?: boolean;
}

export interface GoalVariantFootprint {
  readonly variantIndex: number;
  readonly label: string;
  /** Keys of constructed points required by this variant. */
  readonly pointKeys: readonly string[];
  /** Keys of constructed loci required by this variant. */
  readonly locusKeys: readonly string[];
  /** Optional polygon highlight (by point keys) rendered when this variant is completed. */
  readonly highlightPolygonKeys?: readonly string[];
  /** Optional explicit segments (pairs of point keys) highlighted in goal style when completed. */
  readonly highlightSegmentPairs?: readonly (readonly [string, string])[];
  /** Optional circle locus keys highlighted in goal style when completed. */
  readonly highlightCircleKeys?: readonly string[];
  /** Optional linear or circle locus keys highlighted in full goal style when completed. */
  readonly highlightLocusKeys?: readonly string[];
}

export interface SyntheticProofSpec {
  /** Optional 1-sentence strategic overview for complex constructions. */
  readonly keyIdea?: string;
  /** Concise synthetic Euclidean proof steps assuming high-school geometry fluency (supports $...$ KaTeX and [[key]] chips). */
  readonly steps: readonly string[];
  /** Optional concise note on L/E efficiency or variant count. */
  readonly variantNote?: string;
}

export interface SolutionSpec {
  readonly id: string;
  /** Tab title, e.g. "L & E Stars" or "V Star · All 2 Variants". */
  readonly tabTitle: string;
  /** Stars earned by this specific construction. */
  readonly starsEarned: readonly StarKind[];
  readonly expectedLCost: number;
  readonly expectedECost: number;
  readonly steps: readonly SolutionStepSpec[];
  readonly goalVariants: readonly GoalVariantFootprint[];
  readonly proof: SyntheticProofSpec;
}

export interface LevelSpecData {
  /** Level code in chapter, e.g. "T1" or "1.1". */
  readonly code: string;
  /** Short ID within chapter, e.g. "T1" or "L1". */
  readonly shortId: string;
  readonly chapterId: string;
  readonly chapterNumber: number;
  readonly title: string;
  readonly isTutorial: boolean;
  /** Problem prompt presented to the reader. */
  readonly prompt: string;
  readonly targetL: number;
  readonly targetE: number;
  readonly numVariants: number;
  readonly allowedTools: readonly ToolKind[];
  readonly initPoints: readonly InitPointSpec[];
  readonly initLoci: readonly InitLocusSpec[];
  readonly givenPolygons?: readonly GivenPolygon[];
  readonly solutions: readonly SolutionSpec[];
}

export interface ChapterMeta {
  readonly id: string;
  readonly number: number;
  readonly greekSymbol: string;
  readonly name: string;
  readonly totalLevels: number;
  readonly levels: readonly LevelSummary[];
}

export interface LevelSummary {
  readonly code: string;
  readonly shortId: string;
  readonly title: string;
  readonly targetL: number;
  readonly targetE: number;
  readonly numVariants: number;
  readonly implemented: boolean;
}
