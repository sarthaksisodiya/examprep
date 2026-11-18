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
    return `<main class="login-page">
      <div class="nebula nebula-one"></div><div class="nebula nebula-two"></div><div class="nebula nebula-three"></div><div class="star-field" aria-hidden="true"></div>
      <header class="login-header"><a class="login-brand" href="#top" aria-label="MANIT Exam Prep home"><span class="cap-mark"><svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="m4 13.4 14-7 14 7-14 7-14-7Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 16.5v7.1c4.5 3.6 13.5 3.6 18 0v-7.1M32 14v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="32" cy="25" r="1.8" fill="currentColor"/></svg></span><span class="login-brand-words">MANIT <b>EXAM PREP</b></span></a>
        <button class="mobile-menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button><nav class="login-nav" aria-label="Main navigation"><a href="#about">About</a><a href="#how-it-works">How It Works</a><a class="nav-login" href="#student-login">Student Login <span>↗</span></a></nav>
      </header>
      <section class="login-layout" id="top"><div class="login-intro" id="about"><span class="intro-kicker"><i></i> MANIT BHOPAL · STUDENT PORTAL</span><h1>Your Exams.<br />Your Preparation.<br /><span>Your Success.</span></h1><p class="intro-description">A dedicated examination preparation platform for MANIT Bhopal students. Practice chapter-wise quizzes, explore previous-year questions and track your preparation.</p>
          <div class="feature-list" id="how-it-works"><div class="feature-item"><span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 4.5h10.5A2.5 2.5 0 0 1 18 7v13H7a2 2 0 0 1-2-2V4.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8.5 8h6M8.5 11h6M8.5 14h3M18 20V7a2.5 2.5 0 0 1 2.5-2.5V18a2 2 0 0 1-2 2H18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Chapter-wise Practice</span><span class="feature-check">✦</span></div><div class="feature-item"><span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3.8h9l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 20V3.8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14.5 4v4.5H19M9 12h6M9 15.5h6M9 19h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span><span>Previous Year Questions</span><span class="feature-check">✦</span></div><div class="feature-item"><span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19V5M4 19h17M8 16v-4M13 16V8M18 16V5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="m7.5 9 4-3 4 1 4-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Performance Tracking</span><span class="feature-check">✦</span></div></div>
          <div class="intro-footnote"><span class="footnote-orbit">✳</span><span>Built for MANIT. Made for your next big step.</span></div></div>
        <section class="login-card" id="student-login" aria-labelledby="login-title"><div class="card-glow"></div><div class="login-card-content"><div class="card-emblem"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m3 9 9-4.5L21 9l-9 4.5L3 9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.5 11v4.5c3 2.5 8 2.5 11 0V11M21 9v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span class="card-overline">YOUR STUDY SPACE AWAITS</span><h2 id="login-title">Welcome Back<span>!</span></h2><p class="card-subtitle">Sign in to continue your preparation.</p>
          <form id="entry-form" class="login-form"><label for="student-name">Student Name</label><div class="login-input-wrap"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><input id="student-name" name="name" maxlength="60" autocomplete="name" placeholder="Enter your full name" value="${escapeHtml(state.name)}" required /></div>
            <label for="student-id">College Email / Student ID</label><div class="login-input-wrap"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" stroke-width="1.5"/><path d="m4.5 7 7.5 5.5L19.5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><input id="student-id" name="studentId" autocomplete="username" placeholder="Enter your college email or student ID" required /></div>
            <div class="password-label-row"><label for="student-password">Password</label><a class="forgot-link" href="#student-login" data-forgot-password>Forgot password?</a></div><div class="login-input-wrap"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4.5" y="10" width="15" height="11" rx="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M8 10V7a4 4 0 1 1 8 0v3M12 14v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><input id="student-password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" minlength="6" required /><button class="password-toggle" type="button" aria-label="Show password" aria-pressed="false"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg></button></div>
            <button class="login-submit" type="submit">Continue to MT Group <span>→</span></button></form>
          <div class="login-divider"><span></span><b>YOUR GROUP</b><span></span></div><div class="login-groups"><button class="login-group active" data-group="MT"><span class="group-monogram">MT</span><span><b>MT Group</b><small>Available now</small></span><span class="group-state">●</span></button><button class="login-group disabled" data-group="ST"><span class="group-monogram">ST</span><span><b>ST Group</b><small>Coming soon</small></span><span class="soon-badge">SOON</span></button></div><p class="login-status" id="entry-message" role="status" aria-live="polite">New here? Enter your details to get started.</p>
          <p class="login-privacy"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Your details stay on this device for now.</p></div></section>
      </section><footer class="login-footer"><span>© MANIT EXAM PREP <i></i> MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY</span><span>PREPARE WITH PURPOSE <b>✦</b></span></footer>
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
    root.querySelectorAll("[data-group]").forEach((button) => button.addEventListener("click", () => {
      if (button.dataset.group === "MT" && !root.querySelector("#entry-form")?.reportValidity()) return;
      chooseGroup(button.dataset.group);
    }));
    root.querySelector(".password-toggle")?.addEventListener("click", (event) => {
      const password = root.querySelector("#student-password");
      const button = event.currentTarget;
      const show = password.type === "password";
      password.type = show ? "text" : "password";
      button.setAttribute("aria-pressed", String(show));
      button.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
    root.querySelector("[data-forgot-password]")?.addEventListener("click", (event) => {
      event.preventDefault();
      const message = root.querySelector("#entry-message");
      if (message) message.textContent = "Password recovery will be available when student accounts are connected.";
    });
    root.querySelector(".mobile-menu-toggle")?.addEventListener("click", (event) => {
      const button = event.currentTarget;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      button.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
      root.querySelector(".login-nav")?.classList.toggle("open", !expanded);
    });
    root.querySelectorAll(".login-nav a").forEach((link) => link.addEventListener("click", () => {
      root.querySelector(".login-nav")?.classList.remove("open");
      root.querySelector(".mobile-menu-toggle")?.setAttribute("aria-expanded", "false");
    }));
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
