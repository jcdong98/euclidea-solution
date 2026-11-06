import type { UiLocaleConfig } from '../../types';

const ZH_VARIANT_PREFIX_RULES: ReadonlyArray<readonly [RegExp, string]> = [
  [/^Equilateral Triangle\b/, '正三角形'],
  [/^Perpendicular Bisector\b/, '垂直平分线'],
  [/^Perpendicular Line\b/, '垂线'],
  [/^Angle Bisector\b/, '角平分线'],
  [/^Parallel Line\b/, '平行线'],
  [/^Tangent Line\b/, '切线'],
  [/^Outer Tangent\b/, '外公切线'],
  [/^Inner Tangent\b/, '内公切线'],
  [/^Inscribed Circle\b/, '内切圆'],
  [/^Circumscribed Circle\b/, '外接圆'],
  [/^Circle Center\b/, '圆心'],
  [/^Inscribed Square\b/, '内接正方形'],
  [/^Rhombus\b/, '菱形'],
  [/^Square\b/, '正方形'],
  [/^Midpoint\b/, '中点'],
  [/^Intersection Point\b/, '交点'],
  [/^Reflected Point\b/, '对称点'],
  [/^Translated Segment\b/, '平移线段'],
  [/^Rotated Segment\b/, '旋转线段'],
  [/^Target Circle\b/, '目标圆'],
  [/^Target Line\b/, '目标直线'],
  [/^Target Point\b/, '目标点'],
  [/^Circle\b/, '圆'],
  [/^Line\b/, '直线'],
  [/^Point\b/, '点'],
  [/^Segment\b/, '线段'],
  [/^Triangle\b/, '三角形'],
];

function translateVariantLabelFallback(rawLabel: string): string {
  for (const [pattern, zhPrefix] of ZH_VARIANT_PREFIX_RULES) {
    if (pattern.test(rawLabel)) {
      return rawLabel.replace(pattern, zhPrefix).replace(/\s+/g, ' ').trim();
    }
  }
  return rawLabel.replace(/\bLine\b/g, '直线').replace(/\bPoint\b/g, '点').replace(/\bCircle\b/g, '圆');
}

export const ZH_CN_UI_CONFIG: UiLocaleConfig = {
  code: 'zh-CN',
  htmlLang: 'zh-CN',
  dir: 'ltr',
  nativeLabel: '简体中文',

  messages: {
    documentTitle: 'Euclidea 尺规作图解析',
    brandTitle: 'Euclidea 尺规作图解析',
    toggleChaptersBtn: '☰ 章节',
    toggleChaptersTooltip: '展开 / 收起章节目录',
    languageSelectorTooltip: '切换界面与证明显示语言',
    prevLevelTooltip: '上一关',
    nextLevelTooltip: '下一关',
    lStarTooltip: (targetL) => `L 星目标：至多调用 ${targetL} 次作图工具`,
    eStarTooltip: (targetE) => `E 星目标：至多消耗 ${targetE} 个基本尺规步`,
    vStarTooltip: (numVariants) => `V 星目标：同时作出全部 ${numVariants} 个对称解`,

    searchPlaceholder: (totalLevels) => `搜索 ${totalLevels} 个关卡（支持中英文）...`,
    unimplementedChapterNotice: (totalLevels) => `共规划 ${totalLevels} 个关卡`,
    soonBadge: '待开放',

    resizerSidebarLabel: '调整左侧章节栏宽度',
    resizerSidebarTooltip: '拖拽调整章节栏宽度 · 双击恢复默认',
    resizerStudyLabel: '调整右侧解析面板宽度',
    resizerStudyTooltip: '拖拽调整解析栏宽度 · 双击恢复默认',
    resizerSplitLabel: '调整步骤与证明上下分栏高度',
    resizerSplitTooltip: '上下拖拽调整高度比例 · 双击恢复默认',

    pointLabelsCheck: '点标签',
    pointLabelsTooltip: '在画布上显示几何点名称',
    locusLabelsCheck: '轨迹标签',
    locusLabelsTooltip: '在辅助圆与直线上显示短标签（c₁, l₁, …）',
    skipZeroCostCheck: '跳过 0L 取点',
    skipZeroCostTooltip: '单步前进时自动标出 0L 交点，直接跳转至下一步 1L 作图工具',
    ghostPreviewCheck: '虚影预览',
    ghostPreviewTooltip: '以淡色虚线预览后续尚未执行的作图轨迹',
    zoomOutTooltip: '缩小视图',
    zoomInTooltip: '放大视图',
    fitViewBtn: '复位视图',
    fitViewTooltip: '重置画布缩放与平移',

    legendGiven: '已知图形',
    legendAuxiliary: '辅助轨迹',
    legendActiveStep: '当前步骤',
    legendCompletedGoal: '已完成目标',

    studyHeaderTitle: '作图步骤与几何证明',
    viewModeSplit: '上下分栏',
    viewModeSteps: '仅看步骤',
    viewModeProof: '仅看证明',

    stepsPaneTitle: '作图步骤',
    stepsCountMeta: (count, l, e) => `共 ${count} 步动作 · ${l}L, ${e}E`,
    givenConfigTitle: '初始已知构型',
    locusTagPrefix: (index) => `轨迹 #${index}`,
    pointEntityPrefix: (index) => `点 #${index}`,
    locusEntityPrefix: (index) => `轨迹 #${index}`,
    macroNotePrefix: (eCost) => `复合工具展开 (${eCost}E)：`,

    proofPaneTitle: '欧氏综合证明',
    proofHoverHint: '悬停或点击符号联动高亮',

    firstStepTooltip: '回到初始局面 (Home)',
    prevStepBtn: '◀ 上一步',
    prevStepTooltip: '上一步 (←)',
    playBtn: '▶ 播放',
    pauseBtn: '⏸ 暂停',
    playPauseTooltip: '自动播放 / 暂停 (Space)',
    nextStepBtn: '下一步 ▶',
    nextStepTooltip: '下一步 (→)',
    lastStepTooltip: '跳至最终完成步 (End)',
    speedTooltip: '切换播放速度',
    stepCounterBadge: (current, total) => `第 ${current} / ${total} 步`,
    stepZeroCaptionHtml:
      '<strong>第 0 步（已知）：</strong>尚未执行任何尺规作图的初始点与已知轨迹。',
    stepActiveCaptionHtml: (stepNum, expr, rationale) =>
      `<strong>第 ${stepNum} 步：</strong>${expr} —— ${rationale}`,
    goalVariantsCompleted: (count) => `已完成全部 ${count} 个对称解`,
    goalSingleCompleted: (label) => `已完成：${label}`,
    costPillText: (l, e) => `当前步数：${l}L · ${e}E`,
  },

  macros: {
    usePerpBisector: {
      toolName: '垂直平分线',
      summary: '分别以两端点为圆心互过对方作 2 个对称等圆 circle(A, B)、circle(B, A)，再连两交点作 1 条直线（共 3E）。',
    },
    usePerp: {
      toolName: '垂线',
      summary: '在已知直线上取圆心过点 P（或截出对称两点）作 2 个辅助圆，再连交点作 1 条直线（共 3E）。',
    },
    useAngleBisector: {
      toolName: '角平分线',
      summary: '以顶点 O 为圆心截两等长边作 1 圆，再以两截点为圆心作 2 等圆，最后连顶点作 1 条直线（共 4E）。',
    },
    useParallel: {
      toolName: '平行线',
      summary: '利用菱形或等圆平移构造：作 3 个等半径辅助圆确定第四顶点，再过点 P 作 1 条直线（共 4E）。',
    },
    useCompass: {
      toolName: '不塌缩圆规（截取半径）',
      summary: '《几何原本》命题 I.2 线段平移构造（正三角形 + 2 个辅助圆）结合最终定心圆（共 5E）。',
    },
  },

  formatSolutionTabTitle: (sol, level) => {
    const s = new Set(sol.starsEarned);
    if (s.has('L') && s.has('E') && s.has('V')) return '满星解法';
    if (s.has('L') && s.has('E')) return 'L 星与 E 星';
    if (s.has('L') && s.has('V')) return `L 星与 V 星 · ${sol.expectedLCost}L`;
    if (s.has('E') && s.has('V')) return `E 星与 V 星 · ${sol.expectedECost}E`;
    if (s.has('L')) return `L 星解法 · ${sol.expectedLCost}L`;
    if (s.has('E')) return `E 星解法 · ${sol.expectedECost}E`;
    return `V 星 · 全部 ${level.numVariants} 个对称解`;
  },

  formatActionRationale: ({ step, action, pointKeyAt, locusKeyAt }) => {
    switch (action.kind) {
      case 'freePoint':
        return `在平面上任取辅助点 ${step.key}。`;
      case 'pointOnLocus':
        return `在 ${locusKeyAt(action.locus)} 上任取一点 ${step.key}。`;
      case 'interPoint':
      case 'interFirst':
      case 'interSecond':
        return `标出 ${locusKeyAt(action.locus1)} 与 ${locusKeyAt(action.locus2)} 的交点 ${step.key}。`;
      case 'otherInterPoint':
        return `标出 ${locusKeyAt(action.locus1)} 与 ${locusKeyAt(action.locus2)} 异于 ${pointKeyAt(action.excludePoint)} 的另一交点 ${step.key}。`;
      case 'useLine':
        return `过点 ${pointKeyAt(action.p1)} 与 ${pointKeyAt(action.p2)} 作直线。`;
      case 'useCircle':
        return `以 ${pointKeyAt(action.center)} 为圆心、过点 ${pointKeyAt(action.through)} 作圆。`;
      case 'usePerpBisector':
        return `作线段 ${pointKeyAt(action.p1)}${pointKeyAt(action.p2)} 的垂直平分线。`;
      case 'usePerp':
        return `过点 ${pointKeyAt(action.point)} 作 ${locusKeyAt(action.locus)} 的垂线。`;
      case 'useAngleBisector':
        return `作 ∠${pointKeyAt(action.arm1)}${pointKeyAt(action.vertex)}${pointKeyAt(action.arm2)} 的角平分线。`;
      case 'useParallel':
        return `过点 ${pointKeyAt(action.point)} 作 ${locusKeyAt(action.locus)} 的平行线。`;
      case 'useCompass':
        return `用圆规截取线段 |${pointKeyAt(action.radiusStart)}${pointKeyAt(action.radiusEnd)}| 为半径，以 ${pointKeyAt(action.center)} 为圆心作圆。`;
    }
  },

  formatVariantLabel: translateVariantLabelFallback,
};
