import { EN_LOCALE_PACK } from './locales/en/ui';
import type { LocaleRegistryItem } from './types';

export const DEFAULT_LOCALE_CODE = 'en';

/**
 * Central locale registry.
 * Adding a new language only requires creating `src/i18n/locales/<code>/`
 * and appending one entry to `LOCALE_REGISTRY` below.
 */
export const LOCALE_REGISTRY: readonly LocaleRegistryItem[] = [
  {
    code: 'en',
    nativeLabel: 'English',
    loadPack: async () => EN_LOCALE_PACK,
  },
  {
    code: 'zh-CN',
    nativeLabel: '简体中文',
    loadPack: async () => (await import('./locales/zh-CN')).ZH_CN_LOCALE_PACK,
  },
];
