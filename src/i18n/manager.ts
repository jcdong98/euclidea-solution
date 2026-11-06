import type { ChapterMeta, ConstructionAction, LevelSpecData } from '../types/level';
import { EN_LOCALE_PACK } from './locales/en/ui';
import { DEFAULT_LOCALE_CODE, LOCALE_REGISTRY } from './registry';
import type { LocalePack, LocalizedMacroInfo, UiLocaleConfig } from './types';

const LOCALE_STORAGE_KEY = 'euclidea-locale-v1';

export class I18nManager {
  private currentCode: string = DEFAULT_LOCALE_CODE;
  private currentPack: LocalePack = EN_LOCALE_PACK;
  private readonly packCache = new Map<string, LocalePack>([
    [DEFAULT_LOCALE_CODE, EN_LOCALE_PACK],
  ]);
  private readonly listeners = new Set<(localeCode: string) => void>();

  public get locale(): string {
    return this.currentCode;
  }

  public get ui(): UiLocaleConfig {
    return this.currentPack.ui;
  }

  public get pack(): LocalePack {
    return this.currentPack;
  }

  public get supportedLocales() {
    return LOCALE_REGISTRY;
  }

  /**
   * Resolves initial locale preference strictly from explicit URL `?lang=` or saved user selection,
   * defaulting to `'en'` when neither is set.
   */
  public detectInitialLocaleCode(): string {
    if (typeof window === 'undefined') return DEFAULT_LOCALE_CODE;

    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang && this.isSupported(urlLang)) {
      return urlLang;
    }

    try {
      const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (saved && this.isSupported(saved)) {
        return saved;
      }
    } catch {
      // Ignore storage read errors
    }

    return DEFAULT_LOCALE_CODE;
  }

  public isSupported(code: string): boolean {
    return LOCALE_REGISTRY.some((item) => item.code === code);
  }

  public async setLocale(code: string, persist = true): Promise<void> {
    const entry = LOCALE_REGISTRY.find((item) => item.code === code);
    if (!entry) return;

    let pack = this.packCache.get(code);
    if (!pack) {
      pack = await entry.loadPack();
      this.packCache.set(code, pack);
    }

    this.currentCode = code;
    this.currentPack = pack;

    if (typeof document !== 'undefined') {
      document.documentElement.lang = pack.ui.htmlLang;
      document.documentElement.dir = pack.ui.dir;
      document.title = pack.ui.messages.documentTitle;
    }

    if (persist && typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, code);
      } catch {
        // Ignore storage write errors
      }
    }

    for (const fn of this.listeners) {
      fn(code);
    }
  }

  /** Registers an in-memory pack directly (useful for testing partial/custom locale configs). */
  public registerPackForTest(pack: LocalePack): void {
    this.packCache.set(pack.ui.code, pack);
    this.currentCode = pack.ui.code;
    this.currentPack = pack;
  }

  public onChange(listener: (localeCode: string) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  public getChapterName(chapter: ChapterMeta): string {
    return this.currentPack.chapters?.[chapter.id] ?? chapter.name;
  }

  public getLevelTitle(chapterId: string, shortId: string, fallbackTitle: string): string {
    return this.currentPack.levels?.[`${chapterId}/${shortId}`]?.title ?? fallbackTitle;
  }

  public getLocalizedMacro(action: ConstructionAction): (LocalizedMacroInfo & { eCost: number }) | undefined {
    const macros = this.currentPack.ui.macros;
    switch (action.kind) {
      case 'usePerpBisector':
        return { ...macros.usePerpBisector, eCost: 3 };
      case 'usePerp':
        return { ...macros.usePerp, eCost: 3 };
      case 'useAngleBisector':
        return { ...macros.useAngleBisector, eCost: 4 };
      case 'useParallel':
        return { ...macros.useParallel, eCost: 4 };
      case 'useCompass':
        return { ...macros.useCompass, eCost: 5 };
      default:
        return undefined;
    }
  }

  /**
   * Produces a localized view of `baseLevel`, applying level/solution/step/variant/proof
   * translations with multi-layer fallback to AST-generated templates and canonical English.
   */
  public localizeLevel(baseLevel: LevelSpecData): LevelSpecData {
    if (this.currentCode === DEFAULT_LOCALE_CODE && !this.currentPack.levels) {
      return baseLevel;
    }

    const levelKey = `${baseLevel.chapterId}/${baseLevel.shortId}`;
    const lvlEntry = this.currentPack.levels?.[levelKey];
    const ui = this.currentPack.ui;
    const isDefault = this.currentCode === DEFAULT_LOCALE_CODE;

    const localizedSolutions = baseLevel.solutions.map((sol) => {
      const solEntry = lvlEntry?.solutions?.[sol.id];

      // Build lookup tables of point and locus keys across steps for AST rationale formatting
      const pointKeys: string[] = baseLevel.initPoints.map((p) => p.key);
      const locusKeys: string[] = baseLevel.initLoci.map((l) => l.key);

      const localizedSteps = sol.steps.map((step) => {
        const pointKeyAt = (idx: number) => pointKeys[idx] ?? `#${idx}`;
        const locusKeyAt = (idx: number) => locusKeys[idx] ?? `#${idx}`;

        const explicitRationale = solEntry?.steps?.[step.stepNumber];
        const rationale =
          explicitRationale ??
          (isDefault
            ? step.rationale
            : ui.formatActionRationale({
                step,
                action: step.action,
                pointKeyAt,
                locusKeyAt,
              }));

        if (step.entityType === 'point') {
          pointKeys[step.entityIndex] = step.key;
        } else {
          locusKeys[step.entityIndex] = step.key;
        }

        return rationale === step.rationale ? step : { ...step, rationale };
      });

      const localizedVariants = sol.goalVariants.map((v) => {
        const explicitLabel = solEntry?.variantLabels?.[v.variantIndex];
        const label =
          explicitLabel ??
          (isDefault || !ui.formatVariantLabel ? v.label : ui.formatVariantLabel(v.label));
        return label === v.label ? v : { ...v, label };
      });

      return {
        ...sol,
        tabTitle:
          solEntry?.tabTitle ?? (isDefault ? sol.tabTitle : ui.formatSolutionTabTitle(sol, baseLevel)),
        steps: localizedSteps,
        goalVariants: localizedVariants,
        proof: solEntry?.proof ?? sol.proof,
      };
    });

    return {
      ...baseLevel,
      title: lvlEntry?.title ?? baseLevel.title,
      prompt: lvlEntry?.prompt ?? baseLevel.prompt,
      solutions: localizedSolutions,
    };
  }
}

export const i18n = new I18nManager();
