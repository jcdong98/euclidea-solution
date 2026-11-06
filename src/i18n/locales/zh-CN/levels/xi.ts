import type { LevelLocaleEntry } from '../../../types';

export const XI_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Xi/L1": {
    "title": "三角形内接菱形",
    "prompt": "在已知三角形内作一个内接菱形，使其与三角形共用顶角 A。",
    "solutions": {
      "l-3L-12E": {
        "variantLabels": {
          "1": "内接菱形 ADEF"
        },
        "proof": {
          "keyIdea": "与 $\\triangle ABC$ 共用顶角 $A$ 的内接菱形，其过点 $A$ 的对角线必平分 $\\angle BAC$，从而唯一确定边 $BC$ 上的对角顶点。",
          "steps": [
            "由菱形对角线平分顶角可知，与 [[A]] 相对的菱形顶点必为角平分线 [[angleBisector(B, A, C)]] 与边 [[seg(B, C)]] 的交点 [[E]]。",
            "过 [[E]] 分别作 [[parallel(seg(C, A), E)]] 与 [[parallel(seg(A, B), E)]]，依次交 [[seg(A, B)]] 于 $D$、交 [[seg(C, A)]] 于 $F$，得到内接平行四边形 $ADEF$。",
            "由 $DE \\parallel AC$ 及内错角相等得 $\\angle DEA = \\angle EAC = \\angle DAB$，故 $|AD| = |DE|$；邻边相等的平行四边形 $ADEF$ 即为所求菱形。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "内接菱形 ADEF"
        },
        "proof": {
          "keyIdea": "以边 $BC$ 上的同一点 $P_1$ 为公共底角顶点构造三组位似等腰三角形，仅用 $1\\text{E}$ 基本尺规操作同时作出 $\\angle A$ 的平分线与菱形的两条平行边。",
          "steps": [
            "作 [[circle(B, A)]] 交 [[seg(B, C)]] 于 [[P₁]]（$|BP_1| = |BA|$），再作 [[circle(C, P₁)]] 交 [[seg(C, A)]] 于 [[P₂]]（$|CP_1| = |CP_2|$）。连结 [[line(P₁, P₂)]] 交 [[circle(B, A)]] 于另一点 [[P₃]]，等腰三角形 $\\triangle CP_1P_2$ 与 $\\triangle BP_1P_3$ 在 [[P₁]] 处有相等底角（对顶角），故 $BP_3 \\parallel CP_2 = AC$。",
            "在 [[circle(B, A)]] 上有 $|BA| = |BP_3|$，结合 $BP_3 \\parallel AC$ 得 $\\angle BAP_3 = \\angle BP_3A = \\angle P_3AC$，故 [[line(A, P₃)]] 平分 $\\angle BAC$，交 [[seg(B, C)]] 于菱形对角顶点 [[E]]。",
            "作 [[circle(E, P₁)]]，分别交 [[line(P₁, P₂)]] 于另一点 [[P₄]]、交 [[line(A, P₁)]] 于另一点 [[P₅]]。由于等腰 $\\triangle EP_1P_4$ 与 $\\triangle CP_1P_2$、等腰 $\\triangle EP_1P_5$ 与 $\\triangle BP_1A$ 在 [[P₁]] 处分别共底角，即得 [[line(E, P₄)]] $\\parallel AC$ 且 [[line(E, P₅)]] $\\parallel AB$，从而完成内接菱形。"
          ]
        }
      }
    }
  },
  "Xi/L2": {
    "title": "与两圆相切的圆",
    "prompt": "作一个与两个已知圆都相切的圆，使其在给定点处与其中一个圆相切。",
    "solutions": {
      "l-4L-10E": {
        "variantLabels": {
          "1": "过点 A 的公切圆"
        },
        "proof": {
          "keyIdea": "将给定切点 $A$ 沿法线 $O_1A$ 偏移圆 $c_2$ 的半径 $r_2$，利用阿波罗尼斯相切问题的半径伸缩法，把与两圆相切转化为圆心到 $O_2$ 与偏移点等距。",
          "steps": [
            "凡在 [[A]] 处与 [[circle(O₁, A)]] 相切的圆，其圆心 $C$ 必在法线 [[line(O₁, A)]] 上，且半径 $r = |CA|$。",
            "在 [[c₂]] 上任取点 [[P]] 以量取半径 $r_2 = |O_2P|$，作 [[compass(O₂, P; A)]] 交 [[line(O₁, A)]] 于点 [[D]]，使 $|AD| = r_2$。",
            "作 [[perpBisector(O₂, D)]] 交 [[line(O₁, A)]] 于 [[C]]，由 $C, A, D$ 共线得 $|CO_2| = |CD| = ||CA| \\pm |AD|| = |r \\pm r_2|$，故 [[circle(C, A)]] 在 [[A]] 处与 [[circle(O₁, A)]] 相切且与 [[c₂]] 相切。"
          ]
        }
      },
      "e-7L-7E": {
        "variantLabels": {
          "1": "过点 A 的公切圆"
        },
        "proof": {
          "keyIdea": "借助等腰三角形在 $c_2$ 中作出平行于 $O_1A$ 的半径，再以切点 $A$ 为位似中心投影，直接定位 $c_2$ 上的切点。",
          "steps": [
            "作法线 [[line(O₁, A)]] 及连线 [[line(A, O₂)]]，后者交 [[c₂]] 于 [[M]]；作 [[circle(A, M)]] 交 [[line(O₁, A)]] 于 [[Q]]（$|AM| = |AQ|$），再连 [[line(M, Q)]] 交 [[c₂]] 于另一点 [[P]]。",
            "等腰三角形 $\\triangle AMQ$ 与 $\\triangle O_2MP$ 在 [[M]] 处共底角，故顶角所夹半径满足 $O_2P \\parallel AQ = O_1A$。",
            "连 [[line(A, P)]] 交 [[c₂]] 于另一点 [[T]]，作 [[line(O₂, T)]] 交 [[line(O₁, A)]] 于 [[C]]。由 $CA \\parallel O_2P$ 及 $|O_2P| = |O_2T|$ 导角得 $\\angle CAT = \\angle O_2PT = \\angle O_2TP = \\angle CTA$，故 $|CA| = |CT|$，[[circle(C, A)]] 即同时与 [[circle(O₁, A)]]（切于 [[A]]）及 [[c₂]]（切于 [[T]]）相切。"
          ]
        }
      },
      "v-6L-14E-2V": {
        "variantLabels": {
          "1": "过点 A 的公切圆 (₁)",
          "2": "过点 A 的公切圆 (₂)"
        },
        "proof": {
          "keyIdea": "将切点 $A$ 沿法线 $O_1A$ 向两侧分别偏移 $\\pm r_2$，同时求出与 $c_2$ 内外不同侧相切的两个圆心。",
          "steps": [
            "在 [[c₂]] 上取点 [[P]]（$r_2 = |O_2P|$），作 [[compass(O₂, P; A)]] 交法线 [[line(O₁, A)]] 于对称两点 [[D_a]] 与 [[D_b]]，使 $|AD_a| = |AD_b| = r_2$。",
            "作 [[perpBisector(O₂, D_a)]] 与 [[perpBisector(O₂, D_b)]] 分别交 [[line(O₁, A)]] 于圆心 [[C_a]] 与 [[C_b]]，满足 $|C_aO_2| = |C_aD_a| = ||C_aA| \\pm r_2|$ 及 $|C_bO_2| = |C_bD_b| = ||C_bA| \\mp r_2|$。",
            "分别作 [[circle(C_a, A)]] 与 [[circle(C_b, A)]]，即得过 [[A]] 与 [[circle(O₁, A)]] 相切且与 [[c₂]] 相切的全部两解。"
          ],
          "variantNote": "两个偏移点 $D_a, D_b$ 将点 $A$ 沿 $O_1A$ 向内外各平移 $r_2$，分别对应所求圆与 $c_2$ 的两种相切方式。"
        }
      }
    }
  },
  "Xi/L3": {
    "title": "由斜边切点作直角三角形",
    "prompt": "以线段 AB 为斜边作直角三角形 ABC（C 为直角顶点），使其内切圆与斜边 AB 相切于给定点 D。",
    "solutions": {
      "l-6L-10E": {
        "variantLabels": {
          "1": "直角三角形 ABC"
        },
        "proof": {
          "keyIdea": "直角三角形 $\\triangle ABC$（$\\angle C = 90^\\circ$）的面积等于内切圆分斜边所得两切线长之积 $|AD|\\cdot|BD|$，这一面积约束等价于直角顶点 $C$ 到中垂线上高度为 $|AB|/4$ 的定点 $F$ 的距离满足 $|FC| = |FD|$。",
          "steps": [
            "作 [[perpBisector(A, B)]] 得斜边 [[seg(A, B)]]（设长为 $c$）的中点 [[M]]，作泰勒斯外接圆 [[circle(M, A)]] 交 [[perpBisector(A, B)]] 于弧中点 [[E]]（$|ME| = c/2$），再作 [[perpBisector(M, E)]] 交 [[perpBisector(A, B)]] 于 $ME$ 的中点 [[F]]（$|MF| = c/4$）。",
            "设直角三角形两直角边为 $a, b$，内切圆半径 $r = \\frac{a+b-c}{2}$，由切线长相等得 $|AD| = b - r$、$|BD| = a - r$，从而 $|AD|\\cdot|BD| = (b-r)(a-r) = \\frac{1}{2}ab = \\frac{1}{2}ch_C$（$h_C$ 为斜边上的高）；另一方面 $|AD|\\cdot|BD| = \\frac{c^2}{4} - |MD|^2$。",
            "对 [[circle(M, A)]] 在 [[F]] 同侧半圆上的点 $C$（$|MC| = c/2$），向 $MF$ 投影得 $|FC|^2 = |MC|^2 + |MF|^2 - 2|MF|h_C = \\frac{c^2}{16} + \\frac{c^2}{4} - \\frac{1}{2}ch_C$，而 $|FD|^2 = \\frac{c^2}{16} + |MD|^2$；故 $|FC| = |FD|$ 当且仅当 $\\frac{1}{2}ch_C = \\frac{c^2}{4} - |MD|^2 = |AD|\\cdot|BD|$。",
            "作 [[circle(F, D)]] 交 [[circle(M, A)]] 于点 [[C₁]]，连结 [[line(A, C₁)]] 与 [[line(B, C₁)]] 即得所求直角三角形 $\\triangle ABC_1$。"
          ]
        }
      },
      "e-7L-9E": {
        "variantLabels": {
          "1": "直角三角形 ABC"
        },
        "proof": {
          "keyIdea": "复用泰勒斯圆 $M(A)$ 作为线段 $ME$ 垂直平分线的一半，仅添一个圆 $E(M)$ 即可省去 $1\\text{E}$ 定位四分之一高度点 $F$（$|MF| = |AB|/4$）。",
          "steps": [
            "作 [[perpBisector(A, B)]] 取 [[seg(A, B)]] 的中点 [[M]]，并作泰勒斯圆 [[circle(M, A)]] 交 [[perpBisector(A, B)]] 于 [[E]]（$|ME| = |MA| = c/2$）。",
            "因 [[circle(M, A)]] 已以 [[M]] 为圆心且过 [[E]]，只需补画 [[circle(E, M)]] 交 [[circle(M, A)]] 于 [[U₁]]、[[U₂]]，直线 [[line(U₁, U₂)]] 即为 $ME$ 的中垂线（比宏工具省 $1\\text{E}$），交 [[perpBisector(A, B)]] 于点 [[F]]（$|MF| = c/4$）。",
            "同 $6\\text{L}$ 证法，[[circle(M, A)]] 上的点满足 $|FC_1| = |FD|$ 等价于 $\\frac{1}{2}ch_{C_1} = \\frac{c^2}{4} - |MD|^2 = |AD|\\cdot|BD|$；故作 [[circle(F, D)]] 交 [[circle(M, A)]] 于 [[C₁]]，连 [[line(A, C₁)]] 与 [[line(B, C₁)]] 即成。"
          ]
        }
      },
      "v-9L-13E-2V": {
        "variantLabels": {
          "1": "直角三角形 ABC (₁)",
          "2": "直角三角形 ABC (₂)"
        },
        "proof": {
          "keyIdea": "将第一个直角顶点 $C_1$ 关于斜边 $AB$ 对称反射，即得另一半平面内的对称直角三角形解。",
          "steps": [
            "由 [[perpBisector(A, B)]] 与 [[perpBisector(M, E)]] 依次作出 [[M]]、[[circle(M, A)]]、[[E]] 及 [[F]]，取 [[circle(F, D)]] 与 [[circle(M, A)]] 的交点 [[C₁]]，连 [[line(A, C₁)]]、[[line(B, C₁)]] 得第一个解。",
            "作 [[circle(A, C₁)]] 交 [[circle(M, A)]] 于另一点 [[C₂]]。由于两圆圆心 [[A]]、[[M]] 均在直线 $AB$ 上，[[C₂]] 即为 [[C₁]] 关于直线 $AB$ 的对称点。",
            "由关于斜边 [[seg(A, B)]] 的轴对称性，[[line(A, C₂)]] 与 [[line(B, C₂)]] 所围 $\\triangle ABC_2$ 同样以 [[C₂]] 为直角顶点，且其内切圆仍在定点 [[D]] 处与 [[seg(A, B)]] 相切。"
          ],
          "variantNote": "关于斜边 $AB$ 的反射保持 $A, B, D$ 不变，在 $AB$ 两侧半平面各给出一个全等的直角三角形。"
        }
      }
    }
  },
  "Xi/L4": {
    "title": "四直线上的平行四边形",
    "prompt": "作一个以点 O 为中心的平行四边形，使其四个顶点分别位于四条已知直线上。",
    "solutions": {
      "l-8L-14E": {
        "variantLabels": {
          "1": "四直线上的平行四边形"
        },
        "proof": {
          "keyIdea": "过中心 $O$ 作平行线对 $l_1 \\parallel l_2$ 的平行中位线，将交点 $l_1 \\cap l_3$ 与 $l_2 \\cap l_4$ 沿各自截线关于该中位线倍长反射，由三角形中位线定理可知所得顶点关于 $O$ 的中心对称点必分别落在 $l_1$ 与 $l_2$ 上。",
          "steps": [
            "取交点 [[A]] $= l_1 \\cap l_3$ 与 [[D]] $= l_2 \\cap l_4$，作 [[parallel(l₁, O)]] 分别交 [[l₃]] 于 [[E]]、交 [[l₄]] 于 [[F]]；以 [[circle(E, A)]] 将 [[A]] 沿 [[l₃]] 关于 [[E]] 对称得 [[V₃]]，以 [[circle(F, D)]] 将 [[D]] 沿 [[l₄]] 关于 [[F]] 对称得 [[V₄]]。",
            "作对角线 [[line(V₃, O)]] 交 [[l₁]] 于 [[V₁]]。在 $\\triangle V_3AV_1$ 中，$OE \\parallel AV_1$ 且 [[E]] 为 $AV_3$ 中点，由三角形中位线定理知 [[O]] 必平分 $V_3V_1$。",
            "同理，由 $OF \\parallel l_2$ 且 [[F]] 平分 $DV_4$，可知 [[V₄]] 关于 [[O]] 的中心对称点落在 [[l₂]] 上。中心对称将 $V_3 \\mapsto V_1$ 并将边 [[line(V₃, V₄)]] 映为过 [[V₁]] 的平行线 [[parallel(line(V₃, V₄), V₁)]]，故该平行线与 [[l₂]] 的交点即为 [[V₂]]（同时画出边 $V_1V_2$），再补连 [[line(V₄, V₁)]] 与 [[line(V₂, V₃)]] 即以 $8\\text{L}$ 完成作图。"
          ]
        }
      },
      "e-9L-12E": {
        "variantLabels": {
          "1": "四直线上的平行四边形"
        },
        "proof": {
          "keyIdea": "由过 $O$ 的中位平行线定出 $V_3 \\in l_3$ 与 $V_4 \\in l_4$ 后，直接用两条 $1\\text{E}$ 对角线过 $O$ 中心投影求出对侧顶点，比再用一次平行线宏节省 $2\\text{E}$。",
          "steps": [
            "取 [[A]] $= l_1 \\cap l_3$、[[D]] $= l_2 \\cap l_4$，作 [[parallel(l₁, O)]] 交 [[l₃]]、[[l₄]] 于 [[E]]、[[F]]，再用 [[circle(E, A)]] 与 [[circle(F, D)]] 分别对称倍长得 [[V₃]] $\\in l_3$ 与 [[V₄]] $\\in l_4$。",
            "连对角线 [[line(V₃, O)]] 交 [[l₁]] 于 [[V₁]]，连 [[line(V₄, O)]] 交 [[l₂]] 于 [[V₂]]。由 $OE \\parallel l_1$（[[E]] 平分 $AV_3$）及 $OF \\parallel l_2$（[[F]] 平分 $DV_4$），三角形中位线定理保证 [[O]] 同时平分 $V_1V_3$ 与 $V_2V_4$。",
            "对角线在 [[O]] 处互相平分，故依次连结 [[line(V₁, V₂)]]、[[line(V₂, V₃)]]、[[line(V₃, V₄)]]、[[line(V₄, V₁)]] 即得所求平行四边形。"
          ]
        }
      },
      "v-17L-20E-2V": {
        "variantLabels": {
          "1": "四直线上的平行四边形 (₁)",
          "2": "四直线上的平行四边形 (₂)"
        },
        "proof": {
          "keyIdea": "将截线 $l_3, l_4$ 与平行线对 $(l_1, l_2)$ 按两种配对方式组合——分别取 $(A = l_1 \\cap l_3,\\, D = l_2 \\cap l_4)$ 与 $(C = l_2 \\cap l_3,\\, B = l_1 \\cap l_4)$——复用同一条中位线 $EF$ 即可作出全部两个平行四边形。",
          "steps": [
            "作 [[parallel(l₁, O)]] 交 [[l₃]]、[[l₄]] 于 [[E]]、[[F]]。将 [[A]] $= l_1 \\cap l_3$、[[D]] $= l_2 \\cap l_4$ 经 [[circle(E, A)]]、[[circle(F, D)]] 对称至 [[V₃]]、[[V₄]]，再过 [[O]] 连 [[line(V₃, O)]]、[[line(V₄, O)]] 交得 [[V₁]] $\\in l_1$、[[V₂]] $\\in l_2$，连结 [[line(V₁, V₂)]]、[[line(V₂, V₃)]]、[[line(V₃, V₄)]]、[[line(V₄, V₁)]] 得第一个平行四边形。",
            "交换 [[l₁]] 与 [[l₂]] 在两条截线上的配对：取 [[C]] $= l_2 \\cap l_3$、[[B]] $= l_1 \\cap l_4$，用 [[circle(E, C)]] 与 [[circle(F, B)]] 分别关于 [[E]]、[[F]] 对称得 [[W₄]] $\\in l_3$ 与 [[W₃]] $\\in l_4$。",
            "过 [[O]] 作 [[line(W₃, O)]] 交 [[l₁]] 于 [[W₁]]、作 [[line(W₄, O)]] 交 [[l₂]] 于 [[W₂]]；在 $\\triangle W_4CW_2$ 与 $\\triangle W_3BW_1$ 中由中位线定理知 [[O]] 平分 $W_1W_3$ 与 $W_2W_4$，连结 [[line(W₁, W₂)]]、[[line(W₂, W₃)]]、[[line(W₃, W₄)]]、[[line(W₄, W₁)]] 即得第二个平行四边形。"
          ],
          "variantNote": "两种变体分别对应平行带 $l_1, l_2$ 与两条截线 $l_3, l_4$ 绕中心 $O$ 的两种不同循环顶点配对。"
        }
      }
    }
  },
  "Xi/L5": {
    "title": "鞋匠刀",
    "prompt": "已知三个圆心共线且两两相切的圆，求作一个与这三个圆都相切的圆。",
    "solutions": {
      "le-5L-7E": {
        "variantLabels": {
          "1": "帕普斯鞋匠刀切圆"
        },
        "proof": {
          "keyIdea": "以切点 $A = c_1 \\cap c_2$ 为反演中心作反演变换（施泰纳圆链/帕普斯圆链法），以外圆 $c_2$ 的弧极点 $E$ 为圆心且过 $A, B$ 的圆反演为过 $B$ 且与连心线成 $45^\\circ$ 角的直线，恰好穿过反演后切圆与 $c_1, c_3$ 像的切点。",
          "steps": [
            "标出外圆直径两端切点 [[A]] $= c_1 \\cap c_2$ 与 [[B]] $= c_3 \\cap c_2$。作 [[perpBisector(A, B)]] 必过外圆圆心 [[O]] 并交 [[c₂]] 于极点 [[E]]，此时 $\\triangle AOE$ 为等腰直角三角形（$\\angle OAE = 45^\\circ$），且 $|EA| = |EB|$，故 [[circle(E, A)]] 亦过 [[B]]。",
            "以 [[A]] 为反演中心、$|AB|$ 为反演半径作反演：在 [[A]] 处同与 $AB$ 正交相切的 [[c₂]]、[[c₁]] 映为两条平行于法向的直线 $\\ell_2, \\ell_1 \\perp AB$（$\\ell_2$ 过 [[B]]），[[c₃]] 映为与 $\\ell_2$ 切于 [[B]] 且与 $\\ell_1$ 切于直线 $AB$ 上的圆 $c_3^*$（设半径为 $r^*$），而所求帕普斯圆 $\\omega$ 映为夹在 $\\ell_2, \\ell_1$ 之间且与 $c_3^*$ 外切的等大圆 $\\omega^*$（圆心沿垂直于 $AB$ 方向平移 $2r^*$）。",
            "由于 [[circle(E, A)]] 过 [[A]]、[[B]] 且在 [[A]] 处的切线（正交于半径 $AE$）与 $AB$ 成 $45^\\circ$ 角，它反演为过 [[B]] 斜穿平行带的 $45^\\circ$ 直线。相对点 [[B]] 而言，$\\omega^*$ 与 $c_3^*$ 的切点偏移为 $(r^*, r^*)$，与 $\\ell_1$ 的切点偏移为 $(2r^*, 2r^*)$，均落在该 $45^\\circ$ 直线上！反演回原图，[[circle(E, A)]] 与 [[c₁]]、[[c₃]] 的第二交点 [[F]]、[[G]] 即为 $\\omega$ 在两内圆上的精确切点。",
            "因两圆相切时连心线必过切点，连结 [[line(O₁, F)]] 与 [[line(O₂, G)]] 交于圆心 [[P]]，作 [[circle(P, F)]] 即与鞋匠刀三圆同时相切。"
          ]
        }
      },
      "v-9L-11E-2V": {
        "variantLabels": {
          "1": "帕普斯鞋匠刀切圆 (₁)",
          "2": "帕普斯鞋匠刀切圆 (₂)"
        },
        "proof": {
          "keyIdea": "对外圆 $c_2$ 关于连心线对称的两个弧极点 $E_a, E_b$ 分别实施极点圆法，即可作出连心线两侧成镜像的一对帕普斯切圆。",
          "steps": [
            "取切点 [[A]] $= c_1 \\cap c_2$ 与 [[B]] $= c_3 \\cap c_2$，作 [[perpBisector(A, B)]] 交 [[c₂]] 于对径极点 [[E_a]] 与 [[E_b]]。",
            "由极点 [[E_a]] 作 [[circle(E_a, A)]] 分别交 [[c₁]]、[[c₃]] 于切点 [[F_a]]、[[G_a]]，连 [[line(O₁, F_a)]] 与 [[line(O₂, G_a)]] 交于 [[P_a]]，作 [[circle(P_a, F_a)]] 得第一个切圆。",
            "关于连心线 $O_1O_2$ 对称地，由 [[E_b]] 作 [[circle(E_b, A)]] 交 [[c₁]]、[[c₃]] 于 [[F_b]]、[[G_b]]，取 [[line(O₁, F_b)]] 与 [[line(O₂, G_b)]] 的交点 [[P_b]]，作 [[circle(P_b, F_b)]] 得镜像切圆。"
          ],
          "variantNote": "三个已知圆关于共线圆心连线 $O_1OO_2$ 轴对称，上下两极点 $E_a, E_b$ 分别生成嵌在上下两弯鞋匠刀区域内的一对对称帕普斯圆。"
        }
      }
    }
  }
};
