import type { LevelLocaleEntry } from '../../../types';

export const EPSILON_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Epsilon/L1": {
    "title": "平行线",
    "prompt": "过已知点作已知直线的平行线。",
    "solutions": {
      "l-2L-6E": {
        "variantLabels": {
          "1": "平行线"
        },
        "proof": {
          "steps": [
            "过点 [[P]] 先作 [[l]] 的垂线 [[perp(l, P)]]，再过点 [[P]] 作该垂线的垂线 [[perp(perp(l, P), P)]]；同一平面内垂直于同一条直线的两条直线互相平行，故所得直线平行于 [[l]]。"
          ]
        }
      },
      "e-4L-4E": {
        "variantLabels": {
          "1": "平行线"
        },
        "proof": {
          "keyIdea": "以 $l$ 上线段为底，仅用三个等半径圆与一条直线补全边长为 $|O_1P|$ 的菱形。",
          "steps": [
            "在 [[l]] 上任取一点 [[O₁]]，作半径 $r = |O_1P|$ 的 [[circle(O₁, P)]] 交 [[l]] 于 [[O₂]]，得 $|O_1O_2| = |O_1P| = r$。",
            "再分别作同半径 $r$ 的 [[circle(O₂, O₁)]] 与 [[circle(P, O₁)]]，两圆异于 [[O₁]] 的第二交点 [[Q]] 满足 $|O_2Q| = |PQ| = r$。四边形 $PO_1O_2Q$ 四边相等故为菱形，从而对边 [[line(P, Q)]] 平行于 [[l]]。"
          ]
        }
      }
    }
  },
  "Epsilon/T1": {
    "title": "平行线工具",
    "prompt": "你已解锁“平行线”工具。先点击已知直线，再点击已知点即可作出平行线。",
    "solutions": {
      "le-1L-4E": {
        "variantLabels": {
          "1": "平行线"
        },
        "proof": {
          "steps": [
            "直接对直线 [[l]] 与点 [[P]] 调用平行线工具即可一步（$1\\text{L}$）作出过 [[P]] 且平行于 [[l]] 的唯一平行线 [[parallel(l, P)]]（其 $4\\text{E}$ 基本步数对应第 5.1 关的三圆一线菱形构造）。"
          ]
        }
      }
    }
  },
  "Epsilon/L2": {
    "title": "三顶点作平行四边形",
    "prompt": "已知平行四边形四个顶点中的三个，求作该平行四边形。",
    "solutions": {
      "l-4L-10E": {
        "variantLabels": {
          "1": "平行四边形"
        },
        "proof": {
          "steps": [
            "连接两条邻边 [[line(A, B)]] 与 [[line(B, C)]]，再分别过对角顶点作平行线 [[parallel(line(A, B), C)]] 与 [[parallel(line(B, C), A)]]，两组平行对边交于第四顶点 [[D₁]]，即围成平行四边形 $ABCD_1$。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "平行四边形"
        },
        "proof": {
          "keyIdea": "统一以 $r = |AC|$ 为菱形边长作两组平行对边，使两个菱形共享分别以 $A, C$ 为圆心的两个辅助圆，从而节省 $2\\text{E}$。",
          "steps": [
            "连接边 [[line(A, B)]] 与 [[line(B, C)]]，再作公共半径为 $r = |AC|$ 的两圆 [[circle(A, C)]] 与 [[circle(C, A)]]。",
            "[[line(A, B)]] 交 [[circle(A, C)]] 于 [[P₁]]（$|AP_1| = r$），作 [[circle(P₁, A)]] 再交 [[circle(C, A)]] 于异于 [[A]] 的 [[Q₁]]（$|P_1Q_1| = |CQ_1| = r$），则 $AP_1Q_1C$ 为菱形，故 [[line(C, Q₁)]] $\\parallel$ [[line(A, B)]]。",
            "对称地，[[line(B, C)]] 交 [[circle(C, A)]] 于 [[P₂]]（$|CP_2| = r$），作 [[circle(P₂, C)]] 再交 [[circle(A, C)]] 于异于 [[C]] 的 [[Q₂]]，由菱形 $CP_2Q_2A$ 得 [[line(A, Q₂)]] $\\parallel$ [[line(B, C)]]；两线相交即定出第四顶点 [[D₁]]。"
          ]
        }
      },
      "v-6L-15E-3V": {
        "variantLabels": {
          "1": "平行四边形 (₁)",
          "2": "平行四边形 (₂)",
          "3": "平行四边形 (₃)"
        },
        "proof": {
          "keyIdea": "作出 $\\triangle ABC$ 的反补三角形构型：$\\triangle ABC$ 的每一条边轮流充当一个平行四边形的对角线，其余两边充当邻边。",
          "steps": [
            "连接 $\\triangle ABC$ 的三边直线 [[line(A, B)]]、[[line(B, C)]]、[[line(A, C)]]，并分别过各边对顶点作平行线 [[parallel(line(A, B), C)]]、[[parallel(line(B, C), A)]] 与 [[parallel(line(A, C), B)]]。",
            "三条平行线两两相交于 [[D₁]]、[[D₂]]、[[D₃]]，构成以 $A, B, C$ 为三边中点的反补三角形 $\\triangle D_1D_2D_3$，同时给出以已知三点为顶点的全部三个平行四边形 $ABCD_1$、$ACBD_2$ 与 $BACD_3$。"
          ],
          "variantNote": "三个平行四边形 $ABCD_1$、$BACD_3$、$ACBD_2$ 分别对应选取线段 $AC$、$BC$、$AB$ 作为已知顶点间的对角线。"
        }
      }
    }
  },
  "Epsilon/L3": {
    "title": "到两点等距的直线 - 1",
    "prompt": "过点 C 作一条到点 A、B 距离相等且不经过 A、B 之间的直线。",
    "solutions": {
      "l-2L-5E": {
        "variantLabels": {
          "1": "等距平行线"
        },
        "proof": {
          "steps": [
            "到 [[A]]、[[B]] 距离相等的直线必过线段 $AB$ 的中点（穿行于两点之间）或平行于直线 $AB$；连 [[line(A, B)]] 并过 [[C]] 作平行线 [[parallel(line(A, B), C)]]，所得直线不穿行于 [[A]]、[[B]] 之间且到两点的垂距相等，即为唯一解。"
          ]
        }
      },
      "e-4L-4E": {
        "variantLabels": {
          "1": "等距平行线"
        },
        "proof": {
          "keyIdea": "无需连出直线 $AB$，先将 $C$ 关于 $AB$ 轴对称，再利用直径所对圆周角为直角直接以 $4\\text{E}$ 作出过 $C$ 平行于 $AB$ 的直线。",
          "steps": [
            "分别以 [[A]]、[[B]] 为圆心过 [[C]] 作 [[circle(A, C)]] 与 [[circle(B, C)]]，两圆异于 [[C]] 的第二交点 [[P]] 即为 [[C]] 关于连心线 $AB$ 的对称点，故公共弦 $CP \\perp AB$。",
            "连 [[circle(B, C)]] 的直径 [[line(B, P)]] 得 [[P]] 的对径点 [[Q_B]]（$\\neq P$）。由直径所对圆周角 $\\angle PCQ_B = 90^\\circ$ 知 [[line(C, Q_B)]] $\\perp CP$，从而平行于 $AB$，到 [[A]]、[[B]] 等距且不经过两点之间。"
          ]
        }
      }
    }
  },
  "Epsilon/L4": {
    "title": "到两点等距的直线 - 2",
    "prompt": "过点 C 作一条经过点 A、B 之间且到它们距离相等的直线。",
    "solutions": {
      "le-3L-5E": {
        "variantLabels": {
          "1": "过中点的等距线"
        },
        "proof": {
          "steps": [
            "将 [[line(A, B)]] 与 [[perpBisector(A, B)]] 相交定出严格位于 [[A]]、[[B]] 之间的中点 [[M]]。自 [[A]]、[[B]] 向直线 [[line(C, M)]] 作垂线 $AF_A, BF_B$，由 $|MA| = |MB|$ 及对顶角相等得 $\\triangle MAF_A \\cong \\triangle MBF_B$（AAS），故 $|AF_A| = |BF_B|$，[[line(C, M)]] 经过 [[A]]、[[B]] 之间且到两点等距。"
          ]
        }
      }
    }
  },
  "Epsilon/L5": {
    "title": "井字线",
    "prompt": "过已知点作一条直线，使两组平行线在该直线上截得相等的线段。",
    "solutions": {
      "l-2L-5E": {
        "variantLabels": {
          "1": "等截距直线"
        },
        "proof": {
          "keyIdea": "四条直线围成平行四边形，任何平行于其对角线的直线在两组平行线上截得的线段均等于该对角线长。",
          "steps": [
            "标出 [[l₁]] $\\cap$ [[l₄]] 的交点 [[A]] 与 [[l₂]] $\\cap$ [[l₃]] 的交点 [[C]]，即两组平行线（[[l₁]], [[l₂]]）与（[[l₃]], [[l₄]]）所围成平行四边形的一对对角顶点。",
            "连对角线 [[line(A, C)]] 并过 [[P]] 作平行线 [[parallel(line(A, C), P)]]，由平行四边形对边相等（夹在平行线间的平行线段相等）知，（[[l₁]], [[l₂]]）与（[[l₃]], [[l₄]]）在 [[parallel(line(A, C), P)]] 上截得的线段长均等于 $|AC|$。"
          ]
        }
      },
      "e-4L-4E": {
        "variantLabels": {
          "1": "等截距直线"
        },
        "proof": {
          "keyIdea": "零步数标出平行四边形对角顶点 $A, C$，无需连对角线 $AC$，借轴对称与直径圆周角定理仅用 $4\\text{E}$ 作出过 $P$ 平行于 $AC$ 的直线。",
          "steps": [
            "标出对角顶点 [[A]]（$\\in$ [[l₁]] $\\cap$ [[l₄]]）与 [[C]]（$\\in$ [[l₂]] $\\cap$ [[l₃]]）。作 [[circle(A, P)]] 与 [[circle(C, P)]] 交于异于 [[P]] 的第二点 [[P']]，即 [[P]] 关于直线 $AC$ 的对称点，故 $PP' \\perp AC$。",
            "连直径 [[line(C, P')]] 交 [[circle(C, P)]] 于对径点 [[Q_C]]，由直径所对圆周角 $\\angle P'PQ_C = 90^\\circ$ 得 [[line(P, Q_C)]] $\\parallel AC$；再由平行四边形对边相等知，（[[l₁]], [[l₂]]）与（[[l₃]], [[l₄]]）在 [[line(P, Q_C)]] 上截得的线段长均等于 $|AC|$。"
          ]
        }
      },
      "v-4L-10E-2V": {
        "variantLabels": {
          "1": "等截距直线 (₁)",
          "2": "等截距直线 (₂)"
        },
        "proof": {
          "keyIdea": "过点 $P$ 分别作中央平行四边形两条对角线 $AC$ 与 $BD$ 的平行线。",
          "steps": [
            "标出由（[[l₁]], [[l₂]]）与（[[l₃]], [[l₄]]）围成的平行四边形全部四个顶点 [[A]]、[[B]]、[[C]]、[[D]]，连两条对角线 [[line(A, C)]]、[[line(B, D)]] 并过 [[P]] 作它们的平行线 [[parallel(line(A, C), P)]] 与 [[parallel(line(B, D), P)]]。",
            "由夹在平行线间的平行线段相等知，[[parallel(line(A, C), P)]] 在两组平行线间的截距同为 $|AC|$，而 [[parallel(line(B, D), P)]] 在两组平行线间的截距同为 $|BD|$。"
          ],
          "variantNote": "当割线方向在平行四边形相邻两边所分出的每一对顶角扇区内旋转时，两截线段长度之比严格单调变化，故平行于两条对角线的方向恰给出仅有的两个解。"
        }
      }
    }
  },
  "Epsilon/L6": {
    "title": "平移角",
    "prompt": "以已知点为顶点作一个与已知角相等的角，使其两边分别与已知角的两边平行。",
    "solutions": {
      "l-2L-8E": {
        "variantLabels": {
          "1": "平移角的两边"
        },
        "proof": {
          "steps": [
            "过点 [[P]] 分别作 [[parallel(ray(O, A), P)]] 与 [[parallel(ray(O, B), P)]]，将已知角两条边 [[ray(O, A)]] 与 [[ray(O, B)]] 的方向平移至顶点 [[P]]，由同位角相等知两直线所成角等于已知角。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "平移角的两边"
        },
        "proof": {
          "keyIdea": "以 $r = |OP|$ 为公共边长构造两个共享边 $OP$ 以及圆心在 $O, P$ 的两个等圆的菱形，从而省去 $2\\text{E}$。",
          "steps": [
            "作半径为 $r = |OP|$ 的 [[circle(O, P)]]，分别交两边 [[ray(O, A)]]、[[ray(O, B)]] 于 [[A₁]]、[[B₁]]（$|OA_1| = |OB_1| = r$），再作同半径的公共辅助圆 [[circle(P, O)]]。",
            "作 [[circle(A₁, O)]] 交 [[circle(P, O)]] 于异于 [[O]] 的 [[Q_A]]，围成边长为 $r$ 的菱形 $OA_1Q_AP$，得 [[line(P, Q_A)]] $\\parallel$ [[ray(O, A)]]；同理作 [[circle(B₁, O)]] 交 [[circle(P, O)]] 于异于 [[O]] 的 [[Q_B]]，由菱形 $OB_1Q_BP$ 得 [[line(P, Q_B)]] $\\parallel$ [[ray(O, B)]]，且 $\\angle Q_APQ_B = \\angle A_1OB_1$。"
          ]
        }
      }
    }
  },
  "Epsilon/L7": {
    "title": "两平行线的等距线",
    "prompt": "作一条与两条已知平行线平行且到它们距离相等的直线。",
    "solutions": {
      "l-2L-6E": {
        "variantLabels": {
          "1": "等距中位线"
        },
        "proof": {
          "steps": [
            "在 [[l₁]] 上任取点 [[P]] 作垂线 [[perp(l₁, P)]]，它必垂直交平行线 [[l₂]] 于点 [[Q]]；再作公垂线段 $PQ$ 的垂直平分线 [[perpBisector(P, Q)]]，该直线过 $PQ$ 中点且垂直于 $PQ$，故平行于 [[l₁]]、[[l₂]] 且到两者等距。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "等距中位线"
        },
        "proof": {
          "keyIdea": "在 $l_1$ 上截出长 $2r$ 的直径 $UV$，以端点 $U$ 为圆心作半径 $2r$ 的圆截 $l_2$ 得两点，借直径圆周角为直角将自 $V$ 连向 $l_2$ 的两条割线段同时二等分到中位线上。",
          "steps": [
            "分别在 [[l₁]]、[[l₂]] 上任取 [[P]]、[[Q]]（设 $r = |PQ|$）。作 [[circle(P, Q)]] 截 [[l₁]] 得长 $2r$ 的直径端点 [[U]]、[[V]]；再以 [[U]] 为圆心作半径 $2r > r \\ge \\operatorname{dist}(U, l_2)$ 的 [[circle(U, V)]]，必交 [[l₂]] 于相异两点 [[X₁]]、[[X₂]]（$|UX_1| = |UX_2| = 2r$）。",
            "连 [[line(V, X₁)]] 与 [[line(V, X₂)]]，分别再交 [[circle(P, Q)]] 于异于 [[V]] 的点 [[M₁]]、[[M₂]]。因 $UV$ 为 [[circle(P, Q)]] 直径，有 $\\angle UM_1V = \\angle UM_2V = 90^\\circ$，即 $UM_1, UM_2$ 分别为等腰 $\\triangle UVX_1$ 与 $\\triangle UVX_2$（$|UV| = |UX_1| = |UX_2| = 2r$）底边上的高，由三线合一知 [[M₁]]、[[M₂]] 分别为 $VX_1$、$VX_2$ 的中点。",
            "因 [[V]] 在 [[l₁]] 上而 [[X₁]]、[[X₂]] 在 [[l₂]] 上，在 $\\triangle VX_1X_2$ 中由三角形中位线定理知，直线 [[line(M₁, M₂)]] 平行于 [[l₁]]、[[l₂]] 且位于两者正中间。"
          ]
        }
      }
    }
  },
  "Epsilon/L8": {
    "title": "圆外切正方形",
    "prompt": "作已知圆的外切正方形，使其有两条边平行于已知直线。",
    "solutions": {
      "l-6L-18E": {
        "variantLabels": {
          "1": "外切正方形"
        },
        "proof": {
          "keyIdea": "过圆心作垂直与平行于 $l$ 的两条正交直径定出全部四个切点，再过各切点作切线垂线。",
          "steps": [
            "过圆心 [[O]] 作 [[perp(l, O)]] 及其垂线 [[perp(perp(l, O), O)]]，得到分别垂直、平行于 [[l]] 的两条正交直径，交 [[circle(O)]] 于两组对径切点 [[T₁]]、[[T₂]] 与 [[T₃]]、[[T₄]]。",
            "分别过四个切点 [[T₁]]、[[T₂]]、[[T₃]]、[[T₄]] 作对应直径的垂线 [[perp(perp(l, O), T₁)]]、[[perp(perp(l, O), T₂)]]、[[perp(h₂, T₃)]] 与 [[perp(h₂, T₄)]]，四条切线围成两组对边分别平行、垂直于 [[l]] 的外切正方形 [[V₁]]、[[V₂]]、[[V₃]]、[[V₄]]。"
          ]
        }
      },
      "e-11L-11E": {
        "variantLabels": {
          "1": "外切正方形"
        },
        "proof": {
          "keyIdea": "将 $O$ 关于 $l$ 对称作出垂直于 $l$ 的直径 $T_1T_2$，借垂足 $F$ 构造 $45^\\circ$ 正方形对角线，再以 $T_1, T_2$ 为圆心作半径为 $r$ 的圆一次定出四个顶点。",
          "steps": [
            "在 [[l]] 上任取相异两点 [[P₁]]、[[P₂]]，由 [[circle(P₁, O)]] 与 [[circle(P₂, O)]] 相交得 [[O]] 关于 [[l]] 的对称点 [[O']]，故 [[line(O, O')]] 垂直于 [[l]] 于垂足 [[F]]，并截半径为 $r$ 的 [[circle(O)]] 得对径切点 [[T₁]]、[[T₂]]。",
            "作 [[circle(F, O)]] 交 [[l]] 于 [[Q]]，由 $|FQ| = |FO|$ 且 $\\angle OFQ = 90^\\circ$ 知 [[line(O, Q)]] 与 [[l]] 及 $OT_1$ 均成 $45^\\circ$ 角，即为所求外切正方形的一条对角线。",
            "作半径同为 $r$ 的 [[circle(T₁, O)]] 与 [[circle(T₂, O)]]，分别再交对角线 [[line(O, Q)]] 于 [[V₁]]、[[V₃]]：在等腰 $\\triangle OT_1V_1$（$|T_1O| = |T_1V_1| = r$）中，$\\angle T_1OV_1 = 45^\\circ$ 推出 $\\angle OT_1V_1 = 90^\\circ$，故 [[line(T₁, V₁)]] 切 [[circle(O)]] 于 [[T₁]]（且平行于 [[l]]），并交 [[circle(T₁, O)]] 于对径顶点 [[V₂]]（$|T_1V_2| = r$）。",
            "对称地，[[line(T₂, V₃)]] 切 [[circle(O)]] 于 [[T₂]] 并交 [[circle(T₂, O)]] 于对径顶点 [[V₄]]（$|T_2V_4| = r$）；最后连接 [[line(V₂, V₃)]] 与 [[line(V₄, V₁)]]，补齐垂直于 [[l]] 的另外两条切边。"
          ]
        }
      }
    }
  },
  "Epsilon/L9": {
    "title": "正方形内接正方形",
    "prompt": "在已知正方形内作一个内接正方形，其一个顶点已给出。",
    "solutions": {
      "l-6L-12E": {
        "variantLabels": {
          "1": "内接正方形 PQRS"
        },
        "proof": {
          "keyIdea": "将线段长 $|BP|$ 转移至边 $BC$ 并平行投影到对边 $DA$ 上定出相邻顶点 $S$（满足 $|AS| = |BP|$），再由边 $SP$ 作垂线围成正方形。",
          "steps": [
            "作 [[circle(B, P)]] 交 [[seg(B, C)]] 于点 [[U]]（$|BU| = |BP|$），过 [[U]] 作垂线 [[perp(seg(B, C), U)]]（平行于 $AB$）交对边 [[seg(D, A)]] 于 [[S]]，得 $|AS| = |BU| = |BP|$（从而 $|DS| = |AP|$），连 [[line(S, P)]] 即得内接正方形的一条边。",
            "分别过 [[P]]、[[S]] 作 [[line(S, P)]] 的垂线 [[perp(line(S, P), P)]] 与 [[perp(line(S, P), S)]]，交 [[seg(B, C)]] 于 [[Q]]、交 [[seg(C, D)]] 于 [[R]]。由 $\\angle SPQ = \\angle PSR = 90^\\circ$ 及同角余角相等得 $\\triangle PBQ \\cong \\triangle SAP \\cong \\triangle SDR$（ASA），故 $|PQ| = |SP| = |SR|$ 且 $\\triangle QCR \\cong \\triangle PBQ$（SAS），连 [[line(Q, R)]] 即得内接正方形 $PQRS$。"
          ]
        }
      },
      "e-7L-7E": {
        "variantLabels": {
          "1": "内接正方形 PQRS"
        },
        "proof": {
          "keyIdea": "利用外正方形 $ABCD$ 绕其中心 $O$ 的 $90^\\circ$ 旋转对称性，以 $O$ 为圆心过 $P$ 作一个圆即可一次截出内接正方形的全部四个顶点。",
          "steps": [
            "连对角线 [[line(A, C)]] 与 [[line(B, D)]] 交于正方形 $ABCD$ 的中心 [[O]]；绕 [[O]] 旋转 $90^\\circ$ 将四条边依次轮换：[[seg(A, B)]] $\\mapsto$ [[seg(B, C)]] $\\mapsto$ [[seg(C, D)]] $\\mapsto$ [[seg(D, A)]]。",
            "因绕 [[O]] 的 $90^\\circ$ 旋转保持到 [[O]] 的距离及在各向边上的分点位置，[[circle(O, P)]] 在 [[seg(B, C)]]、[[seg(C, D)]]、[[seg(D, A)]] 上截得的对应交点 [[Q]]、[[R]]、[[S]] 恰为 [[P]] 依次旋转 $90^\\circ, 180^\\circ, 270^\\circ$ 的像；顺次连 [[line(P, Q)]]、[[line(Q, R)]]、[[line(R, S)]]、[[line(S, P)]] 即得具有 $90^\\circ$ 旋转对称性的圆内接正方形 $PQRS$。"
          ]
        }
      }
    }
  },
  "Epsilon/L10": {
    "title": "与正方形一边相切的圆",
    "prompt": "作一个与正方形某条边相切，且经过其对边两个顶点的圆。",
    "solutions": {
      "l-3L-7E": {
        "variantLabels": {
          "1": "相切圆"
        },
        "proof": {
          "keyIdea": "由关于 $AB$ 中垂线的对称性，过 $A, B$ 且与对边 $CD$ 相切的圆必切 $CD$ 于其中点 $M_{CD}$，问题化归为求 $\\triangle ABM_{CD}$ 的外接圆。",
          "steps": [
            "过 [[A]]、[[B]] 的圆其圆心必在 [[perpBisector(A, B)]] 上，该中垂线垂直交对边 [[seg(C, D)]] 于其中点 [[M_CD]]。",
            "对 [[perpBisector(A, B)]] 上任一点 $O_1$ 均有 $O_1M_{CD} \\perp CD$，故圆与 [[seg(C, D)]] 相切当且仅当 $|O_1M_{CD}| = |O_1A|$；将 [[perpBisector(A, B)]] 与 [[perpBisector(A, M_CD)]] 相交定出圆心 [[O₁]]，作 [[circle(O₁, A)]] 即过 [[A]]、[[B]] 且与 [[seg(C, D)]] 相切于 [[M_CD]]。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "相切圆"
        },
        "proof": {
          "keyIdea": "绕 $M_{CD}$ 仅添一圆将顶点 $D$ 关于 $AM_{CD}$ 对称至 $Q$，结合 $AD \\parallel E_1E_2$ 导角直接构造等腰 $\\triangle AO_1M_{CD}$（$|O_1A| = |O_1M_{CD}|$），省去第二条中垂线。",
          "steps": [
            "由 [[circle(A, B)]] 与 [[circle(B, A)]] 交于 [[E₁]]、[[E₂]]，连 [[line(E₁, E₂)]] 得 $AB$ 的垂直平分线，它平行于 $AD$ 且垂直交 [[seg(C, D)]] 于中点 [[M_CD]]。",
            "因 $|AD| = |AB|$，点 [[D]] 同时位于 [[circle(A, B)]] 与 [[circle(M_CD, D)]] 上，故两圆异于 [[D]] 的第二交点 [[Q]] 为 [[D]] 关于连心线 $AM_{CD}$ 的对称点。设 $\\theta = \\angle DAM_{CD}$，由对称性得 $\\angle M_{CD}AQ = \\theta$，$\\angle DAQ = 2\\theta$。",
            "连 [[line(A, Q)]] 交 [[line(E₁, E₂)]] 于 [[O₁]]。由 $AD \\parallel$ [[line(E₁, E₂)]] 及同旁内角互补得 $\\angle AO_1M_{CD} = 180^\\circ - \\angle DAQ = 180^\\circ - 2\\theta$，从而在 $\\triangle AO_1M_{CD}$ 中 $\\angle AM_{CD}O_1 = 180^\\circ - \\theta - (180^\\circ - 2\\theta) = \\theta = \\angle M_{CD}AO_1$，故 $|O_1A| = |O_1M_{CD}| = |O_1B|$，[[circle(O₁, A)]] 过 [[A]]、[[B]] 且切 [[seg(C, D)]] 于 [[M_CD]]。"
          ]
        }
      },
      "v-10L-22E-4V": {
        "variantLabels": {
          "1": "相切圆 (₁)",
          "2": "相切圆 (₂)",
          "3": "相切圆 (₃)",
          "4": "相切圆 (₄)"
        },
        "proof": {
          "keyIdea": "共用正方形 $ABCD$ 的两条正交中位线一次定出全部四边中点，再对称作出四个外接圆。",
          "steps": [
            "作两条正交对称轴 [[perpBisector(A, B)]] 与 [[perpBisector(B, C)]]，在正方形四边上一次标出全部四个中点 [[M_CD]]、[[M_AB]]、[[M_DA]]、[[M_BC]]。",
            "将两条对称轴分别与 [[perpBisector(A, M_CD)]]、[[perpBisector(B, M_DA)]]、[[perpBisector(C, M_AB)]]、[[perpBisector(D, M_BC)]] 相交定出四个圆心 [[O₁]]、[[O₂]]、[[O₃]]、[[O₄]]，再作 [[circle(O₁, A)]]、[[circle(O₂, B)]]、[[circle(O₃, C)]]、[[circle(O₄, D)]]，即得互成 $90^\\circ$ 旋转对称的全部四个解。"
          ],
          "variantNote": "正方形 $ABCD$ 的四条边各唯一对应一个切于该边中点且过对边两顶点的圆。"
        }
      }
    }
  },
  "Epsilon/L11": {
    "title": "正六边形",
    "prompt": "以已知线段为边作一个正六边形。",
    "solutions": {
      "l-7L-15E": {
        "variantLabels": {
          "1": "正六边形"
        },
        "proof": {
          "keyIdea": "自外侧正三角形顶点 $P$ 过 $A, B$ 延长直径定出 $F, C$，再引两条平行边围成边长为 $2|AB|$ 的大正三角形 $\\triangle FCQ$，最后用 $OQ$ 的垂直平分线截出顶边。",
          "steps": [
            "设 $s = |AB|$。两等圆 [[circle(A, B)]] 与 [[circle(B, A)]] 交于正六边形中心 [[O]] 与对侧正三角形顶点 [[P]]（$\\angle PAB = \\angle PBA = 60^\\circ$）。连直径直线 [[line(P, A)]] 与 [[line(P, B)]] 分别再交两圆于 [[F]]、[[C]]，得 $|AF| = |BC| = s$、$\\angle BAF = \\angle ABC = 120^\\circ$，且 $F, O, C$ 共线构成长 $2s$ 的主对角线 $FC$。",
            "过 [[F]]、[[C]] 分别作平行线 [[parallel(line(P, B), F)]] 与 [[parallel(line(P, A), C)]]，与 $FC$ 均成 $60^\\circ$ 角并交于 [[Q]]，构成边长为 $2s$ 的大正三角形 $\\triangle FCQ$，且 [[O]] 为底边 $FC$ 的中点。",
            "在正三角形 $\\triangle FCQ$ 中，中线 $OQ \\perp FC$，故 [[perpBisector(O, Q)]] 恰为平行于 $FC \\parallel$ [[seg(A, B)]] 的中位线，截 [[parallel(line(P, B), F)]] 与 [[parallel(line(P, A), C)]] 于腰中点 [[E]] 与 [[P₁]]（$|FE| = |EP_1| = |P_1C| = s$），围成正六边形 $ABCP_1EF$。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "正六边形"
        },
        "proof": {
          "keyIdea": "以中心 $O$ 为圆心过 $P$ 作半径 $\\sqrt{3}|AB|$ 的圆，一次截出边长为 $3|AB|$ 的大卫之星正三角形框架，仅连三条直尺弦即得正六边形的其余三条边。",
          "steps": [
            "设 $s = |AB|$。同前，[[circle(A, B)]] 与 [[circle(B, A)]] 交于中心 [[O]] 与支点 [[P]]（$|OP| = \\sqrt{3}\\,s$），连 [[line(P, A)]] 与 [[line(P, B)]] 得顶点 [[F]]、[[C]]（$|PA| = |AF| = |PB| = |BC| = s$），且 $\\triangle OAF$ 与 $\\triangle OBC$ 均为边长 $s$ 的正三角形。",
            "作半径为 $\\sqrt{3}\\,s$ 的 [[circle(O, P)]]，分别再交 [[line(P, A)]]、[[line(P, B)]] 于 [[E']]、[[D']]。因正三角形 $\\triangle OAF$、$\\triangle OBC$ 自 [[O]] 引出的高平分 $AF$、$BC$（垂足距 [[P]] 为 $\\frac{3}{2}s$），由垂径定理知它们同样平分 [[circle(O, P)]] 的弦 $PE'$ 与 $PD'$，得 $|PE'| = |PD'| = 3s$（即 $|FE'| = |CD'| = s$），故 $\\triangle PE'D'$ 为边长 $3s$ 的正三角形，且 [[line(E', D')]] $\\parallel$ [[seg(A, B)]]。",
            "同时由第 4.1 关的 $\\sqrt{3}\\,s$ 弦长性质，[[circle(O, P)]] 截 [[circle(A, B)]]、[[circle(B, A)]] 得直线 $AB$ 上的对径点 [[A']]、[[B']]（$|A'A| = |BB'| = s$）。于是 $\\triangle A'AF$ 与 $\\triangle B'BC$ 均为正三角形，直线 [[line(A', F)]] 与 [[line(B', C)]] 在 $\\triangle PE'D'$ 两角截下边长为 $s$ 的小正三角形 $\\triangle E'FE$ 与 $\\triangle D'CD$，在 [[line(E', D')]] 上留出顶点 [[E]]、[[D]] 且满足 $|ED| = 3s - s - s = s$。"
          ]
        }
      },
      "v-12L-28E-2V": {
        "variantLabels": {
          "1": "正六边形 (₁)",
          "2": "正六边形 (₂)"
        },
        "proof": {
          "keyIdea": "复用绕 $A, B$ 的初始两等圆，互换正六边形中心 $O$ 与外侧支点 $P$ 的角色，同时作出关于 $AB$ 对称的两个正六边形。",
          "steps": [
            "[[circle(A, B)]] 与 [[circle(B, A)]] 相交同时定出对称两点 [[O]] 与 [[P]]。以 [[P]] 为支点，依次作 [[line(P, A)]]、[[line(P, B)]]、[[parallel(line(P, B), F)]]、[[parallel(line(P, A), C)]]（交于 [[Q]]）及 [[perpBisector(O, Q)]]，即得以 [[O]] 为中心的第一个正六边形 $ABCP_1EF$（含顶点 [[C]]、[[P₁]]、[[E]]、[[F]]）。",
            "互换 [[O]] 与 [[P]] 的角色——连 [[line(O, A)]]、[[line(O, B)]] 定出 [[F₂]]、[[C₂]]，作平行线 [[parallel(line(O, B), F₂)]]、[[parallel(line(O, A), C₂)]] 交于 [[Q₂]]，再用 [[perpBisector(P, Q₂)]] 截出 [[E₂]]、[[P₂]]——即得以 [[P]] 为中心的第二个正六边形 $ABC_2P_2E_2F_2$。"
          ],
          "variantNote": "以 [[seg(A, B)]] 为公共边的两个正六边形关于直线 $AB$ 轴对称，其中心分别为 [[O]] 与 [[P]]。"
        }
      }
    }
  }
};
