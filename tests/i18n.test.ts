import katex from 'katex';
import { afterEach, describe, expect, it } from 'vitest';
import { CHAPTERS_CATALOG, getLevelById, IMPLEMENTED_LEVELS } from '../src/data';
import { executeSolution } from '../src/geometry/executor';
import { DEFAULT_LOCALE_CODE, i18n, LOCALE_REGISTRY } from '../src/i18n';
import { EN_UI_CONFIG } from '../src/i18n/locales/en/ui';
import type { LocalePack } from '../src/i18n';

const CJK_RE = /[\u4e00-\u9fff]/;
const NON_ASCII_IN_MATH_RE = /[\u3000-\u303f\u4e00-\u9fff\uff00-\uffef]/;

describe('Config-Driven i18n Architecture & Simplified Chinese (zh-CN) Pack', () => {
  afterEach(async () => {
    await i18n.setLocale(DEFAULT_LOCALE_CODE, false);
  });

  it('defaults strictly to English (en) and exposes registered locales cleanly', () => {
    expect(DEFAULT_LOCALE_CODE).toBe('en');
    expect(i18n.locale).toBe('en');
    expect(i18n.detectInitialLocaleCode()).toBe('en');

    const codes = LOCALE_REGISTRY.map((entry) => entry.code);
    expect(codes).toContain('en');
    expect(codes).toContain('zh-CN');

    const alphaT1 = getLevelById('Alpha', 'T1')!;
    // In default English mode with no level overrides, localizeLevel returns the canonical object directly
    expect(i18n.localizeLevel(alphaT1)).toBe(alphaT1);
  });

  it('provides 100% zh-CN coverage across all 149 levels and all solutions with valid chips and strict KaTeX', async () => {
    await i18n.setLocale('zh-CN', false);
    expect(i18n.locale).toBe('zh-CN');
    expect(i18n.ui.nativeLabel).toBe('简体中文');

    const pack = i18n.pack;
    expect(pack.levels).toBeDefined();

    let totalSolutionsChecked = 0;

    for (const ch of CHAPTERS_CATALOG) {
      for (const summary of ch.levels) {
        const baseLevel = getLevelById(ch.id, summary.shortId)!;
        const levelKey = `${baseLevel.chapterId}/${baseLevel.shortId}`;
        const rawEntry = pack.levels?.[levelKey];
        expect(rawEntry, `Missing zh-CN level entry for ${levelKey}`).toBeDefined();

        const localized = i18n.localizeLevel(baseLevel);

        // Title & prompt checks
        expect(CJK_RE.test(localized.title), `${levelKey} zh-CN title lacks CJK: "${localized.title}"`).toBe(
          true
        );
        expect(localized.title.includes('\\'), `${levelKey} zh-CN title has backslash`).toBe(false);
        const trailingStars = baseLevel.title.match(/(\*+)$/);
        if (trailingStars) {
          expect(
            localized.title.endsWith(trailingStars[1]),
            `${levelKey} zh-CN title "${localized.title}" must preserve "${trailingStars[1]}"`
          ).toBe(true);
        }

        expect(CJK_RE.test(localized.prompt), `${levelKey} zh-CN prompt lacks CJK`).toBe(true);
        expect(localized.prompt.includes('\\'), `${levelKey} zh-CN prompt has backslash`).toBe(false);

        // Sidebar title helper matches localized title
        expect(i18n.getLevelTitle(ch.id, summary.shortId, summary.title)).toBe(localized.title);

        expect(localized.solutions.length).toBe(baseLevel.solutions.length);

        for (let sIdx = 0; sIdx < baseLevel.solutions.length; sIdx++) {
          totalSolutionsChecked += 1;
          const baseSol = baseLevel.solutions[sIdx];
          const locSol = localized.solutions[sIdx];
          const solTag = `${levelKey}/${baseSol.id}`;

          // Solution entry must explicitly exist in zh-CN pack with translated proof
          const rawSolEntry = rawEntry?.solutions?.[baseSol.id];
          expect(rawSolEntry?.proof, `${solTag} missing explicit zh-CN proof`).toBeDefined();

          // Tab title and every step rationale must be localized into Chinese
          expect(CJK_RE.test(locSol.tabTitle), `${solTag} tabTitle not localized: "${locSol.tabTitle}"`).toBe(
            true
          );
          for (const step of locSol.steps) {
            expect(
              CJK_RE.test(step.rationale),
              `${solTag} step ${step.stepNumber} rationale not localized: "${step.rationale}"`
            ).toBe(true);
          }

          // Geometry execution on localized level is 100% invariant
          const executed = executeSolution(localized, locSol);
          const finalSnap = executed.snapshots[executed.snapshots.length - 1];
          expect(finalSnap.cumulativeL).toBe(baseSol.expectedLCost);
          expect(finalSnap.cumulativeE).toBe(baseSol.expectedECost);

          // Proof parity, chips, and strict KaTeX
          expect(locSol.proof.steps.length, `${solTag} empty zh-CN proof steps`).toBeGreaterThanOrEqual(1);
          if (baseSol.proof.keyIdea) {
            expect(
              Boolean(locSol.proof.keyIdea && CJK_RE.test(locSol.proof.keyIdea)),
              `${solTag} missing Chinese keyIdea`
            ).toBe(true);
          }
          if (baseSol.proof.variantNote) {
            expect(
              Boolean(locSol.proof.variantNote && CJK_RE.test(locSol.proof.variantNote)),
              `${solTag} missing Chinese variantNote`
            ).toBe(true);
          }

          const constructedKeys = new Set<string>(locSol.steps.map((s) => s.key));
          let constructedChipRefs = 0;
          const blocks = [
            locSol.proof.keyIdea ?? '',
            ...locSol.proof.steps,
            locSol.proof.variantNote ?? '',
          ];

          for (const block of blocks) {
            if (!block) continue;
            expect(CJK_RE.test(block), `${solTag} proof block lacks Chinese text: "${block}"`).toBe(true);
            expect(block.includes('$$'), `${solTag} uses $$ instead of inline $`).toBe(false);

            let dollarCount = 0;
            for (const chChar of block) {
              if (chChar === '$') dollarCount += 1;
            }
            expect(dollarCount % 2, `${solTag} unbalanced $ in "${block}"`).toBe(0);

            const tokenRe = /\[\[([^\]]+)\]\]|\$([^$]+)\$/g;
            let m: RegExpExecArray | null;
            while ((m = tokenRe.exec(block)) !== null) {
              if (m[1] !== undefined) {
                const raw = m[1];
                const pipe = raw.indexOf('|');
                const key = (pipe >= 0 ? raw.slice(0, pipe) : raw).trim();
                const exists = executed.pointsByKey.has(key) || executed.lociByKey.has(key);
                expect(exists, `${solTag} unknown [[chip]] key "${key}"`).toBe(true);
                if (constructedKeys.has(key)) {
                  constructedChipRefs += 1;
                }
              } else if (m[2] !== undefined) {
                const tex = m[2];
                expect(tex.includes('[['), `${solTag} nested [[chip]] inside $${tex}$`).toBe(false);
                expect(
                  NON_ASCII_IN_MATH_RE.test(tex),
                  `${solTag} CJK/fullwidth char inside $${tex}$`
                ).toBe(false);
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
            `${solTag} zh-CN proof must reference >= 1 constructed [[key]] chip`
          ).toBeGreaterThanOrEqual(1);
        }
      }
    }

    expect(IMPLEMENTED_LEVELS.length).toBe(149);
    expect(totalSolutionsChecked).toBeGreaterThanOrEqual(300);
  });

  it('supports adding a new language via UI config alone with automatic AST step templates and English fallbacks', () => {
    const mockPack: LocalePack = {
      ui: {
        ...EN_UI_CONFIG,
        code: 'mock-lang',
        htmlLang: 'x-mock',
        nativeLabel: 'MockLang',
        formatSolutionTabTitle: (sol) => `[MOCK TAB ${sol.id}]`,
        formatActionRationale: ({ step, action }) => `[MOCK ${action.kind} -> ${step.key}]`,
        formatVariantLabel: (raw) => `[MOCK VAR ${raw}]`,
      },
      // Intentionally omit `levels` to verify zero-code fallback behavior!
    };

    i18n.registerPackForTest(mockPack);
    expect(i18n.locale).toBe('mock-lang');

    const base = getLevelById('Alpha', 'L5')!;
    const localized = i18n.localizeLevel(base);

    // Falls back cleanly to canonical English title/prompt/proof without mutating `base`
    expect(localized.title).toBe(base.title);
    expect(localized.prompt).toBe(base.prompt);
    expect(localized.solutions[0].proof).toBe(base.solutions[0].proof);

    // Automatically localizes solution tab titles, AST step rationales, and variant labels
    expect(localized.solutions[0].tabTitle).toBe(`[MOCK TAB ${base.solutions[0].id}]`);
    expect(localized.solutions[0].steps[0].rationale).toBe(
      `[MOCK ${base.solutions[0].steps[0].action.kind} -> ${base.solutions[0].steps[0].key}]`
    );
    expect(localized.solutions[0].goalVariants[0].label).toBe(
      `[MOCK VAR ${base.solutions[0].goalVariants[0].label}]`
    );
  });
});
