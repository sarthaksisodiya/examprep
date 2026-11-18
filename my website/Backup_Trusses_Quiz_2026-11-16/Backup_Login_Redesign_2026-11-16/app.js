(() => {
  const root = document.querySelector("#app");
  const data = window.MANIT_DATA;
  const savedName = localStorage.getItem("manit-student-name") || "";
  const state = { page: savedName ? "dashboard" : "welcome", name: savedName, subject: null, chapter: null };

  const icon = (glyph) => `<span class="subject-icon" aria-hidden="true">${glyph}</span>`;
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

  function render() {
    if (state.page === "welcome") root.innerHTML = welcomePage();
    if (state.page === "dashboard") root.innerHTML = dashboardPage();
    if (state.page === "subject") root.innerHTML = subjectPage();
    if (state.page === "quizzes") root.innerHTML = quizPage();
    bindEvents();
  }

  function welcomePage() {
    return `<main class="welcome-shell">
      <header class="welcome-top"><a class="brand" href="#"><span class="brand-mark">M</span><span>MANIT <b>Exam Prep</b></span></a><span class="campus-tag"><span class="live-dot"></span> BHOPAL · STUDENT PORTAL</span></header>
      <section class="welcome-content">
        <div class="welcome-copy"><span class="eyebrow"><span class="spark">✦</span> YOUR SEMESTER, IN FOCUS</span><h1>Make every<br />study session <em>count.</em></h1><p>A calmer, clearer way to prepare for your MANIT examinations. Pick up where you left off, or start fresh.</p>
          <div class="proof-row"><span class="proof-icon">✦</span><span>Built around your curriculum</span><i></i><span>Made for focused practice</span></div></div>
        <div class="entry-card"><div class="step-label"><span>01</span><span class="step-line"></span><span>LET’S GET STARTED</span></div><h2>Welcome to your<br />study space.</h2><p class="card-copy">What should we call you?</p><form id="entry-form"><label for="student-name">YOUR NAME</label><div class="input-wrap"><span>◉</span><input id="student-name" name="name" maxlength="40" autocomplete="given-name" placeholder="e.g. Aanya Sharma" value="${escapeHtml(state.name)}" required /></div><button class="primary-button" type="submit">Continue <span>→</span></button></form>
          <div class="group-divider"><span></span> CHOOSE YOUR GROUP <span></span></div><div class="group-options"><button class="group-card available" data-group="MT"><span class="group-symbol">MT</span><span class="group-text"><b>MT Group</b><small>Mathematics & Technology</small></span><span class="group-arrow">↗</span></button><button class="group-card coming" data-group="ST"><span class="group-symbol">ST</span><span class="group-text"><b>ST Group</b><small>Science & Technology</small></span><span class="soon-badge">SOON</span></button></div><p id="entry-message" class="entry-message" role="status">Enter your name, then choose your group to continue.</p></div>
      </section><footer class="welcome-footer"><span>MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY</span><span>LEARN WITH INTENTION <b>✳</b></span></footer>
    </main>`;
  }

  function shell(content, active = "home") {
    return `<div class="app-shell"><aside class="sidebar"><a class="brand sidebar-brand" href="#" data-nav="dashboard"><span class="brand-mark">M</span><span>MANIT <b>Exam Prep</b></span></a><div class="sidebar-label">STUDY SPACE</div><nav class="side-nav"><button class="nav-link ${active === "home" ? "selected" : ""}" data-nav="dashboard"><span>▦</span> Overview</button><button class="nav-link" data-scroll-subjects><span>◈</span> My subjects</button><div class="nav-link muted-link" aria-disabled="true" title="Coming in a future update"><span>◎</span> My progress <small>SOON</small></div></nav><div class="sidebar-bottom"><div class="help-card"><span class="help-star">✦</span><b>Small steps add up.</b><p>Stay consistent and let your progress build.</p></div><button class="profile" data-nav="welcome"><span class="avatar">${escapeHtml((state.name[0] || "S").toUpperCase())}</span><span><b>${escapeHtml(state.name)}</b><small>MT Group · MANIT Bhopal</small></span><span class="profile-menu">···</span></button></div></aside><main class="main-area"><header class="topbar"><div class="mobile-brand"><span class="brand-mark">M</span> MANIT Exam Prep</div><div class="breadcrumb">MT GROUP <span>/</span> ${active === "home" ? "OVERVIEW" : active === "subject" ? "SUBJECTS" : "PRACTICE"}</div><div class="topbar-right"><span class="term-tag"><span class="live-dot"></span> SEMESTER 1</span><button class="avatar small-avatar" aria-label="Student profile">${escapeHtml((state.name[0] || "S").toUpperCase())}</button></div></header>${content}</main></div>`;
  }

  function dashboardPage() {
    const cards = data.subjects.map((subject, index) => `<button class="subject-card" data-subject="${subject.id}"><div class="subject-card-top"><span class="subject-icon ${subject.color}">${subject.icon}</span><span class="card-count">${subject.direct ? "TOPICS" : `${subject.chapters.length} CHAPTERS`}</span></div><h3>${subject.name}</h3><p>${subject.direct ? "Topic-wise practice" : "Build your understanding, one chapter at a time."}</p><div class="subject-card-bottom"><span>${subject.direct ? "Explore topics" : "Explore chapters"}</span><span class="round-arrow">↗</span></div></button>`).join("");
    const content = `<section class="page-content"><div class="welcome-banner"><div><span class="eyebrow"><span class="spark">✦</span> YOUR PERSONAL STUDY SPACE</span><h1>Good to have you here, ${escapeHtml(state.name.split(" ")[0])}.</h1><p>One focused session at a time. What would you like to work on today?</p></div><div class="banner-art"><div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-core">M<span>+</span></div><span class="art-dot dot-one"></span><span class="art-dot dot-two"></span><span class="art-dot dot-three"></span></div><div class="banner-note"><span>✳</span><span>EVERY EXPERT WAS<br />ONCE A BEGINNER.</span></div></div>
      <div class="section-heading" id="subjects"><div><span class="eyebrow">YOUR CURRICULUM</span><h2>Pick a subject</h2><p>Choose a subject to find chapters and practice sets.</p></div><span class="group-chip">MT GROUP <b>·</b> 5 SUBJECTS</span></div><div class="subject-grid">${cards}</div><div class="coming-strip"><span class="strip-icon">✦</span><span><b>More ways to prepare are on the way.</b><small>Progress tracking, mock tests and previous papers are coming soon.</small></span><span class="strip-badge">IN THE WORKS</span></div></section>`;
    return shell(content);
  }

  function subjectPage() {
    const subject = data.subjects.find((item) => item.id === state.subject);
    const body = subject.direct
      ? `<div class="empty-topic"><span class="empty-icon">✳</span><h3>Topic practice is on the way</h3><p>We’ll add ${subject.name} topics here as soon as the topic list is ready.</p><span class="sample-label">CONTENT COMING SOON</span></div>`
      : `<div class="chapter-list">${subject.chapters.map((chapter, i) => `<button class="chapter-row" data-chapter="${escapeHtml(chapter)}"><span class="chapter-number">${String(i + 1).padStart(2, "0")}</span><span class="chapter-name"><b>${escapeHtml(chapter)}</b><small>4 practice sets · ~10 questions each</small></span><span class="chapter-progress"><span class="progress-track"><span style="width:0%"></span></span><small>Not started</small></span><span class="chapter-arrow">→</span></button>`).join("")}</div>`;
    const content = `<section class="page-content"><button class="back-link" data-nav="dashboard">← <span>All subjects</span></button><div class="subject-intro"><span class="subject-icon large ${subject.color}">${subject.icon}</span><div><span class="eyebrow">MT GROUP · SUBJECT</span><h1>${subject.name}</h1><p>${subject.direct ? "Explore topic-wise practice sets." : `${subject.chapters.length} chapters to explore at your own pace.`}</p></div></div><div class="section-heading compact"><div><span class="eyebrow">${subject.direct ? "GET STARTED" : "COURSE CONTENT"}</span><h2>${subject.direct ? "Topic practice" : "Chapters"}</h2></div>${!subject.direct ? `<span class="group-chip">${subject.chapters.length} CHAPTERS</span>` : ""}</div>${body}<div class="coming-strip"><span class="strip-icon">✦</span><span><b>More practice is coming soon.</b><small>Question sets are being prepared for this subject.</small></span><span class="strip-badge">IN THE WORKS</span></div></section>`;
    return shell(content, "subject");
  }

  function quizPage() {
    const subject = data.subjects.find((item) => item.id === state.subject);
    const content = `<section class="page-content"><button class="back-link" data-nav="subject">← <span>${escapeHtml(subject.name)}</span></button><div class="quiz-intro"><span class="eyebrow">${escapeHtml(subject.name.toUpperCase())} · CHAPTER PRACTICE</span><h1>${escapeHtml(state.chapter)}</h1><p>Choose a practice set. Each one is designed to help you build confidence step by step.</p></div><div class="quiz-list">${data.quizSets.map((quiz, i) => `<article class="quiz-card"><span class="quiz-index">${String(i + 1).padStart(2, "0")}</span><div class="quiz-info"><span class="level-pill ${quiz.color}">${quiz.level}</span><h3>${quiz.name}</h3><p>${quiz.count} questions <i>·</i> ${quiz.duration} <i>·</i> Sample set</p></div><button class="quiz-launch" data-coming-quiz aria-label="${quiz.name} status">Coming soon <span>→</span></button></article>`).join("")}</div><div class="sample-notice"><span>ⓘ</span><span><b>Practice sets are being prepared.</b> These sample listings are placeholders; no questions are available yet.</span></div></section>`;
    return shell(content, "subject");
  }

  function bindEvents() {
    root.querySelector("#entry-form")?.addEventListener("submit", (event) => { event.preventDefault(); chooseGroup("MT"); });
    root.querySelectorAll("[data-group]").forEach((button) => button.addEventListener("click", () => chooseGroup(button.dataset.group)));
    root.querySelectorAll("[data-nav]").forEach((button) => button.addEventListener("click", () => { state.page = button.dataset.nav; render(); }));
    root.querySelectorAll("[data-subject]").forEach((button) => button.addEventListener("click", () => { state.subject = button.dataset.subject; state.page = "subject"; render(); }));
    root.querySelectorAll("[data-chapter]").forEach((button) => button.addEventListener("click", () => { state.chapter = button.dataset.chapter; state.page = "quizzes"; render(); }));
    root.querySelector("[data-scroll-subjects]")?.addEventListener("click", () => document.querySelector("#subjects")?.scrollIntoView({ behavior: "smooth" }));
    root.querySelectorAll("[data-coming-quiz]").forEach((button) => button.addEventListener("click", () => alert("Sample questions are being prepared. This quiz will be available soon.")));
  }

  function chooseGroup(group) {
    const message = root.querySelector("#entry-message");
    const name = root.querySelector("#student-name")?.value.trim();
    if (group === "ST") { if (message) message.textContent = "ST Group is coming soon. For now, you can explore the MT Group."; return; }
    if (!name) { root.querySelector("#student-name")?.focus(); if (message) message.textContent = "Please enter your name before continuing."; return; }
    state.name = name; state.page = "dashboard"; localStorage.setItem("manit-student-name", name); render();
  }

  render();
})();
