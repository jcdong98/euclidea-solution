import type { LevelLocaleEntry } from '../../../types';

export const MU_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Mu/L1": {
    "title": "已知三边中点作三角形",
    "prompt": "已知三角形三边的中点，求作该三角形。",
    "solutions": {
      "l-5L-12E": {
        "variantLabels": {
          "1": "反中点三角形"
        },
        "proof": {
          "keyIdea": "由三角形中位线定理，反中点三角形的每条边平行于对侧中位线，且被第三个已知中点平分为两段长均为 $|M_1 M_2|$ 的线段。",
          "steps": [
            "作 [[line(M₁, M₂)]]、过 [[M₃]] 的平行线 [[parallel(line(M₁, M₂), M₃)]] 及移距圆 [[compass(M₁, M₂; M₃)]]，在平行线上截得 $|M_3 V_2| = |M_3 V_1| = |M_1 M_2|$，定出顶点 [[V₂]] 与 [[V₁]]，使 [[M₃]] 平分 $V_1 V_2$ 且 $\\overrightarrow{M_3 V_1} = \\overrightarrow{M_1 M_2} = \\overrightarrow{V_2 M_3}$。",
            "由此四边形 $M_1 M_2 M_3 V_2$ 与 $M_2 M_1 M_3 V_1$ 均为平行四边形（$\\overrightarrow{V_2 M_1} = \\overrightarrow{M_3 M_2}$ 且 $\\overrightarrow{V_1 M_2} = \\overrightarrow{M_3 M_1}$）。连 [[line(M₁, V₂)]] 与 [[line(M₂, V₁)]] 交于 [[V₃]] 得 $\\triangle V_1 V_2 V_3$，因 $V_2 M_1 \\parallel M_3 M_2$、$V_1 M_2 \\parallel M_3 M_1$ 且 [[M₃]] 平分 $V_1 V_2$，故 [[M₁]]、[[M₂]] 必分别平分 $V_2 V_3$ 与 $V_3 V_1$。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "反中点三角形"
        },
        "proof": {
          "keyIdea": "将 $M_3$ 关于 $M_1 M_2$ 的垂直平分线作对称反射，仅用基本圆与直线即可同时得到过 $M_3$ 平行于 $M_1 M_2$ 的直线以及等长平移半径 $|M_1 R| = |M_2 M_3|$。",
          "steps": [
            "对称双圆 [[circle(M₁, M₂)]] 与 [[circle(M₂, M₁)]] 的交点 [[E₁]]、[[E₂]] 位于 $M_1 M_2$ 的中垂线 $m$ 上，故 [[circle(E₁, M₃)]] 与 [[circle(E₂, M₃)]] 将 [[M₃]] 关于 $m$ 对称至 [[R]]。由 $m \\perp M_1 M_2$ 知对称弦 [[line(M₃, R)]] $\\parallel M_1 M_2$，且对称性给出 $|M_1 R| = |M_2 M_3|$。",
            "作 [[circle(M₁, R)]] 再交 [[line(M₃, R)]] 于 [[W₂]]（$\\ne R$）。由 $M_3 R \\parallel M_1 M_2$ 及 $|M_1 W_2| = |M_1 R| = |M_2 M_3|$（与等腰梯形 $M_1 M_2 M_3 R$ 反向平移），知 $M_1 M_2 M_3 W_2$ 为平行四边形，$\\overrightarrow{W_2 M_3} = \\overrightarrow{M_1 M_2}$。",
            "过圆心 [[M₁]] 作直径直线 [[line(M₁, W₂)]] 交 [[circle(M₁, R)]] 于对径点 [[W₃]]，故 [[M₁]] 平分 $W_2 W_3$ 且 $\\overrightarrow{M_1 W_3} = \\overrightarrow{W_2 M_1} = \\overrightarrow{M_3 M_2}$。于是 $M_1 M_3 M_2 W_3$ 亦为平行四边形，连 [[line(M₂, W₃)]] 交 [[line(M₃, R)]] 于 [[W₁]]，即得 [[M₂]]、[[M₃]] 分别平分 $W_3 W_1$ 与 $W_1 W_2$。"
          ]
        }
      }
    }
  },
  "Mu/L2": {
    "title": "已知一边与重心作三角形",
    "prompt": "以已知线段为一边、已知点为重心作三角形。",
    "solutions": {
      "l-6L-8E": {
        "variantLabels": {
          "1": "三角形 ABC"
        },
        "proof": {
          "keyIdea": "重心 $G$ 将中线 $B M_b$ 按 $2:1$ 分割（$|BG| = 2|G M_b|$），故将 $B$ 关于 $G$ 中心对称至 $B'$ 后，中点 $M_b$ 恰为线段 $G B'$ 的中点。",
          "steps": [
            "作 [[line(B, G)]] 与 [[circle(G, B)]] 将 [[B]] 关于 [[G]] 对称至 [[B']]（$|G B'| = |BG|$），再取 [[perpBisector(G, B')]] 与 [[line(B, G)]] 的交点 [[M_b]] 平分 $G B'$，从而在中线上依次有 $B, G, M_b$ 且 $|BG| = 2|G M_b|$。",
            "由 [[circle(M_b, A)]] 与 [[line(A, M_b)]] 将 [[A]] 关于 [[M_b]] 对称至 [[C]]，使 [[M_b]] 为边 $AC$ 的中点；连 [[line(B, C)]] 即在已知边 [[seg(A, B)]] 上完成以 [[G]] 为重心的 $\\triangle ABC$。"
          ]
        }
      },
      "e-7L-7E": {
        "variantLabels": {
          "1": "三角形 ABC"
        },
        "proof": {
          "keyIdea": "复用已有的 $\\text{circle}(G, B) = \\text{circle}(G, B')$ 作为线段 $G B'$ 中垂线双圆之一，将求中点 $M_b$ 的开销从 $5E$ 降至 $4E$。",
          "steps": [
            "作 [[line(B, G)]] 与 [[circle(G, B)]] 得 [[B]] 关于 [[G]] 的对称点 [[B']]。因 [[B']] 已在 [[circle(G, B)]] 上，仅添一圆 [[circle(B', G)]] 即构成 $G B'$ 上的对称双圆（交于 [[E₁]]、[[E₂]]），连 [[line(E₁, E₂)]] 交 [[line(B, G)]] 于中点 [[M_b]]，满足 $|BG| = 2|G M_b|$。",
            "作 [[circle(M_b, A)]] 与 [[line(A, M_b)]] 将 [[A]] 关于 [[M_b]] 对称至 [[C]]（使 [[M_b]] 平分 $AC$），再连 [[line(B, C)]] 即闭合成以 [[seg(A, B)]] 为一边、[[G]] 为重心的 $\\triangle ABC$。"
          ]
        }
      }
    }
  },
  "Mu/L3": {
    "title": "已知垂足作锐角三角形",
    "prompt": "已知三条高线的垂足，求作该锐角三角形。",
    "solutions": {
      "l-5L-13E": {
        "variantLabels": {
          "1": "三角形 V₁V₂V₃"
        },
        "proof": {
          "keyIdea": "在任意锐角 $\\triangle V_1 V_2 V_3$ 中，三条高线恰平分垂足三角形 $\\triangle H_1 H_2 H_3$ 的三个内角（垂心即其内心），故三边 $V_j V_k \\perp V_i H_i$ 即为 $\\triangle H_1 H_2 H_3$ 的外角平分线，所求三角形即其旁心三角形。",
          "steps": [
            "设锐角 $\\triangle V_1 V_2 V_3$ 的高线垂足为 $H_1, H_2, H_3$，由四点共圆 $V_2 H_2 H_3 V_3$ 与 $V_3 H_3 H_1 V_1$ 知 $\\angle V_1 H_1 H_2 = 90^\\circ - \\angle V_1 = \\angle V_1 H_1 H_3$；因此内角平分线 [[angleBisector(H₂, H₁, H₃)]] 与 [[angleBisector(H₁, H₂, H₃)]] 分别与高线 $V_1 H_1$、$V_2 H_2$ 重合，而在各垂足处与内角平分线垂直的外角平分线即围成锐角旁心三角形 $\\triangle V_1 V_2 V_3$。",
            "过 [[H₁]] 作内角平分线的垂线 [[perp(b₁, H₁)]] 即得 [[H₁]] 处的外角平分线（边 $V_2 V_3$），它与内角平分线 [[angleBisector(H₁, H₂, H₃)]] 交于 $H_2$-旁心 [[V₂]]。",
            "由旁心三线共点性质，连 [[line(V₂, H₃)]] 即得 [[H₃]] 处的外角平分线（边 $V_1 V_2$），它交 [[angleBisector(H₂, H₁, H₃)]] 于 $H_1$-旁心 [[V₁]]；再连 [[line(V₁, H₂)]] 得 [[H₂]] 处的外角平分线（边 $V_3 V_1$），与 [[perp(b₁, H₁)]] 交于第三顶点 [[V₃]]。"
          ]
        }
      },
      "e-10L-10E": {
        "variantLabels": {
          "1": "三角形 V₁V₂V₃"
        },
        "proof": {
          "keyIdea": "沿射线 $H_1 H_2$ 延长方向构造菱形 $H_2 D E H_3$，使其对角线平分 $H_2$ 处外角，同时对边 $H_3 E \\parallel H_1 H_2$ 截 $\\text{circle}(H_3, H_1)$ 得一条直径，一举给出 $H_1$ 处的内、外角平分线。",
          "steps": [
            "[[circle(H₂, H₃)]] 沿射线 $H_1 \\to H_2$ 延长方向交 [[line(H₁, H₂)]] 于 [[D]]（$|H_2 D| = |H_2 H_3|$），再由 [[circle(D, H₂)]] $\\cap$ [[circle(H₃, H₂)]] 补全菱形 $H_2 D E H_3$ 的顶点 [[E]]。对角线 [[line(H₂, E)]] 平分外角 $\\angle D H_2 H_3$（构成边 $V_3 V_1$），同时 $\\overrightarrow{H_3 E} = \\overrightarrow{H_2 D}$ 使 [[line(H₃, E)]] $\\parallel H_1 H_2$。",
            "直径直线 [[line(H₃, E)]] 交 [[circle(H₃, H₁)]] 于同向点 [[G]] 与对径点 [[F]]。在等腰 $\\triangle H_3 H_1 G$（$|H_3 G| = |H_3 H_1|$）中，由 $H_3 G \\parallel H_1 H_2$ 及内错角相等得 $\\angle H_2 H_1 G = \\angle H_3 G H_1 = \\angle G H_1 H_3$，故 [[line(H₁, G)]] 为 [[H₁]] 处的内角平分线；由直径 $GF$ 上的泰勒斯定理，[[line(H₁, F)]] $\\perp H_1 G$ 即为 [[H₁]] 处的外角平分线（边 $V_2 V_3$）。",
            "[[line(H₂, E)]] 与 [[line(H₁, G)]] 交于 $H_1$-旁心 [[V₁]]；连 [[line(H₃, V₁)]] 即得 [[H₃]] 处的外角平分线（边 $V_1 V_2$），它与 [[line(H₁, F)]] 交于 [[V₂]]，而 [[line(H₁, F)]] 与 [[line(H₂, E)]] 交于 [[V₃]]。"
          ]
        }
      }
    }
  },
  "Mu/L4": {
    "title": "已知内切圆切点作三角形",
    "prompt": "已知内切圆在三边上的切点，求作该三角形。",
    "solutions": {
      "l-6L-12E": {
        "variantLabels": {
          "1": "外切三角形"
        },
        "proof": {
          "keyIdea": "所求三角形即锐角 $\\triangle T_1 T_2 T_3$ 的切线三角形；由切线长相等知每个顶点必位于两切点的中垂线上，因此仅作过 $T_2$ 的一条切线，即可在求外心已用的两条中垂线上直接截出两个顶点。",
          "steps": [
            "因 $\\triangle V_1 V_2 V_3$ 的内切圆过 $T_1, T_2, T_3$，该内切圆即为 $\\triangle T_1 T_2 T_3$ 的外接圆 $\\omega$，圆心为 [[O]] $\\in$ [[perpBisector(T₁, T₂)]] $\\cap$ [[perpBisector(T₂, T₃)]]（且 $\\triangle T_1 T_2 T_3$ 为锐角三角形保证了 $\\omega$ 位于切线三角形内部成为内切圆而非旁切圆）。",
            "连 [[line(O, T₂)]] 并作垂线 [[perp(line(O, T₂), T₂)]] 得 $\\omega$ 在 [[T₂]] 处的切线（边 $V_3 V_1$）。由切线长定理 $|V_3 T_1| = |V_3 T_2|$ 与 $|V_1 T_2| = |V_1 T_3|$，顶点 [[V₃]]、[[V₁]] 分别位于 [[perpBisector(T₁, T₂)]] 与 [[perpBisector(T₂, T₃)]] 上，故该切线与两中垂线的交点即为 [[V₃]] 与 [[V₁]]。",
            "由关于 $O V_3$ 与 $O V_1$ 的对称性，连 [[line(V₃, T₁)]] 与 [[line(V₁, T₃)]] 自动成为 $\\omega$ 在 [[T₁]] 与 [[T₃]] 处的切线，两线相交于第三顶点 [[V₂]]。"
          ]
        }
      },
      "e-10L-10E": {
        "variantLabels": {
          "1": "外切三角形"
        },
        "proof": {
          "keyIdea": "完全绕过外心，仅用基本圆对称反射与弦切角定理作出 $\\odot(T_1 T_2 T_3)$ 在 $T_2$ 与 $T_3$ 处的切线。",
          "steps": [
            "[[circle(T₁, T₂)]] 交 [[line(T₂, T₃)]] 于 [[H']]（将 [[T₂]] 关于 $T_1$ 处高线反射），[[circle(T₃, H')]] 交 [[circle(T₁, T₂)]] 于 [[WB]]（将 [[H']] 关于 $T_1 T_3$ 反射），[[circle(T₂, WB)]] 交 [[circle(T₁, T₂)]] 于 [[TB]]（将 [[WB]] 关于 $T_1 T_2$ 反射）。复合三次过 [[T₁]] 轴的反射，在等腰 $\\triangle T_1 T_2 TB$ 中得有向角 $\\measuredangle(T_1 T_2, T_1 TB) = 180^\\circ - 2\\angle T_3$，从而 $\\angle T_1 T_2 TB = \\angle T_1 T_3 T_2$；由弦切角定理逆定理，[[line(T₂, TB)]] 与 $\\odot(T_1 T_2 T_3)$ 相切于 [[T₂]]。",
            "添作 [[circle(T₂, T₁)]] 与 [[circle(T₁, T₂)]] 交于 [[U₁]]、[[U₂]]，连中垂线 [[line(U₁, U₂)]] 交切线 [[line(T₂, TB)]] 于顶点 [[V₃]]（$|V_3 T_1| = |V_3 T_2|$），故 [[line(V₃, T₁)]] 即为过 [[T₁]] 的切线。",
            "[[circle(T₂, WB)]] 与 [[circle(T₃, H')]] 的另一交点 [[WBBar]] 为 [[WB]] 关于 [[line(T₂, T₃)]] 的对称点，此时 $T_2 WBBar$ 与 $T_3 WBBar$ 相对 $T_2 T_3$ 的有向角分别为 $\\angle T_3 - \\angle T_2$ 与 $2\\angle T_3$。取直径端点 [[P]] $\\in$ [[line(T₂, T₃)]] $\\cap$ [[circle(T₂, WB)]]，等腰 $\\triangle T_2 P\\,WBBar$ 将圆心角折半至割线 [[line(WBBar, P)]]，该割线再交 [[circle(T₃, H')]] 于 [[X]]，将 $T_3 WBBar$ 反射至相对 $T_2 T_3$ 成角 $(\\angle T_3 - \\angle T_2 + 180^\\circ) - 2\\angle T_3 = \\angle T_1$。由弦切角定理逆定理，[[line(T₃, X)]] 相切于 [[T₃]]，分别交 [[line(T₂, TB)]] 与 [[line(V₃, T₁)]] 于顶点 [[V₁]] 与 [[P₁]]。"
          ]
        }
      }
    }
  },
  "Mu/L5": {
    "title": "已知旁心作三角形",
    "prompt": "已知三个旁心，求作原三角形。",
    "solutions": {
      "le-9L-11E": {
        "variantLabels": {
          "1": "原三角形"
        },
        "proof": {
          "keyIdea": "因三角形每一顶点处的内角平分线与外角平分线互相垂直，原三角形恰为其锐角旁心三角形 $\\triangle J_1 J_2 J_3$ 的垂足三角形；结合 $J_2 J_3$ 上的泰勒斯圆与法尼亚诺（Fagnano）光反射性质，可在 $9L, 11E$ 内定出全部三个垂足。",
          "steps": [
            "设原三角形顶点为 $H_1, H_2, H_3$，旁心为 $J_1, J_2, J_3$。因每一顶点处的内角平分线 $H_i J_i$ 垂直于外角平分线 $J_j J_k$，故 $H_1, H_2, H_3$ 恰为锐角 $\\triangle J_1 J_2 J_3$ 在三边 [[line(J₂, J₃)]]、[[line(J₃, J₁)]]、[[line(J₁, J₂)]] 上的垂足。",
            "由 [[perpBisector(J₂, J₃)]] 交 [[line(J₂, J₃)]] 得中点 [[M]]，以 $J_2 J_3$ 为直径作泰勒斯圆 [[circle(M, J₂)]]，分别交 [[line(J₃, J₁)]] 与 [[line(J₁, J₂)]] 于垂足 [[H₂]]（$\\angle J_2 H_2 J_3 = 90^\\circ$）和 [[H₃]]（$\\angle J_3 H_3 J_2 = 90^\\circ$）。",
            "作 [[circle(J₃, H₂)]] 将 [[H₂]] 关于连心线 [[line(J₂, J₃)]]（过 [[M]] 与 [[J₃]]）对称至 [[circle(M, J₂)]] 上的 [[H₂']]。因高线 $J_1 H_1$ 平分垂足三角形的内角 $\\angle H_2 H_1 H_3$，边 [[line(J₂, J₃)]] 即其外角平分线（光反射镜面），故将 [[H₂]] 关于 [[line(J₂, J₃)]] 反射后必有 $H_3, H_1, H_2'$ 三点共线！因此连 [[line(H₃, H₂')]] 既直接画出边 $H_3 H_1$，又交 [[line(J₂, J₃)]] 于垂足 [[H₁]]；再连 [[line(H₂, H₃)]] 与 [[line(H₁, H₂)]] 即完成 $\\triangle H_1 H_2 H_3$。"
          ]
        }
      }
    }
  },
  "Mu/L6": {
    "title": "已知重心与边上两点作正三角形",
    "prompt": "求作三条直线围成一个以点 O 为重心的正三角形，且其中两条边分别经过给定的两个点。",
    "solutions": {
      "le-7L-7E": {
        "variantLabels": {
          "1": "正三角形"
        },
        "proof": {
          "keyIdea": "将点 $B$ 绕重心 $O$ 旋转 $120^\\circ$ 至过 $A$ 的边所在直线上的点 $D$，再利用中间 $60^\\circ$ 旋转圆 $\\text{circle}(C, O)$ 上的 $30^\\circ$ 圆周角直接定出正三角形的公共顶点 $E$。",
          "steps": [
            "正三角形 $\\triangle EFK$ 以 $O$ 为重心当且仅当 $O$ 为其外心，且绕 $O$ 旋转 $120^\\circ$ 轮换其三边（$EK \\to EF \\to FK$）。作 [[circle(O, B)]] 与 [[circle(B, O)]] 交于 [[C]] $= R_{O, \\mp 60^\\circ}(B)$，再作 [[circle(C, O)]] 交 [[circle(O, B)]] 于 [[D]] $= R_{O, \\mp 120^\\circ}(B)$。",
            "在将含 [[B]] 的边 $EK$ 映至含 [[A]] 的边 $EF$ 的 $120^\\circ$ 旋转下，[[B]] 映为 [[D]] $\\in EF$，故 [[line(A, D)]] 即为边 $EF$ 所在直线。在 [[circle(C, O)]] 上，圆心角 $\\angle O C D = 60^\\circ$ 给出 [[line(A, D)]] 与 [[circle(C, O)]] 另一交点 [[E]] 处的圆周角 $\\angle O E D = 30^\\circ$，恰等于外接圆 [[circle(O, E)]] 半径 $EO$ 与内接正三角形边 $EF$ 的夹角。",
            "作外接圆 [[circle(O, E)]] 交 [[line(A, D)]] 于 [[F]]（$\\angle E O F = 120^\\circ$）。将弦 $FD$ 绕 [[O]] 反向旋转 $\\pm 120^\\circ$ 即把 $F \\mapsto E$、$D \\mapsto B$，故 [[line(B, E)]] 即为第二条边所在直线，交 [[circle(O, E)]] 于 [[K]]（$\\angle E O K = 120^\\circ$）；连 [[line(F, K)]] 即得正三角形 $\\triangle EFK$。"
          ]
        }
      },
      "v-14L-14E-2V": {
        "variantLabels": {
          "1": "正三角形 (₁)",
          "2": "正三角形 (₂)"
        },
        "proof": {
          "keyIdea": "通过双圆的两个对称交点 $C$ 与 $C_1$ 将 $B$ 绕重心 $O$ 分别旋转 $-120^\\circ$ 与 $+120^\\circ$，遍历过 $A, B$ 两边的两种循环定向，作出全部两个正三角形。",
          "steps": [
            "取 [[circle(O, B)]] $\\cap$ [[circle(B, O)]] 的第一交点 [[C]]，由 [[circle(C, O)]] 定出 [[D]] $= R_{O, -120^\\circ}(B)$，连 [[line(A, D)]] 交 [[circle(C, O)]] 于 [[E]]（$\\angle O E D = 30^\\circ$）；再由外接圆 [[circle(O, E)]] 依次定出 [[F]]、[[line(B, E)]]、[[K]] 与 [[line(F, K)]]，得第一个正三角形。",
            "对 [[circle(O, B) #2]] $\\cap$ [[circle(B, O) #2]] 的另一侧对称交点 [[C₁]] 重复同一 $7L, 7E$ 构造，由 [[circle(C₁, O)]] 定出 [[D₁]] $= R_{O, +120^\\circ}(B)$，再作 [[line(A, D₁)]]、[[circle(O, E₁)]]、[[line(B, E₁)]] 与 [[line(F₁, K₁)]]，即得第二个正三角形 $\\triangle E_1 F_1 K_1$。"
          ],
          "variantNote": "两个对称解分别对应绕 $O$ 旋转 $+120^\\circ$ 或 $-120^\\circ$ 将过 $B$ 的边映至过 $A$ 的边。"
        }
      }
    }
  },
  "Mu/L7": {
    "title": "直角边过两点的圆内接直角三角形",
    "prompt": "在以 O 为圆心的已知圆内作一个内接直角三角形，使给定的两个点分别位于其两条直角边上。",
    "solutions": {
      "le-6L-8E": {
        "variantLabels": {
          "1": "内接直角三角形"
        },
        "proof": {
          "keyIdea": "直角顶点 $C$ 位于 $\\text{circle}(O)$ 上且对圆内两点 $A, B$ 张直角 $\\angle ACB = 90^\\circ$，故 $C$ 即为 $\\text{circle}(O)$ 与以 $AB$ 为直径的泰勒斯圆的交点。",
          "steps": [
            "作 [[line(A, B)]] 与 [[perpBisector(A, B)]] 交于 $AB$ 中点 [[M]]，以 $AB$ 为直径作泰勒斯圆 [[circle(M, A)]] 交 [[circle(O)]] 于直角顶点 [[C₁]]，满足 $\\angle A C_1 B = 90^\\circ$。",
            "因 [[A]]、[[B]] 严格位于 [[circle(O)]] 内部，弦 [[line(C₁, A)]] 与 [[line(C₁, B)]] 分别穿过 [[A]]、[[B]] 交 [[circle(O)]] 于 [[P₁₁]]、[[P₁₂]]，保证 [[A]]、[[B]] 落在直角边线段 $C_1 P_{11}$ 与 $C_1 P_{12}$ 上且 $\\angle P_{11} C_1 P_{12} = 90^\\circ$；连 [[line(P₁₁, P₁₂)]] 即得斜边（亦为 [[circle(O)]] 的直径）。"
          ]
        }
      },
      "v-9L-11E-2V": {
        "variantLabels": {
          "1": "内接直角三角形 (₁)",
          "2": "内接直角三角形 (₂)"
        },
        "proof": {
          "keyIdea": "$\\text{circle}(O)$ 与泰勒斯圆 $\\text{circle}(M, A)$ 的两个交点 $C_1, C_2$ 均满足 $\\angle A C_i B = 90^\\circ$，由此给出全部两个内接直角三角形。",
          "steps": [
            "由 [[line(A, B)]] $\\cap$ [[perpBisector(A, B)]] 作出中点 [[M]]，泰勒斯圆 [[circle(M, A)]] 与 [[circle(O)]] 相交于相异两点 [[C₁]] 与 [[C₂]]。",
            "过 [[C₁]] 作两直角边弦 [[line(C₁, A)]]、[[line(C₁, B)]] 交圆于 [[P₁₁]]、[[P₁₂]] 并连斜边 [[line(P₁₁, P₁₂)]] 得第一解；过 [[C₂]] 作 [[line(C₂, A)]]、[[line(C₂, B)]] 交圆于 [[P₂₁]]、[[P₂₂]] 并连斜边 [[line(P₂₁, P₂₂)]] 得第二解。"
          ],
          "variantNote": "圆内两点 $A, B$ 满足严格三角不等式条件（$2r < 2|MO| + |AB|$），保证泰勒斯圆 $\\text{circle}(M, A)$ 与 $\\text{circle}(O)$ 交于两个相异的直角顶点 $C_1, C_2$。"
        }
      }
    }
  },
  "Mu/L8": {
    "title": "已知斜边与斜边上的高作直角三角形",
    "prompt": "已知斜边 AB，求作一个直角三角形，使其斜边 AB 上的高等于给定线段。",
    "solutions": {
      "l-6L-14E": {
        "variantLabels": {
          "1": "直角三角形 ABP"
        },
        "proof": {
          "keyIdea": "求斜边 $AB$ 上的泰勒斯圆与距 $AB$ 垂距为 $|CD|$ 的平行线的交点。",
          "steps": [
            "[[perpBisector(A, B)]] 平分 [[seg(A, B)]] 于 [[M]]，以 $AB$ 为直径的泰勒斯圆 [[circle(M, A)]] 即为满足 $\\angle AVB = 90^\\circ$ 的点 $V$ 的轨迹。",
            "用 [[compass(C, D; M)]] 将 [[seg(C, D)]] 的长 $|CD|$ 平移至圆心 [[M]]，交 [[perpBisector(A, B)]] 于 [[H₊]]（$|M H_+| = |CD|$）。过 [[H₊]] 作中垂线的垂线 [[perp(m₁, H₊)]] 即得距 $AB$ 高为 $|CD|$ 的平行线，交 [[circle(M, A)]] 于直角顶点 [[V₂]]；连 [[line(A, V₂)]] 与 [[line(B, V₂)]] 即完成直角 $\\triangle A B V_2$。"
          ]
        }
      },
      "e-13L-13E": {
        "variantLabels": {
          "1": "直角三角形 ABP"
        },
        "proof": {
          "keyIdea": "通过两次中心对称倍长 $|CD|$，在泰勒斯圆 $\\text{circle}(M, A)$ 上截出弦 $|A W_1| = 2|CD|$，再平分弧 $A W_1$，使平分半径端点到直径 $AB$ 的高恰为 $\\frac{1}{2}|A W_1| = |CD|$。",
          "steps": [
            "将 [[A]] 关于 [[C]] 对称至 [[X]]（[[line(A, C)]]、[[circle(C, A)]]），再将 [[X]] 关于 [[D]] 对称至 [[Z]]（[[line(X, D)]]、[[circle(D, X)]]），则 [[seg(C, D)]] 为 $\\triangle A X Z$ 的中位线，故 [[circle(A, Z)]] 的半径为 $|AZ| = 2|CD|$。",
            "由 [[circle(A, B)]] $\\cap$ [[circle(B, A)]] 及连线 [[line(E₁, E₂)]] 平分 [[seg(A, B)]] 于 [[M]]，作出泰勒斯圆 [[circle(M, A)]]（半径 $R = \\frac{1}{2}|AB|$），它与 [[circle(A, Z)]] 交于 [[W₁]]，满足弦长 $|A W_1| = 2|CD|$。",
            "作 [[circle(W₁, A)]] 交已有的 [[circle(A, Z)]]（$= \\text{circle}(A, W_1)$）于 [[U₁]]（$|U_1 A| = |U_1 W_1|$），故 [[line(M, U₁)]] 为弦 $A W_1$ 的垂直平分线（设垂足为 $N$，则 $|AN| = |CD|$），同时平分圆心角 $\\angle A M W_1$ 并交 [[circle(M, A)]] 于 [[V₁]]。设 [[V₁]] 在 $AB$ 上的垂足为 $H$，则直角三角形 $\\triangle M H V_1$ 与 $\\triangle M N A$ 共锐角 $\\angle A M V_1$ 且斜边均为 $R$，故 $\\triangle M H V_1 \\cong \\triangle M N A$，得 $|V_1 H| = |AN| = |CD|$；连 [[line(A, V₁)]] 与 [[line(B, V₁)]] 即完成两直角边。"
          ]
        }
      },
      "v-13L-23E-4V": {
        "variantLabels": {
          "1": "直角三角形 ABP (₁)",
          "2": "直角三角形 ABP (₂)",
          "3": "直角三角形 ABP (₃)",
          "4": "直角三角形 ABP (₄)"
        },
        "proof": {
          "keyIdea": "当 $2|CD| < |AB|$ 时，在 $AB$ 两侧垂距为 $\\pm|CD|$ 的两条平行线分别与泰勒斯圆 $\\text{circle}(M, A)$ 交于对称两点，给出全部四个直角三角形。",
          "steps": [
            "[[perpBisector(A, B)]] 交 [[seg(A, B)]] 于中点 [[M]] 定出泰勒斯圆 [[circle(M, A)]]，同时 [[compass(C, D; M)]] 在 $AB$ 两侧的中垂线上截出距 $M$ 为 $|CD|$ 的 [[H₊]] 与 [[H₋]]。",
            "因 $|CD| < \\frac{1}{2}|AB|$，上侧平行线 [[perp(m₁, H₊)]] 交 [[circle(M, A)]] 于相异两顶点 [[V₂]]、[[V₁]]（分别连 [[line(A, V₂)]]、[[line(B, V₂)]] 与 [[line(A, V₁)]]、[[line(B, V₁)]]），下侧平行线 [[perp(m₁, H₋)]] 交 [[circle(M, A)]] 于 [[V₄]]、[[V₃]]（分别连 [[line(A, V₄)]]、[[line(B, V₄)]] 与 [[line(A, V₃)]]、[[line(B, V₃)]]）。"
          ],
          "variantNote": "关于斜边 $AB$ 及其中垂线 $\\text{perpBisector}(A, B)$ 的对称反射在四个相异直角顶点 $V_1, V_2, V_3, V_4$ 上传递作用。"
        }
      }
    }
  },
  "Mu/L9": {
    "title": "已知斜边与直角边作直角三角形",
    "prompt": "以已知线段 AB 为斜边作一个直角三角形，使其一条直角边等于另一给定线段。",
    "solutions": {
      "l-5L-11E": {
        "variantLabels": {
          "1": "直角三角形 ABP"
        },
        "proof": {
          "keyIdea": "求斜边 $AB$ 上的泰勒斯圆与以 $A$ 为圆心、$|CD|$ 为半径的圆的交点。",
          "steps": [
            "[[perpBisector(A, B)]] 交 [[seg(A, B)]] 于中点 [[M]]，故泰勒斯圆 [[circle(M, A)]] 为满足 $\\angle AVB = 90^\\circ$ 的点 $V$ 的轨迹。",
            "用 [[compass(C, D; A)]] 将 [[seg(C, D)]] 的长 $|CD|$ 平移至端点 [[A]]，交 [[circle(M, A)]] 于 [[V₁]]，满足 $|A V_1| = |CD|$ 且 $\\angle A V_1 B = 90^\\circ$；连 [[line(A, V₁)]] 与 [[line(B, V₁)]] 即得两条直角边。"
          ]
        }
      },
      "e-9L-9E": {
        "variantLabels": {
          "1": "直角三角形 ABP"
        },
        "proof": {
          "keyIdea": "以 $A$ 为中心将 $\\triangle A P_1 B$ 放大 $2$ 倍为等腰三角形 $\\triangle B A G$（$|BA| = |BG|$，$|AG| = 2|CD|$），使顶点 $B$ 天然落在底边 $AG$ 的垂直平分线上，从而让两条直角边同时兼任中点与垂线作图！",
          "steps": [
            "将 [[A]] 关于 [[D]] 对称至 [[X]]（[[line(A, D)]]、[[circle(D, A)]]），再将 [[X]] 关于 [[C]] 对称至 [[Z]]（[[line(X, C)]]、[[circle(C, X)]]），则 [[seg(C, D)]] 为 $\\triangle A X Z$ 的中位线，故 [[circle(A, Z)]] 的半径为 $|AZ| = 2|CD|$。",
            "取 [[circle(A, Z)]] 与 [[circle(B, A)]] 的交点 [[G]]，满足 $|AG| = 2|CD|$ 且 $|BG| = |BA|$。再作 [[circle(G, A)]] 交已有的 [[circle(A, Z)]]（$= \\text{circle}(A, G)$）于 [[U]]，满足 $|UA| = |UG|$。",
            "因 [[B]]（$|BA| = |BG|$）与 [[U]]（$|UA| = |UG|$）均到 [[A]]、[[G]] 等距，故 [[line(B, U)]] 恰为线段 $AG$ 的垂直平分线！因此 [[line(B, U)]] 与 [[line(A, G)]] 垂直相交于 $AG$ 的中点 [[P₁]]，一步同时画出直角 $\\triangle A B P_1$ 的两条直角边，满足 $\\angle A P_1 B = 90^\\circ$ 且 $|A P_1| = \\frac{1}{2}|AG| = |CD|$。"
          ]
        }
      },
      "v-12L-22E-4V": {
        "variantLabels": {
          "1": "直角三角形 ABP (₁)",
          "2": "直角三角形 ABP (₂)",
          "3": "直角三角形 ABP (₃)",
          "4": "直角三角形 ABP (₄)"
        },
        "proof": {
          "keyIdea": "将直角边长 $|CD|$ 分别平移至斜边两端点 $A$ 与 $B$，两圆各自与泰勒斯圆 $\\text{circle}(M, A)$ 交于两点，给出全部四个直角三角形。",
          "steps": [
            "[[perpBisector(A, B)]] 平分 [[seg(A, B)]] 于 [[M]] 定出泰勒斯圆 [[circle(M, A)]]。[[compass(C, D; A)]] 交 [[circle(M, A)]] 于 [[V₁]] 与 [[V₂]]（$|A V_1| = |A V_2| = |CD|$），分别连 [[line(A, V₁)]]、[[line(B, V₁)]] 与 [[line(A, V₂)]]、[[line(B, V₂)]]。",
            "同理，[[compass(C, D; B)]] 交 [[circle(M, A)]] 于 [[V₄]] 与 [[V₃]]（$|B V_4| = |B V_3| = |CD|$），分别连 [[line(A, V₄)]]、[[line(B, V₄)]] 与 [[line(A, V₃)]]、[[line(B, V₃)]]。"
          ],
          "variantNote": "只要 $|AB| \\ne \\sqrt{2}\\,|CD|$（非等腰直角三角形），满足 $|AV| = |CD|$ 的两个直角顶点与满足 $|BV| = |CD|$ 的两个直角顶点互不重合，共得 4 个不同解。"
        }
      }
    }
  },
  "Mu/L10": {
    "title": "已知切点作圆外切等腰三角形",
    "prompt": "求作已知圆的一个外切等腰三角形，使其边经过圆上给定的两个点。",
    "solutions": {
      "l-5L-11E": {
        "variantLabels": {
          "1": "外切等腰三角形"
        },
        "proof": {
          "keyIdea": "过圆上两点 $A, B$ 外切于 $\\text{circle}(O, A)$（使其为内切圆）的三角形为等腰三角形，当且仅当第三个切点 $C$ 使 $\\triangle ABC$ 为锐角等腰三角形；取优弧 $AB$ 中点 $D$ 可直接以 $\\text{perpBisector}(A, B)$ 为对称轴。",
          "steps": [
            "因 $A, B \\in$ [[circle(O, A)]] 满足 $|OA| = |OB|$，故 [[perpBisector(A, B)]] 过圆心 [[O]] 并交 [[circle(O, A)]] 的优弧 $AB$ 于中点 [[D]]，构成锐角等腰 $\\triangle ABD$（$|DA| = |DB|$，$\\angle ADB = \\frac{1}{2}\\angle AOB < 90^\\circ$）。",
            "连 [[line(O, A)]] 并作 [[perp(line(O, A), A)]] 得 [[A]] 处的切线，它交对称轴 [[perpBisector(A, B)]] 于顶角顶点 [[V_AB]]。由关于 [[perpBisector(A, B)]] 的反射对称性，[[line(B, V_AB)]] 自动与 [[circle(O, A)]] 相切于 [[B]]。",
            "因半径 $OD$ 位于 [[perpBisector(A, B)]] 上，故过 [[D]] 的垂线 [[perp(m₁, D)]] 与 [[circle(O, A)]] 相切于 [[D]] 且垂直于对称轴，截两条等腰切线于底角顶点 [[V_B]] 与 [[P₁]]。"
          ]
        }
      },
      "e-7L-7E": {
        "variantLabels": {
          "1": "外切等腰三角形"
        },
        "proof": {
          "keyIdea": "用 $\\text{circle}(A', B)$ 将 $B$ 关于直径 $AA'$ 对称，得锐角等腰切点三角形 $\\triangle A B C_2$（$|AB| = |A C_2|$），同时复用求 $A$ 处切线的泰勒斯辅助线一步作出 $C_2$ 处切线，仅耗 $7E$。",
          "steps": [
            "[[line(O, A)]] 交 [[circle(O, A)]] 于对径点 [[A']]。作 [[circle(B, A)]] 交 [[line(O, A)]] 于 [[P₅]]，连 [[line(B, P₅)]] 交 [[circle(B, A)]] 于对径点 [[P₇]]；由 [[circle(B, A)]] 直径 $P_5 P_7$ 上的泰勒斯定理，[[line(A, P₇)]] $\\perp OA$，即为过 [[A]] 的切线。",
            "作 [[circle(A', B)]] 将 [[B]] 关于连心线 [[line(O, A)]] 对称至 [[circle(O, A)]] 上的 [[C₂]]（因 $\\angle AOB > 90^\\circ$，$\\triangle A B C_2$ 为锐角三角形），同时交 [[line(B, P₅)]] 于 [[P₁₁]]。因 [[B]] 在 [[line(O, A)]] 上的垂足同时平分 $B C_2$ 与弦 $A P_5$（$|BA| = |B P_5|$），知 $A B P_5 C_2$ 为平行四边形（$B P_5 \\parallel A C_2$）；又直径 $AA'$ 上有 $\\angle A C_2 A' = 90^\\circ$，故 $A' C_2 \\perp$ [[line(B, P₅)]]，即 [[P₁₁]] 为 [[B]] 在 [[circle(A', B)]] 上关于 $A' C_2$ 的对称点。",
            "设 $\\alpha = \\angle O A' C_2 = \\angle O A' B$，则 $\\angle C_2 A' P_{11} = \\angle B A' C_2 = 2\\alpha$，等腰 $\\triangle A' C_2 P_{11}$ 给出 $\\angle A' C_2 P_{11} = 90^\\circ - \\alpha$，而等腰 $\\triangle O A' C_2$ 给出 $\\angle O C_2 A' = \\alpha$。因 [[O]] 与 [[P₁₁]] 分居 $A' C_2$ 两侧，故 $\\angle O C_2 P_{11} = \\alpha + (90^\\circ - \\alpha) = 90^\\circ$，[[line(C₂, P₁₁)]] 相切于 [[C₂]] 并交对称轴 [[line(O, A)]] 于顶点 [[V₂]]；由关于 [[line(O, A)]] 的对称性，[[line(B, V₂)]] 相切于 [[B]]，它与 [[line(A, P₇)]] 交于 [[V_AB]]，而 [[line(A, P₇)]] 与 [[line(C₂, P₁₁)]] 交于 [[P₁]]。"
          ]
        }
      },
      "v-9L-15E-3V": {
        "variantLabels": {
          "1": "外切等腰三角形 (₁)",
          "2": "外切等腰三角形 (₂)",
          "3": "外切等腰三角形 (₃)"
        },
        "proof": {
          "keyIdea": "当钝角 $\\angle AOB \\ne 120^\\circ$ 时，$\\text{circle}(O, A)$ 上存在三个锐角等腰切点三角形（对称轴分别为 $\\text{perpBisector}(A, B)$、$OA$ 与 $OB$）；作出第一个外切三角形后，仅添一圆 $\\text{circle}(O, V_{AB})$ 即可将 $V_{AB}$ 同时关于 $OA$ 与 $OB$ 对称，以 $+4L, +4E$ 补全其余两解。",
          "steps": [
            "同 $5L$ 解法，依次作 [[perpBisector(A, B)]]、[[line(O, A)]]、切线 $L_A =$ [[perp(line(O, A), A)]]、切线 $L_B =$ [[line(B, V_AB)]] 及底边切线 [[perp(m₁, D)]]，作出关于 [[perpBisector(A, B)]] 对称的第一个外切等腰三角形 $\\triangle V_{AB} V_B P_1$。",
            "对于关于 [[line(O, A)]] 对称的第二解（切点 $C_2$ 为 [[B]] 关于 [[line(O, A)]] 的对称点），切线 $L_B =$ [[line(B, V_AB)]] 交对称轴 [[line(O, A)]] 于顶角顶点 [[V₂]]。因 $L_A \\perp$ [[line(O, A)]]，圆 [[circle(O, V_AB)]] 将切线交点 [[V_AB]] $\\in L_A \\cap L_B$ 关于 [[line(O, A)]] 对称至 $L_A$ 上的 [[R₂]]，故连 [[line(V₂, R₂)]] 即得第三条切线 $L_{C_2}$，围成 $\\triangle V_{AB} R_2 V_2$。",
            "对称地，对于关于 [[line(O, B)]] 对称的第三解，[[line(O, B)]] 交 $L_A$ 于顶角顶点 [[V₃]]，且由 $L_B \\perp$ [[line(O, B)]] 知同一圆 [[circle(O, V_AB)]] 亦将 [[V_AB]] 关于 [[line(O, B)]] 对称至 $L_B$ 上的 [[R₃]]；连 [[line(R₃, V₃)]] 即得切线 $L_{C_3}$，围成 $\\triangle V_{AB} R_3 V_3$。"
          ],
          "variantNote": "条件 $\\angle AOB > 90^\\circ$ 保证了将 $B$ 关于 $OA$ 对称及将 $A$ 关于 $OB$ 对称所得切点三角形均为锐角三角形（使 $\\text{circle}(O, A)$ 成为内切圆而非旁切圆），且 $\\angle AOB \\ne 120^\\circ$ 保证三个解互不退化重合为同一个正三角形。"
        }
      }
    }
  }
};
