// Higher Order Ordinary Differential Equations practice sets.
window.MANIT_DATA.chapterQuizSets.push(...[
  {
    "id": "math-higher-order-ode-set-01",
    "name": "Basic Concepts",
    "level": "Foundation",
    "difficulty": "BASIC",
    "duration": "15 min",
    "timeLimitSeconds": 900,
    "color": "green",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Higher Order Differential Equations",
    "subtitle": "10 objective questions · 15 min",
    "source": "Student-provided question set 01",
    "questions": [
      {
        "id": "math-higher-order-ode-set-01-q01",
        "text": "The complementary function of y″ − 5y′ + 6y = 0 is",
        "options": [
          "C₁e⁻²ˣ + C₂e⁻³ˣ",
          "C₁e²ˣ + C₂e³ˣ",
          "(C₁ + C₂x)e²ˣ",
          "C₁eˣ + C₂e⁶ˣ"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "m² − 5m + 6 = 0 gives m = 2, 3.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-01-q02",
        "text": "The complementary function of y″ + 4y = 0 is",
        "options": [
          "C₁e²ˣ + C₂e⁻²ˣ",
          "C₁ cos 4x + C₂ sin 4x",
          "C₁ cos 2x + C₂ sin 2x",
          "(C₁ + C₂x) cos 2x"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "m² + 4 = 0 gives m = ±2i.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-01-q03",
        "text": "The complementary function of (D − 1)²y = 0 is",
        "options": [
          "C₁eˣ + C₂e⁻ˣ",
          "(C₁ + C₂x)e⁻ˣ",
          "(C₁ + C₂x)eˣ",
          "C₁eˣ + C₂x"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "the repeated root m = 1 gives (C₁ + C₂x)eˣ.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-01-q04",
        "text": "The complementary function of y″ + 2y′ + 5y = 0 is",
        "options": [
          "eˣ(C₁ cos 2x + C₂ sin 2x)",
          "e⁻ˣ(C₁ cos 2x + C₂ sin 2x)",
          "e⁻²ˣ(C₁ cos x + C₂ sin x)",
          "C₁e⁻ˣ + C₂e⁻⁵ˣ"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "m = −1 ± 2i.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-01-q05",
        "text": "A particular integral of (D² − 4)y = e³ˣ is",
        "options": [
          "e³ˣ/5",
          "e³ˣ/13",
          "−e³ˣ/5",
          "x e³ˣ/5"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "PI = e³ˣ/(9 − 4) = e³ˣ/5.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-01-q06",
        "text": "A particular integral of (D² + 1)y = sin 2x is",
        "options": [
          "−(sin 2x)/3",
          "(sin 2x)/3",
          "−(cos 2x)/3",
          "(sin 2x)/5"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "replace D² by −4: PI = sin 2x/(−4 + 1) = −(sin 2x)/3.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-01-q07",
        "text": "The Wronskian of eˣ and e²ˣ is",
        "options": [
          "e³ˣ",
          "eˣ",
          "−e³ˣ",
          "3e³ˣ"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "W = eˣ · 2e²ˣ − e²ˣ · eˣ = e³ˣ.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-01-q08",
        "text": "Which of the following pairs of functions is linearly dependent?",
        "options": [
          "x, x²",
          "sin x, cos x",
          "eˣ, e⁻ˣ",
          "x, 3x"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "3x is a constant multiple of x. In every other pair, neither function is a constant multiple of the other.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-01-q09",
        "text": "The substitution x = eᶻ in a Cauchy–Euler equation gives x² d²y/dx² =  (where D = d/dz)",
        "options": [
          "D²y",
          "D(D − 1)y",
          "D(D + 1)y",
          "Dy"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "with x = eᶻ, x² d²y/dx² = D(D − 1)y and x dy/dx = Dy.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-01-q10",
        "text": "The complementary function of y‴ − 3y″ + 2y′ = 0 is",
        "options": [
          "C₁ + C₂eˣ + C₃e⁻²ˣ",
          "C₁ + C₂eˣ + C₃e²ˣ",
          "C₁eˣ + C₂e²ˣ + C₃e³ˣ",
          "(C₁ + C₂x) + C₃e²ˣ"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "m(m² − 3m + 2) = 0 gives m = 0, 1, 2.\n\n---",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 01",
        "autoGrade": true
      }
    ]
  },
  {
    "id": "math-higher-order-ode-set-02",
    "name": "Moderate Questions",
    "level": "Intermediate",
    "difficulty": "MODERATE",
    "duration": "20 min",
    "timeLimitSeconds": 1200,
    "color": "blue",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Higher Order Differential Equations",
    "subtitle": "10 objective questions · 20 min",
    "source": "Student-provided question set 02",
    "questions": [
      {
        "id": "math-higher-order-ode-set-02-q01",
        "text": "The complementary function of y‴ − 3y″ + 3y′ − y = 0 is",
        "options": [
          "C₁eˣ + C₂e²ˣ + C₃e³ˣ",
          "(C₁ + C₂x + C₃x²)eˣ",
          "(C₁ + C₂x)eˣ + C₃e⁻ˣ",
          "C₁eˣ + C₂ cos x + C₃ sin x"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "(m − 1)³ = 0, so m = 1 is a triple root.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-02-q02",
        "text": "A particular integral of (D² − 3D + 2)y = eˣ is",
        "options": [
          "x eˣ",
          "−x eˣ",
          "−eˣ",
          "x eˣ/2"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "the case of failure, since D = 1 is a root. PI = x eˣ/(2D − 3) at D = 1, which is x eˣ/(−1) = −x eˣ.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-02-q03",
        "text": "A particular integral of (D² + 4)y = cos 2x is",
        "options": [
          "(x sin 2x)/4",
          "−(x sin 2x)/4",
          "(x cos 2x)/4",
          "(sin 2x)/8"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "1/(D² + a²) cos ax = x sin ax/(2a), which here is x sin 2x/4.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-02-q04",
        "text": "A particular integral of (D² − 2D + 1)y = x is",
        "options": [
          "x + 2",
          "x − 2",
          "x + 1",
          "x²/2"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "PI = (1 − D)⁻² x = (1 + 2D + …)x = x + 2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-02-q05",
        "text": "The general solution of x² y″ + x y′ − y = 0 is",
        "options": [
          "C₁x + C₂/x",
          "C₁x² + C₂/x",
          "C₁x + C₂x²",
          "C₁ cos x + C₂ sin x"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "with x = eᶻ, (D² − 1)y = 0, so y = C₁eᶻ + C₂e⁻ᶻ = C₁x + C₂/x.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-02-q06",
        "text": "The general solution of x² y″ + x y′ + y = 0 is",
        "options": [
          "C₁ cos x + C₂ sin x",
          "C₁x + C₂/x",
          "C₁ cos(ln x) + C₂ sin(ln x)",
          "(C₁ + C₂ ln x)x"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "(D² + 1)y = 0 in z, so y = C₁ cos z + C₂ sin z with z = ln x.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-02-q07",
        "text": "The Wronskian of x and x² is",
        "options": [
          "x",
          "2x",
          "x²",
          "1"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "W = x · 2x − x² · 1 = x².",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-02-q08",
        "text": "The Wronskian of sin x and cos x is",
        "options": [
          "1",
          "−1",
          "0",
          "sin 2x"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "W = sin x(−sin x) − cos x · cos x = −1.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-02-q09",
        "text": "For the system dx/dt = y, dy/dt = x, the general solution for x(t) is",
        "options": [
          "C₁ cos t + C₂ sin t",
          "(C₁ + C₂t)eᵗ",
          "C₁eᵗ + C₂t",
          "C₁eᵗ + C₂e⁻ᵗ"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "x″ = y′ = x, so x = C₁eᵗ + C₂e⁻ᵗ.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-02-q10",
        "text": "A particular integral of (D − 2)²y = e²ˣ is",
        "options": [
          "x e²ˣ",
          "x² e²ˣ",
          "x² e²ˣ/2",
          "e²ˣ/2"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "e²ˣ · (1/D²)(1) = x²e²ˣ/2.\n\n---",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 02",
        "autoGrade": true
      }
    ]
  },
  {
    "id": "math-higher-order-ode-set-03",
    "name": "Advanced Questions",
    "level": "Challenge",
    "difficulty": "ADVANCED",
    "duration": "25 min",
    "timeLimitSeconds": 1500,
    "color": "violet",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Higher Order Differential Equations",
    "subtitle": "10 objective questions · 25 min",
    "source": "Student-provided question set 03",
    "questions": [
      {
        "id": "math-higher-order-ode-set-03-q01",
        "text": "A particular integral of (D − 2)²y = x e²ˣ is",
        "options": [
          "x²e²ˣ/2",
          "x³e²ˣ/6",
          "x³e²ˣ/3",
          "x²e²ˣ/6"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "PI = e²ˣ (1/D²) x = e²ˣ · x³/6.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-03-q02",
        "text": "A particular integral of (D² + 1)y = sin x is",
        "options": [
          "−(x cos x)/2",
          "(x cos x)/2",
          "−(x sin x)/2",
          "−(sin x)/2"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "PI = (x/2D) sin x = (x/2)(−cos x) = −(x cos x)/2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-03-q03",
        "text": "A particular integral of (D² − 1)y = x eˣ is",
        "options": [
          "(x² + x)eˣ/4",
          "(x² − x)eˣ/4",
          "x²eˣ/2",
          "x eˣ/2"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "PI = eˣ · 1/((D + 1)² − 1) · x = eˣ · 1/(D² + 2D) · x. Now 1/(2D) · (1 + D/2)⁻¹ x = 1/(2D) · (x − ½) = x²/4 − x/4. So PI = (x² − x)eˣ/4.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-03-q04",
        "text": "The general solution of x² y″ − 3x y′ + 4y = 0 is",
        "options": [
          "C₁x² + C₂x⁻²",
          "C₁x + C₂x²",
          "(C₁ + C₂ ln x)x²",
          "(C₁ + C₂x)x²"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "m(m − 1) − 3m + 4 = (m − 2)² = 0, a repeated root, so y = (C₁ + C₂ ln x)x².",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-03-q05",
        "text": "A particular integral of x² y″ + x y′ − y = x is",
        "options": [
          "(x ln x)/2",
          "x²/2",
          "(ln x)/2",
          "x ln x"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "with x = eᶻ, (D² − 1)y = eᶻ, and PI = z eᶻ/2 = (x ln x)/2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-03-q06",
        "text": "The Wronskian of eˣ and x eˣ is",
        "options": [
          "eˣ",
          "e²ˣ",
          "x e²ˣ",
          "0"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "W = eˣ(eˣ + x eˣ) − x eˣ · eˣ = e²ˣ.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-03-q07",
        "text": "For the system dx/dt = y, dy/dt = −x with x(0) = 1, y(0) = 0, the value of x(π) is",
        "options": [
          "1",
          "0",
          "−1",
          "π"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "x″ = −y′... precisely x″ = y′ = −x, with x(0) = 1 and x′(0) = y(0) = 0. So x = cos t and x(π) = −1.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-03-q08",
        "text": "For the system dx/dt = x + y, dy/dt = x − y, the general solution for x(t) is",
        "options": [
          "C₁eᵗ + C₂e⁻ᵗ",
          "C₁e^(√2 t) + C₂e^(−√2 t)",
          "C₁ cos √2 t + C₂ sin √2 t",
          "C₁e²ᵗ + C₂e⁻²ᵗ"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "x″ = x′ + y′ = x′ + x − y, and y = x′ − x, so x″ = x′ + x − x′ + x = 2x. Hence x = C₁e^(√2 t) + C₂e^(−√2 t).",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-03-q09",
        "text": "The Wronskian of 1, x, x² is",
        "options": [
          "0",
          "1",
          "2",
          "x"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "the matrix is upper triangular with diagonal 1, 1, 2, so W = 2 ≠ 0 and the functions are independent.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-03-q10",
        "text": "The complementary function of y⁗ + y″ = 0 is",
        "options": [
          "C₁ + C₂x + C₃eˣ + C₄e⁻ˣ",
          "C₁ + C₂x + C₃ cos x + C₄ sin x",
          "C₁ cos x + C₂ sin x + C₃ cos 2x + C₄ sin 2x",
          "C₁ + C₂eˣ + C₃ cos x + C₄ sin x"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "m²(m² + 1) = 0 gives m = 0, 0, ±i.\n\n---",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 03",
        "autoGrade": true
      }
    ]
  },
  {
    "id": "math-higher-order-ode-set-04",
    "name": "Mixed Practice",
    "level": "All levels",
    "difficulty": "MIXED",
    "duration": "20 min",
    "timeLimitSeconds": 1200,
    "color": "orange",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Higher Order Differential Equations",
    "subtitle": "10 objective questions · 20 min",
    "source": "Student-provided question set 04",
    "questions": [
      {
        "id": "math-higher-order-ode-set-04-q01",
        "text": "The complementary function of y″ − y = 0 is",
        "options": [
          "C₁ cos x + C₂ sin x",
          "C₁eˣ + C₂e⁻ˣ",
          "(C₁ + C₂x)eˣ",
          "C₁eˣ + C₂x"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "m² = 1 gives m = ±1.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-04-q02",
        "text": "A particular integral of (D² + 9)y = e⁻ˣ is",
        "options": [
          "e⁻ˣ/10",
          "e⁻ˣ/8",
          "−e⁻ˣ/10",
          "e⁻ˣ/9"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "PI = e⁻ˣ/(1 + 9) = e⁻ˣ/10.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-04-q03",
        "text": "A particular integral of (D² + 3D + 2)y = eˣ is",
        "options": [
          "eˣ/2",
          "eˣ/3",
          "eˣ/6",
          "eˣ/4"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "PI = eˣ/(1 + 3 + 2) = eˣ/6.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-04-q04",
        "text": "A particular integral of (D² + 1)y = x² is",
        "options": [
          "x² + 2",
          "x² − 2",
          "x² − 1",
          "x²/2"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "PI = (1 + D²)⁻¹ x² = (1 − D² + …)x² = x² − 2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-04-q05",
        "text": "The general solution of x² y″ + 4x y′ + 2y = 0 is",
        "options": [
          "C₁x + C₂x²",
          "C₁x⁻¹ + C₂x",
          "C₁ cos(ln x) + C₂ sin(ln x)",
          "C₁/x + C₂/x²"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "m(m − 1) + 4m + 2 = m² + 3m + 2 = 0 gives m = −1, −2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-04-q06",
        "text": "Which of the following sets of functions is linearly dependent?",
        "options": [
          "1, x, x²",
          "eˣ, e²ˣ",
          "sin 2x, sin x cos x",
          "x, ln x"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "sin 2x = 2 sin x cos x, so the two functions are proportional.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-04-q07",
        "text": "For the system dx/dt = y, dy/dt = 4x with x(0) = 1, y(0) = 2, the value of x(1) is",
        "options": [
          "e²",
          "e⁻²",
          "2e²",
          "1"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "x″ = 4x gives x = Ae²ᵗ + Be⁻²ᵗ. From x(0) = 1, A + B = 1. From x′(0) = y(0) = 2, 2A − 2B = 2. So A = 1, B = 0, x = e²ᵗ, and x(1) = e².",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-04-q08",
        "text": "The complementary function of y‴ − y″ − y′ + y = 0 is",
        "options": [
          "C₁eˣ + C₂e⁻ˣ + C₃",
          "(C₁ + C₂x)eˣ + C₃e⁻ˣ",
          "C₁eˣ + (C₂ + C₃x)e⁻ˣ",
          "(C₁ + C₂x + C₃x²)eˣ"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "(m − 1)(m² − 1) = (m − 1)²(m + 1), so m = 1, 1, −1.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-04-q09",
        "text": "A particular integral of (D² + 4)y = sin x is",
        "options": [
          "−(sin x)/3",
          "(sin x)/5",
          "−(sin x)/5",
          "(sin x)/3"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "replace D² by −1: PI = sin x/(−1 + 4) = (sin x)/3.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-higher-order-ode-set-04-q10",
        "text": "The general solution of x² y″ − 2y = 0 is",
        "options": [
          "C₁x² + C₂x⁻¹",
          "C₁x² + C₂x",
          "C₁x + C₂x⁻²",
          "(C₁ + C₂ ln x)x²"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "m(m − 1) − 2 = (m − 2)(m + 1) = 0 gives m = 2, −1.\n\n---\n\nI can also convert all sets (Sequence and Series, Partial Derivatives, Integral Calculus, Vector Calculus, ODE and Higher Order ODE) into one JSON format (question, options, correct index, explanation) for your quiz page.",
        "source": "Student-provided practice question",
        "sourcePaper": "Higher Order Differential Equations · Set 04",
        "autoGrade": true
      }
    ]
  }
]);
