// Content lives separately from the interface so it can later come from an API/database.
window.MANIT_DATA = {
  subjects: [
    { id: "mathematics", name: "Mathematics", short: "MATH", icon: "∑", color: "violet", chapters: ["Sequence and Series", "Partial Derivatives", "Integral Calculus", "Vector Calculus", "Ordinary Differential Equations", "Higher Order Differential Equations"] },
    { id: "programming", name: "Computer Programming", short: "CODE", icon: "⌘", color: "blue", direct: true, chapters: [] },
    { id: "mechanics", name: "Engineering Mechanics", short: "MECH", icon: "◈", color: "orange", chapters: ["Forces and Equilibrium", "Trusses", "Centroid and Moment of Inertia", "Beam Reactions", "Friction"] },
    { id: "physics", name: "Physics", short: "PHYS", icon: "◉", color: "cyan", chapters: ["Optics", "Quantum Mechanics", "Semiconductors", "Nuclear Physics", "Fiber Optics", "Lasers"] },
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
    },
    chapterQuizSets: [
      {
        id: "mechanics-trusses-practice-set-1",
        name: "Trusses Practice Quiz – Set 1",
        subtitle: "10 Questions | Engineering Mechanics | MANIT Exam Prep",
        subjectId: "mechanics",
        subject: "Engineering Mechanics",
        chapter: "Trusses",
        questions: [
          {
            id: "trusses-set-1-q1",
            text: "Types of truss\nUsing m = 2j − 3, classify the trusses: (a) j = 6, m = 9; (b) j = 5, m = 6; (c) j = 7, m = 12.",
            type: "multiple-choice",
            options: ["(a) Perfect (b) Deficient (unstable) (c) Redundant", "(a) Deficient (b) Perfect (c) Perfect", "(a) Redundant (b) Deficient (c) Perfect", "(a) Perfect (b) Redundant (c) Deficient"],
            answer: 0,
            autoGrade: true,
            marks: 1,
            explanation: "Required members for a perfect truss = 2j − 3.\n(a) 2(6) − 3 = 9 = m → equal.\n(b) 2(5) − 3 = 7, but m = 6 → one member short.\n(c) 2(7) − 3 = 11, but m = 12 → one extra member."
          },
          {
            id: "trusses-set-1-q2",
            text: "Concepts\nWhich True/False sequence correctly describes these statements?\n(a) Loads are assumed to act only at joints.\n(b) Ideal truss members carry bending moment.\n(c) A compression member pushes on its end joints.\n(d) A section may cut any number of unknown members.\n(e) Two non-collinear members at an unloaded joint are zero-force members.",
            type: "multiple-choice",
            options: ["(a) T (b) F (c) T (d) F (e) T", "(a) T (b) T (c) F (d) F (e) T", "(a) F (b) F (c) T (d) T (e) F", "(a) T (b) F (c) T (d) T (e) F"],
            answer: 0,
            autoGrade: true,
            marks: 1,
            explanation: "(a) True. This is the basic assumption, so members stay straight and carry axial force only.\n(b) False. Joints are smooth pins, so no moment is carried. Members take only tension or compression.\n(c) True. Compression means the member pushes outwards on both end joints.\n(d) False. Only 3 equilibrium equations are available, so cut at most 3 members with unknown forces.\n(e) True. With no load, the two forces cannot balance unless both are zero."
          },
          {
            id: "trusses-set-1-q3",
            text: "Method of joints\nBars AC and BC are pinned to a wall at A and B and meet at C. AC is horizontal and 4 m long. B is 3 m below A. A 12 kN load acts at C. Find the force in each bar and state tension or compression.",
            type: "multiple-choice",
            diagram: "/assets/quiz/trusses-set-1/q03.png",
            options: ["AC = 16 kN (Tension), BC = 20 kN (Compression)", "AC = 12 kN (Compression), BC = 15 kN (Tension)", "AC = 20 kN (Compression), BC = 16 kN (Tension)", "AC = 9 kN (Tension), BC = 12 kN (Compression)"],
            answer: 0,
            autoGrade: true,
            marks: 1,
            explanation: "Red = tension (T) · Blue = compression (C) · Grey dashed = zero force · Forces in kN\nJoint C. BC = √(4² + 3²) = 5 m, so sin θ = 3/5 and cos θ = 4/5. Assume both bars in tension (arrows point away from C).\nΣFy = 0: −12 − FBC(3/5) = 0 → FBC = −20 kN\nΣFx = 0: −FAC − FBC(4/5) = 0 → FAC = −(−20)(0.8) = +16 kN"
          },
          {
            id: "trusses-set-1-q4",
            text: "Support reactions\nA triangular truss ABC is hinged at A and on a roller at B. Apex C is above mid-span. A 20 kN vertical load and a 12 kN horizontal load (towards right) act at C. Find the reactions at A and B.",
            type: "multiple-choice",
            diagram: "/assets/quiz/trusses-set-1/q04.png",
            options: ["Ax = 12 kN (←), Ay = 2 kN (↑), By = 18 kN (↑)", "Ax = 12 kN (→), Ay = 18 kN (↑), By = 2 kN (↑)", "Ax = 0, Ay = 20 kN (↑), By = 0", "Ax = 20 kN (←), Ay = 12 kN (↑), By = 8 kN (↑)"],
            answer: 0,
            autoGrade: true,
            marks: 1,
            explanation: "Unknowns: Ax, Ay, By (roller gives a vertical reaction only).\nΣFx = 0: 12 + Ax = 0 → Ax = −12 kN (12 kN acts to the left)\nΣMA = 0 (anticlockwise +): By(6) − 20(3) − 12(4) = 0 → By = 108/6 = 18 kN\nΣFy = 0: Ay + 18 − 20 = 0 → Ay = 2 kN"
          },
          {
            id: "trusses-set-1-q5",
            text: "Method of joints\nAn equilateral triangular truss ABC (side 4 m) is hinged at A and on a roller at B. A 30 kN vertical load acts at C. Find the support reactions and the force in each member.",
            type: "multiple-choice",
            diagram: "/assets/quiz/trusses-set-1/q05.png",
            options: ["Ay = By = 15 kN; AC = BC = 17.32 kN (Compression); AB = 8.66 kN (Tension)", "Ay = 10 kN, By = 20 kN; AC = BC = 15 kN (Tension); AB = 8.66 kN (Compression)", "Ay = By = 30 kN; AC = BC = 8.66 kN (Compression); AB = 17.32 kN (Tension)", "Ay = 20 kN, By = 10 kN; AC = 17.32 kN (Tension); BC = 8.66 kN (Compression)"],
            answer: 0,
            autoGrade: true,
            marks: 1,
            explanation: "Red = tension (T) · Blue = compression (C) · Grey dashed = zero force · Forces in kN\nReactions. Load is at mid-span, so Ay = By = 30/2 = 15 kN. There is no horizontal load, so Ax = 0.\nJoint A (all angles are 60°): ΣFy = 0: 15 + FAC sin 60° = 0 → FAC = −17.32 kN\nΣFx = 0: FAB + FAC cos 60° = 0 → FAB = 17.32(0.5) = +8.66 kN\nJoint B / C: by symmetry FBC = FAC = −17.32 kN."
          },
          {
            id: "trusses-set-1-q6",
            text: "Zero-force members\nA is hinged, C is on a roller, and a 20 kN load acts at D. (a) Identify the zero-force members and give the reason. (b) Find the forces in AD and AB.",
            type: "multiple-choice",
            diagram: "/assets/quiz/trusses-set-1/q06.png",
            options: ["(a) BD, DE, CE are zero-force members. (b) AD = 16.67 kN (Compression), AB = 13.33 kN (Tension)", "(a) AB and AD are zero-force members. (b) AD = 20 kN (Tension), AB = 10 kN (Compression)", "(a) BD only is zero-force. (b) AD = 13.33 kN (Tension), AB = 16.67 kN (Compression)", "(a) DE and CE are in tension. (b) AD = 10 kN (Compression), AB = 20 kN (Tension)"],
            answer: 0,
            autoGrade: true,
            marks: 1,
            explanation: "Red = tension (T) · Blue = compression (C) · Grey dashed = zero force · Forces in kN\n(a) Joint E: only DE and CE meet, they are not in line, and there is no load → DE = CE = 0. Joint B: AB and BC are in one straight line, there is no load → the third member BD = 0.\n(b) Load is at mid-span, so Ay = Cy = 10 kN. AD = √(4² + 3²) = 5 m (3-4-5).\nJoint A: ΣFy = 0: 10 + FAD(3/5) = 0 → FAD = −16.67 kN\nΣFx = 0: FAB + FAD(4/5) = 0 → FAB = +13.33 kN"
          },
          {
            id: "trusses-set-1-q7",
            text: "Reactions + joints\nA right-angled truss ABC has a roller at A and a hinge at B. At C, a 30 kN load acts downwards and a 24 kN load acts towards the left. Find the reactions and the forces in AB, BC and AC.",
            type: "multiple-choice",
            diagram: "/assets/quiz/trusses-set-1/q07.png",
            options: ["Ay = 18 kN, Bx = 24 kN, By = 12 kN; AB = 24 kN (Tension), BC = 12 kN (Compression), AC = 30 kN (Compression)", "Ay = 12 kN, Bx = 24 kN, By = 18 kN; AB = 30 kN (Compression), BC = 24 kN (Tension), AC = 12 kN (Tension)", "Ay = 30 kN, Bx = 0, By = 0; AB = 24 kN (Compression), BC = 12 kN (Tension), AC = 18 kN (Compression)", "Ay = 18 kN, Bx = 12 kN, By = 24 kN; AB = 12 kN (Tension), BC = 30 kN (Compression), AC = 24 kN (Tension)"],
            answer: 0,
            autoGrade: true,
            marks: 1,
            explanation: "Red = tension (T) · Blue = compression (C) · Grey dashed = zero force · Forces in kN\nReactions: Ay = 18 kN (↑), Bx = 24 kN (→), By = 12 kN (↑).\nJoint A (AC = 5 m, direction (0.8, 0.6)): ΣFy = 0: 18 + 0.6FAC = 0 → FAC = −30 kN; ΣFx = 0: FAB + 0.8(−30) = 0 → FAB = +24 kN.\nJoint C: ΣFy = 0: −30 − 0.6FAC − FBC = 0 → −30 + 18 − FBC = 0 → FBC = −12 kN."
          },
          {
            id: "trusses-set-1-q8",
            text: "King-post roof truss\nA roof truss has span AB = 8 m and rise CD = 3 m (D is mid-span). It is hinged at A and on a roller at B. Loads of 16 kN at C and 32 kN at D act downwards. Find the reactions and the force in every member.",
            type: "multiple-choice",
            diagram: "/assets/quiz/trusses-set-1/q08.png",
            options: ["Ay = By = 24 kN; AC = BC = 40 kN (Compression); AD = DB = 32 kN (Tension); CD = 32 kN (Tension)", "Ay = 16 kN, By = 32 kN; AC = BC = 32 kN (Tension); AD = DB = 40 kN (Compression); CD = 16 kN (Compression)", "Ay = By = 32 kN; AC = BC = 24 kN (Compression); AD = DB = 16 kN (Tension); CD = 40 kN (Tension)", "Ay = 24 kN, By = 16 kN; AC = 40 kN (Tension); AD = 32 kN (Compression); CD = 24 kN (Tension)"],
            answer: 0,
            autoGrade: true,
            marks: 1,
            explanation: "Red = tension (T) · Blue = compression (C) · Grey dashed = zero force · Forces in kN\nReactions. Total load = 16 + 32 = 48 kN, and loads are symmetric, so Ay = By = 24 kN. Ax = 0.\nJoint A (AC = 5 m): ΣFy = 0: 24 + 0.6FAC = 0 → FAC = −40 kN; ΣFx = 0: FAD + 0.8(−40) = 0 → FAD = +32 kN.\nBy symmetry FBC = −40 kN and FDB = +32 kN. Joint D: ΣFy = 0: FCD − 32 = 0 → FCD = +32 kN."
          },
          {
            id: "trusses-set-1-q9",
            text: "Warren truss\nAll triangles are equilateral with side 4 m. The truss is hinged at A, on a roller at C, and carries 24 kN at B. Find the force in every member.",
            type: "multiple-choice",
            diagram: "/assets/quiz/trusses-set-1/q09.png",
            options: ["AB = BC = 6.93 kN (Tension); BD = BE = 13.86 kN (Tension); AD = CE = DE = 13.86 kN (Compression)", "AB = BC = 13.86 kN (Compression); BD = BE = 6.93 kN (Tension); AD = CE = DE = 6.93 kN (Tension)", "AB = BC = 12 kN (Tension); BD = BE = 24 kN (Compression); AD = CE = DE = 13.86 kN (Tension)", "AB = BC = 6.93 kN (Compression); BD = BE = 13.86 kN (Compression); AD = CE = DE = 13.86 kN (Tension)"],
            answer: 0,
            autoGrade: true,
            marks: 1,
            explanation: "Red = tension (T) · Blue = compression (C) · Grey dashed = zero force · Forces in kN\nReactions. The load is at the middle, so Ay = Cy = 12 kN.\nJoint A: ΣFy = 0: 12 + FAD sin 60° = 0 → FAD = −13.86 kN; ΣFx = 0: FAB + FAD cos 60° = 0 → FAB = +6.93 kN.\nJoint D: ΣFy = 0: −0.866FAD − 0.866FBD = 0 → FBD = +13.86 kN. By symmetry: FCE = −13.86, FBE = +13.86, FBC = +6.93 kN."
          },
          {
            id: "trusses-set-1-q10",
            text: "Method of sections\nA is hinged and D is on a roller. Loads: 30 kN at B and 12 kN at C. Find the support reactions, then use the method of sections to find the forces in members EF, EC and BC.",
            type: "multiple-choice",
            diagram: "/assets/quiz/trusses-set-1/q10.png",
            options: ["Dy = 18 kN, Ay = 24 kN; EF = 24 kN (Compression), EC = 10 kN (Compression), BC = 32 kN (Tension)", "Dy = 24 kN, Ay = 18 kN; EF = 32 kN (Tension), EC = 24 kN (Compression), BC = 10 kN (Compression)", "Dy = 12 kN, Ay = 30 kN; EF = 10 kN (Tension), EC = 24 kN (Tension), BC = 18 kN (Compression)", "Dy = 18 kN, Ay = 24 kN; EF = 24 kN (Tension), EC = 10 kN (Tension), BC = 32 kN (Compression)"],
            answer: 0,
            autoGrade: true,
            marks: 1,
            explanation: "Step 1: Reactions. ΣMA = 0: Dy(12) − 30(4) − 12(8) = 0 → Dy = 216/12 = 18 kN. Then Ay = 42 − 18 = 24 kN.\nStep 2: Cut through EF, EC and BC (Section 1-1) and study the left part. EC = 5 m, so its direction from E is (0.8, −0.6).\nBC: take moments about E (EF and EC pass through E). ΣME = 0 (anticlockwise +): FBC(3) − 24(4) = 0 → FBC = +32 kN.\nEF: take moments about C (EC and BC pass through C). ΣMC = 0: −FEF(3) − 24(8) + 30(4) = 0 → FEF = −24 kN.\nEC: ΣFy = 0 for the left part: 24 − 30 − 0.6FEC = 0 → FEC = −10 kN."
          }
        ]
      }
    ]
};
