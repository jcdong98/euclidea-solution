import type { LevelLocaleEntry } from '../../../types';

export const OMICRON_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Omicron/L1": {
    "title": "线段中点*",
    "prompt": "仅用圆规求作已知两点连线的中点。",
    "solutions": {
      "le-6L-6E": {
        "variantLabels": {
          "1": "中点 M"
        },
        "proof": {
          "keyIdea": "马歇罗尼（摩尔–马歇罗尼定理）单规中点作图：先用三圆步进将线段 $AB$ 倍长至点 $C_1$（$|AC_1| = 2|AB|$），再用三圆将 $C_1$ 关于圆 $A(B)$ 作单规反演，使距离折半得 $|AM| = \\frac{1}{2}|AB|$。",
          "steps": [
            "以 $d = |AB|$ 为半径作 [[circle(A, B)]] 与 [[circle(B, A)]] 交于 [[U₁]]、[[U₂]]，则 $\\triangle ABU_1$ 与 $\\triangle ABU_2$ 均为正三角形，故 $|U_1U_2| = \\sqrt{3}\\,d$。",
            "作 [[circle(U₁, U₂)]] 交 [[circle(B, A)]] 于另一点 [[C₁]]。记 [[A]] 关于 [[B]] 的倍长点为 $C_1'$（$|BC_1'| = d$），在 $\\triangle U_1BC_1'$ 中由 $\\angle U_1BC_1' = 120^\\circ$ 算得 $|U_1C_1'| = \\sqrt{3}\\,d = |U_1U_2|$，故 [[C₁]] 即落在射线 $AB$ 上且 $|AC_1| = 2d$。",
            "再将 [[C₁]] 关于 [[circle(A, B)]] 反演：作半径为 $2d$ 的 [[circle(C₁, A)]] 对称截 [[circle(A, B)]] 于 [[P₁]]、[[P₂]]，再作半径为 $d$ 的 [[circle(P₁, A)]] 与 [[circle(P₂, A)]] 交于射线 $AB$ 上的第二点 [[M]]。因等腰 $\\triangle C_1AP_1$（腰 $2d$、底 $d$）与等腰 $\\triangle P_1AM$（腰 $d$）共底角 $\\angle P_1AC_1$，由相似比 $\\frac{|AM|}{d} = \\frac{d}{2d}$ 得 $|AM| = \\frac{1}{2}d$，[[M]] 即为 $AB$ 的中点。"
          ]
        }
      }
    }
  },
  "Omicron/L2": {
    "title": "复制圆",
    "prompt": "以给定点为圆心，作一个与已知圆半径相等的圆。",
    "solutions": {
      "le-4L-4E": {
        "variantLabels": {
          "1": "以 B 为圆心的等圆"
        },
        "proof": {
          "steps": [
            "作 [[circle(A, B)]] 与 [[circle(B, A)]] 交于 $AB$ 中垂线 $\\ell$ 上的正三角形顶点 [[C]]，并在 $AB$ 另一侧取 [[circle(A)]] 与 [[circle(B, A)]] 的交点 [[D]]，此时 $|AD| = r$ 为 [[circle(A)]] 的半径且 $D \\notin \\ell$。",
            "关于中垂线 $\\ell$ 的反射保持 [[C]] 及 [[circle(C, D)]] 不变，且互换 [[A]] $\\leftrightarrow$ [[B]]、将 [[circle(B, A)]] 映为 [[circle(A, B)]]；因此 [[D]] 关于 $\\ell$ 的对称点正是 [[circle(A, B)]] 与 [[circle(C, D)]] 的第二交点 [[E]]，满足 $|BE| = |AD| = r$，作 [[circle(B, E)]] 即在 [[B]] 处复制出 [[circle(A)]]。"
          ]
        }
      }
    }
  },
  "Omicron/L3": {
    "title": "直线与圆的交点",
    "prompt": "仅用圆规求作已知圆与过两个给定点的直线的交点。",
    "solutions": {
      "le-4L-4E": {
        "variantLabels": {
          "1": "交点 P₁, P₂"
        },
        "proof": {
          "keyIdea": "仅用圆规作出已知圆关于直线 $AB$ 的对称圆；原圆与其镜像圆的交点必落在对称轴 $AB$ 上，即为直线与圆的交点。",
          "steps": [
            "作 [[circle(A, O)]] 与 [[circle(B, O)]]，其第二交点 [[O']] 即为圆心 [[O]] 关于直线 $AB$ 的对称点；同时取 [[circle(A, O)]] 与 [[circle(O)]]（设半径为 $r$）的一个交点 [[D]]。",
            "因 [[D]] 已在 [[circle(A, O)]] 上（$|AD| = |AO|$），再作 [[circle(B, D)]] 交 [[circle(A, O)]] 于另一点 [[D']]，即将 [[D]] 关于直线 $AB$ 对称至 [[D']]，由对称保距得 $|O'D'| = |OD| = r$。",
            "于是 [[circle(O', D')]] 为 [[circle(O)]] 关于直线 $AB$（即 $OO'$ 的中垂线）的镜像圆。两圆公共点满足 $|PO| = r = |PO'|$，故必同时位于 [[circle(O)]] 与直线 $AB$ 上，两交点 [[P₁]]、[[P₂]] 即为所求。"
          ]
        }
      }
    }
  },
  "Omicron/L4": {
    "title": "三等长线段",
    "prompt": "在已知角的两边上分别取点连成线段，使截得的三条线段长度相等。",
    "solutions": {
      "l-6L-15E": {
        "variantLabels": {
          "1": "等长三线段 AX = XY = YB"
        },
        "proof": {
          "keyIdea": "在边 $OA$ 上自 $A$ 截取 $|PA| = |OB|$，过 $P$ 作 $OB$ 的平行线交圆 $B(A)$ 于 $Q$；将方向 $\\overrightarrow{OA}$ 旋至 $\\overrightarrow{BO}$ 的保向旋转把 $\\overrightarrow{YX}$ 映为 $\\overrightarrow{XQ}$，从而将 $|XY| = |XA|$ 化归为 $X$ 在 $QA$ 的中垂线上。",
          "steps": [
            "设 $a = |OA|,\\, b = |OB|$。作 [[compass(O, B; A)]] 交 [[seg(O, A)]] 于 [[P]]，使 $|PA| = b$（即 $|OP| = a - b$）；过 [[P]] 作 [[parallel(seg(O, B), P)]] 交 [[circle(B, A)]] 于 [[Q]]，则 $PQ \\parallel OB$ 且 $|BQ| = |BA|$。",
            "设 $X \\in OA,\\, Y \\in OB$ 满足 $|AX| = |BY| = s$，则 $|PX| = |OY| = |b - s|$。在 $\\triangle BPQ$（$|BQ| = |BA|,\\, |OP| = a - b$）与 $\\triangle OXY$ 中由余弦定理比对可知，在 $|XY| = s$ 的唯一解处，将单位方向 $\\overrightarrow{OA}$ 旋至 $\\overrightarrow{BO}$ 的旋转恰把向量 $\\overrightarrow{YX}$ 映为 $\\overrightarrow{XQ}$，故 $|XY| = |XA|$ 当且仅当 $|XQ| = |XA|$。",
            "因此作 [[perpBisector(Q, A)]] 交 [[seg(O, A)]] 定出 [[X]]（$|XQ| = |XA|$），再作 [[circle(X, A)]] 交 [[seg(O, B)]] 于 [[Y]]，连结 [[line(X, Y)]] 即满足 $|AX| = |XY| = |YB|$。"
          ]
        }
      },
      "e-7L-7E": {
        "variantLabels": {
          "1": "等长三线段 AX = XY = YB"
        },
        "proof": {
          "keyIdea": "先以固定尺度 $b = |OB|$ 构造顶点 $X''$ 落在 $AB$ 上的菱形 $OP_0X''Q_0$，再以点 $B$ 为位似中心作将 $X'' \\mapsto A$ 的位似变换，一举导出 $AX = XY = YB$。",
          "steps": [
            "以 $b = |OB|$ 为半径作 [[circle(O, B)]] 交 [[seg(O, A)]] 于 [[P₀]]（$|OP_0| = b$），作 [[circle(P₀, O)]] 交 [[line(A, B)]] 于 [[X'']]，再作 [[circle(X'', P₀)]] 交 [[circle(O, B)]] 于另一点 [[Q₀]]。由 $|OP_0| = |P_0X''| = |X''Q_0| = |OQ_0| = b$ 知 $OP_0X''Q_0$ 为边长 $b$ 的菱形，故 $Q_0X'' \\parallel OP_0 = OA$。",
            "连 [[line(B, Q₀)]] 交 [[seg(O, A)]] 于 [[X]]，考察以 [[B]] 为中心、相似比 $k = \\frac{|BX|}{|BQ_0|}$（将 $Q_0 \\mapsto X$）的位似变换 $\\mathcal{H}$。因 $XA \\parallel Q_0X''$ 且 $X'' \\in BA$，$\\mathcal{H}$ 必将 $X'' \\mapsto A$，故 $|XA| = k\\,|Q_0X''| = kb$。",
            "记 $Y' = \\mathcal{H}(O) \\in OB$，位似性质给出 $|BY'| = k\\,|BO| = kb = |XA|$ 且 $|XY'| = k\\,|Q_0O| = kb = |XA|$；故 $Y'$ 即为 [[circle(X, A)]] 与 [[seg(O, B)]] 的交点 [[Y]]，连结 [[line(X, Y)]] 即得 $|AX| = |XY| = |YB|$。"
          ]
        }
      }
    }
  },
  "Omicron/L5": {
    "title": "圆的切线*",
    "prompt": "在圆心未知的情况下，仅用直尺过圆外给定点作已知圆的切线。",
    "solutions": {
      "le-8L-8E": {
        "variantLabels": {
          "1": "切线"
        },
        "proof": {
          "keyIdea": "过圆外点 $P$ 引两条割线构造圆内接完全四点形，由布罗卡定理（极点–极线调和性质）仅用直尺作出点 $P$ 关于圆 $c$ 的极线，极线与圆的交点即为切点。",
          "steps": [
            "在圆 [[c]] 上任取相异两点 [[A₁]]、[[P₁]]，引割线 [[line(P, A₁)]] 与 [[line(P, P₁)]] 分别再交 [[c]] 于 [[A₂]] 与 [[B₂]]，得圆内接四边形 $A_1P_1B_2A_2$，其一组对边所在直线交于 [[P]]。",
            "连另一组对边 [[line(A₁, P₁)]] 与 [[line(A₂, B₂)]] 交于 [[Q]]，连两条对角线 [[line(A₁, B₂)]] 与 [[line(A₂, P₁)]] 交于 [[R_pt]]。",
            "由布罗卡定理，圆内接四边形 $A_1P_1B_2A_2$ 的对角三角形 $PQR_{\\text{pt}}$ 关于圆 [[c]] 自配极，故 [[line(Q, R_pt)]] 即为点 [[P]] 的极线；取其与 [[c]] 的交点 [[T]]，连结 [[line(P, T)]] 即得圆 [[c]] 的切线。"
          ]
        }
      },
      "v-9L-9E-2V": {
        "variantLabels": {
          "1": "切线 (₁)",
          "2": "切线 (₂)"
        },
        "proof": {
          "keyIdea": "直尺作出的极线 $QR_{\\text{pt}}$（切点弦）同时截出圆 $c$ 上的两个切点，仅需多连一条直线即可得到第二条切线。",
          "steps": [
            "在 [[c]] 上取点 [[A₁]]、[[P₁]]，作割线 [[line(P, A₁)]]、[[line(P, P₁)]] 再交 [[c]] 于 [[A₂]]、[[B₂]]，取 [[line(A₁, P₁)]] 与 [[line(A₂, B₂)]] 的交点 [[Q]]，以及 [[line(A₁, B₂)]] 与 [[line(A₂, P₁)]] 的交点 [[R_pt]]。",
            "由圆内接四边形 $A_1P_1B_2A_2$ 的布罗卡定理，[[line(Q, R_pt)]] 为 [[P]] 关于 [[c]] 的极线，与 [[c]] 交于两个切点 [[T_a]] 与 [[T_b]]。",
            "连结 [[line(P, T_a)]] 与 [[line(P, T_b)]]，即得过 [[P]] 的全部两条切线。"
          ],
          "variantNote": "圆外一点 $P$ 向圆 $c$ 总可引两条对称切线，其切点由切点弦 $QR_{\\text{pt}}$ 一次截出。"
        }
      }
    }
  },
  "Omicron/L6": {
    "title": "拿破仑问题",
    "prompt": "仅用圆规求作已知圆的圆心。",
    "solutions": {
      "le-6L-6E": {
        "variantLabels": {
          "1": "圆心 O"
        },
        "proof": {
          "keyIdea": "关于辅助圆 $P_0(P_1)$ 连续施行两次单规反演：第一次反演将过反演中心 $P_0$ 的已知圆 $c$ 的未知圆心映为可作出的反演像 $D$，第二次将 $D$ 关于 $P_0(P_1)$ 反演回原位即得圆心 $O$。",
          "steps": [
            "在已知圆 [[c]]（设未知圆心为 $O^*$、半径为 $r$）上取点 [[P₀]]、[[P₁]]（满足 $r < |P_0P_1| < 2r$），以 $a = |P_0P_1|$ 为半径作反演基圆 [[circle(P₀, P₁)]]，再交 [[c]] 于 [[P₂]]。",
            "作 [[circle(P₁, P₀)]] 与 [[circle(P₂, P₀)]] 交于第二点 [[D]]。由关于 $P_1P_2$ 中垂线的对称性知 [[D]] 在射线 $P_0O^*$ 上，且等腰 $\\triangle O^*P_0P_1$（腰 $r$、底 $a$）与等腰 $\\triangle P_1P_0D$（腰 $a$、共底角 $\\angle O^*P_0P_1$）相似，得 $\\frac{|P_0D|}{a} = \\frac{a}{r}$，即 $|P_0D| = \\frac{a^2}{r}$。",
            "再将 [[D]] 关于 [[circle(P₀, P₁)]] 反演：作 [[circle(D, P₀)]]（半径 $\\frac{a^2}{r} > a$）交 [[circle(P₀, P₁)]] 于 [[E]]、[[P₃]]，再作半径为 $a$ 的 [[circle(E, P₀)]] 与 [[circle(P₃, P₀)]] 交于射线 $P_0D$ 上的第二点 [[O]]。",
            "对等腰三角形 $\\triangle DP_0E$（腰 $\\frac{a^2}{r}$、底 $a$）与 $\\triangle EP_0O$（腰 $a$）复用同一相似关系，得射线 $P_0O^*$ 上的距离 $|P_0O| = \\frac{a^2}{|P_0D|} = r$，故 [[O]] 即为圆 [[c]] 的圆心。"
          ]
        }
      }
    }
  },
  "Omicron/L7": {
    "title": "作垂线**",
    "prompt": "仅用直尺过已知圆的圆心向给定直线作垂线。",
    "solutions": {
      "le-10L-10E": {
        "variantLabels": {
          "1": "垂线"
        },
        "proof": {
          "keyIdea": "仅用直尺求作直线 $l$ 关于圆 $O$ 的极点 $J$：先用布罗卡定理作出 $l$ 上一点的极线，再结合直径所对圆周角为直角的垂心性质定位极点 $J$，连结 $OJ$ 即垂直于 $l$。",
          "steps": [
            "在直线 [[l]] 上取圆外点 [[B_pt]]，在 [[circle(O)]]（设半径为 $r$）上取点 [[P₁]]；作割线 [[line(B_pt, P₁)]] 再交 [[circle(O)]] 于 [[C]]，并过圆心作直径直线 [[line(O, B_pt)]] 交 [[circle(O)]] 于对径点 [[D]]、[[E]]。",
            "在圆内接四边形 $P_1CDE$ 中，弦 $P_1C$ 与 $DE$ 交于 [[B_pt]]，故取 [[line(C, D)]] 与 [[line(P₁, E)]] 的交点 [[F]]、[[line(P₁, D)]] 与 [[line(C, E)]] 的交点 [[G]]，由布罗卡定理知 [[line(F, G)]] 为 [[B_pt]] 的极线（故 $FG \\perp DE$，设垂足为 $K$，满足 $OK \\cdot OB_{\\text{pt}} = r^2$）。",
            "标出 [[H]] $=$ [[line(F, G)]] $\\cap$ [[l]]，作割线 [[line(E, H)]] 再交 [[circle(O)]] 于 [[I]]，连 [[line(D, I)]] 交 [[line(F, G)]] 于 [[J]]。因 $DE$ 为直径，泰勒斯定理给出 $DI \\perp EH$；结合 $JH \\perp DE$，可知 [[H]] 为 $\\triangle DEJ$ 的垂心。",
            "由直角三角形相似 $\\triangle DKH \\sim \\triangle JKE$ 得 $\\overrightarrow{KH}\\cdot\\overrightarrow{KJ} = -KD\\cdot KE = r^2 - OK^2$，故 $\\overrightarrow{OJ}\\cdot\\overrightarrow{OH} = OK^2 + \\overrightarrow{KJ}\\cdot\\overrightarrow{KH} = r^2$，且 $\\overrightarrow{OJ}\\cdot\\overrightarrow{OB_{\\text{pt}}} = OK\\cdot OB_{\\text{pt}} = r^2$。因此 [[l]]（即 $B_{\\text{pt}}H$）正是点 [[J]] 的极线，故 [[line(O, J)]] $\\perp$ [[l]]。"
          ]
        }
      }
    }
  },
  "Omicron/L8": {
    "title": "直线与圆的交点*",
    "prompt": "仅用圆规求作已知圆与过圆心及给定点的直线的交点。",
    "solutions": {
      "le-7L-7E": {
        "variantLabels": {
          "1": "交点 U₁, P₂"
        },
        "proof": {
          "keyIdea": "因直线 $OA$ 过圆心 $O$，关于 $OA$ 对称使圆自身重合而失效；故先借两次轴反射在过 $O$ 且垂直于 $OA$ 的法线上定出点 $M$，再用勾股斜边长 $\\sqrt{r^2 + |OM|^2}$ 为半径作正交圆 $M(T)$，其与圆 $O$ 的正交交点恰为直径 $OA$ 的两端点。",
          "steps": [
            "作 [[circle(A, O)]] 对称截 [[circle(O)]]（半径为 $r$）于 [[B]]、[[P₁]]（设 $\\alpha = \\angle AOB$，弦长 $2h = |BP_1| = 2r\\sin\\alpha$）。作半径为 $r$ 的 [[circle(B, O)]] 再交 [[circle(A, O)]] 于 [[O]] 关于 $AB$ 的对称点 [[P₆]]：因 $|AO| = |AB|$，$\\triangle AOB$ 在 $AO$ 与 $AB$ 边上的高均等于 $h$，故 $|OP_6| = 2h$ 且 $\\angle BOP_6 = 90^\\circ - \\alpha$。",
            "作半径为 $2h$ 的 [[circle(O, P₆)]]，再交 [[circle(A, O)]] 于 [[P₆]] 关于 $OA$ 的对称点 [[P₇]]，并再交 [[circle(B, O)]] 于 [[P₆]] 关于 $OB$ 的对称点 [[M]]。关于 $OB$ 反射使角度叠加为 $\\alpha + (90^\\circ - \\alpha) = 90^\\circ$，故 $OM \\perp OA$ 且 $|OM| = 2h$；又由 $\\overrightarrow{OM} = \\overrightarrow{P_1B}$ 得 $\\overrightarrow{BM} = \\overrightarrow{P_1O}$，向 $OP_1$ 的法向投影可知 $B$ 与 $P_7$ 到 $OP_1$ 的距离同为 $2r\\sin\\alpha\\cos\\alpha$，故 $M, B, P_7$ 共线且 $\\overrightarrow{BP_7} = (1 - 4\\sin^2\\alpha)\\overrightarrow{BM}$。",
            "作 [[circle(M, B)]] 交 [[circle(B, O)]] 于 [[P₁₁]]，构成边长为 $r$ 的正三角形 $\\triangle BMP_{11}$。在 $\\triangle P_7BP_{11}$ 中由余弦定理得 $|P_7P_{11}|^2 = |BP_7|^2 + r^2 - (1 - 4\\sin^2\\alpha)r^2 = |BP_7|^2 + 4h^2$。",
            "取 [[circle(P₇, P₁₁)]] 与半径为 $2h$ 的 [[circle(B, P₁)]] 的交点 [[T]]，则 $|P_7T|^2 = |BP_7|^2 + |BT|^2$，由勾股逆定理知 $\\angle P_7BT = \\angle MBT = 90^\\circ$。在 $\\text{Rt}\\triangle MBT$ 中有 $|MT|^2 = |BM|^2 + |BT|^2 = r^2 + |OM|^2$，故 [[circle(M, T)]] 与 [[circle(O)]] 正交相交（$\\angle MOU_1 = \\angle MOP_2 = 90^\\circ$），所得两交点 [[U₁]]、[[P₂]] 即为直线 $OA$ 与 [[circle(O)]] 的对径交点。"
          ]
        }
      }
    }
  },
  "Omicron/L9": {
    "title": "圆心在直线上的圆",
    "prompt": "作一个圆心在给定直线上的圆，使其经过给定点且与已知圆相切。",
    "solutions": {
      "l-7L-17E": {
        "variantLabels": {
          "1": "圆心在直线上的切圆"
        },
        "proof": {
          "keyIdea": "圆心在直线 $l$ 上且过点 $A$ 的所有圆构成关于 $l$ 对称的共轴圆束；求出该圆束与圆 $O$ 的根心 $F$ 后，由圆幂定理算得切线长 $|FT| = \\sqrt{|FH|^2 - |HA|^2}$，即可定出切点 $T$。",
          "steps": [
            "凡圆心在 [[l]] 上且过 [[A]] 的圆 $\\omega$，必同时经过 [[A]] 关于 [[l]] 的对称点 $A'$，故此类圆共享根轴 [[perp(l, A)]]（交 [[l]] 于 $AA'$ 的中点 [[H]]）。在 [[l]] 上任取点 [[G]] 作辅助圆 [[circle(G, A)]] 交 [[circle(O)]] 于 [[D]]、[[E]]，延长公共弦 [[line(D, E)]] 交 [[perp(l, A)]] 即得根心 [[F]]。",
            "若 $\\omega$ 与 [[circle(O)]] 切于 $T$，则公切线必过根心 [[F]]，由圆幂定理得 $|FT|^2 = FA \\cdot FA' = (|FH| - |HA|)(|FH| + |HA|) = |FH|^2 - |HA|^2$。",
            "作 [[compass(H, F; A)]] 交 [[l]] 于 [[K]]，在 $\\text{Rt}\\triangle AHK$（$AH \\perp l$）中有 $|HK|^2 = |AK|^2 - |HA|^2 = |FH|^2 - |HA|^2 = |FT|^2$。以 [[compass(H, K; F)]] 将 $|HK|$ 移至 [[F]] 交 [[circle(O)]] 于切点 [[T]]，连 [[line(O, T)]] 交 [[l]] 于圆心 [[C]]，作 [[circle(C, A)]] 即与 [[circle(O)]] 相切于 [[T]]。"
          ]
        }
      },
      "e-9L-9E": {
        "variantLabels": {
          "1": "圆心在直线上的切圆"
        },
        "proof": {
          "keyIdea": "以 $l$ 上两点为圆心过 $A$ 作两个辅助圆截圆 $O$ 得两条共交于（无需显式作出的）根心 $F$ 的弦，直接对圆内接四边形应用布罗卡定理作出 $F$ 的极线，仅用 $9\\text{E}$ 定出切点 $T$。",
          "steps": [
            "在 [[l]] 上任取相异两点 [[G₁]]、[[G₂]]，作 [[circle(G₁, A)]] 与 [[circle(G₂, A)]] 分别截 [[circle(O)]] 得弦 $D_1E_1$（[[D₁]]、[[E₁]]）与 $D_2E_2$（[[D₂]]、[[E₂]]）。由于圆心在 [[l]] 上且过 [[A]] 的共轴圆束均过 [[A]] 关于 [[l]] 的对称点，根轴 $D_1E_1$、$D_2E_2$ 与切点 $T$ 处的公切线三线共点于根心 $F$。",
            "因 $FT$ 与 [[circle(O)]] 相切，切点 $T$ 落在根心 $F$ 关于 [[circle(O)]] 的极线上。无需画出 $F$，在圆内接四边形 $D_1E_1E_2D_2$ 中对边弦 $D_1E_1$ 与 $D_2E_2$ 交于 $F$，由布罗卡定理知 $F$ 的极线即为 [[line(Q_pt, R_pt)]]，其中 [[Q_pt]] $=$ [[line(D₁, D₂)]] $\\cap$ [[line(E₁, E₂)]]，[[R_pt]] $=$ [[line(D₁, E₂)]] $\\cap$ [[line(E₁, D₂)]]。",
            "取极线 [[line(Q_pt, R_pt)]] 与 [[circle(O)]] 的交点 [[T]]，连 [[line(O, T)]] 交 [[l]] 于圆心 [[C]]，作 [[circle(C, A)]] 即过点 [[A]] 且与 [[circle(O)]] 切于 [[T]]。"
          ]
        }
      },
      "v-9L-19E-2V": {
        "variantLabels": {
          "1": "圆心在直线上的切圆 (₁)",
          "2": "圆心在直线上的切圆 (₂)"
        },
        "proof": {
          "keyIdea": "从根心 $F$ 引向圆 $O$ 的两条切线等长且均等于 $|HK|$，故以 $F$ 为圆心一圆即可同时截出两个切点 $T_a, T_b$。",
          "steps": [
            "作 [[perp(l, A)]] 交 [[l]] 于垂足 [[H]]，在 [[l]] 上取点 [[G]] 作 [[circle(G, A)]] 交 [[circle(O)]] 于 [[D]]、[[E]]，延长 [[line(D, E)]] 交 [[perp(l, A)]] 于根心 [[F]]。",
            "由 [[compass(H, F; A)]] 在 [[l]] 上截出点 [[K]] 使 $|HK|^2 = |FH|^2 - |HA|^2$，再作 [[compass(H, K; F)]] 交 [[circle(O)]] 于从 [[F]] 所引切线的两个切点 [[T_a]] 与 [[T_b]]。",
            "连 [[line(O, T_a)]] 与 [[line(O, T_b)]] 分别交 [[l]] 于圆心 [[C_a]]、[[C_b]]，作 [[circle(C_a, A)]] 与 [[circle(C_b, A)]] 即得全部两个相切圆。"
          ],
          "variantNote": "过根心 $F$ 向圆 $O$ 所引两条切线的切点 $T_a, T_b$，分别给出圆心在 $l$ 上的两个相切圆解。"
        }
      }
    }
  },
  "Omicron/L10": {
    "title": "3° 角",
    "prompt": "以给定射线为一边作一个 3° 的角。",
    "solutions": {
      "l-6L-9E": {
        "variantLabels": {
          "1": "3° 直线"
        },
        "proof": {
          "keyIdea": "结合正三角形与正五边形黄金比，在顶点 $A$ 处分别作出 $+60^\\circ$ 方向与 $-54^\\circ$ 方向，平分两者的 $114^\\circ$ 夹角即由差角折半得 $\\frac{60^\\circ - 54^\\circ}{2} = +3^\\circ$。",
          "steps": [
            "在 [[ray(A, B)]] 上任取点 [[P₁]]（设 $|AP_1| = 1$）。作 [[circle(P₁, A)]] 交 [[ray(A, B)]] 于 [[Q]]（$|AQ| = 2$），并作 [[circle(A, P₁)]] 交 [[circle(P₁, A)]] 于 [[C₁]]，得正三角形 $\\triangle AP_1C_1$（$\\angle BAC_1 = +60^\\circ$）。",
            "作半径为 $2$ 的 [[circle(Q, A)]] 交半径为 $1$ 的 [[circle(A, P₁)]] 于另一半平面内的点 [[E]]（坐标 $x_E = \\frac{1}{4},\\, y_E = -\\frac{\\sqrt{15}}{4}$）。连 [[line(C₁, E)]] 交 [[ray(A, B)]] 于 [[G]]，算得 $x_G = \\frac{3 - \\sqrt{5}}{2}$，从而 $|QG| = 2 - \\frac{3 - \\sqrt{5}}{2} = \\frac{1 + \\sqrt{5}}{2} = \\varphi$（正五边形黄金比）。",
            "以 $\\varphi$ 为半径作 [[circle(Q, G)]] 交下半圆 [[circle(P₁, A)]] 于 [[X₂]]。由直径 $AQ$ 的泰勒斯定理知 $\\angle AX_2Q = 90^\\circ$，故 $\\sin\\angle QAX_2 = \\frac{|QX_2|}{|AQ|} = \\frac{\\varphi}{2} = \\sin 54^\\circ$，即射线 $AX_2$ 位于 $-54^\\circ$ 方向；最后作角平分线 [[angleBisector(C₁, A, X₂)]]，即与 [[ray(A, B)]] 成 $\\frac{+60^\\circ + (-54^\\circ)}{2} = +3^\\circ$ 角。"
          ]
        }
      },
      "e-7L-7E": {
        "variantLabels": {
          "1": "3° 直线"
        },
        "proof": {
          "keyIdea": "先作出一条与射线成 $15^\\circ$ 的割线（点 $A$ 到它的垂线方向为 $+75^\\circ$、垂距为 $\\frac{\\sqrt{6}}{2}$），再以 $A$ 为圆心、$\\sqrt{6}\\,\\varphi$ 为半径画圆截该割线，借正五边形中心角 $\\arccos\\left(\\frac{1}{2\\varphi}\\right) = 72^\\circ$ 由差角 $75^\\circ - 72^\\circ = 3^\\circ$ 仅用 $7\\text{E}$ 完成作图。",
          "steps": [
            "在 [[ray(A, B)]] 上取点 [[P]]（设 $|AP| = 1$）。作 [[circle(P, A)]] 交 [[ray(A, B)]] 于 [[C]]（$|AC| = 2$），作 [[circle(C, P)]] 交 [[circle(P, A)]] 于 [[D]]（正 $\\triangle PCD$）并交 [[ray(A, B)]] 于 [[E]]（$|AE| = 3$）。在直角三角形 $\\triangle PDE$ 中 $|ED| = \\sqrt{3}$，故作 [[circle(E, D)]] 交 [[ray(A, B)]] 于 [[F]] 得 $|AF| = 3 + \\sqrt{3}$。",
            "在顶角 $\\angle DEF = 150^\\circ$ 的等腰 $\\triangle EDF$ 中，[[line(D, F)]] 与 [[ray(A, B)]] 成 $15^\\circ$ 角，故 [[A]] 到 [[line(D, F)]] 的垂线段 $AN$ 方向为 $+75^\\circ$，且 $|AN| = (3 + \\sqrt{3})\\sin 15^\\circ = \\frac{\\sqrt{6}}{2}$；同时 [[line(D, F)]] 再交 [[circle(P, A)]] 于 [[P]] 正上方的点 [[G]]（$PG \\perp AB,\\, |PG| = 1$）。",
            "过 $C = (2, 0)$ 与 $G = (1, 1)$ 作 $45^\\circ$ 直线 [[line(C, G)]] 交 [[circle(E, D)]] 于 [[H]] $= (2 + \\varphi, -\\varphi)$（由 $(s - 1)^2 + s^2 = 3$ 解得 $s = \\varphi$），于是 $|AH|^2 = (2 + \\varphi)^2 + \\varphi^2 = 6 + 6\\varphi = 6\\varphi^2$，即 $|AH| = \\sqrt{6}\\,\\varphi$。",
            "作半径为 $\\sqrt{6}\\,\\varphi$ 的 [[circle(A, H)]] 交 [[line(D, F)]] 于 [[I₁]]。在 $\\text{Rt}\\triangle ANI_1$ 中，$\\cos\\angle NAI_1 = \\frac{|AN|}{|AI_1|} = \\frac{\\sqrt{6}/2}{\\sqrt{6}\\,\\varphi} = \\frac{1}{2\\varphi} = \\cos 72^\\circ$，故 $\\angle NAI_1 = 72^\\circ$，连结 [[line(A, I₁)]] 即与 [[ray(A, B)]] 成 $75^\\circ - 72^\\circ = +3^\\circ$ 角。"
          ]
        }
      },
      "v-7L-13E-2V": {
        "variantLabels": {
          "1": "3° 直线 (₁)",
          "2": "3° 直线 (₂)"
        },
        "proof": {
          "keyIdea": "复用同一组五圆与黄金分割点 $G$，同时取对称的两组 $(\\pm 60^\\circ, \\mp 54^\\circ)$ 方向并分别平分夹角，即可作出 $\\pm 3^\\circ$ 两条解直线。",
          "steps": [
            "在 [[ray(A, B)]] 上取点 [[P]]，依次作 [[circle(P, A)]]、[[circle(A, P)]]、[[circle(Q, A)]] 及连线 [[line(C₁, E)]]，在射线上截出 [[Q]] 与黄金比点 [[G]]，使 $|QG| = \\varphi\\,|AP|$。",
            "取 $+60^\\circ$ 交点 [[C₁]] $\\in$ [[circle(A, P)]] $\\cap$ [[circle(P, A)]] 与 $-54^\\circ$ 交点 [[X₂]] $\\in$ [[circle(P, A)]] $\\cap$ [[circle(Q, G)]]，作 [[angleBisector(C₁, A, X₂)]] 得 $+3^\\circ$ 直线。",
            "对称地取 $-60^\\circ$ 交点 [[C₂]] 与 $+54^\\circ$ 交点 [[X₁]]，作 [[angleBisector(C₂, A, X₁)]] 得方向为 $\\frac{-60^\\circ + 54^\\circ}{2} = -3^\\circ$ 的第二条对称 $3^\\circ$ 直线。"
          ],
          "variantNote": "过顶点 $A$ 与射线 $AB$ 成 $3^\\circ$ 夹角的直线共有两条，对称分布于 $AB$ 两侧（$+3^\\circ$ 与 $-3^\\circ$）。"
        }
      }
    }
  },
  "Omicron/L11": {
    "title": "米老鼠",
    "prompt": "作一个圆心在给定直线上的圆，使其与两个已知圆都相切，且两个已知圆位于所作圆的同一侧（同为内切或同为外切）。",
    "solutions": {
      "l-10L-24E": {
        "variantLabels": {
          "1": "圆心在直线上的同侧公切圆"
        },
        "proof": {
          "keyIdea": "运用阿波罗尼斯问题的同心半径缩减法，将两已知圆同时缩减 $r_2$（使 $c_2$ 退化为点 $O_2$，$c_1$ 缩为半径 $r_1 - r_2$ 的同心圆），化归为圆心在 $l$ 上、过点 $O_2$ 且与缩减圆相切的子问题。",
          "steps": [
            "连 [[line(O₁, O₂)]] 交 [[c₁]] 于朝向 $O_2$ 一侧的点 [[E]]（$|O_1E| = r_1$），交 [[c₂]] 于朝向 $O_1$ 一侧的点 [[F]]（$|O_2F| = r_2$）。以 [[compass(O₂, F; E)]] 将半径 $r_2$ 移至 [[E]]，在线段 $O_1E$ 上截得点 [[D]] 使 $|O_1D| = r_1 - r_2$，作出同心缩减圆 [[circle(O₁, D)]]。",
            "对直线 [[l]]、点 [[O₂]] 与 [[circle(O₁, D)]] 求解点圆相切问题：作 [[perp(l, O₂)]] 交 [[l]] 于 [[H]]，在 [[l]] 上任取 [[G]] 作辅助圆 [[circle(G, O₂)]] 交 [[circle(O₁, D)]] 于 [[U₁]]、[[U₂]]，延长根轴 [[line(U₁, U₂)]] 交 [[perp(l, O₂)]] 于根心 [[F_rad]]；再由 [[compass(H, F_rad; O₂)]] 在 [[l]] 上截出 [[K]]（$|HK|^2 = |HF_{\\text{rad}}|^2 - |HO_2|^2$），作 [[compass(H, K; F_rad)]] 交 [[circle(O₁, D)]] 于缩减切点 [[T']]。",
            "作 [[line(O₁, T')]] 交 [[l]] 于圆心 [[C]]，并交原圆 [[c₁]] 于切点 [[W]]。因过 [[O₂]] 的缩减解圆切 [[circle(O₁, D)]] 于 [[T']]（$|CT'| = |CO_2|$），沿半径 $O_1T'$ 向外还原 $r_2$ 至 [[W]] 即有 $|CW| = |CT'| \\pm r_2 = |CO_2| \\pm r_2$，故 [[circle(C, W)]] 与 [[c₁]]、[[c₂]] 在同侧同时相切。"
          ]
        }
      },
      "e-14L-14E": {
        "variantLabels": {
          "1": "圆心在直线上的同侧公切圆"
        },
        "proof": {
          "keyIdea": "先借 $EF$ 中垂线上的正三角形顶点作轴反射，以 $5\\text{E}$ 构造半径为 $r_1 - r_2$ 的缩减圆；再用布罗卡定理无需显式求根心，以 $9\\text{E}$ 作出极线定出缩减切点 $T'$。",
          "steps": [
            "作连心线 [[line(O₁, O₂)]] 分别交 [[c₁]]、[[c₂]] 于 [[E]]（$|O_1E| = r_1$）与 [[F]]（$|O_2F| = r_2$）。作 [[circle(E, F)]] 与 [[circle(F, E)]] 交于 $EF$ 中垂线 $\\ell_{EF}$ 上的点 [[G]]；作 [[circle(G, O₂)]] 将 [[O₂]] 关于 $\\ell_{EF}$ 对称反射（沿 [[line(O₁, O₂)]] 互换 $F \\leftrightarrow E$）至 [[D]]，使 $|ED| = |FO_2| = r_2$，仅用 $5\\text{E}$ 得半径为 $r_1 - r_2$ 的缩减圆 [[circle(O₁, D)]]。",
            "在 [[l]] 上取 [[G₁]]、[[G₂]] 作辅助圆 [[circle(G₁, O₂)]] 与 [[circle(G₂, O₂)]]，截 [[circle(O₁, D)]] 得弦 $D_1E_1$（[[D₁]]、[[E₁]]）与 $D_2E_2$（[[D₂]]、[[E₂]]），两弦延长线交于根心 $F_{\\text{rad}}$。对圆内接四边形 $D_1E_1E_2D_2$ 应用布罗卡定理，取 [[Q_pt]] $=$ [[line(D₁, D₂)]] $\\cap$ [[line(E₁, E₂)]] 与 [[R_pt]] $=$ [[line(D₁, E₂)]] $\\cap$ [[line(E₁, D₂)]]，则极线 [[line(Q_pt, R_pt)]] 交 [[circle(O₁, D)]] 于缩减切点 [[T']]。",
            "连 [[line(O₁, T')]] 交 [[l]] 于圆心 [[C]]、交 [[c₁]] 于切点 [[W]]，作 [[circle(C, W)]] 将半径还原 $r_2$，即得与 [[c₁]]、[[c₂]] 同侧相切的圆。"
          ]
        }
      },
      "v-12L-26E-2V": {
        "variantLabels": {
          "1": "圆心在直线上的同侧公切圆 (₁)",
          "2": "圆心在直线上的同侧公切圆 (₂)"
        },
        "proof": {
          "keyIdea": "从根心 $F_{\\text{rad}}$ 向缩减圆 $O_1(D)$ 所引两条切线的切点 $T'_a, T'_b$，沿半径同步还原后即给出全部两个同侧公切圆解。",
          "steps": [
            "由 [[line(O₁, O₂)]]、[[E]]、[[F]] 及 [[compass(O₂, F; E)]] 作出半径为 $r_1 - r_2$ 的缩减圆 [[circle(O₁, D)]]，再经 [[perp(l, O₂)]]、[[H]]、[[circle(G, O₂)]]、[[line(U₁, U₂)]] 与 [[compass(H, F_rad; O₂)]] 求出根心 [[F_rad]] 及切线长 $|HK|$。",
            "作 [[compass(H, K; F_rad)]] 交 [[circle(O₁, D)]] 于两个缩减切点 [[T'_a]] 与 [[T'_b]]。",
            "自 [[O₁]] 连 [[line(O₁, T'_a)]] 与 [[line(O₁, T'_b)]]，分别交 [[l]] 于圆心 [[C_a]]、[[C_b]] 并交 [[c₁]] 于切点 [[W_a]]、[[W_b]]；作 [[circle(C_a, W_a)]] 与 [[circle(C_b, W_b)]] 即得全部两个同侧相切圆。"
          ],
          "variantNote": "将两圆半径同减 $r_2$ 保持同侧相切关系（同外切或同内切）不变，因此过 $O_2$ 且切于 $O_1(D)$ 的两个缩减解一一对应于原问题的两个同侧公切圆。"
        }
      }
    }
  }
};
