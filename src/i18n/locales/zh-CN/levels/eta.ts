import type { LevelLocaleEntry } from '../../../types';

export const ETA_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Eta/L1": {
    "title": "正方形面积之和",
    "prompt": "作一个面积等于两个给定正方形面积之和的正方形，且三个正方形共用同一个角。",
    "solutions": {
      "l-3L-11E": {
        "variantLabels": {
          "1": "等面积和正方形 OA₃C₃B₃"
        },
        "proof": {
          "steps": [
            "设两已知正方形边长分别为 $a = |OA_1|$ 与 $b = |OA_2| = |OB_2|$。由 [[ray(O, A₁)]] $\\perp$ [[ray(O, B₁)]] 及直角 $\\triangle OA_1 B_2$ 的勾股定理，得 $|A_1 B_2| = \\sqrt{a^2 + b^2}$。",
            "用 [[compass(A₁, B₂; O)]] 将半径 $|A_1 B_2|$ 移至圆心 [[O]]，分别交 [[ray(O, A₁)]]、[[ray(O, B₁)]] 于 [[A₃]]、[[B₃]]，使 $|OA_3| = |OB_3| = \\sqrt{a^2 + b^2}$。分别作垂线 [[perp(ray(O, A₁), A₃)]] 与 [[perp(ray(O, B₁), B₃)]] 相交于 [[C₃]]，即得面积为 $a^2 + b^2$ 的正方形 $OA_3 C_3 B_3$。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "等面积和正方形 OA₃C₃B₃"
        },
        "proof": {
          "keyIdea": "延长一正方形的边交另一正方形的正交边成矩形，其过 [[O]] 的对角线长恰为 $\\sqrt{a^2 + b^2}$；再借公共 $45^\\circ$ 对角线 [[line(O, C₁)]] 仅用一圆定出对角顶点 [[C₃]]。",
          "steps": [
            "延长 [[seg(A₁, C₁)]] 为 [[line(A₁, C₁)]] 交 [[seg(B₂, C₂)]] 于 [[P]]，与直角顶点 [[O]] 围成邻边为 $a = |OA_1|$、$b = |OB_2|$ 的矩形，故 $|OP|^2 = a^2 + b^2$。",
            "作 [[circle(O, P)]] 分别交 [[ray(O, A₁)]]、[[ray(O, B₁)]] 于距 [[O]] 为 $\\sqrt{a^2 + b^2}$ 的 [[A₃]] 与 [[B₃]]。",
            "共用直角 [[O]] 的正方形其对角顶点必在 $45^\\circ$ 对角线 [[line(O, C₁)]] 上。作 [[circle(A₃, O)]] 交 [[line(O, C₁)]] 于异于 [[O]] 的 [[C₃]]，由 $|A_3 C_3| = |A_3 O|$ 及 $\\angle A_3 O C_3 = 45^\\circ$ 知 $\\angle OA_3 C_3 = 90^\\circ$，连 [[line(A₃, C₃)]] 与 [[line(B₃, C₃)]] 即成正方形 $OA_3 C_3 B_3$。"
          ]
        }
      }
    }
  },
  "Eta/L2": {
    "title": "圆环",
    "prompt": "作与给定圆同心的圆，将其分成面积相等的两部分。",
    "solutions": {
      "l-4L-6E": {
        "variantLabels": {
          "1": "等分面积同心内圆"
        },
        "proof": {
          "steps": [
            "设 [[circle(O)]] 的半径为 $R$，同心圆将其圆盘等分为面积相等的两部分当且仅当 $\\pi r^2 = \\frac{1}{2}\\pi R^2$，即 $r = R/\\sqrt{2}$。",
            "在 [[circle(O)]] 上任取点 [[P]]，作 [[line(O, P)]] 交 [[perpBisector(O, P)]] 于半径 $OP$ 的中点 [[M]]（$|OM| = R/2$）。再作 [[circle(M, O)]] 交 [[perpBisector(O, P)]] 于 [[Q]]，则等腰直角 $\\triangle OMQ$ 的直角边 $|OM| = |MQ| = R/2$，斜边 $|OQ| = R/\\sqrt{2}$，故 [[circle(O, Q)]] 即为所求同心圆。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "等分面积同心内圆"
        },
        "proof": {
          "keyIdea": "直接复用已知圆 [[circle(O)]] 作为平分半径 $OP$ 的两等圆弧之一，即可在五步基本操作内作出 $r = R/\\sqrt{2}$。",
          "steps": [
            "在 [[circle(O)]] 上任取点 [[P]]（$|OP| = R$）。因 [[circle(O)]] 已是以 [[O]] 为圆心、$|OP|$ 为半径的圆，仅需再作一圆 [[circle(P, O)]] 交 [[circle(O)]] 于 [[U₁]]、[[U₂]]，则 [[line(U₁, U₂)]] 即为 $OP$ 的垂直平分线，交 [[line(O, P)]] 于中点 [[M]]（$|OM| = R/2$）。",
            "作 [[circle(M, O)]] 交 [[line(U₁, U₂)]] 于 [[Q]]，由 $\\angle OMQ = 90^\\circ$ 且 $|MQ| = |MO| = R/2$ 得 $|OQ| = R/\\sqrt{2}$，故 [[circle(O, Q)]] 所围面积为 $\\pi(R/\\sqrt{2})^2 = \\frac{1}{2}\\pi R^2$。"
          ]
        }
      }
    }
  },
  "Eta/L3": {
    "title": "75° 角",
    "prompt": "以给定射线为一边作 75° 角。",
    "solutions": {
      "l-3L-6E": {
        "variantLabels": {
          "1": "75° 角边直线"
        },
        "proof": {
          "keyIdea": "使顶点 [[A]] 落在正三角形 $60^\\circ$ 弦 $CD$ 的劣弧上，张成恒为 $150^\\circ$ 的圆周角 $\\angle CAD$，其平分线即与 [[ray(A, B)]] 成 $75^\\circ$ 角。",
          "steps": [
            "在以 [[A]] 为端点、偏离 [[ray(A, B)]] 的 $(60^\\circ, 90^\\circ)$ 开扇形内任取辅助圆心 [[O]]，作 [[circle(O, A)]] 再交 [[ray(A, B)]] 于 [[C]]。在等腰 $\\triangle OAC$ 中，$\\angle OAC \\in (60^\\circ, 90^\\circ)$ 推出圆心角 $\\angle AOC = 180^\\circ - 2\\angle OAC \\in (0^\\circ, 60^\\circ)$。",
            "作 [[circle(C, O)]] 在 $OC$ 含 [[A]] 的一侧交 [[circle(O, A)]] 于 [[D]]，则 $\\triangle OCD$ 为正三角形（$\\angle COD = 60^\\circ$）。因 $\\angle AOC < 60^\\circ$，[[A]] 严格位于劣弧 $\\widehat{CD}$ 上，所对优弧为 $300^\\circ$，故 $\\angle CAD = \\frac{1}{2} \\times 300^\\circ = 150^\\circ$，平分线 [[angleBisector(C, A, D)]] 与 [[ray(A, B)]] 成 $75^\\circ$ 角。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "75° 角边直线"
        },
        "proof": {
          "keyIdea": "在 $30^\\circ$-$60^\\circ$-$90^\\circ$ 半圆三角形内截取顶角 $30^\\circ$ 的等腰三角形，在 [[circle(P, A)]] 上分出 $15^\\circ$ 圆周角，仅用三圆两线即得 $75^\\circ$ 角。",
          "steps": [
            "在 [[ray(A, B)]] 上取点 [[P]] 作 [[circle(P, A)]]，交 [[ray(A, B)]] 于与 [[A]] 相对的直径端点 [[Q]]。取 [[circle(A, P)]] 与 [[circle(P, A)]] 的交点 [[M]]，则 $\\triangle APM$ 为正三角形（$\\angle MAP = 60^\\circ$），由直径 $AQ$ 上的泰勒斯定理得 $\\angle AMQ = 90^\\circ$、$\\angle MQA = 30^\\circ$。",
            "作 [[circle(Q, M)]] 交 [[ray(A, B)]] 上的线段 $AQ$ 于 [[S]]，构成顶角 $\\angle MQS = 30^\\circ$ 的等腰 $\\triangle QMS$（$|QM| = |QS|$），故底角 $\\angle QMS = \\frac{180^\\circ - 30^\\circ}{2} = 75^\\circ$，从而 $\\angle AMS = 90^\\circ - 75^\\circ = 15^\\circ$。",
            "延长 [[line(M, S)]] 交 [[circle(P, A)]] 于异于 [[M]] 的 [[X]]，圆周角 $\\angle AMX = 15^\\circ$ 在 [[circle(P, A)]] 中所对圆心角为 $\\angle APX = 30^\\circ$。在等腰 $\\triangle PAX$（$|PA| = |PX|$）中，底角 $\\angle PAX = \\frac{180^\\circ - 30^\\circ}{2} = 75^\\circ$，即由 [[line(A, X)]] 给出。"
          ]
        }
      },
      "v-7L-7E-2V": {
        "variantLabels": {
          "1": "75° 角边直线 (₁)",
          "2": "75° 角边直线 (₂)"
        },
        "proof": {
          "steps": [
            "由关于 [[ray(A, B)]] 的对称性，[[circle(P, A)]] 与 [[circle(A, P)]] 的两个交点 [[M_a]]、[[M_b]] 到 [[Q]] 等距，故单圆 [[circle(Q, M_a)]] 同时经过 [[M_b]]，并在直径 $AQ$ 上截出公共交点 [[S]]。",
            "连结一对对称割线 [[line(M_a, S)]] 与 [[line(M_b, S)]] 交 [[circle(P, A)]] 于 [[X_a]]、[[X_b]]（相对 $PA$ 的圆心角为 $\\mp 30^\\circ$），再连 [[line(A, X_a)]] 与 [[line(A, X_b)]] 即得过 [[A]] 的两条 $\\pm 75^\\circ$ 直线。"
          ],
          "variantNote": "[[line(A, X_a)]] 与 [[line(A, X_b)]] 分别位于以 [[ray(A, B)]] 为界的两个相反半平面内。"
        }
      }
    }
  },
  "Eta/L4": {
    "title": "到三点等距的直线",
    "prompt": "作一条到三个给定点距离相等的直线。",
    "solutions": {
      "le-3L-7E": {
        "variantLabels": {
          "1": "三角形中位线所在直线"
        },
        "proof": {
          "steps": [
            "作 [[line(A, B)]]，并过 [[C]] 向其作高 [[perp(line(A, B), C)]] 得垂足 [[H_C]]。因 [[perpBisector(C, H_C)]] 垂直平分 $CH_C$，故它平行于 [[line(A, B)]]，且到 [[C]] 与到 [[line(A, B)]]（从而到 [[A]]、[[B]]）的距离均等于 $\\frac{1}{2}|CH_C|$。"
          ]
        }
      },
      "v-9L-21E-3V": {
        "variantLabels": {
          "1": "中位线所在直线 (₁)",
          "2": "中位线所在直线 (₂)",
          "3": "中位线所在直线 (₃)"
        },
        "proof": {
          "steps": [
            "不共线三点不可能位于同一条等距直线的同侧，故任何到三点等距的直线必将 $\\triangle ABC$ 的一个顶点与其余两点分隔两侧，恰为平行于对边的中位线所在直线。",
            "分别向 [[line(A, B)]]、[[line(A, C)]]、[[line(B, C)]] 作高 [[perp(line(A, B), C)]]、[[perp(line(A, C), B)]]、[[perp(line(B, C), A)]] 得垂足 [[H_C]]、[[H_B]]、[[H_A]]，再作 [[perpBisector(C, H_C)]]、[[perpBisector(B, H_B)]] 与 [[perpBisector(A, H_A)]]，即得 $\\triangle ABC$ 的全部三条中位线所在直线。"
          ],
          "variantNote": "三条中位线所在直线分别将顶点 [[C]]、[[B]]、[[A]] 与其余两点分隔于直线两侧。"
        }
      }
    }
  },
  "Eta/L5": {
    "title": "海伦问题",
    "prompt": "在给定直线上求作一点 C 并连结线段 AC、BC，使两线段长度之和最小。",
    "solutions": {
      "le-4L-4E": {
        "variantLabels": {
          "1": "最短折线路径 A–C–B"
        },
        "proof": {
          "keyIdea": "将 [[B]] 关于 [[l]] 对称至 [[B']]，把任意两段折线 $A \\to X \\to B$ 等长展开为 $A \\to X \\to B'$，当且仅当成直线段 $AB'$ 时取唯一最小值。",
          "steps": [
            "在 [[l]] 上任取相异两点 [[P₁]]、[[P₂]]，则 [[circle(P₁, B)]] 与 [[circle(P₂, B)]] 的第二交点 [[B']] 为 [[B]] 关于 [[l]] 的轴对称点。",
            "因 [[A]]、[[B]] 在 [[l]] 的同侧，[[A]] 与 [[B']] 必分居 [[l]] 异侧，故 [[line(A, B')]] 与 [[l]] 相交于严格介于 [[A]]、[[B']] 之间的唯一点 [[C]]（同时画出线段 $AC$），再连 [[line(B, C)]] 即补全线段 $BC$。",
            "对 [[l]] 上任意点 $X$，由轴对称知 $|XB| = |XB'|$，结合三角不等式得 $|AC| + |CB| = |AC| + |CB'| = |AB'| \\le |AX| + |XB'| = |AX| + |XB|$，当且仅当 $X =$ [[C]] 时取严格最小值。"
          ]
        }
      }
    }
  },
  "Eta/L6": {
    "title": "外接圆",
    "prompt": "作给定三角形的外接圆。",
    "solutions": {
      "le-3L-7E": {
        "variantLabels": {
          "1": "外接圆"
        },
        "proof": {
          "steps": [
            "[[perpBisector(A, B)]] 是到 [[A]]、[[B]] 等距点的轨迹，[[perpBisector(A, C)]] 是到 [[A]]、[[C]] 等距点的轨迹；二者交点即外心 [[O]]，满足 $|OA| = |OB| = |OC|$，故 [[circle(O, A)]] 经过 $\\triangle ABC$ 的三个顶点。"
          ]
        }
      }
    }
  },
  "Eta/L7": {
    "title": "内切圆",
    "prompt": "作给定三角形的内切圆。",
    "solutions": {
      "l-4L-12E": {
        "variantLabels": {
          "1": "内切圆"
        },
        "proof": {
          "steps": [
            "内角平分线 [[angleBisector(B, A, C)]] 与 [[angleBisector(A, B, C)]] 相交于内心 [[I]]，其到三边 [[seg(A, B)]]、[[seg(B, C)]]、[[seg(C, A)]] 的距离相等。过 [[I]] 作 [[perp(seg(A, B), I)]] 得 [[seg(A, B)]] 上的切点 [[T]] 及内切圆半径 $|IT|$，故 [[circle(I, T)]] 即为内切圆。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "内切圆"
        },
        "proof": {
          "keyIdea": "沿 [[seg(B, C)]] 截出 $|BE| = a + c - b = 2(s - b)$，即可用一对共用圆 [[circle(B, E)]] 与 [[circle(E, B)]] 同时作出切点 [[J]] 处的垂线及顶点 [[B]] 处的菱形角平分线。",
          "steps": [
            "记三边长 $a = |BC|$、$b = |CA|$、$c = |AB|$（不妨有 $c < b$ 且 $a \\le b$），半周长 $s = \\frac{a + b + c}{2}$。[[circle(A, B)]] 截 [[seg(C, A)]] 于 [[D]] 使 $|CD| = b - c$，再以 [[circle(C, D)]] 截 [[seg(B, C)]] 于 [[E]] 得 $|BE| = a - (b - c) = 2(s - b)$。",
            "因内切圆在 [[seg(B, C)]] 上的切点距 [[B]] 恰为 $s - b = \\frac{1}{2}|BE|$，$BE$ 的中点即为精确切点 [[J]]。作等圆 [[circle(B, E)]] 与 [[circle(E, B)]] 交于 [[G]]、[[H]]，则垂直平分线 [[line(G, H)]] 在 [[seg(B, C)]] 上截出切点 [[J]] 且垂直于 $BC$，必过内心。",
            "同时 [[circle(B, E)]] 交 [[seg(A, B)]] 于 [[F]]（$|BF| = |BE|$）；再作 [[circle(F, B)]] 交 [[circle(E, B)]] 于异于 [[B]] 的 [[K]] 构成菱形 $BEKF$，对角线 [[line(B, K)]] 平分 $\\angle ABC$，故 [[line(G, H)]] 与 [[line(B, K)]] 的交点即为内心 [[I]]，[[circle(I, J)]] 即为内切圆。"
          ]
        }
      }
    }
  },
  "Eta/L8": {
    "title": "与三直线相切的圆",
    "prompt": "作与三条给定直线都相切的圆，其中两条直线互相平行。",
    "solutions": {
      "l-4L-12E": {
        "variantLabels": {
          "1": "公切圆"
        },
        "proof": {
          "keyIdea": "与平行直线 [[l₁]]、[[l₂]] 相切的圆其圆心必在平行带中线上、半径等于带高之半，再在截线弦 $PQ$ 上作泰勒斯圆即可截出到 [[l₃]] 亦等距的圆心。",
          "steps": [
            "取交点 [[P]] $=$ [[l₁]] $\\cap$ [[l₃]] 与 [[Q]] $=$ [[l₂]] $\\cap$ [[l₃]]。作 [[perp(l₁, P)]] 交 [[l₂]] 于 [[P']] 量出带高 $|PP'|$，则 [[perpBisector(P, P')]] 为与 [[l₁]]、[[l₂]] 等距的中线，交 $PP'$ 于 [[H]]（半径 $|PH| = \\frac{1}{2}|PP'|$）并平分 $PQ$ 于 [[K]]。",
            "作 [[circle(K, P)]] 交 [[perpBisector(P, P')]] 于 [[O]]，则 $|KO| = |KP|$。由 $KO \\parallel$ [[l₁]]、内错角相等及等腰 $\\triangle KPO$ 知 $\\angle(l_1, PO) = \\angle KOP = \\angle KPO = \\angle(l_3, PO)$，即 $PO$ 平分 [[l₁]] 与 [[l₃]] 的夹角，从而 $\\operatorname{dist}(O, l_3) = \\operatorname{dist}(O, l_1) = |PH|$，[[compass(P, H; O)]] 与三线皆相切。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "公切圆"
        },
        "proof": {
          "keyIdea": "以 [[circle(P, Q)]] 在 [[l₁]] 上截出直径端点 [[U]]、[[V]]，则 $UQ$ 的中点 [[O]] 即为圆心；由泰勒斯定理与圆幂计算知 [[circle(U, Q)]] 与 [[circle(V, U)]] 的根轴恰过 [[O]] 且垂直交 [[l₁]] 于切点 [[T]]。",
          "steps": [
            "取 [[P]] $=$ [[l₁]] $\\cap$ [[l₃]]、[[Q]] $=$ [[l₂]] $\\cap$ [[l₃]]，作 [[circle(P, Q)]] 在 [[l₁]] 上截出直径端点 [[U]]、[[V]]（$|PU| = |PV| = |PQ|$）。在等腰 $\\triangle PUQ$ 中，[[line(U, Q)]] 的中点 $M$ 既位于 [[l₁]]、[[l₂]] 的中线上，又在 $\\angle UPQ$ 的平分线上，故到三线等距。",
            "由 [[circle(P, Q)]] 的直径 $UV$ 及泰勒斯定理得 $\\angle VQU = 90^\\circ$。将直角 $\\triangle VQM$ 与 $\\triangle VQU$ 的勾股恒等式相减：$|VM|^2 - |VU|^2 = (|VQ|^2 + |QM|^2) - (|VQ|^2 + |UQ|^2) = |UM|^2 - |UQ|^2$，即点 $M$ 对 [[circle(V, U)]] 与 [[circle(U, Q)]] 等幂。",
            "因此 [[circle(U, Q)]] 与 [[circle(V, U)]] 的公共弦 [[line(W₁, W₂)]]（根轴）必过 $M$，又因两圆心 [[U]]、[[V]] 在 [[l₁]] 上而垂直于 [[l₁]]。于是 [[line(W₁, W₂)]] 交 [[line(U, Q)]] 得圆心 [[O]]（$= M$）、交 [[l₁]] 得切点 [[T]]，[[circle(O, T)]] 与三线皆相切。"
          ]
        }
      },
      "v-5L-17E-2V": {
        "variantLabels": {
          "1": "公切圆 (₁)",
          "2": "公切圆 (₂)"
        },
        "proof": {
          "steps": [
            "作 [[perp(l₁, P)]] 与平行带中线 [[perpBisector(P, P')]]，定出公共切圆半径 $|PH|$ 及截线段 $PQ$ 的中点 [[K]]。",
            "[[circle(K, P)]] 交 [[perpBisector(P, P')]] 于分居 [[l₃]] 两侧的一对对径圆心 [[O_a]]、[[O_b]]，以 [[compass(P, H; O_a)]] 与 [[compass(P, H; O_b)]] 即作出与 [[l₁]]、[[l₂]]、[[l₃]] 都相切的全部两个圆。"
          ],
          "variantNote": "[[compass(P, H; O_a)]] 与 [[compass(P, H; O_b)]] 分别位于平行带被截线 [[l₃]] 分隔的两侧区域内。"
        }
      }
    }
  },
  "Eta/L9": {
    "title": "已知中点作线段",
    "prompt": "作两端点分别在已知角两边上、且以给定点为中点的线段。",
    "solutions": {
      "l-3L-6E": {
        "variantLabels": {
          "1": "线段 XY"
        },
        "proof": {
          "keyIdea": "过 [[M]] 平行于 [[ray(O, A)]] 投射至 [[ray(O, B)]]，即得 $OY_0$ 的中点 [[P_B]]，沿 [[ray(O, B)]] 加倍便得端点 [[Y₀]]。",
          "steps": [
            "过 [[M]] 作 [[parallel(ray(O, A), M)]] 交 [[ray(O, B)]] 于 [[P_B]]，再作 [[circle(P_B, O)]] 交 [[ray(O, B)]] 于异于 [[O]] 的 [[Y₀]]，使 [[P_B]] 为 $OY_0$ 的中点。",
            "连 [[line(M, Y₀)]] 交 [[ray(O, A)]] 于 [[X₀]]。在 $\\triangle OX_0 Y_0$ 中，过边 $OY_0$ 中点 [[P_B]] 且平行于 $OX_0$ 的 [[parallel(ray(O, A), M)]] 必平分第三边 $X_0 Y_0$ 于 [[M]]。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "线段 XY"
        },
        "proof": {
          "keyIdea": "仅借单圆 [[circle(M, O)]] 将 [[ray(O, A)]] 关于 [[M]] 作中心对称，所得直线与 [[ray(O, B)]] 的交点即为线段端点 [[Z_V]]。",
          "steps": [
            "作 [[circle(M, O)]] 再交 [[ray(O, A)]] 于 [[E]]，连直径 [[line(O, M)]] 与 [[line(E, M)]] 分别交 [[circle(M, O)]] 于对径点 [[O']]、[[E']]，即 [[O]]、[[E]] 关于 [[M]] 的中心对称点。",
            "因此 [[line(O', E')]] 是直线 $OA$ 关于 [[M]] 的中心对称像；取其与 [[ray(O, B)]] 的交点 [[Z_V]]，再沿 [[line(M, Z_V)]] 关于 [[M]] 对称回 [[ray(O, A)]] 上的交点 [[Z_U]]，则 [[M]] 必为 $Z_U Z_V$ 的中点。"
          ]
        }
      }
    }
  },
  "Eta/L10": {
    "title": "角的等腰截线",
    "prompt": "过给定点作一条直线，使其在已知角的两边上截得相等的线段。",
    "solutions": {
      "l-2L-7E": {
        "variantLabels": {
          "1": "等腰截线"
        },
        "proof": {
          "steps": [
            "分别在 [[ray(O, A)]]、[[ray(O, B)]] 上取点 [[P₁]]、[[P₂]] 作出内角平分线 [[angleBisector(P₁, O, P₂)]]。截线在 $\\angle AOB$ 两边截得等腰三角形 $|OX| = |OY|$ 当且仅当该截线垂直于 [[O]] 处的内角平分线，故过 [[P]] 作垂线 [[perp(b₁, P)]] 即为所求。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "等腰截线"
        },
        "proof": {
          "keyIdea": "先用 [[circle(O, P)]] 截出等腰底边 $A_1 B_1$，再将 [[P]] 关于 $A_1 B_1$ 对称至 [[P']] 并取 [[circle(A₁, P)]] 的直径，五步基本操作即可过 [[P]] 作出 $A_1 B_1$ 的平行线。",
          "steps": [
            "作 [[circle(O, P)]] 分别交 [[ray(O, A)]]、[[ray(O, B)]] 于 [[A₁]]、[[B₁]]，则 $|OA_1| = |OB_1| = |OP|$，弦 $A_1 B_1$ 已在角两边截出等长线段。",
            "作 [[circle(A₁, P)]] 与 [[circle(B₁, P)]] 将 [[P]] 关于直线 $A_1 B_1$ 对称至第二交点 [[P']]，得 $PP' \\perp A_1 B_1$。",
            "连直径 [[line(A₁, P')]] 交 [[circle(A₁, P)]] 于对径点 [[Q]]；由泰勒斯定理知 $PQ \\perp PP'$，从而 [[line(P, Q)]] $\\parallel A_1 B_1$，由相似三角形性质知 [[line(P, Q)]] 在 [[ray(O, A)]] 与 [[ray(O, B)]] 上截得相等线段。"
          ]
        }
      }
    }
  },
  "Eta/L11": {
    "title": "旁切圆",
    "prompt": "作由三条给定直线围成的三角形的一个旁切圆。",
    "solutions": {
      "l-4L-12E": {
        "variantLabels": {
          "1": "旁切圆"
        },
        "proof": {
          "steps": [
            "由 [[line(A, B)]]、[[line(B, C)]]、[[line(C, A)]] 两两相交标出顶点 [[A]]、[[B]]、[[C]]，并在 [[line(A, B)]] 上沿 $\\overrightarrow{BA}$ 延长线越过 [[A]] 取点 [[P]]。",
            "[[A]] 处的外角平分线 [[angleBisector(C, A, P)]] 与 [[B]] 处的内角平分线 [[angleBisector(C, B, A)]] 交于 [[B]] 所对旁心 [[J_B]]，其到三边所在直线距离相等；作 [[perp(line(C, A), J_B)]] 得 [[line(C, A)]] 上的切点 [[T_B]]，故 [[circle(J_B, T_B)]] 即为所求旁切圆。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "旁切圆"
        },
        "proof": {
          "keyIdea": "先向外截出 $|CD| = b + c$，再沿 [[line(B, C)]] 回截 $|BE| = b + c - a = 2(s - a)$，借共用等圆 [[circle(B, E)]] 与 [[circle(E, B)]] 同时作出旁切点 [[T]] 处的垂线及顶点 [[B]] 处的菱形外角平分线。",
          "steps": [
            "在 [[line(A, B)]]、[[line(B, C)]]、[[line(C, A)]] 上标出顶点 [[A]]、[[B]]、[[C]]，记 $a = |BC|$、$b = |CA|$、$c = |AB|$，半周长 $s = \\frac{a + b + c}{2}$。[[circle(A, B)]] 越过 [[A]] 交 [[line(C, A)]] 于 [[D]] 使 $|CD| = b + c$，[[circle(C, D)]] 越过 [[B]] 交 [[line(B, C)]] 于 [[E]] 得 $|BE| = b + c - a = 2(s - a) > 0$。",
            "因 [[C]] 所对旁切圆在 [[line(B, C)]] 上的切点距 [[C]] 为 $s$（即越过 [[B]] 距离 $s - a = \\frac{1}{2}|BE|$），$BE$ 的中点恰为切点 [[T]]。作 [[circle(B, E)]] 与 [[circle(E, B)]] 交于 [[G]]、[[H]]，其垂直平分线 [[line(G, H)]] 在 [[line(B, C)]] 上定出切点 [[T]] 并垂直穿过旁心。",
            "同时 [[circle(B, E)]] 交射线 $\\overrightarrow{BA}$ 于 [[F]]（$|BF| = |BE|$）；作 [[circle(F, B)]] 交 [[circle(E, B)]] 于异于 [[B]] 的 [[K]]，在 [[B]] 的外角上构成菱形 $BEKF$，使 [[line(B, K)]] 平分 [[B]] 的外角，故 [[line(G, H)]] 与 [[line(B, K)]] 交于旁心 [[J_C]]，[[circle(J_C, T)]] 即为旁切圆。"
          ]
        }
      },
      "v-15L-39E-3V": {
        "variantLabels": {
          "1": "旁切圆 (₁)",
          "2": "旁切圆 (₂)",
          "3": "旁切圆 (₃)"
        },
        "proof": {
          "steps": [
            "在 [[line(A, B)]]、[[line(B, C)]]、[[line(C, A)]] 上标出 [[A]]、[[B]]、[[C]] 后，由 [[circle(C, A)]]、[[circle(A, B)]]、[[circle(B, C)]] 分别越过顶点在延长线上截出外射线点 [[C']]、[[A']]、[[B']]。",
            "将一外角平分线与一内角平分线两两求交——[[angleBisector(B, C, C')]] $\\cap$ [[angleBisector(B, A, C)]] $=$ [[J_A]]、[[angleBisector(C, A, A')]] $\\cap$ [[angleBisector(C, B, A)]] $=$ [[J_B]]、[[angleBisector(A, B, B')]] $\\cap$ [[angleBisector(A, C, B)]] $=$ [[J_C]]——定出全部三个旁心。",
            "分别作垂线 [[perp(line(B, C), J_A)]]、[[perp(line(C, A), J_B)]]、[[perp(line(A, B), J_C)]] 得切点 [[T_A]]、[[T_B]]、[[T_C]]，再作 [[circle(J_A, T_A)]]、[[circle(J_B, T_B)]] 与 [[circle(J_C, T_C)]] 即得全部三个旁切圆。"
          ],
          "variantNote": "[[circle(J_A, T_A)]]、[[circle(J_B, T_B)]]、[[circle(J_C, T_C)]] 分别为顶点 [[A]]、[[B]]、[[C]] 所对的旁切圆。"
        }
      }
    }
  }
};
