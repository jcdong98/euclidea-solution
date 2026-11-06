import type { LevelLocaleEntry } from '../../../types';

export const ALPHA_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  'Alpha/T1': {
    title: '正三角形',
    prompt: '以已知线段 AB 为边作一个正三角形。',
    solutions: {
      'le-4L-4E': {
        steps: {
          1: '以 A 为圆心、过点 B 作圆（半径为 |AB|）。',
          2: '以 B 为圆心、过点 A 作圆（半径为 |AB|）。',
          3: '标出 circle(A, B) 与 circle(B, A) 的一个交点 C。',
          4: '连接 A 与 C。',
          5: '连接 B 与 C，完成 △ABC。',
        },
        proof: {
          steps: [
            '因 [[C]] 为 [[circle(A, B)]] 与 [[circle(B, A)]] 的交点，故 $|AC| = |BC| = |AB|$。连接 [[line(A, C)]] 与 [[line(B, C)]] 即得正三角形 $\\triangle ABC$。',
          ],
        },
      },
      'v-6L-6E-2V': {
        steps: {
          3: '标出 AB 一侧的交点 C₁。',
          4: '标出 AB 另一侧的对称交点 C₂。',
          6: '连接 B 与 C₁，完成 △ABC₁。',
          8: '连接 B 与 C₂，完成 △ABC₂。',
        },
        proof: {
          steps: [
            '以 [[line(A, B)|AB]] 为底构成正三角形当且仅当顶点 $X$ 满足 $|XA| = |XB| = |AB|$，即 $X \\in$ [[circle(A, B)]] $\\cap$ [[circle(B, A)]]。两圆恰交于对称两点 [[C₁]] 与 [[C₂]]，分别连线即得全部两个解 $\\triangle ABC_1$ 与 $\\triangle ABC_2$（`2V`）。',
          ],
        },
      },
    },
  },

  'Alpha/L1': {
    title: '60° 角',
    prompt: '过顶点 A 作一条直线，使其与已知射线成 60° 角。',
    solutions: {
      'le-3L-3E': {
        steps: {
          1: "在已知射线上任取异于 A 的一点 B'。",
          5: '过 A、C 作直线，即与已知射线成 60° 角。',
        },
        variantLabels: {
          1: '直线 AC (+60°)',
        },
        proof: {
          steps: [
            "在 [[ray(A, B)]] 上任取 [[B']] $\\neq$ [[A]]，交点 [[C]] $\\in$ [[circle(A, B')]] $\\cap$ [[circle(B', A)]] 满足 $|AC| = |B'C| = |AB'|$，故 $\\triangle AB'C$ 为正三角形，$\\angle B'AC = 60^\\circ$，直线 [[line(A, C)]] 即为所求。",
          ],
        },
      },
      'v-4L-4E-2V': {
        steps: {
          1: "在已知射线上任取异于 A 的一点 B'。",
          4: '标出第一交点 C₁（+60° 一侧）。',
          5: '标出第二交点 C₂（−60° 一侧）。',
          6: '过 A、C₁ 作第一条 60° 直线。',
          7: '过 A、C₂ 作第二条 60° 直线。',
        },
        variantLabels: {
          1: '直线 AC₁ (+60°)',
          2: '直线 AC₂ (−60°)',
        },
        proof: {
          steps: [
            "[[circle(A, B')]] 与 [[circle(B', A)]] 的两个对称交点 [[C₁]]、[[C₂]] 在 [[ray(A, B)]] 两侧分别构成正三角形 $\\triangle AB'C_1$ 与 $\\triangle AB'C_2$，从而给出过 [[A]] 与已知射线成 $60^\\circ$ 角的全部两条对称直线 [[line(A, C₁)]] 与 [[line(A, C₂)]]（`2V`）。",
          ],
        },
      },
    },
  },

  'Alpha/L2': {
    title: '垂直平分线',
    prompt: '作已知线段 AB 的垂直平分线。',
    solutions: {
      'le-3L-3E': {
        steps: {
          5: '过交点 C₁、C₂ 作直线，即为线段 AB 的垂直平分线。',
        },
        variantLabels: {
          1: '垂直平分线 C₁C₂',
        },
        proof: {
          steps: [
            '[[C₁]] 与 [[C₂]] 均属于 [[circle(A, B)]] $\\cap$ [[circle(B, A)]]，故 $|C_1A| = |C_1B| = |AB|$ 且 $|C_2A| = |C_2B| = |AB|$。到 [[A]]、[[B]] 等距点的轨迹即为线段 [[line(A, B)|AB]] 的垂直平分线，由相异两点 [[C₁]]、[[C₂]] 唯一确定直线 [[line(C₁, C₂)]]。',
          ],
        },
      },
    },
  },

  'Alpha/T3': {
    title: '垂直平分线工具',
    prompt: '使用“垂直平分线”工具作出线段 AB 的垂直平分线。',
    solutions: {
      'le-1L-3E': {
        steps: {
          1: '直接对端点 A 与 B 使用垂直平分线工具。',
        },
        variantLabels: {
          1: '垂直平分线 perpBisector(A, B)',
        },
        proof: {
          steps: [
            '直接对端点 [[A]]、[[B]] 应用垂直平分线工具即可一步（`1L`）作出 [[perpBisector(A, B)]]，其底层展开等价于第 1.2 关已证的两圆一线（`3E`）基本作图。',
          ],
        },
      },
    },
  },

  'Alpha/L3': {
    title: '线段中点',
    prompt: '求作由点 A、B 所确定线段的中点 M。',
    solutions: {
      'le-2L-4E': {
        variantLabels: {
          1: '中点 M',
        },
        proof: {
          steps: [
            '点 [[M]] 同时位于 [[line(A, B)]] 与 [[perpBisector(A, B)]] 上，故与 $A, B$ 共线且满足 $|MA| = |MB|$，即为线段 $AB$ 的唯一中点。',
          ],
        },
      },
    },
  },

  'Alpha/L4': {
    title: '正方形内切圆',
    prompt: '在已知正方形 ABCD 内作一个内切圆。',
    solutions: {
      'le-3L-5E': {
        steps: {
          1: '作边 AB 的垂直平分线。',
          2: '标出边 AB 的中点 M_AB。',
          3: '连正方形对角线 AC。',
          4: '标出垂直平分线与对角线 AC 的交点（即中心 O）。',
          5: '以中心 O 为圆心、过中点 M_AB 作内切圆。',
        },
        variantLabels: {
          1: '内切圆 circle(O, M_AB)',
        },
        proof: {
          steps: [
            '由正方形 $ABCD$ 的对称性，[[perpBisector(A, B)]] 为平行于 [[line(B, C)|BC]] 与 [[line(D, A)|DA]] 的中位线，它平分 [[line(A, B)|AB]] 于 [[M_AB]]，并与对角线 [[line(A, C)]] 交于正方形中心 [[O]]。中心 [[O]] 到四边的垂距均等于 $|OM_{AB}|$，故 [[circle(O, M_AB)]] 与四边分别相切于各边中点。',
          ],
        },
      },
    },
  },

  'Alpha/L5': {
    title: '矩形内接菱形',
    prompt: '在已知矩形 ABCD 内作一个与之共用一条对角线的内接菱形。',
    solutions: {
      'le-3L-5E': {
        steps: {
          1: '作对角线 AC 的垂直平分线。',
          2: '标出与长边 AB 的交点 E₁。',
          3: '标出与对边 CD 的交点 F₁。',
          4: '连接 A 与 F₁。',
          5: '连接 C 与 E₁（其余两边 AE₁、CF₁ 已在矩形长边上）。',
        },
        variantLabels: {
          1: '菱形 AE₁CF₁',
        },
        proof: {
          steps: [
            '设对角线 $AC$ 中点为 $O$。因 [[E₁]]、[[F₁]] 位于 [[perpBisector(A, C)]] 上，有 $|AE_1| = |E_1C|$ 且 $|AF_1| = |F_1C|$。又由 [[line(A, B)|AB]] $\\parallel$ [[line(C, D)|CD]] 得 $\\angle OAE_1 = \\angle OCF_1$，故 $\\triangle AOE_1 \\cong \\triangle COF_1$（ASA），$|OE_1| = |OF_1|$。两条对角线 $AC$ 与 $E_1F_1$ 互相垂直平分，且由 $|AD| < |AB|$ 知 [[E₁]]、[[F₁]] 落在长边线段内部，故连 [[line(A, F₁)]]、[[line(C, E₁)]] 即得内接菱形 $AE_1CF_1$。',
          ],
        },
      },
      'v-6L-10E-2V': {
        steps: {
          1: '作对角线 AC 的垂直平分线。',
          5: '连接 C 与 E₁，完成第一个菱形 AE₁CF₁。',
          6: '作另一条对角线 BD 的垂直平分线。',
          10: '连接 D 与 E₂，完成第二个菱形 BE₂DF₂。',
        },
        variantLabels: {
          1: '菱形 AE₁CF₁',
          2: '菱形 BE₂DF₂',
        },
        proof: {
          steps: [
            '与矩形 $ABCD$ 共用一条对角线的内接菱形，必以 $AC$ 或 $BD$ 为对角线，其另外两个顶点由该对角线的垂直平分线在长边 [[line(A, B)|AB]] 与 [[line(C, D)|CD]] 上唯一截出。分别作出 [[perpBisector(A, C)]] 与 [[perpBisector(B, D)]] 并连边，即得全部两个对称解 $AE_1CF_1$ 与 $BE_2DF_2$（`2V`）。',
          ],
        },
      },
    },
  },

  'Alpha/L6': {
    title: '求作圆心',
    prompt: '求作已知圆 c 的圆心 O。',
    solutions: {
      'l-2L-6E': {
        steps: {
          1: '在已知圆 c 上任取一点 P₀。',
          2: '在圆 c 上任取第二点 P₁（异于 P₀）。',
          3: '在圆 c 上任取第三点 P₂（异于 P₀、P₁）。',
          4: '作弦 P₀P₁ 的垂直平分线。',
          5: '作弦 P₀P₂ 的垂直平分线。',
          6: '标出两条弦垂直平分线的交点 O。',
        },
        variantLabels: {
          1: '圆心 O',
        },
        proof: {
          steps: [
            '圆上任意弦的垂直平分线必过圆心。在 [[c]] 上任取互异三点 [[P₀]]、[[P₁]]、[[P₂]]，两条不平行弦的垂直平分线 [[perpBisector(P₀, P₁)]] 与 [[perpBisector(P₀, P₂)]] 的唯一交点即为圆心 [[O]]（`2L · 6E`）。',
          ],
        },
      },
      'e-5L-5E': {
        steps: {
          2: '在圆 c 上取非对径点 P₁。',
          4: '标出圆 c 与 circle(P₀, P₁) 的另一交点 P₂（使 |P₀P₂| = |P₀P₁|）。',
          9: '连接 Q₁、Q₂，得到弦 P₀P₁ 的垂直平分线。',
          12: '连接 R₁、R₂，得到弦 P₀P₂ 的垂直平分线。',
          13: '标出两垂直平分线的交点，即为圆心 O。',
        },
        variantLabels: {
          1: '圆心 O',
        },
        proof: {
          keyIdea:
            '令两条等长弦的中垂线共用同一个圆 [[circle(P₀, P₁)]]，从而省去一圆，将步数由 `6E` 降至 `5E`。',
          steps: [
            '取 [[P₂]] $\\in$ [[c]] $\\cap$ [[circle(P₀, P₁)]] 可保证 $|P_0P_2| = |P_0P_1|$，于是 [[circle(P₀, P₁)]]、[[circle(P₁, P₀)]] 与 [[circle(P₂, P₀)]] 三圆等半径。',
            '因此 [[line(Q₁, Q₂)]] 与 [[line(R₁, R₂)]] 分别为弦 $P_0P_1$ 与 $P_0P_2$ 的垂直平分线；由 $P_0, P_1, P_2$ 在 [[c]] 上互异知两直线不平行，必唯一交于圆心 [[O]]。',
          ],
        },
      },
    },
  },

  'Alpha/L7': {
    title: '圆内接正方形',
    prompt: '在已知圆 circle(O, A) 内作一个以已知点 A 为顶点的内接正方形。',
    solutions: {
      'l-6L-8E': {
        steps: {
          1: '过圆心 O 与顶点 A 作直径所在直线 OA。',
          2: '标出 A 在圆上的对径点 C。',
          3: '作直径 AC 的垂直平分线。',
          4: '标出垂直直径在圆上的第一交点 V₁。',
          5: '标出垂直直径在圆上的对径交点 V₂。',
          9: '连接 V₂ 与 A，完成内接正方形 AV₁CV₂。',
        },
        variantLabels: {
          1: '正方形 AV₁CV₂',
        },
        proof: {
          steps: [
            '过圆心 [[O]] 的直径直线 [[line(O, A)]] 与其中垂线 [[perpBisector(A, C)]] 互相垂直于 [[O]]，将 [[circle(O, A)]] 四等分为 $90^\\circ$ 弧，交点依次为 [[A]]、[[V₁]]、[[C]]、[[V₂]]，顺次连边即得内接正方形 $AV_1CV_2$（`6L · 8E`）。',
          ],
        },
      },
      'e-7L-7E': {
        steps: {
          1: '以 A 为圆心、过圆心 O 作圆 circle(A, O)。',
          4: '以 P₁ 为圆心、过点 P₂ 作圆 circle(P₁, P₂)。',
          5: '标出 circle(O, A) 与 circle(P₁, P₂) 异于 P₂ 的交点 C（即 A 的对径点）。',
          6: '过 O、P₁ 作直线，截 circle(P₁, P₂) 得一条直径。',
          9: '连接 C、E，该直线直接构成过 C 的一条正方形边。',
          12: '连接 C、F，构成过 C 的另一条正交边。',
          14: '连接 V₂、A，仅用 7E 完成内接正方形 AV₁CV₂。',
        },
        variantLabels: {
          1: '正方形 AV₁CV₂',
        },
        proof: {
          keyIdea:
            '利用 $\\bigcirc(P_1, P_2)$ 同时定出对径点 $C$ 以及过 $C$ 呈 $\\pm 45^\\circ$ 的两条正方形边所在直线，无需作出直径 $AC$，仅用 2 圆 5 线（`7E`）完成作图。',
          steps: [
            '设 $R = |OA|$。由 [[P₁]]、[[P₂]] $\\in$ [[circle(O, A)]] $\\cap$ [[circle(A, O)]] 知 $\\triangle OAP_1$ 与 $\\triangle OAP_2$ 均为正三角形，即 [[P₁]]、[[P₂]] 位于 [[A]] 两侧 $\\pm 60^\\circ$ 弧处，且 $|P_1P_2| = \\sqrt{3}R$。',
            '在 [[circle(O, A)]] 中，长为 $\\sqrt{3}R$ 的弦所对圆心角为 $120^\\circ$，故 [[circle(P₁, P₂)]] 除过 [[P₂]]（$-60^\\circ$）外必交 [[circle(O, A)]] 于 $+180^\\circ$ 处的 [[C]]，即 [[C]] 为 [[A]] 的对径点，且 $\\angle P_1OC = 120^\\circ$，$\\angle OP_1C = \\angle OCP_1 = 30^\\circ$。',
            '直线 [[line(O, P₁)]] 截 [[circle(P₁, P₂)]] 得直径 $EF$（其中 [[O]] 介于 [[P₁]] 与 [[E]] 之间）。在等腰 $\\triangle P_1CE$ 中（$|P_1C| = |P_1E| = \\sqrt{3}R$，顶角 $\\angle EP_1C = 30^\\circ$），底角 $\\angle P_1CE = 75^\\circ$，故 $\\angle OCE = 75^\\circ - 30^\\circ = 45^\\circ$；又由直径 $EF$ 所对圆周角 $\\angle ECF = 90^\\circ$，知另一侧 $\\angle OCF = 45^\\circ$。',
            '因此 [[line(C, E)]] 与 [[line(C, F)]] 关于直径 $CA$ 对称且夹角均为 $45^\\circ$，它们截 [[circle(O, A)]] 所得交点 [[V₁]]、[[V₂]] 恰为两侧半圆弧中点，且自身直接构成边 $CV_1$ 与 $CV_2$；再连 [[line(A, V₁)]] 与 [[line(V₂, A)]] 即成内接正方形 $AV_1CV_2$。',
          ],
        },
      },
    },
  },
};
