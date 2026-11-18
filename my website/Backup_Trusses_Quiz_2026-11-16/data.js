// Content lives separately from the interface so it can later come from an API/database.
window.MANIT_DATA = {
  subjects: [
    { id: "mathematics", name: "Mathematics", short: "MATH", icon: "∑", color: "violet", chapters: ["Sequence and Series", "Partial Derivatives", "Integral Calculus", "Vector Calculus", "Ordinary Differential Equations"] },
    { id: "programming", name: "Computer Programming", short: "CODE", icon: "⌘", color: "blue", direct: true, chapters: [] },
    { id: "mechanics", name: "Engineering Mechanics", short: "MECH", icon: "◈", color: "orange", chapters: ["Forces and Equilibrium", "Trusses", "Centroid and Moment of Inertia", "Beam Reactions", "Friction"] },
    { id: "physics", name: "Physics", short: "PHYS", icon: "◉", color: "cyan", chapters: ["Optics", "Quantum Mechanics", "Semiconductors"] },
    { id: "communication", name: "Communication Skills", short: "COMM", icon: "✳", color: "pink", direct: true, chapters: [] }
  ],
  quizSets: [
    { name: "Basic Concepts", level: "Foundation", count: 10, duration: "15 min", color: "green" },
    { name: "Moderate Questions", level: "Intermediate", count: 10, duration: "20 min", color: "blue" },
    { name: "Advanced Questions", level: "Challenge", count: 10, duration: "25 min", color: "violet" },
    { name: "Mixed Practice", level: "All levels", count: 10, duration: "20 min", color: "orange" }
  ],
  // Clearly labeled demonstration content: real quiz banks can replace this array later.
  sampleQuiz: {
    id: "sample-sequence-basics",
    name: "Basic Concepts — Sample Quiz",
    subject: "Mathematics",
    chapter: "Sequence and Series",
    questions: [
      { text: "What is the next term in the sequence 2, 4, 6, 8, …?", options: ["9", "10", "12", "14"], answer: 1, marks: 2, difficulty: "BASIC", explanation: "The sequence increases by 2 each time, so the next term is 8 + 2 = 10." },
      { text: "An arithmetic sequence begins with 3 and has common difference 5. What is its 10th term?", options: ["43", "45", "48", "50"], answer: 2, marks: 2, difficulty: "BASIC", explanation: "Use aₙ = a₁ + (n − 1)d. Thus a₁₀ = 3 + 9 × 5 = 48." },
      { text: "What is the common ratio of the geometric sequence 3, 6, 12, 24, …?", options: ["2", "3", "4", "6"], answer: 0, marks: 2, difficulty: "BASIC", explanation: "Divide a term by the preceding term: 6 ÷ 3 = 2. The common ratio is 2." },
      { text: "What is the sum of the first five positive integers?", options: ["10", "12", "15", "20"], answer: 2, marks: 2, difficulty: "BASIC", explanation: "Add the first five integers: 1 + 2 + 3 + 4 + 5 = 15." },
      { text: "What is the next term in the geometric sequence 2, 6, 18, …?", options: ["36", "48", "54", "60"], answer: 2, marks: 2, difficulty: "BASIC", explanation: "Each term is multiplied by 3. The next term is 18 × 3 = 54." }
    ]
  }
};
