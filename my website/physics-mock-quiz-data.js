// Physics exam mocks assembled only from existing, answer-keyed chapter questions.
(() => {
  const data = window.MANIT_DATA;
  const chapterOrder = ["Optics", "Quantum Mechanics", "Semiconductors"];
  const levelOrder = ["basic", "moderate", "advanced", "mixed"];
  const questionPools = Object.fromEntries(chapterOrder.map((chapter) => {
    const quizzes = data.chapterQuizSets
      .filter((quiz) => quiz.subjectId === "physics" && quiz.chapter === chapter)
      .sort((a, b) => levelOrder.indexOf(a.levelId) - levelOrder.indexOf(b.levelId));
    const questions = quizzes.flatMap((quiz) => quiz.questions
      .filter((question) => Array.isArray(question.options) && Number.isInteger(question.answer))
      .map((question) => ({ question, quiz })));
    return [chapter, questions];
  }));

  const plans = [
    { category: "mini", name: "Mini Mock Test 1", duration: "60 min", timeLimitSeconds: 3600, count: 5, chapters: { "Optics": 2, "Quantum Mechanics": 2, "Semiconductors": 1 } },
    { category: "mini", name: "Mini Mock Test 2", duration: "60 min", timeLimitSeconds: 3600, count: 5, chapters: { "Optics": 2, "Quantum Mechanics": 2, "Semiconductors": 1 } },
    { category: "mid", name: "Mid Mock Test 1", duration: "60 min", timeLimitSeconds: 3600, count: 8, chapters: { "Optics": 3, "Quantum Mechanics": 2, "Semiconductors": 3 } },
    { category: "mid", name: "Mid Mock Test 2", duration: "60 min", timeLimitSeconds: 3600, count: 8, chapters: { "Optics": 3, "Quantum Mechanics": 2, "Semiconductors": 3 } },
    { category: "end", name: "End Mock Test 1", duration: "2 hours", timeLimitSeconds: 7200, count: 10, chapters: { "Optics": 3, "Quantum Mechanics": 3, "Semiconductors": 4 } },
    { category: "end", name: "End Mock Test 2", duration: "2 hours", timeLimitSeconds: 7200, count: 10, chapters: { "Optics": 3, "Quantum Mechanics": 4, "Semiconductors": 3 } }
  ];
  const offsets = Object.fromEntries(chapterOrder.map((chapter) => [chapter, 0]));

  for (const [planIndex, plan] of plans.entries()) {
    const available = chapterOrder.every((chapter) =>
      questionPools[chapter].length - offsets[chapter] >= plan.chapters[chapter]);
    if (!available) continue;

    const selected = chapterOrder.flatMap((chapter) => {
      const start = offsets[chapter];
      const questions = questionPools[chapter].slice(start, start + plan.chapters[chapter]);
      offsets[chapter] += questions.length;
      return questions;
    });

    const questions = selected.map(({ question, quiz }, index) => ({
      ...question,
      id: `physics-${plan.category}-mock-${planIndex % 2 + 1}-q${String(index + 1).padStart(2, "0")}`,
      sourceQuestionId: question.id,
      source: question.source || "Existing Physics chapter question bank",
      sourcePaper: question.sourcePaper || `${quiz.chapter} · ${quiz.name}`,
      marks: Number.isFinite(question.marks) ? question.marks : 1
    }));

    data.pyqQuizSets.push({
      id: `physics-${plan.category}-mock-${planIndex % 2 + 1}`,
      name: plan.name,
      category: plan.category,
      level: plan.category === "mini" ? "MINI MOCK" : plan.category === "mid" ? "MID-SEM" : "END-SEM",
      difficulty: "Exam practice",
      duration: plan.duration,
      timeLimitSeconds: plan.timeLimitSeconds,
      count: questions.length,
      subjectId: "physics",
      subject: "Physics",
      chapter: "Physics Mock Tests",
      source: "Existing Optics, Quantum Mechanics and Semiconductors question banks",
      questions
    });
  }
})();
