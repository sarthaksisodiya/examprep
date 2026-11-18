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
  ]
};
