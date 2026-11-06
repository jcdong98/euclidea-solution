import type { LevelLocaleEntry } from '../../../types';

export const KAPPA_ZH_CN: Readonly<Record<string, LevelLocaleEntry>> = {
  "Kappa/L1": {
    "title": "圆的切线",
    "prompt": "过圆外给定点作给定圆的切线。",
    "solutions": {
      "l-4L-6E": {
        "variantLabels": {
          "1": "切线"
        },
        "proof": {
          "steps": [
            "作 [[line(O, P)]] 与中垂线 [[perpBisector(O, P)]] 交于 $OP$ 的中点 [[M]]，则 [[circle(M, O)]] 以 $OP$ 为直径。",
            "在交点 [[T]] $\\in$ [[circle(O)]] $\\cap$ [[circle(M, O)]] 处，由直径所对圆周角为直角知 $\\angle OTP = 90^\\circ$，故 [[line(P, T)]] $\\perp OT$，即为 [[circle(O)]] 在 [[T]] 处的切线。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "切线"
        },
        "proof": {
          "keyIdea": "以 $P$ 为位似中心作相似比为 $2$ 的位似变换，使 $O$ 直接成为直径 $PO'$ 的中点，从而省去平分 $OP$ 的步骤。",
          "steps": [
            "在 [[line(P, O)]] 上取 [[A]] $\\in$ [[circle(O)]] $\\cap$ [[line(P, O)]]（设半径 $|OA| = r$），作 [[circle(O, P)]] 与 [[circle(A, P)]] 分别将 [[P]] 关于 [[O]]、[[A]] 对称至 [[O']]、[[A']]，则位似变换 $\\mathcal{H}(P, 2)$ 将 [[O]] $\\mapsto$ [[O']]、[[A]] $\\mapsto$ [[A']]，且 $|O'A'| = 2r$。",
            "于是 [[circle(O', A')]] 是 [[circle(O)]] 在 $\\mathcal{H}(P, 2)$ 下的像，而以 [[O]] 为圆心的 [[circle(O, P)]] 恰好以 $PO'$ 为直径。",
            "对 [[T']] $\\in$ [[circle(O, P)]] $\\cap$ [[circle(O', A')]]，由直径圆性质得 $\\angle O'T'P = 90^\\circ$，即 [[line(P, T')]] 与 [[circle(O', A')]] 相切于 [[T']]；再经逆位似 $\\mathcal{H}(P, 1/2)$ 保持过 [[P]] 的 [[line(P, T')]] 不变，知其与 [[circle(O)]] 相切于 $PT'$ 的中点。"
          ]
        }
      },
      "v-5L-7E-2V": {
        "variantLabels": {
          "1": "切线 (₁)",
          "2": "切线 (₂)"
        },
        "proof": {
          "steps": [
            "[[line(O, P)]] 与 [[perpBisector(O, P)]] 交于 $OP$ 的中点 [[M]]。因 $|OP| > r$，以 $OP$ 为直径的圆 [[circle(M, O)]] 与 [[circle(O)]] 交于关于 [[line(O, P)]] 对称的两点 [[T_a]]、[[T_b]]。",
            "由直径所对圆周角为直角得 $\\angle OT_aP = \\angle OT_bP = 90^\\circ$；反之过 [[P]] 的任一切点 $T$ 必满足 $\\angle OTP = 90^\\circ$ 从而落在 [[circle(M, O)]] 上，故 [[line(P, T_a)]] 与 [[line(P, T_b)]] 即为全部两条切线。"
          ],
          "variantNote": "取以 $OP$ 为直径的圆与给定圆的两个交点，即可得到过圆外一点的两条对称切线。"
        }
      }
    }
  },
  "Kappa/L2": {
    "title": "外公切线",
    "prompt": "作给定两圆的一条外公切线。",
    "solutions": {
      "l-6L-16E": {
        "variantLabels": {
          "1": "外公切线"
        },
        "proof": {
          "keyIdea": "构造腰长为圆心距 $d = |O_1O_2|$、底边长为 $2|r_1 - r_2|$ 的等腰 $\\triangle O_2O_1Z$，使 $O_1O_2$ 在 $O_1Z$ 上的投影恰好等于两圆半径之差。",
          "steps": [
            "连心线 [[line(O₁, O₂)]] 截 [[c₁]]（半径 $r_1$）得直径 $A_1B_1$（端点 [[A₁]]、[[B₁]]，长 $2r_1$），截 [[c₂]]（半径 $r_2$）得有向直径 $U_2V_2$（由 [[U₂]] 指向 [[V₂]]，长 $2r_2$）。",
            "用 [[compass(A₁, B₁; V₂)]] 将长度 $|A_1B_1| = 2r_1$ 移至圆心 [[V₂]]，沿 $\\overrightarrow{O_2O_1}$ 方向交 [[line(O₁, O₂)]] 于 [[W]]，则 $|U_2W| = 2|r_1 - r_2|$。",
            "令半径为 $2|r_1 - r_2|$ 的 [[compass(U₂, W; O₁)]] 与半径为 $d = |O_1O_2|$ 的 [[circle(O₂, O₁)]] 交于 [[Z]]。在等腰 $\\triangle O_2O_1Z$（$|O_2O_1| = |O_2Z| = d$）中，底边上的高 $O_2N \\perp O_1Z$ 平分 $O_1Z$ 于 $N$，故 $|O_1N| = |r_1 - r_2|$。",
            "在 [[line(O₁, Z)]] $\\cap$ [[c₁]] 中选取 [[T₁]] 使 $\\overrightarrow{O_1N}$ 在单位向量 $\\overrightarrow{O_1T_1}/r_1$ 上的有向投影为 $r_1 - r_2$，则过 [[T₁]] 的垂线 [[perp(line(O₁, Z), T₁)]] 将 [[O₁]]、[[O₂]] 置于同侧，且到两圆心的距离分别为 $r_1$ 与 $|NT_1| = r_2$，即为两圆的外公切线。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "外公切线"
        },
        "proof": {
          "keyIdea": "在两圆同侧作同向的 $60^\\circ$ 半径以定位外位似中心 $P$，再由 $P$ 经相似比为 $2$ 的位似变换作出 $c_1$ 的切线。",
          "steps": [
            "沿 [[line(O₁, O₂)]] 取同向圆周点 [[V₁]] $\\in$ [[c₁]] 与 [[V₂]] $\\in$ [[c₂]]；利用 [[circle(V₁, O₁)]] $\\cap$ [[c₁]] 得 [[X₁]]，[[circle(V₂, O₂)]] $\\cap$ [[c₂]] 得 [[X₂]]，从而在 [[line(O₁, O₂)]] 同侧作出正三角形 $\\triangle O_1V_1X_1$ 与 $\\triangle O_2V_2X_2$。",
            "因半径向量 $\\overrightarrow{O_1X_1}$ 与 $\\overrightarrow{O_2X_2}$ 同向平行且 $\\overrightarrow{O_2X_2} = (r_2/r_1)\\overrightarrow{O_1X_1}$，直线 [[line(X₁, X₂)]] 交 [[line(O₁, O₂)]] 于将 [[c₁]] 映为 [[c₂]] 的外位似中心 [[P]]（对应正位似 $\\mathcal{H}(P, r_2/r_1)$）。",
            "由 [[circle(O₁, P)]] 与 [[circle(V₁, P)]] 将 [[P]] 关于 [[O₁]]、[[V₁]] 对称至 [[O₁']]、[[V₁']]，则 [[c₁]] 在 $\\mathcal{H}(P, 2)$ 下的像 [[circle(O₁', V₁')]] 与以 $PO_1'$ 为直径的圆 [[circle(O₁, P)]] 交于 [[T']]，满足 $\\angle O_1'T'P = 90^\\circ$。",
            "由逆位似 $\\mathcal{H}(P, 1/2)$ 知过 [[P]] 的 [[line(P, T')]] 与 [[c₁]] 相切；又正位似 $\\mathcal{H}(P, r_2/r_1)$ 保持 [[line(P, T')]] 不变并将 [[c₁]] 映为同侧的 [[c₂]]，故 [[line(P, T')]] 即为两圆的外公切线。"
          ]
        }
      },
      "v-9L-9E-2V": {
        "variantLabels": {
          "1": "外公切线 (₁)",
          "2": "外公切线 (₂)"
        },
        "proof": {
          "keyIdea": "两圆的两条外公切线均过外位似中心 $P$，恰对应过 $P$ 向 $c_1$ 所作的两条切线。",
          "steps": [
            "同侧正三角形 $\\triangle O_1V_1X_1$ 与 $\\triangle O_2V_2X_2$ 给出同向平行半径 $O_1X_1 \\parallel O_2X_2$，故 [[line(X₁, X₂)]] $\\cap$ [[line(O₁, O₂)]] 即为 [[c₁]] 与 [[c₂]] 的外位似中心 [[P]]（由 [[V₁]]、[[V₂]]、[[circle(V₁, O₁)]]、[[circle(V₂, O₂)]] 确定）。",
            "在 $\\mathcal{H}(P, 2)$ 下，[[c₁]] 的倍增圆 [[circle(O₁', V₁')]]（由 [[circle(V₁, P)]] 定出 [[V₁']]，[[circle(O₁, P)]] 定出 [[O₁']]）与以 $PO_1'$ 为直径的圆 [[circle(O₁, P)]] 交于对称两点 [[T'_a]]、[[T'_b]]。",
            "由直径圆性质及正位似 $\\mathcal{H}(P, r_2/r_1)$，[[line(P, T'_a)]] 与 [[line(P, T'_b)]] 均同时切于 [[c₁]]、[[c₂]] 且使 [[O₁]]、[[O₂]] 位于同侧；反之任一外公切线必过 [[P]]，故此二线即为全部外公切线。"
          ],
          "variantNote": "过外位似中心分别连接倍增圆与直径圆的两个交点，即可作出全部两条外公切线。"
        }
      }
    }
  },
  "Kappa/L3": {
    "title": "内公切线",
    "prompt": "作给定两圆的一条内公切线。",
    "solutions": {
      "l-6L-16E": {
        "variantLabels": {
          "1": "内公切线"
        },
        "proof": {
          "keyIdea": "构造腰长为圆心距 $d = |O_1O_2|$、底边长为 $2(r_1 + r_2)$ 的等腰 $\\triangle O_2O_1Z$，使顶点 $O_2$ 到底边的高在 $O_1Z$ 上截得长度 $r_1 + r_2$。",
          "steps": [
            "连心线 [[line(O₁, O₂)]] 截 [[c₁]] 得直径 $A_1B_1$（端点 [[A₁]]、[[B₁]]，长 $2r_1$），截 [[c₂]] 得沿 $\\overrightarrow{O_1O_2}$ 顺序排列的直径 $U_2V_2$（端点 [[U₂]]、[[V₂]]，长 $2r_2$）。",
            "圆 [[compass(A₁, B₁; V₂)]] 沿 [[line(O₁, O₂)]] 越过 [[V₂]] 延长 $U_2V_2$ 至 [[W]]，使 $|U_2W| = |U_2V_2| + |V_2W| = 2(r_1 + r_2)$。",
            "令半径为 $2(r_1 + r_2)$ 的 [[compass(U₂, W; O₁)]] 与半径为 $d = |O_1O_2|$ 的 [[circle(O₂, O₁)]] 交于 [[Z]]。在等腰 $\\triangle O_2O_1Z$ 中，底边上的高 $O_2N \\perp O_1Z$ 交 $O_1Z$ 于中点 $N$，满足 $|O_1N| = r_1 + r_2$。",
            "射线 $\\overrightarrow{O_1Z}$ 与 [[c₁]] 的交点 [[T₁]] 位于线段 $O_1N$ 上，且 $|O_1T_1| = r_1$、$|T_1N| = r_2$，故 [[perp(line(O₁, Z), T₁)]] 将 [[O₁]] 与 [[O₂]] 分隔于异侧且到两圆心的距离分别为 $r_1$ 与 $r_2$，即为内公切线。"
          ]
        }
      },
      "e-8L-8E": {
        "variantLabels": {
          "1": "内公切线"
        },
        "proof": {
          "keyIdea": "在连心线 $O_1O_2$ 异侧作反向平行的 $60^\\circ$ 半径以定位内位似中心 $K$，再经相似比为 $2$ 的位似变换作出过 $K$ 的切线。",
          "steps": [
            "沿 [[line(O₁, O₂)]]，取 [[O₁]] 处沿 $+\\overrightarrow{O_1O_2}$ 方向的交点 [[V₁]] $\\in$ [[c₁]]，以及 [[O₂]] 处沿 $-\\overrightarrow{O_1O_2}$ 方向的交点 [[U₂]] $\\in$ [[c₂]]。由 [[circle(V₁, O₁)]] 定出 [[X₁]]、[[circle(U₂, O₂)]] 定出 [[Y₂]]（均同向旋转 $+60^\\circ$），使 $\\overrightarrow{O_1X_1}$ 与 $\\overrightarrow{O_2Y_2}$ 在 [[line(O₁, O₂)]] 异侧反向平行。",
            "因 $\\overrightarrow{O_2Y_2} = -(r_2/r_1)\\overrightarrow{O_1X_1}$，直线 [[line(X₁, Y₂)]] 交线段 $O_1O_2$ 于内位似中心 [[K]]，负位似变换 $\\mathcal{H}(K, -r_2/r_1)$ 将 [[c₁]] 映为 [[c₂]]。",
            "由 [[circle(O₁, K)]] 与 [[circle(V₁, K)]] 将 [[O₁]]、[[V₁]] 从 [[K]] 倍增至 [[O₁']]、[[V₁']]，则 [[c₁]] 的 $\\mathcal{H}(K, 2)$ 像 [[circle(O₁', V₁')]] 与以 $KO_1'$ 为直径的圆 [[circle(O₁, K)]] 交于 [[T']]，满足 $\\angle O_1'T'K = 90^\\circ$。",
            "故 [[line(K, T')]] 与 [[c₁]] 相切，且在负位似 $\\mathcal{H}(K, -r_2/r_1)$ 下同时在异侧与 [[c₂]] 相切，将 [[O₁]]、[[O₂]] 分隔于两侧，即为内公切线。"
          ]
        }
      },
      "v-9L-9E-2V": {
        "variantLabels": {
          "1": "内公切线 (₁)",
          "2": "内公切线 (₂)"
        },
        "proof": {
          "keyIdea": "两圆的两条内公切线均过线段 $O_1O_2$ 上的内位似中心 $K$，恰为过 $K$ 向 $c_1$ 所作的两条切线。",
          "steps": [
            "由 [[circle(V₁, O₁)]] 与 [[circle(U₂, O₂)]] 作出的反向平行半径 $O_1X_1$、$O_2Y_2$ 定出内位似中心 [[K]] $=$ [[line(O₁, O₂)]] $\\cap$ [[line(X₁, Y₂)]]；因 $r_1 + r_2 < |O_1O_2|$，点 [[K]] 位于 [[c₁]] 外部（$|O_1K| > r_1$）且严格介于 [[O₁]]、[[O₂]] 之间。",
            "在 $\\mathcal{H}(K, 2)$ 下，倍增圆 [[circle(O₁', V₁')]]（由 [[circle(O₁, K)]]、[[circle(V₁, K)]] 确定）与以 $KO_1'$ 为直径的圆 [[circle(O₁, K)]] 交于对称两点 [[T'_a]]、[[T'_b]]。",
            "由直径圆性质及负位似 $\\mathcal{H}(K, -r_2/r_1)$，[[line(K, T'_a)]] 与 [[line(K, T'_b)]] 均为分隔 [[O₁]]、[[O₂]] 的内公切线；反之任一内公切线必以 $r_1 : r_2$ 内分 $O_1O_2$ 于 [[K]]。"
          ],
          "variantNote": "连接内位似中心与倍增圆及直径圆的两个交点，即可得到全部两条内公切线。"
        }
      }
    }
  },
  "Kappa/L4": {
    "title": "旋转 90°",
    "prompt": "将给定线段绕给定点逆时针旋转 90°。",
    "solutions": {
      "le-5L-9E": {
        "variantLabels": {
          "1": "旋转后的线段 A'B'"
        },
        "proof": {
          "steps": [
            "过 [[O]] 作 [[line(O, A)]] 的逆时针垂线 [[perp(line(O, A), O)]] 并交 [[circle(O, A)]] 于 [[A']]，则 $|OA'| = |OA|$ 且有向角 $\\angle AOA' = +90^\\circ$，即 [[A']] 为 [[A]] 绕 [[O]] 逆时针旋转 $90^\\circ$ 的像。",
            "因逆时针旋转 $90^\\circ$ 将 [[seg(A, B)]] 映在过 [[A']] 且垂直于 $AB$ 的直线上，并保持到 [[O]] 的距离不变，故 [[B]] 的像落在 [[perp(seg(A, B), A')]] $\\cap$ [[circle(O, B)]] 上；沿 $\\overrightarrow{AB}$ 逆时针旋转 $90^\\circ$ 的方向取交点 [[B']]（使 $\\langle \\overrightarrow{OB'}, \\overrightarrow{A'B'} \\rangle = \\langle \\overrightarrow{OB}, \\overrightarrow{AB} \\rangle$），即得 $|A'B'| = |AB|$ 且 $A'B' \\perp AB$。"
          ]
        }
      }
    }
  },
  "Kappa/L5": {
    "title": "旋转 60°",
    "prompt": "将给定线段绕给定点顺时针旋转 60°。",
    "solutions": {
      "le-4L-4E": {
        "variantLabels": {
          "1": "旋转后的线段 A'B'"
        },
        "proof": {
          "keyIdea": "点 $O$ 关于直线 $AB$ 的对称点 $O_1$ 恒落在顺时针旋转 $60^\\circ$ 后的直线 $A'B'$ 上，由此仅需三圆一线即可定出直线 $A'B'$ 与端点 $B'$。",
          "steps": [
            "两圆 [[circle(A, O)]] 与 [[circle(B, O)]] 的另一交点 [[O₁]] 即为 [[O]] 关于 [[seg(A, B)]] 的对称点（$|AO_1| = |AO|$，$|BO_1| = |BO|$）；同时 [[circle(O, A)]] $\\cap$ [[circle(A, O)]] 给出 [[A]] 绕 [[O]] 顺时针旋转 $60^\\circ$ 的正三角形顶点 [[A']]。",
            "设 [[O]] 在直线 $AB$ 上的垂足为 $H$，$H$ 绕 [[O]] 顺时针旋转 $60^\\circ$ 的像为 $H'$。因 $|OO_1| = 2|OH| = 2|OH'|$ 且 $\\angle H'OO_1 = \\angle H'OH = 60^\\circ$，$\\triangle OH'O_1$ 为含 $30^\\circ$、$60^\\circ$ 角的直角三角形，满足 $O_1H' \\perp OH'$，故 [[O₁]] 必落在旋转后的直线 $H'A'$ 即 [[line(O₁, A')]] 上。",
            "设 [[B]] 绕 [[O]] 顺时针旋转 $60^\\circ$ 的像为 $B^*$。由正三角形 $\\triangle OBB^*$ 知 $|BB^*| = |BO| = |BO_1|$，故 [[O₁]] 与 $B^*$ 同在 [[line(O₁, A')]] $\\cap$ [[circle(B, O)]] 上，其第二交点 [[B']] 即为 $B^*$。"
          ]
        }
      }
    }
  },
  "Kappa/L6": {
    "title": "三等分线段",
    "prompt": "作将给定线段分成三等份的两个分点。",
    "solutions": {
      "l-5L-14E": {
        "variantLabels": {
          "1": "三等分点 T₁, T₂"
        },
        "proof": {
          "keyIdea": "构造满足 $|XA| : |XB| = 1 : 2$ 的 $\\triangle AXB$，利用内角平分线定理将底边 $AB$ 按 $1 : 2$ 内分。",
          "steps": [
            "中垂线 [[perpBisector(A, B)]] 平分 [[seg(A, B)]] 于中点 [[M]]（$|AM| = \\tfrac{1}{2}|AB|$），故半径为 $\\tfrac{1}{2}|AB|$ 的 [[circle(A, M)]] 与半径为 $|AB|$ 的 [[circle(B, A)]] 交于 [[X]]，满足 $|XA| : |XB| = 1 : 2$。",
            "在 $\\triangle AXB$ 中由内角平分线定理，[[angleBisector(A, X, B)]] 交 [[seg(A, B)]] 于 [[T₁]]，使 $|AT_1| : |T_1B| = |XA| : |XB| = 1 : 2$，即 $|AT_1| = \\tfrac{1}{3}|AB|$。",
            "用 [[compass(A, T₁; B)]] 将长度 $|AT_1| = \\tfrac{1}{3}|AB|$ 移至 [[B]]，交 [[seg(A, B)]] 于 [[P₁]]（$|P_1B| = \\tfrac{1}{3}|AB|$），则 [[T₁]]、[[P₁]] 将 [[seg(A, B)]] 三等分。"
          ]
        }
      },
      "e-6L-6E": {
        "variantLabels": {
          "1": "三等分点 T₁, T₂"
        },
        "proof": {
          "keyIdea": "将等边菱形 $APBQ$ 的边 $AP$ 倍长至 $A''$，利用跨过 $AB$ 的相似比为 $2 : 1$ 的八字形相似 $\\triangle AT_2A'' \\sim \\triangle BT_2Q$ 截得三等分点。",
          "steps": [
            "两等圆 [[circle(A, B)]] 与 [[circle(B, A)]] 交于正三角形顶点 [[P]]、[[Q]]，构成菱形 $APBQ$，满足 $AP \\parallel QB$ 且 $|AP| = |QB| = |AB|$。",
            "直线 [[line(A, P)]] 与 [[circle(P, A)]] 的另一交点 [[A'']] 将 $AP$ 倍长，使 $AA'' \\parallel BQ$、$|AA''| = 2|BQ|$ 且 [[A'']] 与 [[Q]] 位于 $AB$ 异侧。因此 [[line(A'', Q)]] 交 [[seg(A, B)]] 于 [[T₂]]，由 $\\triangle AT_2A'' \\sim \\triangle BT_2Q$ 得 $|AT_2| : |T_2B| = |AA''| : |BQ| = 2 : 1$，即 $|T_2B| = \\tfrac{1}{3}|AB|$。",
            "因 [[P]] 在 $AB$ 的中垂线上，[[circle(P, T₂)]] 关于 $AB$ 的中点对称，故其与 [[seg(A, B)]] 的第二交点 [[P₁]] 满足 $|AP_1| = |T_2B| = \\tfrac{1}{3}|AB|$。"
          ]
        }
      }
    }
  },
  "Kappa/L7": {
    "title": "三等分线段*",
    "prompt": "仅用直尺作将给定线段三等分的两个分点。作为辅助，图中已给出一条与该线段平行的直线。",
    "solutions": {
      "le-8L-8E": {
        "variantLabels": {
          "1": "三等分点 T₁, T₂"
        },
        "proof": {
          "keyIdea": "利用施泰纳梯形定理（完全四线形调和性质）平分 $AB$ 于中点 $M$，再将 $MD' \\cap AC'$ 处的 $1 : 2$ 分比投影至两平行底边，最后经对角线交点 $P$ 中心投影得另一三等分点。",
          "steps": [
            "取一般位置辅助点 [[Q]]，由 [[line(Q, A)]] 与 [[line(Q, B)]] 将 [[A]]、[[B]] 投影至平行线 [[l]] 上的 [[D']]、[[C']]，构成梯形 $ABC'D'$（$AB \\parallel D'C'$）。设对角线 [[line(A, C')]] 与 [[line(B, D')]] 交于 [[P]]，由施泰纳梯形定理（完全四线形对平行底边的调和分割），[[line(Q, P)]] 必平分 [[seg(A, B)]] 于中点 [[M]]（$|AM| = \\tfrac{1}{2}|AB|$）。",
            "令 [[R₁]] $=$ [[line(A, C')]] $\\cap$ [[line(M, D')]]，过 [[Q]] 作 [[line(Q, R₁)]] 分别交 [[seg(A, B)]] 于 [[T₁]]、交 [[l]] 于 [[T₁']]。由 $AB \\parallel l$ 知 $\\triangle AR_1T_1 \\sim \\triangle C'R_1T_1'$ 且 $\\triangle AR_1M \\sim \\triangle C'R_1D'$，而以 [[Q]] 为中心的投影给出 $|AB|/|D'C'| = |T_1B|/|T_1'C'|$。",
            "联立比例式得 $\\frac{|AT_1|}{|T_1'C'|} = \\frac{|AM|}{|D'C'|} = \\frac{1}{2}\\frac{|AB|}{|D'C'|} = \\frac{1}{2}\\frac{|T_1B|}{|T_1'C'|}$，故 $|AT_1| = \\tfrac{1}{2}|T_1B|$，即 $|AT_1| = \\tfrac{1}{3}|AB|$（同时 $|D'T_1'| = \\tfrac{1}{3}|D'C'|$）。",
            "以对角线交点 [[P]] 为中心的位似变换将有向线段 $D'C'$ 映为反向的 $BA$（$D' \\mapsto B$，$C' \\mapsto A$），故 [[line(T₁', P)]] 将 [[T₁']] 投影至 [[seg(A, B)]] 上的 [[P₁]]，满足 $|BP_1| : |P_1A| = |D'T_1'| : |T_1'C'| = 1 : 2$，即 $|P_1B| = \\tfrac{1}{3}|AB|$。"
          ]
        }
      }
    }
  },
  "Kappa/L8": {
    "title": "三等分弦",
    "prompt": "过外圆上的给定点作外圆的一条弦，使其被同心的内圆分成三等份。",
    "solutions": {
      "l-3L-7E": {
        "variantLabels": {
          "1": "被三等分的弦所在直线"
        },
        "proof": {
          "keyIdea": "若外圆的弦 $AB$ 被内圆 $c_2$ 三等分于 $T_1, T_2$，则 $OT_1$ 为 $\\triangle AA'T_2$（$A'$ 为 $A$ 的对径点）的中位线，从而必有 $|A'T_2| = 2r$。",
          "steps": [
            "直线 [[line(O, A)]] 交外圆 [[circle(O, A)]] 于 [[A]] 的对径点 [[A']]（[[O]] 为 $AA'$ 的中点），并截半径为 $r$ 的内圆 [[c₂]] 得直径 $P_1P_2$（端点 [[P₁]]、[[P₂]]，长 $|P_1P_2| = 2r$）。",
            "以 [[A']] 为圆心、$2r$ 为半径的 [[compass(P₁, P₂; A')]] 交 [[c₂]] 于 [[T₂]]（$|A'T_2| = 2r$）。设 $AT_2$ 的中点为 $T_1$，[[line(A, T₂)]] 与 [[circle(O, A)]] 的另一交点为 $B$。",
            "在 $\\triangle AA'T_2$ 中，中位线 $OT_1$ 满足 $|OT_1| = \\tfrac{1}{2}|A'T_2| = r$，故 $T_1 \\in$ [[c₂]]。又因同心圆 [[circle(O, A)]] 与 [[c₂]] 对弦 [[line(A, T₂)]] 共用过 [[O]] 的垂径，弦 $AB$ 与 $T_1T_2$ 中点重合，得 $|AT_1| = |T_2B|$；结合 $|AT_1| = |T_1T_2|$，知该弦被 [[c₂]] 三等分。"
          ]
        }
      },
      "e-4L-4E": {
        "variantLabels": {
          "1": "被三等分的弦所在直线"
        },
        "proof": {
          "keyIdea": "沿直径所在直线 $OA$ 构造中位线关系直接在对径点 $A'$ 处截出半径 $2r$，从而无需使用圆规移距工具。",
          "steps": [
            "直径线 [[line(O, A)]] 给出 [[A]] 在 [[circle(O, A)]] 上的对径点 [[A']]，并交内圆 [[c₂]]（半径 $r$）于 [[P]]（$|OP| = r$）。作 [[circle(P, A)]] 交 [[line(O, A)]] 于另一点 [[Q]]，则 [[P]] 为 $AQ$ 的中点。",
            "因 [[O]]、[[P]] 分别为 $AA'$、$AQ$ 的中点，$OP$ 为 $\\triangle AA'Q$ 的中位线，故 $|A'Q| = 2|OP| = 2r$。",
            "取 [[T₂]] $\\in$ [[c₂]] $\\cap$ [[circle(A', Q)]]，由 $|A'T_2| = 2r$ 知 $AT_2$ 的中点 $T_1$ 满足 $|OT_1| = \\tfrac{1}{2}|A'T_2| = r$（即 $T_1 \\in$ [[c₂]]）；再由同心圆垂径性质得沿 [[line(A, T₂)]] 有 $|AT_1| = |T_1T_2| = |T_2B|$。"
          ]
        }
      },
      "v-5L-5E-2V": {
        "variantLabels": {
          "1": "被三等分的弦所在直线 (₁)",
          "2": "被三等分的弦所在直线 (₂)"
        },
        "proof": {
          "steps": [
            "同 $4\\text{E}$ 作法，沿 [[line(O, A)]] 用 [[circle(P, A)]] 将 $OP$ 倍增至 [[Q]]，使以对径点 [[A']] 为圆心的 [[circle(A', Q)]] 半径为 $2r$。因 $r < |OA| = |OA'| < 3r$，[[circle(A', Q)]] 与 [[c₂]] 交于关于 [[line(O, A)]] 对称的两点 [[T₂_a]]、[[T₂_b]]。",
            "两交点分别给出被三等分的弦 [[line(A, T₂_a)]] 与 [[line(A, T₂_b)]]；反之若弦 $AB$ 被 [[c₂]] 三等分于 $T_1, T_2$，则 $T_1$ 为 $AT_2$ 中点，由 $\\triangle AA'T_2$ 的中位线 $OT_1$ 必有 $|A'T_2| = 2|OT_1| = 2r$，故恰有此二解。"
          ],
          "variantNote": "过给定点分别连接对径点处半径为 $2r$ 的圆与内圆的两个交点，即得全部两条被三等分的弦。"
        }
      }
    }
  },
  "Kappa/L9": {
    "title": "三个圆 - 1",
    "prompt": "分别以给定的三个点为圆心作三个圆，使它们两两外切。",
    "solutions": {
      "l-7L-13E": {
        "variantLabels": {
          "1": "两两外切的三圆"
        },
        "proof": {
          "keyIdea": "将边长 $b = |AC|$ 与 $a = |BC|$ 翻折到直线 $AB$ 上，则所得两截点连线段的中点 $T_C$ 即为 $\\triangle ABC$ 内切圆在 $AB$ 上的切点，恰好将 $AB$ 分成切圆半径 $r_A = \\frac{b+c-a}{2}$ 与 $r_B = \\frac{c+a-b}{2}$。",
          "steps": [
            "记 $a = |BC|,\\; b = |CA|,\\; c = |AB|$。在 [[line(A, B)]] 上，[[circle(A, C)]] 交射线 $\\overrightarrow{AB}$ 于 [[P]]（距 [[A]] 有向坐标 $x_P = b$），而 [[circle(B, C)]] 交射线 $\\overrightarrow{BA}$ 于 [[Q]]（坐标 $x_Q = c - a$）。",
            "中垂线 [[perpBisector(P, Q)]] 在 [[line(A, B)]] 上平分 $PQ$ 于 [[T_C]]，其坐标为 $\\frac{x_P + x_Q}{2} = \\frac{b + c - a}{2} = r_A \\in (0, c)$，严格位于线段 $AB$ 内部，故 $|AT_C| = r_A$ 且 $|BT_C| = c - r_A = \\frac{c + a - b}{2} = r_B$。",
            "因此 [[circle(A, T_C)]] 与 [[circle(B, T_C)]] 外切于 [[T_C]]；又 $|PT_C| = b - r_A = \\frac{a + b - c}{2} = r_C$，故 [[compass(P, T_C; C)]] 以 [[C]] 为圆心、$r_C$ 为半径，满足 $r_A + r_C = b$ 且 $r_B + r_C = a$，三圆两两外切。"
          ]
        }
      },
      "e-10L-10E": {
        "variantLabels": {
          "1": "两两外切的三圆"
        },
        "proof": {
          "keyIdea": "用基本尺规操作平分 $PQ$ 定出 $AB$ 上的切点 $T_C$，再由圆 $A$ 直接在边 $AC$ 上截得切点 $T_B$（余段即为 $r_C = b - r_A$），无需借用移距工具。",
          "steps": [
            "在 [[line(A, B)]] 上由 [[circle(A, C)]] 与 [[circle(B, C)]] 截得 [[P]]（$x_P = b$）与 [[Q]]（$x_Q = c - a$）；再作 [[circle(P, Q)]]、[[circle(Q, P)]] 及公共弦 [[line(U₁, U₂)]] 平分 $PQ$ 于线段 $AB$ 上的 [[T_C]]，得 $|AT_C| = r_A = \\frac{b+c-a}{2}$、$|BT_C| = r_B = \\frac{c+a-b}{2}$。",
            "由此作出在 [[T_C]] 处外切的前两个圆 [[circle(B, T_C)]] 与 [[circle(A, T_C)]]。",
            "直线 [[line(A, C)]] 与 [[circle(A, T_C)]] 在线段 $AC$ 上交于 [[T_B]]（$|AT_B| = r_A < b$），余下 $|CT_B| = b - r_A = \\frac{a+b-c}{2} = r_C$；故 [[circle(C, T_B)]] 在 [[T_B]] 处与 [[circle(A, T_C)]] 外切，且因 $r_B + r_C = a = |BC|$ 同时与 [[circle(B, T_C)]] 外切。"
          ]
        }
      }
    }
  },
  "Kappa/L10": {
    "title": "平分割线",
    "prompt": "过圆外给定点作给定圆的一条割线，使其被该圆分成相等的两段。",
    "solutions": {
      "l-4L-8E": {
        "variantLabels": {
          "1": "被平分的割线"
        },
        "proof": {
          "keyIdea": "过 $P$ 的割线在近交点 $X$ 处平分 $PY$，当且仅当远交点 $Y$ 同时落在位似像 $\\mathcal{H}(P, 2)(\\text{circle}(O))$（圆心为 $O' = 2O - P$，半径为 $2r$）上。",
          "steps": [
            "作 [[line(O, P)]] 与 [[circle(O, P)]] 定出 [[P]] 关于 [[O]] 的对称点 [[O']]（[[O]] 为 $PO'$ 的中点），同时 [[line(O, P)]] 截半径为 $r$ 的 [[circle(O)]] 得长为 $2r$ 的直径 $A_1A_2$（端点 [[A₁]]、[[A₂]]）。",
            "以 [[O']] 为圆心、$2r$ 为半径的 [[compass(A₁, A₂; O')]] 交 [[circle(O)]] 于 [[Y]]（$|O'Y| = 2r$）。设 $PY$ 的中点为 $X$，则在 $\\triangle PO'Y$ 中，中位线 $OX$ 满足 $|OX| = \\tfrac{1}{2}|O'Y| = r$，即 $X \\in$ [[circle(O)]]（因 $|OP| > r$ 知 $X \\neq Y$），故割线 [[line(P, Y)]] 被 [[circle(O)]] 平分于 $X$。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "被平分的割线"
        },
        "proof": {
          "keyIdea": "将 $P$ 沿直线 $OP$ 分别关于圆心 $O$ 及圆周点 $A \\in \\text{circle}(O) \\cap OP$ 作对称，直接用基本尺规作出位似圆 $\\mathcal{H}(P, 2)(\\text{circle}(O))$。",
          "steps": [
            "沿 [[line(O, P)]]，用 [[circle(O, P)]] 将 [[P]] 关于 [[O]] 对称至 [[O']]，再取 [[A]] $\\in$ [[circle(O)]] $\\cap$ [[line(O, P)]]（$|OA| = r$），用 [[circle(A, P)]] 将 [[P]] 关于 [[A]] 对称至 [[Q]]。",
            "因 $OA$ 为 $\\triangle PO'Q$ 的中位线，$|O'Q| = 2|OA| = 2r$，故 [[circle(O', Q)]] 即为 [[circle(O)]] 在位似变换 $\\mathcal{H}(P, 2)$ 下的像。",
            "取交点 [[Y]] $\\in$ [[circle(O)]] $\\cap$ [[circle(O', Q)]]，经逆位似 $\\mathcal{H}(P, 1/2)$ 可知 $PY$ 的中点 $X$ 落在 [[circle(O)]] 上，故割线 [[line(P, Y)]] 满足 $|PX| = |XY|$。"
          ]
        }
      },
      "v-6L-6E-2V": {
        "variantLabels": {
          "1": "被平分的割线 (₁)",
          "2": "被平分的割线 (₂)"
        },
        "proof": {
          "steps": [
            "沿 [[line(O, P)]] 借 [[circle(O, P)]] 与 [[circle(A, P)]] 将 [[O]]、[[A]] 从 [[P]] 倍增至 [[O']]、[[Q]]，得 [[circle(O)]] 的 $\\mathcal{H}(P, 2)$ 位似像 [[circle(O', Q)]]（圆心 [[O']]，半径 $2r$）。因 $r < |OP| = |OO'| < 3r$，[[circle(O)]] 与 [[circle(O', Q)]] 交于关于 [[line(O, P)]] 对称的两点 [[Y_a]]、[[Y_b]]。",
            "由 $\\mathcal{H}(P, 1/2)$ 知 $PY_a$ 与 $PY_b$ 的中点均在 [[circle(O)]] 上；反之任一满足 $|PX| = |XY|$（$X, Y \\in$ [[circle(O)]]）的割线必有 $Y = \\mathcal{H}(P, 2)(X) \\in$ [[circle(O', Q)]]，故 [[line(P, Y_a)]] 与 [[line(P, Y_b)]] 即为全部两解。"
          ],
          "variantNote": "连接圆外给定点与给定圆及其 2 倍位似圆的两个交点，即可得到全部两条被平分的割线。"
        }
      }
    }
  },
  "Kappa/L11": {
    "title": "三个圆 - 2",
    "prompt": "作三个圆，使它们恰好在给定的三个点处两两相切。",
    "solutions": {
      "l-9L-15E": {
        "variantLabels": {
          "1": "在 A, B, C 处两两相切的三圆"
        },
        "proof": {
          "keyIdea": "在 $A, B, C$ 处两两相切的三个圆，其圆心恰好是 $\\triangle ABC$ 的外接圆在 $A, B, C$ 三点处的切线所围成的切线三角形的三个顶点 $(O_A, O_B, O_C)$。",
          "steps": [
            "中垂线 [[perpBisector(A, B)]] 与 [[perpBisector(B, C)]] 交于 $\\triangle ABC$ 的外心 [[O]]（$|OA| = |OB| = |OC|$）；连 [[line(O, B)]] 并作垂线 [[perp(line(O, B), B)]]，即得 $\\triangle ABC$ 外接圆 $\\Omega$ 在 [[B]] 处的切线 $\\ell_B$。",
            "因 $\\Omega$ 在 [[A]]、[[B]]、[[C]] 处的切线 $\\ell_A, \\ell_B, \\ell_C$ 两两交于对应弦的中垂线上，$\\ell_B$ 交 [[perpBisector(A, B)]] 于 [[O_C]]（$|O_CA| = |O_CB|$，故 [[line(O_C, A)]] $= \\ell_A$），交 [[perpBisector(B, C)]] 于 [[O_A]]（$|O_AB| = |O_AC|$，故 [[line(O_A, C)]] $= \\ell_C$），进而 [[line(O_C, A)]] $\\cap$ [[line(O_A, C)]] 定出 [[O_B]]（$|O_BC| = |O_BA|$）。",
            "于是 [[circle(O_A, B)]] 过 [[B]]、[[C]]，[[circle(O_B, C)]] 过 [[C]]、[[A]]，[[circle(O_C, A)]] 过 [[A]]、[[B]]；又因 $O_B, A, O_C$ 共线于 $\\ell_A$，$O_C, B, O_A$ 共线于 $\\ell_B$，$O_A, C, O_B$ 共线于 $\\ell_C$，每对圆的连心线均过公共点，故三圆在 [[A]]、[[B]]、[[C]] 处两两相切。"
          ]
        }
      },
      "e-13L-13E": {
        "variantLabels": {
          "1": "在 A, B, C 处两两相切的三圆"
        },
        "proof": {
          "keyIdea": "无需作外心，通过过 $A$ 的三次轴对称合成直接作出外接圆切线 $\\ell_B$，再沿 $\\text{circle}(C, H'_A)$ 的割线将导角关系传递至 $C$ 作出切线 $\\ell_C$。",
          "steps": [
            "沿 [[line(B, C)]] 与 [[circle(A, B)]] 取交点 [[H'_A]]（即 [[B]] 关于过 [[A]] 的高线 $h_A \\perp BC$ 的对称点）；[[W_B]] $\\in$ [[circle(C, H'_A)]] $\\cap$ [[circle(A, B)]] 将 [[H'_A]] 关于 $AC$ 对称；[[T_B]] $\\in$ [[circle(B, W_B)]] $\\cap$ [[circle(A, B)]] 再将 [[W_B]] 关于 $AB$ 对称。记 $\\triangle ABC$ 的有向内角（模 $180^\\circ$）为 $\\alpha, \\beta, \\gamma$，则 $\\measuredangle(AB, AW_B) = 2\\measuredangle(h_A, AC) = -2\\gamma$，故 $\\measuredangle(AB, AT_B) = 2\\gamma$；在等腰 $\\triangle ABT_B$ 中得 $\\measuredangle(AB, BT_B) = \\gamma = \\measuredangle(AC, BC)$，由弦切角逆定理知 [[line(B, T_B)]] 即为外接圆在 [[B]] 处的切线 $\\ell_B$。",
            "圆 [[circle(B, A)]] 与 [[circle(A, B)]] 交于 [[U₁]]、[[U₂]]，公共弦 [[line(U₁, U₂)]] 即 $AB$ 的中垂线；其与 [[line(B, T_B)]] 的交点为 [[O_C]]，由此作出 [[circle(O_C, A)]] 及切线 [[line(O_C, A)]] $= \\ell_A$。",
            "另一方面，[[W]] $\\in$ [[circle(B, W_B)]] $\\cap$ [[circle(C, H'_A)]] 为 [[W_B]] 关于 [[line(B, C)]] 的对称点。由等腰 $\\triangle ABW_B$ 得 $\\measuredangle(BC, BW_B) = \\beta - \\gamma$，从而 $\\measuredangle(BC, BW) = \\gamma - \\beta$；取 [[P]] $\\in$ [[line(B, C)]] $\\cap$ [[circle(B, W_B)]]，等腰 $\\triangle BPW$ 满足 $2\\measuredangle(BC, WP) \\equiv \\gamma - \\beta \\pmod{180^\\circ}$。",
            "由 $H'_A \\in BC$、$W_B = S_{AC}(H'_A)$ 及 $W = S_{BC}(W_B)$ 知 $|CH'_A| = |CW|$ 且 $\\measuredangle(BC, CW) = 2\\gamma$。设 [[line(W, P)]] 再交 [[circle(C, H'_A)]] 于 [[X]]，在等腰 $\\triangle CWX$ 中有 $\\measuredangle(BC, CX) \\equiv 2\\measuredangle(BC, WP) - \\measuredangle(BC, CW) \\equiv (\\gamma - \\beta) - 2\\gamma \\equiv \\alpha \\pmod{180^\\circ}$，故 [[line(C, X)]] $= \\ell_C$；令其分别交 [[line(B, T_B)]]、[[line(O_C, A)]] 于 [[O_A]]、[[O_B]]，即可作出 [[circle(O_A, B)]] 与 [[circle(O_B, C)]]。"
          ]
        }
      }
    }
  },
  "Kappa/L12": {
    "title": "旋转中心",
    "prompt": "作将给定两条等长线段中的一条变换到另一条的旋转中心。",
    "solutions": {
      "l-2L-6E": {
        "variantLabels": {
          "1": "旋转中心"
        },
        "proof": {
          "steps": [
            "因 $|AB| = |CD|$ 且 [[seg(A, B)]] 与 [[seg(C, D)]] 不平行，存在将 $A \\mapsto C$、$B \\mapsto D$ 的旋转，其旋转中心必同时满足 $|O_1A| = |O_1C|$ 与 $|O_1B| = |O_1D|$。",
            "中垂线 [[perpBisector(A, C)]] 与 [[perpBisector(B, D)]] 的交点 [[O₁]] 使 $\\triangle O_1AB \\cong \\triangle O_1CD$（$\\text{SSS}$）且定向相同，故绕 [[O₁]] 旋转 $\\angle AO_1C = \\angle BO_1D$ 即可将 [[seg(A, B)]] 映为 [[seg(C, D)]]。"
          ]
        }
      },
      "e-5L-5E": {
        "variantLabels": {
          "1": "旋转中心"
        },
        "proof": {
          "keyIdea": "在两线段上截取等长子段 $|BE| = |CF| = |BC|$；将 $F$ 关于 $EC$ 对称至 $I$ 可构造顶角恰等于旋转角 $\\theta$ 的等腰 $\\triangle CBI$，使 $B, O, I$ 三点共线。",
          "steps": [
            "半径同为 $r = |BC|$ 的两圆 [[circle(B, C)]] 与 [[circle(C, B)]] 交于 [[G₁]]、[[H₁]]，故 [[line(G₁, H₁)]] 为 $BC$ 的中垂线；同时两圆分别在 [[seg(A, B)]]、[[seg(C, D)]] 上截得 [[E]]、[[F]]，满足 $|BE| = |CF| = r$。在绕 $O$ 转角为 $+\\theta$ 且将 $(B, A) \\mapsto (C, D)$ 的旋转下，亦有 $(B, E) \\mapsto (C, F)$。",
            "圆 [[circle(E, F)]] 与 [[circle(C, B)]] 的另一交点 [[I]] 即为 [[F]] 关于直线 $EC$ 的对称点。以 $\\overrightarrow{BC}$ 为 $0^\\circ$ 方向，设 $\\overrightarrow{BE}$ 方向为 $\\phi$，由等腰 $\\triangle BCE$（$|BC| = |BE| = r$）知直线 $CE$ 方向为 $\\tfrac{\\phi}{2} + 90^\\circ \\pmod{180^\\circ}$，而 $\\overrightarrow{CF}$ 方向为 $\\phi + \\theta$；将 $\\overrightarrow{CF}$ 关于过 [[C]] 的直线 $CE$ 对称即消去 $\\phi$，得 $\\overrightarrow{CI}$ 方向为 $2(\\tfrac{\\phi}{2} + 90^\\circ) - (\\phi + \\theta) = 180^\\circ - \\theta$。",
            "因 $\\overrightarrow{CB}$ 方向为 $180^\\circ$ 且 $|CB| = |CI| = r$，等腰 $\\triangle CBI$ 的有向顶角 $\\angle(\\overrightarrow{CI}, \\overrightarrow{CB}) = +\\theta$ 恰等于等腰 $\\triangle OBC$（$|OB| = |OC|$）的顶角 $\\angle(\\overrightarrow{OB}, \\overrightarrow{OC})$，故直线 [[line(B, I)]] 与 $BO$ 同与 $\\overrightarrow{BC}$ 成有向角 $90^\\circ - \\theta/2$，其与中垂线 [[line(G₁, H₁)]] 的交点即为旋转中心 [[O]]。"
          ]
        }
      },
      "v-4L-12E-2V": {
        "variantLabels": {
          "1": "旋转中心 (₁)",
          "2": "旋转中心 (₂)"
        },
        "proof": {
          "steps": [
            "将无向线段 [[seg(A, B)]] 映为等长线段 [[seg(C, D)]] 的保向等距变换，必将有序端点对 $(A, B) \\mapsto (C, D)$ 或 $(A, B) \\mapsto (D, C)$。",
            "[[perpBisector(A, C)]] $\\cap$ [[perpBisector(B, D)]] 给出使 $(A, B) \\mapsto (C, D)$ 的旋转中心 [[O₁]]（$\\triangle O_1AB \\cong \\triangle O_1CD$），而 [[perpBisector(A, D)]] $\\cap$ [[perpBisector(B, C)]] 给出使 $(A, B) \\mapsto (D, C)$ 的旋转中心 [[O₂]]（$\\triangle O_2AB \\cong \\triangle O_2DC$）；因 [[seg(A, B)]] 与 [[seg(C, D)]] 中点不重合，必有 [[O₁]] $\\neq$ [[O₂]]。"
          ],
          "variantNote": "将两线段的端点按 $(A\\leftrightarrow C, B\\leftrightarrow D)$ 与 $(A\\leftrightarrow D, B\\leftrightarrow C)$ 两种对应方式配对，即可得到全部两个不同的旋转中心。"
        }
      }
    }
  }
};
