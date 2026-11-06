# Euclidea Solution Explorer

An interactive, zero-backend web application for visually stepping through exact ruler-and-compass constructions and reading pure synthetic Euclidean proofs across all **149 Euclidea levels** (**15 chapters**, `Alpha` through `Omicron`).

#### (Choose your language below / 请在下方选择语言)
[![English](https://img.shields.io/badge/Language-English-blue)](README.md)
[![简体中文](https://img.shields.io/badge/Language-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-red)](README.zh-CN.md)

---

## Key Features

- **Complete 15-Chapter / 149-Level Coverage (`L`, `E`, and Multi-Variant `V` Stars)**:
  Covers all 149 puzzles and tool tutorials across `Alpha`–`Omicron` (307 deduplicated solution tabs in total). Every level achieves both `L` (tool moves) and `E` (elementary straightedge-and-compass moves) stars, plus the hidden `V` star on all multi-variant levels (`2V`–`4V`). Separate tabs are shown *only* when achieving `L`, `E`, or `V` stars requires genuinely distinct constructions.
- **Explicit Mathematical Diagram Annotations**:
  Points and auxiliary curves carry consistent mathematical identifiers (`A`, `B`, `O₁`, `M_AB`, `T′`, `c₁`, `l₁`, …) placed deterministically with multi-ring collision avoidance so labels never jump during playback or overlap in dense configurations.
- **Step-by-Step Playback Starting from `Step 0`**:
  Every level opens at `Step 0` (the given geometric configuration) and lets you step forward or backward (`|◀`, `◀ Prev`, `▶ Play / ⏸ Pause`, `Next ▶`, `▶|`, timeline slider, and `0.7× / 1× / 1.8×` speeds) while tracking live `L` and `E` costs, active tool dependency cues (dashed reference segments, compass transfer radii, right-angle markers, and bisected-angle arcs), and completed goal variants.
- **Pure Synthetic Euclidean Proofs with Bidirectional Highlighting**:
  Every solution tab includes a concise natural-language synthetic proof rendered with **KaTeX**. Hovering over any interactive symbol chip (e.g., `circle(O₁, A)`, `perpBisector(A, B)`, `T′`) highlights the corresponding point, line, or circle directly on the SVG canvas (including future objects as dashed previews), and clicking a constructed symbol jumps straight to the step where it is created.
- **Interactive Pan, Zoom, Resizable Split Panes & Deep Linking**:
  Drag to pan, scroll or click `+` / `−` to zoom around the cursor, click `Fit View` to reset framing, and drag the vertical/horizontal splitters between the chapter sidebar, SVG canvas, construction steps, and proof panel (double-click any splitter to reset). URL hashes (`#Chapter/ShortId/SolutionId`) and optional `?step=<n|end>&lang=<code>` query parameters link directly to any level, tab, step, and locale.
- **Config-Driven Internationalization (`i18n`) with Lazy Locale Packs**:
  Defaults to **English (`en`)** with zero extra bundle cost and supports instant, in-place switching to **Simplified Chinese (`zh-CN`)** across all UI controls, macro breakdowns, ~2,700 construction step rationales, 149 level prompts, and all synthetic Euclidean proofs (preserving interactive `[[symbol]]` chips and KaTeX formulas, plus bilingual chapter search).

---

## Chapter Catalog

| # | Chapter | Symbol | Levels | Highlights |
|---:|---|---|---:|---|
| 1 | **Alpha** | α | 9 | Equilateral triangle, perpendicular bisector, midpoint, circle center, inscribed square |
| 2 | **Beta** | β | 12 | Angle bisector, incenter, $30^\circ$ ray, drop/erect perpendiculars, circle tangents |
| 3 | **Gamma** | γ | 9 | Chord midpoint, $45^\circ$ angle, lozenge, quadrilateral centroid |
| 4 | **Delta** | δ | 10 | Double segment, $60^\circ$ lines, regular hexagon, square by diagonal/side, tangents to 3 lines |
| 5 | **Epsilon** | ε | 12 | Parallel tool, parallelogram, hash, line-segment reflections, square in circle |
| 6 | **Zeta** | ζ | 12 | Point/line reflections, non-collapsing compass, segment translation, Euler's nine-point circle |
| 7 | **Eta** | η | 11 | Pythagorean sum of squares, $75^\circ$ angle, Heron's problem, circumcircle, incircle, excircle |
| 8 | **Theta** | θ | 7 | Perimeter bisector, $54^\circ$ trisection, regular octagon, triangle cleaver, Torricelli point, circle equidistant from 4 points |
| 9 | **Iota** | ι | 10 | Minimum perimeter (Fagnano/reflection), harmonic mean of trapezoid bases, 4-line circle tangency |
| 10 | **Kappa** | κ | 12 | Outer & inner common tangents, $90^\circ$/$60^\circ$ rotations, segment/chord trisection, Soddy & tangential three circles |
| 11 | **Lambda** | λ | 10 | Fourth proportional, geometric mean, golden section, $54^\circ$, Pappus straightedge parallel, Apollonius circle in angle, regular pentagon |
| 12 | **Mu** | μ | 10 | Anticomplementary/orthic/excentral/tangential triangles, $120^\circ$ centroid triangle |
| 13 | **Nu** | ν | 9 | Apollonius point-line-circle tangency, equilateral triangles on parallel lines & concentric circles, harmonic straightedge reflection, square by 4 points |
| 14 | **Xi** | ξ | 5 | Inscribed rhombus, circle tangent to two circles at given point, right triangle by incircle touchpoint, parallelogram on 4 lines, Pappus Arbelos |
| 15 | **Omicron** | ο | 11 | Mohr–Mascheroni compass-only midpoint/copy/intersection/Napoleon's problem, Brocard straightedge tangents & perpendicular, $3^\circ$ angle, Mickey Mouse |

---

## Keyboard Shortcuts

| Key | Action |
|---|---|
| `←` / `→` | Step backward / forward (respects **Skip 0L Picks** toggle) |
| `Home` / `End` | Jump to `Step 0` (given configuration) / final completed step |
| `Space` | Toggle automatic step-by-step playback |

---

## Getting Started

### Prerequisites
- **Node.js** `>= 18` and **npm**

### Commands

```bash
# Install dependencies
npm install

# Start local Vite development server (default: http://localhost:5173)
npm run dev

# Run full Vitest verification suite (kernel + all 149 levels / 307 solutions + KaTeX & chip checks)
npm test

# Type-check with TypeScript and build production static bundle into dist/
npm run build

# Preview the production static build locally
npm run preview
```

---

## Project Structure

```text
euclidea_solution/
├── LICENSE                     # MIT License
├── README.md                   # Project documentation (English, default)
├── README.zh-CN.md             # Project documentation (Simplified Chinese)
├── index.html                  # App entry HTML & compass-and-straightedge SVG favicon
├── public/
│   └── favicon.svg             # Custom geometric compass-and-vesica vector icon
├── src/
│   ├── main.ts                 # Application bootstrap
│   ├── types/
│   │   └── level.ts            # Core data types for levels, 13 Euclidean actions, steps, variants, and proofs
│   ├── geometry/
│   │   ├── vec2.ts             # Exact 2D Euclidean vector operations & rotations
│   │   ├── intersections.ts    # Line-line, line-circle, and circle-circle intersections with directed ordering
│   │   ├── executor.ts         # Deterministic step-by-step board state & dependency-cue evaluator
│   │   └── camera.ts           # World-to-screen projection & automatic bounding-box framing
│   ├── render/
│   │   ├── svgRenderer.ts      # 4-layer interactive SVG viewport, active tool cues & hover highlights
│   │   ├── labelLayout.ts      # Deterministic multi-ring collision-free point & locus label solver
│   │   └── mathFormat.ts       # KaTeX + interactive [[symbol]] chip & mathematical subscript/prime formatter
│   ├── ui/
│   │   └── appShell.ts         # 3-pane resizable workspace, search, language switcher & synchronized panels
│   ├── i18n/
│   │   ├── types.ts            # Declarative LocalePack, UiLocaleConfig & LevelLocaleEntry schemas
│   │   ├── registry.ts         # Registered locales & dynamic import() loaders (default: 'en')
│   │   ├── manager.ts          # Runtime locale state, AST step rationale formatter & fallback overlay
│   │   └── locales/            # Per-locale packs ('en' default UI, 'zh-CN' UI + 15-chapter level/proof pack)
│   ├── styles/
│   │   └── main.css            # Clean mathematical typography & responsive layout styling
│   └── data/
│       ├── chapters.ts         # 15-chapter metadata & level summaries
│       ├── index.ts            # Unified 149-level registry & lookup helpers
│       └── levels/             # Canonical geometry, construction steps, variants & English proofs
└── tests/
    ├── kernel.test.ts          # Unit tests for Euclidean primitives, directed intersections & macro costs
    ├── alpha_levels.test.ts    # Detailed geometric invariant assertions for Chapter 1 (Alpha)
    ├── all_levels.test.ts      # Full 15-chapter / 149-level execution, star, framing, chip & KaTeX suite
    └── i18n.test.ts            # Full locale coverage, KaTeX/chip parity & partial-pack extensibility tests
```

---

## Adding a New Language (`i18n`)

Locale packs are strictly decoupled from canonical geometry and UI logic (`src/i18n/`). Adding a new language requires zero changes to the geometry kernel, SVG renderer, or UI components:

1. **Create `src/i18n/locales/<code>/ui.ts`**: Export a `UiLocaleConfig` (`messages`, `macros`, `formatSolutionTabTitle`, and `formatActionRationale` covering the `ConstructionAction` AST). Even before translating individual levels, `formatActionRationale` and `formatSolutionTabTitle` automatically localize all ~2,700 construction step rationales and solution tabs.
2. **Add `src/i18n/locales/<code>/levels/*.ts` & `index.ts`** *(incremental or complete)*: Export a `LocalePack` mapping `"ChapterId/ShortId"` (e.g. `"Alpha/T1"`, `"Omicron/L1"`) to translated `title`, `prompt`, optional `steps`/`variantLabels`, and `proof` (`[[symbol]]` chips and `$...$` KaTeX math work identically across all languages; any omitted level or field falls back cleanly to English).
3. **Register one entry in `src/i18n/registry.ts`**: Append `{ code, nativeLabel, loadPack: () => import('./locales/<code>').then(...) }`. The header language selector and Vite's per-locale lazy chunking (`vite.config.ts`) pick it up automatically.

---

## Deployment

`npm run build` compiles the entire application into a self-contained static bundle inside `dist/` (`index.html`, `favicon.svg`, and content-hashed JS/CSS/font chunks under `dist/assets/`).

Because asset imports use relative paths (`base: './'` in `vite.config.ts`) and deep links use URL hashes (`#Chapter/ShortId/SolutionId`) with optional query parameters (`?step=…&lang=…`), the `dist/` directory can be hosted at either a domain root (`/`) or any subdirectory (`/euclidea-solution/`) **without** requiring server-side SPA rewrite rules.

### Option 1: GitHub Pages

**One-off CLI publish** (pushes `dist/` to the `gh-pages` branch):

```bash
npm ci
npm run build
npx gh-pages -d dist
```

**Automated GitHub Actions workflow** (`.github/workflows/deploy.yml`, with repository **Settings → Pages → Source** set to **GitHub Actions**):

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
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm test
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Option 2: Cloudflare Pages / Netlify / Vercel

Connect your Git repository and configure:

- **Build command**: `npm run build`
- **Publish / Output directory**: `dist`
- **Node.js version**: `18` or `20`

### Option 3: Self-Hosted Static Server (Caddy / Nginx / Node)

Build `dist/` once (`npm ci && npm run build`), then serve it with any static file server:

```bash
# Caddy (zero-config static server)
caddy file-server --root dist --listen :8080

# Or lightweight Node static server
npx serve dist -l 8080
```

For **Nginx**, point `root` at the built `dist/` directory (long-lived caching is safe on `assets/` because Vite hashes filenames):

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

## Acknowledgments & License

- **Disclaimer**: *Euclidea* is an original geometric construction puzzle game created by **Horis International Limited** ([euclidea.xyz](https://www.euclidea.xyz/)). This repository is an independent, non-commercial educational project featuring original synthetic Euclidean proofs and interactive visualizations; it is not affiliated with or endorsed by Horis International Limited.
- **License**: Released under the [MIT License](./LICENSE).
