import type { LevelLocaleEntry } from '../../../types';

export const BETA_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Beta/L1": {
    "title": "角平分线",
    "prompt": "作平分已知角的直线。",
    "solutions": {
      "le-2L-4E": {
        "variantLabels": {
          "1": "角平分线"
        },
        "proof": {
          "steps": [
            "在 [[ray(O, A)]] 上任取 [[P₀]]，作 [[circle(O, P₀)]] 交 [[ray(O, B)]] 于 [[P₁]]，则 $|OP_1| = |OP_0|$，$\\triangle OP_0P_1$ 为以 [[O]] 为顶点的等腰三角形。由等腰三角形对称性，底边的垂直平分线 [[perpBisector(P₀, P₁)]] 必过顶点 [[O]] 且平分 $\\angle P_0OP_1 = \\angle AOB$。"
          ]
        }
      }
    }
  },
  "Beta/T1": {
    "title": "角平分线工具",
    "prompt": "你已解锁“角平分线”工具。依次点击角的一边上任意一点、角的顶点以及另一边上任意一点即可作角平分线。",
    "solutions": {
      "le-1L-4E": {
        "variantLabels": {
          "1": "角平分线"
        },
        "proof": {
          "steps": [
            "在 [[ray(O, A)]] 上任取一点 [[P₁]]，在 [[ray(O, B)]] 上任取一点 [[P₂]]，它们与顶点 [[O]] 张成原角 $\\angle AOB$；直接调用角平分线工具作出 [[angleBisector(P₁, O, P₂)]]，即平分 $\\angle P_1OP_2 = \\angle AOB$。"
          ]
        }
      }
    }
  },
  "Beta/L2": {
    "title": "角平分线的交点",
    "prompt": "求作已知三角形三条内角平分线的交点。",
    "solutions": {
      "l-2L-8E": {
        "variantLabels": {
          "1": "内心 I"
        },
        "proof": {
          "steps": [
            "[[angleBisector(B, A, C)]] 上的点到 [[line(A, B)]] 与 [[line(C, A)]] 等距，[[angleBisector(A, B, C)]] 上的点到 [[line(A, B)]] 与 [[line(B, C)]] 等距。故两者的交点 [[I]] 到三边所在直线等距，必同时位于顶点 [[C]] 的内角平分线上，即为 $\\triangle ABC$ 的内心。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "内心 I"
        },
        "proof": {
          "keyIdea": "令两条菱形对角线式角平分线共用分别以 [[A]]、[[B]] 为圆心且半径同为 $|AB|$ 的一对等圆，较两次调用角平分线工具节省 $2\\text{E}$。",
          "steps": [
            "作公共半径 $r = |AB|$ 的等圆 [[circle(A, B)]] 与 [[circle(B, A)]]，分别在 [[line(C, A)]]（沿射线 $AC$）上截出 $|AC_A| = r$ 的点 [[C_A]]，在 [[line(B, C)]]（沿射线 $BC$）上截出 $|BC_B| = r$ 的点 [[C_B]]。",
            "作 [[circle(C_A, A)]] 与已有的 [[circle(B, A)]] 交于异于 [[A]] 的点 [[D_A]]，由 $|AB| = |BD_A| = |D_AC_A| = |C_AA| = r$ 知四边形 $ABD_AC_A$ 为菱形，其对角线 [[line(A, D_A)]] 平分 $\\angle BAC$。",
            "对称地，[[circle(C_B, B)]] 与 [[circle(A, B)]] 交于异于 [[B]] 的点 [[D_B]] 构成菱形 $BAD_BC_B$，其对角线 [[line(B, D_B)]] 平分 $\\angle ABC$；两对角线之交点即为内心 [[I]]。"
          ]
        }
      }
    }
  },
  "Beta/L3": {
    "title": "30° 角",
    "prompt": "以已知射线为一边作 30° 角。",
    "solutions": {
      "le-3L-3E": {
        "variantLabels": {
          "1": "30° 直线"
        },
        "proof": {
          "keyIdea": "在圆心位于 [[ray(A, B)]] 的圆内构造斜边为直径（长 $2r$）、顶点 [[A]] 的对边长为 $r$ 的内接 $30^\\circ$–$60^\\circ$–$90^\\circ$ 直角三角形。",
          "steps": [
            "在 [[ray(A, B)]] 上任取 [[P₀]] 定出半径 $r = |AP_0|$，作 [[circle(P₀, A)]] 再交 [[ray(A, B)]] 于另一点 [[P₁]]，得长为 $2r$ 的直径 $AP_1$。",
            "取交点 [[C]] $\\in$ [[circle(P₀, A)]] $\\cap$ [[circle(P₁, P₀)]]，由直径 $AP_1$ 上的泰勒斯定理得 $\\angle ACP_1 = 90^\\circ$，且直角边 $|CP_1| = |P_1P_0| = r = \\frac{1}{2}|AP_1|$，故 $\\sin\\angle CAP_1 = \\frac{1}{2}$，直线 [[line(A, C)]] 与 [[ray(A, B)]] 成 $30^\\circ$ 角。"
          ]
        }
      },
      "v-4L-4E-2V": {
        "variantLabels": {
          "1": "30° 直线 (₁)",
          "2": "30° 直线 (₂)"
        },
        "proof": {
          "steps": [
            "在 [[ray(A, B)]] 上取点 [[P₀]]，作 [[circle(P₀, A)]] 再交 [[ray(A, B)]] 于 [[P₁]] 得长 $2r = 2|AP_0|$ 的直径 $AP_1$；再以 [[P₁]] 为圆心、$r$ 为半径作 [[circle(P₁, P₀)]]，与 [[circle(P₀, A)]] 交于对称两点 [[C₁]] 与 [[C₂]]。",
            "由泰勒斯定理，$\\triangle AC_1P_1$ 与 $\\triangle AC_2P_1$ 均以 $AP_1$ 为斜边且在 $C_i$ 处成直角，又 $|C_iP_1| = r = \\frac{1}{2}|AP_1|$，故 [[line(A, C₁)]] 与 [[line(A, C₂)]] 分别与 [[ray(A, B)]] 成 $+30^\\circ$ 与 $-30^\\circ$ 角。"
          ],
          "variantNote": "关于 [[ray(A, B)]] 所在直线的轴对称变换互换 [[C₁]] 与 [[C₂]]，给出过 [[A]] 与已知射线成 $30^\\circ$ 角的全部两条直线。"
        }
      }
    }
  },
  "Beta/L4": {
    "title": "倍角",
    "prompt": "作一个与已知角相等且共用一条边的角。",
    "solutions": {
      "le-3L-3E": {
        "variantLabels": {
          "1": "等角边所在直线"
        },
        "proof": {
          "keyIdea": "利用同圆中等弦对等圆心角的性质，在以顶点 [[O]] 为圆心的同一个圆上将弦 $P_0P_1$ 再截取一次。",
          "steps": [
            "在 [[ray(O, A)]] 上任取 [[P₀]]，作 [[circle(O, P₀)]] 交 [[ray(O, B)]] 于 [[P₁]]，得 $|OP_0| = |OP_1|$。",
            "取 [[circle(O, P₀)]] 与 [[circle(P₁, P₀)]] 异于 [[P₀]] 的第二交点 [[C₁]]，则 $|OC_1| = |OP_0|$ 且 $|P_1C_1| = |P_1P_0|$，由 SSS 知 $\\triangle OP_1C_1 \\cong \\triangle OP_1P_0$，故 [[line(O, C₁)]] 跨公共边 [[ray(O, B)]] 复制出与 $\\angle AOB$ 相等的角。"
          ]
        }
      },
      "v-5L-5E-2V": {
        "variantLabels": {
          "1": "等角边所在直线 (₁)",
          "2": "等角边所在直线 (₂)"
        },
        "proof": {
          "steps": [
            "在 [[circle(O, P₀)]] 上，弦 $P_0P_1$ 连接 [[ray(O, A)]] 上的 [[P₀]] 与 [[ray(O, B)]] 上的 [[P₁]]。作 [[circle(P₁, P₀)]] 将 [[P₀]] 关于 $OP_1$ 对称至 [[circle(O, P₀)]] 上的 [[C₁]]，于是 [[line(O, C₁)]] 以 [[ray(O, B)]] 为公共边满足 $\\angle BOC_1 = \\angle AOB$。",
            "对称地，作 [[circle(P₀, P₁)]] 将 [[P₁]] 关于 $OP_0$ 对称至 [[circle(O, P₀)]] 上的 [[C₂]]，由 SSS 得 $\\triangle OP_0C_2 \\cong \\triangle OP_0P_1$，故 [[line(O, C₂)]] 以 [[ray(O, A)]] 为公共边满足 $\\angle AOC_2 = \\angle BOA$。"
          ],
          "variantNote": "分别跨公共边 [[ray(O, B)]] 与 [[ray(O, A)]] 复制 $\\angle AOB$，即可得到过顶点 [[O]] 的全部两条对称等角直线。"
        }
      }
    }
  },
  "Beta/L5": {
    "title": "分割矩形",
    "prompt": "过已知点作一条直线，将矩形分成面积相等的两部分。",
    "solutions": {
      "le-3L-3E": {
        "variantLabels": {
          "1": "面积平分线"
        },
        "proof": {
          "keyIdea": "矩形关于两对角线的交点中心对称，故过其对称中心的任意直线必平分矩形面积。",
          "steps": [
            "仅用直尺连接矩形 $ABCD$ 的两条对角线 [[line(A, C)]] 与 [[line(B, D)]]，其交点 [[M]] 即为两对角线的公共中点与矩形的对称中心。",
            "绕 [[M]] 作 $180^\\circ$ 中心对称变换将矩形映为自身（[[A]] $\\leftrightarrow$ [[C]]，[[B]] $\\leftrightarrow$ [[D]]），同时保持直线 [[line(P, M)]] 整体不变并互换被其分割出的两部分，故 [[line(P, M)]] 过点 [[P]] 且平分矩形面积。"
          ]
        }
      }
    }
  },
  "Beta/L6": {
    "title": "过线外一点作垂线",
    "prompt": "过直线外的已知点向已知直线作垂线。",
    "solutions": {
      "l-2L-4E": {
        "variantLabels": {
          "1": "垂线"
        },
        "proof": {
          "steps": [
            "在 [[l]] 上偏离 [[P]] 的垂足处任取 [[Q₁]]，作 [[circle(P, Q₁)]] 交 [[l]] 于第二点 [[Q₂]]，则 $|PQ_1| = |PQ_2|$。因 [[P]] 到 [[Q₁]]、[[Q₂]] 等距，弦 $Q_1Q_2$ 的垂直平分线 [[perpBisector(Q₁, Q₂)]] 必过点 [[P]] 且垂直于 [[l]]。"
          ]
        }
      },
      "e-3L-3E": {
        "variantLabels": {
          "1": "垂线"
        },
        "proof": {
          "keyIdea": "以 [[l]] 上的两点为圆心作过 [[P]] 的两圆，作出 [[P]] 关于 [[l]] 的对称点，则点与其对称点的连线垂直于连心线 [[l]]。",
          "steps": [
            "在 [[l]] 上任取相异两点 [[Q₁]]、[[Q₂]] 为圆心，作均过 [[P]] 的 [[circle(Q₁, P)]] 与 [[circle(Q₂, P)]]，两圆的第二交点 [[P']] 即为 [[P]] 关于 [[l]] 的对称点。",
            "因 $|Q_1P| = |Q_1P'|$ 且 $|Q_2P| = |Q_2P'|$，[[Q₁]] 与 [[Q₂]] 均在线段 $PP'$ 的垂直平分线上，故该垂直平分线即为直线 [[l]]，从而 [[line(P, P')]] 过点 [[P]] 且垂直于 [[l]]。"
          ]
        }
      }
    }
  },
  "Beta/L7": {
    "title": "过线上一点作垂线",
    "prompt": "过直线上的已知点作该直线的垂线。",
    "solutions": {
      "l-1L-4E": {
        "variantLabels": {
          "1": "垂线"
        },
        "proof": {
          "keyIdea": "将 [[l]] 上的点 [[P]] 视为 $180^\\circ$ 平角的顶点，调用一次角平分线工具即可得垂线。",
          "steps": [
            "在 [[l]] 上位于 [[P]] 两侧各取一点 [[Q₁]]、[[Q₂]] 构成平角 $\\angle Q_1PQ_2 = 180^\\circ$，故其角平分线 [[angleBisector(Q₁, P, Q₂)]] 将平角分为两个 $90^\\circ$ 直角，在点 [[P]] 处垂直于 [[l]]。"
          ]
        }
      },
      "e-3L-3E": {
        "variantLabels": {
          "1": "垂线"
        },
        "proof": {
          "keyIdea": "过 [[P]] 作一辅助圆与 [[l]] 再交于一点，由该交点连圆心得直径，利用泰勒斯定理构造直角。",
          "steps": [
            "在 [[l]] 外（且不在过 [[P]] 的法线上）任取圆心 [[O]] 作 [[circle(O, P)]]，交 [[l]] 于异于 [[P]] 的第二点 [[Q]]；过 [[Q]]、[[O]] 作直线 [[line(Q, O)]] 延伸交 [[circle(O, P)]] 于对径点 [[R]]。",
            "因 $QR$ 为 [[circle(O, P)]] 的直径且 [[P]] 在圆上，由泰勒斯定理得 $\\angle QPR = 90^\\circ$；又 $PQ$ 落在 [[l]] 上，故 [[line(P, R)]] 在点 [[P]] 处垂直于 [[l]]。"
          ]
        }
      }
    }
  },
  "Beta/T2": {
    "title": "垂线工具",
    "prompt": "你已解锁“垂线”工具。先点击已知直线，再点击已知点即可作出垂线。",
    "solutions": {
      "le-1L-3E": {
        "variantLabels": {
          "1": "垂线"
        },
        "proof": {
          "steps": [
            "直接对直线 [[l]] 与点 [[P]] 调用垂线工具，一步作出过点 [[P]] 且正交于 [[l]] 的唯一垂线 [[perp(l, P)]]。"
          ]
        }
      }
    }
  },
  "Beta/L8": {
    "title": "过圆上一点作切线",
    "prompt": "过圆上的已知点作该圆的切线。",
    "solutions": {
      "l-2L-4E": {
        "variantLabels": {
          "1": "切线"
        },
        "proof": {
          "steps": [
            "过 [[circle(O, P)]] 上一点 [[P]] 的直线与圆相切，当且仅当该直线垂直于半径 $OP$；连接 [[line(O, P)]] 并过点 [[P]] 作垂线 [[perp(line(O, P), P)]] 即直接作出该切线。"
          ]
        }
      },
      "e-3L-3E": {
        "variantLabels": {
          "1": "切线"
        },
        "proof": {
          "keyIdea": "依托已有的 [[circle(O, P)]] 连续进行两次圆反射，使 [[P]] 处的等腰底角与圆周角互余凑成 $90^\\circ$。",
          "steps": [
            "在 [[circle(O, P)]] 上任取异于 [[P]] 及其对径点的点 [[Q]]，设 $\\theta = \\angle POQ \\in (0^\\circ, 180^\\circ)$。作 [[circle(Q, P)]] 再交 [[circle(O, P)]] 于 [[R]]，即将 [[P]] 关于 $OQ$ 对称反射，故 $|QP| = |QR|$ 且圆心角 $\\angle POQ = \\angle QOR = \\theta$。",
            "在等腰 $\\triangle OPQ$（$|OP| = |OQ|$）中有 $\\angle OPQ = 90^\\circ - \\frac{\\theta}{2}$；而在 [[circle(O, P)]] 中，弧 $QR$ 所对圆周角 $\\angle QPR = \\frac{1}{2}\\angle QOR = \\frac{\\theta}{2}$，且 [[O]] 与 [[R]] 位于直线 $PQ$ 同侧。",
            "再作 [[circle(P, R)]] 交 [[circle(Q, P)]] 于异于 [[R]] 的点 [[T]]。由 $|QT| = |QR|$、$|PT| = |PR|$ 知 [[T]] 为 [[R]] 关于直线 $PQ$ 的对称点，故 [[T]] 与 [[O]] 分居直线 $PQ$ 两侧且 $\\angle QPT = \\angle QPR = \\frac{\\theta}{2}$，从而 $\\angle OPT = (90^\\circ - \\frac{\\theta}{2}) + \\frac{\\theta}{2} = 90^\\circ$，直线 [[line(P, T)]] 即在点 [[P]] 处与 [[circle(O, P)]] 相切。"
          ]
        }
      }
    }
  },
  "Beta/L9": {
    "title": "与直线相切的圆",
    "prompt": "以已知点为圆心作一个与已知直线相切的圆。",
    "solutions": {
      "le-2L-4E": {
        "variantLabels": {
          "1": "相切圆"
        },
        "proof": {
          "steps": [
            "过圆心 [[O]] 向 [[l]] 作垂线 [[perp(l, O)]] 定出垂足 [[F]]。对 [[l]] 上异于 [[F]] 的任意点 $X$，由勾股定理有 $|OX|^2 = |OF|^2 + |FX|^2 > |OF|^2$，故 [[circle(O, F)]] 与 [[l]] 有且仅有唯一公共点 [[F]]，即与 [[l]] 相切。"
          ]
        }
      }
    }
  },
  "Beta/L10": {
    "title": "菱形内切圆",
    "prompt": "作已知菱形的内切圆。",
    "solutions": {
      "le-4L-6E": {
        "variantLabels": {
          "1": "内切圆"
        },
        "proof": {
          "keyIdea": "菱形的两条对角线互相垂直平分且平分四个内角，故对角线交点即为菱形的内心。",
          "steps": [
            "因 $|AB| = |BC| = |CD| = |DA|$，菱形 $ABCD$ 的对角线 [[line(A, C)]] 与 [[line(B, D)]] 垂直相交于 [[O]] 且平分各内角，使 [[O]] 到 [[line(A, B)]]、[[line(B, C)]]、[[line(C, D)]] 与 [[line(D, A)]] 等距。",
            "过 [[O]] 作垂线 [[perp(line(A, B), O)]] 定出直角三角形 $\\triangle AOB$ 斜边 $AB$ 上的垂足 [[F]]，则 [[circle(O, F)]] 与菱形四边在各自垂足处相切。"
          ]
        }
      }
    }
  }
};
