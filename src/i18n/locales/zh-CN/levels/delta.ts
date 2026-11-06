import type { LevelLocaleEntry } from '../../../types';

export const DELTA_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Delta/L1": {
    "title": "倍长线段",
    "prompt": "仅用圆规在直线 AB 上求作一点 C，使得 |AC| = 2|AB|。",
    "solutions": {
      "le-3L-3E": {
        "variantLabels": {
          "1": "点 C₁"
        },
        "proof": {
          "keyIdea": "利用两个等圆交点间的 $\\sqrt{3}|AB|$ 弦长，仅添第三圆即可在以 $B$ 为圆心的圆上截出 $A$ 的对径点。",
          "steps": [
            "设 $r = |AB|$。两等圆 [[circle(A, B)]] 与 [[circle(B, A)]] 交于对称两点 [[U₁]]、[[U₂]]，构成内角为 $60^\\circ$、$120^\\circ$ 的菱形 $AU_1BU_2$，其对角线 $|U_1U_2| = \\sqrt{3}\\,r$。",
            "设 $X$ 为 [[A]] 在 [[circle(B, A)]] 上的对径点，则 [[B]] 为 $AX$ 中点（$|AX| = 2r$）。因 [[U₁]] 在以 $AX$ 为直径的 [[circle(B, A)]] 上，由直径所对圆周角为直角得 $\\angle AU_1X = 90^\\circ$，故 $|U_1X| = \\sqrt{(2r)^2 - r^2} = \\sqrt{3}\\,r = |U_1U_2|$。",
            "因此 $X$ 同时位于 [[circle(B, A)]] 与 [[circle(U₁, U₂)]] 上，且 $X \\neq U_2$（$X$ 在直线 $AB$ 上而 [[U₂]] 不在），故两圆异于 [[U₂]] 的第二交点 [[C₁]] 即为 $X$，满足 $C_1$ 在直线 $AB$ 上且 $|AC_1| = 2|AB|$。"
          ]
        }
      },
      "v-5L-5E-2V": {
        "variantLabels": {
          "1": "点 C₁ (₁)",
          "2": "点 C₂ (₂)"
        },
        "proof": {
          "keyIdea": "零额外代价从已作的 $\\sqrt{3}|AB|$ 圆上直接取出 $B$ 关于 $A$ 的对称点 $B'$，再对 $(A, B')$ 复现三圆倍长构造。",
          "steps": [
            "同 $3\\text{E}$ 作法，[[circle(A, B)]] 与 [[circle(B, A)]] 交于 [[U₁]]、[[U₂]]（$|U_1U_2| = \\sqrt{3}|AB|$），[[circle(U₁, U₂)]] 交 [[circle(B, A)]] 于射线 $AB$ 上的倍长点 [[C₁]]（$|AC_1| = 2|AB|$）。",
            "由交换 [[A]]、[[B]] 的对称性，[[B]] 在 [[circle(A, B)]] 上的对径点到 [[U₁]] 的距离同样为 $\\sqrt{3}|AB|$，故 [[circle(A, B)]] 与 [[circle(U₁, U₂)]] 异于 [[U₂]] 的交点 [[B']] 即为 [[B]] 关于 [[A]] 的中心对称点（$|AB'| = |AB|$）。",
            "因 [[circle(A, B)]] 已是以 [[A]] 为圆心、$|AB'|$ 为半径的圆，将其与 [[circle(B', A)]] 相交得 [[W₁]]、[[W₂]]，再作 [[circle(W₁, W₂)]] 截 [[circle(B', A)]] 即得 [[A]] 关于 [[B']] 的对径点 [[C₂]]，满足 $|AC_2| = 2|AB'| = 2|AB|$。"
          ],
          "variantNote": "[[C₁]] 位于射线 $AB$ 上（$B$ 为 $AC_1$ 中点），而 [[C₂]] 位于自 $A$ 出发的反向射线上（越过 $B'$ 处且 $|AC_2| = 2|AB|$）。"
        }
      }
    }
  },
  "Delta/L2": {
    "title": "60° 角 - 2",
    "prompt": "过已知点作一条直线，使其与已知直线成 60° 角。",
    "solutions": {
      "l-3L-5E": {
        "variantLabels": {
          "1": "60° 直线"
        },
        "proof": {
          "keyIdea": "在以 $P$ 为圆心的圆上构造 $60^\\circ$ 圆心角，使自 $l$ 上另一交点引出的弦与 $l$ 成 $30^\\circ$ 圆周角，再作该弦的垂直平分线。",
          "steps": [
            "在 [[l]] 上任取一般点 [[Q₁]]，作 [[circle(P, Q₁)]] 交 [[l]] 于另一点 [[Q₂]]；再作 [[circle(Q₁, P)]] 交 [[circle(P, Q₁)]] 于 [[U₁]]，得正三角形 $\\triangle PQ_1U_1$，圆心角 $\\angle Q_1PU_1 = 60^\\circ$。",
            "因 [[Q₁]]、[[Q₂]]、[[U₁]] 均在以 [[P]] 为圆心的 [[circle(P, Q₁)]] 上，由圆周角定理知弦 $Q_2U_1$ 与直线 $Q_1Q_2$（即 [[l]]）所成锐角为 $\\frac{1}{2}\\angle Q_1PU_1 = 30^\\circ$。",
            "又 $|PQ_2| = |PU_1|$，故 [[perpBisector(Q₂, U₁)]] 必过圆心 [[P]] 且垂直于弦 $Q_2U_1$，从而与 [[l]] 成 $90^\\circ - 30^\\circ = 60^\\circ$ 角。"
          ]
        }
      },
      "e-4L-4E": {
        "variantLabels": {
          "1": "60° 直线"
        },
        "proof": {
          "keyIdea": "以 $l$ 上两点为圆心作圆将 $P$ 关于 $l$ 对称至 $P'$，并复用其中一圆构造 $60^\\circ$ 圆心角，使过 $P$ 的圆周角弦与垂线 $PP' \\perp l$ 成 $30^\\circ$ 角。",
          "steps": [
            "在 [[l]] 上任取相异两点 [[Q₁]]、[[Q₂]]，作 [[circle(Q₁, P)]] 与 [[circle(Q₂, P)]]，两圆关于 [[l]] 对称，其异于 [[P]] 的第二交点 [[P']] 即为 [[P]] 关于 [[l]] 的对称点，故 $PP' \\perp l$。",
            "因 [[P']] 已在 [[circle(Q₁, P)]] 上（$|Q_1P'| = |Q_1P|$），作 [[circle(P', Q₁)]] 交 [[circle(Q₁, P)]] 于 [[V₁]]，得正三角形 $\\triangle Q_1P'V_1$（$\\angle P'Q_1V_1 = 60^\\circ$）。",
            "在以 [[Q₁]] 为圆心的 [[circle(Q₁, P)]] 中，弦 [[line(P, V₁)]] 所对圆心角为 $\\angle P'Q_1V_1 = 60^\\circ$，故由圆周角定理知该直线与垂线 $PP'$ 成 $30^\\circ$ 锐角，即与 [[l]] 成 $90^\\circ - 30^\\circ = 60^\\circ$ 角。"
          ]
        }
      },
      "v-5L-5E-2V": {
        "variantLabels": {
          "1": "60° 直线 (₁)",
          "2": "60° 直线 (₂)"
        },
        "proof": {
          "keyIdea": "利用绕 $Q_1$ 的等圆对在 $Q_1P'$ 两侧同时截出两个正三角形顶点，仅多连一直线即得关于 $PP' \\perp l$ 呈 $\\pm 30^\\circ$ 的全部两条 $60^\\circ$ 直线。",
          "steps": [
            "由 [[circle(Q₁, P)]] 与 [[circle(Q₂, P)]] 作出 [[P]] 关于 [[l]] 的对称点 [[P']]（$PP' \\perp l$），再作 [[circle(P', Q₁)]] 与 [[circle(Q₁, P)]] 交于关于 $Q_1P'$ 对称的两点 [[V₁]]、[[V₂]]（两侧均有 $\\angle P'Q_1V_1 = \\angle P'Q_1V_2 = 60^\\circ$）。",
            "在 [[circle(Q₁, P)]] 上应用圆周角定理，[[line(P, V₁)]] 与 [[line(P, V₂)]] 与垂线 $PP'$ 分别成 $+30^\\circ$ 与 $-30^\\circ$ 角，即为过 [[P]] 与 [[l]] 成 $60^\\circ$ 角的全部两条直线。"
          ],
          "variantNote": "[[line(P, V₁)]] 与 [[line(P, V₂)]] 关于 [[l]] 的垂线 $PP'$ 轴对称。"
        }
      }
    }
  },
  "Delta/L3": {
    "title": "圆外切正三角形",
    "prompt": "作已知圆的外切正三角形，使其经过已知点。",
    "solutions": {
      "l-5L-7E": {
        "variantLabels": {
          "1": "外切正三角形"
        },
        "proof": {
          "keyIdea": "以对径点 $A'$ 为圆心作一个等圆，同时定出距圆心 $2R$ 的对侧顶点 $V_1$ 以及两侧 $\\pm 60^\\circ$ 处的切点 $T_1, T_2$。",
          "steps": [
            "设 $R = |OA|$。连直径直线 [[line(O, A)]] 得 [[A]] 在 [[circle(O, A)]] 上的对径点 [[A']]，再作半径为 $R$ 的 [[circle(A', O)]]，它一方面交 [[line(O, A)]] 于 [[V₁]]（$|OV_1| = 2R$），另一方面交 [[circle(O, A)]] 于 [[T₁]]、[[T₂]]，使 $\\triangle OA'T_1$ 与 $\\triangle OA'T_2$ 均为正三角形（$\\angle A'OT_1 = \\angle A'OT_2 = 60^\\circ$）。",
            "在 $\\triangle OT_1V_1$ 中，由 $|OT_1| = R$、$|OV_1| = 2R$ 及 $\\angle T_1OV_1 = 60^\\circ$ 得 $\\angle OT_1V_1 = 90^\\circ$、$\\angle OV_1T_1 = 30^\\circ$（同理 $\\angle OT_2V_1 = 90^\\circ$、$\\angle OV_1T_2 = 30^\\circ$），故 [[line(V₁, T₁)]] 与 [[line(V₁, T₂)]] 分别切 [[circle(O, A)]] 于 [[T₁]]、[[T₂]]，且在 [[V₁]] 处夹角为 $60^\\circ$。",
            "最后过 [[A]] 作 [[perp(line(O, A), A)]]，该直线切 [[circle(O, A)]] 于 [[A]] 且垂直于角平分线 $V_1A$，分别交 [[line(V₁, T₁)]]、[[line(V₁, T₂)]] 于 [[V₃]]、[[V₂]]，即得外切正三角形 $\\triangle V_1V_2V_3$。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "外切正三角形"
        },
        "proof": {
          "keyIdea": "以圆心 $O$、半径 $2R$ 的外接圆（$1\\text{E}$）配合底边连线（$1\\text{E}$），替代过点 $A$ 耗费 $3\\text{E}$ 的垂线复合工具。",
          "steps": [
            "同 $5\\text{L}$ 解法，由 [[line(O, A)]] 与 [[circle(A', O)]] 定出 $|OV_1| = 2R$ 的顶点 [[V₁]] 及 [[circle(O, A)]] 上的切点 [[T₁]]、[[T₂]]，使切线 [[line(V₁, T₁)]]、[[line(V₁, T₂)]] 满足 $OT_1 \\perp V_1T_1$、$OT_2 \\perp V_1T_2$ 且在 [[V₁]] 处成 $60^\\circ$ 角。",
            "作半径为 $2R$ 的外接圆 [[circle(O, V₁)]]，分别再交 [[line(V₁, T₁)]]、[[line(V₁, T₂)]] 于 [[V₃]]、[[V₂]]。因 $OT_1$、$OT_2$ 分别垂直平分弦 $V_1V_3$、$V_1V_2$，圆心角 $\\angle V_1OV_3 = \\angle V_1OV_2 = 2 \\cdot 60^\\circ = 120^\\circ$，余下 $\\angle V_2OV_3 = 120^\\circ$ 且被射线 $OA$ 平分。",
            "故 $\\triangle V_1V_2V_3$ 为正三角形，其第三边 [[line(V₃, V₂)]] 垂直于 $OA$ 且到 [[O]] 的距离为 $2R\\cos 60^\\circ = R$，恰在其中点 [[A]] 处与 [[circle(O, A)]] 相切。"
          ]
        }
      }
    }
  },
  "Delta/L4": {
    "title": "圆内接正三角形",
    "prompt": "在已知圆内作一个以已知点为顶点的内接正三角形（圆心未给出）。",
    "solutions": {
      "l-5L-9E": {
        "variantLabels": {
          "1": "内接正三角形"
        },
        "proof": {
          "keyIdea": "将圆 $c$ 上任一点 $P$ 关于过 $A$ 的未知直径对称至 $P'$，再分别取 $P'$ 与 $AP$ 上两侧 $\\pm 60^\\circ$ 正三角形顶点的中垂线，消去 $P$ 的任意方位角。",
          "steps": [
            "设 [[c]] 的未知圆心为 $O$。在 [[c]] 上任取点 [[P]]，作 [[circle(A, P)]] 再交 [[c]] 于 [[P']]，则 [[P']] 为 [[P]] 关于直径 $AO$ 的对称点：设射线 $AP$ 相对 $AO$ 的有向角为 $+\\alpha$，则射线 $AP'$ 的有向角为 $-\\alpha$。",
            "由 [[circle(A, P)]] 与 [[circle(P, A)]] 相交得 $AP$ 两侧的正三角形顶点 [[E₁]]、[[E₂]]，满足 $|AE_1| = |AE_2| = |AP| = |AP'|$，且射线 $AE_1, AE_2$ 相对 $AO$ 的有向角为 $\\alpha \\pm 60^\\circ$。",
            "因 [[P']]、[[E₁]]、[[E₂]] 同在以 [[A]] 为圆心的 [[circle(A, P)]] 上，中垂线 [[perpBisector(P', E₂)]] 与 [[perpBisector(P', E₁)]] 均过 [[A]]，且相对 $AO$ 的有向角分别为 $\\frac{-\\alpha + (\\alpha \\pm 60^\\circ)}{2} = \\pm 30^\\circ$，它们交 [[c]] 于 [[B]]、[[C]]，满足 $\\angle BAC = 60^\\circ$ 且 $|AB| = |AC|$；连 [[line(B, C)]] 即成内接正三角形 $\\triangle ABC$。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "内接正三角形"
        },
        "proof": {
          "keyIdea": "借助弦切角定理仅用两圆直接定出圆 $c$ 在点 $A$ 处切线上的一点 $T$，再由 $AT$ 向两侧张开 $\\pm 60^\\circ$ 正三角形射线，即得与过 $A$ 直径成 $\\pm 30^\\circ$ 的两条边。",
          "steps": [
            "在 [[c]] 上任取 [[P]]，作 [[circle(P, A)]] 再交 [[c]] 于 [[D]]。等弦 $|PA| = |PD|$ 在 [[c]] 上对等弧，由圆周角定理与弦切角定理知，$\\angle PAD$ 等于弦 $AP$ 与 [[c]] 在 [[A]] 处切线 $\\ell_A$ 的夹角，即直线 $AP$ 平分 $AD$ 与切线 $\\ell_A$ 的夹角。",
            "作 [[circle(A, D)]] 交 [[circle(P, A)]] 于异于 [[D]] 的点 [[T]]，则 [[T]] 为 [[D]] 关于连心线 $AP$ 的对称点；因 $AP$ 平分 $AD$ 与 $\\ell_A$ 的夹角，点 [[T]] 必直接落在切线 $\\ell_A$ 上。",
            "再作 [[circle(T, A)]] 与等半径（$|AD| = |AT|$）的 [[circle(A, D)]] 交于正三角形顶点 [[G₁]]、[[G₂]]，则直线 [[line(A, G₁)]]、[[line(A, G₂)]] 与切线 $AT$ 分别成 $\\pm 60^\\circ$ 角（即与过 [[A]] 的直径成 $\\pm 30^\\circ$ 角），交 [[c]] 于 [[B]]、[[C]]，连 [[line(B, C)]] 即得正三角形 $\\triangle ABC$。"
          ]
        }
      }
    }
  },
  "Delta/L5": {
    "title": "平分两个矩形",
    "prompt": "作一条直线，将两个已知矩形的面积同时二等分。",
    "solutions": {
      "le-5L-5E": {
        "variantLabels": {
          "1": "面积平分线"
        },
        "proof": {
          "keyIdea": "矩形关于其对角线交点中心对称，任何直线平分矩形面积当且仅当它经过矩形的对称中心。",
          "steps": [
            "连对角线 [[line(A₁, C₁)]] 与 [[line(B₁, D₁)]] 交于矩形 $A_1B_1C_1D_1$ 的中心 [[O₁]]；连对角线 [[line(A₂, C₂)]] 与 [[line(B₂, D₂)]] 交于矩形 $A_2B_2C_2D_2$ 的中心 [[O₂]]。",
            "绕矩形中心旋转 $180^\\circ$ 将矩形映为自身，同时互换过该中心的任意直线所截出的两部分，故两部分全等且等积；因此连接两中心的直线 [[line(O₁, O₂)]] 同时平分两个矩形的面积。"
          ]
        }
      }
    }
  },
  "Delta/L6": {
    "title": "2 的平方根",
    "prompt": "设 |AB| = 1。在射线 AB 上求作一点 C，使得线段 AC 的长度等于 √2。",
    "solutions": {
      "le-3L-5E": {
        "variantLabels": {
          "1": "√2 点 C"
        },
        "proof": {
          "keyIdea": "一圆两用：以 $B$ 为圆心过 $A$ 的单位圆既在射线上倍长 $AB$，又在过 $B$ 的中垂线上截出单位直角边。",
          "steps": [
            "作半径为 $|AB| = 1$ 的 [[circle(B, A)]]，再交 [[ray(A, B)]] 于异于 [[A]] 的点 [[D]]，使 [[B]] 成为 $AD$ 的中点。",
            "于是 [[perpBisector(A, D)]] 过点 [[B]] 且垂直于 [[ray(A, B)]]，交 [[circle(B, A)]] 于点 [[P]]，满足 $|BP| = |BA| = 1$。在等腰直角 $\\triangle ABP$ 中由勾股定理得 $|AP| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$，作 [[circle(A, P)]] 交 [[ray(A, B)]] 于 [[C]]，即有 $|AC| = \\sqrt{2}$。"
          ]
        }
      }
    }
  },
  "Delta/L7": {
    "title": "3 的平方根",
    "prompt": "设 |AB| = 1。在射线 AB 上求作一点 C，使得线段 AC 的长度等于 √3。",
    "solutions": {
      "le-3L-3E": {
        "variantLabels": {
          "1": "√3 点 C"
        },
        "proof": {
          "keyIdea": "仅用三个圆在直径为 $2$ 的半圆内接一个 $30^\\circ$–$60^\\circ$–$90^\\circ$ 直角三角形，直接截出长直角边 $\\sqrt{3}$。",
          "steps": [
            "作半径 $|AB| = 1$ 的 [[circle(B, A)]] 交 [[ray(A, B)]] 于异于 [[A]] 的点 [[D]]，则 $AD$ 为 [[circle(B, A)]] 的直径，$|AD| = 2$。",
            "作半径 $|DB| = 1$ 的 [[circle(D, B)]] 交 [[circle(B, A)]] 于 [[P]]，则 $|DP| = 1$。由直径 $AD$ 所对圆周角 $\\angle APD = 90^\\circ$ 及勾股定理得 $|AP| = \\sqrt{2^2 - 1^2} = \\sqrt{3}$，作 [[circle(A, P)]] 将该长度转移至 [[ray(A, B)]] 上的交点 [[C]]，即得 $|AC| = \\sqrt{3}$。"
          ]
        }
      }
    }
  },
  "Delta/L8": {
    "title": "15° 角",
    "prompt": "以已知射线为一边作一个 15° 角。",
    "solutions": {
      "l-3L-6E": {
        "variantLabels": {
          "1": "15° 直线"
        },
        "proof": {
          "keyIdea": "用两个圆直接定出 $30^\\circ$ 圆周角的边上点而无需连线，再用角平分线工具一步二等分得 $15^\\circ$。",
          "steps": [
            "在 [[ray(A, B)]] 上任取异于 [[A]] 的点 [[P]]，作 [[circle(P, A)]] 交 [[ray(A, B)]] 于另一点 [[Q]]（$|PA| = |PQ|$），再作 [[circle(Q, P)]] 交 [[circle(P, A)]] 于 [[M]]，得正三角形 $\\triangle PQM$（$\\angle QPM = 60^\\circ$）。",
            "在等腰 $\\triangle APM$（$|PA| = |PM|$）中，由外角 $\\angle QPM = 60^\\circ$ 得 $\\angle PAM = 30^\\circ$，故 [[angleBisector(P, A, M)]] 将 $\\angle PAM$ 平分，与 [[ray(A, B)]] 成 $15^\\circ$ 角。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "15° 直线"
        },
        "proof": {
          "keyIdea": "以 $A$ 为 $30^\\circ$ 顶角作等腰三角形，使其 $75^\\circ$ 底边割线在以 $P$ 为圆心的圆上截出 $90^\\circ$ 圆心角弧，从而余下 $30^\\circ$ 圆心角（对应 $15^\\circ$ 圆周角）。",
          "steps": [
            "在 [[ray(A, B)]] 上取点 [[P]]（设 $r = |AP|$），作 [[circle(P, A)]] 交 [[ray(A, B)]] 于 [[Q]] 得直径 $AQ$；再作 [[circle(Q, P)]] 交 [[circle(P, A)]] 于 [[M]]，有 $|PM| = r$、$\\angle QPM = 60^\\circ$ 且 $\\angle PAM = \\angle PMA = 30^\\circ$。",
            "作 [[circle(A, M)]] 交 [[ray(A, B)]] 于 [[S]]（$|AS| = |AM| = \\sqrt{3}\\,r$）。等腰 $\\triangle ASM$ 顶角 $\\angle SAM = 30^\\circ$，故底角 $\\angle AMS = 75^\\circ$；因 [[P]] 位于线段 $AS$ 上，有 $\\angle PMS = \\angle AMS - \\angle AMP = 75^\\circ - 30^\\circ = 45^\\circ$。",
            "割线 [[line(M, S)]] 再交 [[circle(P, A)]] 于异于 [[M]] 的点 [[X]]。在等腰 $\\triangle PMX$（$|PM| = |PX| = r$）中，$\\angle PMX = 45^\\circ$ 推出 $\\angle MPX = 90^\\circ$，故 [[X]] 越过 [[ray(A, B)]] 位于圆心角 $\\angle QPX = 90^\\circ - 60^\\circ = 30^\\circ$ 处，由圆周角定理知 [[line(A, X)]] 与 [[ray(A, B)]] 成 $\\frac{1}{2}(30^\\circ) = 15^\\circ$ 角。"
          ]
        }
      },
      "v-7L-7E-2V": {
        "variantLabels": {
          "1": "15° 直线 (₁)",
          "2": "15° 直线 (₂)"
        },
        "proof": {
          "keyIdea": "对 $\\pm 30^\\circ$ 两侧对称点 $M_1, M_2$ 复用同一个以 $A$ 为圆心、$\\sqrt{3}|AP|$ 为半径的圆，从而同时截出过 $A$ 的两条 $\\pm 15^\\circ$ 直线。",
          "steps": [
            "[[circle(P, A)]] 与 [[circle(Q, P)]] 的两个对称交点 [[M₂]]、[[M₁]] 相对 [[Q]] 绕 [[P]] 呈 $\\pm 60^\\circ$ 角，且到 [[A]] 的距离均为 $|AM_1| = |AM_2| = \\sqrt{3}|AP|$，故 [[circle(A, M₂)]] 同时经过 [[M₁]]，并交 [[ray(A, B)]] 于点 [[S]]（$|AS| = |AM_1| = |AM_2|$）。",
            "分别作两条 $75^\\circ$ 底边割线 [[line(M₂, S)]] 与 [[line(M₁, S)]]，再交 [[circle(P, A)]] 于 [[X₁]]、[[X₂]]；由 $\\angle M_1PX_2 = \\angle M_2PX_1 = 90^\\circ$ 知 [[X₁]]、[[X₂]] 相对 [[Q]] 绕 [[P]] 的圆心角为 $\\mp 30^\\circ$，故 [[line(A, X₁)]] 与 [[line(A, X₂)]] 与 [[ray(A, B)]] 分别成 $+15^\\circ$ 与 $-15^\\circ$ 角。"
          ],
          "variantNote": "[[line(A, X₁)]] 与 [[line(A, X₂)]] 为过点 [[A]] 在 [[ray(A, B)]] 两侧各成 $15^\\circ$ 角的全部两条对称直线。"
        }
      }
    }
  },
  "Delta/L9": {
    "title": "对边中点作正方形",
    "prompt": "已知正方形两条对边的中点，求作该正方形。",
    "solutions": {
      "l-6L-14E": {
        "variantLabels": {
          "1": "正方形 ABCD"
        },
        "proof": {
          "keyIdea": "过 $M_1, M_2$ 分别作 $M_1M_2$ 的垂线直接得到两条对边，再在其中一条边上向两侧截取 $|M_1M_2|$ 并作中垂线，定出相距 $|M_1M_2|/2$ 的另外两条平行边。",
          "steps": [
            "设边长 $s = |M_1M_2|$。连中位线 [[line(M₁, M₂)]]，过 [[M₁]]、[[M₂]] 分别作垂线 [[perp(line(M₁, M₂), M₁)]] 与 [[perp(line(M₁, M₂), M₂)]]，即得过两对边中点且间距为 $s$ 的两条对边所在直线。",
            "以半径 $s$ 作 [[circle(M₁, M₂)]] 交 [[perp(line(M₁, M₂), M₁)]] 于 [[M₁]] 两侧相距 $s$ 的点 [[P₁]]、[[P₂]]；作中垂线 [[perpBisector(M₁, P₁)]] 与 [[perpBisector(M₁, P₂)]]，它们均平行于 [[line(M₁, M₂)]] 且距 [[M₁]] 为 $s/2$，与前两条边相交即围出正方形的四个顶点 [[V₁]]、[[V₂]]、[[V₃]]、[[V₄]]。"
          ]
        }
      },
      "e-10L-10E": {
        "variantLabels": {
          "1": "正方形 ABCD"
        },
        "proof": {
          "keyIdea": "利用三个半径同为 $s = |M_1M_2|$ 的等圆构造一条倾角 $30^\\circ$ 的直径（其两端点到 $M_1M_2$ 的垂距恰为 $\\pm s\\sin 30^\\circ = \\pm s/2$），并结合菱形与正三角形一次定出全部四条边。",
          "steps": [
            "设 $s = |M_1M_2|$。两等圆 [[circle(M₁, M₂)]] 与 [[circle(M₂, M₁)]] 交于 [[U]]（$\\triangle M_1M_2U$ 为正三角形，$\\angle M_2M_1U = 60^\\circ$），连直径 [[line(M₁, U)]] 交 [[circle(M₁, M₂)]] 于对径点 [[U']]。由直径所对圆周角 $\\angle UM_2U' = 90^\\circ$ 知，[[circle(M₂, M₁)]] 的直径 [[line(M₂, U')]] 与 $M_1M_2$ 夹角为 $90^\\circ - 60^\\circ = 30^\\circ$，故其两端点 [[E₁]]、[[E₂]] 到直线 $M_1M_2$ 的有向垂距恰为 $\\pm s\\sin 30^\\circ = \\pm s/2$。",
            "在等腰直角 $\\triangle UM_2E_1$ 中（$|M_2U| = |M_2E_1| = s$，$\\angle UM_2E_1 = 120^\\circ - 30^\\circ = 90^\\circ$），$\\angle M_2UE_1 = 45^\\circ$，故直线 [[line(U, E₁)]] 与 $M_1U$ 夹角 $\\angle M_1UN_1 = 180^\\circ - (60^\\circ + 45^\\circ) = 75^\\circ$。在 [[circle(M₁, M₂)]] 的等腰 $\\triangle M_1UN_1$ 中顶角 $\\angle UM_1N_1 = 30^\\circ$，使交点 [[N₁]] 相对 $M_1M_2$ 位于 $60^\\circ + 30^\\circ = 90^\\circ$ 处，从而 [[line(M₁, N₁)]] $\\perp M_1M_2$ 给出第一条正方形边。",
            "作第三个半径为 $s$ 的等圆 [[circle(E₁, M₂)]]：它交 [[circle(M₁, M₂)]] 于 [[F₁]]（$\\neq M_2$），构成菱形 $M_1M_2E_1F_1$ 使 [[line(E₁, F₁)]] $\\parallel M_1M_2$ 且垂距为 $+s/2$；同时交 [[circle(M₂, M₁)]] 于绕 [[M₂]] 呈 $30^\\circ \\pm 60^\\circ$ 的两点 [[N₂]] 与 [[F₂]]——其中 $+90^\\circ$ 处的 [[N₂]] 给出对边 [[line(M₂, N₂)]] $\\perp M_1M_2$，$-30^\\circ$ 处的 [[F₂]]（垂距 $-s\\sin 30^\\circ = -s/2$）给出第四边 [[line(E₂, F₂)]] $\\parallel M_1M_2$，四线相交即定出顶点 [[V₁]]、[[V₂]]、[[V₃]]、[[V₄]]。"
          ]
        }
      }
    }
  },
  "Delta/L10": {
    "title": "邻边中点作正方形",
    "prompt": "已知正方形两条邻边的中点，求作该正方形。",
    "solutions": {
      "l-7L-16E": {
        "variantLabels": {
          "1": "正方形 ABCD"
        },
        "proof": {
          "keyIdea": "借 $\\sqrt{3}|M_1M_2|$ 辅助圆将 $M_2$ 关于 $M_1$ 中心对称至边 $DA$ 上的点 $W$，再平分自 $W$ 引出的 $30^\\circ$ 与 $60^\\circ$ 方向，直接作出与 $M_1M_2$ 成 $45^\\circ$ 角的边 $DA$。",
          "steps": [
            "设 $d = |M_1M_2|$。绕边 $AB$ 中点 [[M₁]] 作 $180^\\circ$ 中心对称会互换 $B \\leftrightarrow A$，并将含 [[M₂]] 的边直线 $BC$ 映为平行的对边直线 $DA$，故 [[M₂]] 关于 [[M₁]] 的对称点 [[W]] 必落在边 $DA$ 上。",
            "对称轴（对角线 $BD$）[[perpBisector(M₁, M₂)]] 与 [[circle(M₁, M₂)]] 交于正三角形顶点 [[U₁]]、[[U₂]]（$|U_1U_2| = \\sqrt{3}\\,d$）。同第 4.1 关，[[circle(U₁, U₂)]] 再交 [[circle(M₁, M₂)]] 于倍长点 [[W]]（$|WM_1| = d, |WM_2| = 2d$），并再交 [[perpBisector(M₁, M₂)]] 于 [[U₃]]（$|U_1U_3| = \\sqrt{3}\\,d$）。",
            "在以 $WM_2$ 为直径的 [[circle(M₁, M₂)]] 上，$|M_2U_1| = d$ 给出 $\\angle M_2WU_1 = 30^\\circ$；而 [[U₃]] 距 $M_1M_2$ 中点的高度为 $\\frac{\\sqrt{3}}{2}d + \\sqrt{3}\\,d = \\frac{3\\sqrt{3}}{2}d$（且 [[W]] 到该中点距离为 $\\frac{3}{2}d$），故 $\\tan\\angle M_2WU_3 = \\sqrt{3}$，即 $\\angle M_2WU_3 = 60^\\circ$。因此角平分线 [[angleBisector(U₁, W, U₃)]] 过 [[W]] 且与 $M_1M_2$ 成 $45^\\circ$ 角，即为边 $DA$ 所在直线，交对角线 [[perpBisector(M₁, M₂)]] 于顶点 [[D]]。",
            "过 [[D]] 作垂线 [[perp(b₁, D)]] 得边 $CD$，过 [[M₂]] 作垂线 [[perp(perp(b₁, D), M₂)]] 得边 $BC$ 并交对角线 [[perpBisector(M₁, M₂)]] 于顶点 [[B]]，最后连 [[line(M₁, B)]] 得边 $AB$，各边相交即定出 [[A]] 与 [[C]]。"
          ]
        }
      },
      "e-8L-10E": {
        "variantLabels": {
          "1": "正方形 ABCD"
        },
        "proof": {
          "keyIdea": "以 $M_1M_2$ 为直径的圆与其中垂线交于所求正方形的公共直角顶点 $B_1$ 及中心 $B_2$，再以 $B_2$ 为圆心过 $B_1$ 作外接圆即可一次截出其余全部顶点。",
          "steps": [
            "连 [[line(M₁, M₂)]] 与 [[perpBisector(M₁, M₂)]] 交于中点 [[O_mid]]，作以 $M_1M_2$ 为直径的 [[circle(O_mid, M₁)]] 交 [[perpBisector(M₁, M₂)]] 于 [[B₁]]、[[B₂]]，构成小正方形 $M_1B_1M_2B_2$，满足 $\\angle M_1B_1M_2 = 90^\\circ$ 且 $B_2M_1 \\perp B_1M_1$、$B_2M_2 \\perp B_1M_2$。",
            "作 [[line(M₁, B₁)]] 与 [[line(M₂, B₁)]] 定出交于直角顶点 [[B₁]] 的两条邻边；再以 [[B₂]] 为圆心作外接圆 [[circle(B₂, B₁)]]，分别再交这两条边于 [[A₁]]、[[C₁]]，并交对角线 [[perpBisector(M₁, M₂)]] 于对径点 [[D₁]]。",
            "因圆心 [[B₂]] 到弦 $B_1A_1$、$B_1C_1$ 的垂足恰为 [[M₁]]、[[M₂]]，故由垂径定理知 [[M₁]]、[[M₂]] 分别为 $A_1B_1$、$B_1C_1$ 的中点；又 $B_1D_1$ 与 $A_1C_1$ 为 [[circle(B₂, B₁)]] 的正交直径，连 [[line(C₁, D₁)]] 与 [[line(D₁, A₁)]] 即成正方形 $A_1B_1C_1D_1$。"
          ]
        }
      },
      "v-13L-15E-2V": {
        "variantLabels": {
          "1": "正方形 ABCD (₁)",
          "2": "正方形 ABCD (₂)"
        },
        "proof": {
          "keyIdea": "互换以 $M_1M_2$ 为直径的圆上已作出的直角顶点 $B_1$ 与正方形中心 $B_2$ 的角色，即可同时作出关于 $M_1M_2$ 轴对称的两个正方形。",
          "steps": [
            "由 [[line(M₁, M₂)]] 与 [[perpBisector(M₁, M₂)]] 交得 [[O_mid]]，作 [[circle(O_mid, M₁)]] 定出对称直角点 [[B₁]] 与 [[B₂]]：以 [[B₁]] 为公共角顶点、[[B₂]] 为外接圆圆心，依次作 [[line(M₁, B₁)]]、[[line(M₂, B₁)]]、[[circle(B₂, B₁)]]、[[line(C₁, D₁)]] 与 [[line(D₁, A₁)]]，即得第一个正方形 $A_1B_1C_1D_1$（顶点 [[A₁]]、[[B₁]]、[[C₁]]、[[D₁]]）。",
            "关于直线 [[line(M₁, M₂)]] 轴对称地，[[B₂]] 与 [[B₁]] 恰分别为第二个正方形的公共角顶点与中心：作 [[line(M₁, B₂)]] 与 [[line(M₂, B₂)]]，用 [[circle(B₁, B₂)]] 截出 [[A₂]]、[[C₂]]、[[D₂]]，再连 [[line(C₂, D₂)]] 与 [[line(D₂, A₂)]] 即得正方形 $A_2B_2C_2D_2$。"
          ],
          "variantNote": "正方形 $A_1B_1C_1D_1$ 与 $A_2B_2C_2D_2$ 关于直线 [[line(M₁, M₂)]] 轴对称，每一个正方形的邻边公共顶点恰为另一个正方形的中心。"
        }
      }
    }
  }
};
