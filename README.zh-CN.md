# Euclidea 尺规作图解析（Euclidea Solution Explorer）

一个纯前端、零后端依赖的交互式几何可视化应用，用于分步推演 **Euclidea 全部 15 章、149 个关卡**（`Alpha` 至 `Omicron`）的精确尺规作图过程，并配以简明严谨的纯欧氏综合几何证明。

#### (Choose your language below / 请在下方选择语言)
[![English](https://img.shields.io/badge/Language-English-blue)](README.md)
[![简体中文](https://img.shields.io/badge/Language-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-red)](README.zh-CN.md)

---

## 核心特性

- **完整覆盖全部 15 章 / 149 关（`L` 星、`E` 星与多解隐藏 `V` 星）**：
  收录从 `Alpha` 到 `Omicron` 的全部 149 个关卡与工具教程（共去重整理为 307 个解法标签页）。每一关均达成 `L`（最少工具调用次数）与 `E`（最少基本尺规作图步数）双星目标，并在全部存在多重对称解的关卡（`2V`–`4V`）上额外达成隐藏 `V` 星；仅当 `L`、`E` 或 `V` 星确需不同几何构造时才拆分为独立标签页。
- **清晰的数学符号标注与智能防重叠排版**：
  初始点、辅助轨迹与构造交点均带有统一的数学记号（如 `A`、`B`、`O₁`、`M_AB`、`T′`、`c₁`、`l₁` 等），采用确定性多环碰撞规避算法排布标签，在分步播放或复杂构型下均不会跳动或互相遮挡。
- **从 `Step 0` 开始的交互式分步回放**：
  所有关卡默认打开于 `Step 0`（初始已知构型），支持前进/后退（`|◀`、`◀ 上一步`、`▶ 播放 / ⏸ 暂停`、`下一步 ▶`、`▶|`、进度滑块及 `0.7× / 1× / 1.8×` 倍速），实时追踪累计 `L` / `E` 消耗，并动态绘制当前作图工具的几何依赖提示（虚线参考弦、圆规截距半径、直角标记、角平分线等角弧）及已完成的目标解高亮。
- **纯欧氏综合几何证明与双向符号联动高亮**：
  每个解法均配有由 **KaTeX** 渲染的自然语言欧氏综合证明。将鼠标悬停在证明或步骤中的交互式符号芯片（如 `circle(O₁, A)`、`perpBisector(A, B)`、`T′`）上，即可在 SVG 画布中联动高亮对应点、直线或圆（尚未执行的后续轨迹以淡色虚线预览）；点击任意已构造符号可直接跳转至生成它的作图步。
- **画布平移缩放、可拖拽分栏与深层链接（Deep Linking）**：
  支持鼠标拖拽平移、围绕光标滚轮缩放、`复位视图` 一键居中，以及自由拖拽章节栏、几何画布、步骤栏与证明栏之间的分隔条（双击恢复默认比例）。URL 锚点（`#Chapter/ShortId/SolutionId`）及可选查询参数（`?step=<n|end>&lang=<code>`）可直接定位到任意关卡、解法、步骤与界面语言。
- **配置驱动的多语言架构（`i18n`）与按需懒加载语言包**：
  默认加载**英文（`en`）**且无任何额外首屏体积开销，支持在页面右上角一键无刷新切换至**简体中文（`zh-CN`）**，完整覆盖全部 UI 控件、复合工具展开说明、约 2,700 条作图步骤说明、149 道关卡题面与全部欧氏综合证明，并支持中英文双语关卡检索。

---

## 章节总览

| # | 章节 | 符号 | 关卡数 | 代表性几何主题 |
|---:|---|---|---:|---|
| 1 | **Alpha** | α | 9 | 正三角形、垂直平分线、中点、求作圆心、圆内接正方形 |
| 2 | **Beta** | β | 12 | 角平分线、三角形内心、$30^\circ$ 射线、过点作垂线、圆的切线 |
| 3 | **Gamma** | γ | 9 | 弦中点、$45^\circ$ 角、菱形构造、四边形质心 |
| 4 | **Delta** | δ | 10 | 倍长线段、$60^\circ$ 直线、正六边形、已知对角线/邻边作正方形、三直线公切圆 |
| 5 | **Epsilon** | ε | 12 | 平行线工具、平行四边形、井字分割、线段轴对称、圆内接与外切正方形 |
| 6 | **Zeta** | ζ | 12 | 中心对称与轴对称、不塌缩圆规、平移线段、欧拉九点圆 |
| 7 | **Eta** | η | 11 | 勾股平方和、$75^\circ$ 角、海伦最短路径问题、外接圆、内切圆、旁切圆 |
| 8 | **Theta** | θ | 7 | 平分三角形周长、$54^\circ$ 三等分、正八边形、三角形周长平分线、托里拆利点、到四点等距的圆 |
| 9 | **Iota** | ι | 10 | 最小周长三角形（法尼亚诺反射展开）、梯形两底调和平均、四直线相切圆 |
| 10 | **Kappa** | κ | 12 | 两圆外公切线与内公切线、$90^\circ$/$60^\circ$ 旋转、三等分线段与圆弧弦、索迪圆与三圆相切 |
| 11 | **Lambda** | λ | 10 | 第四比例项、几何平均数、黄金分割、$54^\circ$ 角、帕普斯仅用直尺作平行线、角内阿波罗尼斯切圆、正五边形 |
| 12 | **Mu** | μ | 10 | 反余三角形、垂足三角形、旁心三角形、切点三角形、$120^\circ$ 质心三角形 |
| 13 | **Nu** | ν | 9 | 点线圆阿波罗尼斯问题、平行线与同心圆上的正三角形、调和共轭仅用直尺对称、过四点作正方形 |
| 14 | **Xi** | ξ | 5 | 三角形内接菱形、过定点与两圆相切的圆、由内切圆切点复原直角三角形、四直线上的平行四边形、帕普斯鞋匠刀圆链 |
| 15 | **Omicron** | ο | 11 | 莫尔–马斯刻若尼单规作图（中点、复制圆、线圆交点、拿破仑问题）、布罗卡仅用直尺作切线与垂线、$3^\circ$ 角、米奇图案 |

---

## 键盘快捷键

| 按键 | 功能 |
|---|---|
| `←` / `→` | 上一步 / 下一步（遵循**跳过 0L 取点**开关状态） |
| `Home` / `End` | 跳回 `Step 0`（初始已知构型）/ 跳至最终完成步 |
| `Space` | 开始 / 暂停自动分步播放 |

---

## 快速开始

### 环境要求
- **Node.js** `>= 24`（`24` 或 `26` LTS）与 **npm**

### 常用命令

```bash
# 安装依赖
npm install

# 启动本地 Vite 开发服务器（默认地址：http://localhost:5173）
npm run dev

# 运行完整 Vitest 自动化测试套件（几何内核 + 全部 149 关 / 307 个解法 + KaTeX 与符号芯片校验 + 多语言校验）
npm test

# 执行 TypeScript 类型检查并打包生产环境静态产物至 dist/
npm run build

# 在本地预览生产环境静态构建产物
npm run preview
```

---

## 项目目录结构

```text
euclidea_solution/
├── LICENSE                     # MIT 开源许可证
├── README.md                   # 项目说明文档（英文，默认）
├── README.zh-CN.md             # 项目说明文档（简体中文）
├── index.html                  # 应用入口 HTML 与尺规几何 SVG 图标
├── public/
│   └── favicon.svg             # 定制圆规与双圆交叠矢量图标
├── src/
│   ├── main.ts                 # 应用启动入口
│   ├── types/
│   │   └── level.ts            # 关卡、13 种尺规动作、步骤、多解变体与证明的核心类型定义
│   ├── geometry/
│   │   ├── vec2.ts             # 精确二维欧氏向量运算与旋转
│   │   ├── intersections.ts    # 线线、线圆、圆圆求交及有向交点排序
│   │   ├── executor.ts         # 确定性分步作图状态与工具依赖提示求值器
│   │   └── camera.ts           # 世界坐标到屏幕坐标投影与自动包围盒取景
│   ├── render/
│   │   ├── svgRenderer.ts      # 四层交互式 SVG 几何视口、当前作图提示与悬停联动高亮
│   │   ├── labelLayout.ts      # 确定性多环防碰撞点标签与轨迹标签布局求解器
│   │   └── mathFormat.ts       # KaTeX 公式与交互式 [[symbol]] 芯片及上下标/撇号排版器
│   ├── ui/
│   │   └── appShell.ts         # 可拖拽调节的三栏工作区、双语搜索、语言切换与多面板同步
│   ├── i18n/
│   │   ├── types.ts            # 声明式 LocalePack、UiLocaleConfig 与 LevelLocaleEntry 类型契约
│   │   ├── registry.ts         # 已注册语言列表与动态 import() 按需加载器（默认：'en'）
│   │   ├── manager.ts          # 运行时语言状态管理、AST 步骤文案自动生成与多级英文回退
│   │   └── locales/            # 各语言配置包（'en' 默认 UI，'zh-CN' UI 与 15 章完整关卡/证明翻译）
│   ├── styles/
│   │   └── main.css            # 数学排版与响应式分栏样式
│   └── data/
│       ├── chapters.ts         # 15 章目录元数据与关卡摘要
│       ├── index.ts            # 149 关统一注册表与检索辅助函数
│       └── levels/             # 标准几何坐标、作图动作序列、目标变体与英文综合证明
└── tests/
    ├── kernel.test.ts          # 欧氏几何原语、有向交点与复合工具步数消耗单元测试
    ├── alpha_levels.test.ts    # 第 1 章（Alpha）几何不变量专项数值验证
    ├── all_levels.test.ts      # 全部 15 章 / 149 关执行精度、星级、视口取景、芯片与 KaTeX 全量测试
    └── i18n.test.ts            # 多语言覆盖率、芯片/KaTeX 一致性及增量语言包扩展测试
```

---

## 添加新语言（`i18n` 扩展指南）

语言包与底层几何数据及 UI 渲染逻辑完全解耦（位于 `src/i18n/`）。新增一种界面与证明语言无需修改任何几何内核、SVG 渲染器或界面组件代码：

1. **新建 `src/i18n/locales/<code>/ui.ts`**：导出 `UiLocaleConfig`（包含界面词条 `messages`、复合工具说明 `macros`、标签页标题生成函数 `formatSolutionTabTitle` 以及基于 `ConstructionAction` 抽象语法树的步骤说明生成函数 `formatActionRationale`）。即使尚未逐关翻译题面，上述 AST 模板也能立即自动本地化全部约 2,700 条作图步骤说明与解法标签。
2. **添加 `src/i18n/locales/<code>/levels/*.ts` 与 `index.ts`** *(支持全量或增量翻译)*：导出以 `"ChapterId/ShortId"`（如 `"Alpha/T1"`、`"Omicron/L1"`）为键的 `LocalePack`，提供翻译后的 `title`、`prompt`、可选的 `steps`/`variantLabels` 以及 `proof`（交互式 `[[symbol]]` 芯片与 `$...$` KaTeX 公式在所有语言下通用；任何未翻译的关卡或字段都会平滑回退至默认英文）。
3. **在 `src/i18n/registry.ts` 中注册一行配置**：追加 `{ code, nativeLabel, loadPack: () => import('./locales/<code>').then(...) }`。顶部导航栏的语言下拉框与 Vite 的分语言按需分包规则（`vite.config.ts`）会自动生效。

---

## 部署指南（Deployment）

执行 `npm run build` 会将整个应用编译为 `dist/` 目录下的纯静态文件包（包含 `index.html`、`favicon.svg` 以及 `dist/assets/` 下带内容哈希的 JS、CSS 与数学字体文件）。

由于构建配置采用了相对资源路径（`vite.config.ts` 中的 `base: './'`），且深层链接基于 URL Hash（`#Chapter/ShortId/SolutionId`）与可选查询参数（`?step=…&lang=…`），生成的 `dist/` 目录既可以直接托管在根域名（`/`）下，也可以放置在任意子路径（如 `/euclidea-solution/`）下，**无需配置任何服务端 SPA 路由重写规则**。

### 方式一：GitHub Pages

**命令行一键发布**（将 `dist/` 推送至 `gh-pages` 分支）：

```bash
npm ci
npm run build
npx gh-pages -d dist
```

**GitHub Actions 自动部署**（保存为 `.github/workflows/deploy.yml`，并在仓库 **Settings → Pages → Source** 中选择 **GitHub Actions**）：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v6
        with:
          node-version: 26
          cache: npm
      - run: npm ci
      - run: npm test
      - run: npm run build
      - uses: actions/upload-pages-artifact@v5
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v5
```

### 方式二：Cloudflare Pages / Netlify / Vercel

关联 Git 仓库后按以下参数配置即可：

- **构建命令（Build command）**：`npm run build`
- **输出目录（Publish / Output directory）**：`dist`
- **Node.js 版本**：`24` 或 `26`

### 方式三：自建静态服务器（Caddy / Nginx / Node）

先执行 `npm ci && npm run build` 生成 `dist/`，随后使用任意静态文件服务器托管：

```bash
# 使用 Caddy 零配置启动静态站点
caddy file-server --root dist --listen :8080

# 或使用轻量级 Node 静态服务
npx serve dist -l 8080
```

若使用 **Nginx**，将 `root` 指向构建好的 `dist/` 目录即可（Vite 已对 `assets/` 下的文件名做内容哈希，可安全开启长效强缓存）：

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/euclidea-solution/dist;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript image/svg+xml font/woff2;

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 致谢与开源协议

- **致谢与非官方声明**：*Euclidea* 是由 **Horis International Limited**（[euclidea.xyz](https://www.euclidea.xyz/)）创作的经典尺规几何解谜游戏。本仓库为独立的非商业几何教学与欧氏综合证明可视化项目，与 Horis International Limited 无隶属或官方背书关系。
- **开源协议**：本项目基于 [MIT License](./LICENSE) 开源发布。
