// Vector Calculus practice sets provided by the student.
window.MANIT_DATA.chapterQuizSets.push(...[
  {
    "id": "math-vector-calculus-basic",
    "levelId": "basic",
    "name": "Basic Concepts",
    "level": "Foundation",
    "difficulty": "BASIC",
    "duration": "15 min",
    "timeLimitSeconds": 900,
    "color": "green",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Vector Calculus",
    "subtitle": "10 objective questions · 15 min",
    "source": "Student-provided question set 01",
    "questions": [
      {
        "id": "math-vector-basic-q01",
        "text": "If φ = x²y + yz, then ∇φ at (1, 1, 1) is",
        "options": [
          "2i + 2j + k",
          "i + 2j + k",
          "2i + j + k",
          "2i + 2j + 2k"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "∇φ = (2xy, x² + z, y) = (2, 2, 1) at (1, 1, 1).",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-vector-basic-q02",
        "text": "If F = x i + y j + z k, then div F =",
        "options": [
          "0",
          "1",
          "3",
          "r"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "∂x/∂x + ∂y/∂y + ∂z/∂z = 3.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-vector-basic-q03",
        "text": "If r = x i + y j + z k, then curl r =",
        "options": [
          "0",
          "3",
          "r",
          "2r"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "all the cross-partial terms cancel, so curl r = 0.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-vector-basic-q04",
        "text": "The directional derivative of φ = xyz at (1, 1, 1) in the direction of i + j + k is",
        "options": [
          "3",
          "√3",
          "1/√3",
          "3√3"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "∇φ = (yz, xz, xy) = (1, 1, 1). The unit direction is (1, 1, 1)/√3, so D = 3/√3 = √3.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-vector-basic-q05",
        "text": "The maximum rate of change of φ = x² + y² + z² at (1, 2, 2) is",
        "options": [
          "2",
          "4",
          "6",
          "9"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "the maximum rate is |∇φ| = |(2, 4, 4)| = √(4 + 16 + 16) = 6.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-vector-basic-q06",
        "text": "If F = y i + x j, then ∫ F·dr from (0, 0) to (1, 1) along y = x is",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "on y = x, F·dr = y dx + x dy = 2x dx, and ∫₀¹ 2x dx = 1.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-vector-basic-q07",
        "text": "If F = x² i + y² j + z² k, then div F at (1, 1, 1) is",
        "options": [
          "3",
          "6",
          "9",
          "0"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "div F = 2x + 2y + 2z = 6.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-vector-basic-q08",
        "text": "The value of ∮ (x dy − y dx) around the unit circle x² + y² = 1 is",
        "options": [
          "2π",
          "π",
          "4π",
          "0"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "with x = cos t, y = sin t, x dy − y dx = (cos²t + sin²t) dt = dt. So ∫₀^(2π) dt = 2π.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-vector-basic-q09",
        "text": "For r = x i + y j + z k, ∬ r·n dS over the unit sphere x² + y² + z² = 1 is",
        "options": [
          "4π/3",
          "3",
          "4π",
          "12π"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "by Gauss's theorem, ∬ r·n dS = ∭ 3 dV = 3 · (4π/3) = 4π.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 01",
        "autoGrade": true
      },
      {
        "id": "math-vector-basic-q10",
        "text": "The unit normal to the surface x² + y² + z² = 9 at (1, 2, 2) is",
        "options": [
          "(i + j + k)/√3",
          "(2i + j + 2k)/3",
          "i + 2j + 2k",
          "(i + 2j + 2k)/3"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "BASIC",
        "explanation": "∇φ = (2x, 2y, 2z) = (2, 4, 4), and |∇φ| = 6, so n = (i + 2j + 2k)/3.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 01",
        "autoGrade": true
      }
    ]
  },
  {
    "id": "math-vector-calculus-moderate",
    "levelId": "moderate",
    "name": "Moderate Questions",
    "level": "Intermediate",
    "difficulty": "MODERATE",
    "duration": "20 min",
    "timeLimitSeconds": 1200,
    "color": "blue",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Vector Calculus",
    "subtitle": "10 objective questions · 20 min",
    "source": "Student-provided question set 02",
    "questions": [
      {
        "id": "math-vector-moderate-q01",
        "text": "The directional derivative of φ = xy² + yz³ at (2, −1, 1) in the direction i + 2j + 2k is",
        "options": [
          "11/3",
          "−11/3",
          "11",
          "−11"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "∇φ = (y², 2xy + z³, 3yz²) = (1, −3, −3). The unit direction is (1, 2, 2)/3, so D = (1 − 6 − 6)/3 = −11/3.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-vector-moderate-q02",
        "text": "The cosine of the angle between the surfaces x² + y² + z² = 9 and z = x² + y² − 3 at (2, −1, 2) is",
        "options": [
          "16/√21",
          "4/(3√21)",
          "8/(3√21)",
          "8/(6√21)"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "∇φ₁ = (4, −2, 4) with |∇φ₁| = 6, and ∇φ₂ = (4, −2, −1) with |∇φ₂| = √21. The dot product is 16 + 4 − 4 = 16, so cos θ = 16/(6√21) = 8/(3√21).",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-vector-moderate-q03",
        "text": "F = (x + 3y) i + (y − 2z) j + (x + az) k is solenoidal if a =",
        "options": [
          "2",
          "1",
          "−1",
          "−2"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "div F = 1 + 1 + a = 0 gives a = −2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-vector-moderate-q04",
        "text": "F = (x + 2y + az) i + (bx − 3y − z) j + (4x + cy + 2z) k is irrotational. Then a + b + c =",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "the i, j and k components of curl F give c + 1 = 0, a − 4 = 0 and b − 2 = 0. So a = 4, b = 2, c = −1, and the sum is 5.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-vector-moderate-q05",
        "text": "A scalar potential of F = (2xy + z³) i + x² j + 3xz² k is",
        "options": [
          "x²y + xz³",
          "xy² + xz³",
          "x²y + x³z",
          "x²y + 3xz²"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "integrating gives φ = x²y + xz³, and ∇φ matches F.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-vector-moderate-q06",
        "text": "If F = x² i + xy j, then ∫ F·dr from (0, 0) to (1, 1) along y = x² is",
        "options": [
          "7/15",
          "11/15",
          "1",
          "13/15"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "on y = x², dy = 2x dx, so x² dx + x · x² · 2x dx = (x² + 2x⁴) dx. Then ∫₀¹ = 1/3 + 2/5 = 11/15.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-vector-moderate-q07",
        "text": "By Green's theorem, ∮ (xy dx + x² dy) around the square 0 ≤ x ≤ 1, 0 ≤ y ≤ 1 is",
        "options": [
          "1",
          "1/4",
          "1/2",
          "2"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "∂Q/∂x − ∂P/∂y = 2x − x = x, and ∬ x dA over the unit square = 1/2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-vector-moderate-q08",
        "text": "By Stokes' theorem, ∮ F·dr for F = −y i + x j around x² + y² = 9, z = 0, is",
        "options": [
          "9π",
          "18π",
          "6π",
          "36π"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "curl F = 2k, so the integral is 2 × area = 2 × 9π = 18π.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-vector-moderate-q09",
        "text": "By the Gauss divergence theorem, ∬ F·n dS for F = 4x i − 2y² j + z² k over the closed cylinder x² + y² = 4, 0 ≤ z ≤ 3, is",
        "options": [
          "84π",
          "48π",
          "36π",
          "120π"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "div F = 4 − 4y + 2z. The y-term integrates to 0 by symmetry. ∭ 4 dV = 4 · (π · 4 · 3) = 48π, and ∭ 2z dV = 2 · 4π · (9/2) = 36π. The total is 84π.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 02",
        "autoGrade": true
      },
      {
        "id": "math-vector-moderate-q10",
        "text": "∬ z dS over the upper hemisphere x² + y² + z² = a², z ≥ 0, is",
        "options": [
          "2πa³",
          "πa³/2",
          "πa³",
          "4πa³/3"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MODERATE",
        "explanation": "dS = a² sin θ dθ dφ and z = a cos θ, so the integral is a³ · 2π · ∫₀^(π/2) sin θ cos θ dθ = a³ · 2π · ½ = πa³.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 02",
        "autoGrade": true
      }
    ]
  },
  {
    "id": "math-vector-calculus-advanced",
    "levelId": "advanced",
    "name": "Advanced Questions",
    "level": "Challenge",
    "difficulty": "ADVANCED",
    "duration": "25 min",
    "timeLimitSeconds": 1500,
    "color": "violet",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Vector Calculus",
    "subtitle": "10 objective questions · 25 min",
    "source": "Student-provided question set 03",
    "questions": [
      {
        "id": "math-vector-advanced-q01",
        "text": "If ∇²(rⁿ) = 0 for r ≠ 0 and n ≠ 0, then n =",
        "options": [
          "−2",
          "−1",
          "1",
          "2"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "∇²(rⁿ) = n(n + 1) rⁿ⁻², which is zero for n = −1 (n ≠ 0).",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-vector-advanced-q02",
        "text": "div(r² r), where r = x i + y j + z k and r = |r|, equals",
        "options": [
          "3r²",
          "4r²",
          "5r²",
          "6r²"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "div(rⁿ r) = (n + 3) rⁿ, so with n = 2 we get 5r².",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-vector-advanced-q03",
        "text": "For φ = x² − y² + 2z², the directional derivative at P(1, 2, 3) in the direction of PQ, where Q = (5, 0, 4), is",
        "options": [
          "28/√21",
          "−28/√21",
          "28/21",
          "28"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "∇φ = (2x, −2y, 4z) = (2, −4, 12). PQ = (4, −2, 1) with |PQ| = √21. So D = (8 + 8 + 12)/√21 = 28/√21.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-vector-advanced-q04",
        "text": "For F = (2x − y) i − yz² j − y²z k, Stokes' theorem gives ∮ F·dr around the circle x² + y² = 1, z = 0, equal to",
        "options": [
          "0",
          "π",
          "2π",
          "−π"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "curl F = (−2yz + 2yz, 0, 0 − (−1)) = k. Over the unit disc, ∬ 1 dA = π.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-vector-advanced-q05",
        "text": "By Green's theorem, ∮ (y − sin x) dx + cos x dy around the triangle with vertices (0, 0), (π/2, 0), (π/2, 1) is",
        "options": [
          "π/4 + 2/π",
          "−π/4 + 2/π",
          "−π/4 − 2/π",
          "2/π − π/2"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "∂Q/∂x − ∂P/∂y = −sin x − 1. The region is 0 ≤ y ≤ 2x/π, 0 ≤ x ≤ π/2. The integral is −(2/π)[∫₀^(π/2) x sin x dx + ∫₀^(π/2) x dx] = −(2/π)(1 + π²/8) = −2/π − π/4.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-vector-advanced-q06",
        "text": "The flux of F = 2x i − y j + 4z k out of the unit sphere is",
        "options": [
          "20π/3",
          "5π",
          "10π/3",
          "20π"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "div F = 2 − 1 + 4 = 5, so the flux is 5 · (4π/3) = 20π/3.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-vector-advanced-q07",
        "text": "The work done by F = (2x − y + z) i + (x + y − z²) j + (3x − 2y + 4z) k around the circle x² + y² = 4, z = 0, is",
        "options": [
          "4π",
          "6π",
          "8π",
          "2π"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "curl F · k = ∂Q/∂x − ∂P/∂y = 1 − (−1) = 2. The flat disc has area 4π, so the work is 8π.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-vector-advanced-q08",
        "text": "For any vector field F and any closed surface S, ∬ (∇ × F)·n dS =",
        "options": [
          "1",
          "4π",
          "depends on S",
          "0"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "div(curl F) = 0 and S is closed, so the integral is 0.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-vector-advanced-q09",
        "text": "The work done by F = (y² cos x + z³) i + (2y sin x − 4) j + (3xz² + 2) k from (0, 1, −1) to (π/2, −1, 2) is",
        "options": [
          "15 + 4π",
          "9 + 4π",
          "6 + 4π",
          "21 + 4π"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "F = ∇φ with φ = y² sin x + xz³ − 4y + 2z. φ(π/2, −1, 2) = 1 + 4π + 4 + 4 = 9 + 4π and φ(0, 1, −1) = −4 − 2 = −6. The work is 15 + 4π.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 03",
        "autoGrade": true
      },
      {
        "id": "math-vector-advanced-q10",
        "text": "∬ F·n dS for F = z i + x j − 3y²z k over the part of the cylinder x² + y² = 16 in the first octant, 0 ≤ z ≤ 5, is",
        "options": [
          "45",
          "180",
          "90",
          "60"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "ADVANCED",
        "explanation": "n = (x i + y j)/4 and dS = 4 dθ dz. So F·n dS = (4z cos θ + 16 sin θ cos θ) dθ dz. Integrating over θ from 0 to π/2 and z from 0 to 5 gives 4 · (25/2) + 16 · (1/2) · 5 = 50 + 40 = 90.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 03",
        "autoGrade": true
      }
    ]
  },
  {
    "id": "math-vector-calculus-mixed",
    "levelId": "mixed",
    "name": "Mixed Practice",
    "level": "All levels",
    "difficulty": "MIXED",
    "duration": "20 min",
    "timeLimitSeconds": 1200,
    "color": "orange",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "chapter": "Vector Calculus",
    "subtitle": "10 objective questions · 20 min",
    "source": "Student-provided question set 04",
    "questions": [
      {
        "id": "math-vector-mixed-q01",
        "text": "∇r, where r = |r| and r = x i + y j + z k, equals",
        "options": [
          "r",
          "r/r",
          "r",
          "1/r"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "∂r/∂x = x/r, and similarly for y and z, so ∇r = r/r.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-vector-mixed-q02",
        "text": "For any scalar function φ, ∇ × (∇φ) =",
        "options": [
          "∇²φ",
          "φ",
          "0",
          "|∇φ|"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "the mixed partials cancel, so curl(grad φ) = 0.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-vector-mixed-q03",
        "text": "If F = yz i + zx j + xy k, then curl F =",
        "options": [
          "0",
          "i + j + k",
          "2(x i + y j + z k)",
          "r"
        ],
        "answer": 0,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "the i component is ∂(xy)/∂y − ∂(zx)/∂z = x − x = 0, and the j and k components vanish in the same way.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-vector-mixed-q04",
        "text": "The work done by F = 3xy i − 5z j + 10x k along x = t² + 1, y = 2t², z = t³ from t = 1 to t = 2 is",
        "options": [
          "288",
          "303",
          "315",
          "300"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "dx = 2t dt, dy = 4t dt, dz = 3t² dt. The integrand is 12t⁵ + 12t³ + 10t⁴ + 30t². Integrating from 1 to 2 gives 126 + 45 + 62 + 70 = 303.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-vector-mixed-q05",
        "text": "Using Green's theorem, the area of the ellipse x²/9 + y²/4 = 1 is",
        "options": [
          "3π",
          "12π",
          "6π",
          "36π"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "Area = ½ ∮ (x dy − y dx) = πab = π · 3 · 2 = 6π.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-vector-mixed-q06",
        "text": "∬ r·n dS over the sphere x² + y² + z² = 4 is",
        "options": [
          "32π/3",
          "16π",
          "64π",
          "32π"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "div r = 3, so the flux is 3 · (4π/3) · 2³ = 32π.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-vector-mixed-q07",
        "text": "∬ (x² i + y² j + z² k)·n dS over the sphere x² + y² + z² = a² is",
        "options": [
          "4πa³",
          "0",
          "2πa²",
          "8πa⁵/5"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "div F = 2(x + y + z). Over a sphere centred at the origin, x, y and z each integrate to 0 by symmetry, so the total is 0.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-vector-mixed-q08",
        "text": "The area of the part of the plane x + y + z = 1 in the first octant is",
        "options": [
          "1/2",
          "√3",
          "√3/2",
          "√2/2"
        ],
        "answer": 2,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "dS = √3 dx dy, and the projection onto the xy-plane is a triangle of area 1/2. So the area is √3/2.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-vector-mixed-q09",
        "text": "The maximum directional derivative of φ = xy + yz + zx at (1, 1, 1) is",
        "options": [
          "6",
          "2",
          "√3",
          "2√3"
        ],
        "answer": 3,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "∇φ = (y + z, x + z, x + y) = (2, 2, 2) at (1, 1, 1). The maximum directional derivative is |∇φ| = √12 = 2√3.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 04",
        "autoGrade": true
      },
      {
        "id": "math-vector-mixed-q10",
        "text": "By Green's theorem, ∮ (xy + y²) dx + x² dy around the closed curve bounded by y = x and y = x² is",
        "options": [
          "1/20",
          "−1/20",
          "1/12",
          "−1/12"
        ],
        "answer": 1,
        "marks": 1,
        "difficulty": "MIXED",
        "explanation": "∂Q/∂x − ∂P/∂y = 2x − (x + 2y) = x − 2y. The region is x² ≤ y ≤ x, 0 ≤ x ≤ 1, so the integral is ∫₀¹ [xy − y²] from x² to x dx = ∫₀¹ (x⁴ − x³) dx = 1/5 − 1/4 = −1/20.",
        "source": "Student-provided practice question",
        "sourcePaper": "Vector Calculus · Set 04",
        "autoGrade": true
      }
    ]
  }
]);
