import type { LevelLocaleEntry } from '../../../types';

export const GAMMA_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Gamma/L1": {
    "title": "弦的中点",
    "prompt": "过圆内已知点作一条以该点为中点的弦。",
    "solutions": {
      "le-2L-4E": {
        "variantLabels": {
          "1": "弦所在直线"
        },
        "proof": {
          "steps": [
            "连接 [[line(O, M)]] 并过圆内点 [[M]] 作垂线 [[perp(line(O, M), M)]]，截 [[circle(O)]] 得弦 $PQ$。因直角三角形 $\\triangle OMP$ 与 $\\triangle OMQ$ 共用直角边 $OM$ 且半径 $|OP| = |OQ|$，故 $|MP| = |MQ|$，[[M]] 即为弦 $PQ$ 的中点。"
          ]
        }
      }
    }
  },
  "Gamma/L2": {
    "title": "由角和垂心作三角形",
    "prompt": "作一条连接已知角两边的线段，使所得三角形的垂心为点 O。",
    "solutions": {
      "l-3L-7E": {
        "variantLabels": {
          "1": "第三边 XY"
        },
        "proof": {
          "steps": [
            "要使 [[O]] 成为顶点分别在 [[ray(V, A)]]、[[ray(V, B)]] 上的 $\\triangle VXY$ 的垂心，两条高 $YO \\perp VX$ 与 $XO \\perp VY$ 必须分别落在 [[perp(ray(V, A), O)]] 与 [[perp(ray(V, B), O)]] 上，从而唯一确定 [[ray(V, B)]] 上的 [[Y]] 与 [[ray(V, A)]] 上的 [[X]]。",
            "因 $\\triangle VXY$ 的两条高交于 [[O]]，由三角形三条高共点的性质必有 $VO \\perp XY$，故连 [[line(X, Y)]] 即得所求三角形。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "第三边 XY"
        },
        "proof": {
          "keyIdea": "令两次轴对称作高共用同一个以顶点 [[V]] 为圆心、过 [[O]] 的辅助圆，使过 [[O]] 作两条垂线的消耗由 $6\\text{E}$ 降至 $5\\text{E}$。",
          "steps": [
            "作 [[circle(V, O)]] 分别交 [[ray(V, A)]] 于 [[P]]、交 [[ray(V, B)]] 于 [[Q]]。再作 [[circle(P, O)]] 与 [[circle(V, O)]] 交于异于 [[O]] 的点 [[O₁]]，即将 [[O]] 关于直线 $VP$ 对称反射，故 [[line(O, O₁)]] $\\perp$ [[ray(V, A)]]，交 [[ray(V, B)]] 定出顶点 [[Y]]。",
            "复用 [[circle(V, O)]] 并作 [[circle(Q, O)]]，将 [[O]] 关于直线 $VQ$ 对称至异于 [[O]] 的点 [[O₂]]，于是 [[line(O, O₂)]] $\\perp$ [[ray(V, B)]]，交 [[ray(V, A)]] 定出顶点 [[X]]。",
            "因 $\\triangle VXY$ 的两条高 $YO$ 与 $XO$ 交于 [[O]]，由垂心共点性知过 [[V]] 的第三条高亦过 [[O]] 且垂直于 [[line(X, Y)]]，故 [[O]] 为 $\\triangle VXY$ 的垂心。"
          ]
        }
      }
    }
  },
  "Gamma/L3": {
    "title": "垂直平分线的交点",
    "prompt": "作一条连接已知角两边的线段，使所得三角形三条边的垂直平分线交于点 O。",
    "solutions": {
      "le-2L-2E": {
        "variantLabels": {
          "1": "第三边 XY"
        },
        "proof": {
          "keyIdea": "$\\triangle VXY$ 的三边垂直平分线共点于 [[O]] 当且仅当 [[O]] 为其外心，即 [[V]]、[[X]]、[[Y]] 三点共圆于 [[circle(O, V)]]。",
          "steps": [
            "作 [[circle(O, V)]] 分别交 [[ray(V, A)]]、[[ray(V, B)]] 于异于 [[V]] 的点 [[X]] 与 [[Y]]，得等半径 $|OV| = |OX| = |OY|$。",
            "因 [[O]] 到 [[V]]、[[X]]、[[Y]] 等距，它同时位于边 $VX$、$VY$ 与 $XY$ 的垂直平分线上，故连 [[line(X, Y)]] 所得 $\\triangle VXY$ 的外心即为 [[O]]。"
          ]
        }
      }
    }
  },
  "Gamma/L4": {
    "title": "三条等长线段 - 1",
    "prompt": "已知 ∠ABC 及其内部一点 M，在射线 BA 上求点 D、在射线 BC 上求点 E，并作线段 DM 与 ME，使得 BD = DM = ME。",
    "solutions": {
      "le-4L-6E": {
        "variantLabels": {
          "1": "等长折线 B–D–M–E"
        },
        "proof": {
          "keyIdea": "先用 [[B]]、[[M]] 的等距轨迹确定 [[ray(B, A)]] 上的点 [[D]]，再以 [[M]] 为圆心将半径 $|MD|$ 转截到 [[ray(B, C)]] 上。",
          "steps": [
            "[[ray(B, A)]] 上的点 [[D]] 满足 $|BD| = |DM|$ 当且仅当它位于 [[perpBisector(B, M)]] 上，故 [[D]] 唯一确定为 [[ray(B, A)]] $\\cap$ [[perpBisector(B, M)]]。",
            "以 [[M]] 为圆心的 [[circle(M, D)]] 半径为 $|MD| = |BD|$，故它与 [[ray(B, C)]] 的交点 [[E]] 满足 $|ME| = |DM| = |BD|$；连 [[line(D, M)]] 与 [[line(M, E)]] 即完成所求两条线段。"
          ]
        }
      },
      "v-5L-7E-2V": {
        "variantLabels": {
          "1": "等长折线 B–D–M–E (₁)",
          "2": "等长折线 B–D–M–E (₂)"
        },
        "proof": {
          "steps": [
            "取 [[ray(B, A)]] 与 [[perpBisector(B, M)]] 的交点，唯一确定满足 $|BD| = |DM|$ 的点 [[D]]。",
            "因 $|MD| = |BD|$ 大于 [[M]] 到 [[ray(B, C)]] 的距离，且端点 [[B]] 位于 [[circle(M, D)]] 外部，故 [[circle(M, D)]] 与 [[ray(B, C)]] 交于相异两点 [[E₁]] 与 [[E₂]]；连 [[line(D, M)]]、[[line(M, E₁)]] 与 [[line(M, E₂)]] 即得 $|BD| = |DM| = |ME_1| = |ME_2|$。"
          ],
          "variantNote": "点 [[D]] 唯一确定，而 [[circle(M, D)]] 截 [[ray(B, C)]] 于两点，从而产生 $(B, D, M, E_1)$ 与 $(B, D, M, E_2)$ 全部两组等长折线解。"
        }
      }
    }
  },
  "Gamma/L5": {
    "title": "过点且与直线相切的圆",
    "prompt": "作一个过点 A 且在点 B 处与已知直线相切的圆。",
    "solutions": {
      "l-3L-7E": {
        "variantLabels": {
          "1": "相切圆"
        },
        "proof": {
          "steps": [
            "在 [[B]] 处与 [[l]] 相切的圆，圆心必在法线 [[perp(l, B)]] 上；过 [[A]]、[[B]] 两点的圆，圆心必在 [[perpBisector(A, B)]] 上。因 [[A]] $\\notin$ [[l]]，两轨迹唯一交点 [[O]] 满足 $OB \\perp$ [[l]] 且 $|OA| = |OB|$，故 [[circle(O, B)]] 过点 [[A]] 且在 [[B]] 处与 [[l]] 相切。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "相切圆"
        },
        "proof": {
          "keyIdea": "一圆两用：将 [[circle(A, B)]] 既作为泰勒斯半圆在 [[B]] 处立起 [[l]] 的法线，又作为作线段 $AB$ 垂直平分线的对称双圆之一。",
          "steps": [
            "作 [[circle(A, B)]] 交 [[l]] 于异于 [[B]] 的第二点 [[Q]]，直径直线 [[line(Q, A)]] 交 [[circle(A, B)]] 于对径点 [[R]]；由直径 $QR$ 上的泰勒斯定理得 $\\angle QBR = 90^\\circ$，故 [[line(B, R)]] 在 [[B]] 处垂直于 [[l]]。",
            "再添 [[circle(B, A)]] 与 [[circle(A, B)]] 交于 [[U₁]]、[[U₂]]，连 [[line(U₁, U₂)]] 即为线段 $AB$ 的垂直平分线。",
            "取 [[line(B, R)]] 与 [[line(U₁, U₂)]] 的交点 [[O]]，则 $OB \\perp$ [[l]] 且 $|OA| = |OB|$，故 [[circle(O, B)]] 过点 [[A]] 且在 [[B]] 处与 [[l]] 相切。"
          ]
        }
      }
    }
  },
  "Gamma/L6": {
    "title": "梯形两底中点",
    "prompt": "作一条经过已知梯形两底中点的直线。",
    "solutions": {
      "l-3L-7E": {
        "variantLabels": {
          "1": "两底中点连线"
        },
        "proof": {
          "steps": [
            "分别作 [[perpBisector(A, B)]] 与 [[perpBisector(C, D)]]，截平行两底 [[seg(A, B)]] 与 [[seg(C, D)]] 得中点 [[M₁]] 与 [[M₂]]，故直线 [[line(M₁, M₂)]] 同时经过梯形两底的中点。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "两底中点连线"
        },
        "proof": {
          "keyIdea": "由斯坦纳梯形定理，两腰延长线交点 [[Q]] 与两对角线交点 [[P]] 分别是将底边 $AB$ 映至底边 $DC$ 的正、负位似中心，故仅用直尺连 [[line(P, Q)]] 即可同时平分两底。",
          "steps": [
            "延长两腰 [[line(A, D)]] 与 [[line(B, C)]] 交于 [[Q]]。因 [[seg(A, B)]] $\\parallel$ [[seg(C, D)]]，以 [[Q]] 为中心、比为 $|DC|/|AB|$ 的正位似变换将 [[A]] $\\mapsto$ [[D]]、[[B]] $\\mapsto$ [[C]]，从而将 [[seg(A, B)]] 的中点映为 [[seg(C, D)]] 的中点。",
            "连接对角线 [[line(A, C)]] 与 [[line(B, D)]] 交于 [[P]]，以 [[P]] 为中心、比为 $-|DC|/|AB|$ 的负位似变换将 [[A]] $\\mapsto$ [[C]]、[[B]] $\\mapsto$ [[D]]，同样将 [[seg(A, B)]] 的中点映为 [[seg(C, D)]] 的中点。",
            "因两底中点既与 [[Q]] 共线，又与异于 [[Q]] 的点 [[P]] 共线，故 [[line(P, Q)]] 即为过梯形两底中点的唯一直线。"
          ]
        }
      }
    }
  },
  "Gamma/L7": {
    "title": "45° 角",
    "prompt": "以已知射线为一边作 45° 角。",
    "solutions": {
      "l-2L-7E": {
        "variantLabels": {
          "1": "45° 直线"
        },
        "proof": {
          "steps": [
            "过顶点 [[A]] 作 [[perp(ray(A, B), A)]] 与 [[ray(A, B)]] 成 $90^\\circ$ 角；在 [[ray(A, B)]] 上取 [[P₁]]、在 [[perp(ray(A, B), A)]] 上取 [[P₂]]，作 [[angleBisector(P₁, A, P₂)]] 将 $\\angle P_1AP_2 = 90^\\circ$ 平分为 $45^\\circ$。"
          ]
        }
      },
      "e-3L-5E": {
        "variantLabels": {
          "1": "45° 直线"
        },
        "proof": {
          "keyIdea": "复用沿 [[ray(A, B)]] 倍长线段 $AP$ 的辅助圆，在点 [[P]] 处的垂线上直接截出等长直角边，以 $5\\text{E}$ 构造等腰直角三角形。",
          "steps": [
            "在 [[ray(A, B)]] 上任取 [[P]]，作 [[circle(P, A)]] 再交 [[ray(A, B)]] 于异于 [[A]] 的点 [[Q]]，则 [[P]] 为 $AQ$ 的中点，[[perpBisector(A, Q)]] 必过 [[P]] 且垂直于 [[ray(A, B)]]。",
            "在交点 [[C]] $\\in$ [[circle(P, A)]] $\\cap$ [[perpBisector(A, Q)]] 处，有 $\\angle APC = 90^\\circ$ 且 $|PC| = |PA|$，故 $\\triangle APC$ 为等腰直角三角形，[[line(A, C)]] 与 [[ray(A, B)]] 成 $45^\\circ$ 角。"
          ]
        }
      },
      "v-4L-6E-2V": {
        "variantLabels": {
          "1": "45° 直线 (₁)",
          "2": "45° 直线 (₂)"
        },
        "proof": {
          "steps": [
            "在 [[ray(A, B)]] 上取 [[P]]，记 [[Q]] 为 [[circle(P, A)]] 与 [[ray(A, B)]] 的第二交点，则 [[perpBisector(A, Q)]] 为 [[circle(P, A)]] 在 [[P]] 处垂直于 [[ray(A, B)]] 的直径所在直线。",
            "该垂直直径交 [[circle(P, A)]] 于对径两点 [[C₁]] 与 [[C₂]]，满足 $|PC_1| = |PC_2| = |PA|$，使 $\\triangle APC_1$ 与 $\\triangle APC_2$ 构成对称的等腰直角三角形，故 [[line(A, C₁)]] 与 [[line(A, C₂)]] 分别与 [[ray(A, B)]] 成 $\\pm 45^\\circ$ 角。"
          ],
          "variantNote": "[[circle(P, A)]] 与 [[perpBisector(A, Q)]] 的两个交点 [[C₁]]、[[C₂]] 给出了关于 [[ray(A, B)]] 对称的全部两条 $45^\\circ$ 直线。"
        }
      }
    }
  },
  "Gamma/L8": {
    "title": "菱形",
    "prompt": "以已知线段为边作一个顶角为 45° 的菱形。",
    "solutions": {
      "l-5L-11E": {
        "variantLabels": {
          "1": "45° 菱形 ABCD"
        },
        "proof": {
          "keyIdea": "构造 [[circle(A, B)]] 的垂直直径 $N_aN_b$，由泰勒斯定理使 [[perpBisector(B, N_a)]] 与 [[line(B, N_b)]] 同时给出两条平行的 $45^\\circ$ 侧边所在直线。",
          "steps": [
            "过 [[A]] 作 [[perp(seg(A, B), A)]] 交 [[circle(A, B)]] 于对径点 [[N_a]]、[[N_b]]，使 $\\triangle BAN_a$ 为等腰直角三角形（$|AB| = |AN_a|$，$\\angle BAN_a = 90^\\circ$）。故 [[perpBisector(B, N_a)]] 过点 [[A]] 且与 [[seg(A, B)]] 成 $45^\\circ$ 角，交 [[circle(A, B)]] 得满足 $|AD| = |AB|$ 的顶点 [[D]]。",
            "因 $N_aN_b$ 为 [[circle(A, B)]] 的直径，由泰勒斯定理得 $BN_b \\perp BN_a$；又 [[perpBisector(B, N_a)]] 亦垂直于 $BN_a$，故 [[line(B, N_b)]] $\\parallel AD$。",
            "过 [[D]] 作垂直于 [[perp(seg(A, B), A)]] 的 [[perp(h₁, D)]] 得 $DC \\parallel AB$，它与 [[line(B, N_b)]] 的交点 [[C]] 补全满足 $|AD| = |AB|$ 且含 $45^\\circ$ 内角的平行四边形（即菱形）$ABCD$。"
          ]
        }
      },
      "e-7L-7E": {
        "variantLabels": {
          "1": "45° 菱形 ABCD"
        },
        "proof": {
          "keyIdea": "在泰勒斯圆 [[circle(M, A)]] 内作以 $AB$ 为对角线的正方形，仅凭直尺与圆规即作出过 [[A]]、[[B]] 且互相平行的 $45^\\circ$ 侧边直线。",
          "steps": [
            "等圆 [[circle(A, B)]] 与 [[circle(B, A)]] 交于 [[U₁]]、[[U₂]]，故 [[line(U₁, U₂)]] 为 [[seg(A, B)]] 的垂直平分线，交 $AB$ 于中点 [[M]]。",
            "以 $AB$ 为直径的泰勒斯圆 [[circle(M, A)]] 交 [[line(U₁, U₂)]] 于 [[P_a]]、[[P_b]]。因对角线 $AB$ 与 $P_aP_b$ 等长且互相垂直平分，$AP_aBP_b$ 为正方形，故 [[line(A, P_a)]] 与 [[line(B, P_b)]] 平行且均与 [[seg(A, B)]] 成 $45^\\circ$ 角。",
            "在直线 $AB$ 的 $P_a$ 同侧分别取 [[D]] $\\in$ [[circle(A, B)]] $\\cap$ [[line(A, P_a)]] 与 [[C]] $\\in$ [[circle(B, A)]] $\\cap$ [[line(B, P_b)]]，得长均为 $|AB|$ 的平行等边 $AD$、$BC$ 且 $\\angle DAB = 45^\\circ$，连 [[line(D, C)]] 即闭合该菱形。"
          ]
        }
      },
      "v-10L-10E-4V": {
        "variantLabels": {
          "1": "45° 菱形 ABCD (₁)",
          "2": "45° 菱形 ABCD (₂)",
          "3": "45° 菱形 ABCD (₃)",
          "4": "45° 菱形 ABCD (₄)"
        },
        "proof": {
          "keyIdea": "将对角线内接正方形构造拓展至全部四条 $45^\\circ$ 侧边直线，并利用同底等高 $\\frac{\\sqrt{2}}{2}|AB|$ 的共线性质，仅添两条平行直线即可同时闭合全部四个菱形。",
          "steps": [
            "由 [[circle(A, B)]]、[[circle(B, A)]] 及其过中点 [[M]] 的根轴 [[line(U₁, U₂)]] 与 [[circle(M, A)]]，交点 [[P₁]]、[[P₂]] 补全正方形 $AP_1BP_2$，给出两组平行的 $45^\\circ$ 直线：[[line(A, P₁)]] $\\parallel$ [[line(B, P₂)]] 与 [[line(A, P₂)]] $\\parallel$ [[line(B, P₁)]]。",
            "将这四条直线与 [[circle(A, B)]]、[[circle(B, A)]] 相交，标出全部八个候选顶点：沿 [[line(B, P₂)]] 与 [[line(A, P₁)]] 的（[[C₁]], [[D₁]]）和（[[C₄]], [[D₄]]），以及沿 [[line(B, P₁)]] 与 [[line(A, P₂)]] 的（[[C₂]], [[D₂]]）和（[[C₃]], [[D₃]]）。",
            "以 [[seg(A, B)]] 为底、边长为 $|AB|$ 的每个 $45^\\circ$ 菱形，其高均为 $|AB|\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}|AB|$，故 $AB$ 一侧的 [[D₁]]、[[C₁]]、[[D₃]]、[[C₃]] 共线，另一侧的 [[D₂]]、[[C₂]]、[[D₄]]、[[C₄]] 亦共线；从而连接 [[line(D₁, C₁)]] 与 [[line(D₂, C₂)]] 即同时闭合全部四个菱形。"
          ],
          "variantNote": "在 [[seg(A, B)]] 两侧任选一侧，并将 $45^\\circ$ 锐角置于 [[A]] 或 [[B]]，组合即产生全部四个对称菱形解。"
        }
      }
    }
  },
  "Gamma/L9": {
    "title": "四边形的中心",
    "prompt": "求作连接已知四边形两条对角线中点的线段的中点。",
    "solutions": {
      "le-4L-10E": {
        "variantLabels": {
          "1": "重心 G"
        },
        "proof": {
          "keyIdea": "由瓦里尼翁定理，连接两对角线中点的线段与连接一组对边中点的中位线共中点，从而省去作两条对角线的步骤（节省 $2\\text{E}$）。",
          "steps": [
            "记对角线 $AC$、$BD$ 的中点分别为 $E$、$F$；作 [[perpBisector(A, B)]] 与 [[perpBisector(C, D)]] 分别截已知对边 [[seg(A, B)]] 与 [[seg(C, D)]] 得中点 [[M₁]] 与 [[M₂]]（在凸四边形中必不重合）。",
            "在 $\\triangle ABD$ 与 $\\triangle ACD$ 中由三角形中位线定理，线段 $M_1F$ 与 $EM_2$ 均平行于 [[seg(D, A)]]、同向且长皆为 $\\frac{1}{2}|AD|$，故线段 $M_1M_2$ 与 $EF$ 互相平分（当 $E = F$ 时亦成立）。",
            "连接 [[line(M₁, M₂)]] 并以 [[perpBisector(M₁, M₂)]] 平分之，所得交点 [[P₁]] 即为两者公共中点，亦即四个顶点 [[A]]、[[B]]、[[C]]、[[D]] 的重心。"
          ]
        }
      }
    }
  }
};
