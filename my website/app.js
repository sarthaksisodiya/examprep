(() => {
  const root = document.querySelector("#app");
  const data = window.MANIT_DATA;
  const SESSION_NAME = "manit-student-name";
  const SESSION_GROUP = "manit-student-group";
  const RESULTS_KEY = "manit-quiz-results";
  const savedName = localStorage.getItem(SESSION_NAME) || "";
  const savedGroup = localStorage.getItem(SESSION_GROUP) || (savedName ? "MT" : "");
  const savedTheme = localStorage.getItem("manit-theme");
  const state = {
    page: savedName ? "dashboard" : "welcome",
    name: savedName,
    group: savedGroup,
    entryGroup: savedGroup || "MT",
    subject: null,
    chapter: null,
    selectedPyqQuizId: null,
    selectedChapterQuizId: null,
    quiz: null,
    answers: [],
    questionIndex: 0,
    startedAt: 0,
    result: null,
    showReview: false,
    profileMenuOpen: false,
    mobileMenuOpen: false,
    theme: savedTheme === "dark" ? "dark" : "light",
    timerId: null
  };

  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const mathCharacters = {
    "∫": "\\int", "∬": "\\iint", "∭": "\\iiint", "∮": "\\oint", "∑": "\\sum", "Σ": "\\Sigma",
    "∇": "\\nabla", "∂": "\\partial", "√": "\\sqrt", "φ": "\\phi", "θ": "\\theta", "π": "\\pi",
    "ρ": "\\rho", "σ": "\\sigma", "α": "\\alpha", "β": "\\beta", "γ": "\\gamma", "λ": "\\lambda",
    "μ": "\\mu", "ω": "\\omega", "ψ": "\\psi", "κ": "\\kappa", "ħ": "\\hbar", "Γ": "\\Gamma", "Δ": "\\Delta", "∞": "\\infty", "≤": "\\le", "≥": "\\ge", "≠": "\\ne",
    "≈": "\\approx", "∼": "\\sim", "→": "\\to", "×": "\\times", "·": "\\cdot", "÷": "\\div", "°": "^{\\circ}", "½": "\\frac{1}{2}", "′": "^{\\prime}", "″": "^{\\prime\\prime}", "‴": "^{\\prime\\prime\\prime}", "−": "-", "⁻": "-"
  };
  const superscriptCharacters = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "ⁿ": "n", "ⁱ": "i", "ˣ": "x", "ᵖ": "p", "ʸ": "y", "ᵃ": "a", "⁺": "+", "⁻": "-", "⁽": "(", "⁾": ")" };
  const subscriptCharacters = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9", "ₙ": "n", "ₓ": "x", "ᵧ": "y", "₌": "=", "₊": "+", "₋": "-", "₍": "(", "₎": ")" };
  const mathWords = new Set(["sin", "cos", "tan", "sec", "csc", "cot", "ln", "log", "lim", "max", "min", "div", "curl", "grad", "rot", "det", "dx", "dy", "dz", "dA", "dV", "dS", "kT", "VT"]);

  function convertParenthesizedExponents(value) {
    const source = String(value ?? "");
    const marker = /e\^\(/gi;
    let result = "";
    let cursor = 0;
    let match;
    while ((match = marker.exec(source))) {
      let depth = 1;
      let end = match.index + match[0].length;
      for (; end < source.length && depth > 0; end += 1) {
        if (source[end] === "(") depth += 1;
        else if (source[end] === ")") depth -= 1;
      }
      if (depth !== 0) continue;
      result += source.slice(cursor, match.index) + `e^{${source.slice(match.index + match[0].length, end - 1)}}`;
      cursor = end;
      marker.lastIndex = end;
    }
    return cursor ? result + source.slice(cursor) : source;
  }

  function convertGroupedFractions(value) {
    const source = String(value ?? "");
    let result = "";
    let cursor = 0;
    let search = 0;
    while (true) {
      const slash = source.indexOf("/(", search);
      if (slash < 1) break;
      let depth = 1;
      let close = slash + 2;
      for (; close < source.length && depth > 0; close += 1) {
        if (source[close] === "(") depth += 1;
        else if (source[close] === ")") depth -= 1;
      }
      if (depth !== 0) { search = slash + 1; continue; }

      let start = slash - 1;
      if (source[start] === ")" || source[start] === "}") {
        const closing = source[start];
        const opening = closing === ")" ? "(" : "{";
        let nested = 1;
        start -= 1;
        for (; start >= 0 && nested > 0; start -= 1) {
          if (source[start] === closing) nested += 1;
          else if (source[start] === opening) nested -= 1;
        }
        if (nested !== 0) { search = slash + 1; continue; }
        start += 1;
        if (closing === "}") {
          if (source[start - 1] === "^") start -= 1;
          let tokenStart = start - 1;
          while (tokenStart >= 0 && /[A-Za-z0-9]/.test(source[tokenStart])) tokenStart -= 1;
          if (source[tokenStart] === "\\") start = tokenStart;
          else if (tokenStart + 1 < start && /[A-Za-z0-9]/.test(source[tokenStart + 1])) start = tokenStart + 1;
        }
      } else {
        while (start >= 0 && /[A-Za-z0-9]/.test(source[start])) start -= 1;
        if (source[start] === "\\") start -= 1;
        start += 1;
      }
      if (start < cursor || start >= slash) { search = slash + 1; continue; }
      result += source.slice(cursor, start) + `\\frac{${source.slice(start, slash)}}{${source.slice(slash + 2, close - 1)}}`;
      cursor = close;
      search = close;
    }
    return cursor ? result + source.slice(cursor) : source;
  }

  function toMathTex(value) {
    let tex = String(value ?? "")
      .replace(/\[\[frac:([^|]+)\|([^\]]+)\]\]/g, (_, numerator, denominator) => `\\frac{${numerator}}{${denominator}}`);
    tex = convertParenthesizedExponents(tex)
      .replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱˣᵖʸᵃ⁺⁻⁽⁾]+)/g, (superscript) => `^{${[...superscript].map((char) => superscriptCharacters[char] ?? char).join("")}}`)
      .replace(/([₀₁₂₃₄₅₆₇₈₉ₙₓᵧ₌₊₋₍₎]+)/g, (subscript) => `_{${[...subscript].map((char) => subscriptCharacters[char] ?? char).join("")}}`);

    tex = tex.replace(/√\(([^()]*)\)/g, "\\sqrt{$1}").replace(/√([A-Za-z0-9]+)/g, "\\sqrt{$1}");
    tex = tex.replace(/∂\s*([A-Za-z])\s*\/\s*∂\s*([A-Za-z])/g, "\\frac{\\partial $1}{\\partial $2}")
      .replace(/d\s*([A-Za-z])\s*\/\s*d\s*([A-Za-z])/g, "\\frac{d$1}{d$2}")
      .replace(/(?<![A-Za-z])d([xyzrAVSθφ])/g, "\\,\\mathrm{d}$1");
    tex = tex.replace(/\b(sin|cos|tan|sec|csc|cot|ln|log|lim|max|min)\b/g, "\\$1");
    tex = tex.replace(/[∫∬∭∮∑Σ∇∂√φθπρσαβγλμωψκħΓΔ∞≤≥≠≈∼→×·÷°½′″‴−⁻]/g, (character) => mathCharacters[character] ?? character);
    tex = convertGroupedFractions(tex);
    tex = tex.replace(/\(([^()]*)\)\/\(([^()]*)\)/g, "\\frac{$1}{$2}")
      .replace(/(?<![A-Za-z\\])([A-Za-z0-9]+)\/\(([^()]*)\)/g, "\\frac{$1}{$2}")
      .replace(/(\\[A-Za-z]+)\/(\\[A-Za-z]+)/g, "\\frac{$1}{$2}")
      .replace(/(?<![A-Za-z\\])([A-Za-z0-9]+|\\sqrt\{[^{}]+\})\/([A-Za-z0-9]+|\\sqrt\{[^{}]+\})/g, "\\frac{$1}{$2}")
      .replace(/(?<![A-Za-z\\])([A-Za-z]+\^\{[^{}]+\}|\([^()]+\))\/([A-Za-z0-9]+|\([^()]+\))/g, "\\frac{$1}{$2}");
    return tex;
  }

  function isMathOnly(text) {
    if (!/[=\/∫∬∭∮∑Σ∇∂√°½^′″‴₀₁₂₃₄₅₆₇₈₉ₙₓᵧ₌₊₋⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱˣᵖʸᵃ⁺⁻]|\[\[frac:/.test(text)) return false;
    const words = text.match(/[A-Za-z]{2,}/g) || [];
    return words.every((word) => mathWords.has(word));
  }

  function formatQuestionText(value) {
    const text = String(value ?? "");
    const mathSpan = (expression, rawTex = false, display = false) => {
      const tex = escapeHtml(rawTex ? expression : toMathTex(expression));
      return `<span class="math-scroll${display ? " math-scroll-display" : ""}">${display ? `\\[${tex}\\]` : `\\(\\displaystyle ${tex} \\)`}</span>`;
    };
    const explicitMath = /\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|\$[^$\n]+\$/;
    const rawLatex = /\\(?:int|iint|iiint|oint|frac|sqrt|sum|prod|lim|partial|nabla|begin|alpha|beta|gamma|theta|phi|pi|cdot|times|log|sin|cos|tan)\b/;
    if (!explicitMath.test(text) && rawLatex.test(text)) {
      const plainWords = text.replace(/\\[A-Za-z]+/g, " ").match(/[A-Za-z]{2,}/g) || [];
      if (plainWords.every((word) => mathWords.has(word))) return mathSpan(text, true);
    }
    if (!explicitMath.test(text) && isMathOnly(text)) return mathSpan(text);

    const matches = [];
    const addMatches = (pattern, group = 0) => {
      for (const match of text.matchAll(pattern)) {
        const expression = match[group] ?? match[0];
        const offset = match.index + (match[0].indexOf(expression));
        matches.push({ start: offset, end: offset + expression.length, expression });
      }
    };
    addMatches(/\[\[frac:[^|]+\|[^\]]+\]\]/g);
    addMatches(/(?:∫|∬|∭|∮)[^.!?;\n]*d[A-Za-zθφ](?:\s*d[A-Za-zθφ])*(?:\s*=\s*[^,.;!?]+)?/g);
    addMatches(/(?:∫|∬|∭|∮)[^.!?;\n]*=[^.!?;\n]*/g);
    addMatches(/(?:dy\/dx|dx\/dy|d[xyz]\/d[xyz])\s*(?:=\s*[^,.;!?]+?(?=\s+(?:is|are|where|and)\b|[,.;!?]|$))?/g);
    addMatches(/(?:(?<![A-Za-z])d[A-Za-zθφ]|(?<![A-Za-z])[A-Za-zφθρσ]|[∇∂][A-Za-zφθρσ]?)\s*=\s*[^,.;!?]+/g);
    if (!text.includes("[[frac:")) addMatches(/(?:Σ|∑)\s*[^,.;?]*(?=\s+(?:is|are|and|by|with|if|converges|diverges|the)\b|[,.;?]|$)/g);
    addMatches(/(?:div|curl|grad|rot)\s+[^,.;!?]*?=[^,.;!?]+/g);
    addMatches(/(?:\([^()]+\)|[A-Za-z0-9]+)\/(?:\([^()]+\)|[A-Za-z0-9]+)/g);
    addMatches(/e(?:\^\([^)]*\)|[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱˣᵖ⁺⁻⁽⁾]+)/g);
    addMatches(/\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g);

    if (!matches.length) return escapeHtml(text);
    matches.sort((left, right) => left.start - right.start || right.end - left.end);
    const output = [];
    let cursor = 0;
    for (const item of matches) {
      if (item.start < cursor) continue;
      output.push(escapeHtml(text.slice(cursor, item.start)));
      const explicitTex = item.expression.startsWith("\\(") || item.expression.startsWith("\\[") || item.expression.startsWith("$");
      const displayTex = item.expression.startsWith("\\[") || item.expression.startsWith("$$");
      const expression = explicitTex
        ? item.expression.replace(/^\\\(/, "").replace(/\\\)$/, "").replace(/^\\\[/, "").replace(/\\\]$/, "").replace(/^\$\$/, "").replace(/\$\$$/, "").replace(/^\$/, "").replace(/\$$/, "")
        : item.expression;
      output.push(mathSpan(expression, explicitTex, displayTex));
      cursor = item.end;
    }
    output.push(escapeHtml(text.slice(cursor)));
    return output.join("");
  }
  const selectedSubject = () => data.subjects.find((item) => item.id === state.subject);
  const hasAnswer = (answer) => typeof answer === "string" ? answer.trim().length > 0 : answer !== null && answer !== undefined;
  const getResults = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(RESULTS_KEY) || "[]");
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  };

  function render() {
    if (state.timerId !== null) {
      window.clearInterval(state.timerId);
      state.timerId = null;
    }
    window.MathJax?.typesetClear?.([root]);
    document.documentElement.dataset.theme = state.theme;
    document.body.classList.toggle("nav-open", state.mobileMenuOpen);
    if (state.page === "welcome") root.innerHTML = welcomePage();
    if (state.page === "dashboard") root.innerHTML = dashboardPage();
    if (state.page === "subject") root.innerHTML = subjectPage();
    if (state.page === "quizzes") root.innerHTML = quizPage();
    if (state.page === "quiz") root.innerHTML = activeQuizPage();
    if (state.page === "result") root.innerHTML = resultPage();
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([root]).catch(() => {});
    bindEvents();
    if (state.page === "quiz") {
      updateAttemptClock();
      state.timerId = window.setInterval(updateAttemptClock, 1000);
    }
  }

  function themeToggleMarkup() {
    const dark = state.theme === "dark";
    return `<button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch to ${dark ? "light" : "dark"} mode" title="Switch to ${dark ? "light" : "dark"} mode"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true">${dark ? `<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>` : `<path d="M20.8 15.4A8.6 8.6 0 0 1 8.6 3.2 8.8 8.8 0 1 0 20.8 15.4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>`}</svg><span>${dark ? "Light mode" : "Dark mode"}</span></button>`;
  }

  function welcomePage() {
    return `<main class="entry-screen">
      <div class="nebula nebula-one"></div><div class="nebula nebula-two"></div><div class="nebula nebula-three"></div>
      <header class="entry-header"><a class="login-brand" href="#top" aria-label="MANIT Exam Prep"><span class="cap-mark"><svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="m4 13.4 14-7 14 7-14 7-14-7Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 16.5v7.1c4.5 3.6 13.5 3.6 18 0v-7.1M32 14v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="32" cy="25" r="1.8" fill="currentColor"/></svg></span><span class="login-brand-words">MANIT <b>EXAM PREP</b></span></a><div class="entry-header-actions"><span class="entry-header-note">BHOPAL · STUDENT PORTAL</span>${themeToggleMarkup()}</div></header>
      <section class="entry-layout" id="top"><div class="entry-intro"><span class="intro-kicker"><i></i> YOUR SEMESTER, IN FOCUS</span><h1>Your Exams.<br />Your Preparation.<br /><span>Your Success.</span></h1><p>A dedicated preparation space for MANIT Bhopal students. Practice with focus, one chapter at a time.</p><div class="entry-feature-list"><span><b>01</b> Chapter-wise practice</span><span><b>02</b> Learn at your pace</span><span><b>03</b> Track your progress</span></div></div>
        <section class="entry-card" aria-labelledby="entry-title"><div class="entry-card-content"><div class="card-emblem"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m3 9 9-4.5L21 9l-9 4.5L3 9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.5 11v4.5c3 2.5 8 2.5 11 0V11M21 9v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span class="card-overline">LET’S GET STARTED</span><h2 id="entry-title">Welcome to your<br />study space.</h2><p class="card-subtitle">Enter your name and choose your group.</p>
          <form id="entry-form" class="student-entry-form"><label for="student-name">STUDENT NAME</label><input id="student-name" name="name" maxlength="60" autocomplete="name" placeholder="Enter your name" value="${escapeHtml(state.name)}" required /></form>
          <div class="entry-group-label">SELECT YOUR GROUP</div><div class="entry-groups" role="group" aria-label="Select your group"><button class="entry-group ${state.entryGroup === "MT" ? "selected" : ""}" type="button" data-select-group="MT" aria-pressed="${state.entryGroup === "MT"}"><span class="group-monogram">MT</span><span class="entry-group-text"><b>MT Group</b><small>Available now</small></span><span class="group-radio"></span></button><button class="entry-group ${state.entryGroup === "ST" ? "selected" : ""}" type="button" data-select-group="ST" aria-pressed="${state.entryGroup === "ST"}"><span class="group-monogram">ST</span><span class="entry-group-text"><b>ST Group</b><small>Coming soon</small></span><span class="soon-badge">SOON</span></button></div>
          <button class="entry-submit" type="submit" form="entry-form">Start Preparing <span>→</span></button><p class="entry-status" id="entry-message" role="status" aria-live="polite">Your name and group are all you need.</p><p class="entry-privacy"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Your session stays on this device.</p></div></section>
      </section><footer class="entry-footer"><span>MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY</span><span>PREPARE WITH PURPOSE <b>✦</b></span></footer>
    </main>`;
  }

  function profileMarkup() {
    return `<div class="profile-area"><div class="profile"><span class="avatar">${escapeHtml((state.name[0] || "S").toUpperCase())}</span><span class="profile-identity"><b>${escapeHtml(state.name)}</b><small>${escapeHtml(state.group)} Group - MANIT Bhopal</small></span><button class="profile-menu-toggle" type="button" aria-label="Open profile menu" aria-expanded="${state.profileMenuOpen}">···</button></div><div class="profile-dropdown" ${state.profileMenuOpen ? "" : "hidden"}><button type="button" class="logout-action" data-logout><span aria-hidden="true">↪</span> Log Out</button></div></div>`;
  }

  function shell(content, active = "home") {
    return `<div class="app-shell ${state.mobileMenuOpen ? "mobile-menu-open" : ""}"><aside class="sidebar" id="primary-sidebar"><a class="brand sidebar-brand" href="#" data-nav="dashboard"><img class="brand-mark brand-icon" src="/assets/manit-exam-prep-icon.png" alt="" /><span>MANIT <b>Exam Prep</b></span></a><div class="sidebar-label">STUDY SPACE</div><nav class="side-nav"><button class="nav-link ${active === "home" ? "selected" : ""}" data-nav="dashboard"><span>▦</span> Overview</button><button class="nav-link" data-scroll-subjects><span>◈</span> My subjects</button><div class="nav-link muted-link" aria-disabled="true" title="Coming in a future update"><span>◎</span> My progress <small>SOON</small></div></nav><div class="sidebar-bottom"><div class="help-card"><span class="help-star">✦</span><b>Small steps add up.</b><p>Stay consistent and let your progress build.</p></div>${profileMarkup()}</div></aside>${state.mobileMenuOpen ? `<button class="mobile-nav-backdrop" type="button" data-close-mobile-menu aria-label="Close navigation menu"></button>` : ""}<main class="main-area"><header class="topbar"><div class="mobile-brand"><button class="app-menu-toggle" type="button" data-mobile-menu-toggle aria-label="Open navigation menu" aria-controls="primary-sidebar" aria-expanded="${state.mobileMenuOpen}"><span></span><span></span><span></span></button><img class="brand-mark brand-icon" src="/assets/manit-exam-prep-icon.png" alt="" /><span class="mobile-brand-name">MANIT Exam Prep</span></div><div class="breadcrumb">${escapeHtml(state.group)} GROUP <span>/</span> ${active === "home" ? "OVERVIEW" : active === "subject" ? "SUBJECTS" : active === "quiz" ? "QUIZ" : active === "result" ? "RESULT" : "PRACTICE"}</div><div class="topbar-right">${themeToggleMarkup()}<span class="term-tag"><span class="live-dot"></span> SEMESTER 1</span><span class="avatar small-avatar" aria-label="${escapeHtml(state.name)}">${escapeHtml((state.name[0] || "S").toUpperCase())}</span></div></header>${content}</main></div>`;
  }

  function dashboardPage() {
    if (state.group === "ST") {
      return shell(`<section class="page-content"><div class="st-empty-state"><span class="st-orbit">ST</span><span class="eyebrow">ST GROUP</span><h1>ST Group is coming soon.</h1><p>We’re preparing the Science & Technology study materials. Your selected group is saved, and you can return here when ST content is available.</p><button class="secondary-action" data-logout>Return to group selection</button></div></section>`);
    }
    const cards = data.subjects.map((subject) => `<button class="subject-card" data-subject="${subject.id}"><div class="subject-card-top"><span class="subject-icon ${subject.color}">${subject.icon}</span><span class="card-count">${subject.direct ? "TOPICS" : `${subject.chapters.length} CHAPTERS`}</span></div><h3>${escapeHtml(subject.name)}</h3><p>${subject.direct ? "Topic-wise practice" : "Build your understanding, one chapter at a time."}</p><div class="subject-card-bottom"><span>${subject.direct ? "Explore topics" : "Explore chapters"}</span><span class="round-arrow">↗</span></div></button>`).join("");
    const recent = getResults().filter((item) => item.name === state.name && item.group === state.group).slice(0, 3);
    const recentMarkup = recent.length ? `<section class="recent-results"><div class="recent-heading"><div><span class="eyebrow">YOUR RECENT WORK</span><h2>Quiz history</h2></div><span class="history-count">${recent.length} SAVED</span></div><div class="recent-result-list">${recent.map((item) => `<div class="recent-result"><span class="recent-result-mark">✓</span><span class="recent-result-copy"><b>${escapeHtml(item.quizName)}</b><small>${escapeHtml(item.subject)} · ${escapeHtml(item.chapter)}</small></span><span class="recent-result-score">${item.percentage === null ? `${item.attemptedQuestions}/${item.totalQuestions} answered` : `${item.marksObtained}/${item.totalMarks}`}</span></div>`).join("")}</div></section>` : "";
    const content = `<section class="page-content"><div class="welcome-banner"><div><span class="eyebrow"><span class="spark">✦</span> YOUR PERSONAL STUDY SPACE</span><h1>Good to have you here, ${escapeHtml(state.name.split(" ")[0])}.</h1><p>One focused session at a time. What would you like to work on today?</p></div><div class="banner-art"><div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-core">M<span>+</span></div><span class="art-dot dot-one"></span><span class="art-dot dot-two"></span><span class="art-dot dot-three"></span></div><div class="banner-note"><span>✳</span><span>EVERY EXPERT WAS<br />ONCE A BEGINNER.</span></div></div>
      <div class="section-heading" id="subjects"><div><span class="eyebrow">YOUR CURRICULUM</span><h2>Pick a subject</h2><p>Choose a subject to find chapters and practice sets.</p></div><span class="group-chip">${escapeHtml(state.group)} GROUP <b>·</b> 5 SUBJECTS</span></div><div class="subject-grid">${cards}</div>${recentMarkup}<div class="coming-strip"><span class="strip-icon">✦</span><span><b>More ways to prepare are on the way.</b><small>Progress tracking, mock tests and previous papers are coming soon.</small></span><span class="strip-badge">IN THE WORKS</span></div></section>`;
    return shell(content);
  }

  function subjectPage() {
    const subject = selectedSubject();
    if (!subject) { state.page = "dashboard"; return dashboardPage(); }
    const body = subject.direct
      ? `<div class="empty-topic"><span class="empty-icon">✳</span><h3>Topic practice is on the way</h3><p>We’ll add ${escapeHtml(subject.name)} topics here as soon as the topic list is ready.</p><span class="sample-label">CONTENT COMING SOON</span></div>`
      : `<div class="chapter-list">${subject.chapters.map((chapter, i) => `<button class="chapter-row" data-chapter="${escapeHtml(chapter)}"><span class="chapter-number">${String(i + 1).padStart(2, "0")}</span><span class="chapter-name"><b>${escapeHtml(chapter)}</b><small>4 practice sets · ~10 questions each</small></span><span class="chapter-progress"><span class="progress-track"><span style="width:0%"></span></span><small>Not started</small></span><span class="chapter-arrow">→</span></button>`).join("")}</div>`;
    const quizCard = (quiz, index) => `<article class="quiz-card pyq-quiz-card"><span class="quiz-index">${String(index+1).padStart(2,"0")}</span><div class="quiz-info"><span class="level-pill violet">${escapeHtml(quiz.level)} · ${escapeHtml(quiz.difficulty)}</span><h3>${escapeHtml(quiz.name)}</h3><p>${quiz.questions.length} questions · ${escapeHtml(quiz.duration)} · ${quiz.questions.reduce((sum,q)=>sum+q.marks,0)} marks</p></div><button class="quiz-launch ready" type="button" data-pyq-quiz="${escapeHtml(quiz.id)}">Start mock <span>→</span></button></article>`;
    const pyqQuizzes = subject.id === "mathematics" && state.group === "MT"
      ? `<section class="pyq-section"><div class="section-heading compact"><div><span class="eyebrow">MATHEMATICS-I · MC 1101</span><h2>Mini mock tests</h2><p>Five questions · 60 minutes · 10 marks each.</p></div><span class="group-chip">2 MOCKS</span></div><div class="quiz-list pyq-quiz-list">${data.pyqQuizSets.filter((quiz)=>quiz.category==="mini").map(quizCard).join("")}</div><div class="sample-notice pyq-source-note"><span>ⓘ</span><span>Questions and solutions supplied for this site.</span></div><div class="section-heading compact future-exams-heading"><div><span class="eyebrow">MATHEMATICS-I · MC 1101</span><h2>Mid-semester mocks</h2><p>Eight questions · 60 minutes · 20 marks each.</p></div><span class="group-chip">2 MOCKS</span></div><div class="quiz-list pyq-quiz-list">${data.pyqQuizSets.filter((quiz)=>quiz.category==="mid").map(quizCard).join("")}</div><div class="sample-notice pyq-source-note"><span>ⓘ</span><span>Objective versions based on your supplied questions and solutions.</span></div><div class="section-heading compact future-exams-heading"><div><span class="eyebrow">MATHEMATICS-I · MC 1101</span><h2>End-semester mocks</h2><p>Ten questions · 2 hours · 40 marks each.</p></div><span class="group-chip">2 MOCKS</span></div><div class="quiz-list pyq-quiz-list">${data.pyqQuizSets.filter((quiz)=>quiz.category==="end").map(quizCard).join("")}</div></section>`
      : "";
    const content = `<section class="page-content"><button class="back-link" data-nav="dashboard">← <span>All subjects</span></button><div class="subject-intro"><span class="subject-icon large ${subject.color}">${subject.icon}</span><div><span class="eyebrow">${escapeHtml(state.group)} GROUP · SUBJECT</span><h1>${escapeHtml(subject.name)}</h1><p>${subject.direct ? "Explore topic-wise practice sets." : `${subject.chapters.length} chapters to explore at your own pace.`}</p></div></div><div class="section-heading compact"><div><span class="eyebrow">${subject.direct ? "GET STARTED" : "COURSE CONTENT"}</span><h2>${subject.direct ? "Topic practice" : "Chapters"}</h2></div>${!subject.direct ? `<span class="group-chip">${subject.chapters.length} CHAPTERS</span>` : ""}</div>${body}${pyqQuizzes}<div class="coming-strip"><span class="strip-icon">✦</span><span><b>More practice is coming soon.</b><small>Question sets are being prepared for this subject.</small></span><span class="strip-badge">IN THE WORKS</span></div></section>`;
    return shell(content, "subject");
  }

  function quizPage() {
    const subject = selectedSubject();
    if (!subject) { state.page = "dashboard"; return dashboardPage(); }
    const chapterQuizSets = data.chapterQuizSets.filter((quiz) => quiz.subjectId === subject.id && quiz.chapter === state.chapter);
    const isSequenceChapter = subject.id === "mathematics" && state.chapter === "Sequence and Series";
    const usesLevelCards = isSequenceChapter || chapterQuizSets.some((quiz) => quiz.levelId);
    const sequenceLevels = ["basic", "moderate", "advanced", "mixed"];
    const quizzes = usesLevelCards
      ? data.quizSets.map((quiz, index) => {
          const chapterQuiz = chapterQuizSets.find((item) => item.levelId === sequenceLevels[index]);
          const isSample = isSequenceChapter && index === 0 && state.group === "MT";
          const questionCount = chapterQuiz ? chapterQuiz.questions.length : isSample ? data.sampleQuiz.questions.length : quiz.count;
          const launchButton = chapterQuiz
            ? `<button class="quiz-launch ready" data-start-chapter-quiz="${escapeHtml(chapterQuiz.id)}">Start quiz <span>→</span></button>`
            : isSample
              ? `<button class="quiz-launch ready" data-start-quiz>Start sample quiz <span>→</span></button>`
              : `<span class="quiz-coming">Coming soon</span>`;
          return `<article class="quiz-card"><span class="quiz-index">${String(index + 1).padStart(2, "0")}</span><div class="quiz-info"><span class="level-pill ${quiz.color}">${escapeHtml(quiz.level)}</span><h3>${escapeHtml(quiz.name)}</h3><p>${questionCount} questions · ${chapterQuiz ? escapeHtml(chapterQuiz.duration) : quiz.duration} · ${chapterQuiz ? "Practice set" : isSample ? "Sample questions" : "In preparation"}</p></div>${launchButton}</article>`;
        }).join("")
      : chapterQuizSets.length
        ? chapterQuizSets.map((quiz, index) => `<article class="quiz-card"><span class="quiz-index">${String(index + 1).padStart(2, "0")}</span><div class="quiz-info"><span class="level-pill violet">PRACTICE</span><h3>${escapeHtml(quiz.name)}</h3><p>${escapeHtml(quiz.subtitle)}</p></div><button class="quiz-launch ready" data-start-chapter-quiz="${escapeHtml(quiz.id)}">Start quiz <span>→</span></button></article>`).join("")
        : data.quizSets.map((quiz, index) => `<article class="quiz-card"><span class="quiz-index">${String(index + 1).padStart(2, "0")}</span><div class="quiz-info"><span class="level-pill ${quiz.color}">${escapeHtml(quiz.level)}</span><h3>${escapeHtml(quiz.name)}</h3><p>${quiz.count} questions · ${quiz.duration} · In preparation</p></div><span class="quiz-coming">Coming soon</span></article>`).join("");
    const notice = usesLevelCards
      ? (isSequenceChapter
        ? `<div class="sample-notice"><span>ⓘ</span><span><b>Moderate, advanced and mixed practice sets are ready.</b> Basic Concepts remains clearly labeled as a sample quiz.</span></div>`
        : `<div class="sample-notice"><span>ⓘ</span><span>${chapterQuizSets.length === data.quizSets.length ? "All four difficulty levels are ready to attempt." : "Three practice sets are ready. The Basic Concepts set will be added later."}</span></div>`)
      : chapterQuizSets.length
        ? `<div class="sample-notice"><span>ⓘ</span><span><b>Objective quiz.</b> Your score is graded automatically.</span></div>`
        : `<div class="sample-notice"><span>ⓘ</span><span><b>The available set is clearly labeled as a sample.</b> Other quizzes will appear here when question sets are ready.</span></div>`;
    const content = `<section class="page-content"><button class="back-link" data-nav="subject">← <span>${escapeHtml(subject.name)}</span></button><div class="quiz-intro"><span class="eyebrow">${escapeHtml(subject.name.toUpperCase())} · CHAPTER PRACTICE</span><h1>${escapeHtml(state.chapter)}</h1><p>Choose a practice set. Each one is designed to help you build confidence step by step.</p></div><div class="quiz-list">${quizzes}</div>${notice}</section>`;
    return shell(content, "subject");
  }

  function activeQuizPage() {
    const questions = state.quiz.questions;
    const question = questions[state.questionIndex];
    const elapsed = Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000));
    const palette = questions.map((item, index) => `<button type="button" class="question-palette ${hasAnswer(state.answers[index]) ? "answered" : ""} ${state.questionIndex === index ? "current" : ""}" data-question-index="${index}" aria-label="Go to question ${index + 1}">${index + 1}</button>`).join("");
    const isTextAnswer = question.type === "text" || !Array.isArray(question.options);
    const options = isTextAnswer
      ? `<label class="text-answer-field" for="question-answer"><span>Your answer</span><textarea id="question-answer" data-text-answer rows="5" placeholder="Enter your answer">${escapeHtml(state.answers[state.questionIndex] || "")}</textarea></label>`
      : question.options.map((option, index) => `<button class="answer-option ${state.answers[state.questionIndex] === index ? "selected" : ""}" type="button" data-answer="${index}"><span class="option-key">${String.fromCharCode(65 + index)}</span><span>${formatQuestionText(option)}</span>${state.answers[state.questionIndex] === index ? `<span class="option-check">✓</span>` : ""}</button>`).join("");
    const diagram = question.diagram ? `<figure class="question-diagram"><img src="${escapeHtml(question.diagram)}" alt="Truss diagram for question ${state.questionIndex + 1}" /><figcaption>Question ${state.questionIndex + 1} diagram</figcaption></figure>` : "";
    const answeredCount = state.answers.filter(hasAnswer).length;
    const marksLabel = question.marks == null ? "PRACTICE" : `${question.marks} MARKS`;
    const isPyqQuiz = Boolean(state.selectedPyqQuizId);
    const backTarget = isPyqQuiz ? "subject" : "quizzes";
    const backLabel = isPyqQuiz ? "Back to exam mocks" : "Back to practice sets";
    const content = `<section class="page-content quiz-taking"><button class="back-link" data-nav="${backTarget}">← <span>${backLabel}</span></button><div class="attempt-heading"><div><span class="eyebrow">QUIZ ATTEMPT · ${escapeHtml(state.group)} GROUP</span><h1>${escapeHtml(state.quiz.name)}</h1><p>${escapeHtml(state.quiz.subject)} · ${escapeHtml(state.quiz.chapter)}</p></div><div class="attempt-clock"><span>${state.quiz.timeLimitSeconds ? "TIME LEFT" : "TIME TAKEN"}</span><b>${formatTime(state.quiz.timeLimitSeconds ? Math.max(0, state.quiz.timeLimitSeconds - elapsed) : elapsed)}</b></div></div><div class="attempt-progress"><span>QUESTION ${state.questionIndex + 1} OF ${questions.length}</span><div><i style="width:${((state.questionIndex + 1) / questions.length) * 100}%"></i></div><span>${marksLabel}</span></div><div class="attempt-layout"><article class="question-card"><div class="question-label">QUESTION ${String(state.questionIndex + 1).padStart(2, "0")} <span>·</span> ${escapeHtml(question.difficulty || "PRACTICE")}</div><h2 class="question-prompt">${formatQuestionText(question.text)}</h2>${diagram}<div class="answer-options">${options}</div><div class="question-controls"><button type="button" class="secondary-action" data-previous ${state.questionIndex === 0 ? "disabled" : ""}>← Previous</button>${state.questionIndex < questions.length - 1 ? `<button type="button" class="primary-action" data-next>Next question →</button>` : `<button type="button" class="primary-action" data-submit-quiz>Submit quiz</button>`}</div></article><aside class="question-sidebar"><b>QUESTION PALETTE</b><p>${answeredCount} of ${questions.length} answered. Unanswered questions remain unmarked.</p><div class="question-palette-list">${palette}</div><div class="palette-legend"><span></span> Answered</div></aside></div></section>`;
    return shell(content, "quiz");
  }

  function resultPage() {
    const result = state.result;
    if (!result) { state.page = "dashboard"; return dashboardPage(); }
    const message = result.percentage === null ? "Compare your responses with the verified solutions below." : result.percentage >= 80 ? "Excellent work! Keep it up." : result.percentage >= 50 ? "Good effort! Keep practising." : "Don't give up. Learn from your mistakes and try again.";
    const answerReview = state.showReview ? `<section class="answer-review" id="answer-review"><div class="review-heading"><div><span class="eyebrow">LEARN FROM EVERY QUESTION</span><h2>Answer review</h2></div><span class="review-total">${result.questions.length} QUESTIONS</span></div>${result.questions.map((question, index) => {
      const answer = result.answers[index];
      const answered = hasAnswer(answer);
      const manualReview = question.autoGrade === false;
      const correct = !manualReview && answer === question.answer;
      const status = !answered ? "Unattempted" : manualReview ? "Response recorded" : correct ? "Correct" : "Incorrect";
      const yourAnswer = !answered ? "Not answered" : manualReview ? answer : Array.isArray(question.options) ? question.options[answer] : answer;
      const expectedAnswer = Array.isArray(question.options) ? question.options[question.answer] : question.answer;
      return `<article class="review-question ${!answered ? "unanswered" : manualReview ? "manual-review" : correct ? "correct" : "incorrect"}"><div class="review-question-head"><b>Question ${index + 1}</b><span class="review-status">${status}</span></div><h3>${formatQuestionText(question.text)}</h3>${question.diagram ? `<figure class="question-diagram"><img src="${escapeHtml(question.diagram)}" alt="Truss diagram for question ${index + 1}" /><figcaption>Question ${index + 1} diagram</figcaption></figure>` : ""}<div class="review-answer-row"><span>Your answer</span><b>${formatQuestionText(yourAnswer)}</b></div><div class="review-answer-row correct-answer"><span>${manualReview ? "Verified answer" : "Correct answer"}</span><b>${formatQuestionText(expectedAnswer)}</b></div><p class="review-explanation">${formatQuestionText(question.explanation || "No explanation was provided for this question.")}</p>${question.sourcePaper ? `<small class="question-source">${escapeHtml(question.source || "Question source")}: ${escapeHtml(question.sourcePaper)}</small>` : ""}</article>`;
    }).join("")}</section>` : "";
    const scoreDisplay = result.percentage === null
      ? `<div class="score-ring unscored"><div><b>${result.attemptedQuestions}/${result.totalQuestions}</b><small>ANSWERED</small></div></div><div class="score-copy"><span>RESPONSE STATUS</span><strong>Self-review</strong><small>${escapeHtml(message)}</small></div>`
      : `<div class="score-ring" style="--score:${result.percentage}%"><div><b>${result.percentage}%</b><small>ACCURACY</small></div></div><div class="score-copy"><span>YOUR SCORE</span><strong>${result.marksObtained}<i>/</i>${result.totalMarks}</strong><small>${escapeHtml(message)}</small></div>`;
    const gradingStats = result.percentage === null
      ? `<div class="result-stat"><span>RESPONSES RECORDED</span><b>${result.attemptedQuestions}</b></div><div class="result-stat"><span>SCORING</span><b>Not auto-graded</b></div>`
      : `<div class="result-stat stat-correct"><span>CORRECT ANSWERS</span><b>${result.correctAnswers}</b></div><div class="result-stat stat-incorrect"><span>INCORRECT ANSWERS</span><b>${result.incorrectAnswers}</b></div><div class="result-stat"><span>TOTAL MARKS</span><b>${result.totalMarks}</b></div><div class="result-stat"><span>MARKS OBTAINED</span><b>${result.marksObtained} / ${result.totalMarks}</b></div><div class="result-stat"><span>PERCENTAGE</span><b>${result.percentage}%</b></div>`;
    const content = `<section class="page-content result-content"><div class="result-hero"><div class="result-confetti" aria-hidden="true">✦</div><span class="eyebrow">QUIZ COMPLETE · ${escapeHtml(result.group)} GROUP</span><h1>Congratulations, ${escapeHtml(result.name)}!</h1><p>You have successfully completed the quiz.</p><div class="result-score-line">${scoreDisplay}</div></div>
      <div class="result-subtitle"><div><span class="eyebrow">${escapeHtml(result.subject.toUpperCase())} · ${escapeHtml(result.chapter.toUpperCase())}</span><h2>${escapeHtml(result.quizName)}</h2></div><span class="result-saved">SAVED TO YOUR HISTORY</span></div><div class="result-stat-grid"><div class="result-stat"><span>STUDENT NAME</span><b>${escapeHtml(result.name)}</b></div><div class="result-stat"><span>SELECTED GROUP</span><b>${escapeHtml(result.group)} Group</b></div><div class="result-stat"><span>TOTAL QUESTIONS</span><b>${result.totalQuestions}</b></div>${gradingStats}<div class="result-stat"><span>UNATTEMPTED</span><b>${result.unattemptedQuestions}</b></div><div class="result-stat"><span>TIME TAKEN</span><b>${formatTime(result.timeTakenSeconds)}</b></div></div>
      <div class="result-actions"><button type="button" class="secondary-action" data-review-answers>${state.showReview ? "Hide Answers" : "Review Answers"}</button><button type="button" class="secondary-action" data-retry-quiz>Retry Quiz</button><button type="button" class="primary-action" data-result-dashboard>Back to Dashboard</button></div>${answerReview}</section>`;
    return shell(content, "result");
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return `${minutes}:${String(remainder).padStart(2, "0")}`;
  }

  function updateAttemptClock() {
    const elapsed = Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000));
    const limit = state.quiz?.timeLimitSeconds;
    if (limit && elapsed >= limit) { completeQuiz(); return; }
    const clock = root.querySelector(".attempt-clock b");
    if (clock) clock.textContent = formatTime(limit ? limit - elapsed : elapsed);
  }

  function startSession() {
    const form = root.querySelector("#entry-form");
    if (!form.reportValidity()) return;
    const name = root.querySelector("#student-name").value.trim();
    if (!name) { root.querySelector("#student-name").focus(); return; }
    state.name = name;
    state.group = state.entryGroup;
    state.page = "dashboard";
    localStorage.setItem(SESSION_NAME, name);
    localStorage.setItem(SESSION_GROUP, state.group);
    render();
  }

  function startQuiz() {
    const chapterQuiz = data.chapterQuizSets.find((quiz) => quiz.id === state.selectedChapterQuizId) || data.chapterQuizSets.find((quiz) => quiz.subjectId === state.subject && quiz.chapter === state.chapter);
    const pyqQuiz = data.pyqQuizSets?.find((quiz) => quiz.id === state.selectedPyqQuizId);
    const sourceQuiz = pyqQuiz || chapterQuiz || data.sampleQuiz;
    state.quiz = { ...sourceQuiz, questions: sourceQuiz.questions.map((question) => ({ ...question, ...(question.options ? { options: [...question.options] } : {}) })) };
    state.answers = state.quiz.questions.map(() => null);
    state.questionIndex = 0;
    state.startedAt = Date.now();
    state.showReview = false;
    state.page = "quiz";
    render();
  }

  function completeQuiz() {
    const questions = state.quiz.questions;
    const gradedQuestions = questions.filter((question) => question.autoGrade !== false && question.answer !== null && question.answer !== undefined);
    const correctAnswers = gradedQuestions.reduce((count, question) => count + (state.answers[questions.indexOf(question)] === question.answer ? 1 : 0), 0);
    const attempted = state.answers.filter(hasAnswer).length;
    const gradedAttempted = gradedQuestions.filter((question) => hasAnswer(state.answers[questions.indexOf(question)])).length;
    const totalMarks = gradedQuestions.reduce((sum, question) => sum + (question.marks || 1), 0);
    const marksObtained = gradedQuestions.reduce((sum, question) => sum + (state.answers[questions.indexOf(question)] === question.answer ? (question.marks || 1) : 0), 0);
    const percentage = totalMarks ? Math.round((marksObtained / totalMarks) * 100) : null;
    const result = {
      id: Date.now(), name: state.name, group: state.group, subject: state.quiz.subject,
      chapter: state.quiz.chapter, quizName: state.quiz.name, totalQuestions: questions.length,
      correctAnswers, incorrectAnswers: gradedAttempted - correctAnswers, attemptedQuestions: attempted,
      unattemptedQuestions: questions.length - attempted, totalMarks, marksObtained,
      percentage, accuracy: gradedQuestions.length ? Math.round((correctAnswers / gradedQuestions.length) * 100) : null,
      timeTakenSeconds: Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000)),
      answers: [...state.answers], questions: questions.map((question) => ({ ...question, ...(question.options ? { options: [...question.options] } : {}) }))
    };
    const history = getResults();
    history.unshift(result);
    try { localStorage.setItem(RESULTS_KEY, JSON.stringify(history)); } catch { /* The current result remains available in this session. */ }
    state.result = result;
    state.showReview = false;
    state.page = "result";
    render();
  }

  function logout() {
    localStorage.removeItem(SESSION_NAME);
    localStorage.removeItem(SESSION_GROUP);
    state.name = "";
    state.group = "";
    state.entryGroup = "MT";
    state.profileMenuOpen = false;
    state.mobileMenuOpen = false;
    state.page = "welcome";
    render();
  }

  function bindEvents() {
    root.querySelector("[data-mobile-menu-toggle]")?.addEventListener("click", () => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
      render();
    });
    root.querySelector("[data-close-mobile-menu]")?.addEventListener("click", () => {
      state.mobileMenuOpen = false;
      render();
    });
    root.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("manit-theme", state.theme);
      render();
    });
    root.querySelector("#entry-form")?.addEventListener("submit", (event) => { event.preventDefault(); startSession(); });
    root.querySelectorAll("[data-select-group]").forEach((button) => button.addEventListener("click", () => {
      state.entryGroup = button.dataset.selectGroup;
      root.querySelectorAll("[data-select-group]").forEach((option) => {
        const selected = option.dataset.selectGroup === state.entryGroup;
        option.classList.toggle("selected", selected);
        option.setAttribute("aria-pressed", String(selected));
      });
      const message = root.querySelector("#entry-message");
      if (message && state.entryGroup === "ST") message.textContent = "ST Group is selected. Its study materials are coming soon.";
      else if (message) message.textContent = "Your name and group are all you need.";
    }));
    root.querySelector(".profile-menu-toggle")?.addEventListener("click", () => { state.profileMenuOpen = !state.profileMenuOpen; render(); });
    root.querySelectorAll("[data-logout]").forEach((button) => button.addEventListener("click", logout));
    root.querySelectorAll("[data-nav]").forEach((button) => button.addEventListener("click", () => { state.mobileMenuOpen = false; state.page = button.dataset.nav; render(); }));
    root.querySelectorAll("[data-pyq-quiz]").forEach((button) => button.addEventListener("click", () => {
      state.selectedChapterQuizId = null; state.selectedPyqQuizId = button.dataset.pyqQuiz;
      state.subject = "mathematics";
      state.chapter = data.pyqQuizSets.find((quiz) => quiz.id === state.selectedPyqQuizId)?.chapter || "Mathematics-I Mini Mock";
      startQuiz();
    }));
    root.querySelectorAll("[data-subject]").forEach((button) => button.addEventListener("click", () => { state.mobileMenuOpen = false; state.subject = button.dataset.subject; state.page = "subject"; render(); }));
    root.querySelectorAll("[data-chapter]").forEach((button) => button.addEventListener("click", () => { state.selectedPyqQuizId = null; state.selectedChapterQuizId = null; state.mobileMenuOpen = false; state.chapter = button.dataset.chapter; state.page = "quizzes"; render(); }));
    root.querySelector("[data-scroll-subjects]")?.addEventListener("click", () => {
      state.mobileMenuOpen = false;
      render();
      root.querySelector("#subjects")?.scrollIntoView({ behavior: "smooth" });
    });
    root.querySelectorAll("[data-start-chapter-quiz]").forEach((button) => button.addEventListener("click", () => { state.selectedPyqQuizId = null; state.selectedChapterQuizId = button.dataset.startChapterQuiz; startQuiz(); }));
    root.querySelector("[data-start-quiz]")?.addEventListener("click", () => { state.selectedPyqQuizId = null; state.selectedChapterQuizId = null; startQuiz(); });
    root.querySelector("[data-text-answer]")?.addEventListener("input", (event) => {
      state.answers[state.questionIndex] = event.currentTarget.value.trim() ? event.currentTarget.value : null;
      const paletteButton = root.querySelector(`[data-question-index="${state.questionIndex}"]`);
      if (paletteButton) paletteButton.classList.toggle("answered", hasAnswer(state.answers[state.questionIndex]));
      const sidebar = root.querySelector(".question-sidebar p");
      if (sidebar) sidebar.textContent = `${state.answers.filter(hasAnswer).length} of ${state.quiz.questions.length} answered. Unanswered questions remain unmarked.`;
    });
    root.querySelectorAll("[data-answer]").forEach((button) => button.addEventListener("click", () => {
      state.answers[state.questionIndex] = Number(button.dataset.answer);
      render();
    }));
    root.querySelectorAll("[data-question-index]").forEach((button) => button.addEventListener("click", () => { state.questionIndex = Number(button.dataset.questionIndex); render(); }));
    root.querySelector("[data-previous]")?.addEventListener("click", () => { state.questionIndex = Math.max(0, state.questionIndex - 1); render(); });
    root.querySelector("[data-next]")?.addEventListener("click", () => { state.questionIndex = Math.min(state.quiz.questions.length - 1, state.questionIndex + 1); render(); });
    root.querySelector("[data-submit-quiz]")?.addEventListener("click", () => {
      if (window.confirm("Submit this quiz and see your results?")) completeQuiz();
    });
    root.querySelector("[data-review-answers]")?.addEventListener("click", () => { state.showReview = !state.showReview; render(); if (state.showReview) root.querySelector("#answer-review")?.scrollIntoView({ behavior: "smooth", block: "start" }); });
    root.querySelector("[data-retry-quiz]")?.addEventListener("click", startQuiz);
    root.querySelector("[data-result-dashboard]")?.addEventListener("click", () => { state.page = "dashboard"; render(); });
  }

  document.addEventListener("click", (event) => {
    if (state.profileMenuOpen && !event.target.closest(".profile-area")) {
      state.profileMenuOpen = false;
      const dropdown = root.querySelector(".profile-dropdown");
      const toggle = root.querySelector(".profile-menu-toggle");
      if (dropdown) dropdown.hidden = true;
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.mobileMenuOpen) {
      state.mobileMenuOpen = false;
      render();
    }
    if (event.key === "Escape" && state.profileMenuOpen) {
      state.profileMenuOpen = false;
      const dropdown = root.querySelector(".profile-dropdown");
      const toggle = root.querySelector(".profile-menu-toggle");
      if (dropdown) dropdown.hidden = true;
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
  });

  render();
})();
