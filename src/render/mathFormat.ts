import katex from 'katex';

const SUBSCRIPT_MAP: Record<string, string> = {
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
  '₊': '+',
  '₋': '-',
};

export interface ParsedMathLabel {
  readonly base: string;
  readonly prime: string;
  readonly sub: string;
}

/**
 * Splits a geometric identifier like `C₁`, `O_2`, or `T'` into base, prime, and subscript
 * components for crisp mathematical SVG and HTML rendering.
 */
export function parseGeometricLabel(raw: string): ParsedMathLabel {
  let s = raw.trim();
  for (const [uni, ascii] of Object.entries(SUBSCRIPT_MAP)) {
    s = s.split(uni).join(`_${ascii}`);
  }
  const m = s.match(/^([A-Za-zα-ωΑ-Ω]+)(['′]*)(?:_([A-Za-z0-9+-]+))?(['′]*)$/);
  if (!m) {
    return { base: raw, prime: '', sub: '' };
  }
  const totalPrimes = (m[2]?.length ?? 0) + (m[4]?.length ?? 0);
  return {
    base: m[1],
    prime: totalPrimes > 0 ? '′'.repeat(totalPrimes) : '',
    sub: m[3] ?? '',
  };
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function matchBalancedFunctionCall(
  s: string
): { fnName: string; argsHtml: string } | null {
  const openIdx = s.indexOf('(');
  if (openIdx <= 0 || !s.endsWith(')')) return null;
  const fnName = s.slice(0, openIdx);
  if (!/^[a-zA-Z]+$/.test(fnName)) return null;

  const inner = s.slice(openIdx + 1, -1);
  if (!inner.trim()) return null;

  let depth = 0;
  let start = 0;
  let argsHtml = '';
  for (let i = 0; i < inner.length; i++) {
    const ch = inner[i];
    if (ch === '(') {
      depth += 1;
    } else if (ch === ')') {
      depth -= 1;
      if (depth < 0) return null;
    } else if (depth === 0 && (ch === ',' || ch === ';')) {
      argsHtml += `${formatInlineSymbolHtml(inner.slice(start, i).trim())}${ch} `;
      start = i + 1;
    }
  }
  if (depth !== 0) return null;
  argsHtml += formatInlineSymbolHtml(inner.slice(start).trim());
  return { fnName, argsHtml };
}

export function formatInlineSymbolHtml(label: string): string {
  const parsed = parseGeometricLabel(label);
  if (parsed.base === label && !parsed.sub && !parsed.prime) {
    // Functional locus expression e.g. circle(A, B), compass(H, F_rad; O₂), or perp(line(O, B), B)
    const fnCall = matchBalancedFunctionCall(label);
    if (fnCall) {
      return `<span class="math-fn">${escapeHtml(fnCall.fnName)}</span>(${fnCall.argsHtml})`;
    }
    if (/^[A-Za-z]$/.test(label)) {
      return `<var class="math-var">${escapeHtml(label)}</var>`;
    }
    // Compound symbolic expression e.g. "M_AB ∈ line(A, B) ∩ perpBisector(A, B)"
    if (/[∈∩≠()]/.test(label)) {
      const compoundRe =
        /[a-zA-Z]+\((?:[^()]|\([^()]*\))+\)|[A-Za-zα-ωΑ-Ω]+['′]+(?:_[A-Za-z0-9]+|[₀-₉]+)?|[A-Za-zα-ωΑ-Ω]+(?:_[A-Za-z0-9]+|[₀-₉]+)|\b[A-Z]\b|\bc\b/g;
      let out = '';
      let last = 0;
      let m: RegExpExecArray | null;
      while ((m = compoundRe.exec(label)) !== null) {
        if (m.index > last) {
          out += escapeHtml(label.slice(last, m.index));
        }
        out += formatInlineSymbolHtml(m[0]);
        last = compoundRe.lastIndex;
      }
      if (last < label.length) {
        out += escapeHtml(label.slice(last));
      }
      return `<span class="math-expr">${out}</span>`;
    }
    return `<span class="math-expr">${escapeHtml(label)}</span>`;
  }
  const primeHtml = parsed.prime ? `<span class="math-prime">${parsed.prime}</span>` : '';
  const subHtml = parsed.sub ? `<sub>${escapeHtml(parsed.sub)}</sub>` : '';
  return `<var class="math-var">${escapeHtml(parsed.base)}</var>${primeHtml}${subHtml}`;
}

function formatPlainSegment(segment: string): string {
  const escaped = escapeHtml(segment);
  return escaped
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
}

/**
 * Renders prose containing `$...$` KaTeX math, `[[key]]` / `[[key|display]]`
 * interactive geometric symbol chips, and lightweight inline `**bold**`, `*italic*`, and `` `code` ``.
 */
export function renderRichMathProse(input: string): string {
  // Tokenize [[chip]] and $math$ without colliding
  const tokenRegex = /\[\[([^\]]+)\]\]|\$([^$]+)\$/g;
  let lastIndex = 0;
  let html = '';
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      html += formatPlainSegment(input.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      const rawChip = match[1];
      const pipeIdx = rawChip.indexOf('|');
      const key = (pipeIdx >= 0 ? rawChip.slice(0, pipeIdx) : rawChip).trim();
      const display = (pipeIdx >= 0 ? rawChip.slice(pipeIdx + 1) : rawChip).trim();
      html += `<button type="button" class="sym-chip" data-sym-key="${escapeHtml(key)}"><span class="sym-chip-inner">${formatInlineSymbolHtml(display)}</span></button>`;
    } else if (match[2] !== undefined) {
      const tex = match[2];
      try {
        html += katex.renderToString(tex, {
          throwOnError: false,
          displayMode: false,
        });
      } catch {
        html += `<code>${escapeHtml(tex)}</code>`;
      }
    }
    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < input.length) {
    html += formatPlainSegment(input.slice(lastIndex));
  }
  return html;
}
