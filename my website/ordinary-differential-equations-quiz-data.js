// Ordinary Differential Equations practice sets provided by the student.
window.MANIT_DATA.chapterQuizSets.push(...[
  {
    "id": "math-ordinary-differential-equations-basic",
    "levelId": "basic",
    "name": "Basic Concepts",
    "level": "Foundation",
    "difficulty": "BASIC",
    "duration": "15 min",
    "timeLimitSeconds": 900,
    "color": "green",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Ordinary Differential Equations",
    "subtitle": "10 objective questions · 15 min",
    "source": "Student-provided question set 01",
    "questions": [
      {
        "id": "math-ode-basic-q01",
        "text": "The order and degree of (y″)² + (y′)³ + y = 0 are",
        "options": [
          "2, 3",
          "3, 2",
          "2, 2",
          "1, 2"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "the highest derivative is y″, so the order is 2. It appears with power 2, so the degree is 2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-ode-basic-q02",
        "text": "The order and degree of y‴ + 2(y″)² + y′ = 0 are",
        "options": [
          "3, 2",
          "2, 3",
          "3, 1",
          "1, 3"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "the highest derivative is y‴ with power 1, so the order is 3 and the degree is 1.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-ode-basic-q03",
        "text": "The solution of dy/dx = x/y is",
        "options": [
          "x² + y² = C",
          "y² − x² = C",
          "xy = C",
          "y = Cx"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "y dy = x dx gives y²/2 = x²/2 + c, so y² − x² = C.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-ode-basic-q04",
        "text": "The solution of dy/dx = e^(x+y) is",
        "options": [
          "eˣ − e⁻ʸ = C",
          "eˣ + eʸ = C",
          "e⁻ˣ + e⁻ʸ = C",
          "eˣ + e⁻ʸ = C"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "e⁻ʸ dy = eˣ dx gives −e⁻ʸ = eˣ + c, so eˣ + e⁻ʸ = C.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-ode-basic-q05",
        "text": "The integrating factor of dy/dx + 2y = eˣ is",
        "options": [
          "eˣ",
          "e²ˣ",
          "e⁻²ˣ",
          "2x"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "IF = e^(∫2 dx) = e²ˣ.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-ode-basic-q06",
        "text": "Which of the following is a homogeneous differential equation?",
        "options": [
          "dy/dx = x + y²",
          "dy/dx = (x + y)/(x − y + 1)",
          "dy/dx = sin x + y",
          "dy/dx = (x + y)/(x − y)"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "(x + y)/(x − y) has numerator and denominator of the same degree, so the equation is homogeneous. Option B has the extra +1, which makes it reducible to homogeneous but not homogeneous.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-ode-basic-q07",
        "text": "The solution of (2x + y)dx + (x + 2y)dy = 0 is",
        "options": [
          "x² + 2xy + y² = C",
          "x² + xy + y² = C",
          "x² + xy − y² = C",
          "2x² + xy + y² = C"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "M_y = 1 = N_x, so the equation is exact. ∫M dx = x² + xy, and the part of N free of x is 2y, which gives y². The solution is x² + xy + y² = C.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-ode-basic-q08",
        "text": "Which of the following is a Bernoulli equation?",
        "options": [
          "dy/dx + y² = x",
          "(dy/dx)² + y = x",
          "dy/dx + xy = sin y",
          "dy/dx + y = xy²"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "it has the form dy/dx + P y = Q yⁿ with n = 2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-ode-basic-q09",
        "text": "The general solution of dy/dx + y = 1 is",
        "options": [
          "y = 1 + Ceˣ",
          "y = 1 + Ce⁻ˣ",
          "y = e⁻ˣ + C",
          "y = Ce⁻ˣ"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "IF = eˣ, so y eˣ = eˣ + C, giving y = 1 + Ce⁻ˣ.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-ode-basic-q10",
        "text": "An integrating factor of the non-exact equation y dx − x dy = 0 is",
        "options": [
          "x",
          "1/x²",
          "x²",
          "eˣ"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "(y dx − x dy)/x² = −d(y/x), so 1/x² makes the equation exact. For μ = x we get M_y = x and N_x = −2x, which are not equal.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 01",
        "autoGrade": true
      }
    ]
  },
  {
    "id": "math-ordinary-differential-equations-moderate",
    "levelId": "moderate",
    "name": "Moderate Questions",
    "level": "Intermediate",
    "difficulty": "MODERATE",
    "duration": "20 min",
    "timeLimitSeconds": 1200,
    "color": "blue",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Ordinary Differential Equations",
    "subtitle": "10 objective questions · 20 min",
    "source": "Student-provided question set 02",
    "questions": [
      {
        "id": "math-ode-moderate-q01",
        "text": "The solution of dy/dx = (x² + y²)/(xy) is",
        "options": [
          "y² = x² ln x + C",
          "y² = 2x² ln x + Cx²",
          "y = x ln x + C",
          "y² = 2x ln x + Cx²"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "put y = vx. Then v + x v′ = (1 + v²)/v, so x v′ = 1/v and v dv = dx/x. This gives v²/2 = ln x + c, i.e. y² = 2x² ln x + Cx².",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-ode-moderate-q02",
        "text": "To reduce dy/dx = (x + y + 1)/(x − y + 3) to a homogeneous equation, we substitute x = X + h, y = Y + k, where (h, k) =",
        "options": [
          "(2, −1)",
          "(1, −2)",
          "(−2, 1)",
          "(−1, 2)"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "solve x + y + 1 = 0 and x − y + 3 = 0 together. Adding gives x = −2, and then y = 1.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-ode-moderate-q03",
        "text": "The solution of dy/dx + y/x = x² is",
        "options": [
          "y = x³/3 + C/x",
          "y = x³ + C/x",
          "y = x³/4 + Cx",
          "y = x³/4 + C/x"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "IF = x, so xy = ∫x³ dx = x⁴/4 + C, giving y = x³/4 + C/x.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-ode-moderate-q04",
        "text": "The solution of dy/dx + y tan x = sec x is",
        "options": [
          "y = cos x + C sin x",
          "y = tan x + C cos x",
          "y = sin x + C cos x",
          "y = sin x + C sec x"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "IF = sec x, so y sec x = ∫sec²x dx = tan x + C. Hence y = sin x + C cos x.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-ode-moderate-q05",
        "text": "The solution of dy/dx + y/x = y² is",
        "options": [
          "y = 1/(x(C − ln x))",
          "y = 1/(x(C + ln x))",
          "y = x(C − ln x)",
          "y = 1/(C − ln x)"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "put v = 1/y. Then v′ = −y′/y² = v/x − 1, so v′ − v/x = −1. With IF 1/x, v/x = −ln x + C, so v = x(C − ln x) and y = 1/(x(C − ln x)).",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-ode-moderate-q06",
        "text": "The equation (axy + y²)dx + (x² + 2xy)dy = 0 is exact when a =",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "M_y = ax + 2y and N_x = 2x + 2y. Equating them gives a = 2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-ode-moderate-q07",
        "text": "An integrating factor of (x² + y² + x)dx + xy dy = 0 is",
        "options": [
          "x²",
          "1/x",
          "eˣ",
          "x"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "M_y = 2y and N_x = y, so (M_y − N_x)/N = 1/x. Then IF = e^(∫dx/x) = x.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-ode-moderate-q08",
        "text": "An integrating factor of (xy² − e^(1/x³))dx − x²y dy = 0 is",
        "options": [
          "x⁴",
          "1/x⁴",
          "1/x²",
          "x²"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "M_y = 2xy and N_x = −2xy, so (M_y − N_x)/N = 4xy/(−x²y) = −4/x. Then IF = e^(−4 ln x) = 1/x⁴.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-ode-moderate-q09",
        "text": "The solution of dy/dx = (1 + y²)/(1 + x²) with y(0) = 1 is",
        "options": [
          "(1 − x)/(1 + x)",
          "x + 1",
          "(1 + x)/(1 − x)",
          "1/(1 − x)"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "tan⁻¹y = tan⁻¹x + c, and y(0) = 1 gives c = π/4. So y = tan(tan⁻¹x + π/4) = (1 + x)/(1 − x).",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-ode-moderate-q10",
        "text": "The order and degree of √(y″) = (y′ + 1)^(1/3) are",
        "options": [
          "2, 1/2",
          "2, 3",
          "1, 3",
          "2, 2"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "raising both sides to the 6th power gives (y″)³ = (y′ + 1)². The highest derivative is y″ with power 3, so the order is 2 and the degree is 3.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 02",
        "autoGrade": true
      }
    ]
  },
  {
    "id": "math-ordinary-differential-equations-advanced",
    "levelId": "advanced",
    "name": "Advanced Questions",
    "level": "Challenge",
    "difficulty": "ADVANCED",
    "duration": "25 min",
    "timeLimitSeconds": 1500,
    "color": "violet",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Ordinary Differential Equations",
    "subtitle": "10 objective questions · 25 min",
    "source": "Student-provided question set 03",
    "questions": [
      {
        "id": "math-ode-advanced-q01",
        "text": "The solution of dy/dx = (x + y + 1)/(x + y − 1) is",
        "options": [
          "y + x − ln(x + y) = C",
          "y − x + ln(x + y) = C",
          "y − x − ln(x + y) = C",
          "y − x = C ln(x + y)"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "put v = x + y. Then v′ = 1 + (v + 1)/(v − 1) = 2v/(v − 1), so ((v − 1)/v) dv = 2 dx. This gives v − ln v = 2x + C, i.e. y − x − ln(x + y) = C.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-ode-advanced-q02",
        "text": "The solution of dy/dx = y/x + tan(y/x) is",
        "options": [
          "cos(y/x) = Cx",
          "sin(y/x) = Cx",
          "sin(y/x) = C/x",
          "tan(y/x) = Cx"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "put y = vx. Then x v′ = tan v, so cot v dv = dx/x. This gives ln sin v = ln x + c, i.e. sin(y/x) = Cx.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-ode-advanced-q03",
        "text": "The solution of x dy/dx + y = x²y² is",
        "options": [
          "1/y = Cx + x²",
          "y = Cx − x²",
          "1/y = C/x − x²",
          "1/y = Cx − x²"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "put v = 1/y. Then v′ = v/x − x, so v′ − v/x = −x. With IF 1/x, v/x = −x + C, so v = Cx − x² and 1/y = Cx − x².",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-ode-advanced-q04",
        "text": "The solution of (sin y + y cos x + x)dx + (x cos y + sin x + y)dy = 0 is",
        "options": [
          "x sin y + y sin x + (x² + y²)/2 = C",
          "x sin y − y sin x + (x² + y²)/2 = C",
          "x cos y + y sin x + (x² + y²)/2 = C",
          "x sin y + y sin x + x² + y² = C"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "M_y = cos y + cos x = N_x, so the equation is exact. ∫M dx = x sin y + y sin x + x²/2, and the part of N free of x is y, which gives y²/2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-ode-advanced-q05",
        "text": "The solution of y dx + (3 + 3x − y)dy = 0 is",
        "options": [
          "xy³ + y³ + y⁴/4 = C",
          "xy² + y² − y³/3 = C",
          "xy³ + y³ − y⁴/4 = C",
          "xy³ + 3y³ − y⁴ = C"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "M_y = 1 and N_x = 3, so (N_x − M_y)/M = 2/y and IF = y². The equation becomes y³ dx + (3y² + 3xy² − y³)dy = 0, which is exact. Then ∫M dx = xy³, and the part of N free of x is 3y² − y³, which gives y³ − y⁴/4.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-ode-advanced-q06",
        "text": "The differential equation of the family y = Ax + A² (A arbitrary constant) has order and degree",
        "options": [
          "1, 1",
          "1, 2",
          "2, 1",
          "2, 2"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "differentiating gives y′ = A, so y = xy′ + (y′)². The order is 1 and the degree is 2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-ode-advanced-q07",
        "text": "If y satisfies dy/dx + 2xy = 4x with y(0) = 1, then y(1) =",
        "options": [
          "2 + 1/e",
          "1 − 1/e",
          "2 − e",
          "2 − 1/e"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "IF = e^(x²), so y e^(x²) = 2e^(x²) + C and y = 2 + Ce^(−x²). From y(0) = 1 we get C = −1, so y(1) = 2 − 1/e.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-ode-advanced-q08",
        "text": "The solution of dy/dx = 1/(x + y) is",
        "options": [
          "x = Ceʸ + y + 1",
          "x = Ce⁻ʸ − y − 1",
          "x = Ceʸ − y − 1",
          "x = Ceʸ − y + 1"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "write it as dx/dy = x + y, which is linear in x. The IF is e⁻ʸ, so x e⁻ʸ = ∫y e⁻ʸ dy = −(y + 1)e⁻ʸ + C. Hence x = Ceʸ − y − 1.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-ode-advanced-q09",
        "text": "If dy/dx = (x + y)/x with y(1) = 0, then y(e) =",
        "options": [
          "1",
          "e",
          "e²",
          "0"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "put y = vx. Then x v′ = 1, so v = ln x + C. From y(1) = 0 we get C = 0, so y = x ln x and y(e) = e.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-ode-advanced-q10",
        "text": "An integrating factor of (3x²y⁴ + 2xy)dx + (2x³y³ − x²)dy = 0 is",
        "options": [
          "y²",
          "1/y²",
          "1/y",
          "y"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "M = y(3x²y³ + 2x), and (N_x − M_y)/M = −2/y. So IF = e^(∫−2/y dy) = 1/y². After multiplying, the equation is exact.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 03",
        "autoGrade": true
      }
    ]
  },
  {
    "id": "math-ordinary-differential-equations-mixed",
    "levelId": "mixed",
    "name": "Mixed Practice",
    "level": "All levels",
    "difficulty": "MIXED",
    "duration": "20 min",
    "timeLimitSeconds": 1200,
    "color": "orange",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Ordinary Differential Equations",
    "subtitle": "10 objective questions · 20 min",
    "source": "Student-provided question set 04",
    "questions": [
      {
        "id": "math-ode-mixed-q01",
        "text": "The order and degree of (y‴)² + (y″)⁴ + y = x are",
        "options": [
          "2, 4",
          "3, 2",
          "3, 4",
          "2, 2"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "the highest derivative is y‴ with power 2, so the order is 3 and the degree is 2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-ode-mixed-q02",
        "text": "The solution of (1 + x²)dy + (1 + y²)dx = 0 is",
        "options": [
          "tan⁻¹x − tan⁻¹y = C",
          "x + y = C",
          "tan⁻¹x + tan⁻¹y = C",
          "ln(1 + x²) + ln(1 + y²) = C"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "dx/(1 + x²) + dy/(1 + y²) = 0 integrates to tan⁻¹x + tan⁻¹y = C.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-ode-mixed-q03",
        "text": "The solution of dy/dx + y = e⁻ˣ is",
        "options": [
          "y = (x + C)eˣ",
          "y = xeˣ + C",
          "y = e⁻ˣ + C",
          "y = (x + C)e⁻ˣ"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "IF = eˣ, so y eˣ = ∫1 dx = x + C, giving y = (x + C)e⁻ˣ.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-ode-mixed-q04",
        "text": "The solution of (x² − y²)dx + 2xy dy = 0 is",
        "options": [
          "x² − y² = Cx",
          "x² + y² = Cx",
          "x² + y² = C",
          "x² + y² = Cy"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "put y = vx. Then 1 + v² + 2v x v′ = 0, so 2v dv/(1 + v²) = −dx/x. This gives (1 + v²)x = C, i.e. x² + y² = Cx.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-ode-mixed-q05",
        "text": "To reduce dy/dx = (x + 2y + 3)/(2x + y + 3) to a homogeneous equation, we substitute x = X + h, y = Y + k, where (h, k) =",
        "options": [
          "(1, 1)",
          "(−1, −1)",
          "(−1, 1)",
          "(1, −1)"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "solving x + 2y + 3 = 0 and 2x + y + 3 = 0 gives x = −1, y = −1.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-ode-mixed-q06",
        "text": "The solution of dy/dx + y = y² is",
        "options": [
          "y = 1/(1 + Ce⁻ˣ)",
          "y = 1 + Ceˣ",
          "y = 1/(1 + Ceˣ)",
          "y = 1/(Ceˣ − 1)"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "put v = 1/y. Then v′ = v − 1, so v′ − v = −1 and v = 1 + Ceˣ. Hence y = 1/(1 + Ceˣ).",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-ode-mixed-q07",
        "text": "The solution of (2x + eʸ)dx + x eʸ dy = 0 is",
        "options": [
          "2x² + x eʸ = C",
          "x² + eʸ = C",
          "x² − x eʸ = C",
          "x² + x eʸ = C"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "M_y = eʸ = N_x, so the equation is exact. ∫M dx = x² + x eʸ, and N has no term free of x, so the solution is x² + x eʸ = C.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-ode-mixed-q08",
        "text": "Which of the following equations is exact?",
        "options": [
          "y dx − x dy = 0",
          "(x + y)dx + (x − y)dy = 0",
          "y dx + 2x dy = 0",
          "x dx + x dy = 0"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "for (x + y)dx + (x − y)dy, M_y = 1 = N_x. In the other options M_y ≠ N_x: A gives 1 and −1, C gives 1 and 2, D gives 0 and 1.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-ode-mixed-q09",
        "text": "The solution of dy/dx = 1/(x + y) is",
        "options": [
          "y + ln(x + y + 1) = C",
          "x − ln(x + y + 1) = C",
          "y − ln(x + y + 1) = C",
          "y = ln(x + y) + C"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "put v = x + y. Then v′ = 1 + 1/v = (v + 1)/v, so (v/(v + 1))dv = dx. This gives v − ln(v + 1) = x + C, i.e. y − ln(x + y + 1) = C.",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-ode-mixed-q10",
        "text": "If dy/dx = xy and y(0) = 2, then y(2) =",
        "options": [
          "e²",
          "2e⁴",
          "2e",
          "2e²"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "dy/y = x dx gives y = Ce^(x²/2). From y(0) = 2 we get C = 2, so y(2) = 2e².",
        "source": "Student-provided practice question",
        "sourcePaper": "Ordinary Differential Equations · Set 04",
        "autoGrade": true
      }
    ]
  }
]);
