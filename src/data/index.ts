import type { LevelSpecData } from '../types/level';
import { CHAPTERS_CATALOG } from './chapters';
import { ALPHA_L1_ANGLE_60 } from './levels/alpha_L1';
import { ALPHA_L2_PERP_BISECTOR } from './levels/alpha_L2';
import { ALPHA_L3_MIDPOINT } from './levels/alpha_L3';
import { ALPHA_L4_CIRCLE_IN_SQUARE } from './levels/alpha_L4';
import { ALPHA_L5_RHOMBUS_IN_RECTANGLE } from './levels/alpha_L5';
import { ALPHA_L6_CIRCLE_CENTER } from './levels/alpha_L6';
import { ALPHA_L7_INSCRIBED_SQUARE } from './levels/alpha_L7';
import { ALPHA_T1_EQUILATERAL_TRIANGLE } from './levels/alpha_T1';
import { ALPHA_T3_PERP_BISECTOR_TOOL } from './levels/alpha_T3';
import { BETA_LEVELS } from './levels/beta';
import { GAMMA_LEVELS } from './levels/gamma';
import { DELTA_LEVELS } from './levels/delta';
import { EPSILON_LEVELS } from './levels/epsilon';
import { ZETA_LEVELS } from './levels/zeta';
import { ETA_LEVELS } from './levels/eta';
import { THETA_LEVELS } from './levels/theta';
import { IOTA_LEVELS } from './levels/iota';
import { KAPPA_LEVELS } from './levels/kappa';
import { LAMBDA_LEVELS } from './levels/lambda';
import { MU_LEVELS } from './levels/mu';
import { NU_LEVELS } from './levels/nu';
import { XI_LEVELS } from './levels/xi';
import { OMICRON_LEVELS } from './levels/omicron';

export { CHAPTERS_CATALOG };

export const IMPLEMENTED_LEVELS: readonly LevelSpecData[] = [
  ALPHA_T1_EQUILATERAL_TRIANGLE,
  ALPHA_L1_ANGLE_60,
  ALPHA_L2_PERP_BISECTOR,
  ALPHA_T3_PERP_BISECTOR_TOOL,
  ALPHA_L3_MIDPOINT,
  ALPHA_L4_CIRCLE_IN_SQUARE,
  ALPHA_L5_RHOMBUS_IN_RECTANGLE,
  ALPHA_L6_CIRCLE_CENTER,
  ALPHA_L7_INSCRIBED_SQUARE,
  ...BETA_LEVELS,
  ...GAMMA_LEVELS,
  ...DELTA_LEVELS,
  ...EPSILON_LEVELS,
  ...ZETA_LEVELS,
  ...ETA_LEVELS,
  ...THETA_LEVELS,
  ...IOTA_LEVELS,
  ...KAPPA_LEVELS,
  ...LAMBDA_LEVELS,
  ...MU_LEVELS,
  ...NU_LEVELS,
  ...XI_LEVELS,
  ...OMICRON_LEVELS,
];

const LEVEL_MAP = new Map<string, LevelSpecData>(
  IMPLEMENTED_LEVELS.map((lvl) => [`${lvl.chapterId}:${lvl.shortId}`, lvl])
);

export function getLevelById(chapterId: string, shortId: string): LevelSpecData | undefined {
  return LEVEL_MAP.get(`${chapterId}:${shortId}`);
}

export function getDefaultLevel(): LevelSpecData {
  return ALPHA_T1_EQUILATERAL_TRIANGLE;
}
