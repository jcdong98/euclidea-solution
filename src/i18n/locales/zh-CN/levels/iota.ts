import type { LevelLocaleEntry } from '../../../types';

export const IOTA_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Iota/L1": {
    "title": "最小周长 - 1",
    "prompt": "以点 A 为一个顶点、在已知角的两边上各取一个顶点，作一个周长最小的三角形。",
    "solutions": {
      "le-6L-6E": {
        "variantLabels": {
          "1": "最小周长三角形 AXY"
        },
        "proof": {
          "keyIdea": "将点 $A$ 分别关于锐角的两条边对称以展开周长；以角顶点 $O$ 为圆心作一个公共辅助圆即可在三圆之内同时完成两次对称。",
          "steps": [
            "作 [[circle(O, A)]] 分别交 [[ray(O, U)]] 于 [[P₁]]、交 [[ray(O, V)]] 于 [[P₂]]，则 $|OA| = |OP_1| = |OP_2|$。再作 [[circle(P₁, A)]] 与 [[circle(P₂, A)]]，它们与 [[circle(O, A)]] 的第二交点 [[A₁]]、[[A₂]] 即为 [[A]] 关于 [[ray(O, U)]] 与 [[ray(O, V)]] 的对称点。",
            "因 $\\angle UOV < 90^\\circ$ 且 [[A]] 严格位于 $\\angle UOV$ 内部，故 $\\angle A_1 O A_2 = 2\\angle UOV < 180^\\circ$，连 [[line(A₁, A₂)]] 必依序 $A_1$–$X_0$–$Y_0$–$A_2$ 交 [[ray(O, U)]] 于 [[X₀]]、交 [[ray(O, V)]] 于 [[Y₀]]，且同时画出边 $X_0 Y_0$。",
            "对 [[ray(O, U)]] 上任一点 $X$ 与 [[ray(O, V)]] 上任一点 $Y$，由轴对称等长性（$|AX| = |A_1 X|$，$|AY| = |A_2 Y|$）及折线不等式有 $|AX| + |XY| + |YA| = |A_1 X| + |XY| + |YA_2| \\ge |A_1 A_2|$，当且仅当取共线交点 [[X₀]]、[[Y₀]] 时取等，最后连 [[line(A, X₀)]] 与 [[line(A, Y₀)]] 即成。"
          ]
        }
      }
    }
  },
  "Iota/L2": {
    "title": "第三比例项",
    "prompt": "在已知射线上作一点 D，使线段 AD 为两条已知线段的第三比例项。",
    "solutions": {
      "le-3L-3E": {
        "variantLabels": {
          "1": "第三比例项点 D"
        },
        "proof": {
          "keyIdea": "仅用三个圆构造两个在点 $A$ 处共用底角的嵌套等腰三角形，利用腰底之比相等得到 $|AC| : |AB| = |AB| : |AD|$。",
          "steps": [
            "作 [[circle(A, B)]] 与 [[circle(C, A)]] 交于 [[E]]，构成以 $|CA| = |CE| = |AC|$ 为腰、$|AE| = |AB|$ 为底的等腰 $\\triangle CAE$。",
            "再作 [[circle(E, A)]] 交 [[ray(A, B)]] 于异于 [[A]] 的第二交点 [[D]]，构成以 $|EA| = |ED| = |AB|$ 为腰、在 [[ray(A, B)]] 上以 $AD$ 为底的等腰 $\\triangle EAD$。因两等腰三角形共用底角 $\\angle CAE = \\angle EAD$，故 $\\triangle CAE \\sim \\triangle EAD$，从而 $\\frac{|AC|}{|AB|} = \\frac{|CA|}{|AE|} = \\frac{|EA|}{|AD|} = \\frac{|AB|}{|AD|}$。"
          ]
        }
      }
    }
  },
  "Iota/L3": {
    "title": "梯形两底的调和平均",
    "prompt": "连接梯形两腰作一条平行于两底的线段，使其长度等于两底长度的调和平均数。",
    "solutions": {
      "l-3L-6E": {
        "variantLabels": {
          "1": "调和平均线段 EF"
        },
        "proof": {
          "keyIdea": "由帕普斯梯形性质，过梯形对角线交点且平行于两底的截线被该交点平分，每段长均为 $\\frac{|AB|\\,|CD|}{|AB| + |CD|}$。",
          "steps": [
            "连对角线 [[line(A, C)]] 与 [[line(B, D)]] 交于 [[P]]，过 [[P]] 作 [[parallel(seg(A, B), P)]] 分别交两腰 [[seg(D, A)]]、[[seg(B, C)]] 于 [[E₀]] 与 [[F₀]]。",
            "由 $E_0 F_0 \\parallel AB \\parallel CD$ 及 $\\triangle PAB \\sim \\triangle PCD$ 得 $\\frac{|AP|}{|PC|} = \\frac{|AB|}{|CD|}$，故 $\\frac{|CP|}{|CA|} = \\frac{|CD|}{|AB| + |CD|}$。再由 $\\triangle CPE_0 \\sim \\triangle CAB$ 与 $\\triangle DPF_0 \\sim \\triangle DBA$ 知 $|E_0 P| = |PF_0| = \\frac{|AB|\\,|CD|}{|AB| + |CD|}$，从而 $|E_0 F_0| = \\frac{2|AB|\\,|CD|}{|AB| + |CD|}$。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "调和平均线段 EF"
        },
        "proof": {
          "keyIdea": "复用对角线 $BD$ 作截线，利用 $\\triangle P'PN$ 的中位线性质，仅用两圆一线即可过点 $P$ 作出底边 $AB$ 的平行线。",
          "steps": [
            "连对角线 [[line(A, C)]] 与 [[line(B, D)]] 交于 [[P]]。作 [[circle(B, P)]] 交 [[line(B, D)]] 于另一点 [[P']]，则 [[B]] 为直径 $PP'$ 的中点。",
            "作 [[circle(A, P')]] 交 [[circle(B, P)]] 于另一点 [[N]]，即 [[P']] 关于连心线 $AB$ 的对称点，故直线 $AB$ 亦平分弦 $P'N$。因此直线 $AB$ 连接 $\\triangle P'PN$ 两边 $P'P$ 与 $P'N$ 的中点，中位线性质给出 [[line(P, N)]] $\\parallel AB$。",
            "由对角线交点 [[P]] 处相同的相似比知，[[line(P, N)]] 截两腰 [[seg(D, A)]]、[[seg(B, C)]] 所得线段两端点 [[E₀]]、[[F₀]] 满足 $|E_0 F_0| = \\frac{2|AB|\\,|CD|}{|AB| + |CD|}$。"
          ]
        }
      }
    }
  },
  "Iota/L4": {
    "title": "作垂线*",
    "prompt": "仅用无刻度直尺，过已知点向过圆心的直线作垂线。",
    "solutions": {
      "le-5L-5E": {
        "variantLabels": {
          "1": "垂线"
        },
        "proof": {
          "keyIdea": "利用直线 $l$ 在圆上截出的直径及泰勒斯定理，仅用直尺作出 $\\triangle PD_1 D_2$ 的两条高线，由其交点（垂心）确定过点 $P$ 的第三条高线。",
          "steps": [
            "因直线 [[l]] 过 [[circle(O)]] 的圆心 [[O]]，它与 [[circle(O)]] 的两个交点 [[D₁]]、[[D₂]] 即为直线 [[l]] 上一条直径 $D_1 D_2$ 的对径端点。",
            "连割线 [[line(D₁, P)]] 与 [[line(D₂, P)]]，分别交 [[circle(O)]] 于另一点 [[Q₁]] 与 [[Q₂]]。由直径 $D_1 D_2$ 上的泰勒斯定理知 $\\angle D_2 Q_1 D_1 = 90^\\circ$ 且 $\\angle D_1 Q_2 D_2 = 90^\\circ$，故 [[line(D₂, Q₁)]] $\\perp PD_1$，[[line(D₁, Q₂)]] $\\perp PD_2$。",
            "因此 [[line(D₁, Q₂)]] 与 [[line(D₂, Q₁)]] 是 $\\triangle PD_1 D_2$ 的两条高线，交于其垂心 [[H]]；由三角形三高共点知 [[line(P, H)]] 即为第三条高线，必垂直于 [[l]]。"
          ]
        }
      }
    }
  },
  "Iota/L5": {
    "title": "线段中点*",
    "prompt": "已知一条与给定线段平行的辅助直线，仅用无刻度直尺求作该线段的中点。",
    "solutions": {
      "le-5L-5E": {
        "variantLabels": {
          "1": "中点 M"
        },
        "proof": {
          "keyIdea": "从线外一点 $Q$ 将线段 $AB$ 中心投影到平行线 $l$ 上构成梯形；由施泰纳单尺调和性质，连接点 $Q$ 与梯形对角线交点的直线必平分 $AB$。",
          "steps": [
            "在 [[seg(A, B)]] 与 [[l]] 之外（且不在二者等距中线上）任取辅助点 [[Q]]，连 [[line(Q, A)]]、[[line(Q, B)]] 分别交 [[l]] 于 [[D']] 与 [[C']]，再连梯形 $ABC'D'$ 的对角线 [[line(A, C')]] 与 [[line(B, D')]] 交于 [[P]]。",
            "连 [[line(Q, P)]] 交 [[seg(A, B)]] 于 [[M]]，并记其与 [[l]] 的交点为 $N$。由 $D'C' \\parallel AB$，对中心 [[Q]] 的位似给出 $\\frac{|AM|}{|D'N|} = \\frac{|QM|}{|QN|} = \\frac{|MB|}{|NC'|}$（即 $\\frac{|AM|}{|MB|} = \\frac{|D'N|}{|NC'|}$）；对对角线交点 [[P]] 的位似给出 $\\frac{|MB|}{|D'N|} = \\frac{|MP|}{|PN|} = \\frac{|AM|}{|NC'|}$（即 $\\frac{|AM|}{|MB|} = \\frac{|NC'|}{|D'N|}$）。",
            "联立两式得 $\\left(\\frac{|AM|}{|MB|}\\right)^2 = 1$，故 $|AM| = |MB|$，[[M]] 即为 [[seg(A, B)]] 的中点。"
          ]
        }
      }
    }
  },
  "Iota/L6": {
    "title": "梯形对角线三等分截线",
    "prompt": "作一条平行于梯形两底的截线，使其被梯形的两条对角线三等分。",
    "solutions": {
      "l-3L-8E": {
        "variantLabels": {
          "1": "三等分平行截线 EF"
        },
        "proof": {
          "keyIdea": "连接顶点 $A$ 与底边 $CD$ 的中点，将对角线 $BD$ 按 $|CD| : 2|AB|$ 分割；过该分点平行于两底的截线恰被两条对角线分成三段相等的 $\\frac{|AB|\\,|CD|}{2|AB| + |CD|}$。",
          "steps": [
            "作 [[perpBisector(C, D)]] 交 [[seg(C, D)]] 于其中点 [[M_CD]]（$|DM_{CD}| = \\frac{1}{2}|CD|$），连 [[line(A, M_CD)]] 交对角线 [[seg(B, D)]] 于 [[G₂₂]]，再作 [[parallel(seg(A, B), G₂₂)]] 依次交 [[seg(D, A)]]、[[seg(A, C)]]、[[seg(B, C)]] 于 [[E₂]]、$G_{21}$ 与 [[F₂]]。",
            "由 $\\triangle DG_{22}M_{CD} \\sim \\triangle BG_{22}A$ 得 $\\frac{|DG_{22}|}{|G_{22}B|} = \\frac{|CD|/2}{|AB|} = \\frac{|CD|}{2|AB|}$，从而 $\\frac{|DG_{22}|}{|DB|} = \\frac{|CD|}{2|AB| + |CD|}$ 且 $\\frac{|AE_2|}{|AD|} = \\frac{2|AB|}{2|AB| + |CD|}$。",
            "由相似三角形比例知 $|E_2 G_{22}| = |AB| \\cdot \\frac{|DG_{22}|}{|DB|} = \\frac{|AB|\\,|CD|}{2|AB| + |CD|} = |G_{21} F_2|$，而在 $\\triangle ACD$ 中有 $|E_2 G_{21}| = |CD| \\cdot \\frac{|AE_2|}{|AD|} = \\frac{2|AB|\\,|CD|}{2|AB| + |CD|} = 2|E_2 G_{22}|$，故 $|E_2 G_{22}| = |G_{22} G_{21}| = |G_{21} F_2|$。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "三等分平行截线 EF"
        },
        "proof": {
          "keyIdea": "将底边 $AB$ 加倍延长至 $B'$ 以代替平分 $CD$：直线 $CB'$ 在 $BD$ 上定出分点 $G_{22}$，而由梅涅劳斯定理，直线 $PB'$ 直接在腰 $BC$ 上定出对应端点 $F_2$，无需调用平行线宏工具。",
          "steps": [
            "标出对角线 [[seg(A, C)]] 与 [[seg(B, D)]] 的交点 [[P]]，作 [[line(A, B)]] 与 [[circle(A, B)]] 将 [[B]] 关于 [[A]] 对称至 [[B']]，则 $|B'B| = 2|AB|$ 且 $\\frac{|BB'|}{|B'A|} = 2$。",
            "连 [[line(C, B')]] 交 [[seg(B, D)]] 于 [[G₂₂]]；由 $\\triangle DG_{22}C \\sim \\triangle BG_{22}B'$ 得 $\\frac{|DG_{22}|}{|G_{22}B|} = \\frac{|CD|}{|B'B|} = \\frac{|CD|}{2|AB|}$。",
            "连 [[line(P, B')]] 交腰 [[seg(B, C)]] 于 [[F₂]]。对 $\\triangle BAC$ 及截线 $B'PF_2$ 应用梅涅劳斯定理（结合 $\\triangle PAB \\sim \\triangle PCD$ 所得 $\\frac{|AP|}{|PC|} = \\frac{|AB|}{|CD|}$），有 $2 \\cdot \\frac{|AB|}{|CD|} \\cdot \\frac{|CF_2|}{|F_2 B|} = 1$，故 $\\frac{|CF_2|}{|F_2 B|} = \\frac{|CD|}{2|AB|} = \\frac{|DG_{22}|}{|G_{22}B|}$。",
            "在 $\\triangle BDC$ 中由平行线分线段成比例逆定理知 [[line(G₂₂, F₂)]] 平行于 $CD$ 与 $AB$，它交 [[seg(D, A)]] 于 [[E₂]]，恰位于对角线将其三等分的高度比 $\\frac{|CD|}{2|AB|}$ 处。"
          ]
        }
      },
      "v-6L-16E-2V": {
        "variantLabels": {
          "1": "三等分平行截线 EF (₁)",
          "2": "三等分平行截线 EF (₂)"
        },
        "proof": {
          "steps": [
            "由 [[perpBisector(C, D)]] 取 [[seg(C, D)]] 的中点 [[M_CD]]，连 [[line(A, M_CD)]] 交 [[seg(B, D)]] 于 [[G₂₂]]，作 [[parallel(seg(A, B), G₂₂)]] 即得位于对角线交点与底边 $CD$ 之间的第一条截线 [[E₂]]–[[F₂]]（将两腰按 $2|AB| : |CD|$ 分割）。",
            "对称地由 [[perpBisector(A, B)]] 取 [[seg(A, B)]] 的中点 [[M_AB]]，连 [[line(D, M_AB)]] 交 [[seg(A, C)]] 于 [[G₁₁]]，作 [[parallel(seg(A, B), G₁₁)]] 即得位于对角线交点与底边 $AB$ 之间的第二条截线 [[E₁]]–[[F₁]]（将两腰按 $|AB| : 2|CD|$ 分割）。"
          ],
          "variantNote": "任意凸梯形均存在两条被对角线三等分的平行截线，分别位于对角线交点偏向 $CD$ 一侧与偏向 $AB$ 一侧。"
        }
      }
    }
  },
  "Iota/L7": {
    "title": "最小周长 - 2",
    "prompt": "在已知锐角三角形内作一个周长最小的内接三角形。",
    "solutions": {
      "le-6L-8E": {
        "variantLabels": {
          "1": "垂足三角形 XYZ"
        },
        "proof": {
          "keyIdea": "由法尼亚诺定理，锐角三角形周长最小的内接三角形为其垂足三角形；利用一个泰勒斯圆定出两个垂足，再仅用一圆将其中一个垂足关于 $BC$ 对称，展开的台球反射光线即可在画出一条边的同时定出第三个垂足。",
          "steps": [
            "作 [[perpBisector(B, C)]] 交 [[seg(B, C)]] 于中点 [[M]]，并以 $BC$ 为直径作泰勒斯圆 [[circle(M, B)]]。因 $\\triangle ABC$ 为锐角三角形，[[circle(M, B)]] 必在边内部交 [[seg(C, A)]] 与 [[seg(A, B)]] 于垂足 [[H_B]]（$\\angle BH_B C = 90^\\circ$）和 [[H_C]]（$\\angle CH_C B = 90^\\circ$）。",
            "由于 [[H_B]] 已在 [[circle(M, B)]] 上且 [[M]]、[[C]] 均在直线 $BC$ 上，仅作一圆 [[circle(C, H_B)]] 与 [[circle(M, B)]] 相交所得另一交点 [[H_B']] 即为 [[H_B]] 关于 $BC$ 的对称点。",
            "设 [[A]] 在 $BC$ 上的垂足为 $H_A^*$。由四点共圆 $ABH_A^* H_B$ 与 $ACH_A^* H_C$ 得 $\\angle CH_A^* H_B = \\angle A = \\angle BH_A^* H_C$，故 $H_C$–$H_A^*$–$H_B'$ 三点共线！因此连 [[line(H_C, H_B')]] 在画出边 $H_C H_A$ 的同时交 [[seg(B, C)]] 于垂足 [[H_A]]（$= H_A^*$）。",
            "最后连 [[line(H_B, H_C)]] 与 [[line(H_A, H_B)]] 即完成垂足三角形 $\\triangle H_A H_B H_C$，它在三边处均满足等角反射定律，由法尼亚诺定理知其周长全局最小。"
          ]
        }
      }
    }
  },
  "Iota/L8": {
    "title": "线段的调和平均",
    "prompt": "在已知射线上作一点，使所得线段的长度等于两条相邻已知线段长度的调和平均数。",
    "solutions": {
      "le-4L-4E": {
        "variantLabels": {
          "1": "调和平均点 P"
        },
        "proof": {
          "keyIdea": "利用泰勒斯定理与一次对称，过点 $A$ 作出平行于射线 $OU$ 且长为 $2|AO|$ 的线段 $AQ$，再连 $BQ$ 由相似三角形按比例 $\\frac{|OB|}{|AO| + |OB|}$ 缩放 $2|AO|$。",
          "steps": [
            "作半径为 $a = |AO|$ 的 [[circle(O, A)]]，分别交 [[seg(O, B)]] 于 [[A']]（$|OA'| = a$，故直径 $AA'$ 长为 $2a$）、交 [[ray(O, U)]] 于 [[C]]（$|OC| = a$）。由直径 $AA'$ 上的泰勒斯定理知 $AC \\perp A'C$。",
            "作 [[circle(A, A')]] 与 [[circle(C, A')]] 将 [[A']] 关于直线 $AC$ 对称至 [[Q]]。因 $A'C \\perp AC$，[[C]] 为 $A'Q$ 的中点；结合 [[O]] 为 $A'A$ 的中点知 $OC$ 为 $\\triangle A'AQ$ 的中位线，故 $AQ \\parallel OC$ 且 $|AQ| = 2|OC| = 2a$。",
            "连 [[line(B, Q)]] 交 [[ray(O, U)]]（即射线 $OC$）于 [[P]]。记 $b = |OB|$，由 $OP \\parallel AQ$ 及 $|BA| = |BO| + |OA| = b + a$，相似三角形 $\\triangle BOP \\sim \\triangle BAQ$ 给出 $|OP| = |AQ| \\cdot \\frac{|BO|}{|BA|} = \\frac{2ab}{a + b}$。"
          ]
        }
      }
    }
  },
  "Iota/L9": {
    "title": "由角与重心作三角形",
    "prompt": "作一条连接已知角两边的线段，使所得三角形以点 O 为重心。",
    "solutions": {
      "l-5L-8E": {
        "variantLabels": {
          "1": "三角形 VXY"
        },
        "proof": {
          "keyIdea": "过点 $O$ 作射线 $VA$ 的平行线将 $O$ 投影到射线 $VB$ 上，将该截距三倍化得顶点 $Y_0$，再将投影点关于 $O$ 对称以定出第三边 $X_0 Y_0$ 的方向。",
          "steps": [
            "过 [[O]] 作 [[parallel(ray(V, A), O)]] 交 [[ray(V, B)]] 于 [[P_B]]。沿 [[ray(V, B)]] 依次作 [[circle(P_B, V)]]（在 $2|VP_B|$ 处标出 [[Q_B]]）与 [[circle(Q_B, P_B)]]，定出满足 $|VY_0| = 3|VP_B|$ 的顶点 [[Y₀]]，故 $|Y_0 P_B| = \\frac{2}{3}|Y_0 V|$。",
            "作 [[circle(O, P_B)]] 将 [[P_B]] 沿 [[parallel(ray(V, A), O)]] 关于 [[O]] 对称至 [[R]]（$|P_B R| = 2|P_B O|$），连 [[line(Y₀, R)]] 交 [[ray(V, A)]] 于 [[X₀]]。",
            "由 $P_B R \\parallel VX_0$ 及 $\\triangle Y_0 P_B R \\sim \\triangle Y_0 V X_0$ 得 $|P_B R| = \\frac{2}{3}|VX_0|$，故 $|P_B O| = \\frac{1}{2}|P_B R| = \\frac{1}{3}|VX_0| = \\frac{2}{3}|VM_A|$（其中 $M_A$ 为 $VX_0$ 的中点）。因此以 [[Y₀]] 为中心、比为 $\\frac{2}{3}$ 的位似变换将 $M_A$ 映为 $O$，即 [[O]] 位于中线 $Y_0 M_A$ 的 $2 : 1$ 分点处，恰为 $\\triangle VX_0 Y_0$ 的重心。"
          ]
        }
      },
      "e-7L-7E": {
        "variantLabels": {
          "1": "三角形 VXY"
        },
        "proof": {
          "keyIdea": "利用两个圆在直线 $VO$ 上同时定出 $\\frac{3}{2}VO$（对边中点 $M$）与 $3VO$（点 $P_3$），再将过 $M$ 的中垂线截距对称，无需平行线宏工具即可构造平行四边形 $V Z_U P_3 Z_W$。",
          "steps": [
            "连 [[line(V, O)]]，作 [[circle(O, V)]]（标出满足 $|VP_2| = 2|VO|$ 的 [[P₂]]）与 [[circle(P₂, O)]]，后者在 [[line(V, O)]] 上标出 [[P₃]]（$|VP_3| = 3|VO|$），同时交 [[circle(O, V)]] 于 [[C]]、[[D]] 两点。",
            "直线 [[line(C, D)]] 为 $OP_2$ 的垂直平分线，交 [[line(V, O)]] 于 [[M]]，满足 $|VM| = \\frac{3}{2}|VO| = |MP_3|$（即 $|VO| : |OM| = 2 : 1$）。记 [[N]] 为 [[ray(V, A)]] 与 [[line(C, D)]] 的交点；因 $OM \\perp CD$，作 [[circle(O, N)]] 交弦 [[line(C, D)]] 于另一点 [[N']]，则 [[M]] 平分 $NN'$。",
            "在四边形 $VNP_3 N'$ 中，对角线 $VP_3$ 与 $NN'$ 共用中点 [[M]]，故 $VNP_3 N'$ 为平行四边形，从而 [[line(P₃, N')]] $\\parallel$ [[ray(V, A)]]。",
            "记 [[line(P₃, N')]] 与 [[ray(V, B)]] 交于 [[Z_W]]，连 [[line(M, Z_W)]] 交 [[ray(V, A)]] 于 [[Z_U]]。由 $\\triangle MVZ_U \\cong \\triangle MP_3 Z_W$（ASA）知 [[M]] 为对边 $Z_U Z_W$ 的中点，而中线 $VM$ 上 $|VO| : |OM| = 2 : 1$，故 [[O]] 为 $\\triangle V Z_U Z_W$ 的重心。"
          ]
        }
      }
    }
  },
  "Iota/L10": {
    "title": "三角形中位线",
    "prompt": "作已知锐角三角形的一条中位线。",
    "solutions": {
      "l-2L-6E": {
        "variantLabels": {
          "1": "中位线"
        },
        "proof": {
          "keyIdea": "在锐角三角形中，$AB$ 与 $CA$ 的中点分别是直角三角形 $\\triangle AH_A B$ 与 $\\triangle AH_A C$ 的外心，故二者均位于高线 $AH_A$ 的垂直平分线上。",
          "steps": [
            "过 [[A]] 作高线 [[perp(seg(B, C), A)]]，由 $\\triangle ABC$ 为锐角三角形知其交 [[seg(B, C)]] 内部于垂足 [[H_A]]，形成直角 $\\angle AH_A B = \\angle AH_A C = 90^\\circ$。",
            "在直角三角形 $\\triangle AH_A B$ 与 $\\triangle AH_A C$ 中，斜边 $AB$、$CA$ 的中点均与 [[A]]、[[H_A]] 等距。因此 [[perpBisector(A, H_A)]] 直接穿过 [[seg(A, B)]] 的中点 [[M_AB]] 与 [[seg(C, A)]] 的中点 [[M_CA]]，仅用两步即作出中位线。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "中位线"
        },
        "proof": {
          "keyIdea": "分别以 $D$、$E$（$|AE| = 2|AD|$）为圆心作过顶点 $A$ 的两个嵌套圆，以 $A$ 为位似中心将对边 $BC$ 按比例 $\\frac{1}{2}$ 缩小。",
          "steps": [
            "在 [[seg(A, B)]] 上适当取点 [[D]]，使 [[circle(D, A)]] 交 [[seg(A, B)]] 于 [[E]]（$|AE| = 2|AD|$，$AE$ 为直径），且以 [[E]] 为圆心、$|EA|$ 为半径的 [[circle(E, A)]] 与 [[seg(B, C)]] 交于相异两点 [[F]]、[[G]]。",
            "连 [[line(A, F)]] 与 [[line(A, G)]]，分别交 [[circle(D, A)]] 于另一点 [[H]] 与 [[I]]。由 [[circle(D, A)]] 的直径 $AE$ 及泰勒斯定理知 $EH \\perp AF$、$EI \\perp AG$；又在 [[circle(E, A)]] 上有 $|EF| = |EA| = |EG|$，高线 $EH$、$EI$ 分别平分等腰三角形 $\\triangle EAF$ 与 $\\triangle EAG$ 的底边，故 [[H]]、[[I]] 分别为 $AF$、$AG$ 的中点。",
            "因此 [[line(H, I)]] 是直线 $BC$ 在以 [[A]] 为中心、比为 $\\frac{1}{2}$ 的位似变换下的像，必交 [[seg(A, B)]] 与 [[seg(C, A)]] 于各自的中点 [[M_AB]] 与 [[M_CA]]。"
          ]
        }
      },
      "v-6L-12E-3V": {
        "variantLabels": {
          "1": "中位线 (₁)",
          "2": "中位线 (₂)",
          "3": "中位线 (₃)"
        },
        "proof": {
          "steps": [
            "依次作 [[perpBisector(A, B)]]、[[perpBisector(B, C)]] 与 [[perpBisector(C, A)]]，定出三边中点 [[M_AB]]、[[M_BC]] 与 [[M_CA]]。",
            "两两连接三边中点作 [[line(M_BC, M_AB)]]、[[line(M_AB, M_CA)]] 与 [[line(M_CA, M_BC)]]，即得 $\\triangle ABC$ 的全部三条中位线。"
          ],
          "variantNote": "任意三角形恰有三条中位线，每条中位线平行于对边且等于对边的一半，三线将 $\\triangle ABC$ 剖分为四个全等的小三角形。"
        }
      }
    }
  }
};
