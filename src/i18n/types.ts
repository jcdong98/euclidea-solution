import type {
  ConstructionAction,
  LevelSpecData,
  SolutionSpec,
  SolutionStepSpec,
  SyntheticProofSpec,
} from '../types/level';

export type MacroToolKind =
  | 'usePerpBisector'
  | 'usePerp'
  | 'useAngleBisector'
  | 'useParallel'
  | 'useCompass';

export interface LocalizedMacroInfo {
  readonly toolName: string;
  readonly summary: string;
}

export interface ActionRationaleContext {
  readonly step: SolutionStepSpec;
  readonly action: ConstructionAction;
  readonly pointKeyAt: (index: number) => string;
  readonly locusKeyAt: (index: number) => string;
}

export interface UiLocaleConfig {
  readonly code: string;
  readonly htmlLang: string;
  readonly dir: 'ltr' | 'rtl';
  /** Native language name displayed in the language switcher, e.g. "English", "简体中文". */
  readonly nativeLabel: string;

  readonly messages: {
    readonly documentTitle: string;
    readonly brandTitle: string;
    readonly toggleChaptersBtn: string;
    readonly toggleChaptersTooltip: string;
    readonly languageSelectorTooltip: string;
    readonly prevLevelTooltip: string;
    readonly nextLevelTooltip: string;
    readonly lStarTooltip: (targetL: number) => string;
    readonly eStarTooltip: (targetE: number) => string;
    readonly vStarTooltip: (numVariants: number) => string;

    readonly searchPlaceholder: (totalLevels: number) => string;
    readonly unimplementedChapterNotice: (totalLevels: number) => string;
    readonly soonBadge: string;

    readonly resizerSidebarLabel: string;
    readonly resizerSidebarTooltip: string;
    readonly resizerStudyLabel: string;
    readonly resizerStudyTooltip: string;
    readonly resizerSplitLabel: string;
    readonly resizerSplitTooltip: string;

    readonly pointLabelsCheck: string;
    readonly pointLabelsTooltip: string;
    readonly locusLabelsCheck: string;
    readonly locusLabelsTooltip: string;
    readonly skipZeroCostCheck: string;
    readonly skipZeroCostTooltip: string;
    readonly ghostPreviewCheck: string;
    readonly ghostPreviewTooltip: string;
    readonly zoomOutTooltip: string;
    readonly zoomInTooltip: string;
    readonly fitViewBtn: string;
    readonly fitViewTooltip: string;

    readonly legendGiven: string;
    readonly legendAuxiliary: string;
    readonly legendActiveStep: string;
    readonly legendCompletedGoal: string;

    readonly studyHeaderTitle: string;
    readonly viewModeSplit: string;
    readonly viewModeSteps: string;
    readonly viewModeProof: string;

    readonly stepsPaneTitle: string;
    readonly stepsCountMeta: (actionCount: number, lCost: number, eCost: number) => string;
    readonly givenConfigTitle: string;
    readonly locusTagPrefix: (index: number) => string;
    readonly pointEntityPrefix: (index: number) => string;
    readonly locusEntityPrefix: (index: number) => string;
    readonly macroNotePrefix: (eCost: number) => string;

    readonly proofPaneTitle: string;
    readonly proofHoverHint: string;

    readonly firstStepTooltip: string;
    readonly prevStepBtn: string;
    readonly prevStepTooltip: string;
    readonly playBtn: string;
    readonly pauseBtn: string;
    readonly playPauseTooltip: string;
    readonly nextStepBtn: string;
    readonly nextStepTooltip: string;
    readonly lastStepTooltip: string;
    readonly speedTooltip: string;
    readonly stepCounterBadge: (current: number, total: number) => string;
    readonly stepZeroCaptionHtml: string;
    readonly stepActiveCaptionHtml: (
      stepNum: number,
      escapedExpr: string,
      escapedRationale: string
    ) => string;
    readonly goalVariantsCompleted: (count: number) => string;
    readonly goalSingleCompleted: (escapedVariantLabel: string) => string;
    readonly costPillText: (lCost: number, eCost: number) => string;
  };

  readonly macros: Readonly<Record<MacroToolKind, LocalizedMacroInfo>>;

  readonly formatSolutionTabTitle: (sol: SolutionSpec, level: LevelSpecData) => string;
  readonly formatActionRationale: (ctx: ActionRationaleContext) => string;
  readonly formatVariantLabel?: (rawLabel: string) => string;
}

export interface SolutionLocaleEntry {
  readonly tabTitle?: string;
  /** Optional per-step rationale overrides keyed by 1-based `stepNumber`. */
  readonly steps?: Readonly<Record<number, string>>;
  /** Optional goal variant label overrides keyed by 1-based `variantIndex`. */
  readonly variantLabels?: Readonly<Record<number, string>>;
  readonly proof?: SyntheticProofSpec;
}

export interface LevelLocaleEntry {
  readonly title?: string;
  readonly prompt?: string;
  readonly solutions?: Readonly<Record<string, SolutionLocaleEntry>>;
}

export interface LocalePack {
  readonly ui: UiLocaleConfig;
  /** Optional chapter display name overrides keyed by `chapterId` (e.g. "Alpha"). */
  readonly chapters?: Readonly<Record<string, string>>;
  /** Level translations keyed by `"${chapterId}/${shortId}"` (e.g. `"Alpha/T1"`, `"Omicron/L1"`). */
  readonly levels?: Readonly<Record<string, LevelLocaleEntry>>;
}

export interface LocaleRegistryItem {
  readonly code: string;
  readonly nativeLabel: string;
  readonly loadPack: () => Promise<LocalePack>;
}
