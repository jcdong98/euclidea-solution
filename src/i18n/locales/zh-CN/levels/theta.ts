import type { LevelLocaleEntry } from '../../../types';

export const THETA_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Theta/L1": {
    "title": "周长平分线",
    "prompt": "过三角形的一个顶点作一条直线，平分该三角形的周长。",
    "solutions": {
      "l-4L-10E": {
        "variantLabels": {
          "1": "周长平分线"
        },
        "proof": {
          "keyIdea": "在较长邻边 $AC$ 上截去较短邻边 $|AB|$，将两邻边之差从 $B$ 移至底边 $BC$ 上，再平分剩余线段，使从 $A$ 出发的两条边界折线等长。",
          "steps": [
            "作 [[circle(A, B)]] 交 [[seg(C, A)]] 于 [[D]]，则 $|AD| = |AB|$，余下 $|CD| = |AC| - |AB|$；再用圆规工具 [[compass(C, D; B)]] 将该半径移至圆心 [[B]]，在 [[seg(B, C)]] 上截得 [[E]]，使 $|BE| = |AC| - |AB|$。",
            "作 [[perpBisector(C, E)]] 交 [[seg(B, C)]] 于 $CE$ 的中点 [[M]]，则 $|EM| = |MC|$。沿边 $BC$ 按顺序 $B$–$E$–$M$–$C$ 有 $|AB| + |BM| = |AB| + |BE| + |EM| = |AC| + |MC|$，故 [[line(A, M)]] 平分 $\\triangle ABC$ 的周长。"
          ]
        }
      },
      "e-7L-7E": {
        "variantLabels": {
          "1": "周长平分线"
        },
        "proof": {
          "keyIdea": "将两邻边 $CA$ 与 $BA$ 向外展开到直线 $BC$ 上，使总线段 $P_2 P_1$ 的长度等于 $\\triangle ABC$ 的周长，再平分 $P_2 P_1$。",
          "steps": [
            "延长 [[seg(B, C)]] 得直线 [[line(B, C)]]。分别作 [[circle(C, A)]] 与 [[circle(B, A)]]，将两邻边沿 [[line(B, C)]] 向外展开至 [[C]] 外侧的 [[P₁]]（$|CP_1| = |CA|$）与 [[B]] 外侧的 [[P₂]]（$|P_2 B| = |AB|$），于是 $|P_2 P_1| = |AB| + |BC| + |CA|$。",
            "对称等圆 [[circle(P₁, P₂)]] 与 [[circle(P₂, P₁)]] 交于 [[G]]、[[H]]，故 [[line(G, H)]] 为 $P_1 P_2$ 的垂直平分线，交 [[line(B, C)]] 于中点 [[M]]。",
            "由三角形不等式知 $|P_2 B| = |AB| < |P_2 M|$ 且 $|CP_1| = |CA| < |MP_1|$，故 [[M]] 严格落在线段 $BC$ 内部，且 $|AB| + |BM| = |P_2 M| = |MP_1| = |MC| + |CA|$，因此 [[line(A, M)]] 平分三角形周长。"
          ]
        }
      },
      "v-15L-21E-3V": {
        "variantLabels": {
          "1": "周长平分线 (₁)",
          "2": "周长平分线 (₂)",
          "3": "周长平分线 (₃)"
        },
        "proof": {
          "steps": [
            "在 [[line(B, C)]] 上由 [[circle(C, A)]] 与 [[circle(B, A)]] 将边 $CA$、$BA$ 向外展开得 [[P₁_A]] 与 [[P₂_A]]，作 [[perpBisector(P₁_A, P₂_A)]] 交 [[line(B, C)]] 于分界点 [[M_A]]，连 [[line(A, M_A)]] 即得过顶点 [[A]] 的周长平分线。",
            "同理在 [[line(C, A)]] 上（经 [[P₁_B]]、[[P₂_B]] 得 [[M_B]]）与 [[line(A, B)]] 上（经 [[P₁_C]]、[[P₂_C]] 得 [[M_C]]）轮换执行向外展开作图，即得另外两条过顶点的周长平分线 [[line(B, M_B)]] 与 [[line(C, M_C)]]。"
          ],
          "variantNote": "任意非退化三角形恰有三条分别过顶点 [[A]]、[[B]]、[[C]] 的周长平分线（分界线），三线共点于奈格尔点（Nagel 点）。"
        }
      }
    }
  },
  "Theta/L2": {
    "title": "三等分 54° 角",
    "prompt": "作两条射线，将给定的 54° 角三等分。",
    "solutions": {
      "l-4L-7E": {
        "variantLabels": {
          "1": "三等分线"
        },
        "proof": {
          "keyIdea": "在角内跨两边构造 $54^\\circ$–$54^\\circ$–$72^\\circ$ 等腰三角形，再将顶点对称翻折造出 $144^\\circ$ 顶角，从而分离出 $18^\\circ$ 底角，最后平分剩余的 $36^\\circ$ 角。",
          "steps": [
            "在 [[ray(A, C)]] 上取点 [[P]]（$P \\neq A$），作 [[circle(P, A)]] 交 [[ray(A, B)]] 于另一点 [[Q]]，得等腰 $\\triangle PAQ$（$|PA| = |PQ|$），其底角 $\\angle PAQ = \\angle PQA = 54^\\circ$，顶角 $\\angle APQ = 72^\\circ$。",
            "作 [[circle(Q, A)]] 与 [[circle(P, A)]] 交于另一点 [[X]]，即 [[A]] 关于直线 $PQ$ 的对称点。于是 $|PX| = |PA|$ 且 $\\angle APX = 2\\angle APQ = 144^\\circ$，等腰 $\\triangle PAX$ 的底角 $\\angle PAX = \\frac{180^\\circ - 144^\\circ}{2} = 18^\\circ$ 落在 $\\angle BAC$ 内部。",
            "因此 [[line(A, X)]] 将 $\\angle BAC = 54^\\circ$ 分为 $\\angle CAX = 18^\\circ$ 与 $\\angle BAX = 36^\\circ$，再作 [[angleBisector(Q, A, X)]] 平分 $\\angle QAX = 36^\\circ$，即得三个 $18^\\circ$ 等角。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "三等分线"
        },
        "proof": {
          "keyIdea": "复用第二个圆在初始射线上截出对称的 $54^\\circ$–$54^\\circ$–$72^\\circ$ 等腰三角形，仅再添一圆即可代替角平分线宏工具作出第二条 $18^\\circ$ 三等分线。",
          "steps": [
            "在 [[ray(A, C)]] 上取 [[P]]，由 [[circle(P, A)]] 截 [[ray(A, B)]] 于 [[Q]]（$\\angle APQ = 72^\\circ$），再作 [[circle(Q, A)]] 将 [[A]] 关于 $PQ$ 对称至 [[X]]（$\\angle PAX = 18^\\circ$），连 [[line(A, X)]] 得第一条三等分线。",
            "同一个 [[circle(Q, A)]] 又交 [[ray(A, C)]] 于另一点 [[T]]，构成对称的 $54^\\circ$–$54^\\circ$–$72^\\circ$ 等腰三角形 $\\triangle QAT$（$|QA| = |QT|$，$\\angle AQT = 72^\\circ$）。",
            "作 [[circle(T, A)]] 交 [[circle(Q, A)]] 于另一点 [[Y]]（即 [[A]] 关于 $QT$ 的对称点），在顶角 $\\angle AQY = 144^\\circ$ 的等腰 $\\triangle QAY$ 中有 $\\angle QAY = 18^\\circ$。故 [[line(A, Y)]] 与 [[line(A, X)]] 将 $54^\\circ$ 角三等分为三个 $18^\\circ$ 角。"
          ]
        }
      }
    }
  },
  "Theta/L3": {
    "title": "相等内角",
    "prompt": "过已知点作一条直线与两条已知直线相交，使其与两直线所成的内角相等。",
    "solutions": {
      "l-2L-7E": {
        "variantLabels": {
          "1": "等角截线"
        },
        "proof": {
          "steps": [
            "设截线交 [[l₁]]、[[l₂]] 于异于交点 [[O]] 的 $X, Y$ 两点，则内角相等（$\\angle OXY = \\angle OYX$）当且仅当 $\\triangle OXY$ 为等腰三角形（$|OX| = |OY|$），即截线垂直于 [[l₁]] 与 [[l₂]] 的某条角平分线。",
            "在 [[l₁]]、[[l₂]] 上分别取异于 [[O]] 的点 [[Q₁]]、[[Q₂]]，作角平分线 [[angleBisector(Q₁, O, Q₂)]]，再过 [[P]] 作垂线 [[perp(b₁, P)]]，即得与 [[l₁]]、[[l₂]] 成等内角的截线。"
          ]
        }
      },
      "e-4L-4E": {
        "variantLabels": {
          "1": "等角截线"
        },
        "proof": {
          "keyIdea": "在两直线上截取等长线段 $|OQ| = |OR|$，使弦 $QR$ 天然平行于一条角平分线；无需连出 $QR$，直接将点 $P$ 关于 $QR$ 对称即可。",
          "steps": [
            "记 [[O]] 为 [[l₁]] 与 [[l₂]] 的交点，在 [[l₁]] 上取点 [[Q]]（$Q \\neq O$），作 [[circle(O, Q)]] 交 [[l₂]] 于 [[R]]。由 $|OQ| = |OR|$ 知等腰 $\\triangle OQR$ 的底边 $QR$ 垂直于 $\\angle QOR$ 的内角平分线，因而平行于 [[l₁]] 与 [[l₂]] 的邻补角平分线。",
            "分别作 [[circle(Q, P)]] 与 [[circle(R, P)]] 将 [[P]] 关于直线 $QR$ 对称至 [[P']]，则 [[line(P, P')]] $\\perp QR$。由于 [[line(P, P')]] 垂直于 [[l₁]]、[[l₂]] 的一条角平分线，它在两直线上截得与 [[O]] 等距的交点，所成内角相等。"
          ]
        }
      },
      "v-3L-10E-2V": {
        "variantLabels": {
          "1": "等角截线 (₁)",
          "2": "等角截线 (₂)"
        },
        "proof": {
          "steps": [
            "标出 [[l₁]] 与 [[l₂]] 的交点 [[O]]，分别取点 [[Q₁]]、[[Q₂]]，作 [[angleBisector(Q₁, O, Q₂)]] 并过 [[P]] 作垂线 [[perp(b₁, P)]]，得到垂直于该角平分线的第一条截线。",
            "因为相交直线 [[l₁]]、[[l₂]] 的两条角平分线互相垂直，过 [[P]] 再作 [[perp(perp(b₁, P), P)]] 即垂直于第二条角平分线，从而给出第二条等内角截线。"
          ],
          "variantNote": "只要 [[P]] 不落在 [[l₁]] 与 [[l₂]] 的任一条角平分线上，过 [[P]] 的这两条正交直线均在 [[O]] 之外与 [[l₁]]、[[l₂]] 相交，给出全部两条有效截线。"
        }
      }
    }
  },
  "Theta/L4": {
    "title": "正八边形",
    "prompt": "以给定线段为一边作正八边形。",
    "solutions": {
      "l-9L-29E": {
        "variantLabels": {
          "1": "正八边形"
        },
        "proof": {
          "keyIdea": "利用关于对角线 $BF$ 的轴对称性以及四角处的等腰直角三角形，仅用线性宏工具（零个圆）作出其余七条边所在直线。",
          "steps": [
            "作垂线 [[perp(seg(A, B), A)]]（正八边形 $ABCDEFGH$ 中 $AF \\perp AB$，故此即直线 $AF$），在其外侧射线上取 [[Q₁]]，作 [[angleBisector(Q₁, A, B)]] 得与 [[seg(A, B)]] 成 $135^\\circ$ 角的边直线 $HA$；再过 [[B]] 作 [[perp(b₁, B)]]（$\\perp HA$），得与 $AB$ 成 $45^\\circ$ 方向的边直线 $BC$。",
            "在 [[perp(b₁, B)]] 的射线 $BC$ 上取 [[Q₂]]，作 [[angleBisector(A, B, Q₂)]] 平分 $\\angle ABC = 135^\\circ$，此即正八边形的对称轴 $BF$：它交 [[perp(seg(A, B), A)]] 于顶点 [[F]]，并交边直线 $HA$（即 [[angleBisector(Q₁, A, B)]]）于 [[P_R]]。由关于 $BF$ 的对称性（$A \\leftrightarrow C$，$HA \\leftrightarrow CD$）知 [[P_R]] 亦在边直线 $CD$ 上，故 [[perp(seg(A, B), P_R)]] 即为边直线 $CD$。",
            "过顶点 [[F]] 作 [[perp(b₁, F)]]（$\\perp HA$）得边直线 $FG$，作 [[perp(h₁, F)]]（$\\perp AF$）得顶边直线 $EF$，后者分别交 $BC$、$HA$ 于 [[Z_R]] 与 [[Z_L]]。",
            "因 $BE \\perp EF$，且 $BZ_R$ 与 $EF$ 成 $45^\\circ$ 角、$|EF| = |AB|$，故 $\\triangle BEZ_R$ 为以 [[E]] 为直角的等腰直角三角形，[[perpBisector(B, Z_R)]] 即为边直线 $DE$ 并交 [[perp(h₁, F)]] 于 [[E]]。同理沿 $EF$ 有 $|FZ_L| = |FA| = (1 + \\sqrt{2})|AB|$，$EZ_L$ 的中点恰位于 $AF$ 外侧距离 $\\frac{\\sqrt{2}}{2}|AB|$ 处，故 [[perpBisector(E, Z_L)]] 即为边直线 $GH$；各相邻边直线相交即定出顶点 [[C]]、[[D]]、[[G]]、[[H]]。"
          ]
        }
      },
      "e-13L-13E": {
        "variantLabels": {
          "1": "正八边形"
        },
        "proof": {
          "keyIdea": "边长为 $|AB|$ 的正八边形可由两个相差 $45^\\circ$ 的外接正方形截成，而这两个外接正方形共用以正八边形中心为圆心、半径为 $(1 + \\frac{\\sqrt{2}}{2})|AB|$ 的外接圆。",
          "steps": [
            "等圆 [[circle(A, B)]] 与 [[circle(B, A)]] 交于 [[P₁]]、[[P₂]]，连 [[line(P₁, P₂)]] 得 [[seg(A, B)]] 的中垂线及中点 [[M]]。直径圆 [[circle(M, A)]] 交 [[line(P₁, P₂)]] 于 [[K₂]]，构成等腰直角 $\\triangle AK_2 B$（$\\angle AK_2 B = 90^\\circ$，$|K_2 A| = |K_2 B| = \\frac{\\sqrt{2}}{2}|AB|$），故 [[line(A, K₂)]] 与 [[line(B, K₂)]] 即为 $135^\\circ$ 边直线 $HA$ 与 $BC$，分别交两初始等圆于顶点 [[H]] 与 [[C]]。",
            "作 [[circle(K₂, H)]]（半径为 $(1 + \\frac{\\sqrt{2}}{2})|AB|$，亦过点 [[C]]），分别交 [[line(A, K₂)]]、[[line(B, K₂)]] 及 [[line(P₁, P₂)]] 于 [[I]]、[[J]] 与正八边形中心 [[O_oct]]。因 $HI$ 与 $CJ$ 为 [[circle(K₂, H)]] 的两条正交直径，$\\triangle IK_2 C$ 与 $\\triangle HK_2 J$ 均为等腰直角三角形，故 [[line(C, I)]] 与 [[line(H, J)]] 即为竖直边直线 $CD$ 与 $GH$。",
            "正八边形的两个 $45^\\circ$ 旋转外接正方形的外接圆半径均为 $(1 + \\frac{\\sqrt{2}}{2})|AB| = |O_{\\text{oct}} K_2|$，故 [[circle(O_oct, K₂)]] 即为二者的公共外接圆。在斜置外接正方形上，[[W_T]] 为 [[K₂]] 的对径点，[[W_L]]、[[W_R]] 分别位于 $HA$、$BC$ 上，连 [[line(W_L, W_T)]] 与 [[line(W_R, W_T)]] 即得边直线 $FG$ 与 $DE$。",
            "在正置外接正方形上，[[circle(O_oct, K₂)]] 交竖直边直线 [[line(H, J)]]、[[line(C, I)]] 于上侧两顶点 [[V_TL]] 与 [[V_TR]]，连 [[line(V_TL, V_TR)]] 即得顶边直线 $EF$，相邻边直线相交即得 [[G]]、[[F]]、[[E]]、[[D]]。"
          ]
        }
      },
      "v-24L-24E-2V": {
        "variantLabels": {
          "1": "正八边形 (₁)",
          "2": "正八边形 (₂)"
        },
        "proof": {
          "steps": [
            "共用过 [[P₁]]、[[P₂]] 的初始等圆 [[circle(A, B)]] 与 [[circle(B, A)]]，先沿定向中垂线 [[line(P₁, P₂)]] 作出直角顶点 [[K₂]]、正八边形中心 [[O_oct]] 与公共外接圆 [[circle(O_oct, K₂)]]，在 [[seg(A, B)]] 一侧完成正八边形 $ABCDEFGH$。",
            "再取反向中垂线 [[line(P₂, P₁)]]，经 [[M']]、[[K₂']]、中心 [[P₃]] 与 [[circle(P₃, K₂')]] 将上述作图关于 [[seg(A, B)]] 镜像对称，依次作出斜边与顶边直线 [[line(W_L', W_T')]]、[[line(W_R', W_T')]] 及 [[line(V_TL', V_TR')]]，在另一半平面得到对称的正八边形。"
          ],
          "variantNote": "给定一边 [[seg(A, B)]] 可唯一确定两个全等的正八边形，二者关于直线 $AB$ 轴对称。"
        }
      }
    }
  },
  "Theta/L5": {
    "title": "三角形劈线",
    "prompt": "过三角形一边的中点作一条直线，平分该三角形的周长。",
    "solutions": {
      "l-3L-11E": {
        "variantLabels": {
          "1": "劈线"
        },
        "proof": {
          "keyIdea": "过边 $BC$ 的中点且平行于对角 $\\angle BAC$ 内角平分线的直线，恰好在较长邻边中点处截出两邻边之差的一半 $\\frac{1}{2}||AC| - |AB||$，从而使两侧边界路径等长。",
          "steps": [
            "作 [[perpBisector(B, C)]] 求得 [[seg(B, C)]] 的中点 [[M_A]]，再作角平分线 [[angleBisector(B, A, C)]]，并过 [[M_A]] 作平行线 [[parallel(b₁, M_A)]]。",
            "不妨设 $|AB| \\le |AC|$，记 $AC$ 的中点为 $N$（则中位线 $M_A N \\parallel AB$ 满足 $|M_A N| = \\frac{1}{2}|AB|$ 且 $\\angle ANM_A = 180^\\circ - \\angle BAC$），设 [[parallel(b₁, M_A)]] 交 $AC$ 于 $D$。由其平行于 [[angleBisector(B, A, C)]] 知 $\\angle NDM_A = \\frac{1}{2}\\angle BAC$，故 $\\triangle M_A ND$ 为等腰三角形，$|ND| = |M_A N| = \\frac{1}{2}|AB|$。",
            "于是 $|CD| - |AD| = (|CN| + |ND|) - (|AN| - |ND|) = 2|ND| = |AB|$；结合 $|M_A C| = |M_A B|$ 即得 $|M_A C| + |CD| = |M_A B| + |BA| + |AD|$，故该直线平分周长。"
          ]
        }
      },
      "e-7L-7E": {
        "variantLabels": {
          "1": "劈线"
        },
        "proof": {
          "keyIdea": "在 $AC$ 上截取 $|AV'| = |AB|$，使弦 $BV'$ 垂直于 $\\angle BAC$ 的内角平分线；无需连出 $BV'$，直接将 $BC$ 的中点 $M$ 关于 $BV'$ 对称即可。",
          "steps": [
            "作 [[circle(A, B)]] 交 [[seg(C, A)]] 于 [[V']]（$|AV'| = |AB|$），则等腰 $\\triangle ABV'$ 的底边 $BV'$ 垂直于 $\\angle BAC$ 的内角平分线。",
            "对称等圆 [[circle(B, C)]] 与 [[circle(C, B)]] 交于 [[G₁]]、[[G₂]]，连 [[line(G₁, G₂)]] 交 [[seg(B, C)]] 于其中点 [[M]]。",
            "作 [[circle(B, M)]] 与 [[circle(V', M)]] 将 [[M]] 关于直线 $BV'$ 对称至 [[M']]，则 [[line(M, M')]] $\\perp BV'$。因 [[line(M, M')]] 与 $\\angle BAC$ 的内角平分线均垂直于 $BV'$，故 [[line(M, M')]] 过中点 [[M]] 且平行于该角平分线，即为平分周长的劈线。"
          ]
        }
      },
      "v-9L-33E-3V": {
        "variantLabels": {
          "1": "劈线 (₁)",
          "2": "劈线 (₂)",
          "3": "劈线 (₃)"
        },
        "proof": {
          "steps": [
            "作 [[perpBisector(B, C)]]、[[angleBisector(B, A, C)]] 并过中点 [[M_A]] 作 [[parallel(b₁, M_A)]]，得到对应于边 [[seg(B, C)]] 的劈线。",
            "对边 [[seg(C, A)]]（经 [[M_B]]、[[angleBisector(C, B, A)]] 作 [[parallel(b₂, M_B)]]）与边 [[seg(A, B)]]（经 [[M_C]]、[[angleBisector(A, C, B)]] 作 [[parallel(b₃, M_C)]]）轮换执行同样的三步宏作图，即得全部三条过边中点的周长平分线。"
          ],
          "variantNote": "任意非退化三角形恰有三条分别过三边中点 [[M_A]]、[[M_B]]、[[M_C]] 的劈线，三线共点于斯皮克心（Spieker 心）。"
        }
      }
    }
  },
  "Theta/L6": {
    "title": "托里拆利点",
    "prompt": "求作一点，使三角形每条边对该点所张的角均为 120° 或 60°。",
    "solutions": {
      "l-4L-6E": {
        "variantLabels": {
          "1": "等角中心 T"
        },
        "proof": {
          "keyIdea": "无需作出外接圆圆心，利用圆 $(A, B)$ 上割线弦的轴对称性，直接求得费马连线 $C_1 C$ 与正三角形 $\\triangle ABC_1$ 外接圆的交点。",
          "steps": [
            "等圆 [[circle(A, B)]] 与 [[circle(B, A)]] 交于 [[C₁]]，构成正 $\\triangle ABC_1$。连 [[line(C₁, C)]] 交 [[circle(A, B)]] 于另一点 [[P₁]]，再作 [[perpBisector(B, P₁)]] 交 [[line(C₁, C)]] 于 [[T₁]]。",
            "因 $B, C_1, P_1$ 均在 [[circle(A, B)]] 上，有 $|AB| = |AC_1| = |AP_1|$，故 [[A]] 位于 [[perpBisector(B, P₁)]] 上。关于 [[perpBisector(B, P₁)]]（即直线 $AT_1$）作反射互换 $B \\leftrightarrow P_1$，得有向角 $\\measuredangle(AB, BT_1) = \\measuredangle(P_1 T_1, AP_1) = \\measuredangle(C_1 P_1, AP_1)$；又由等腰 $\\triangle AC_1 P_1$ 知 $\\measuredangle(C_1 P_1, AP_1) = \\measuredangle(AC_1, C_1 P_1) = \\measuredangle(AC_1, C_1 T_1)$，故 $A, B, C_1, T_1$ 四点共圆。",
            "在正 $\\triangle ABC_1$ 的外接圆上，三条直线 $T_1 A$、$T_1 B$、$T_1 C_1$ 在 [[T₁]] 处两两成 $60^\\circ$ 角。因 [[C]] 在 [[line(C₁, C)]] $= T_1 C_1$ 上，直线 $T_1 C$ 与 $T_1 C_1$ 重合，故 $\\triangle ABC$ 的每条边对 [[T₁]] 所张角均为 $60^\\circ$ 或 $120^\\circ$。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "等角中心 T"
        },
        "proof": {
          "keyIdea": "复用已作出的等圆 $(A, B)$ 并添一圆 $(P_1, B)$ 补全菱形 $BARP_1$，仅用 $2E$（代替 $3E$ 宏工具）作出弦 $AP_1$ 的垂直平分线。",
          "steps": [
            "作 [[circle(B, A)]] 与 [[circle(A, B)]] 交于正三角形顶点 [[C₁]]，连 [[line(C₁, C)]] 交 [[circle(B, A)]] 于另一点 [[P₁]]（$|BA| = |BC_1| = |BP_1|$）。",
            "作 [[circle(P₁, B)]] 与已有的 [[circle(A, B)]] 交于另一点 [[R]]。由 $|BA| = |BP_1| = |AR| = |P_1 R| = |AB|$ 知四边形 $BARP_1$ 为菱形，其对角线 [[line(B, R)]] 即为弦 $AP_1$ 的垂直平分线。",
            "与 $4L$ 证法相同，关于 [[line(B, R)]] $= BT_1$ 的反射互换 $A \\leftrightarrow P_1$，使交点 [[T₁]]（[[line(C₁, C)]] $\\cap$ [[line(B, R)]]）落在正 $\\triangle ABC_1$ 的外接圆上，从而 $T_1 A$、$T_1 B$ 与 $T_1 C = T_1 C_1$ 两两成 $60^\\circ$ 角。"
          ]
        }
      },
      "v-6L-10E-2V": {
        "variantLabels": {
          "1": "等角中心 T (₁)",
          "2": "等角中心 T (₂)"
        },
        "proof": {
          "steps": [
            "共用等圆 [[circle(A, B)]] 与 [[circle(B, A)]]，取外侧正三角形顶点 [[C₁]] 连割线 [[line(C₁, C)]] 交 [[circle(A, B)]] 于 [[P₁]]，再以 [[perpBisector(B, P₁)]] 交 [[line(C₁, C)]] 得第一等角中心 [[T₁]]。",
            "取 [[circle(B, A)]] 与 [[circle(A, B)]] 的另一交点 [[C₂]] 在 $AB$ 内侧作正三角形，连 [[line(C₂, C)]] 交 [[circle(B, A)]] 于 [[P₂]]，并与 [[perpBisector(A, P₂)]] 相交，即得第二等角中心 [[P₃]]。"
          ],
          "variantNote": "对任意不含 $60^\\circ$ 或 $120^\\circ$ 内角的三角形，向外与向内所作正三角形分别给出两个互异的托里拆利点 / 等角中心（即费马点 $X_{13}$ 与 $X_{14}$）。"
        }
      }
    }
  },
  "Theta/L7": {
    "title": "与四点等距的圆",
    "prompt": "作一个与给定四点等距的圆，且恰有两个已知点位于圆内。",
    "solutions": {
      "le-6L-12E": {
        "variantLabels": {
          "1": "等距圆"
        },
        "proof": {
          "keyIdea": "将四点分为圆内两点与圆外两点：圆心必同时位于这两对点各自的垂直平分线上，而半径恰为圆内、圆外两点到圆心距离的算术平均数。",
          "steps": [
            "若 [[A]]、[[B]] 位于圆 $(O, R)$ 内部而 [[C]]、[[D]] 位于圆外，则四点到圆周等距等价于 $R - |OA| = R - |OB| = |OC| - R = |OD| - R > 0$，即 $|OA| = |OB|$、$|OC| = |OD|$ 且 $R = \\frac{|OA| + |OC|}{2}$。",
            "作 [[perpBisector(A, B)]] 与 [[perpBisector(C, D)]] 相交，唯一确定圆心 [[P₁]]。连 [[line(P₁, A)]] 并作 [[circle(P₁, C)]]，在过 [[P₁]]、[[A]] 的射线上截得 [[P₂]]，使 $|P_1 P_2| = |P_1 C|$。",
            "作 [[perpBisector(A, P₂)]] 交 [[line(P₁, A)]] 于 $AP_2$ 的中点 [[P₃]]，它到 [[P₁]] 的距离恰为 $\\frac{|P_1 A| + |P_1 C|}{2}$。故 [[circle(P₁, P₃)]] 将 $\\{A, B\\}$ 与 $\\{C, D\\}$ 内外分隔（一对在圆内、一对在圆外），且四点到圆周的距离均为 $\\frac{||P_1 C| - |P_1 A||}{2}$。"
          ]
        }
      },
      "v-18L-36E-3V": {
        "variantLabels": {
          "1": "等距圆 (₁)",
          "2": "等距圆 (₂)",
          "3": "等距圆 (₃)"
        },
        "proof": {
          "steps": [
            "按二二分划 $\\{\\{A, B\\}, \\{C, D\\}\\}$，由 [[perpBisector(A, B)]] 与 [[perpBisector(C, D)]] 的交点定出圆心 [[P₁]]，再经 [[P₂]]、[[P₃]] 取 $|P_1 A|$ 与 $|P_1 C|$ 的均值作为半径作出 [[circle(P₁, P₃)]]。",
            "对其余两种 $2 + 2$ 分划——$\\{\\{A, C\\}, \\{B, D\\}\\}$（圆心 [[P₄]]、等距点 [[P₅]]、中点 [[P₆]]、圆 [[circle(P₄, P₆)]]）与 $\\{\\{A, D\\}, \\{B, C\\}\\}$（圆心 [[P₇]]、等距点 [[P₈]]、中点 [[P₉]]、圆 [[circle(P₇, P₉)]]）重复同一作图，即得另外两个等距圆。"
          ],
          "variantNote": "当 $A, B, C, D$ 四点不共圆且任两组对边连线不平行时，三种 $2 + 2$ 配对恰好给出全部三个内部含两点的等距圆。"
        }
      }
    }
  }
};
