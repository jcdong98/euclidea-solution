import type { LevelLocaleEntry } from '../../../types';

export const ZETA_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Zeta/L1": {
    "title": "中心对称",
    "prompt": "作给定线段关于给定点的中心对称线段。",
    "solutions": {
      "l-4L-7E": {
        "variantLabels": {
          "1": "中心对称线段 A'B'"
        },
        "proof": {
          "keyIdea": "先作一个端点关于 [[O]] 的中心对称点，再由平行线与过 [[O]] 的直线相交确定另一对称端点。",
          "steps": [
            "[[circle(O, A)]] 与 [[line(A, O)]] 的第二交点 [[A']] 满足 $|OA'| = |OA|$ 且 [[O]] 为 $AA'$ 的中点，故 [[A']] 为 [[A]] 关于 [[O]] 的对称点。",
            "过 [[A']] 作 [[parallel(seg(A, B), A')]] 交 [[line(B, O)]] 于 [[P₁]]。由内错角相等及 $|OA'| = |OA|$ 知 $\\triangle OA'P_1 \\cong \\triangle OAB$（ASA），从而 $|OP_1| = |OB|$，即 [[P₁]] 为 [[B]] 关于 [[O]] 的对称点，线段 $A'P_1$ 即为 [[seg(A, B)]] 关于 [[O]] 的中心对称线段。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "中心对称线段 A'B'"
        },
        "proof": {
          "steps": [
            "取 [[circle(O, A)]] 与 [[line(A, O)]] 异于 [[A]] 的交点 [[A']]，以及 [[circle(O, B)]] 与 [[line(B, O)]] 异于 [[B]] 的交点 [[B']]，则 [[O]] 同为 $AA'$ 与 $BB'$ 的中点。连 [[line(A', B')]] 即得中心对称线段 $A'B'$。"
          ]
        }
      }
    }
  },
  "Zeta/L2": {
    "title": "轴对称",
    "prompt": "作给定线段关于给定直线的轴对称线段。",
    "solutions": {
      "le-5L-5E": {
        "variantLabels": {
          "1": "轴对称线段 A'B'"
        },
        "proof": {
          "keyIdea": "以对称轴 [[l]] 上两点为圆心且过同一点的两圆，其第二交点即为该点关于 [[l]] 的轴对称点。",
          "steps": [
            "在 [[l]] 上任取相异两点 [[P₁]]、[[P₂]]。由于 [[circle(P₁, A)]] 与 [[circle(P₂, A)]] 的连心线即为 [[l]]，[[l]] 垂直平分公共弦 $AA'$，故第二交点 [[A']] 是 [[A]] 关于 [[l]] 的对称点。",
            "同理，[[circle(P₁, B)]] 与 [[circle(P₂, B)]] 的第二交点 [[B']] 是 [[B]] 关于 [[l]] 的对称点。连 [[line(A', B')]]，对 [[seg(A, B)]] 与 [[l]] 的任意相对位置均给出对称线段 $A'B'$。"
          ]
        }
      }
    }
  },
  "Zeta/L3": {
    "title": "复制线段",
    "prompt": "以给定点为端点，在给定线段所在直线上作一条与给定线段等长的线段。",
    "solutions": {
      "l-3L-5E": {
        "variantLabels": {
          "1": "等长线段 CD"
        },
        "proof": {
          "keyIdea": "沿公共直线 [[line(A, C)]] 关于 $BC$ 的中点 [[M]] 作中心对称，将 [[B]] 映为 [[C]]，从而把 [[seg(A, B)]] 等距移至 [[C]]。",
          "steps": [
            "过共线三点 [[A]]、[[B]]、[[C]] 作公共直线 [[line(A, C)]]，交 [[perpBisector(B, C)]] 于 $BC$ 的中点 [[M]]。",
            "取 [[circle(M, A)]] 与 [[line(A, C)]] 异于 [[A]] 的交点 [[D₁]]，即为 [[A]] 关于 [[M]] 的对称点。关于 [[M]] 的中心对称沿 [[line(A, C)]] 保距互换 $B \\leftrightarrow C$ 与 $A \\leftrightarrow D_1$，故 $|CD_1| = |BA| = |AB|$。"
          ]
        }
      },
      "e-4L-4E": {
        "variantLabels": {
          "1": "等长线段 CD"
        },
        "proof": {
          "keyIdea": "以 $BC$ 为底作正三角形顶点 [[E]]，其在底边直线上的射影恰为 $BC$ 的中点，故仅需以 [[E]] 为圆心作一圆即可将 [[A]] 关于该中点对称，省去作垂直平分线。",
          "steps": [
            "取 [[circle(B, C)]] 与 [[circle(C, B)]] 的交点 [[E]]，则 $\\triangle EBC$ 为正三角形，[[E]] 到 [[line(A, C)]] 的垂足恰为 $BC$ 的中点 $M$。",
            "以 [[E]] 为圆心的任一圆截 [[line(A, C)]] 所得弦均以 $M$ 为中点。特别地，[[circle(E, A)]] 交 [[line(A, C)]] 于异于 [[A]] 的 [[D₁]]，使 $M$ 同为 $BC$ 与 $AD_1$ 的中点，从而 $|CD_1| = |AB|$。"
          ]
        }
      },
      "v-4L-6E-2V": {
        "variantLabels": {
          "1": "等长线段 CD (₁)",
          "2": "等长线段 CD (₂)"
        },
        "proof": {
          "steps": [
            "同 3L 解法，[[line(A, C)]] 交 [[perpBisector(B, C)]] 得 $BC$ 的中点 [[M]]，[[circle(M, A)]] 交 [[line(A, C)]] 于异于 [[A]] 的 [[D₁]]，满足 $|CD_1| = |AB|$。",
            "再作 [[circle(C, D₁)]] 将 [[D₁]] 沿 [[line(A, C)]] 关于 [[C]] 对称至另一交点 [[D₂]]，得 $|CD_2| = |CD_1| = |AB|$，从而同时作出以 [[C]] 为端点的两条共线等长线段。"
          ],
          "variantNote": "[[D₁]] 与 [[D₂]] 从 [[C]] 出发沿 [[line(A, C)]] 向相反两侧延伸。"
        }
      }
    }
  },
  "Zeta/L4": {
    "title": "已知角平分线",
    "prompt": "分别过两个给定点作两条直线，使给定直线平分这两条直线所成的角。",
    "solutions": {
      "le-4L-4E": {
        "variantLabels": {
          "1": "过 A 与 B 的角两边"
        },
        "proof": {
          "keyIdea": "将 [[A]] 关于已知角平分线 [[l]] 对称至 [[A']]，则对称像 [[A']] 必落在过 [[B]] 的另一边直线上。",
          "steps": [
            "在 [[l]] 上取相异两点 [[P₁]]、[[P₂]]，以 [[l]] 为连心线的两圆 [[circle(P₁, A)]] 与 [[circle(P₂, A)]] 的第二交点 [[A']] 即为 [[A]] 关于 [[l]] 的轴对称点。",
            "被 [[l]] 平分且分别过 [[A]]、[[B]] 的两条直线关于 [[l]] 互为镜像，故过 [[B]] 的边必过 [[A']]。作 [[line(B, A')]] 交 [[l]] 得角的顶点 [[V]]，再连 [[line(V, A)]] 即构成关于 [[l]] 对称的两边。"
          ]
        }
      }
    }
  },
  "Zeta/L5": {
    "title": "不塌缩圆规",
    "prompt": "以给定点为圆心、给定线段长为半径作圆。",
    "solutions": {
      "l-4L-6E": {
        "variantLabels": {
          "1": "转移半径后的圆"
        },
        "proof": {
          "keyIdea": "关于 [[perpBisector(A, O)]] 的轴对称是把 [[A]] 映为 [[O]] 的保距变换，可将 [[seg(A, B)]] 直接对称成以 [[O]] 为一端的等长半径（对应《几何原本》命题 I.2 的对称化构造）。",
          "steps": [
            "在 [[perpBisector(A, O)]] 上任取相异两点 [[P₁]]、[[P₂]]，作 [[circle(P₁, B)]] 与 [[circle(P₂, B)]]，其异于 [[B]] 的交点 [[B']] 即为 [[B]] 关于 [[perpBisector(A, O)]] 的对称点。",
            "因关于 [[perpBisector(A, O)]] 的轴对称将 [[A]] 映为 [[O]]、将 [[B]] 映为 [[B']] 且保持距离不变，故 $|OB'| = |AB|$，[[circle(O, B')]] 即以 [[O]] 为圆心、$|AB|$ 为半径。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "转移半径后的圆"
        },
        "proof": {
          "keyIdea": "仅用五个圆转移半径 $|AB|$：先用两等圆在隐含的 $AO$ 垂直平分线上定出两个圆心，再将 [[B]] 对称至 [[B']]。",
          "steps": [
            "等圆 [[circle(A, O)]] 与 [[circle(O, A)]] 相交于相异两点 [[P₁]]、[[P₂]]，满足 $|P_1 A| = |P_1 O|$ 且 $|P_2 A| = |P_2 O|$，故无须连线，直线 $P_1 P_2$ 即为 $AO$ 的垂直平分线。",
            "再作 [[circle(P₁, B)]] 与 [[circle(P₂, B)]]，将 [[B]] 关于直线 $P_1 P_2$ 对称至第二交点 [[B']]。由该轴对称保距且把 [[A]] 映为 [[O]] 知 $|OB'| = |AB|$，故 [[circle(O, B')]] 即为所求之圆。"
          ]
        }
      }
    }
  },
  "Zeta/T1": {
    "title": "不塌缩圆规工具",
    "prompt": "你已解锁“不塌缩圆规”工具。依次点击两个点设定半径长度，再点击圆心即可作圆。",
    "solutions": {
      "le-1L-5E": {
        "variantLabels": {
          "1": "转移半径后的圆"
        },
        "proof": {
          "steps": [
            "对 [[seg(A, B)]] 的端点 [[A]]、[[B]] 与圆心 [[O]] 直接使用不塌缩圆规工具，即得圆心为 [[O]]、半径为 $|AB|$ 的 [[compass(A, B; O)]]。"
          ]
        }
      }
    }
  },
  "Zeta/L6": {
    "title": "平移线段",
    "prompt": "以给定点为端点，作一条与给定线段平行且等长的线段。",
    "solutions": {
      "lv-2L-9E-2V": {
        "variantLabels": {
          "1": "平移线段 CD (₁)",
          "2": "平移线段 CD (₂)"
        },
        "proof": {
          "steps": [
            "过 [[C]] 作平行于 [[seg(A, B)]] 的直线 [[parallel(seg(A, B), C)]]，并以 [[C]] 为圆心、$|AB|$ 为半径作圆 [[compass(A, B; C)]]。",
            "[[parallel(seg(A, B), C)]] 与 [[compass(A, B; C)]] 相交于距 [[C]] 为 $|AB|$ 的一对反向端点 [[D₁]] 与 [[D₂]]，同时给出两条平移线段 $CD_1$ 与 $CD_2$。"
          ],
          "variantNote": "[[D₁]] 与 [[D₂]] 沿 [[parallel(seg(A, B), C)]] 分别对应相反方向的平移 $\\overrightarrow{CD} = \\pm\\overrightarrow{AB}$。"
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "平移线段 CD"
        },
        "proof": {
          "keyIdea": "复合关于两条垂直于 $AB$ 的平行直线——$AB$ 的垂直平分线与过 [[B]] 的垂线——的轴对称，即可将 [[C]] 精确平移向量 $\\overrightarrow{AB}$。",
          "steps": [
            "[[circle(A, B)]] 与 [[circle(B, A)]] 相交于 [[P₁]]、[[P₂]]，确定隐含的 [[seg(A, B)]] 垂直平分线 $m$；作 [[circle(P₁, C)]] 与 [[circle(P₂, C)]] 将 [[C]] 关于 $m$ 对称至第二交点 [[C']]。",
            "由 $CC' \\perp m$ 及 $AB \\perp m$ 知 [[line(C, C')]] $\\parallel$ [[seg(A, B)]]。再作 [[circle(B, C')]] 交 [[line(C, C')]] 于异于 [[C']] 的 [[D₁]]，即将 [[C']] 关于过 [[B]] 且垂直于 [[line(C, C')]] 的直线 $\\ell_B$ 作轴对称。",
            "因平行直线 $m$ 与 $\\ell_B$ 均垂直于 $AB$ 且有向间距为 $\\frac{1}{2}\\overrightarrow{AB}$，将 [[C]] 依次关于 $m$、$\\ell_B$ 对称至 [[C']]、[[D₁]] 即实现平移 $2 \\cdot \\frac{1}{2}\\overrightarrow{AB} = \\overrightarrow{AB}$，故 $CD_1 \\parallel AB$ 且 $|CD_1| = |AB|$。"
          ]
        }
      }
    }
  },
  "Zeta/L7": {
    "title": "已知三边作三角形",
    "prompt": "以 AB 为一边，作其余两边分别等于两条给定线段的三角形。",
    "solutions": {
      "le-4L-12E": {
        "variantLabels": {
          "1": "三角形 ABP"
        },
        "proof": {
          "steps": [
            "分别以 [[A]]、[[B]] 为圆心，$|CD|$、$|EF|$ 为半径作 [[compass(C, D; A)]] 与 [[compass(E, F; B)]]。由 $|AB|$、$|CD|$、$|EF|$ 满足严格三角不等式，两圆在直线 $AB$ 外相交于 [[P]]；连 [[line(A, P)]] 与 [[line(B, P)]] 即在底边 [[seg(A, B)]] 上作出满足 $|AP| = |CD|$、$|BP| = |EF|$ 的 $\\triangle ABP$。"
          ]
        }
      },
      "v-12L-28E-4V": {
        "variantLabels": {
          "1": "三角形 ABP (₁)",
          "2": "三角形 ABP (₂)",
          "3": "三角形 ABP (₃)",
          "4": "三角形 ABP (₄)"
        },
        "proof": {
          "steps": [
            "[[compass(C, D; A)]] 与 [[compass(E, F; B)]] 相交得关于 [[seg(A, B)]] 对称的两个顶点 [[P₁]]、[[P₂]]，满足 $|AP_i| = |CD|$、$|BP_i| = |EF|$。",
            "互换两圆半径作 [[compass(E, F; A)]] 与 [[compass(C, D; B)]]，又得对称顶点 [[P₃]]、[[P₄]]（$|AP_i| = |EF|$、$|BP_i| = |CD|$）。依次连结 [[line(A, P₁)]]、[[line(B, P₁)]]、[[line(A, P₂)]]、[[line(B, P₂)]]、[[line(A, P₃)]]、[[line(B, P₃)]]、[[line(A, P₄)]] 与 [[line(B, P₄)]]，即在 [[seg(A, B)]] 上作出全部四个全等三角形。"
          ],
          "variantNote": "两种边长分配 $(|CD|, |EF|)$、$(|EF|, |CD|)$ 与关于 [[seg(A, B)]] 的上下对称组合，共产生 $2 \\times 2 = 4$ 个不同三角形。"
        }
      }
    }
  },
  "Zeta/L8": {
    "title": "平行四边形",
    "prompt": "作以给定线段为一边、给定点为对边中点的平行四边形。",
    "solutions": {
      "l-5L-11E": {
        "variantLabels": {
          "1": "平行四边形 ABCD"
        },
        "proof": {
          "keyIdea": "将顶点 [[A]] 关于对边中点 [[M]] 对称至 [[A']]，则 [[A']] 必落在过 [[B]] 与 [[C]] 的旁侧边所在直线上。",
          "steps": [
            "取 [[circle(M, A)]] 与 [[line(A, M)]] 异于 [[A]] 的交点 [[A']]，使 [[M]] 为 $AA'$ 的中点。",
            "作 [[line(B, A')]]、[[parallel(seg(A, B), M)]] 与 [[parallel(line(B, A'), A)]]，记 [[C]] $=$ [[parallel(seg(A, B), M)]] $\\cap$ [[line(B, A')]]，[[P₁]] $=$ [[parallel(seg(A, B), M)]] $\\cap$ [[parallel(line(B, A'), A)]]。",
            "四边形 $ABCP_1$ 两组对边分别平行，故为平行四边形；又由 $|MA| = |MA'|$、对顶角相等及内错角 $\\angle MAP_1 = \\angle MA'C$ 知 $\\triangle AMP_1 \\cong \\triangle A'MC$（ASA），得 $|MP_1| = |MC|$，故 [[M]] 恰为对边 $CP_1$ 的中点。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "平行四边形 ABCD"
        },
        "proof": {
          "keyIdea": "复用截线 [[line(A, M)]]，一方面利用直径圆与公共弦在四步内过 [[M]] 作平行线，另一方面结合中心对称与三角形中位线，仅用八次基本作图定出全部边线。",
          "steps": [
            "[[line(A, M)]] 交 [[circle(A, M)]] 于异于 [[M]] 的 [[M']]，使 $MM'$ 为直径。作 [[circle(B, M')]] 交 [[circle(A, M)]] 于异于 [[M']] 的 [[N]]；由直径 $MM'$ 上的泰勒斯定理得 $MN \\perp M'N$，而连心线 $AB$ 亦垂直于公共弦 $M'N$，故 [[line(M, N)]] $\\parallel$ [[seg(A, B)]]。",
            "复用 [[line(A, M)]]，以 [[circle(M, A)]] 定出 [[A]] 关于 [[M]] 的对称点 [[P₀']]。在 $\\triangle AP_0'B$ 中，过 $AP_0'$ 中点 [[M]] 且平行于 $AB$ 的 [[line(M, N)]] 为中位线，平分 [[line(B, P₀')]] 于 [[V₁]] 且 $\\overrightarrow{MV_1} = \\frac{1}{2}\\overrightarrow{AB}$。",
            "用 [[circle(M, V₁)]] 将 [[V₁]] 沿 [[line(M, N)]] 关于 [[M]] 对称至 [[V₂]]，则 [[M]] 为 $V_1 V_2$ 中点且 $\\overrightarrow{V_2 V_1} = 2\\overrightarrow{MV_1} = \\overrightarrow{AB}$，连 [[line(A, V₂)]] 即成平行四边形 $ABV_1 V_2$。"
          ]
        }
      }
    }
  },
  "Zeta/L9": {
    "title": "九点圆",
    "prompt": "作过给定锐角三角形三边中点的圆。",
    "solutions": {
      "l-5L-11E": {
        "variantLabels": {
          "1": "九点圆"
        },
        "proof": {
          "keyIdea": "由欧拉九点圆定理，过三边中点的圆亦过三条高的垂足；以 $AB$ 为直径的圆可一次性截出其中两个垂足。",
          "steps": [
            "[[perpBisector(A, B)]] 交 [[seg(A, B)]] 得 $AB$ 中点 [[M_AB]]，故 [[circle(M_AB, A)]] 以 $AB$ 为直径。",
            "因 $\\triangle ABC$ 为锐角三角形，过 [[A]]、[[B]] 的高分别交 [[seg(B, C)]]、[[seg(C, A)]] 内部。由泰勒斯定理，[[circle(M_AB, A)]] 交 [[seg(B, C)]] 于异于 [[B]] 的垂足 [[H_A]]（$\\angle AH_A B = 90^\\circ$），交 [[seg(C, A)]] 于异于 [[A]] 的垂足 [[H_B]]（$\\angle BH_B A = 90^\\circ$）。",
            "由九点圆定理，[[M_AB]]、[[H_A]]、[[H_B]] 与其余两边中点共圆，故 [[perpBisector(M_AB, H_A)]] 与 [[perpBisector(M_AB, H_B)]] 的交点 [[N]] 即为九点圆圆心，[[circle(N, M_AB)]] 必过三边中点。"
          ]
        }
      },
      "e-9L-9E": {
        "variantLabels": {
          "1": "九点圆"
        },
        "proof": {
          "keyIdea": "两个垂足 [[H_A]]、[[H_B]] 均落在泰勒斯圆 [[circle(M_AB, A)]] 上，故可将该圆同时复用为求九点圆圆心 [[N]] 所需的两条垂直平分线中以 [[M_AB]] 为圆心的等圆弧。",
          "steps": [
            "由 [[circle(A, B)]] 与 [[circle(B, A)]] 的交点 [[P₁]]、[[P₂]] 作出垂直平分线 [[line(P₁, P₂)]]，交 [[seg(A, B)]] 于中点 [[M_AB]]。",
            "在锐角 $\\triangle ABC$ 中，由泰勒斯定理知以 $AB$ 为直径的 [[circle(M_AB, A)]] 分别交 [[seg(B, C)]]、[[seg(C, A)]] 于垂足 [[H_A]]（异于 [[B]]）与 [[H_B]]（异于 [[A]]）。",
            "因 [[H_A]]、[[H_B]] 均在 [[circle(M_AB, A)]] 上，有 $|M_{AB}H_A| = |M_{AB}A| = |M_{AB}H_B|$。故 [[circle(H_A, M_AB)]] 交 [[circle(M_AB, A)]] 于 [[E₁]]、[[E₂]] 即得 $M_{AB}H_A$ 的垂直平分线 [[line(E₁, E₂)]]，[[circle(H_B, M_AB)]] 交 [[circle(M_AB, A)]] 于 [[F₁]]、[[F₂]] 即得 $M_{AB}H_B$ 的垂直平分线 [[line(F₁, F₂)]]，省去两圆。",
            "[[line(E₁, E₂)]] 与 [[line(F₁, F₂)]] 相交于九点圆圆心 [[N]]，所作 [[circle(N, M_AB)]] 即过三边中点的欧拉九点圆。"
          ]
        }
      }
    }
  },
  "Zeta/L10": {
    "title": "四直线的对称性",
    "prompt": "三条直线共点。作第四条直线，使这四条直线组成的集合具有轴对称性。",
    "solutions": {
      "l-3L-5E": {
        "variantLabels": {
          "1": "第 4 条对称直线"
        },
        "proof": {
          "keyIdea": "以 [[l₃]] 上一点为圆心过 [[O]] 作圆，截 [[l₁]]、[[l₂]] 得弦，过 [[O]] 作该弦的垂线即可补全轴对称的四线束。",
          "steps": [
            "在 [[l₃]] 上任取异于 [[O]] 的点 [[Q]]，作 [[circle(Q, O)]] 分别交 [[l₁]]、[[l₂]] 于异于 [[O]] 的 [[A₁]]、[[A₂]]，记 [[circle(Q, O)]] 在 [[l₃]] 上与 [[O]] 相对的直径端点为 $D$。",
            "由直径 $OD$ 得 $A_1 D \\perp l_1$，且 $l_4 =$ [[perp(line(A₁, A₂), O)]] 垂直于 [[line(A₁, A₂)]]。结合 $90^\\circ$ 旋转与 [[circle(Q, O)]] 上的圆周角定理，有向角满足 $\\measuredangle(l_1, l_4) = \\measuredangle(A_1 D, A_1 A_2) = \\measuredangle(OD, OA_2) = \\measuredangle(l_3, l_2)$（模 $180^\\circ$）。",
            "移项得 $\\measuredangle(l_1, l_3) = \\measuredangle(l_4, l_2)$，即关于 [[l₁]]、[[l₂]] 的角平分线作反射时 $l_1 \\leftrightarrow l_2$ 且 $l_3 \\leftrightarrow l_4$，四线集 $\\{l_1, l_2, l_3, l_4\\}$ 呈轴对称。"
          ]
        }
      },
      "e-4L-4E": {
        "variantLabels": {
          "1": "第 4 条对称直线"
        },
        "proof": {
          "keyIdea": "无需连结弦 $A_1 A_2$，直接用两圆将 [[O]] 关于 $A_1 A_2$ 对称，即可在四步基本操作内作出过 [[O]] 的垂线。",
          "steps": [
            "在 [[l₃]] 上取点 [[Q]]，作 [[circle(Q, O)]] 分别交 [[l₁]]、[[l₂]] 于异于 [[O]] 的 [[A₁]]、[[A₂]]。",
            "不连弦 $A_1 A_2$，改作 [[circle(A₁, O)]] 与 [[circle(A₂, O)]]，其第二交点 [[O']] 即为 [[O]] 关于直线 $A_1 A_2$ 的对称点，故 [[line(O, O')]] 过 [[O]] 且垂直于 $A_1 A_2$。",
            "由 [[circle(Q, O)]] 上的同一有向圆周角恒等式知 $\\measuredangle(l_1, OO') = \\measuredangle(l_3, l_2)$（模 $180^\\circ$），故 [[line(O, O')]] 与 [[l₃]] 关于 [[l₁]]、[[l₂]] 的角平分线对称。"
          ]
        }
      },
      "v-9L-15E-3V": {
        "variantLabels": {
          "1": "第 4 条对称直线 (₁)",
          "2": "第 4 条对称直线 (₂)",
          "3": "第 4 条对称直线 (₃)"
        },
        "proof": {
          "steps": [
            "在一般位置的三线束 $\\{l_1, l_2, l_3\\}$ 中，任取其中一条与新直线配成对称偶、其余两条关于角平分线互换，均可构成轴对称四线集。",
            "分别在 [[l₁]]、[[l₂]]、[[l₃]] 上取点 [[Q₁]]、[[Q₂]]、[[Q₃]]，作 [[circle(Q₁, O)]]、[[circle(Q₂, O)]]、[[circle(Q₃, O)]] 截其余各对直线得弦 [[line(P₁₂, P₁₃)]]、[[line(P₂₃, P₂₁)]] 与 [[line(P₃₁, P₃₂)]]。",
            "过 [[O]] 分别作垂线 [[perp(line(P₁₂, P₁₃), O)]]、[[perp(line(P₂₃, P₂₁), O)]] 与 [[perp(line(P₃₁, P₃₂), O)]]，即得补全轴对称四线集的全部三条解直线。"
          ],
          "variantNote": "三个变体分别将 [[l₁]]、[[l₂]]、[[l₃]] 与所作第四条直线配成轴对称偶。"
        }
      }
    }
  },
  "Zeta/L11": {
    "title": "已知三边中点作平行四边形",
    "prompt": "已知平行四边形三边的中点，作该平行四边形。",
    "solutions": {
      "l-7L-22E": {
        "variantLabels": {
          "1": "平行四边形"
        },
        "proof": {
          "keyIdea": "当 [[B]]、[[C]] 为一组对边中点、[[A]] 为邻边 $Q_2 Q_3$ 中点时，平行四边形中心恰为 $BC$ 的中点 [[O]]，且 $\\overrightarrow{BQ_2} = \\overrightarrow{OA}$。",
          "steps": [
            "作 [[line(B, C)]] 交 [[perpBisector(B, C)]] 得 $BC$ 的中点 [[O]]，此即目标平行四边形 $Q_1 Q_2 Q_3 Q_4$ 的中心。",
            "因 $BC$ 连结对边 $Q_1 Q_2$ 与 $Q_3 Q_4$ 的中点，边 $Q_2 Q_3$ 落在 [[parallel(line(B, C), A)]] 上，且 $OBQ_2 A$ 为平行四边形（$\\overrightarrow{BQ_2} = \\overrightarrow{OA}$，$\\overrightarrow{Q_2 A} = \\overrightarrow{BO} = \\frac{1}{2}\\overrightarrow{BC}$）。故 [[compass(A, O; B)]] 交 [[parallel(line(B, C), A)]] 得顶点 [[Q₂]]，再作 [[line(B, Q₂)]] 交 [[compass(A, O; B)]] 于相对点 [[Q₁]]，使 [[B]] 为 $Q_1 Q_2$ 的中点。",
            "过 [[C]] 作 [[parallel(line(B, Q₂), C)]]（边 $Q_3 Q_4$），过 [[Q₁]] 作 [[parallel(line(B, C), Q₁)]]（边 $Q_4 Q_1$），交出 [[Q₃]] 与 [[Q₄]]：在平行四边形 $Q_1 Q_2 Q_3 Q_4$ 中，$|Q_2 Q_3| = |BC| = 2|Q_2 A|$ 且 $|Q_3 C| = |Q_2 B| = \\frac{1}{2}|Q_1 Q_2|$，故 [[A]]、[[B]]、[[C]] 确为三边中点。"
          ]
        }
      },
      "e-10L-10E": {
        "variantLabels": {
          "1": "平行四边形"
        },
        "proof": {
          "keyIdea": "过 [[A]] 作四步平行线并复用截线 [[line(B, A)]] 进行关于 [[A]]、[[B]]、[[C]] 的中心对称——其中对称点 [[A']] 已天然落在第四条边线上！",
          "steps": [
            "[[line(B, A)]] 交 [[circle(B, A)]] 于与 [[A]] 相对的 [[A']]（[[B]] 为 $AA'$ 中点），再作 [[circle(C, A')]] 交 [[circle(B, A)]] 于异于 [[A']] 的 [[N]]。由直径 $AA'$ 得 $AN \\perp A'N$，又连心线 $BC \\perp A'N$，故 [[line(A, N)]] $\\parallel BC$。",
            "复用 [[line(B, A)]]，以 [[circle(A, B)]] 定出 [[B]] 关于 [[A]] 的对称点 [[P₀']]。在 $\\triangle BP_0'C$ 中，中位线 [[line(A, N)]] 平分 [[line(C, P₀')]] 于 [[V₂]]；由 [[circle(C, V₂)]] 将 [[V₂]] 关于 [[C]] 对称得 [[V₁]]（[[C]] 平分 $V_1 V_2$），由 [[circle(A, V₂)]] 将 [[V₂]] 关于 [[A]] 对称得 [[V₃]]（[[A]] 平分 $V_2 V_3$）。",
            "因 [[A]] 同时平分 $BP_0'$ 与 $V_2 V_3$，$BV_2 P_0' V_3$ 为平行四边形，故 [[line(B, V₃)]] $\\parallel$ [[line(C, P₀')]] 且 $\\overrightarrow{V_3 B} = \\overrightarrow{P_0' V_2} = \\overrightarrow{V_2 C} = \\frac{1}{2}\\overrightarrow{V_2 V_1}$。又关于 [[B]] 的中心对称把 $V_3$ 映为 $V_4$，并把直线 $V_2 V_3$ 映为过 [[V₁]] 的对边直线；因 [[A]] 在 $V_2 V_3$ 上，其关于 [[B]] 的对称点 [[A']] 已在该对边直线上，故连 [[line(V₁, A')]] 交 [[line(B, V₃)]] 于 [[V₄]] 即成平行四边形 $V_1 V_2 V_3 V_4$。"
          ]
        }
      },
      "v-30L-30E-3V": {
        "variantLabels": {
          "1": "平行四边形 (₁)",
          "2": "平行四边形 (₂)",
          "3": "平行四边形 (₃)"
        },
        "proof": {
          "steps": [
            "平行四边形任意三边中点中，必有两点位于对边、第三点位于连结它们的邻边上；视 [[A]]、[[B]]、[[C]] 中哪一点作为中间的邻边中点，共有三个不同的平行四边形。",
            "取 [[A]] 介于对边中点 [[B]]、[[C]] 之间，施行上述 10 步纯基本作图，即得由 [[line(B, P₀')]]、[[line(A, N)]]、[[line(C, V₃)]] 与 [[line(V₁, A')]] 围成的平行四边形 $V_1 V_2 V_3 V_4$。",
            "轮换取 [[B]] 介于 [[C]]、[[A]] 之间（由 [[line(C, P₀'₁)]]、[[line(B, N₁)]]、[[line(A, V₇)]]、[[line(V₆, A'₁)]] 围成）以及 [[C]] 介于 [[A]]、[[B]] 之间（由 [[line(A, P₀'₂)]]、[[line(C, N₂)]]、[[line(B, V₁₁)]]、[[line(V₁₀, A'₂)]] 围成），即可同时作出全部三个平行四边形。"
          ],
          "variantNote": "三个变体分别对应选取 [[C]]、[[A]] 或 [[B]] 作为其余两个对边中点之间的邻边中点。"
        }
      }
    }
  }
};
