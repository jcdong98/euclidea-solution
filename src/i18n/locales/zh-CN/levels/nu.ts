import type { LevelLocaleEntry } from '../../../types';

export const NU_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Nu/L1": {
    "title": "与直线及圆相切的圆",
    "prompt": "求作一圆，使其在给定点处与已知直线相切，且与已知圆相切。",
    "solutions": {
      "l-4L-12E": {
        "variantLabels": {
          "1": "相切圆"
        },
        "proof": {
          "keyIdea": "沿直线 $l$ 的法线将切点 $A$ 平移 $\\text{circle}(O)$ 的半径 $r$ 至点 $D$，从而将两圆相切条件 $|CO| = ||CA| \\pm r|$ 化归为等距条件 $|CO| = |CD|$。",
          "steps": [
            "在 [[A]] 处与 [[l]] 相切的圆，其圆心 $C$ 必位于法线 [[perp(l, A)]] 上且半径为 $|CA|$；该圆与半径为 $r$ 的 [[circle(O)]] 相切当且仅当 $|CO| = |CA| + r$（外切）或 $|CO| = ||CA| - r|$（内切）。",
            "在 [[circle(O)]] 上任取 [[P]]（$r = |OP|$），以 [[compass(O, P; A)]] 交 [[perp(l, A)]] 得沿法线距 [[A]] 有向距离为 $\\pm r$ 的点 [[D]]，使 $|CD| = ||CA| \\pm r|$。再取 [[perpBisector(O, D)]] 与 [[perp(l, A)]] 的交点 [[C]]，即满足 $|CO| = |CD|$，故 [[circle(C, A)]] 同时与 [[l]] 及 [[circle(O)]] 相切。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "相切圆"
        },
        "proof": {
          "keyIdea": "构造一个在 $A$ 处与 $l$ 相切的辅助圆，利用根轴在 $l$ 上定出根心 $F$，再将等切线长 $|FT| = |FA|$ 转移至 $\\text{circle}(O)$ 上直接定出切点 $T$，全程仅用基本圆与直线。",
          "steps": [
            "任取辅助圆心 [[G]] 作 [[circle(G, A)]] 交 [[l]] 于 [[Q]]，连直径 [[line(Q, G)]] 再交 [[circle(G, A)]] 于 [[R']]。由泰勒斯定理知 [[line(A, R')]] $\\perp$ [[l]] 于 [[A]]，故 [[circle(R', A)]] 与 [[l]] 相切于 [[A]]。",
            "[[circle(R', A)]] 交 [[circle(O)]] 于 [[D]]、[[E]]，其根轴 [[line(D, E)]] 交 [[l]] 于根心 [[F]]，由圆幂定理知 $|FA|^2 = |FD|\\cdot|FE|$ 等于 [[F]] 对 [[circle(O)]] 的幂。因此 [[circle(F, A)]] 交 [[circle(O)]] 于切点 [[T]]，使 $FT$ 与 [[circle(O)]] 相切（$FT \\perp OT$）。",
            "在等腰 $\\triangle FAT$（$|FA| = |FT|$）中，$\\angle FAT = \\angle FTA$。因 [[line(A, R')]] $\\perp FA$ 且 [[line(O, T)]] $\\perp FT$，两法线交点 [[C]] 满足 $\\angle CAT = 90^\\circ - \\angle FAT = 90^\\circ - \\angle FTA = \\angle CTA$，即 $|CA| = |CT|$；故 [[circle(C, A)]] 过 [[T]] 且与 [[circle(O)]] 共法线 [[line(O, T)]]，同时与 [[l]] 和 [[circle(O)]] 相切。"
          ]
        }
      },
      "v-6L-16E-2V": {
        "variantLabels": {
          "1": "相切圆 (₁)",
          "2": "相切圆 (₂)"
        },
        "proof": {
          "keyIdea": "在法线 $\\text{perp}(l, A)$ 上同时取 $A$ 的正、负半径偏移点 $D_a, D_b$，即可作出与 $l$ 切于 $A$ 且与 $\\text{circle}(O)$ 相切的全部两个阿波罗尼斯相切圆。",
          "steps": [
            "在 [[circle(O)]] 上取 [[P]]（$r = |OP|$），移距圆 [[compass(O, P; A)]] 在法线 [[perp(l, A)]] 上截出距 [[A]] 为 $\\pm r$ 的两个偏移点 [[D_a]] 与 [[D_b]]。",
            "分别以 [[perpBisector(O, D_a)]]、[[perpBisector(O, D_b)]] 交 [[perp(l, A)]] 定出圆心 [[C_a]] 与 [[C_b]]（$|C_a O| = |C_a D_a|$，$|C_b O| = |C_b D_b|$），即作出全部两个相切圆 [[circle(C_a, A)]] 与 [[circle(C_b, A)]]。"
          ],
          "variantNote": "两个偏移点分别对应过 $A$ 法线上的外切与内切距离关系 $|CO| = |CA| + r$ 与 $|CO| = ||CA| - r|$。"
        }
      }
    }
  },
  "Nu/L2": {
    "title": "正三角形 - 2",
    "prompt": "以已知点为一个顶点作正三角形，使其余两个顶点分别位于两条已知平行线上。",
    "solutions": {
      "l-7L-11E": {
        "variantLabels": {
          "1": "正三角形 PQR"
        },
        "proof": {
          "keyIdea": "将 $P P_1$ 上的正三角形双圆与割线 $P_2 D_s$ 结合：利用直角三角形相似在 $l_1$ 上定出水平偏移，同时借助 $\\text{circle}(P_1, P)$ 上的 $30^\\circ$ 圆周角将边射线旋转 $60^\\circ$ 落到 $l_2$ 上。",
          "steps": [
            "公垂线 [[perp(l₁, P)]] 交 [[l₁]] 于 [[P₁]]（设至 [[P]] 的有向高为 $y_0$），交 [[l₂]] 于 [[P₂]]（设自 [[l₁]] 的有向间距为 $h$）。双圆 [[circle(P, P₁)]] $\\cap$ [[circle(P₁, P)]] 得 [[D_s]] 使 $\\triangle P P_1 D_s$ 为正三角形，其在 $P P_1$ 上的垂足 $M$ 高度为 $\\frac{1}{2}y_0$ 且 $|M D_s| = \\frac{\\sqrt{3}}{2}|y_0|$。",
            "连 [[line(P₂, D_s)]] 并过 [[P]] 作垂线 [[perp(line(P₂, D_s), P)]] 交 [[l₁]] 于 [[P₅]]。由 $P P_5 \\perp P_2 D_s$ 及 $P P_1 \\perp$ [[l₁]]，相似直角三角形 $\\triangle P P_1 P_5 \\sim \\triangle D_s M P_2$ 给出 $|P_1 P_5| = \\frac{|2h - y_0|}{\\sqrt{3}}$；将 $\\overrightarrow{P P_5}$ 绕 [[P]] 旋转 $\\mp 60^\\circ$ 产生的纵向增量为 $\\frac{\\sqrt{3}}{2}\\cdot\\frac{2h - y_0}{\\sqrt{3}} - \\frac{1}{2}y_0 = h - y_0$，终点恰落在 [[l₂]] 上。",
            "在以 [[P₁]] 为圆心的 [[circle(P₁, P)]] 上，圆心角 $\\angle P P_1 D_s = 60^\\circ$ 使割线 [[line(P₂, D_s)]] 与弦 [[line(P, P₃)]] 在另一交点 [[P₃]] 处夹 $30^\\circ$ 圆周角。因 [[perp(line(P₂, D_s), P)]] 与 [[line(P₂, D_s)]] 成 $90^\\circ$，故 [[line(P, P₃)]] 恰为 [[perp(line(P₂, D_s), P)]] 绕 [[P]] 旋转 $\\mp 60^\\circ$ 所得直线，它交 [[l₂]] 于旋转顶点 [[P₄]]；连 [[line(P₄, P₅)]] 即闭合成正三角形 $\\triangle P P_4 P_5$。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "正三角形 PQR"
        },
        "proof": {
          "keyIdea": "利用 $P$ 关于 $l_1$ 的对称点 $P_1$ 将直线 $l_1$ 绕 $P$ 旋转 $60^\\circ$ 得 $\\text{line}(P_1, E)$，与 $l_2$ 求交得顶点 $F$，再将射线 $PF$ 反向旋转 $-60^\\circ$ 回 $l_1$ 得 $G$，全程仅用基本圆与直线。",
          "steps": [
            "在 [[l₁]] 上任取 [[A₁]]、[[B₁]]，由 [[circle(A₁, P)]] 与 [[circle(B₁, P)]] 将 [[P]] 关于 [[l₁]] 对称至 [[P₁]]。因 [[l₁]] 为 $P P_1$ 的中垂线，[[l₁]] 上满足 $|P Q_0| = |P_1 Q_0| = |P P_1|$ 的点 $Q_0$ 绕 [[P]] 旋转 $+60^\\circ$ 恰落于 [[P₁]]；同时 [[circle(P, A₁)]] $\\cap$ [[circle(A₁, P)]] 将 [[A₁]] $\\in$ [[l₁]] 绕 [[P]] 旋转 $+60^\\circ$ 至 [[E]]。",
            "由此 [[line(P₁, E)]] 即为整条直线 [[l₁]] 绕 [[P]] 旋转 $+60^\\circ$ 的像，它与 [[l₂]] 的交点 [[F]] 绕 [[P]] 逆转 $-60^\\circ$ 的原像 $G = R_{P, -60^\\circ}(F)$ 必落在 [[l₁]] 上。",
            "连 [[line(P, F)]] 交 [[circle(P, A₁)]] 于 [[U]]，作 [[circle(U, P)]] 交 [[circle(P, A₁)]] 于 [[Z]] $= R_{P, -60^\\circ}(U)$。故 [[line(P, Z)]] 将 [[line(P, F)]] 旋转 $-60^\\circ$ 交 [[l₁]] 于 [[G]]，满足 $|PG| = |PF|$ 且 $\\angle FPG = 60^\\circ$；连 [[line(F, G)]] 即成正三角形 $\\triangle PFG$。"
          ]
        }
      },
      "v-14L-22E-2V": {
        "variantLabels": {
          "1": "正三角形 PQR (₁)",
          "2": "正三角形 PQR (₂)"
        },
        "proof": {
          "keyIdea": "对双圆两侧对称交点 $D_s$ 与 $D_{s_1}$ 分别执行 $7L, 11E$ 公垂线—双圆作图，涵盖从 $l_1$ 到 $l_2$ 的 $+60^\\circ$ 与 $-60^\\circ$ 两种旋转方向，作出全部两个正三角形。",
          "steps": [
            "作公垂线 [[perp(l₁, P)]]（垂足 [[P₁]]、[[P₂]]），取 [[circle(P, P₁)]] $\\cap$ [[circle(P₁, P)]] 的第一交点 [[D_s]]，由割线 [[line(P₂, D_s)]] 与交点 [[P₃]] 作出第一组正三角形三边：[[line(P, P₃)]]（交 [[l₂]] 于 [[P₄]]）、过 [[P₅]] 的 [[perp(line(P₂, D_s), P)]] 以及 [[line(P₄, P₅)]]。",
            "重复作 [[perp(l₁, P) #2]]（垂足 [[P₆]]、[[P₇]]），取 [[circle(P, P₆)]] $\\cap$ [[circle(P₆, P)]] 的另一侧交点 [[D_s₁]]，由 [[line(P₇, D_s₁)]] 与 [[P₈]] 作出第二组正三角形三边：[[line(P, P₈)]]（交 [[l₂]] 于 [[P₉]]）、过 [[P₁₀]] 的 [[perp(line(P₇, D_s₁), P)]] 以及 [[line(P₉, P₁₀)]]。"
          ],
          "variantNote": "平行线 $l_1, l_2$ 外的任意点 $P$ 均存在两个不同的正三角形 $\\triangle PQR$，分别对应由 $R_{P, +60^\\circ}$ 或 $R_{P, -60^\\circ}$ 将 $l_1$ 上的顶点映至 $l_2$ 上的顶点。"
        }
      }
    }
  },
  "Nu/L3": {
    "title": "同心圆上的正三角形",
    "prompt": "以已知点为一个顶点作正三角形，使其余两个顶点分别位于两个已知的同心圆上。",
    "solutions": {
      "l-6L-12E": {
        "variantLabels": {
          "1": "正三角形 PQR"
        },
        "proof": {
          "keyIdea": "将内圆半径 $r_1$ 平移至 $P$ 交外圆 $c_2$ 于 $C$，再借 $\\text{perpBisector}(O, C)$ 将 $C$ 绕 $O$ 旋转 $60^\\circ$ 至 $R \\in c_2$；绕 $O$ 与绕 $P$ 的耦合 $60^\\circ$ 旋转保证 $R_{P, \\pm 60^\\circ}(R)$ 必落在 $c_1$ 上。",
          "steps": [
            "在 [[c₁]] 上任取 [[B]]（$|OB| = r_1$），用 [[compass(O, B; P)]] 将半径 $r_1$ 平移至 [[P]] 并交外圆 [[c₂]]（半径 $r_2$）于 [[C]]，即 $|PC| = r_1$ 且 $|OC| = r_2$。取 [[perpBisector(O, C)]] 与 [[c₂]] 的交点 [[R]]，则 $|OR| = |CR| = |OC| = r_2$，$\\triangle OCR$ 为正三角形，$R = R_{O, \\pm 60^\\circ}(C)$。",
            "记正三角形 $\\triangle O P C_{\\text{rot}}$ 的第三顶点为 $C_{\\text{rot}} = R_{O, \\pm 60^\\circ}(P)$（满足 $R_{P, \\pm 60^\\circ}(C_{\\text{rot}}) = O$）。将 $PC$ 绕 [[O]] 旋转 $\\pm 60^\\circ$ 得 $|C_{\\text{rot}} R| = |PC| = r_1$；再将 $C_{\\text{rot}} R$ 绕 [[P]] 同向旋转 $\\pm 60^\\circ$，即把 $C_{\\text{rot}} \\mapsto O$、$R \\mapsto Q$，且 $|OQ| = |C_{\\text{rot}} R| = r_1$，故 $Q$ 必位于 [[c₁]] 上！",
            "作 [[line(P, R)]] 与 [[circle(P, R)]] 交 [[c₁]] 于该旋转顶点 [[Q]]（$|PQ| = |PR| = |QR|$），连 [[line(P, Q)]] 与 [[line(Q, R)]] 即得正三角形 $\\triangle PQR$。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "正三角形 PQR"
        },
        "proof": {
          "keyIdea": "共用同一个圆 $\\text{circle}(P, O)$ 构造两组正三角形双圆，将内圆 $c_1$ 绕 $P$ 旋转 $60^\\circ$，其与外圆 $c_2$ 的交点即直接定出正三角形在外圆上的顶点。",
          "steps": [
            "作 [[circle(P, O)]] 交 [[c₁]] 于 [[B]]。因 $B$ 位于 $\\text{circle}(P, O)$ 上，有 $\\text{circle}(P, B) = \\text{circle}(P, O)$，故添作 [[circle(B, P)]] 与 [[circle(O, P)]] 可直接复用 [[circle(P, O)]]，将 [[B]] $\\in$ [[c₁]] 与圆心 [[O]] 绕 [[P]] 同向旋转 $60^\\circ$ 至 [[D]] 与 [[C_rot]]。",
            "由旋转的等距性，[[circle(C_rot, D)]] 恰为内圆 [[c₁]] 绕 [[P]] 旋转 $60^\\circ$ 的像（半径 $|C_{\\text{rot}} D| = |OB| = r_1$）。因此它与 [[c₂]] 的交点 [[R]] 绕 [[P]] 逆转 $\\mp 60^\\circ$ 的原像 $Q = R_{P, \\mp 60^\\circ}(R)$ 必在 [[c₁]] 上。",
            "作 [[line(P, R)]] 与 [[circle(P, R)]] 交 [[c₁]] 于 [[Q]]，满足 $|PQ| = |PR|$ 且 $\\angle QPR = 60^\\circ$；连 [[line(P, Q)]] 与 [[line(Q, R)]] 即闭合成正三角形 $\\triangle PQR$。"
          ]
        }
      },
      "v-32L-32E-4V": {
        "variantLabels": {
          "1": "正三角形 PQR (₁)",
          "2": "正三角形 PQR (₂)",
          "3": "正三角形 PQR (₃)",
          "4": "正三角形 PQR (₄)"
        },
        "proof": {
          "keyIdea": "将 $c_1$ 绕 $P$ 作 $\\pm 60^\\circ$ 旋转所得两圆均与 $c_2$ 满足严格相交不等式，各交 $c_2$ 于两点，从而产生 $2 \\times 2 = 4$ 个不同的正三角形。",
          "steps": [
            "在前两组 $8L, 8E$ 构造中，由 [[circle(P, O)]]、[[circle(B, P)]]、[[circle(O, P)]]（及 `#2` 副本）将 [[O]] 与 [[B]]（[[B₁]]）绕 [[P]] 旋转 $+60^\\circ$ 得旋转圆 [[circle(C_rot, D)]]（$=$ [[circle(C_rot₁, D₁)]]），它与 [[c₂]] 的两个交点 [[R]]、[[R₁]] 经 [[circle(P, R)]]、[[circle(P, R₁)]] 定出 [[c₁]] 上的 [[Q]]、[[Q₁]]，连成两组三边（[[line(P, R)]]、[[line(P, Q)]]、[[line(Q, R)]]）与（[[line(P, R₁)]]、[[line(P, Q₁)]]、[[line(Q₁, R₁)]]）。",
            "在第三、四组 $8L, 8E$ 构造中，改取另一侧双圆交点 [[D₂]]、[[C_rot₂]]（及 [[D₃]]、[[C_rot₃]]），将 [[c₁]] 绕 [[P]] 旋转 $-60^\\circ$ 得 [[circle(C_rot₂, D₂)]]（$=$ [[circle(C_rot₃, D₃)]]），它与 [[c₂]] 的两个交点 [[R₂]]、[[R₃]] 经 [[circle(P, R₂)]]、[[circle(P, R₃)]] 定出 [[Q₂]]、[[Q₃]]，连成另外两组三边（[[line(P, R₂)]]、[[line(P, Q₂)]]、[[line(Q₂, R₂)]]）与（[[line(P, R₃)]]、[[line(P, Q₃)]]、[[line(Q₃, R₃)]]）。"
          ],
          "variantNote": "因 $|C_{\\text{rot}} O| = |PO|$ 满足 $|r_1 - r_2| < |PO| < r_1 + r_2$，两个旋转圆 $\\text{circle}(C_{\\text{rot}}, D)$ 各自与 $c_2$ 相交于相异两点，共给出全部四个有效解。"
        }
      }
    }
  },
  "Nu/L4": {
    "title": "三角形内接正方形",
    "prompt": "在锐角三角形 ABC 内作一个内接正方形，使其一条边落在 AC 上。",
    "solutions": {
      "l-6L-14E": {
        "variantLabels": {
          "1": "内接正方形 PQRS"
        },
        "proof": {
          "keyIdea": "在点 $A$ 处背离 $B$ 一侧垂直于 $AC$ 立起长为 $b = |AC|$ 的线段 $A D_0$，使连线 $\\text{line}(B, D_0)$ 按 $b : h$ 内分底边投影，直接定出边长为 $\\frac{bh}{b+h}$ 的内接正方形底角顶点 $S$。",
          "steps": [
            "设 $b = |AC|$，记锐角 $\\triangle ABC$ 自 [[B]] 向 [[seg(C, A)]] 所作高线长为 $h$（垂足为 $H_B$）。作 [[perp(seg(C, A), A)]] 交 [[circle(A, C)]] 于背离 [[B]] 一侧的 [[D₀]]，满足 $A D_0 \\perp AC$ 且 $|A D_0| = b$。",
            "连 [[line(B, D₀)]] 交 [[seg(C, A)]] 于 [[S]]，由直角三角形相似得 $|AS| : |S H_B| = |A D_0| : h = b : h$，即 $|AS| = \\frac{b}{b + h}|A H_B|$。过 [[S]] 作 [[perp(seg(C, A), S)]] 交 [[seg(A, B)]] 于 [[P]]，按同一比例缩放高 $h$ 得 $|PS| = \\frac{bh}{b + h}$。",
            "过 [[P]] 作平行于 $AC$ 的垂线 [[perp(h₂, P)|perp(SP, P)]] 交 [[seg(B, C)]] 于 [[Q]]。由 $\\triangle PBQ \\sim \\triangle ABC$ 得 $\\frac{|PQ|}{b} = \\frac{h - |PS|}{h} = \\frac{h}{b + h}$，故 $|PQ| = \\frac{bh}{b + h} = |PS|$；再作 [[perp(seg(C, A), Q)]] 交 [[seg(C, A)]] 于 [[R]]，矩形 $PQRS$ 邻边相等 $|PS| = |PQ|$，即为内接正方形。"
          ]
        }
      },
      "e-8L-12E": {
        "variantLabels": {
          "1": "内接正方形 PQRS"
        },
        "proof": {
          "keyIdea": "利用位似比例定出边长为 $s = \\frac{bh}{b+h}$ 的左侧边 $SP$ 后，以两个单位开销的基本圆 $\\text{circle}(S, P)$ 与 $\\text{circle}(R, S)$ 替代最后两条 $3E$ 垂线，在 $12E$ 内依次截出 $R$ 与 $Q$。",
          "steps": [
            "同 $6L$ 作法，依次作 [[perp(seg(C, A), A)]]、[[circle(A, C)]]（得 [[D₀]]）、[[line(B, D₀)]]（得 [[S]]）与 [[perp(seg(C, A), S)]]，定出左侧边 $SP$（[[P]] $\\in$ [[seg(A, B)]]），其长为 $|SP| = s = \\frac{bh}{b + h}$。",
            "作 [[circle(S, P)]] 在 [[seg(C, A)]] 朝 [[C]] 侧截出 [[R]]，使 $|SR| = |SP| = s$。在锐角 $\\triangle ABC$ 中，$BC$ 上距 $AC$ 高为 $s$ 的点 $Q^*$ 正位于 [[R]] 上方（$Q^* R \\perp AC$，$|Q^* R| = s$），且与射线 $RC$ 所夹角为钝角 $90^\\circ + \\angle C > 90^\\circ$，故半径为 $s$ 的 [[circle(R, S)]] 在线段 [[seg(B, C)]] 上与 $Q^*$ 唯一交于 [[Q]]；连 [[line(P, Q)]] 与 [[line(Q, R)]] 即成内接正方形 $PQRS$。"
          ]
        }
      }
    }
  },
  "Nu/L5": {
    "title": "到角的一边与定点等距的点",
    "prompt": "已知角 ABC 及其内部一点 M，在 BA 上求一点 D、在 BC 上求一点 E，作出等长线段 MD 与 DE，且使 DE 垂直于 BC。",
    "solutions": {
      "l-5L-17E": {
        "variantLabels": {
          "1": "等距点 D 与垂足 E"
        },
        "proof": {
          "keyIdea": "作 $MFG \\perp BA$ 并利用直角三角形相似 $\\triangle BFG \\sim \\triangle BED$，将等距方程 $|DM|^2 = |DE|^2$ 化简为勾股关系 $|GE|^2 = |FG|^2 - |FM|^2$，仅用两次圆规移距直接解出垂足 $E$。",
          "steps": [
            "作 [[perp(ray(B, A), M)]] 分别交 [[ray(B, A)]] 于 [[F]]、交 [[ray(B, C)]] 于 [[G]]。对任意 $E \\in BC$ 及 $DE \\perp BC$（$D \\in BA$），由直角三角形相似 $\\triangle BFG \\sim \\triangle BED$ 得 $|BD|\\cdot|BF| = |BE|\\cdot|BG|$，代入化简得 $|DM|^2 - |DE|^2 = (|BD| - |BF|)^2 + |FM|^2 - (|BD|^2 - |BE|^2) = |BE|^2 - 2|BE|\\cdot|BG| + |BF|^2 + |FM|^2 = |GE|^2 - (|BG|^2 - |BF|^2) + |FM|^2 = |GE|^2 - |FG|^2 + |FM|^2$。",
            "以半径 $|FG|$ 作 [[compass(F, G; M)]] 交 [[ray(B, A)]] 于 [[H]]，在直角 $\\triangle MFH$ 中由勾股定理得 $|FH|^2 = |MH|^2 - |FM|^2 = |FG|^2 - |FM|^2$。",
            "用 [[compass(F, H; G)]] 将 $|FH|$ 移至圆心 [[G]] 截 [[ray(B, C)]] 于 [[E₁]]，即满足 $|G E_1|^2 = |FH|^2 = |FG|^2 - |FM|^2$。过 [[E₁]] 作垂线 [[perp(ray(B, C), E₁)]] 交 [[ray(B, A)]] 于 [[D₁]] 并连 [[line(M, D₁)]]，必有 $|D_1 M| = |D_1 E_1|$ 且 $D_1 E_1 \\perp BC$。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "等距点 D 与垂足 E"
        },
        "proof": {
          "keyIdea": "先作圆心在 $BA$ 上且与 $BC$ 相切的辅助圆 $\\text{circle}(H, G)$，再以顶点 $B$ 为位似中心将交点 $I_1 \\in BM \\cap \\text{circle}(H, G)$ 位似放大至 $M$，用两圆作出平行线 $MD_1 \\parallel I_1 H$，仅用 $8E$ 完成作图。",
          "steps": [
            "在 [[ray(B, A)]] 上任取 [[F]]，作 [[circle(F, B)]] 交 [[ray(B, C)]] 于 [[G]]，交 [[ray(B, A)]] 于直径端点 [[H]]。由泰勒斯定理知 $\\angle BGH = 90^\\circ$（$HG \\perp BC$），故 [[circle(H, G)]] 圆心在 $BA$ 上且与 [[ray(B, C)]] 相切于 [[G]]。",
            "射线 [[line(B, M)]] 交 [[circle(H, G)]] 于 [[I₁]]。作 [[circle(I₁, M)]] 在 [[line(B, M)]] 上截出直径端点 [[J]]，再作 [[circle(H, J)]] 交 [[circle(I₁, M)]] 于另一交点 [[K]]：两圆连心线 $H I_1$ 垂直于公共弦 $JK$，同时直径 $JM$ 上的泰勒斯定理给出 $MK \\perp JK$，故 [[line(K, M)]] $\\parallel H I_1$！",
            "取 [[line(K, M)]] 与 [[ray(B, A)]] 的交点 [[D₁]]，即 [[H]] 在以 [[B]] 为中心、将 $I_1 \\mapsto M$ 的位似变换下的像。由位似性知 [[circle(D₁, M)]] 与 [[ray(B, C)]] 相切于 [[E₁]]，连 [[line(D₁, E₁)]] 即同时满足 $D_1 E_1 \\perp BC$ 且 $|D_1 E_1| = |D_1 M|$。"
          ]
        }
      },
      "v-7L-21E-2V": {
        "variantLabels": {
          "1": "等距点 D 与垂足 E (₁)",
          "2": "等距点 D 与垂足 E (₂)"
        },
        "proof": {
          "keyIdea": "$\\text{compass}(F, H; G)$ 在射线 $\\text{ray}(B, C)$ 上截出的两个交点 $E_1, E_2$ 均满足 $|G E_i|^2 = |FG|^2 - |FM|^2$，从而给出 $\\text{ray}(B, A)$ 上的全部两个等距点。",
          "steps": [
            "依次作 [[perp(ray(B, A), M)]]（交得 [[F]]、[[G]]）、[[compass(F, G; M)]]（交得 [[H]]）及 [[compass(F, H; G)]]，在 [[ray(B, C)]] 上 [[G]] 的两侧截出距 [[G]] 均为 $\\sqrt{|FG|^2 - |FM|^2}$ 的两个相异交点 [[E₁]] 与 [[E₂]]。",
            "分别作 [[perp(ray(B, C), E₁)]] 交得 [[D₁]] 并连 [[line(M, D₁)]]，以及作 [[perp(ray(B, C), E₂)]] 交得 [[D₂]] 并连 [[line(M, D₂)]]，即完成全部两组解 $(D_1, E_1)$ 与 $(D_2, E_2)$。"
          ],
          "variantNote": "从圆锥曲线视角看，到焦点 $M$ 与准线 $BC$ 等距的点的轨迹是位于 $\\angle ABC$ 内部的抛物线，而从顶点 $B$ 出发穿行于焦点与准线之间的射线 $BA$ 必与该抛物线相交于两点。"
        }
      }
    }
  },
  "Nu/L6": {
    "title": "过两点且与直线相切的圆",
    "prompt": "求作一圆，使其经过给定的两个点，且与已知直线相切。",
    "solutions": {
      "l-6L-18E": {
        "variantLabels": {
          "1": "过 A、B 的相切圆"
        },
        "proof": {
          "keyIdea": "自交点 $P = AB \\cap l$ 应用切割线定理 $|PF|^2 = |PA|\\cdot|PB| = |PM|^2 - |MA|^2$，在 $\\text{perpBisector}(A, B)$ 上构造直角三角形提取直角边 $|ME| = \\sqrt{|PM|^2 - |MA|^2}$ 定出切点 $F$。",
          "steps": [
            "作割线 [[line(A, B)]] 交 [[l]] 于 [[P]]，[[perpBisector(A, B)]] 交 [[line(A, B)]] 于中点 [[M]]。由切割线定理，过 [[A]]、[[B]] 的圆与 [[l]] 相切于 $F$ 当且仅当 $|PF|^2 = |PA|\\cdot|PB| = (|PM| - |MA|)(|PM| + |MA|) = |PM|^2 - |MA|^2$。",
            "以半径 $|PM|$ 作 [[compass(P, M; A)]] 交 [[perpBisector(A, B)]] 于 [[E]]，在直角 $\\triangle AME$ 中有 $|ME|^2 = |AE|^2 - |MA|^2 = |PM|^2 - |MA|^2$。",
            "用 [[compass(M, E; P)]] 自 [[P]] 在 [[l]] 上截出切点 [[F]]（$|PF| = |ME|$，即 $|PF|^2 = |PA|\\cdot|PB|$）；再取法线 [[perp(l, F)]] 与 [[perpBisector(A, B)]] 的交点 [[O]]（$|OA| = |OB| = |OF|$），作出所求相切圆 [[circle(O, A)]]。"
          ]
        }
      },
      "e-8L-10E": {
        "variantLabels": {
          "1": "过 A、B 的相切圆"
        },
        "proof": {
          "keyIdea": "以 $\\text{perpBisector}(A, B)$ 与 $l$ 的交点 $C$ 为位似中心，将一个与 $l$ 相切的辅助圆位似缩放至过点 $A$（由关于 $\\text{perpBisector}(A, B)$ 的对称性亦自动过点 $B$）。",
          "steps": [
            "[[perpBisector(A, B)]] 交 [[l]] 于 [[C]]。在 [[perpBisector(A, B)]] 上任取 [[D]]，作 [[circle(D, C)]] 交 [[perpBisector(A, B)]] 于直径端点 [[E]] 并交 [[l]] 于 [[F]]；由泰勒斯定理知 $EF \\perp$ [[l]]，故辅助圆 [[circle(E, F)]] 圆心在中垂线上且与 [[l]] 相切。",
            "连射线 [[line(A, C)]] 交 [[circle(E, F)]] 于 [[P₁]]。作 [[circle(P₁, A)]] 在 [[line(A, C)]] 上截出直径端点 [[H]]，再作 [[circle(E, H)]] 交 [[circle(P₁, A)]] 于 [[I]]：公共弦 $HI \\perp E P_1$，同时直径 $AH$ 上的泰勒斯定理给出 $AI \\perp HI$，故 [[line(A, I)]] $\\parallel E P_1$。",
            "[[line(A, I)]] 交 [[perpBisector(A, B)]] 于圆心 [[O]]，即 [[E]] 在以 [[C]] 为中心、将 $P_1 \\mapsto A$ 的位似变换下的像。位似变换将 [[circle(E, F)]] 缩放为与 [[l]] 相切且过 [[A]] 的 [[circle(O, A)]]，再由关于 [[perpBisector(A, B)]] 的对称性知其必同时经过 [[B]]。"
          ]
        }
      },
      "v-8L-22E-2V": {
        "variantLabels": {
          "1": "过 A、B 的相切圆 (₁)",
          "2": "过 A、B 的相切圆 (₂)"
        },
        "proof": {
          "keyIdea": "自交点 $P$ 沿直线 $l$ 向两侧同时截取切线长 $\\sqrt{|PA|\\cdot|PB|}$，定出两个切点 $F_a, F_b$，从而作出全部两个阿波罗尼斯相切圆。",
          "steps": [
            "由 [[line(A, B)]]（交 [[l]] 于 [[P]]）、[[perpBisector(A, B)]]（中点 [[M]]）及 [[compass(P, M; A)]]（交得 [[E]]，满足 $|ME|^2 = |PA|\\cdot|PB|$），用 [[compass(M, E; P)]] 在 [[l]] 上 [[P]] 的两侧截出两个切点 [[F_a]] 与 [[F_b]]。",
            "分别作法线 [[perp(l, F_a)]] 与 [[perp(l, F_b)]] 交 [[perpBisector(A, B)]] 于 [[O_a]] 与 [[O_b]]，即作出全部两个相切圆 [[circle(O_a, A)]] 与 [[circle(O_b, A)]]。"
          ],
          "variantNote": "当 $A, B$ 位于 $l$ 同侧且到 $l$ 距离不等（$AB \\nparallel l$）时，$P = AB \\cap l$ 落在线段 $AB$ 外部，故沿 $l$ 两侧存在两个相异切点。"
        }
      }
    }
  },
  "Nu/L7": {
    "title": "圆内接正方形 - 2",
    "prompt": "在已知圆内作一个内接正方形，使其一条边经过给定的点。",
    "solutions": {
      "l-7L-15E": {
        "variantLabels": {
          "1": "内接正方形"
        },
        "proof": {
          "keyIdea": "$\\text{circle}(O)$ 的弦 $A P_1 E$ 通过 $|AE| = d(1 - \\frac{r^2}{d^2})$ 几何编码了倍角余弦 $\\cos(2\\alpha) = 1 - \\frac{r^2}{d^2}$，从而过 $E$ 作垂线交 $\\text{circle}(A, O)$ 即可直接定出点 $C$ 关于过 $A$ 正方形边的对称点 $P_2$。",
          "steps": [
            "设 $d = |OA|$，[[circle(O)]] 的半径为 $r$。半径为 $d$ 的 [[circle(A, O)]] 关于 $AO$ 对称地交 [[circle(O)]] 于 [[P₁]] 与 [[C]]（相对射线 $AO$ 成角 $\\pm\\beta$），在 $\\triangle A O P_1$ 中由余弦定理得 $\\cos\\beta = 1 - \\frac{r^2}{2d^2}$。延长 [[line(A, P₁)]] 再交 [[circle(O)]] 于 [[E]]，圆心垂足将投影偏移倍增，使 [[E]] 在射线 $A P_1$ 上的有向坐标恰为 $d(2\\cos\\beta - 1) = d(1 - \\frac{r^2}{d^2})$。",
            "过 [[A]] 与 $AO$ 夹角为 $\\pm\\alpha$ 的直线 $L$ 截圆所得弦成为内接正方形一边（圆心距为 $\\frac{r}{\\sqrt{2}}$），当且仅当 $\\sin\\alpha = \\frac{r}{\\sqrt{2}d}$，即 $\\cos(2\\alpha) = 1 - \\frac{r^2}{d^2}$。将 [[circle(A, O)]] 上角为 $-\\beta$ 的点 [[C]] 关于 $L$ 反射，所得像落在 [[circle(A, O)]] 上角为 $\\beta \\pm 2\\alpha$ 处——即与射线 $A P_1$ 夹角为 $\\pm 2\\alpha$，其在 [[line(A, P₁)]] 上的投影坐标恰为 $d\\cos(2\\alpha) = d(1 - \\frac{r^2}{d^2})$，正是点 [[E]]！",
            "因此作 [[perp(line(A, P₁), E)]] 交 [[circle(A, O)]] 所得 [[P₂]] 即为 [[C]] 关于 $L$ 的对称点，故中垂线 [[perpBisector(C, P₂)]] 直接给出过 [[A]] 的正方形边所在直线 $L$，交 [[circle(O)]] 于 [[P₃]]、[[P₄]]。依次作 [[perp(m₁, P₃)|perp(P₃P₄, P₃)]] 得 [[W₂]]、作 [[perp(perp(m₁, P₃), W₂)|perp(P₃W₂, W₂)]] 得 [[W₃]]、再连 [[line(W₃, P₄)]]，即完成内接正方形 $P_3 W_2 W_3 P_4$。"
          ]
        }
      },
      "e-10L-10E": {
        "variantLabels": {
          "1": "内接正方形"
        },
        "proof": {
          "keyIdea": "过 $A$ 的内接正方形边 $P_1 W_0$ 对圆心 $O$ 张 $90^\\circ$ 角，故必有 $\\angle O P_1 A = 45^\\circ$；在弦 $OA$ 上作 $45^\\circ$ 圆周角轨迹圆 $\\text{circle}(K, O)$ 交 $\\text{circle}(O)$ 定出顶点 $P_1$，其直径 $A A'$ 更可同时给出过 $P_1$ 的正交邻边。",
          "steps": [
            "双圆 [[circle(O, A)]] $\\cap$ [[circle(A, O)]] 交于 [[C₁]]、[[C₂]]，连 [[line(C₁, C₂)]] 得 $OA$ 的垂直平分线，交 [[line(O, A)]] 于中点 [[E₀]]（同时 [[line(O, A)]] 交 [[circle(O, A)]] 于对径点 [[F₀]] $= 2O - A$）。泰勒斯圆 [[circle(E₀, O)]] 交中垂线 [[line(C₁, C₂)]] 于 [[K]]，满足 $|KO| = |KA|$ 且 $\\angle OKA = 90^\\circ$。",
            "作 [[circle(K, O)]] 交 [[circle(O, A)]] 于 [[A']] $= R_{O, 90^\\circ}(A)$（使 $A A'$ 为 [[circle(K, O)]] 的直径），并因 $|OA| < r$ 在优弧 $OA$ 上交 [[circle(O)]] 于 [[P₁]]，由圆周角定理得 $\\angle O P_1 A = \\frac{1}{2}\\angle OKA = 45^\\circ$。",
            "连弦 [[line(A, P₁)]] 再交 [[circle(O)]] 于 [[W₀]]：等腰 $\\triangle O P_1 W_0$ 中 $\\angle O P_1 W_0 = 45^\\circ$，故 $\\angle P_1 O W_0 = 90^\\circ$（线段 $P_1 W_0$ 即含圆内点 [[A]] 的第一条边）。在 [[circle(K, O)]] 的直径 $A A'$ 上由泰勒斯定理知 [[line(A', P₁)]] $\\perp P_1 W_0$，交 [[circle(O)]] 于 [[W₂]]（使 $W_0 O W_2$ 为直径）；再由关于 [[O]] 的中心对称，弦 $P_1 A W_0$ 映为过 [[F₀]] 的直线 [[line(W₂, F₀)]]（交 [[circle(O)]] 于 [[W₃]]），最后连 [[line(W₃, W₀)]] 闭合正方形 $P_1 W_0 W_3 W_2$。"
          ]
        }
      },
      "v-14L-14E-2V": {
        "variantLabels": {
          "1": "内接正方形 (₁)",
          "2": "内接正方形 (₂)"
        },
        "proof": {
          "keyIdea": "当 $\\frac{r}{\\sqrt{2}} < |OA| < r$ 时，$\\text{circle}(O)$ 与 $\\text{circle}(K, O)$ 的 $45^\\circ$ 优弧 $OA$ 相交于两个相异顶点 $P_1, P_2$，分别引出 4 条直线即可作出关于 $OA$ 镜面对称的全部两个内接正方形。",
          "steps": [
            "完成共用的前 $6L, 6E$ 作图（[[circle(O, A)]]、[[circle(A, O)]]、[[line(C₁, C₂)]]、交出 [[E₀]] 与 [[F₀]] 的 [[line(O, A)]]、定出 [[K]] 的 [[circle(E₀, O)]] 及定出 [[A']] 的 [[circle(K, O)]]），在 [[circle(O)]] $\\cap$ [[circle(K, O)]] 上得相异两点 [[P₁]] 与 [[P₂]]；因 [[circle(K, O)]] 劣弧 $OA$ 上任一点到 [[O]] 的距离均 $\\le |OA| < r$，故 [[P₁]]、[[P₂]] 均位于优弧 $OA$ 上，满足 $\\angle O P_i A = 45^\\circ$。",
            "依次连 [[line(A, P₁)]]（得 [[W₀_a]]）、[[line(A', P₁)]]（得 [[W₂_a]]）、[[line(W₂_a, F₀)]]（得 [[W₃_a]]）与 [[line(W₃_a, W₀_a)]] 得第一个内接正方形；再连 [[line(A, P₂)]]（得 [[W₀_b]]）、[[line(A', P₂)]]（得 [[W₂_b]]）、[[line(W₂_b, F₀)]]（得 [[W₃_b]]）与 [[line(W₃_b, W₀_b)]] 得其关于直线 $OA$ 对称的第二个内接正方形。"
          ],
          "variantNote": "将第一个正方形关于 $OA$ 对称，其弦另一端点 $W_{0,a}$（在 $OA$ 另一侧同样满足 $\\angle O W_{0,a} A = 45^\\circ$）恰映至优弧上的第二交点 $P_2$，故当 $r/\\sqrt{2} < |OA| < r$ 时必有两个相异解。"
        }
      }
    }
  },
  "Nu/L8": {
    "title": "直线的对称反射",
    "prompt": "仅使用无刻度直尺，将直线 OA 关于任意一条对称轴作反射。两条已知对称轴互相垂直。",
    "solutions": {
      "le-5L-5E": {
        "variantLabels": {
          "1": "反射直线"
        },
        "proof": {
          "keyIdea": "因正交对称轴 $l_1 \\perp l_2$ 平分 $OA$ 与其反射直线 $L'$ 的夹角，四条共点直线 $(l_1, l_2; OA, L')$ 构成调和线束，利用完全四角形的调和性质即可仅用无刻度直尺作出 $L'$。",
          "steps": [
            "因对称轴 [[l₁]] 与 [[l₂]] 正交于 [[O]]，将 [[A]] 关于 [[l₁]] 或 [[l₂]] 对称仅使一个正交分量反号而保持另一分量不变，所得两点关于 [[O]] 中心对称，张成同一条反射直线 $L'$；且正交的内、外角平分线 [[l₁]]、[[l₂]] 调和分割 [[line(O, A)]] 与 $L'$。",
            "在 [[l₁]] 上任取相异两点 [[U₁]]、[[U₂]]，连 [[line(A, U₁)]] 与 [[line(A, U₂)]] 分别交 [[l₂]] 于 [[V₁]]、[[V₂]]，构成完全四角形 $U_1 U_2 V_2 V_1$，其两组对边分别交于 [[O]]（$= U_1 U_2 \\cap V_1 V_2$）与 [[A]]（$= U_1 V_1 \\cap U_2 V_2$）。",
            "由完全四角形的调和性质，连接 [[O]] 与交叉对角线交点 [[D]] $\\in$ [[line(U₁, V₂)]] $\\cap$ [[line(U₂, V₁)]] 的直线恰为 [[line(O, A)]] 关于 [[l₁]]、[[l₂]] 的第四调和共轭线，故 [[line(O, D)]] 即为所求反射直线 $L'$。"
          ]
        }
      }
    }
  },
  "Nu/L9": {
    "title": "过四点作正方形",
    "prompt": "分别过给定的四个点各作一条直线，使四条直线相交围成一个正方形，且点 A 与点 B 位于平行边所在直线上。",
    "solutions": {
      "l-7L-19E": {
        "variantLabels": {
          "1": "正方形四边直线"
        },
        "proof": {
          "keyIdea": "两组正交平行带 $(L_A \\parallel L_B)$ 与 $(L_C \\parallel L_D)$ 等宽，意味着在点 $B$ 处将向量 $\\overrightarrow{CD}$ 旋转 $90^\\circ$ 所得终点 $E$ 必直接落在直线 $L_A$ 上，从而将问题化归为连接 $A$ 与 $E$。",
          "steps": [
            "设过 [[A]]、[[B]] 的平行线 $L_A \\parallel L_B$ 与过 [[C]]、[[D]] 的平行线 $L_C \\parallel L_D$ 正交围成正方形。取沿 $L_A, L_B$ 的单位方向向量 $\\mathbf{u}$ 及沿 $L_C, L_D$ 的单位法向量 $\\mathbf{n} = R_{\\pm 90^\\circ}(\\mathbf{u})$，两平行带等宽等价于 $|\\overrightarrow{BA}\\cdot\\mathbf{n}| = |\\overrightarrow{DC}\\cdot\\mathbf{u}|$。",
            "作 [[line(C, D)]]、[[perp(line(C, D), B)]] 与 [[compass(C, D; B)]]，在 [[B]] 处将 $\\overrightarrow{CD}$ 旋转 $\\pm 90^\\circ$ 至点 [[E]]（$BE \\perp CD$，$|BE| = |CD|$）。在对应定向下，$\\overrightarrow{BE}\\cdot\\mathbf{n} = R_{\\pm 90^\\circ}(\\overrightarrow{CD})\\cdot R_{\\pm 90^\\circ}(\\mathbf{u}) = \\overrightarrow{CD}\\cdot\\mathbf{u} = \\overrightarrow{BA}\\cdot\\mathbf{n}$，故 $\\overrightarrow{AE}\\cdot\\mathbf{n} = 0$，即 [[E]] 必位于直线 $L_A$ 上！",
            "连 [[line(A, E)]] 即得 $L_A$；再依次作 [[perp(line(A, E), C)]]（得 $L_C$）、[[perp(line(A, E), D)]]（得 $L_D$）及 [[perp(h₂, B)]]（过 [[B]] 垂直于 $L_C$，即 $L_B \\parallel L_A$），四条直线正交围成的矩形两带等宽 $|\\overrightarrow{DC}\\cdot\\mathbf{u}| = |\\overrightarrow{BA}\\cdot\\mathbf{n}|$，即为正方形。"
          ]
        }
      },
      "e-13L-15E": {
        "variantLabels": {
          "1": "正方形四边直线"
        },
        "proof": {
          "keyIdea": "利用圆复用对称反射替代高开销的 $9E$ 垂线移距旋转与最后两条 $3E$ 垂线：将 $C$ 关于 $\\text{perpBisector}(B, D)$ 反射把 $|CD|$ 移至 $B$，再复用 $\\text{circle}(C, B)$ 与 $\\text{circle}(B, D)$ 各仅花 $2E$ 作出 $L_B$ 与 $L_D$。",
          "steps": [
            "[[circle(C, B)]] 与 [[circle(D, B)]] 将 [[B]] 关于 $CD$ 对称至 [[B']]，使 [[line(B, B')]] $\\perp CD$。添作 [[circle(B, D)]] 与 [[circle(D, B)]] 交得 $\\text{perpBisector}(B, D)$ 上的双圆交点 [[P₁]]、[[P₂]]，再由 [[circle(P₁, C)]] $\\cap$ [[circle(P₂, C)]] 将 [[C]] 关于 $\\text{perpBisector}(B, D)$ 对称至 [[C₁]]。",
            "因关于 $\\text{perpBisector}(B, D)$ 的反射互换 $D \\leftrightarrow B$ 与 $C \\leftrightarrow C_1$，等距性给出 $|B C_1| = |DC| = |CD|$；于是 [[circle(B, C₁)]] 交垂线 [[line(B, B')]] 于 $90^\\circ$ 旋转终点 [[P₃]]，连 [[line(A, P₃)]] 即得边所在直线 $L_A$。",
            "作 [[perp(line(A, P₃), C)]] 得 $L_C \\perp L_A$。在 $L_C$ 上取点 [[P₄]]，作 [[circle(P₄, B)]] 复用已有的 [[circle(C, B)]] 将 [[B]] 关于 $L_C$ 对称至 [[B'']]，故 [[line(B, B'')]] 即为 $L_B \\perp L_C$（$L_B \\parallel L_A$）；最后因 $B'' \\in L_B$，作 [[circle(B'', D)]] 复用已有的 [[circle(B, D)]] 将 [[D]] 关于 $L_B$ 对称至 [[D'']]，连 [[line(D, D'')]] 即得 $L_D \\perp L_B$（$L_D \\parallel L_C$）。"
          ]
        }
      },
      "v-11L-29E-2V": {
        "variantLabels": {
          "1": "正方形四边直线 (₁)",
          "2": "正方形四边直线 (₂)"
        },
        "proof": {
          "keyIdea": "在点 $B$ 处同时取向量 $\\overrightarrow{CD}$ 的 $\\pm 90^\\circ$ 两个旋转终点 $E_a, E_b$，涵盖条带宽度符号关系 $\\overrightarrow{BA}\\cdot\\mathbf{n} = \\pm(\\overrightarrow{DC}\\cdot\\mathbf{u})$ 的两种相对定向，作出全部两个正方形。",
          "steps": [
            "在 [[line(C, D)]] 上作垂线 [[perp(line(C, D), B)]] 与移距圆 [[compass(C, D; B)]] 相交，同时定出 $\\pm 90^\\circ$ 旋转的两个终点 [[E_a]] 与 [[E_b]]。",
            "依次作 [[line(A, E_a)]]、[[perp(line(A, E_a), C)]]、[[perp(line(A, E_a), D)]] 与 [[perp(h₂, B)]] 得第一个正方形的四边直线；再作 [[line(A, E_b)]]、[[perp(line(A, E_b), C)]]、[[perp(line(A, E_b), D)]] 与 [[perp(h₅, B)]] 得第二个正方形的四边直线。"
          ],
          "variantNote": "两个解分别对应从 $L_A$ 到 $L_B$ 的有向法向与从 $L_C$ 到 $L_D$ 的有向法向构成正定向或负定向标架（只要 $E_a, E_b$ 不与 $A$ 重合且条带宽度非零退化）。"
        }
      }
    }
  }
};
