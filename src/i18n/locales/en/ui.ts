import type { LocalePack, UiLocaleConfig } from '../../types';

export const EN_UI_CONFIG: UiLocaleConfig = {
  code: 'en',
  htmlLang: 'en',
  dir: 'ltr',
  nativeLabel: 'English',

  messages: {
    documentTitle: 'Euclidea Solution Explorer',
    brandTitle: 'Euclidea Solution Explorer',
    toggleChaptersBtn: '☰ Chapters',
    toggleChaptersTooltip: 'Toggle chapter sidebar',
    languageSelectorTooltip: 'Switch display language',
    prevLevelTooltip: 'Previous implemented level',
    nextLevelTooltip: 'Next implemented level',
    lStarTooltip: (targetL) => `L-Star target: at most ${targetL} tool invocations`,
    eStarTooltip: (targetE) =>
      `E-Star target: at most ${targetE} elementary ruler-and-compass steps`,
    vStarTooltip: (numVariants) =>
      `V-Star target: all ${numVariants} symmetric variants constructed simultaneously`,

    searchPlaceholder: (totalLevels) => `Filter ${totalLevels} levels...`,
    unimplementedChapterNotice: (totalLevels) => `${totalLevels} levels scheduled`,
    soonBadge: 'Soon',

    resizerSidebarLabel: 'Resize chapter sidebar',
    resizerSidebarTooltip: 'Drag to resize sidebar · Double-click to reset',
    resizerStudyLabel: 'Resize construction and proof pane',
    resizerStudyTooltip: 'Drag to resize study pane · Double-click to reset',
    resizerSplitLabel: 'Resize steps and proof split',
    resizerSplitTooltip: 'Drag to adjust steps/proof height · Double-click to reset',

    pointLabelsCheck: 'Point Labels',
    pointLabelsTooltip: 'Display point identifiers on the diagram',
    locusLabelsCheck: 'Locus Labels',
    locusLabelsTooltip: 'Display short labels (c₁, l₁, …) on auxiliary curves',
    skipZeroCostCheck: 'Skip 0L Picks',
    skipZeroCostTooltip:
      'Step directly between 1L tool invocations while auto-marking 0L intersections',
    ghostPreviewCheck: 'Ghost Preview',
    ghostPreviewTooltip: 'Show faint dashed preview of upcoming construction steps',
    zoomOutTooltip: 'Zoom out',
    zoomInTooltip: 'Zoom in',
    fitViewBtn: 'Fit View',
    fitViewTooltip: 'Reset pan and zoom',

    legendGiven: 'Given',
    legendAuxiliary: 'Auxiliary',
    legendActiveStep: 'Active Step',
    legendCompletedGoal: 'Completed Goal',

    studyHeaderTitle: 'Construction & Proof',
    viewModeSplit: 'Split',
    viewModeSteps: 'Steps Only',
    viewModeProof: 'Proof Only',

    stepsPaneTitle: 'Construction Steps',
    stepsCountMeta: (count, l, e) => `${count} actions · ${l}L, ${e}E`,
    givenConfigTitle: 'Given Configuration',
    locusTagPrefix: (index) => `Locus #${index}`,
    pointEntityPrefix: (index) => `Point #${index}`,
    locusEntityPrefix: (index) => `Locus #${index}`,
    macroNotePrefix: (eCost) => `Macro (${eCost}E):`,

    proofPaneTitle: 'Geometric Proof',
    proofHoverHint: 'Hover symbols to highlight',

    firstStepTooltip: 'First step (Home)',
    prevStepBtn: '◀ Prev',
    prevStepTooltip: 'Previous step (←)',
    playBtn: '▶ Play',
    pauseBtn: '⏸ Pause',
    playPauseTooltip: 'Play / Pause (Space)',
    nextStepBtn: 'Next ▶',
    nextStepTooltip: 'Next step (→)',
    lastStepTooltip: 'Final step (End)',
    speedTooltip: 'Cycle playback speed',
    stepCounterBadge: (current, total) => `Step ${current} / ${total}`,
    stepZeroCaptionHtml:
      '<strong>Step 0 (Given):</strong> Initial points and loci before any ruler-and-compass actions.',
    stepActiveCaptionHtml: (stepNum, expr, rationale) =>
      `<strong>Step ${stepNum}:</strong> ${expr} — ${rationale}`,
    goalVariantsCompleted: (count) => `${count} Variants Completed`,
    goalSingleCompleted: (label) => `${label} Completed`,
    costPillText: (l, e) => `Cost: ${l}L · ${e}E`,
  },

  macros: {
    usePerpBisector: {
      toolName: 'Perpendicular Bisector',
      summary:
        '2 symmetric circles circle(A, B) and circle(B, A) + 1 line through their intersections (3E).',
    },
    usePerp: {
      toolName: 'Perpendicular Line',
      summary:
        '2 circles centered on the target line passing through P (or cutting two symmetric points) + 1 line (3E).',
    },
    useAngleBisector: {
      toolName: 'Angle Bisector',
      summary:
        '1 circle at vertex O cutting equal arms + 2 circles of equal radius + 1 line through O (4E).',
    },
    useParallel: {
      toolName: 'Parallel Line',
      summary:
        'Rhombus / equal-radius circle transfer construction using 3 circles + 1 line through P (4E).',
    },
    useCompass: {
      toolName: 'Non-Collapsing Compass',
      summary:
        'Euclid I.2 segment transfer (equilateral triangle + 2 auxiliary circles) + final circle at C (5E).',
    },
  },

  formatSolutionTabTitle: (sol, level) => {
    const s = new Set(sol.starsEarned);
    if (s.has('L') && s.has('E') && s.has('V')) return 'All Stars';
    if (s.has('L') && s.has('E')) return 'L & E Stars';
    if (s.has('L') && s.has('V')) return `L & V Stars · ${sol.expectedLCost}L`;
    if (s.has('E') && s.has('V')) return `E & V Stars · ${sol.expectedECost}E`;
    if (s.has('L')) return `L Star · ${sol.expectedLCost}L`;
    if (s.has('E')) return `E Star · ${sol.expectedECost}E`;
    return `V Star · All ${level.numVariants} Variants`;
  },

  formatActionRationale: ({ step, action, pointKeyAt, locusKeyAt }) => {
    switch (action.kind) {
      case 'freePoint':
        return `Choose an arbitrary auxiliary point ${step.key}.`;
      case 'pointOnLocus':
        return `Pick a point ${step.key} on ${locusKeyAt(action.locus)}.`;
      case 'interPoint':
      case 'interFirst':
      case 'interSecond':
        return `Mark intersection ${step.key} of ${locusKeyAt(action.locus1)} and ${locusKeyAt(action.locus2)}.`;
      case 'otherInterPoint':
        return `Mark the second intersection ${step.key} of ${locusKeyAt(action.locus1)} and ${locusKeyAt(action.locus2)} distinct from ${pointKeyAt(action.excludePoint)}.`;
      case 'useLine':
        return `Draw line through ${pointKeyAt(action.p1)} and ${pointKeyAt(action.p2)}.`;
      case 'useCircle':
        return `Draw circle centered at ${pointKeyAt(action.center)} through ${pointKeyAt(action.through)}.`;
      case 'usePerpBisector':
        return `Construct the perpendicular bisector of ${pointKeyAt(action.p1)} and ${pointKeyAt(action.p2)}.`;
      case 'usePerp':
        return `Construct the perpendicular to ${locusKeyAt(action.locus)} through ${pointKeyAt(action.point)}.`;
      case 'useAngleBisector':
        return `Bisect ∠${pointKeyAt(action.arm1)}${pointKeyAt(action.vertex)}${pointKeyAt(action.arm2)}.`;
      case 'useParallel':
        return `Construct the line parallel to ${locusKeyAt(action.locus)} through ${pointKeyAt(action.point)}.`;
      case 'useCompass':
        return `Draw circle centered at ${pointKeyAt(action.center)} with radius |${pointKeyAt(action.radiusStart)}${pointKeyAt(action.radiusEnd)}|.`;
    }
  },
};

export const EN_LOCALE_PACK: LocalePack = {
  ui: EN_UI_CONFIG,
};
