import { CHAPTERS_CATALOG, getDefaultLevel, getLevelById, IMPLEMENTED_LEVELS } from '../data';
import {
  executeSolution,
  type ExecutedSolution,
  getActionCost,
  getNavigableStepIndices,
} from '../geometry/executor';
import { DEFAULT_LOCALE_CODE, i18n } from '../i18n';
import { escapeHtml, formatInlineSymbolHtml, renderRichMathProse } from '../render/mathFormat';
import { SvgGeometryRenderer } from '../render/svgRenderer';
import type { LevelSpecData } from '../types/level';

type StudyViewMode = 'split' | 'steps' | 'proof';

const PLAY_INTERVALS_MS = [1450, 950, 520];
const PLAY_SPEED_LABELS = ['0.7×', '1×', '1.8×'];

const LAYOUT_STORAGE_KEY = 'euclidea-pane-layout-v1';
const DEFAULT_SIDEBAR_WIDTH = 256;
const MIN_SIDEBAR_WIDTH = 170;
const MAX_SIDEBAR_WIDTH = 560;
const MIN_CENTER_WIDTH = 300;
const MIN_STUDY_WIDTH = 280;
const DEFAULT_STEPS_SPLIT_RATIO = 0.46;
const MIN_SPLIT_PANE_HEIGHT = 110;

interface SavedPaneLayout {
  sidebarWidthPx?: number;
  studyWidthPx?: number | null;
  stepsSplitRatio?: number;
}

export class SolutionExplorerApp {
  private readonly root: HTMLElement;

  private currentLevel: LevelSpecData = getDefaultLevel();
  private solutionIdx = 0;
  private executed!: ExecutedSolution;
  private stepIndex = 0;

  private sidebarCollapsed = false;
  private sidebarWidthPx = DEFAULT_SIDEBAR_WIDTH;
  private studyWidthPx: number | null = null;
  private stepsSplitRatio = DEFAULT_STEPS_SPLIT_RATIO;
  private openChapters = new Set<string>();
  private searchQuery = '';

  private showPointLabels = true;
  private showLocusLabels = false;
  private skipZeroCostSteps = false;
  private showGhostPreview = false;
  private studyViewMode: StudyViewMode = 'split';

  private isPlaying = false;
  private speedIdx = 1;
  private playTimer: number | null = null;
  private hoveredKey: string | null = null;

  private renderer!: SvgGeometryRenderer;

  // Cached DOM references
  private workspaceEl!: HTMLElement;
  private sidebarEl!: HTMLElement;
  private sidebarScrollEl!: HTMLElement;
  private headerBreadcrumbEl!: HTMLElement;
  private headerStarsEl!: HTMLElement;
  private langSelectEl!: HTMLSelectElement;
  private problemBannerEl!: HTMLElement;
  private playbackBarEl!: HTMLElement;
  private studyColumnEl!: HTMLElement;
  private stepsPaneEl!: HTMLElement;
  private stepsListEl!: HTMLElement;
  private proofScrollEl!: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.sidebarCollapsed = window.innerWidth <= 1040;
    this.loadSavedLayout();
    this.loadFromUrlHash();
    this.openChapters.add(this.currentLevel.chapterId);
    this.executed = executeSolution(
      this.currentLevel,
      this.currentLevel.solutions[this.solutionIdx]
    );
    const stepParam = new URLSearchParams(window.location.search).get('step');
    if (stepParam === 'end') {
      this.stepIndex = this.executed.snapshots.length - 1;
    } else if (stepParam !== null && /^\d+$/.test(stepParam)) {
      this.stepIndex = Math.min(Number(stepParam), this.executed.snapshots.length - 1);
    } else {
      this.stepIndex = 0;
    }

    this.buildShellDom();
    this.applyPaneSizes();
    this.clampCustomPaneWidthsToViewport();
    this.bindGlobalKeyboard();
    i18n.onChange(() => {
      this.renderStaticChrome();
      this.refreshAll();
    });

    window.addEventListener('resize', () => {
      this.clampCustomPaneWidthsToViewport();
    });
    window.addEventListener('hashchange', () => {
      if (this.loadFromUrlHash()) {
        this.applyLevelOrSolutionChange();
      }
    });

    this.renderStaticChrome();
    this.refreshAll();

    const initialLocale = i18n.detectInitialLocaleCode();
    if (initialLocale !== DEFAULT_LOCALE_CODE) {
      void i18n.setLocale(initialLocale, false);
    }
  }

  private loadFromUrlHash(): boolean {
    const raw = window.location.hash.replace(/^#\/?/, '').trim();
    if (!raw) return false;
    const [chapterId, shortId, solId] = raw.split('/');
    const found = getLevelById(chapterId, shortId);
    if (!found) return false;

    let changed = false;
    if (found.chapterId !== this.currentLevel.chapterId || found.shortId !== this.currentLevel.shortId) {
      this.currentLevel = found;
      this.openChapters.add(found.chapterId);
      this.solutionIdx = 0;
      changed = true;
    }
    if (solId) {
      const idx = found.solutions.findIndex((s) => s.id === solId);
      if (idx >= 0 && idx !== this.solutionIdx) {
        this.solutionIdx = idx;
        changed = true;
      }
    }
    return changed;
  }

  private syncUrlHash(): void {
    const sol = this.currentLevel.solutions[this.solutionIdx];
    const targetHash = `#${this.currentLevel.chapterId}/${this.currentLevel.shortId}/${sol.id}`;
    if (window.location.hash !== targetHash) {
      try {
        window.history.replaceState(null, '', targetHash);
      } catch {
        window.location.hash = targetHash;
      }
    }
  }

  private buildShellDom(): void {
    this.root.innerHTML = `
      <header class="top-header">
        <div class="header-left">
          <button type="button" class="icon-btn" id="btn-toggle-sidebar">☰ Chapters</button>
          <span class="brand-group">
            <img src="./favicon.svg" alt="" class="brand-icon" width="22" height="22" />
            <span class="brand-title" id="brand-title">Euclidea Solution Explorer</span>
          </span>
          <span class="header-divider"></span>
          <div class="level-breadcrumb" id="header-breadcrumb"></div>
        </div>
        <div class="header-right" id="header-right">
          <div class="star-targets" id="header-stars"></div>
          <label class="lang-switcher" id="lang-switcher">
            <span class="lang-globe" aria-hidden="true">🌐</span>
            <select class="lang-select" id="lang-select" aria-label="Language"></select>
          </label>
        </div>
      </header>

      <div class="workspace" id="workspace">
        <aside class="sidebar" id="sidebar">
          <div class="sidebar-search-box">
            <input type="search" class="sidebar-search-input" id="sidebar-search" />
          </div>
          <div class="sidebar-scroll" id="sidebar-scroll"></div>
        </aside>

        <div
          class="pane-resizer pane-resizer-col"
          id="resizer-sidebar"
          role="separator"
          tabindex="0"
          aria-orientation="vertical"
        ><span class="pane-resizer-grip"></span></div>

        <main class="center-stage">
          <section class="problem-banner" id="problem-banner"></section>

          <div class="canvas-wrapper" id="canvas-wrapper">
            <div class="canvas-Overlay-top">
              <div class="canvas-toolbar-card">
                <label class="toolbar-check" id="lbl-point-labels">
                  <input type="checkbox" id="chk-point-labels" checked />
                  <span id="txt-point-labels"></span>
                </label>
                <label class="toolbar-check" id="lbl-locus-labels">
                  <input type="checkbox" id="chk-locus-labels" />
                  <span id="txt-locus-labels"></span>
                </label>
                <label class="toolbar-check" id="lbl-skip-0l">
                  <input type="checkbox" id="chk-skip-0l" />
                  <span id="txt-skip-0l"></span>
                </label>
                <label class="toolbar-check" id="lbl-ghost">
                  <input type="checkbox" id="chk-ghost" />
                  <span id="txt-ghost"></span>
                </label>
              </div>
              <div class="canvas-toolbar-card">
                <button type="button" class="mini-zoom-btn" id="btn-zoom-out">−</button>
                <button type="button" class="mini-zoom-btn" id="btn-zoom-in">+</button>
                <button type="button" class="mini-zoom-btn" id="btn-fit-view"></button>
              </div>
            </div>

            <div class="canvas-legend">
              <span class="legend-item"><span class="legend-swatch" style="background:#0f172a"></span><span id="legend-given"></span></span>
              <span class="legend-item"><span class="legend-swatch" style="background:#94a3b8"></span><span id="legend-aux"></span></span>
              <span class="legend-item"><span class="legend-swatch" style="background:#2563eb"></span><span id="legend-active"></span></span>
              <span class="legend-item"><span class="legend-swatch" style="background:#059669"></span><span id="legend-goal"></span></span>
            </div>
          </div>

          <footer class="playback-bar" id="playback-bar"></footer>
        </main>

        <div
          class="pane-resizer pane-resizer-col"
          id="resizer-study"
          role="separator"
          tabindex="0"
          aria-orientation="vertical"
        ><span class="pane-resizer-grip"></span></div>

        <section class="study-column" id="study-column">
          <div class="study-mode-bar">
            <span class="study-mode-label" id="study-mode-label"></span>
            <div class="view-mode-pills" id="view-mode-pills">
              <button type="button" class="mode-pill-btn is-active" data-mode="split" id="pill-mode-split"></button>
              <button type="button" class="mode-pill-btn" data-mode="steps" id="pill-mode-steps"></button>
              <button type="button" class="mode-pill-btn" data-mode="proof" id="pill-mode-proof"></button>
            </div>
          </div>

          <div class="steps-pane" id="steps-pane">
            <div class="pane-subheader">
              <span id="steps-pane-title"></span>
              <span id="steps-count-meta" style="font-weight:500;color:var(--text-muted)"></span>
            </div>
            <div class="steps-list" id="steps-list"></div>
          </div>

          <div
            class="pane-resizer pane-resizer-row"
            id="resizer-study-split"
            role="separator"
            tabindex="0"
            aria-orientation="horizontal"
          ><span class="pane-resizer-grip"></span></div>

          <div class="proof-pane">
            <div class="pane-subheader">
              <span id="proof-pane-title"></span>
              <span id="proof-hover-hint" style="font-weight:500;font-size:11px;color:var(--text-muted)"></span>
            </div>
            <div class="proof-scroll" id="proof-scroll"></div>
          </div>
        </section>
      </div>
    `;

    this.workspaceEl = this.root.querySelector('#workspace')!;
    this.sidebarEl = this.root.querySelector('#sidebar')!;
    this.sidebarScrollEl = this.root.querySelector('#sidebar-scroll')!;
    this.headerBreadcrumbEl = this.root.querySelector('#header-breadcrumb')!;
    this.headerStarsEl = this.root.querySelector('#header-stars')!;
    this.langSelectEl = this.root.querySelector('#lang-select')!;
    this.problemBannerEl = this.root.querySelector('#problem-banner')!;
    this.playbackBarEl = this.root.querySelector('#playback-bar')!;
    this.studyColumnEl = this.root.querySelector('#study-column')!;
    this.stepsPaneEl = this.root.querySelector('#steps-pane')!;
    this.stepsListEl = this.root.querySelector('#steps-list')!;
    this.proofScrollEl = this.root.querySelector('#proof-scroll')!;

    this.langSelectEl.innerHTML = i18n.supportedLocales
      .map(
        (loc) =>
          `<option value="${escapeHtml(loc.code)}">${escapeHtml(loc.nativeLabel)}</option>`
      )
      .join('');
    this.langSelectEl.value = i18n.locale;
    this.langSelectEl.addEventListener('change', () => {
      void i18n.setLocale(this.langSelectEl.value, true);
    });

    this.workspaceEl.classList.toggle('sidebar-collapsed', this.sidebarCollapsed);

    const canvasWrapper = this.root.querySelector<HTMLElement>('#canvas-wrapper')!;
    this.renderer = new SvgGeometryRenderer(canvasWrapper, (key) => {
      this.setHoveredSymbolKey(key);
    });
    this.renderer.setSolution(this.executed, this.stepIndex);

    // Bind toolbar & header controls
    this.root.querySelector('#btn-toggle-sidebar')!.addEventListener('click', () => {
      this.sidebarCollapsed = !this.sidebarCollapsed;
      this.workspaceEl.classList.toggle('sidebar-collapsed', this.sidebarCollapsed);
      if (!this.sidebarCollapsed) {
        this.clampCustomPaneWidthsToViewport();
      }
    });

    this.bindPaneResizers();

    const searchInput = this.root.querySelector<HTMLInputElement>('#sidebar-search')!;
    searchInput.addEventListener('input', () => {
      this.searchQuery = searchInput.value.trim().toLowerCase();
      this.renderSidebar();
    });

    this.root.querySelector<HTMLInputElement>('#chk-point-labels')!.addEventListener('change', (e) => {
      this.showPointLabels = (e.target as HTMLInputElement).checked;
      this.renderer.updateOptions({ showPointLabels: this.showPointLabels });
    });

    this.root.querySelector<HTMLInputElement>('#chk-locus-labels')!.addEventListener('change', (e) => {
      this.showLocusLabels = (e.target as HTMLInputElement).checked;
      this.renderer.updateOptions({ showLocusLabels: this.showLocusLabels });
    });

    this.root.querySelector<HTMLInputElement>('#chk-skip-0l')!.addEventListener('change', (e) => {
      this.skipZeroCostSteps = (e.target as HTMLInputElement).checked;
      this.renderPlaybackBar();
    });

    this.root.querySelector<HTMLInputElement>('#chk-ghost')!.addEventListener('change', (e) => {
      this.showGhostPreview = (e.target as HTMLInputElement).checked;
      this.renderer.updateOptions({ showGhostPreview: this.showGhostPreview });
    });

    this.root.querySelector('#btn-zoom-in')!.addEventListener('click', () => this.renderer.zoomBy(1.2));
    this.root.querySelector('#btn-zoom-out')!.addEventListener('click', () => this.renderer.zoomBy(1 / 1.2));
    this.root.querySelector('#btn-fit-view')!.addEventListener('click', () => this.renderer.resetCamera());

    this.root.querySelector('#view-mode-pills')!.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-mode]');
      if (!btn) return;
      this.studyViewMode = btn.dataset.mode as StudyViewMode;
      this.studyColumnEl.classList.remove('mode-steps', 'mode-proof');
      if (this.studyViewMode === 'steps') this.studyColumnEl.classList.add('mode-steps');
      if (this.studyViewMode === 'proof') this.studyColumnEl.classList.add('mode-proof');
      this.root.querySelectorAll('.mode-pill-btn').forEach((el) => {
        el.classList.toggle('is-active', el === btn);
      });
    });
  }

  private loadSavedLayout(): void {
    try {
      const raw = window.localStorage.getItem(LAYOUT_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as SavedPaneLayout;
      if (typeof parsed.sidebarWidthPx === 'number' && Number.isFinite(parsed.sidebarWidthPx)) {
        this.sidebarWidthPx = Math.max(
          MIN_SIDEBAR_WIDTH,
          Math.min(MAX_SIDEBAR_WIDTH, Math.round(parsed.sidebarWidthPx))
        );
      }
      if (typeof parsed.studyWidthPx === 'number' && Number.isFinite(parsed.studyWidthPx)) {
        this.studyWidthPx = Math.max(MIN_STUDY_WIDTH, Math.round(parsed.studyWidthPx));
      } else if (parsed.studyWidthPx === null) {
        this.studyWidthPx = null;
      }
      if (typeof parsed.stepsSplitRatio === 'number' && Number.isFinite(parsed.stepsSplitRatio)) {
        this.stepsSplitRatio = Math.max(0.14, Math.min(0.86, parsed.stepsSplitRatio));
      }
    } catch {
      // Ignore storage access errors in restricted environments
    }
  }

  private saveLayout(): void {
    try {
      const payload: SavedPaneLayout = {
        sidebarWidthPx: this.sidebarWidthPx,
        studyWidthPx: this.studyWidthPx,
        stepsSplitRatio: Number(this.stepsSplitRatio.toFixed(4)),
      };
      window.localStorage.setItem(LAYOUT_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage write errors
    }
  }

  private applyPaneSizes(): void {
    this.workspaceEl.style.setProperty('--sidebar-width', `${this.sidebarWidthPx}px`);
    if (this.studyWidthPx !== null) {
      this.workspaceEl.classList.add('has-custom-study-width');
      this.workspaceEl.style.setProperty('--study-width', `${this.studyWidthPx}px`);
    } else {
      this.workspaceEl.classList.remove('has-custom-study-width');
      this.workspaceEl.style.removeProperty('--study-width');
    }
    this.studyColumnEl.style.setProperty('--steps-split-ratio', this.stepsSplitRatio.toFixed(4));
  }

  private clampSidebarWidth(desiredPx: number): number {
    const workspaceWidth = this.workspaceEl.getBoundingClientRect().width;
    if (workspaceWidth <= 0) {
      return Math.max(MIN_SIDEBAR_WIDTH, Math.min(MAX_SIDEBAR_WIDTH, Math.round(desiredPx)));
    }
    const currentStudyWidth = this.studyColumnEl.getBoundingClientRect().width || MIN_STUDY_WIDTH;
    const maxAllowed = Math.max(
      MIN_SIDEBAR_WIDTH,
      Math.min(MAX_SIDEBAR_WIDTH, workspaceWidth - currentStudyWidth - MIN_CENTER_WIDTH - 10)
    );
    return Math.round(Math.max(MIN_SIDEBAR_WIDTH, Math.min(maxAllowed, desiredPx)));
  }

  private clampStudyWidth(desiredPx: number): number {
    const workspaceWidth = this.workspaceEl.getBoundingClientRect().width;
    if (workspaceWidth <= 0) {
      return Math.max(MIN_STUDY_WIDTH, Math.round(desiredPx));
    }
    const effectiveSidebar = this.sidebarCollapsed ? 0 : this.sidebarWidthPx;
    const resizersWidth = this.sidebarCollapsed ? 5 : 10;
    const maxAllowed = Math.max(
      MIN_STUDY_WIDTH,
      workspaceWidth - effectiveSidebar - MIN_CENTER_WIDTH - resizersWidth
    );
    return Math.round(Math.max(MIN_STUDY_WIDTH, Math.min(maxAllowed, desiredPx)));
  }

  private clampStepsSplitRatio(desiredStepsHeightPx: number): number {
    const bodyHeight = Math.max(
      MIN_SPLIT_PANE_HEIGHT * 2,
      this.studyColumnEl.getBoundingClientRect().height - 45
    );
    const clampedHeight = Math.max(
      MIN_SPLIT_PANE_HEIGHT,
      Math.min(bodyHeight - MIN_SPLIT_PANE_HEIGHT, desiredStepsHeightPx)
    );
    return Math.max(0.14, Math.min(0.86, clampedHeight / bodyHeight));
  }

  private clampCustomPaneWidthsToViewport(): void {
    const workspaceWidth = this.workspaceEl.getBoundingClientRect().width;
    if (workspaceWidth <= 0) return;

    let updated = false;
    if (this.studyWidthPx !== null) {
      const clampedStudy = this.clampStudyWidth(this.studyWidthPx);
      if (clampedStudy !== this.studyWidthPx) {
        this.studyWidthPx = clampedStudy;
        updated = true;
      }
    }
    if (!this.sidebarCollapsed) {
      const clampedSidebar = this.clampSidebarWidth(this.sidebarWidthPx);
      if (clampedSidebar !== this.sidebarWidthPx) {
        this.sidebarWidthPx = clampedSidebar;
        updated = true;
      }
    }
    if (updated) {
      this.applyPaneSizes();
    }
  }

  private bindPaneResizers(): void {
    const sidebarResizer = this.root.querySelector<HTMLElement>('#resizer-sidebar')!;
    const studyResizer = this.root.querySelector<HTMLElement>('#resizer-study')!;
    const splitResizer = this.root.querySelector<HTMLElement>('#resizer-study-split')!;

    this.attachDragSession(
      sidebarResizer,
      'is-resizing-col',
      () => this.sidebarEl.getBoundingClientRect().width,
      (startWidth, dx) => {
        this.sidebarWidthPx = this.clampSidebarWidth(startWidth + dx);
        this.applyPaneSizes();
      },
      () => {
        this.sidebarWidthPx = DEFAULT_SIDEBAR_WIDTH;
        this.applyPaneSizes();
        this.saveLayout();
      }
    );

    sidebarResizer.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      e.stopPropagation();
      const delta = e.key === 'ArrowRight' ? 24 : -24;
      this.sidebarWidthPx = this.clampSidebarWidth(this.sidebarWidthPx + delta);
      this.applyPaneSizes();
      this.saveLayout();
    });

    this.attachDragSession(
      studyResizer,
      'is-resizing-col',
      () => this.studyColumnEl.getBoundingClientRect().width,
      (startWidth, dx) => {
        this.studyWidthPx = this.clampStudyWidth(startWidth - dx);
        this.applyPaneSizes();
      },
      () => {
        this.studyWidthPx = null;
        this.applyPaneSizes();
        this.saveLayout();
      }
    );

    studyResizer.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      e.stopPropagation();
      const current = this.studyColumnEl.getBoundingClientRect().width;
      const delta = e.key === 'ArrowLeft' ? 24 : -24;
      this.studyWidthPx = this.clampStudyWidth(current + delta);
      this.applyPaneSizes();
      this.saveLayout();
    });

    this.attachDragSession(
      splitResizer,
      'is-resizing-row',
      () => this.stepsPaneEl.getBoundingClientRect().height,
      (startHeight, _dx, dy) => {
        this.stepsSplitRatio = this.clampStepsSplitRatio(startHeight + dy);
        this.applyPaneSizes();
      },
      () => {
        this.stepsSplitRatio = DEFAULT_STEPS_SPLIT_RATIO;
        this.applyPaneSizes();
        this.saveLayout();
      }
    );

    splitResizer.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
      e.preventDefault();
      e.stopPropagation();
      const current = this.stepsPaneEl.getBoundingClientRect().height;
      const delta = e.key === 'ArrowDown' ? 24 : -24;
      this.stepsSplitRatio = this.clampStepsSplitRatio(current + delta);
      this.applyPaneSizes();
      this.saveLayout();
    });
  }

  private attachDragSession(
    resizerEl: HTMLElement,
    bodyClass: 'is-resizing-col' | 'is-resizing-row',
    getStartSize: () => number,
    onMoveDelta: (startSize: number, dx: number, dy: number) => void,
    onReset: () => void
  ): void {
    let activePointerId: number | null = null;
    let startX = 0;
    let startY = 0;
    let startSize = 0;

    const onWindowPointerMove = (e: PointerEvent) => {
      if (activePointerId === null || e.pointerId !== activePointerId) return;
      onMoveDelta(startSize, e.clientX - startX, e.clientY - startY);
    };

    const finishDrag = () => {
      if (activePointerId === null) return;
      const pid = activePointerId;
      activePointerId = null;
      window.removeEventListener('pointermove', onWindowPointerMove);
      window.removeEventListener('pointerup', onWindowPointerUp);
      window.removeEventListener('pointercancel', finishDrag);
      window.removeEventListener('blur', finishDrag);
      try {
        if (resizerEl.hasPointerCapture(pid)) {
          resizerEl.releasePointerCapture(pid);
        }
      } catch {
        // Ignore if pointer capture was already released
      }
      resizerEl.classList.remove('is-dragging');
      document.body.classList.remove(bodyClass);
      this.saveLayout();
    };

    const onWindowPointerUp = (e: PointerEvent) => {
      if (e.pointerId !== activePointerId) return;
      finishDrag();
    };

    resizerEl.addEventListener('pointerdown', (e: PointerEvent) => {
      if (e.button !== 0) return;
      e.preventDefault();
      activePointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      startSize = getStartSize();
      resizerEl.classList.add('is-dragging');
      document.body.classList.add(bodyClass);
      window.addEventListener('pointermove', onWindowPointerMove);
      window.addEventListener('pointerup', onWindowPointerUp);
      window.addEventListener('pointercancel', finishDrag);
      window.addEventListener('blur', finishDrag);
      try {
        resizerEl.setPointerCapture(e.pointerId);
      } catch {
        // Window listeners remain active even without pointer capture
      }
    });

    resizerEl.addEventListener('dblclick', (e: MouseEvent) => {
      e.preventDefault();
      onReset();
    });
  }

  private bindGlobalKeyboard(): void {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.classList.contains('pane-resizer')) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.pausePlayback();
        this.stepForward();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.pausePlayback();
        this.stepBackward();
      } else if (e.key === ' ') {
        e.preventDefault();
        this.togglePlayback();
      } else if (e.key === 'Home') {
        e.preventDefault();
        this.pausePlayback();
        this.goToStep(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        this.pausePlayback();
        this.goToStep(this.executed.snapshots.length - 1);
      }
    });
  }

  private applyLevelOrSolutionChange(): void {
    this.pausePlayback();
    this.hoveredKey = null;
    this.openChapters.add(this.currentLevel.chapterId);
    this.executed = executeSolution(
      this.currentLevel,
      this.currentLevel.solutions[this.solutionIdx]
    );
    this.stepIndex = 0;
    this.syncUrlHash();
    this.renderer.setSolution(this.executed, this.stepIndex);
    this.renderer.updateOptions({ highlightedKey: null });
    this.refreshAll();
  }

  private renderStaticChrome(): void {
    const msg = i18n.ui.messages;
    document.documentElement.lang = i18n.ui.htmlLang;
    document.documentElement.dir = i18n.ui.dir;
    document.title = msg.documentTitle;

    this.langSelectEl.value = i18n.locale;
    this.root.querySelector<HTMLElement>('#lang-switcher')!.title = msg.languageSelectorTooltip;
    this.langSelectEl.setAttribute('aria-label', msg.languageSelectorTooltip);

    const toggleBtn = this.root.querySelector<HTMLButtonElement>('#btn-toggle-sidebar')!;
    toggleBtn.textContent = msg.toggleChaptersBtn;
    toggleBtn.title = msg.toggleChaptersTooltip;

    this.root.querySelector<HTMLElement>('#brand-title')!.textContent = msg.brandTitle;

    const totalLevels = CHAPTERS_CATALOG.reduce((sum, ch) => sum + ch.totalLevels, 0);
    this.root.querySelector<HTMLInputElement>('#sidebar-search')!.placeholder =
      msg.searchPlaceholder(totalLevels);

    const rSidebar = this.root.querySelector<HTMLElement>('#resizer-sidebar')!;
    rSidebar.setAttribute('aria-label', msg.resizerSidebarLabel);
    rSidebar.title = msg.resizerSidebarTooltip;

    const rStudy = this.root.querySelector<HTMLElement>('#resizer-study')!;
    rStudy.setAttribute('aria-label', msg.resizerStudyLabel);
    rStudy.title = msg.resizerStudyTooltip;

    const rSplit = this.root.querySelector<HTMLElement>('#resizer-study-split')!;
    rSplit.setAttribute('aria-label', msg.resizerSplitLabel);
    rSplit.title = msg.resizerSplitTooltip;

    this.root.querySelector<HTMLElement>('#lbl-point-labels')!.title = msg.pointLabelsTooltip;
    this.root.querySelector<HTMLElement>('#txt-point-labels')!.textContent = msg.pointLabelsCheck;

    this.root.querySelector<HTMLElement>('#lbl-locus-labels')!.title = msg.locusLabelsTooltip;
    this.root.querySelector<HTMLElement>('#txt-locus-labels')!.textContent = msg.locusLabelsCheck;

    this.root.querySelector<HTMLElement>('#lbl-skip-0l')!.title = msg.skipZeroCostTooltip;
    this.root.querySelector<HTMLElement>('#txt-skip-0l')!.textContent = msg.skipZeroCostCheck;

    this.root.querySelector<HTMLElement>('#lbl-ghost')!.title = msg.ghostPreviewTooltip;
    this.root.querySelector<HTMLElement>('#txt-ghost')!.textContent = msg.ghostPreviewCheck;

    this.root.querySelector<HTMLElement>('#btn-zoom-out')!.title = msg.zoomOutTooltip;
    this.root.querySelector<HTMLElement>('#btn-zoom-in')!.title = msg.zoomInTooltip;

    const fitBtn = this.root.querySelector<HTMLButtonElement>('#btn-fit-view')!;
    fitBtn.textContent = msg.fitViewBtn;
    fitBtn.title = msg.fitViewTooltip;

    this.root.querySelector<HTMLElement>('#legend-given')!.textContent = msg.legendGiven;
    this.root.querySelector<HTMLElement>('#legend-aux')!.textContent = msg.legendAuxiliary;
    this.root.querySelector<HTMLElement>('#legend-active')!.textContent = msg.legendActiveStep;
    this.root.querySelector<HTMLElement>('#legend-goal')!.textContent = msg.legendCompletedGoal;

    this.root.querySelector<HTMLElement>('#study-mode-label')!.textContent = msg.studyHeaderTitle;
    this.root.querySelector<HTMLElement>('#pill-mode-split')!.textContent = msg.viewModeSplit;
    this.root.querySelector<HTMLElement>('#pill-mode-steps')!.textContent = msg.viewModeSteps;
    this.root.querySelector<HTMLElement>('#pill-mode-proof')!.textContent = msg.viewModeProof;

    this.root.querySelector<HTMLElement>('#steps-pane-title')!.textContent = msg.stepsPaneTitle;
    this.root.querySelector<HTMLElement>('#proof-pane-title')!.textContent = msg.proofPaneTitle;
    this.root.querySelector<HTMLElement>('#proof-hover-hint')!.textContent = msg.proofHoverHint;
  }

  private refreshAll(): void {
    this.renderHeader();
    this.renderSidebar();
    this.renderProblemBanner();
    this.renderStepsList();
    this.renderProofPane();
    this.renderPlaybackBar();
  }

  private renderHeader(): void {
    const lvl = i18n.localizeLevel(this.currentLevel);
    const msg = i18n.ui.messages;
    const chapterMeta = CHAPTERS_CATALOG.find((c) => c.id === lvl.chapterId);
    const chapterLabel = chapterMeta ? i18n.getChapterName(chapterMeta) : lvl.chapterId;
    const implIdx = IMPLEMENTED_LEVELS.findIndex(
      (x) => x.chapterId === lvl.chapterId && x.shortId === lvl.shortId
    );
    const hasPrevLvl = implIdx > 0;
    const hasNextLvl = implIdx >= 0 && implIdx < IMPLEMENTED_LEVELS.length - 1;

    this.headerBreadcrumbEl.innerHTML = `
      <span class="level-code-pill">${escapeHtml(chapterLabel)} · ${escapeHtml(lvl.code)}</span>
      <span class="level-header-title">${escapeHtml(lvl.title)}</span>
      <button type="button" class="icon-btn" id="btn-prev-lvl" title="${escapeHtml(msg.prevLevelTooltip)}" ${hasPrevLvl ? '' : 'disabled'}>‹</button>
      <button type="button" class="icon-btn" id="btn-next-lvl" title="${escapeHtml(msg.nextLevelTooltip)}" ${hasNextLvl ? '' : 'disabled'}>›</button>
    `;

    this.headerBreadcrumbEl.querySelector('#btn-prev-lvl')?.addEventListener('click', () => {
      if (!hasPrevLvl) return;
      this.currentLevel = IMPLEMENTED_LEVELS[implIdx - 1];
      this.solutionIdx = 0;
      this.applyLevelOrSolutionChange();
    });

    this.headerBreadcrumbEl.querySelector('#btn-next-lvl')?.addEventListener('click', () => {
      if (!hasNextLvl) return;
      this.currentLevel = IMPLEMENTED_LEVELS[implIdx + 1];
      this.solutionIdx = 0;
      this.applyLevelOrSolutionChange();
    });

    this.updateHeaderStarBadges();
  }

  private updateHeaderStarBadges(): void {
    const lvl = this.currentLevel;
    const msg = i18n.ui.messages;
    const sol = lvl.solutions[this.solutionIdx];
    const snap = this.executed.snapshots[this.stepIndex];
    const hasVStar = lvl.numVariants > 1;
    const goalReached =
      hasVStar && sol.starsEarned.includes('V')
        ? snap.completedVariants.length >= lvl.numVariants
        : snap.completedVariants.length >= 1;

    const lEarned = goalReached && snap.cumulativeL <= lvl.targetL;
    const eEarned = goalReached && snap.cumulativeE <= lvl.targetE;
    const vEarned = hasVStar && snap.completedVariants.length >= lvl.numVariants;
    const vStarHtml = hasVStar
      ? `
      <span class="star-target-pill ${vEarned ? 'is-earned' : ''}" title="${escapeHtml(msg.vStarTooltip(lvl.numVariants))}">
        ★ ${lvl.numVariants}V
      </span>`
      : '';

    this.headerStarsEl.innerHTML = `
      <span class="star-target-pill ${lEarned ? 'is-earned' : ''}" title="${escapeHtml(msg.lStarTooltip(lvl.targetL))}">
        ★ ${lvl.targetL}L
      </span>
      <span class="star-target-pill ${eEarned ? 'is-earned' : ''}" title="${escapeHtml(msg.eStarTooltip(lvl.targetE))}">
        ★ ${lvl.targetE}E
      </span>${vStarHtml}
    `;
  }

  private renderSidebar(): void {
    const msg = i18n.ui.messages;
    let html = '';

    for (const ch of CHAPTERS_CATALOG) {
      const localChapterName = i18n.getChapterName(ch);
      const chapterMatches =
        ch.name.toLowerCase().includes(this.searchQuery) ||
        localChapterName.toLowerCase().includes(this.searchQuery);

      const filteredLevels = this.searchQuery
        ? ch.levels.filter((l) => {
            const localTitle = i18n.getLevelTitle(ch.id, l.shortId, l.title);
            return (
              localTitle.toLowerCase().includes(this.searchQuery) ||
              l.title.toLowerCase().includes(this.searchQuery) ||
              l.code.toLowerCase().includes(this.searchQuery) ||
              chapterMatches
            );
          })
        : ch.levels;

      if (this.searchQuery && filteredLevels.length === 0 && !chapterMatches) {
        continue;
      }

      const isOpen = this.searchQuery ? true : this.openChapters.has(ch.id);
      const implCount = ch.levels.filter((l) => l.implemented).length;

      html += `
        <div class="chapter-group">
          <button type="button" class="chapter-header-btn" data-chapter="${escapeHtml(ch.id)}">
            <span>
              <span class="chapter-symbol">${escapeHtml(ch.greekSymbol)}</span>
              ${ch.number}. ${escapeHtml(localChapterName)}
            </span>
            <span class="chapter-count">${implCount > 0 ? `${implCount}/` : ''}${ch.totalLevels} ${isOpen ? '▾' : '▸'}</span>
          </button>
      `;

      if (isOpen) {
        html += `<div class="chapter-levels-list">`;
        if (filteredLevels.length === 0) {
          html += `<div style="font-size:11.5px;color:var(--text-muted);padding:4px 8px;">${escapeHtml(msg.unimplementedChapterNotice(ch.totalLevels))}</div>`;
        } else {
          for (const item of filteredLevels) {
            const localTitle = i18n.getLevelTitle(ch.id, item.shortId, item.title);
            const isActive =
              this.currentLevel.chapterId === ch.id && this.currentLevel.shortId === item.shortId;
            html += `
              <button
                type="button"
                class="level-nav-item ${isActive ? 'is-active' : ''}"
                data-lvl-ch="${escapeHtml(ch.id)}"
                data-lvl-id="${escapeHtml(item.shortId)}"
                ${item.implemented ? '' : 'disabled'}
              >
                <span class="level-nav-code">${escapeHtml(item.code)}</span>
                <span class="level-nav-title">${escapeHtml(localTitle)}</span>
                <span class="level-nav-meta">${item.implemented ? `${item.targetL}L·${item.targetE}E` : escapeHtml(msg.soonBadge)}</span>
              </button>
            `;
          }
        }
        html += `</div>`;
      }

      html += `</div>`;
    }

    this.sidebarScrollEl.innerHTML = html;

    this.sidebarScrollEl.querySelectorAll<HTMLButtonElement>('[data-chapter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cid = btn.dataset.chapter!;
        if (this.openChapters.has(cid)) {
          this.openChapters.delete(cid);
        } else {
          this.openChapters.add(cid);
        }
        this.renderSidebar();
      });
    });

    this.sidebarScrollEl.querySelectorAll<HTMLButtonElement>('[data-lvl-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const found = getLevelById(btn.dataset.lvlCh!, btn.dataset.lvlId!);
        if (!found) return;
        this.currentLevel = found;
        this.solutionIdx = 0;
        this.applyLevelOrSolutionChange();
      });
    });
  }

  private renderProblemBanner(): void {
    const lvl = i18n.localizeLevel(this.currentLevel);

    const tabsHtml = lvl.solutions
      .map((sol, idx) => {
        const visibleStars =
          lvl.numVariants > 1 ? sol.starsEarned : sol.starsEarned.filter((s) => s !== 'V');
        const starsText = visibleStars.map((s) => `★${s}`).join(' ');
        return `
          <button
            type="button"
            class="solution-tab-btn ${idx === this.solutionIdx ? 'is-active' : ''}"
            data-sol-idx="${idx}"
          >
            <span>${escapeHtml(sol.tabTitle)}</span>
            <span class="tab-star-badge">${escapeHtml(starsText)}</span>
            <span class="tab-cost-meta">${sol.expectedLCost}L · ${sol.expectedECost}E</span>
          </button>
        `;
      })
      .join('');

    this.problemBannerEl.innerHTML = `
      <p class="problem-prompt">${escapeHtml(lvl.prompt)}</p>
      <div class="solution-tabs-row">
        <div class="solution-tabs">${tabsHtml}</div>
      </div>
    `;

    this.problemBannerEl.querySelectorAll<HTMLButtonElement>('[data-sol-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextIdx = Number(btn.dataset.solIdx);
        if (nextIdx === this.solutionIdx) return;
        this.solutionIdx = nextIdx;
        this.applyLevelOrSolutionChange();
      });
    });
  }

  private renderStepsList(): void {
    const lvl = i18n.localizeLevel(this.currentLevel);
    const msg = i18n.ui.messages;
    const sol = lvl.solutions[this.solutionIdx];

    const metaEl = this.root.querySelector('#steps-count-meta');
    if (metaEl) {
      metaEl.textContent = msg.stepsCountMeta(sol.steps.length, sol.expectedLCost, sol.expectedECost);
    }

    const givenChips = [
      ...lvl.initPoints.map(
        (p) =>
          `<span class="step-entity-tag">#${p.index}</span> <button type="button" class="sym-chip" data-sym-key="${escapeHtml(p.key)}"><span class="sym-chip-inner">${formatInlineSymbolHtml(p.label)}</span></button>`
      ),
      ...lvl.initLoci.map(
        (l) =>
          `<span class="step-entity-tag">${escapeHtml(msg.locusTagPrefix(l.index))}</span> <button type="button" class="sym-chip" data-sym-key="${escapeHtml(l.key)}"><span class="sym-chip-inner">${formatInlineSymbolHtml(l.key)}</span></button>`
      ),
    ].join(' &nbsp;·&nbsp; ');

    let html = `
      <div class="step-row ${this.stepIndex === 0 ? 'is-active' : ''}" data-step-idx="0">
        <span class="step-num-badge">0</span>
        <div class="step-body">
          <div class="step-expr-line">
            <span class="step-item-expr">${escapeHtml(msg.givenConfigTitle)}</span>
            <span class="step-cost-tag">0L, 0E</span>
          </div>
          <div class="step-rationale" style="margin-top:4px">${givenChips}</div>
        </div>
      </div>
    `;

    for (const step of sol.steps) {
      const cost = getActionCost(step.action);
      const macro = i18n.getLocalizedMacro(step.action);
      const isActive = this.stepIndex === step.stepNumber;
      const isFuture = step.stepNumber > this.stepIndex;
      const entityPrefix =
        step.entityType === 'point'
          ? msg.pointEntityPrefix(step.entityIndex)
          : msg.locusEntityPrefix(step.entityIndex);

      html += `
        <div
          class="step-row ${isActive ? 'is-active' : ''} ${isFuture ? 'is-future' : ''}"
          data-step-idx="${step.stepNumber}"
          data-row-sym-key="${escapeHtml(step.key)}"
        >
          <span class="step-num-badge">${step.stepNumber}</span>
          <div class="step-body">
            <div class="step-expr-line">
              <span>
                <span class="step-entity-tag">${escapeHtml(entityPrefix)}:</span>
                <span class="step-item-expr">${formatInlineSymbolHtml(step.expr)}</span>
              </span>
              <span class="step-cost-tag ${cost.l > 0 ? 'has-cost' : ''}">${cost.l}L, ${cost.e}E</span>
            </div>
            <div class="step-rationale">${escapeHtml(step.rationale)}</div>
            ${
              macro && isActive
                ? `<div class="step-macro-note"><strong>${escapeHtml(msg.macroNotePrefix(macro.eCost))}</strong> ${escapeHtml(macro.summary)}</div>`
                : ''
            }
          </div>
        </div>
      `;
    }

    this.stepsListEl.innerHTML = html;

    this.stepsListEl.querySelectorAll<HTMLElement>('[data-step-idx]').forEach((row) => {
      const idx = Number(row.dataset.stepIdx);
      const symKey = row.dataset.rowSymKey ?? null;
      row.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).closest('.sym-chip')) return;
        this.pausePlayback();
        this.goToStep(idx);
      });
      if (symKey) {
        row.addEventListener('pointerenter', () => this.setHoveredSymbolKey(symKey));
        row.addEventListener('pointerleave', () => this.setHoveredSymbolKey(null));
      }
    });

    this.bindSymbolChipsInContainer(this.stepsListEl);
  }

  private renderProofPane(): void {
    const lvl = i18n.localizeLevel(this.currentLevel);
    const proof = lvl.solutions[this.solutionIdx].proof;
    const bodyHtml =
      proof.steps.length === 1
        ? `<p class="proof-single-para">${renderRichMathProse(proof.steps[0])}</p>`
        : `<ol class="proof-steps-ol">${proof.steps
            .map((s) => `<li>${renderRichMathProse(s)}</li>`)
            .join('')}</ol>`;

    this.proofScrollEl.innerHTML = `
      ${
        proof.keyIdea
          ? `<div class="proof-block"><div class="proof-idea-callout">${renderRichMathProse(proof.keyIdea)}</div></div>`
          : ''
      }
      <div class="proof-block">
        ${bodyHtml}
        <div class="proof-qed">∎</div>
        ${
          proof.variantNote
            ? `<div class="proof-variant-note">${renderRichMathProse(proof.variantNote)}</div>`
            : ''
        }
      </div>
    `;

    this.bindSymbolChipsInContainer(this.proofScrollEl);
  }

  private bindSymbolChipsInContainer(container: HTMLElement): void {
    container.querySelectorAll<HTMLButtonElement>('.sym-chip').forEach((chip) => {
      const key = chip.dataset.symKey!;
      chip.addEventListener('pointerenter', () => this.setHoveredSymbolKey(key));
      chip.addEventListener('pointerleave', () => this.setHoveredSymbolKey(null));
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        this.pausePlayback();
        // Jump to the step where this symbol was constructed if it is a constructed entity
        const stepSpec = this.currentLevel.solutions[this.solutionIdx].steps.find(
          (s) => s.key === key
        );
        if (stepSpec && this.stepIndex < stepSpec.stepNumber) {
          this.goToStep(stepSpec.stepNumber);
        }
      });
    });
  }

  private setHoveredSymbolKey(key: string | null): void {
    if (this.hoveredKey === key) return;
    this.hoveredKey = key;
    this.renderer.updateOptions({ highlightedKey: key });

    this.root.querySelectorAll<HTMLElement>('.sym-chip').forEach((chip) => {
      chip.classList.toggle('is-highlighted', key !== null && chip.dataset.symKey === key);
    });
    this.stepsListEl.querySelectorAll<HTMLElement>('[data-row-sym-key]').forEach((row) => {
      row.classList.toggle('is-hovered-sym', key !== null && row.dataset.rowSymKey === key);
    });
  }

  private renderPlaybackBar(): void {
    const lvl = i18n.localizeLevel(this.currentLevel);
    const sol = lvl.solutions[this.solutionIdx];
    const msg = i18n.ui.messages;
    const total = this.executed.snapshots.length - 1;
    const snap = this.executed.snapshots[this.stepIndex];
    const atStart = this.stepIndex <= 0;
    const atEnd = this.stepIndex >= total;

    const activeLocalizedStep = this.stepIndex > 0 ? sol.steps[this.stepIndex - 1] : undefined;
    const captionHtml =
      this.stepIndex === 0 || !activeLocalizedStep
        ? msg.stepZeroCaptionHtml
        : msg.stepActiveCaptionHtml(
            this.stepIndex,
            escapeHtml(activeLocalizedStep.expr),
            escapeHtml(activeLocalizedStep.rationale)
          );

    const completedCount = snap.completedVariants.length;
    let firstVariantLabel = '';
    if (completedCount === 1) {
      const vIdx = snap.completedVariants[0].variantIndex;
      const localizedVar = sol.goalVariants.find((v) => v.variantIndex === vIdx);
      firstVariantLabel = localizedVar ? localizedVar.label : snap.completedVariants[0].label;
    }

    const goalBadgeHtml =
      completedCount > 0
        ? `<span class="goal-complete-pill">✓ ${
            completedCount > 1
              ? escapeHtml(msg.goalVariantsCompleted(completedCount))
              : escapeHtml(msg.goalSingleCompleted(firstVariantLabel))
          }</span>`
        : '';

    this.playbackBarEl.innerHTML = `
      <div class="playback-controls-row">
        <button type="button" class="icon-btn" id="btn-first" title="${escapeHtml(msg.firstStepTooltip)}" ${atStart ? 'disabled' : ''}>|◀</button>
        <button type="button" class="icon-btn" id="btn-prev" title="${escapeHtml(msg.prevStepTooltip)}" ${atStart ? 'disabled' : ''}>${escapeHtml(msg.prevStepBtn)}</button>
        <button type="button" class="icon-btn play-primary-btn" id="btn-play" title="${escapeHtml(msg.playPauseTooltip)}">
          ${escapeHtml(this.isPlaying ? msg.pauseBtn : msg.playBtn)}
        </button>
        <button type="button" class="icon-btn" id="btn-next" title="${escapeHtml(msg.nextStepTooltip)}" ${atEnd ? 'disabled' : ''}>${escapeHtml(msg.nextStepBtn)}</button>
        <button type="button" class="icon-btn" id="btn-last" title="${escapeHtml(msg.lastStepTooltip)}" ${atEnd ? 'disabled' : ''}>▶|</button>
        <button type="button" class="icon-btn" id="btn-speed" title="${escapeHtml(msg.speedTooltip)}">${PLAY_SPEED_LABELS[this.speedIdx]}</button>

        <input
          type="range"
          class="step-slider"
          id="step-slider"
          min="0"
          max="${total}"
          step="1"
          value="${this.stepIndex}"
        />
        <span class="step-counter-badge">${escapeHtml(msg.stepCounterBadge(this.stepIndex, total))}</span>
      </div>

      <div class="playback-status-row">
        <div class="active-step-caption">${captionHtml}</div>
        <div class="cost-counter-group">
          ${goalBadgeHtml}
          <span class="cost-pill">${escapeHtml(msg.costPillText(snap.cumulativeL, snap.cumulativeE))}</span>
        </div>
      </div>
    `;

    this.playbackBarEl.querySelector('#btn-first')!.addEventListener('click', () => {
      this.pausePlayback();
      this.goToStep(0);
    });
    this.playbackBarEl.querySelector('#btn-prev')!.addEventListener('click', () => {
      this.pausePlayback();
      this.stepBackward();
    });
    this.playbackBarEl.querySelector('#btn-play')!.addEventListener('click', () => {
      this.togglePlayback();
    });
    this.playbackBarEl.querySelector('#btn-next')!.addEventListener('click', () => {
      this.pausePlayback();
      this.stepForward();
    });
    this.playbackBarEl.querySelector('#btn-last')!.addEventListener('click', () => {
      this.pausePlayback();
      this.goToStep(total);
    });
    this.playbackBarEl.querySelector('#btn-speed')!.addEventListener('click', () => {
      this.speedIdx = (this.speedIdx + 1) % PLAY_INTERVALS_MS.length;
      if (this.isPlaying) {
        this.pausePlayback();
        this.startPlayback();
      } else {
        this.renderPlaybackBar();
      }
    });
    this.playbackBarEl
      .querySelector<HTMLInputElement>('#step-slider')!
      .addEventListener('input', (e) => {
        this.pausePlayback();
        this.goToStep(Number((e.target as HTMLInputElement).value));
      });
  }

  private goToStep(idx: number): void {
    const clamped = Math.max(0, Math.min(idx, this.executed.snapshots.length - 1));
    this.stepIndex = clamped;
    this.renderer.setStepIndex(clamped);
    this.updateHeaderStarBadges();
    this.renderStepsList();
    this.renderPlaybackBar();

    const activeRow = this.stepsListEl.querySelector<HTMLElement>(`[data-step-idx="${clamped}"]`);
    activeRow?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  private stepForward(): void {
    const nav = getNavigableStepIndices(
      this.currentLevel.solutions[this.solutionIdx],
      this.skipZeroCostSteps
    );
    const next = nav.find((i) => i > this.stepIndex);
    if (next !== undefined) {
      this.goToStep(next);
    }
  }

  private stepBackward(): void {
    const nav = getNavigableStepIndices(
      this.currentLevel.solutions[this.solutionIdx],
      this.skipZeroCostSteps
    );
    for (let k = nav.length - 1; k >= 0; k--) {
      if (nav[k] < this.stepIndex) {
        this.goToStep(nav[k]);
        return;
      }
    }
  }

  private togglePlayback(): void {
    if (this.isPlaying) {
      this.pausePlayback();
    } else {
      if (this.stepIndex >= this.executed.snapshots.length - 1) {
        this.goToStep(0);
      }
      this.startPlayback();
    }
  }

  private startPlayback(): void {
    this.isPlaying = true;
    this.renderPlaybackBar();
    this.playTimer = window.setInterval(() => {
      if (this.stepIndex >= this.executed.snapshots.length - 1) {
        this.pausePlayback();
        return;
      }
      this.stepForward();
      if (this.stepIndex >= this.executed.snapshots.length - 1) {
        this.pausePlayback();
      }
    }, PLAY_INTERVALS_MS[this.speedIdx]);
  }

  private pausePlayback(): void {
    if (!this.isPlaying && this.playTimer === null) return;
    this.isPlaying = false;
    if (this.playTimer !== null) {
      window.clearInterval(this.playTimer);
      this.playTimer = null;
    }
    this.renderPlaybackBar();
  }
}
