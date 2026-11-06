import type { LevelLocaleEntry } from '../../../types';

export const LAMBDA_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Lambda/L1": {
    "title": "第四比例项",
    "prompt": "在射线 OC 上作一点 D，使线段 OD 为给定三条线段的第四比例项。",
    "solutions": {
      "l-2L-5E": {
        "variantLabels": {
          "1": "第四比例项点 D"
        },
        "proof": {
          "steps": [
            "连接 [[line(A, C)]] 并过 [[B]] 作平行线 [[parallel(line(A, C), B)]] 交 [[ray(O, C)]] 于 [[D₀]]；因 [[B]] 在射线 $\\overrightarrow{OA}$ 上且 [[C]] 不在 [[line(O, A)]] 上，由平行线截比例线段定理（$\\triangle OAC \\sim \\triangle OBD_0$）即得 $|OA| / |OB| = |OC| / |OD_0|$。"
          ]
        }
      },
      "e-3L-3E": {
        "variantLabels": {
          "1": "第四比例项点 D"
        },
        "proof": {
          "keyIdea": "令直线 $BN$ 与连心线 $AC$ 同时垂直于两圆的公共弦，仅用三步基本尺规操作即可过 $B$ 作出 $AC$ 的平行线。",
          "steps": [
            "圆 [[circle(A, B)]] 与 [[line(O, A)]] 交于另一点 [[M']]，故 $M'B$ 为 [[circle(A, B)]] 的直径。",
            "圆 [[circle(C, M')]] 与 [[circle(A, B)]] 再交于 [[N]]：连心线 $AC$ 垂直于公共弦 $M'N$，同时直径 $M'B$ 所对圆周角 $\\angle M'NB = 90^\\circ$，即 [[line(B, N)]] $\\perp M'N$。",
            "因此 [[line(B, N)]] $\\parallel AC$，其与 [[ray(O, C)]] 的交点 [[D₀]] 满足 $\\triangle OAC \\sim \\triangle OBD_0$，即 $|OA| / |OB| = |OC| / |OD_0|$。"
          ]
        }
      }
    }
  },
  "Lambda/L2": {
    "title": "线段的几何平均",
    "prompt": "在给定射线上作一点，所得线段的长度等于相邻两条给定线段的几何平均数。",
    "solutions": {
      "l-3L-7E": {
        "variantLabels": {
          "1": "几何平均点 P"
        },
        "proof": {
          "keyIdea": "过 $A, B$ 作一圆使其在直线 $OU$ 上截得的弦以 $O$ 为中点，再由相交弦定理即得几何平均数。",
          "steps": [
            "圆心 [[K]] $\\in$ [[perp(ray(O, U), O)]] $\\cap$ [[perpBisector(A, B)]] 满足 $|KA| = |KB|$，故 [[circle(K, A)]] 同时经过 [[A]] 与 [[B]]。",
            "因 $KO \\perp$ [[ray(O, U)]]，由垂径定理知 [[O]] 为 [[circle(K, A)]] 在直线 $OU$ 上所截弦的中点（两端点为 [[P₀]] 与 $P_0'$，满足 $|OP_0'| = |OP_0|$）；对共线弦 [[seg(A, O)]]、[[seg(O, B)]] 应用相交弦定理，即得 $|OP_0|^2 = |AO| \\cdot |OB|$。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "几何平均点 P"
        },
        "proof": {
          "keyIdea": "将较短线段 $a = |AO|$ 翻折至 $OB$ 上并在距 $O$ 为 $a/2$ 处作垂线，截直径为 $2b$ 的圆得弦长 $\\sqrt{ab}$。",
          "steps": [
            "圆 [[circle(O, A)]] 将 $a = |AO|$ 翻折至 [[seg(O, B)]] 上的 [[A']]，由 [[circle(O, A)]] $\\cap$ [[circle(A', O)]] 得 [[V₁]]、[[V₂]]，使公共弦 [[line(V₁, V₂)]] 垂直平分 $OA'$ 于中点 $M$（$|OM| = a/2$）。",
            "以 [[B]]（$|OB| = b$）为圆心的 [[circle(B, O)]] 过 [[O]] 且沿直线 $OB$ 的直径长为 $2b$。对交点 [[E]] $\\in$ [[line(V₁, V₂)]] $\\cap$ [[circle(B, O)]]，由直角三角形射影定理得 $|OE|^2 = |OM| \\cdot 2b = (a/2)(2b) = ab$。",
            "作 [[circle(O, E)]] 将半径 $|OE| = \\sqrt{ab}$ 移至射线 [[ray(O, U)]] 上的 [[P₀]] 即得所求。"
          ]
        }
      }
    }
  },
  "Lambda/L3": {
    "title": "黄金分割",
    "prompt": "在线段上作一点，将该线段按黄金分割比分割。",
    "solutions": {
      "l-4L-6E": {
        "variantLabels": {
          "1": "黄金分割点"
        },
        "proof": {
          "keyIdea": "将 $AB$ 上方的正三角形顶点 $C$ 水平平移至 $E$，并在 $C$ 处垂直立起等长线段 $CK$，从而在距 $AB$ 高为 $\\frac{\\sqrt{3}}{2}|AB|$ 的 $E$ 处作出半径为 $\\sqrt{2}|AB|$ 的圆截出黄金分割点。",
          "steps": [
            "记 $s = |AB|$。[[circle(A, B)]] 与中垂线 [[perpBisector(A, B)]] 交于 [[seg(A, B)]] 上方的正三角形顶点 [[C]]。",
            "半径为 $s$ 的 [[circle(C, A)]] 交 [[circle(A, B)]] 于 [[E]]（$\\neq B$，构成正 $\\triangle ACE$，满足 $CE \\parallel BA$ 且 $|CE| = s$），并交 [[perpBisector(A, B)]] 于 [[K]]（$|CK| = s$ 且 $CK \\perp AB \\parallel CE$）。故 $\\triangle KCE$ 为等腰直角三角形，$|EK|^2 = 2s^2$。",
            "自 [[E]] 作高 $EH \\perp AB$，垂足 $H$ 位于 $BA$ 延长线上且 $|HA| = \\tfrac{1}{2}s$、$|EH| = \\tfrac{\\sqrt{3}}{2}s$。对 [[G₁]] $\\in$ [[seg(A, B)]] $\\cap$ [[circle(E, K)]]，由勾股定理得 $|HG_1| = \\sqrt{|EG_1|^2 - |EH|^2} = \\sqrt{2s^2 - \\tfrac{3}{4}s^2} = \\tfrac{\\sqrt{5}}{2}s$，故 $|AG_1| = |HG_1| - |HA| = \\tfrac{\\sqrt{5} - 1}{2}s = \\varphi^{-1}|AB|$。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "黄金分割点"
        },
        "proof": {
          "keyIdea": "用关于 $AB$ 的两个等边圆替代中垂线宏工具，保持半径为 $\\sqrt{2}|AB|$ 的黄金分割圆作法不变。",
          "steps": [
            "记 $s = |AB|$。两等圆 [[circle(A, B)]] 与 [[circle(B, A)]] 交于 [[C]]、[[D]]，故公共弦 [[line(D, C)]] 即为过正三角形顶点 [[C]] 的 [[seg(A, B)]] 的中垂线。",
            "圆 [[circle(C, A)]] 交 [[circle(A, B)]] 于 [[E]]（$CE \\parallel BA$，$|CE| = s$），交 [[line(D, C)]] 于 [[K]]（$CK \\perp CE$，$|CK| = s$），得 $|EK|^2 = 2s^2$。",
            "因 [[E]] 到直线 $AB$ 的距离为 $\\tfrac{\\sqrt{3}}{2}s$ 且在 $AB$ 上的投影越过 [[A]] 恰为 $\\tfrac{1}{2}s$，[[circle(E, K)]] 截 [[seg(A, B)]] 所得交点 [[G₁]] 满足 $|AG_1| = \\left(\\sqrt{2 - \\tfrac{3}{4}} - \\tfrac{1}{2}\\right)s = \\tfrac{\\sqrt{5} - 1}{2}|AB|$。"
          ]
        }
      },
      "v-6L-6E-2V": {
        "variantLabels": {
          "1": "黄金分割点 (₁)",
          "2": "黄金分割点 (₂)"
        },
        "proof": {
          "keyIdea": "利用 $AB$ 上方正三角形网格的左右对称性，仅添一圆即可同时截得第二个黄金分割点。",
          "steps": [
            "同 $5\\text{E}$ 作法，由 [[circle(A, B)]]、[[circle(B, A)]]、[[line(D, C)]] 与 [[circle(C, A)]] 定出 [[E]]、[[K]]（$|EK|^2 = 2|AB|^2$），使 [[circle(E, K)]] 截 [[seg(A, B)]] 得 [[G₁]]（$|AG_1| = \\varphi^{-1}|AB|$）。",
            "交点 [[F]] $\\in$ [[circle(B, A)]] $\\cap$ [[circle(C, A)]]（$\\neq A$）为 [[E]] 关于中垂线 [[line(D, C)]] 的对称点，满足 $CF \\parallel AB$、$|CF| = |CK| = |AB|$ 及 $|FK|^2 = 2|AB|^2$。",
            "由关于 [[line(D, C)]] 的轴对称性，[[circle(F, K)]] 截 [[seg(A, B)]] 于 [[G₂]]，满足 $|BG_2| = |AG_1| = \\varphi^{-1}|AB|$。"
          ],
          "variantNote": "分别以顶部两个对称正三角形顶点为圆心作圆，即可在线段上截得全部两个黄金分割点。"
        }
      }
    }
  },
  "Lambda/L4": {
    "title": "54° 角",
    "prompt": "以给定射线为一边作一个 54° 的角。",
    "solutions": {
      "l-5L-22E": {
        "variantLabels": {
          "1": "54° 角的一边"
        },
        "proof": {
          "keyIdea": "构造长为 $\\varphi|AP|$ 的黄金线段以定出 $-72^\\circ$ 方向的黄金等腰三角形顶点 $W$ 及 $-180^\\circ$ 射线上的点 $N$，再平分 $\\angle WAN = 108^\\circ$ 即得 $54^\\circ$ 直线。",
          "steps": [
            "在 [[ray(A, B)]] 上任取 [[P]] 并设 $|AP| = 1$。中垂线 [[perpBisector(A, P)]] 定出中点 [[M]]（$|AM| = \\tfrac{1}{2}$），半径为 $1$ 的 [[compass(A, P; M)]] 在 [[ray(A, B)]] 上截得 [[R]]（$|AR| = \\tfrac{3}{2}$），并在 [[perpBisector(A, P)]] 上截得 [[K]]（$|MK| = 1$）。",
            "半径为 $\\tfrac{3}{2}$ 的 [[compass(A, R; K)]] 交 [[ray(A, B)]] 于 [[G₅]]：在直角 $\\triangle KMG_5$ 中，$|MG_5| = \\sqrt{\\tfrac{9}{4} - 1} = \\tfrac{\\sqrt{5}}{2}$，故 $|AG_5| = \\tfrac{1 + \\sqrt{5}}{2} = \\varphi$。",
            "以 [[P]] 为圆心、$\\varphi$ 为半径的 [[compass(A, G₅; P)]] 交 [[perpBisector(A, P)]] 于 [[W]]：在黄金等腰 $\\triangle WAP$（$|WA| = |WP| = \\varphi$，$|AP| = 1$）中，$\\cos\\angle PAW = \\tfrac{1}{2\\varphi} = \\tfrac{\\sqrt{5}-1}{4} = \\cos 72^\\circ$，故 [[W]] 位于 $-72^\\circ$ 射线上。",
            "同时 [[compass(A, R; K)]] 与 [[compass(A, G₅; P)]] 在直线 $AB$ 上相切于有向坐标为 $1 - \\varphi < 0$ 的点 [[N]]（位于 $-180^\\circ$ 射线上）。因此 $\\angle WAN = 108^\\circ$，角平分线 [[angleBisector(W, A, N)]] 沿 $-126^\\circ$ 方向延伸，其反向射线与 [[ray(A, B)]] 恰成 $+54^\\circ$ 角。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "54° 角的一边"
        },
        "proof": {
          "keyIdea": "连接正三角形顶点 $C$（$y = \\frac{\\sqrt{3}}{2}$）与异侧圆交点 $E$（$y = -\\frac{\\sqrt{15}}{4}$）在 $AQ$ 上截得黄金长 $|QG| = \\varphi$，再置于直径为 $2$ 的圆中利用 $|QX_1| = \\varphi = 2\\sin 54^\\circ$ 作出 $54^\\circ$ 角。",
          "steps": [
            "在 [[ray(A, B)]] 上任取 [[P]] 并设 $|AP| = 1$。圆 [[circle(P, A)]] 在 [[ray(A, B)]] 上截出长为 $2$ 的直径 $AQ$（[[Q]] 在 $x = 2$），并与 [[circle(A, P)]] 交于正三角形顶点 [[C]]（$x_C = \\tfrac{1}{2},\\; y_C = \\tfrac{\\sqrt{3}}{2}$）。",
            "半径为 $2$ 的 [[circle(Q, A)]] 与半径为 $1$ 的 [[circle(A, P)]] 在 $AB$ 异侧交于 [[E]]：由等腰 $\\triangle QAE$（$|QA| = |QE| = 2$，$|AE| = 1$）算得 $x_E = \\tfrac{1}{4}$ 且 $y_E = -\\sqrt{1 - \\tfrac{1}{16}} = -\\tfrac{\\sqrt{15}}{4} = -\\tfrac{\\sqrt{5}}{2}y_C$。",
            "由相似直角三角形，[[line(C, E)]] 交 [[ray(A, B)]] 于按 $|y_E| : |y_C| = \\sqrt{5} : 2$ 内分 $[x_E, x_C] = [\\tfrac{1}{4}, \\tfrac{1}{2}]$ 的点 [[G]]，故 $|AG| = \\tfrac{3 - \\sqrt{5}}{2}$，从而 $|QG| = 2 - |AG| = \\varphi$。",
            "对交点 [[X₁]] $\\in$ [[circle(P, A)]] $\\cap$ [[circle(Q, G)]]，直径 $AQ$ 所对圆周角 $\\angle AX_1Q = 90^\\circ$，且 $\\sin\\angle X_1AQ = \\tfrac{|QX_1|}{|AQ|} = \\tfrac{\\varphi}{2} = \\sin 54^\\circ$，故 [[line(A, X₁)]] 与 [[ray(A, B)]] 成 $54^\\circ$ 角。"
          ]
        }
      },
      "v-7L-7E-2V": {
        "variantLabels": {
          "1": "54° 角的一边 (₁)",
          "2": "54° 角的一边 (₂)"
        },
        "proof": {
          "keyIdea": "以 $Q$ 为圆心、$\\varphi$ 为半径的圆与以 $AQ$ 为直径的圆的两个对称交点，在顶点 $A$ 处分别张成 $\\pm 54^\\circ$ 角。",
          "steps": [
            "同 $6\\text{E}$ 作法，由 [[circle(P, A)]]、[[circle(A, P)]]、[[circle(Q, A)]] 与 [[line(C, E)]] 定出 [[G]] $\\in$ [[ray(A, B)]] $\\cap$ [[line(C, E)]]，满足 $|QG| = \\varphi|AP|$ 且直径 $|AQ| = 2|AP|$。",
            "圆 [[circle(Q, G)]] 与以 $AQ$ 为直径的 [[circle(P, A)]] 交于关于 [[ray(A, B)]] 对称的两点 [[X₁]]、[[X₂]]。",
            "在直角三角形 $\\triangle AX_1Q$ 与 $\\triangle AX_2Q$ 中，$\\sin\\angle X_1AQ = \\sin\\angle X_2AQ = \\tfrac{\\varphi}{2} = \\sin 54^\\circ$，故 [[line(A, X₁)]] 与 [[line(A, X₂)]] 为过 [[A]] 与 [[ray(A, B)]] 成 $54^\\circ$ 角的全部两条直线。"
          ],
          "variantNote": "将顶点分别连接两圆的上下两个对称交点，即得与给定射线成 $54^\\circ$ 角的两条直线。"
        }
      }
    }
  },
  "Lambda/L5": {
    "title": "第三条平行线",
    "prompt": "仅用直尺过给定点作一条与两条给定平行线平行的直线。",
    "solutions": {
      "le-7L-7E": {
        "variantLabels": {
          "1": "过 P 的平行线"
        },
        "proof": {
          "keyIdea": "将点 $P$ 嵌入一个帕普斯（Pappus）六边形，使其两组共线顶点分居两条截线上且帕普斯轴恰为 $l_1$；因其中一对对边交于无穷远点（$l_2 \\parallel l_1$），第三对对边中的 $PP'$ 必同样平行于 $l_1$。",
          "steps": [
            "在 [[l₁]] 上取两点 [[A₁]]、[[B₁]]，在 [[l₂]] 上取一点 [[U₂]]。在第一条截线 [[line(P, A₁)]] 上，三点 [[P]]、[[A₂]]（$=$ [[line(P, A₁)]] $\\cap$ [[l₂]]）与 [[Q₂]]（$=$ [[line(P, A₁)]] $\\cap$ [[line(B₁, U₂)]]）共线。",
            "在第二条截线 [[line(A₁, U₂)]] 上，三点 [[Q₁]]（$=$ [[line(P, B₁)]] $\\cap$ [[line(A₁, U₂)]]）、[[U₂]] 与 [[P']]（$=$ [[line(A₁, U₂)]] $\\cap$ [[line(Q₂, R₁)]]，其中 [[R₁]] $=$ [[l₁]] $\\cap$ [[line(A₂, Q₁)]]）共线。",
            "对六边形 $P\\text{--}Q_1\\text{--}A_2\\text{--}U_2\\text{--}Q_2\\text{--}P'$ 应用帕普斯定理：对边 $PQ_1$（[[line(P, B₁)]]）与 $U_2Q_2$（[[line(B₁, U₂)]]）交于 [[B₁]] $\\in$ [[l₁]]，对边 $Q_1A_2$（[[line(A₂, Q₁)]]）与 $Q_2P'$（[[line(Q₂, R₁)]]）交于 [[R₁]] $\\in$ [[l₁]]。",
            "因此该六边形的帕普斯轴即为直线 $B_1R_1 =$ [[l₁]]。由于第三对对边由平行于 [[l₁]] 的 $A_2U_2 =$ [[l₂]] 与 [[line(P, P')]] 组成，其交点亦必为 [[l₁]] 上的无穷远点，故 [[line(P, P')]] $\\parallel$ [[l₁]] $\\parallel$ [[l₂]]。"
          ]
        }
      }
    }
  },
  "Lambda/L6": {
    "title": "角中的圆",
    "prompt": "作一个经过给定点且与给定角的两边均相切的圆。",
    "solutions": {
      "l-6L-21E": {
        "variantLabels": {
          "1": "过 P 的切圆"
        },
        "proof": {
          "keyIdea": "与角两边相切的圆关于角平分线 $b_1$ 对称，故必同时经过 $P$ 关于 $b_1$ 的对称点 $P'$；由直线 $PP'$ 与边 $OA$ 的交点 $S_A$ 应用切割线定理即可直接定出切点（阿波罗尼斯 PLL 问题）。",
          "steps": [
            "在两边取 [[A₀]]、[[B₀]] 作出角平分线 $b_1 =$ [[angleBisector(A₀, O, B₀)]]，过 [[P]] 作垂线 [[perp(b₁, P)]] 分别交 $b_1$ 于 [[M]]、交 [[ray(O, A)]] 于 [[S_A]]。由轴对称性，过 [[P]] 且与 [[ray(O, A)]]、[[ray(O, B)]] 相切的任一圆 $\\omega$ 必同时经过 [[P]] 关于 [[M]] 的对称点 $P'$（$|MP'| = |MP|$）。",
            "对点 [[S_A]] 与圆 $\\omega$ 应用切割线定理，边 [[ray(O, A)]] 上的切点 $F$ 满足 $|S_AF|^2 = |S_AP| \\cdot |S_AP'| = (|MS_A| - |MP|)(|MS_A| + |MP|) = |MS_A|^2 - |MP|^2$。",
            "取 [[P₁]] $\\in b_1 \\cap$ [[compass(M, S_A; P)]]，在直角 $\\triangle PMP_1$ 中斜边 $|PP_1| = |MS_A|$，故 $|MP_1|^2 = |MS_A|^2 - |MP|^2 = |S_AF|^2$。",
            "因此 [[compass(M, P₁; S_A)]] 在 [[ray(O, A)]] 上截得切点 [[F₁]]，过 [[F₁]] 的垂线 [[perp(ray(O, A), F₁)]] 交 $b_1$ 于圆心 [[C₁]]，所作 [[circle(C₁, P)]] 即过 [[P]] 且与角两边相切。"
          ]
        }
      },
      "e-11L-11E": {
        "variantLabels": {
          "1": "过 P 的切圆"
        },
        "proof": {
          "keyIdea": "先作切点距顶点 $|OF_0| = |OP|/2$ 的辅助内切圆 $\\omega_0$，利用以 $O$ 为中心的位似变换确定将 $\\omega_0$ 缩放至过 $P$ 的比例，再借等腰三角形底边高线与两圆根轴直接定出缩放后的切点垂线。",
          "steps": [
            "记 $R = |OP|$。圆 [[circle(O, P)]] 交 [[ray(O, A)]]、[[ray(O, B)]] 于 [[A₁]]、[[B₁]]；[[circle(A₁, O)]] 与 [[circle(B₁, O)]] 交于 [[D]] 给出角平分线 [[line(O, D)]]，同时 [[circle(O, P)]] $\\cap$ [[circle(A₁, O)]] 定出 [[E₁]]、[[E₂]]，使公共弦 [[line(E₁, E₂)]] 垂直平分 $OA_1$ 于 [[F₀]]（$|OF_0| = R/2$）并交 [[line(O, D)]] 于 [[C₀]]。",
            "于是辅助圆 [[circle(C₀, F₀)]] 与角两边相切。直线 [[line(O, P)]] 交 [[circle(C₀, F₀)]] 于 [[Q₂]]，故位似变换 $\\mathcal{H}(O, R / |OQ_2|)$ 将 [[Q₂]] $\\mapsto$ [[P]]，并将 [[circle(C₀, F₀)]] 映为所求切圆，其在 [[ray(O, A)]] 上的切点 $F_1$ 满足 $|OF_1| = \\tfrac{R}{|OQ_2|} \\cdot \\tfrac{R}{2} = \\tfrac{R^2}{2|OQ_2|}$。",
            "用 [[circle(O, Q₂)]] 将 $|OQ_2|$ 移至 [[ray(O, A)]] 上的 [[A_Q]]，令 [[circle(A_Q, O)]]（半径 $|OQ_2|$）交 [[circle(O, P)]]（半径 $R$）于 [[H₁]]、[[H₂]]。在等腰 $\\triangle OA_QH_1$（$|A_QO| = |A_QH_1| = |OQ_2|$，$|OH_1| = R$）中，自 [[H₁]] 向腰 $OA_Q$ 所作高线的垂足距 [[O]] 恰为 $\\tfrac{R^2}{2|OA_Q|} = |OF_1|$。",
            "故根轴 [[line(H₁, H₂)]] 垂直于 [[ray(O, A)]] 且垂足恰为 $F_1$；其与角平分线 [[line(O, D)]] 的交点 [[C₁]] 即为位似圆心，所作 [[circle(C₁, P)]] 过 [[P]] 且与角两边相切。"
          ]
        }
      },
      "v-8L-25E-2V": {
        "variantLabels": {
          "1": "过 P 的切圆 (₁)",
          "2": "过 P 的切圆 (₂)"
        },
        "proof": {
          "keyIdea": "自 $S_A$ 应用切割线定理在射线 $OA$ 上 $S_A$ 的两侧截得两个对称切点 $F_1, F_2$，从而给出阿波罗尼斯 PLL 问题的全部两解。",
          "steps": [
            "作出角平分线 $b_1 =$ [[angleBisector(A₀, O, B₀)]]、垂线 [[perp(b₁, P)]]、交点 [[M]] 与 [[S_A]]，以及 [[P₁]] $\\in b_1 \\cap$ [[compass(M, S_A; P)]]，得 $|MP_1|^2 = |MS_A|^2 - |MP|^2 = |S_AP| \\cdot |S_AP'|$（$P'$ 为 [[P]] 关于 $b_1$ 的对称点）。",
            "因 [[P]] 严格位于 $\\angle AOB$ 内部，[[P]] 与 $P'$ 均落在两角边所截 [[perp(b₁, P)]] 的内线段上，故 $0 < |MP_1| = \\sqrt{|S_AP| \\cdot |S_AP'|} < |OS_A|$，从而 [[compass(M, P₁; S_A)]] 在 [[S_A]] 两侧与射线 [[ray(O, A)]] 交于两个内点 [[F₁]]、[[F₂]]。",
            "分别作垂线 [[perp(ray(O, A), F₁)]] 与 [[perp(ray(O, A), F₂)]] 交 $b_1$ 于圆心 [[C₁]]、[[C₂]]，即得过 [[P]] 且与角两边相切的全部两个圆 [[circle(C₁, P)]] 与 [[circle(C₂, P)]]。"
          ],
          "variantNote": "利用圆幂圆与角的一边的两个交点，即可得到过点 $P$ 且与角两边相切的全部两个阿波罗尼斯切圆。"
        }
      }
    }
  },
  "Lambda/L7": {
    "title": "梯形两底的几何平均",
    "prompt": "连接梯形的两腰作一条平行于两底的线段，使其长度等于两底长度的几何平均数。",
    "solutions": {
      "l-6L-19E": {
        "variantLabels": {
          "1": "几何平均截面线段 EF"
        },
        "proof": {
          "keyIdea": "延长两腰交于顶点 $V$（$\\triangle VCD \\sim \\triangle VAB$，相似比 $k = |CD|/|AB|$），在腰 $DA$ 上截取 $|VE_0| = \\sqrt{|VA| \\cdot |VD|}$，则以 $V$ 为中心的位似变换将底边 $|AB|$ 按 $\\sqrt{k}$ 缩放。",
          "steps": [
            "延长两腰 [[line(D, A)]] 与 [[line(B, C)]] 交于 [[V]]，由 $CD \\parallel AB$ 得 $\\triangle VCD \\sim \\triangle VAB$，相似比 $k = |CD| / |AB| = |VD| / |VA|$。",
            "中垂线 [[perpBisector(D, A)]] 交 [[line(D, A)]] 于腰 $DA$ 的中点 [[M]]，满足 $|VM| = \\tfrac{|VA| + |VD|}{2}$ 且 $|MA| = \\tfrac{||VA| - |VD||}{2}$。对交点 [[Q]] $\\in$ [[compass(V, M; A)]] $\\cap$ [[perpBisector(D, A)]]，在直角 $\\triangle QMA$ 中有 $|MQ|^2 = |AQ|^2 - |MA|^2 = |VM|^2 - |MA|^2 = |VA| \\cdot |VD| = k|VA|^2$。",
            "用 [[compass(M, Q; V)]] 在腰 [[seg(D, A)]] 上截得 [[E₀]] 使 $|VE_0| = |MQ| = \\sqrt{k}\\,|VA|$，再过 [[E₀]] 作底边的平行线 [[parallel(seg(A, B), E₀)]] 交 [[seg(B, C)]] 于 [[F₀]]，即得 $|E_0F_0| = \\tfrac{|VE_0|}{|VA|}|AB| = \\sqrt{k}\\,|AB| = \\sqrt{|AB| \\cdot |CD|}$。"
          ]
        }
      },
      "e-9L-9E": {
        "variantLabels": {
          "1": "几何平均截面线段 EF"
        },
        "proof": {
          "keyIdea": "仅借助两个对称圆与一条割线的圆幂关系在腰 $BC$ 上提出长度 $\\sqrt{k}\\,|VB|$，再利用三角形中位线直接作出过分点 $F_0'$ 平行于底边的截面。",
          "steps": [
            "设两腰 [[line(D, A)]] 与 [[line(B, C)]] 交于 [[V]]，记 $s = |VB|$，则 $|VC| = ks$（$k = |CD| / |AB|$）。以 [[V]] 为原点沿 [[line(B, C)]] 度量，[[circle(B, V)]] 将 [[V]]（$0$）关于 [[B]]（$s$）对称至 [[B₂]]（$2s$），半径为 $(2 - k)s$ 的 [[circle(B₂, C)]] 再将 [[C]]（$ks$）关于 [[B₂]] 对称至 [[P₈]]（$(4 - k)s$）。",
            "对交点 [[P₁₀]] $\\in$ [[circle(B, V)]] $\\cap$ [[circle(B₂, C)]]，在等腰 $\\triangle BB_2P_{10}$（$|BB_2| = |BP_{10}| = s$，$|B_2P_{10}| = (2 - k)s$）中有 $\\cos\\angle BB_2P_{10} = \\tfrac{2 - k}{2}$，故在等腰 $\\triangle P_8B_2P_{10}$ 中算得 $|P_8P_{10}|^2 = 2(2 - k)^2s^2\\bigl(1 + \\tfrac{2 - k}{2}\\bigr) = (2 - k)^2(4 - k)s^2$。",
            "割线 [[line(P₈, P₁₀)]] 再交 [[circle(B, V)]] 于 [[P₁₂]]。因 [[circle(B, V)]] 截 [[line(B, C)]] 于 $0$ 与 $2s$，对 [[P₈]]（$(4 - k)s$）应用割线定理得 $|P_8P_{12}| \\cdot |P_8P_{10}| = (2 - k)(4 - k)s^2$，故 $|P_8P_{12}| = \\tfrac{1}{2 - k}|P_8P_{10}|$、$|P_{12}P_{10}| = \\tfrac{1 - k}{2 - k}|P_8P_{10}|$；再对 [[circle(B₂, C)]] 内点 [[P₁₂]] 应用相交弦圆幂公式得 $(2 - k)^2s^2 - |B_2P_{12}|^2 = |P_8P_{12}| \\cdot |P_{12}P_{10}| = (1 - k)(4 - k)s^2$，化简即得 $|B_2P_{12}| = \\sqrt{k}\\,s$。",
            "圆 [[circle(B₂, P₁₂)]] 在 [[line(B, C)]] 上截得坐标为 $(2 - \\sqrt{k})s$ 的 [[P₁₃]]，[[circle(B, P₁₃)]] 将 [[P₁₃]] 关于 [[B]] 对称至 [[seg(B, C)]] 上的 [[F₀']]（$|VF_0'| = \\sqrt{k}\\,s$）。最后由 [[circle(A, P₁₃)]] $\\cap$ [[circle(B, P₁₃)]] 将 [[P₁₃]] 关于直线 $AB$ 对称至 [[N]]：在 $\\triangle P_{13}F_0'N$ 中，直线 $AB$ 同时过 $P_{13}N$ 与 $P_{13}F_0'$ 的中点，故 [[line(F₀', N)]] $\\parallel AB$，交 [[seg(D, A)]] 于 [[E₀']] 且 $|E_0'F_0'| = \\sqrt{|AB| \\cdot |CD|}$。"
          ]
        }
      }
    }
  },
  "Lambda/L8": {
    "title": "正五边形",
    "prompt": "在给定圆内作内接正五边形，其中一个顶点已给出。",
    "solutions": {
      "l-9L-11E": {
        "variantLabels": {
          "1": "内接正五边形"
        },
        "proof": {
          "keyIdea": "在直径所在直线 $OA$ 上作出黄金比外分点 $P_1 = (-\\varphi^2, 0)$，则 $AP_1$ 的中垂线恰好承载位于 $x = -\\frac{\\varphi}{2} = \\cos 144^\\circ$ 的正五边形对边 $XY$，且 $P_1$ 正是两条不相邻边 $UX$ 与 $VY$ 的交点。",
          "steps": [
            "在单位圆 [[circle(O, A)]] 上取 $O = (0, 0)$、$A = (1, 0)$。沿 [[line(O, A)]] 得对径点 [[S]] $= (-1, 0)$，作 [[circle(S, O)]] 定出 [[T]] $= (-2, 0)$ 与正三角形顶点 [[P]] $= (-\\tfrac{1}{2}, \\tfrac{\\sqrt{3}}{2})$，再作半径为 $2$ 的 [[circle(T, O)]] 交 [[circle(O, A)]] 于 [[Q]] $= (-\\tfrac{1}{4}, \\tfrac{\\sqrt{15}}{4}) = (-\\tfrac{1}{4}, \\tfrac{\\sqrt{5}}{2}y_P)$。",
            "由相似直角三角形，[[line(P, Q)]] 外截 [[line(O, A)]] 于 [[P₁]]，其横坐标 $x_{P_1} = -\\tfrac{3 + \\sqrt{5}}{2} = -\\varphi^2$。于是 [[A]]（$1$）与 [[P₁]]（$-\\varphi^2$）的中点位于 $x = \\tfrac{1 - \\varphi^2}{2} = -\\tfrac{\\varphi}{2} = \\cos 144^\\circ$，故中垂线 [[perpBisector(A, P₁)]] 截 [[circle(O, A)]] 得 $\\pm 144^\\circ$ 顶点 [[X]]、[[Y]] 并直接构成对边 $XY$。",
            "在以 $0^\\circ$ 处 [[A]] 为顶点的正五边形中，连接 $72^\\circ$ 与 $144^\\circ$ 顶点的边外法向为 $108^\\circ$、距圆心 [[O]] 距离为 $\\cos 36^\\circ = \\tfrac{\\varphi}{2}$，故其在对称轴上的截距恰为 $\\tfrac{\\varphi / 2}{\\cos 108^\\circ} = -\\tfrac{\\varphi / 2}{(\\varphi - 1)/2} = -\\varphi^2 = x_{P_1}$。",
            "因此 [[line(P₁, X)]] 与 [[line(P₁, Y)]] 再次交 [[circle(O, A)]] 于 $\\pm 72^\\circ$ 顶点 [[U]]、[[V]] 且直接承载边 $UX$、$YV$，最后连 [[line(A, U)]] 与 [[line(V, A)]] 即围成内接正五边形。"
          ]
        }
      },
      "e-10L-10E": {
        "variantLabels": {
          "1": "内接正五边形"
        },
        "proof": {
          "keyIdea": "复用定出 $P_1 = (-\\varphi^2, 0)$ 的 4E 前缀，利用 $|SP_1| = \\varphi = 2\\sin 54^\\circ$ 从对径点 $S$ 直接截出 $\\pm 72^\\circ$ 顶点，再经 $P_1$ 投影同时获得 $\\pm 144^\\circ$ 顶点与两条边。",
          "steps": [
            "同 $9\\text{L}$ 前缀，由 [[line(O, A)]]、[[circle(S, O)]]、[[circle(T, O)]] 与 [[line(P, Q)]] 在单位圆 [[circle(O, A)]]（$O = (0, 0),\\; A = (1, 0),\\; S = (-1, 0)$）的直径延长线上作出 [[P₁]] $= (-\\varphi^2, 0)$，得 $|SP_1| = \\varphi^2 - 1 = \\varphi$。",
            "因单位圆上从 $180^\\circ$（[[S]]）到 $\\pm 72^\\circ$ 的弦所对圆心角为 $108^\\circ$，弦长恰为 $2\\sin 54^\\circ = \\varphi = |SP_1|$，故 [[circle(S, P₁)]] 交 [[circle(O, A)]] 于正五边形的 $\\pm 72^\\circ$ 顶点 [[B]] 与 [[E]]。",
            "由于连接 $\\pm 72^\\circ$ 与 $\\pm 144^\\circ$ 顶点的两条边交对称轴于 $x = -\\varphi^2$（[[P₁]]），作 [[line(B, P₁)]] 与 [[line(E, P₁)]] 即可再交 [[circle(O, A)]] 于 $\\pm 144^\\circ$ 顶点 [[C]]、[[D]]，再连 [[line(A, B)]]、[[line(C, D)]] 与 [[line(E, A)]] 即完成全部五条边。"
          ]
        }
      }
    }
  },
  "Lambda/L9": {
    "title": "距角两边最远的点",
    "prompt": "在给定圆上作一点，使其到给定角两边的距离之和最大。",
    "solutions": {
      "l-2L-8E": {
        "variantLabels": {
          "1": "距离之和最大的点 P"
        },
        "proof": {
          "keyIdea": "在 $\\angle BAC$ 内部，点到两边的垂距之和是线性函数，其梯度方向严格沿内角平分线背离顶点向外。",
          "steps": [
            "设 [[ray(A, B)]] 与 [[ray(A, C)]] 指向 $\\angle BAC$ 内部的单位法向量分别为 $\\vec{n}_1, \\vec{n}_2$。因 [[circle(O)]] 严格位于 $\\angle BAC$ 内部，圆上任一点 $X$ 到两边的距离之和为 $d(X, AB) + d(X, AC) = \\langle X - A, \\vec{n}_1 + \\vec{n}_2 \\rangle$。",
            "由对称性，$\\vec{n}_1 + \\vec{n}_2$ 的模为 $2\\sin(\\tfrac{1}{2}\\angle BAC) > 0$，方向沿内角平分线 $b_1 =$ [[angleBisector(B₀, A, C₀)]]（取 [[B₀]] $\\in$ [[ray(A, B)]]、[[C₀]] $\\in$ [[ray(A, C)]]）严格背离顶点 [[A]]。故过圆心 [[O]] 平行于 $b_1$ 的直径线 [[parallel(b₁, O)]] 在远离 [[A]] 一侧与 [[circle(O)]] 的交点 [[P₁]] 唯一取得最大距离和。"
          ]
        }
      },
      "e-4L-4E": {
        "variantLabels": {
          "1": "距离之和最大的点 P"
        },
        "proof": {
          "keyIdea": "在角两边截取 $|AB_1| = |AC_1| = |AO|$ 使等腰三角形底弦 $B_1C_1$ 垂直于内角平分线，再将 $O$ 关于 $B_1C_1$ 对称即可定出沿角平分线向外的直径方向。",
          "steps": [
            "圆 [[circle(A, O)]] 分别交 [[ray(A, B)]]、[[ray(A, C)]] 于 [[B₁]]、[[C₁]]（$|AB_1| = |AC_1| = |AO|$），故等腰弦 $B_1C_1$ 垂直于 $\\angle BAC$ 的内角平分线，且位于劣弧 $\\widehat{B_1C_1}$ 上的 [[O]] 严格处在弦 $B_1C_1$ 背离 [[A]] 的外侧。",
            "两圆 [[circle(B₁, O)]] 与 [[circle(C₁, O)]] 将 [[O]] 关于 $B_1C_1$ 对称至更靠近 [[A]] 的点 [[O']]（$\\neq O$）。因此有向直线 [[line(O', O)]] $\\perp B_1C_1$ 平行于内角平分线严格向外，其与 [[circle(O)]] 的远端交点 [[P]] 即使到角两边的距离之和最大。"
          ]
        }
      }
    }
  },
  "Lambda/L10": {
    "title": "1 : 5 分割",
    "prompt": "在给定线段上作一点，将其按 1 : 5 的比例分割。",
    "solutions": {
      "l-4L-13E": {
        "variantLabels": {
          "1": "1:5 分点"
        },
        "proof": {
          "keyIdea": "在以中点 $M$ 为圆心、$|AB|$ 为半径的圆中作出斜率为 $2$ 的割线 $AN$ 使 $\\angle BQW = 90^\\circ$，则 $\\angle BQW$ 的平分线斜率为 $-3$，恰好在横坐标 $\\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$ 处截 $AB$。",
          "steps": [
            "沿 [[seg(A, B)]] 建立坐标系使 [[A]] $= (0, 0)$、[[B]] $= (1, 0)$。中垂线 [[perpBisector(A, B)]] 给出中点 [[M]] $= (\\tfrac{1}{2}, 0)$，半径为 $1$ 的 [[compass(A, B; M)]] 在 [[perpBisector(A, B)]] 上截出竖直直径 $NQ$，其中 [[N]] $= (\\tfrac{1}{2}, 1)$、[[Q]] $= (\\tfrac{1}{2}, -1)$。",
            "直线 [[line(A, N)]] 再交 [[compass(A, B; M)]] 于 [[W]]。由直径 $NQ$ 得 $\\angle NWQ = 90^\\circ$，又由全等直角三角形 $\\triangle AMN \\cong \\triangle BMQ$ 知位于 $NQ$ 异侧的 $\\angle MQB = \\angle MNA = \\angle QNW$，故 $\\angle BQW = \\angle MQB + (90^\\circ - \\angle QNW) = 90^\\circ$。",
            "因 $\\overrightarrow{QB} = (\\tfrac{1}{2}, 1)$，而射线 $\\overrightarrow{QW}$ 为其逆时针旋转 $90^\\circ$ 方向 $(-1, \\tfrac{1}{2})$，故直角平分线 [[angleBisector(B, Q, W)]] 的方向向量为 $(\\tfrac{1}{2}, 1) + (-1, \\tfrac{1}{2}) = (-\\tfrac{1}{2}, \\tfrac{3}{2})$（斜率为 $-3$）。自 [[Q]] $= (\\tfrac{1}{2}, -1)$ 上升 $1$ 个单位至 $y = 0$ 交 [[seg(A, B)]] 于 [[P₁]]，得 $x_{P_1} = \\tfrac{1}{2} - \\tfrac{1}{3} = \\tfrac{1}{6}$，即 $|AP_1| : |P_1B| = 1 : 5$。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "1:5 分点"
        },
        "proof": {
          "keyIdea": "沿直线 $AB$ 在坐标 $0$ 与 $3$ 处分别作半径为 $1$ 与 $3$ 的两圆，其公共弦（根轴）垂直落于 $AB$ 上的 $x = \\frac{1}{6}$ 处。",
          "steps": [
            "沿 [[line(A, B)]] 设 [[A]] $= 0$、[[B]] $= 1$。以 $0$ 为圆心、$1$ 为半径的 [[circle(A, B)]] 截得 $-1$ 处的 [[C]]，再以 $1$ 为圆心、$2$ 为半径的 [[circle(B, C)]] 截得 $3$ 处的 [[D]]。",
            "以 $3$ 为圆心、$3$ 为半径的 [[circle(D, A)]] 与 [[circle(A, B)]] 交于 [[U]]、[[V]]，其根轴 [[line(U, V)]] 垂直于 [[seg(A, B)]] 并交于 [[P₁]]。",
            "在直角三角形 $\\triangle AP_1U$ 与 $\\triangle DP_1U$ 中消去公共高 $|P_1U|^2$，得 $1^2 - |AP_1|^2 = 3^2 - (3 - |AP_1|)^2 = 6|AP_1| - |AP_1|^2$，解得 $|AP_1| = \\tfrac{1}{6}$，故 $|AP_1| : |P_1B| = 1 : 5$。"
          ]
        }
      },
      "v-7L-7E-2V": {
        "variantLabels": {
          "1": "1:5 分点 (₁)",
          "2": "1:5 分点 (₂)"
        },
        "proof": {
          "keyIdea": "以 $AB$ 上方的正三角形顶点为圆心作一圆，将根轴截得的 $1 : 5$ 分点 $P_1$ 关于 $AB$ 的中点对称，即得第二个分点。",
          "steps": [
            "同 $5\\text{E}$ 作法，由 [[line(A, B)]]、[[circle(A, B)]]、[[circle(B, C)]]、[[circle(D, A)]] 与根轴 [[line(U, V)]] 在 [[seg(A, B)]] 上作出满足 $|AP_1| = \\tfrac{1}{6}|AB|$ 的分点 [[P₁]]。",
            "添作 [[circle(B, A)]] 定出位于 [[seg(A, B)]] 中垂线上的正三角形顶点 [[E]] $\\in$ [[circle(A, B)]] $\\cap$ [[circle(B, A)]]。",
            "因 [[circle(E, P₁)]] 关于 $AB$ 的中垂线对称，其与 [[seg(A, B)]] 的第二交点 [[P₂]] 满足 $|BP_2| = |AP_1| = \\tfrac{1}{6}|AB|$，将 [[seg(A, B)]] 按 $5 : 1$ 分割。"
          ],
          "variantNote": "借助正三角形顶点将 $1 : 5$ 分点关于线段中垂线对称，即可得到 $AB$ 上全部两个对称的 $1 : 5$ 分点。"
        }
      }
    }
  }
};
