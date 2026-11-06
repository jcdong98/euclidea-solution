import type { LevelLocaleEntry } from '../../../types';
import { ALPHA_ZH_CN } from './alpha';
import { BETA_ZH_CN } from './beta';
import { DELTA_ZH_CN } from './delta';
import { EPSILON_ZH_CN } from './epsilon';
import { ETA_ZH_CN } from './eta';
import { GAMMA_ZH_CN } from './gamma';
import { IOTA_ZH_CN } from './iota';
import { KAPPA_ZH_CN } from './kappa';
import { LAMBDA_ZH_CN } from './lambda';
import { MU_ZH_CN } from './mu';
import { NU_ZH_CN } from './nu';
import { OMICRON_ZH_CN } from './omicron';
import { THETA_ZH_CN } from './theta';
import { XI_ZH_CN } from './xi';
import { ZETA_ZH_CN } from './zeta';

export const ZH_CN_LEVELS: Readonly<Record<string, LevelLocaleEntry>> = {
  ...ALPHA_ZH_CN,
  ...BETA_ZH_CN,
  ...GAMMA_ZH_CN,
  ...DELTA_ZH_CN,
  ...EPSILON_ZH_CN,
  ...ZETA_ZH_CN,
  ...ETA_ZH_CN,
  ...THETA_ZH_CN,
  ...IOTA_ZH_CN,
  ...KAPPA_ZH_CN,
  ...LAMBDA_ZH_CN,
  ...MU_ZH_CN,
  ...NU_ZH_CN,
  ...XI_ZH_CN,
  ...OMICRON_ZH_CN,
};
