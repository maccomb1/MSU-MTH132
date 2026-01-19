var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This project was made possible in large part by the support of Michigan State University and the College of Natural Science through the EDGE Fellowship awarded in Spring 2026. That fellowship provided the time and space necessary to meaningfully develop and refine these course notes, and I am deeply grateful for that support.  I am also indebted to Dr. Peter Magyar, who authored the first version of the MTH 132 course notes. In many places, this text builds directly on his structure, ideas, and exposition, and his work served as an essential foundation for what appears here.  Thanks are also due to the SIGMAA WEB group at Mathfest 2025, whose sessions clearly demonstrated how approachable and powerful PreTeXt can be. Their work and examples played an important role in lowering the barrier to getting this project off the ground.  If you spot any errors or unclear explanations please let me know. I welcome suggestions for improvement and corrections, and I would be grateful if readers would share feedback using the following Google Form: Feedback Form .     Ryan Maccombs  Michigan State University  January 2026   maccomb1@msu.edu    "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Students: How to Use this Book",
  "body": " Students: How to Use this Book  Welcome to MTH 132: Calculus I . This book has been created to guide you through the course, to support your in-class learning, and to give you a resource for independent study and practice.  Structure of the Book  The book is divided into chapters and sections that match the topics of the course. Each section may contain:   Definitions of important concepts.  Theorems that summarize key results.  Examples to illustrate ideas and methods.  Exercises for you to practice and check understanding.  Remarks and alerts that highlight common pitfalls or important insights.   How to Approach Each Section  Here are some suggestions for making the most of each section:   Before class: Skim the definitions, theorems, and examples. Preview the exercises.  During class: Focus on interactive examples and problem-solving activities with your peers and instructor.  After class: Revisit the examples, complete the exercises, and check solutions or hints when provided.   Exercises and Practice  Exercises are a central part of learning calculus. You will find:   Conceptual checks to test your understanding of definitions and theorems.  Computational practice to build fluency with calculations and algebraic techniques.  Applications that connect calculus to real-world situations.   Some exercises will resemble questions on WeBWorK, quizzes, or exams, while others are meant for practice and exploration.  Technology and Tools  This book makes use of graphs, figures, and sometimes interactive elements (such as Desmos activities). A scientific calculator or graphing tool may be helpful, especially when you are first learning new concepts. However, calculators should not become a crutch—the main goal is to understand the ideas and be able to carry out the work by hand. Be aware that calculator use may be restricted or not allowed at all on quizzes and exams, so practicing without a calculator is important preparation.  Connections to Course Materials  This book works alongside other course resources:   D2L for announcements, grades, and course structure.  WeBWorK for online homework practice.  Recitations and weekly reviews for collaborative practice.  Quizzes and exams for formal assessment.   Study Strategies  Some tips for success:   Practice actively: work through examples, don’t just read them.  Collaborate with classmates and discuss your reasoning.  Always show your work and leave answers in exact form when possible.  Interpret results and think about what they mean in context.   Accessibility and Flexibility  This book has been designed with accessibility in mind. Figures include alt text, and the content can be navigated easily.  Final Encouragement  Remember: this book is a tool, not just a reference. Stay engaged, practice often, and combine it with the support of your instructors, TAs, and the Math Learning Center. With steady effort, you will succeed in calculus.  "
},
{
  "id": "sec-precalc-basics",
  "level": "1",
  "url": "sec-precalc-basics.html",
  "type": "Section",
  "number": "0.1",
  "title": "Arithmetic Basics",
  "body": " Arithmetic Basics  Before starting calculus, it is important to be comfortable with basic arithmetic and algebraic rules. Many difficulties students experience in calculus come not from new ideas, but from small algebra mistakes. This section reviews core skills that will be used repeatedly throughout the course.   Signs  We begin with rules involving negative signs. These rules appear constantly when simplifying expressions, computing slopes, and working with limits. Being fluent with sign changes will help prevent many common errors later on.    For any real numbers and ,       Simplify .         Fractions and Rational Expressions  Fractions appear frequently in calculus, especially in limits and derivatives. Careful fraction manipulation is essential for simplifying expressions correctly.    Assume are real numbers with and .       Simplify .         Distributive Law and Common Errors  Many fraction and sign errors come from misusing the distributive law. This law explains how multiplication interacts with addition and subtraction. Understanding when it applies, and when it does not, is critical for algebraic simplification.         Use the distributive law to simplify .         Simplify .    Apply the distributive law to the numerator:      The distributive law does not apply to square roots, powers, or denominators.      Powers and Rational Exponents  Exponent rules allow us to rewrite and simplify expressions efficiently, which is especially important when computing limits and derivatives.    Assume and are real numbers.       Simplify .         Rewrite using a radical.         Rationalizing the Denominator  Finally, let's review rationalizing the denominator. Rationalizing removes square roots from denominators. This technique appears often in limits.          Rationalize .         Rationalize .        "
},
{
  "id": "ax-sign-rules",
  "level": "2",
  "url": "sec-precalc-basics.html#ax-sign-rules",
  "type": "Principle",
  "number": "0.1.1",
  "title": "",
  "body": "  For any real numbers and ,    "
},
{
  "id": "ssec-whole-numbers-signs-4",
  "level": "2",
  "url": "sec-precalc-basics.html#ssec-whole-numbers-signs-4",
  "type": "Example",
  "number": "0.1.2",
  "title": "",
  "body": "  Simplify .      "
},
{
  "id": "ax-fraction-operations",
  "level": "2",
  "url": "sec-precalc-basics.html#ax-fraction-operations",
  "type": "Principle",
  "number": "0.1.3",
  "title": "",
  "body": "  Assume are real numbers with and .    "
},
{
  "id": "ssec-fractions-4",
  "level": "2",
  "url": "sec-precalc-basics.html#ssec-fractions-4",
  "type": "Example",
  "number": "0.1.4",
  "title": "",
  "body": "  Simplify .      "
},
{
  "id": "ax-distributive-law",
  "level": "2",
  "url": "sec-precalc-basics.html#ax-distributive-law",
  "type": "Principle",
  "number": "0.1.5",
  "title": "",
  "body": "    "
},
{
  "id": "ex-distributive-basic",
  "level": "2",
  "url": "sec-precalc-basics.html#ex-distributive-basic",
  "type": "Example",
  "number": "0.1.6",
  "title": "",
  "body": "  Use the distributive law to simplify .      "
},
{
  "id": "ex-distributive-fraction",
  "level": "2",
  "url": "sec-precalc-basics.html#ex-distributive-fraction",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Simplify .    Apply the distributive law to the numerator:    "
},
{
  "id": "ssec-distributive-6",
  "level": "2",
  "url": "sec-precalc-basics.html#ssec-distributive-6",
  "type": "Remark",
  "number": "0.1.8",
  "title": "",
  "body": " The distributive law does not apply to square roots, powers, or denominators.   "
},
{
  "id": "pr-exponent-laws",
  "level": "2",
  "url": "sec-precalc-basics.html#pr-exponent-laws",
  "type": "Principle",
  "number": "0.1.9",
  "title": "",
  "body": "  Assume and are real numbers.    "
},
{
  "id": "ssec-exponents-4",
  "level": "2",
  "url": "sec-precalc-basics.html#ssec-exponents-4",
  "type": "Example",
  "number": "0.1.10",
  "title": "",
  "body": "  Simplify .      "
},
{
  "id": "ssec-exponents-5",
  "level": "2",
  "url": "sec-precalc-basics.html#ssec-exponents-5",
  "type": "Example",
  "number": "0.1.11",
  "title": "",
  "body": "  Rewrite using a radical.      "
},
{
  "id": "thm-rationalize",
  "level": "2",
  "url": "sec-precalc-basics.html#thm-rationalize",
  "type": "Principle",
  "number": "0.1.12",
  "title": "",
  "body": "     "
},
{
  "id": "ssec-rationalizing-4",
  "level": "2",
  "url": "sec-precalc-basics.html#ssec-rationalizing-4",
  "type": "Example",
  "number": "0.1.13",
  "title": "",
  "body": "  Rationalize .      "
},
{
  "id": "ssec-rationalizing-5",
  "level": "2",
  "url": "sec-precalc-basics.html#ssec-rationalizing-5",
  "type": "Example",
  "number": "0.1.14",
  "title": "",
  "body": "  Rationalize .      "
},
{
  "id": "sec-precalc-factor",
  "level": "1",
  "url": "sec-precalc-factor.html",
  "type": "Section",
  "number": "0.2",
  "title": "Factoring",
  "body": " Factoring  Factoring is one of the most important algebra skills for calculus. Many problems in limits, derivatives, and integrals require expressions to be simplified before any calculus ideas can be applied. In this section, we review the most common factoring techniques, starting from very basic patterns and gradually building toward the types of expressions that appear in calculus problems.    Factoring Out a Greatest Common Factor  The first and most important factoring technique is factoring out the greatest common factor. If every term in an expression shares a common factor, that factor can be factored out.    If every term of an expression contains a factor , then       Factor .    Both terms share a factor of .       Factor .    Both terms share a factor of .       Factor .    Both terms share a factor of . Factoring out a negative sign is often helpful.      Always check for a greatest common factor first. Many factoring mistakes come from skipping this step.      Difference of Squares  One of the most common factoring patterns is the difference of squares. This pattern appears frequently in limits and rational expressions.         Factor .    Recognize .       Factor .    Rewrite each term as a square.       Simplify for .    Factor the numerator.      The sum of squares does not factor over the real numbers.      Perfect Square Trinomials  Some trinomials arise from squaring a binomial. Recognizing these patterns allows quick factoring.         Factor .    The middle term matches with and .       Factor .          Factoring General Trinomials Using the AC Method  Not all trinomials factor easily by inspection. For expressions of the form , the AC method provides a systematic way to factor. This method is especially useful when the leading coefficient is not equal to 1, and it works equally well when it is.    To factor using the AC method:   Compute the product .  Find two numbers whose product is and whose sum is .  Rewrite the middle term using these two numbers.  Factor by grouping.       Factor using the AC method.    Step 1: Identify , , and .   Step 2: Compute .   Step 3: Find two numbers that multiply to and add to .   Step 4: Rewrite the middle term and factor by grouping.       Factor using the AC method.    Step 1: Identify , , and .   Step 2: Compute .   Step 3: Find two numbers that multiply to and add to .   Step 4: Rewrite the middle term and factor by grouping.      The AC method always works when a trinomial factors over the real numbers. With practice, you may recognize factors quickly, but this method provides a dependable fallback when guessing is difficult.      Supplemental Video Resources  The following is a curated set of videos that many students find helpful. They provide additional explanations and worked examples for common factoring techniques used throughout calculus.    How To Factor Polynomials The Easy Way!    Difference of squares explained    Perfect square trinomials    Factoring by grouping    Factoring to simplify rational expressions     "
},
{
  "id": "pr-factor-gcf",
  "level": "2",
  "url": "sec-precalc-factor.html#pr-factor-gcf",
  "type": "Principle",
  "number": "0.2.1",
  "title": "",
  "body": "  If every term of an expression contains a factor , then    "
},
{
  "id": "ssec-factor-gcf-4",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-gcf-4",
  "type": "Example",
  "number": "0.2.2",
  "title": "",
  "body": "  Factor .    Both terms share a factor of .    "
},
{
  "id": "ssec-factor-gcf-5",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-gcf-5",
  "type": "Example",
  "number": "0.2.3",
  "title": "",
  "body": "  Factor .    Both terms share a factor of .    "
},
{
  "id": "ssec-factor-gcf-6",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-gcf-6",
  "type": "Example",
  "number": "0.2.4",
  "title": "",
  "body": "  Factor .    Both terms share a factor of . Factoring out a negative sign is often helpful.    "
},
{
  "id": "ssec-factor-gcf-7",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-gcf-7",
  "type": "Remark",
  "number": "0.2.5",
  "title": "",
  "body": " Always check for a greatest common factor first. Many factoring mistakes come from skipping this step.  "
},
{
  "id": "pr-difference-squares",
  "level": "2",
  "url": "sec-precalc-factor.html#pr-difference-squares",
  "type": "Principle",
  "number": "0.2.6",
  "title": "",
  "body": "    "
},
{
  "id": "ssec-factor-difference-squares-4",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-difference-squares-4",
  "type": "Example",
  "number": "0.2.7",
  "title": "",
  "body": "  Factor .    Recognize .    "
},
{
  "id": "ssec-factor-difference-squares-5",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-difference-squares-5",
  "type": "Example",
  "number": "0.2.8",
  "title": "",
  "body": "  Factor .    Rewrite each term as a square.    "
},
{
  "id": "ssec-factor-difference-squares-6",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-difference-squares-6",
  "type": "Example",
  "number": "0.2.9",
  "title": "",
  "body": "  Simplify for .    Factor the numerator.    "
},
{
  "id": "ssec-factor-difference-squares-7",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-difference-squares-7",
  "type": "Remark",
  "number": "0.2.10",
  "title": "",
  "body": " The sum of squares does not factor over the real numbers.  "
},
{
  "id": "pr-perfect-square",
  "level": "2",
  "url": "sec-precalc-factor.html#pr-perfect-square",
  "type": "Principle",
  "number": "0.2.11",
  "title": "",
  "body": "    "
},
{
  "id": "ssec-factor-perfect-squares-4",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-perfect-squares-4",
  "type": "Example",
  "number": "0.2.12",
  "title": "",
  "body": "  Factor .    The middle term matches with and .    "
},
{
  "id": "ssec-factor-perfect-squares-5",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-perfect-squares-5",
  "type": "Example",
  "number": "0.2.13",
  "title": "",
  "body": "  Factor .      "
},
{
  "id": "pr-ac-method",
  "level": "2",
  "url": "sec-precalc-factor.html#pr-ac-method",
  "type": "Strategy",
  "number": "0.2.14",
  "title": "",
  "body": "  To factor using the AC method:   Compute the product .  Find two numbers whose product is and whose sum is .  Rewrite the middle term using these two numbers.  Factor by grouping.    "
},
{
  "id": "ssec-factor-general-trinomials-4",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-general-trinomials-4",
  "type": "Example",
  "number": "0.2.15",
  "title": "",
  "body": "  Factor using the AC method.    Step 1: Identify , , and .   Step 2: Compute .   Step 3: Find two numbers that multiply to and add to .   Step 4: Rewrite the middle term and factor by grouping.    "
},
{
  "id": "ssec-factor-general-trinomials-5",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-general-trinomials-5",
  "type": "Example",
  "number": "0.2.16",
  "title": "",
  "body": "  Factor using the AC method.    Step 1: Identify , , and .   Step 2: Compute .   Step 3: Find two numbers that multiply to and add to .   Step 4: Rewrite the middle term and factor by grouping.    "
},
{
  "id": "ssec-factor-general-trinomials-6",
  "level": "2",
  "url": "sec-precalc-factor.html#ssec-factor-general-trinomials-6",
  "type": "Remark",
  "number": "0.2.17",
  "title": "",
  "body": " The AC method always works when a trinomial factors over the real numbers. With practice, you may recognize factors quickly, but this method provides a dependable fallback when guessing is difficult.  "
},
{
  "id": "sec-precalc-funcs",
  "level": "1",
  "url": "sec-precalc-funcs.html",
  "type": "Section",
  "number": "0.3",
  "title": "Functions and Inverses",
  "body": " Functions and Inverses  This section reviews functions, function composition, and introduces inverse functions from both an algebraic and conceptual perspective.    Functions and Notation  A function assigns exactly one output to each input. We typically write a function using function notation, such as .   Function   A function is a rule that assigns to each input in its domain exactly one output, denoted .      Let . Find .          Function Composition  Function composition describes applying one function to the output of another. Composition is important because inverse functions are defined in terms of composition.   Function Composition   If and are functions, the composition of with is defined by       Let and . Find .        In general, and are not the same.      Inverse Functions  An inverse function reverses the action of a function. When a function and its inverse are composed, the result is the original input.   Inverse Function   A function has an inverse , denoted , if      Not every function has an inverse. A function must be one-to-one , meaning different inputs produce different outputs.      Finding Inverses Algebraically  To find an inverse function algebraically, we solve the equation for and then interchange the roles of and .    Find the inverse of .    Step 1: Write the equation .  Step 2: Solve for .   Step 3: Interchange and .        Important Examples of Inverse Functions  Several inverse function pairs appear repeatedly in calculus. These relationships are important to recognize and remember.    The exponential function and the natural logarithm are inverses.         Trigonometric functions also have inverses. For example, and are inverse functions when appropriate domain restrictions are used.        Inverse trigonometric functions require restricted domains so that they are one-to-one.      Supplemental Video Resources  The following is a curated set of videos that many students find helpful. They provide additional explanations and visual intuition for functions, function composition, and inverse functions.    What is a function?    Function notation explained    Function composition    Composing functions with examples    Inverse functions and one-to-one functions    Finding inverse functions algebraically    Inverse trigonometric functions explained     "
},
{
  "id": "def-function",
  "level": "2",
  "url": "sec-precalc-funcs.html#def-function",
  "type": "Definition",
  "number": "0.3.1",
  "title": "Function.",
  "body": " Function   A function is a rule that assigns to each input in its domain exactly one output, denoted .   "
},
{
  "id": "ssec-function-review-4",
  "level": "2",
  "url": "sec-precalc-funcs.html#ssec-function-review-4",
  "type": "Example",
  "number": "0.3.2",
  "title": "",
  "body": "  Let . Find .      "
},
{
  "id": "def-composition",
  "level": "2",
  "url": "sec-precalc-funcs.html#def-composition",
  "type": "Definition",
  "number": "0.3.3",
  "title": "Function Composition.",
  "body": " Function Composition   If and are functions, the composition of with is defined by    "
},
{
  "id": "ssec-composition-4",
  "level": "2",
  "url": "sec-precalc-funcs.html#ssec-composition-4",
  "type": "Example",
  "number": "0.3.4",
  "title": "",
  "body": "  Let and . Find .      "
},
{
  "id": "ssec-composition-5",
  "level": "2",
  "url": "sec-precalc-funcs.html#ssec-composition-5",
  "type": "Remark",
  "number": "0.3.5",
  "title": "",
  "body": " In general, and are not the same.  "
},
{
  "id": "def-inverse-function",
  "level": "2",
  "url": "sec-precalc-funcs.html#def-inverse-function",
  "type": "Definition",
  "number": "0.3.6",
  "title": "Inverse Function.",
  "body": " Inverse Function   A function has an inverse , denoted , if    "
},
{
  "id": "ssec-inverses-4",
  "level": "2",
  "url": "sec-precalc-funcs.html#ssec-inverses-4",
  "type": "Remark",
  "number": "0.3.7",
  "title": "",
  "body": " Not every function has an inverse. A function must be one-to-one , meaning different inputs produce different outputs.  "
},
{
  "id": "ssec-finding-inverses-3",
  "level": "2",
  "url": "sec-precalc-funcs.html#ssec-finding-inverses-3",
  "type": "Example",
  "number": "0.3.8",
  "title": "",
  "body": "  Find the inverse of .    Step 1: Write the equation .  Step 2: Solve for .   Step 3: Interchange and .    "
},
{
  "id": "ex-precalc-expInv",
  "level": "2",
  "url": "sec-precalc-funcs.html#ex-precalc-expInv",
  "type": "Example",
  "number": "0.3.9",
  "title": "",
  "body": "  The exponential function and the natural logarithm are inverses.      "
},
{
  "id": "ssec-special-inverses-4",
  "level": "2",
  "url": "sec-precalc-funcs.html#ssec-special-inverses-4",
  "type": "Example",
  "number": "0.3.10",
  "title": "",
  "body": "  Trigonometric functions also have inverses. For example, and are inverse functions when appropriate domain restrictions are used.      "
},
{
  "id": "ssec-special-inverses-5",
  "level": "2",
  "url": "sec-precalc-funcs.html#ssec-special-inverses-5",
  "type": "Remark",
  "number": "0.3.11",
  "title": "",
  "body": " Inverse trigonometric functions require restricted domains so that they are one-to-one.  "
},
{
  "id": "sec-precalc-ineq",
  "level": "1",
  "url": "sec-precalc-ineq.html",
  "type": "Section",
  "number": "0.4",
  "title": "Inequalities",
  "body": " Inequalities  Inequalities appear throughout calculus, especially when describing domains, intervals of increase or decrease, and where functions are positive or negative. Unlike equations, inequalities often have many solutions. In this section, we focus on a single systematic approach, the test point method, which works reliably for many types of inequalities.  The key idea behind the test point method is simple. We first determine where an expression could change sign, then test representative points from each interval. This approach emphasizes understanding over memorization and reduces common algebra mistakes.    The Test Point Method: Overview  The test point method is used to solve inequalities of the form , , , or . Instead of solving directly, we analyze where the function is positive or negative.    To solve an inequality using test points:   Rewrite the inequality so that one side is zero.  Find all values of where the expression equals zero or is undefined.  Use these values to divide the number line into intervals.  Choose one test point from each interval.  Determine which intervals satisfy the inequality.      The test point method works best when the expression is factored. This is why factoring is a critical prerequisite for inequalities.      Several Examples  Now let's see this modeled in several examples!   Linear Example   Solve .    Step 1: Identify where the expression equals zero.   Step 2: Use to divide the number line into intervals.  Step 3: Test a point from each interval.   Step 4: Choose the interval where the expression is positive.  The solution is .     Quadratic Example   Solve .    Step 1: Factor the expression.   Step 2: Identify critical points.   Step 3: Test one point in each interval.   Step 4: Include intervals where the expression is zero or negative.  The solution is .    Rational inequalities require special care because the expression may be undefined for certain values of . As we saw in our technique, these values must always be considered when dividing the number line into intervals.   Rational Example   Solve .    Step 1: Rewrite the inequality so it is a single rational expression.   Step 2: Identify where the expression is zero or undefined.   Step 3: Use these values to divide the number line into intervals.  The critical points are , , and .  Step 4: Choose a test point in each interval.   Step 5: Select intervals where the expression is positive.  Since the inequality is strict, points where the expression equals zero are not included.  The solution is   or .       Supplemental Video Resources  The following is a curated set of videos that many students find helpful. They provide additional explanations and worked examples for solving inequalities using the test point method.    Solving inequalities using sign charts    Polynomial inequalities using the test point method    Quadratic Inequalities    Rational inequalities using a sign chart     "
},
{
  "id": "pr-test-point-method",
  "level": "2",
  "url": "sec-precalc-ineq.html#pr-test-point-method",
  "type": "Strategy",
  "number": "0.4.1",
  "title": "",
  "body": "  To solve an inequality using test points:   Rewrite the inequality so that one side is zero.  Find all values of where the expression equals zero or is undefined.  Use these values to divide the number line into intervals.  Choose one test point from each interval.  Determine which intervals satisfy the inequality.    "
},
{
  "id": "ssec-ineq-overview-4",
  "level": "2",
  "url": "sec-precalc-ineq.html#ssec-ineq-overview-4",
  "type": "Remark",
  "number": "0.4.2",
  "title": "",
  "body": " The test point method works best when the expression is factored. This is why factoring is a critical prerequisite for inequalities.  "
},
{
  "id": "ssec-ineq-examples-3",
  "level": "2",
  "url": "sec-precalc-ineq.html#ssec-ineq-examples-3",
  "type": "Example",
  "number": "0.4.3",
  "title": "Linear Example.",
  "body": " Linear Example   Solve .    Step 1: Identify where the expression equals zero.   Step 2: Use to divide the number line into intervals.  Step 3: Test a point from each interval.   Step 4: Choose the interval where the expression is positive.  The solution is .   "
},
{
  "id": "ssec-ineq-examples-4",
  "level": "2",
  "url": "sec-precalc-ineq.html#ssec-ineq-examples-4",
  "type": "Example",
  "number": "0.4.4",
  "title": "Quadratic Example.",
  "body": " Quadratic Example   Solve .    Step 1: Factor the expression.   Step 2: Identify critical points.   Step 3: Test one point in each interval.   Step 4: Include intervals where the expression is zero or negative.  The solution is .   "
},
{
  "id": "ssec-ineq-examples-6",
  "level": "2",
  "url": "sec-precalc-ineq.html#ssec-ineq-examples-6",
  "type": "Example",
  "number": "0.4.5",
  "title": "Rational Example.",
  "body": " Rational Example   Solve .    Step 1: Rewrite the inequality so it is a single rational expression.   Step 2: Identify where the expression is zero or undefined.   Step 3: Use these values to divide the number line into intervals.  The critical points are , , and .  Step 4: Choose a test point in each interval.   Step 5: Select intervals where the expression is positive.  Since the inequality is strict, points where the expression equals zero are not included.  The solution is   or .   "
},
{
  "id": "sec-precalc-absval",
  "level": "1",
  "url": "sec-precalc-absval.html",
  "type": "Section",
  "number": "0.5",
  "title": "Absolute Values",
  "body": " Absolute Values  Absolute value equations appear frequently in algebra and calculus. They are used to describe distance, error bounds, and tolerances. The emphasis is on understanding what absolute value means and applying that meaning systematically.    Definitions of Absolute Value   Absolute Value   For any real number , the absolute value of , written , is defined by   Geometrically, represents the distance from to on the number line.     These two definitions describe the same quantity. The distance definition is often more intuitive, while the piecewise definition is more useful for algebraic manipulation.      Solving Basic Absolute Value Equations  We begin with equations of the form , where is a nonnegative number.    If , then       Solve .    The distance from to is . This occurs at two points.       Solve .    Step 1: Write two equations.   Step 2: Solve each equation.   The solution set is or .      Solve .    Step 1: Use the definition of absolute value to write two equations.   Step 2: Solve each equation separately.  First equation:   Second equation:   This equation has no real solutions.  Step 3: Combine the solutions.  The solution set is or .        When Absolute Value Equations Have No Solution  Absolute value is never negative. This observation allows us to immediately identify equations that have no solution.    Solve .    Since absolute value is always nonnegative, this equation has no solution.        Supplemental Video Resources  The following is a curated set of videos that many students find helpful. They provide additional explanations and worked examples for understanding absolute value and solving absolute value equations.    What is absolute value? Distance on the number line    Solving absolute value equations    Absolute value equations with quadratics     "
},
{
  "id": "def-absolute-value",
  "level": "2",
  "url": "sec-precalc-absval.html#def-absolute-value",
  "type": "Definition",
  "number": "0.5.1",
  "title": "Absolute Value.",
  "body": " Absolute Value   For any real number , the absolute value of , written , is defined by   Geometrically, represents the distance from to on the number line.   "
},
{
  "id": "ssec-abs-definitions-3",
  "level": "2",
  "url": "sec-precalc-absval.html#ssec-abs-definitions-3",
  "type": "Remark",
  "number": "0.5.2",
  "title": "",
  "body": " These two definitions describe the same quantity. The distance definition is often more intuitive, while the piecewise definition is more useful for algebraic manipulation.  "
},
{
  "id": "pr-abs-equals-constant",
  "level": "2",
  "url": "sec-precalc-absval.html#pr-abs-equals-constant",
  "type": "Principle",
  "number": "0.5.3",
  "title": "",
  "body": "  If , then    "
},
{
  "id": "ssec-abs-basic-equations-4",
  "level": "2",
  "url": "sec-precalc-absval.html#ssec-abs-basic-equations-4",
  "type": "Example",
  "number": "0.5.4",
  "title": "",
  "body": "  Solve .    The distance from to is . This occurs at two points.    "
},
{
  "id": "ssec-abs-basic-equations-5",
  "level": "2",
  "url": "sec-precalc-absval.html#ssec-abs-basic-equations-5",
  "type": "Example",
  "number": "0.5.5",
  "title": "",
  "body": "  Solve .    Step 1: Write two equations.   Step 2: Solve each equation.   The solution set is or .   "
},
{
  "id": "ssec-abs-basic-equations-6",
  "level": "2",
  "url": "sec-precalc-absval.html#ssec-abs-basic-equations-6",
  "type": "Example",
  "number": "0.5.6",
  "title": "",
  "body": "  Solve .    Step 1: Use the definition of absolute value to write two equations.   Step 2: Solve each equation separately.  First equation:   Second equation:   This equation has no real solutions.  Step 3: Combine the solutions.  The solution set is or .   "
},
{
  "id": "ssec-abs-no-solution-3",
  "level": "2",
  "url": "sec-precalc-absval.html#ssec-abs-no-solution-3",
  "type": "Example",
  "number": "0.5.7",
  "title": "",
  "body": "  Solve .    Since absolute value is always nonnegative, this equation has no solution.   "
},
{
  "id": "sec-precalc-exp",
  "level": "1",
  "url": "sec-precalc-exp.html",
  "type": "Section",
  "number": "0.6",
  "title": "Exponentials",
  "body": " Exponentials  Exponential functions play a central role in calculus and its applications. They model growth and decay processes such as population change, compound interest, radioactive decay, and cooling. In this section, we review the algebraic structure of exponential functions and the key properties that will be used repeatedly throughout the course.    Exponential Functions   Exponential Function   An exponential function is a function of the form   where and is a constant called the base .     In an exponential function, the variable appears in the exponent. This distinguishes exponential functions from power functions such as , where the variable is the base.     Identify which of the following functions are exponential: , , , .    The exponential functions are and , since the variable appears only in the exponent. The expressions and are not exponential functions.       Laws of Exponents  The laws of exponents allow us to simplify exponential expressions and are essential tools for solving equations involving exponentials.   Laws of Exponents   For and real numbers and ,       Simplify the expression .          Solving Exponential Equations  Many exponential equations can be solved by rewriting both sides with the same base and then equating the exponents.    Solve the equation .    Rewrite as a power of 2:   Then equate exponents:      When exponential equations cannot be written with the same base, logarithms will be required showcased in the next section.      The Natural Base  Among all exponential functions, one base is especially important in calculus: the number , approximately equal to .   Natural Exponential Function   The natural exponential function is defined by .     The function has the special property that its derivative is equal to itself. Because of this, it is often algebraically simpler to work with base when taking derivatives and integrals.     Rewrite using base .    We begin by recalling that from natural logarithm and the exponential function are inverse functions. In particular, for any positive number ,   Applying this identity with , we can rewrite the base:   Now substitute this expression for into :   Using the exponent rule , we simplify:   Therefore, the exponential function written in terms of base is   Writing exponentials in this form is especially useful in calculus, since derivatives and integrals involving are simpler to compute.       Supplemental Video Resources  The following is a curated set of videos that many students find helpful. They provide additional explanations and visual intuition for exponential functions and their role in calculus.    Introduction to exponential functions    Exponential growth and decay explained visually    Exponential and logarithmic functions as inverses    Understanding e^x and ln(x)    Why base e the Natural Number    Solving exponential equations     "
},
{
  "id": "def-exponential-function",
  "level": "2",
  "url": "sec-precalc-exp.html#def-exponential-function",
  "type": "Definition",
  "number": "0.6.1",
  "title": "Exponential Function.",
  "body": " Exponential Function   An exponential function is a function of the form   where and is a constant called the base .   "
},
{
  "id": "ssec-exp-def-3",
  "level": "2",
  "url": "sec-precalc-exp.html#ssec-exp-def-3",
  "type": "Remark",
  "number": "0.6.2",
  "title": "",
  "body": " In an exponential function, the variable appears in the exponent. This distinguishes exponential functions from power functions such as , where the variable is the base.  "
},
{
  "id": "ssec-exp-def-4",
  "level": "2",
  "url": "sec-precalc-exp.html#ssec-exp-def-4",
  "type": "Example",
  "number": "0.6.3",
  "title": "",
  "body": "  Identify which of the following functions are exponential: , , , .    The exponential functions are and , since the variable appears only in the exponent. The expressions and are not exponential functions.   "
},
{
  "id": "thm-exp-laws",
  "level": "2",
  "url": "sec-precalc-exp.html#thm-exp-laws",
  "type": "Theorem",
  "number": "0.6.4",
  "title": "Laws of Exponents.",
  "body": " Laws of Exponents   For and real numbers and ,    "
},
{
  "id": "ssec-exp-laws-4",
  "level": "2",
  "url": "sec-precalc-exp.html#ssec-exp-laws-4",
  "type": "Example",
  "number": "0.6.5",
  "title": "",
  "body": "  Simplify the expression .      "
},
{
  "id": "ssec-exp-equations-3",
  "level": "2",
  "url": "sec-precalc-exp.html#ssec-exp-equations-3",
  "type": "Example",
  "number": "0.6.6",
  "title": "",
  "body": "  Solve the equation .    Rewrite as a power of 2:   Then equate exponents:    "
},
{
  "id": "ssec-exp-equations-4",
  "level": "2",
  "url": "sec-precalc-exp.html#ssec-exp-equations-4",
  "type": "Remark",
  "number": "0.6.7",
  "title": "",
  "body": " When exponential equations cannot be written with the same base, logarithms will be required showcased in the next section.  "
},
{
  "id": "def-natural-exp",
  "level": "2",
  "url": "sec-precalc-exp.html#def-natural-exp",
  "type": "Definition",
  "number": "0.6.8",
  "title": "Natural Exponential Function.",
  "body": " Natural Exponential Function   The natural exponential function is defined by .   "
},
{
  "id": "ssec-base-e-4",
  "level": "2",
  "url": "sec-precalc-exp.html#ssec-base-e-4",
  "type": "Remark",
  "number": "0.6.9",
  "title": "",
  "body": " The function has the special property that its derivative is equal to itself. Because of this, it is often algebraically simpler to work with base when taking derivatives and integrals.  "
},
{
  "id": "ssec-base-e-5",
  "level": "2",
  "url": "sec-precalc-exp.html#ssec-base-e-5",
  "type": "Example",
  "number": "0.6.10",
  "title": "",
  "body": "  Rewrite using base .    We begin by recalling that from natural logarithm and the exponential function are inverse functions. In particular, for any positive number ,   Applying this identity with , we can rewrite the base:   Now substitute this expression for into :   Using the exponent rule , we simplify:   Therefore, the exponential function written in terms of base is   Writing exponentials in this form is especially useful in calculus, since derivatives and integrals involving are simpler to compute.   "
},
{
  "id": "sec-precalc-log",
  "level": "1",
  "url": "sec-precalc-log.html",
  "type": "Section",
  "number": "0.7",
  "title": "Logarithms",
  "body": " Logarithms  Logarithmic functions arise naturally as the inverse of exponential functions. They allow us to solve equations where the variable appears in the exponent and play a central role in calculus, particularly when working with growth and decay models.    Logarithms as Inverse Functions   Logarithm   Let with . The logarithm base of a positive number is defined by      Logarithms undo exponentiation. This definition makes precise the idea that logarithms and exponentials are inverse functions.     Evaluate .    We look for the exponent to which 2 must be raised to obtain 8. Since ,        The Natural Logarithm   Natural Logarithm   The natural logarithm , denoted , is the logarithm with base :      Because and are inverse functions, we have   These identities are used constantly when simplifying expressions and solving equations.     Simplify .    Since and are inverse functions,        Laws of Logarithms  The laws of logarithms mirror the laws of exponents and allow us to rewrite and simplify logarithmic expressions.   Laws of Logarithms   For , , and with ,     These laws are often called the product, quotient, and power rules, of logarithms respectively.    Simplify .          Solving Exponential Equations Using Logarithms  When an exponential equation cannot be rewritten with a common base, logarithms provide a systematic method for solving for the variable.    Solve the equation .    Because the bases do not match, we take the natural logarithm of both sides:   Apply the power rule for logarithms:   Now solve for :      Any logarithmic base may be used, but natural logarithms are preferred in calculus because derivatives and integrals involving and are simpler to compute.      Supplemental Video Resources  The following is a curated set of videos that many students find helpful. They provide additional explanations and visual intuition for logarithms and their relationship to exponential functions.    Everything about Logarithms in 5 minutes    Logarithms Review - Exponential Form    Properties of Logarithms    Logarithms - The Easy Way!    Solving Exponential and Logarithmic Equations    What's so special about Euler's number e?     "
},
{
  "id": "def-logarithm",
  "level": "2",
  "url": "sec-precalc-log.html#def-logarithm",
  "type": "Definition",
  "number": "0.7.1",
  "title": "Logarithm.",
  "body": " Logarithm   Let with . The logarithm base of a positive number is defined by    "
},
{
  "id": "ssec-log-def-3",
  "level": "2",
  "url": "sec-precalc-log.html#ssec-log-def-3",
  "type": "Remark",
  "number": "0.7.2",
  "title": "",
  "body": " Logarithms undo exponentiation. This definition makes precise the idea that logarithms and exponentials are inverse functions.  "
},
{
  "id": "ssec-log-def-4",
  "level": "2",
  "url": "sec-precalc-log.html#ssec-log-def-4",
  "type": "Example",
  "number": "0.7.3",
  "title": "",
  "body": "  Evaluate .    We look for the exponent to which 2 must be raised to obtain 8. Since ,    "
},
{
  "id": "def-natural-log",
  "level": "2",
  "url": "sec-precalc-log.html#def-natural-log",
  "type": "Definition",
  "number": "0.7.4",
  "title": "Natural Logarithm.",
  "body": " Natural Logarithm   The natural logarithm , denoted , is the logarithm with base :    "
},
{
  "id": "ssec-natural-log-3",
  "level": "2",
  "url": "sec-precalc-log.html#ssec-natural-log-3",
  "type": "Remark",
  "number": "0.7.5",
  "title": "",
  "body": " Because and are inverse functions, we have   These identities are used constantly when simplifying expressions and solving equations.  "
},
{
  "id": "ssec-natural-log-4",
  "level": "2",
  "url": "sec-precalc-log.html#ssec-natural-log-4",
  "type": "Example",
  "number": "0.7.6",
  "title": "",
  "body": "  Simplify .    Since and are inverse functions,    "
},
{
  "id": "thm-log-laws",
  "level": "2",
  "url": "sec-precalc-log.html#thm-log-laws",
  "type": "Theorem",
  "number": "0.7.7",
  "title": "Laws of Logarithms.",
  "body": " Laws of Logarithms   For , , and with ,    "
},
{
  "id": "ssec-log-laws-5",
  "level": "2",
  "url": "sec-precalc-log.html#ssec-log-laws-5",
  "type": "Example",
  "number": "0.7.8",
  "title": "",
  "body": "  Simplify .      "
},
{
  "id": "ssec-solving-exp-log-3",
  "level": "2",
  "url": "sec-precalc-log.html#ssec-solving-exp-log-3",
  "type": "Example",
  "number": "0.7.9",
  "title": "",
  "body": "  Solve the equation .    Because the bases do not match, we take the natural logarithm of both sides:   Apply the power rule for logarithms:   Now solve for :    "
},
{
  "id": "ssec-solving-exp-log-4",
  "level": "2",
  "url": "sec-precalc-log.html#ssec-solving-exp-log-4",
  "type": "Remark",
  "number": "0.7.10",
  "title": "",
  "body": " Any logarithmic base may be used, but natural logarithms are preferred in calculus because derivatives and integrals involving and are simpler to compute.  "
},
{
  "id": "sec-precalc-trig",
  "level": "1",
  "url": "sec-precalc-trig.html",
  "type": "Section",
  "number": "0.8",
  "title": "Trigonometry",
  "body": " Trigonometry  Trigonometric functions are fundamental tools in calculus. They arise in problems involving motion, waves, oscillations, and periodic behavior, and they play a key role in limits, derivatives, and integrals. In this section, we review the core definitions and properties of trigonometric functions that will be used throughout the course.    Right Triangle Definitions  We begin by defining sine and cosine using right triangles. These definitions apply when the angle is acute.   Sine and Cosine (Right Triangle)   Given a right triangle and an acute angle ,     A right triangle illustrating the definitions of sine and cosine for an acute angle .       In a right triangle, the side opposite has length 3, the adjacent side has length 4, and the hypotenuse has length 5. Find and .        While these definitions are intuitive, they apply only to acute angles. To extend trigonometric functions to all real numbers, we use the unit circle.      The Unit Circle Definition  The unit circle allows us to define trigonometric functions for any real number and is the framework used in calculus.   Sine and Cosine (Unit Circle)   Consider the unit circle centered at the origin. For a real number , let the point on the unit circle corresponding to angle (measured in radians) have coordinates . Then     The unit circle definition of sine and cosine. For an angle , the point on the unit circle satisfies , , and .      In calculus, angles are always measured in radians. This choice ensures that derivatives and limits involving trigonometric functions behave correctly.     Evaluate and .        For acute angles, the unit circle and right triangle definitions of sine and cosine agree. The unit circle framework extends these ideas to all real angles.    Because rotating by returns to the same point on the unit circle, sine and cosine are periodic with period .      Other Trigonometric Functions  In addition to sine and cosine, four other trigonometric functions are commonly used in calculus: tangent, secant, cosecant, and cotangent. These functions are defined in terms of sine and cosine.   Definitions of Tangent, Secant, Cosecant, and Cotangent   For an angle such that the expressions are defined,       Because these functions are defined as ratios, they are undefined whenever their denominators are zero. For example, since , both and are undefined.      Key Unit Circle Values  Because calculus problems often require exact values rather than decimal approximations, it is important to know certain unit circle values without a calculator.  The most important angles on the unit circle are   The corresponding sine and cosine values are:     Evaluate and .    These values can be read directly from the table:     Values in other quadrants can be determined using symmetry and the signs of sine and cosine on the unit circle. On quizzes and exams, these values are expected to be known without a calculator.    Evaluate and .    The angle lies in Quadrant II and has reference angle . In Quadrant II, sine is positive and cosine is negative.        Range and Boundedness  One of the most important properties of sine and cosine in calculus is that their values are bounded.   Range of Sine and Cosine   For all real numbers ,      This boundedness property is used frequently in calculus, especially when applying the Squeeze Theorem to evaluate limits.      Pythagorean Identities  One of the most important consequences of the unit circle definition of sine and cosine is a collection of identities that come directly from the Pythagorean Theorem.   Pythagorean Identities      Only the first identity, , needs to be memorized. The other two identities follow directly from it by dividing both sides by or , respectively.   These identities provide different ways to express the same geometric relationship. In calculus, choosing the appropriate form often simplifies a computation.     Simplify the expression .          Angle Sum and Double Angle Formulas  Trigonometric functions do not satisfy distributive or additive properties. Instead, they obey specific identities that describe how sine and cosine behave when angles are added or multiplied.   Angle Sum Formulas       Double Angle Formulas   The double angle formulas are obtained by setting in the angle sum formulas.        Supplemental Video Resources  The following is a curated set of videos that many students find helpful. They provide additional explanations and visual intuition for logarithms and their relationship to exponential functions.     All the trig you need for calculus actually explained    How To Remember The Unit Circle Fast!    The Trigonometric Functions and the Unit Circle    Common trig identities explained    Trigonometric graph properties and transformations    Visual connection of all six trig functions      "
},
{
  "id": "def-trig-triangle",
  "level": "2",
  "url": "sec-precalc-trig.html#def-trig-triangle",
  "type": "Definition",
  "number": "0.8.1",
  "title": "Sine and Cosine (Right Triangle).",
  "body": " Sine and Cosine (Right Triangle)   Given a right triangle and an acute angle ,     A right triangle illustrating the definitions of sine and cosine for an acute angle .    "
},
{
  "id": "ssec-trig-triangle-4",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-triangle-4",
  "type": "Example",
  "number": "0.8.3",
  "title": "",
  "body": "  In a right triangle, the side opposite has length 3, the adjacent side has length 4, and the hypotenuse has length 5. Find and .      "
},
{
  "id": "ssec-trig-triangle-5",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-triangle-5",
  "type": "Remark",
  "number": "0.8.4",
  "title": "",
  "body": " While these definitions are intuitive, they apply only to acute angles. To extend trigonometric functions to all real numbers, we use the unit circle.  "
},
{
  "id": "def-unit-circle",
  "level": "2",
  "url": "sec-precalc-trig.html#def-unit-circle",
  "type": "Definition",
  "number": "0.8.5",
  "title": "Sine and Cosine (Unit Circle).",
  "body": " Sine and Cosine (Unit Circle)   Consider the unit circle centered at the origin. For a real number , let the point on the unit circle corresponding to angle (measured in radians) have coordinates . Then     The unit circle definition of sine and cosine. For an angle , the point on the unit circle satisfies , , and .    "
},
{
  "id": "rmk-radians-calculus",
  "level": "2",
  "url": "sec-precalc-trig.html#rmk-radians-calculus",
  "type": "Remark",
  "number": "0.8.7",
  "title": "",
  "body": " In calculus, angles are always measured in radians. This choice ensures that derivatives and limits involving trigonometric functions behave correctly.  "
},
{
  "id": "ssec-trig-unit-circle-5",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-unit-circle-5",
  "type": "Example",
  "number": "0.8.8",
  "title": "",
  "body": "  Evaluate and .      "
},
{
  "id": "ssec-trig-unit-circle-6",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-unit-circle-6",
  "type": "Remark",
  "number": "0.8.9",
  "title": "",
  "body": " For acute angles, the unit circle and right triangle definitions of sine and cosine agree. The unit circle framework extends these ideas to all real angles.  "
},
{
  "id": "ssec-trig-unit-circle-7",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-unit-circle-7",
  "type": "Remark",
  "number": "0.8.10",
  "title": "",
  "body": " Because rotating by returns to the same point on the unit circle, sine and cosine are periodic with period .  "
},
{
  "id": "def-trig-ratios",
  "level": "2",
  "url": "sec-precalc-trig.html#def-trig-ratios",
  "type": "Definition",
  "number": "0.8.11",
  "title": "Definitions of Tangent, Secant, Cosecant, and Cotangent.",
  "body": " Definitions of Tangent, Secant, Cosecant, and Cotangent   For an angle such that the expressions are defined,     "
},
{
  "id": "ssec-trig-other-functions-4",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-other-functions-4",
  "type": "Remark",
  "number": "0.8.12",
  "title": "",
  "body": " Because these functions are defined as ratios, they are undefined whenever their denominators are zero. For example, since , both and are undefined.  "
},
{
  "id": "ssec-trig-unit-circle-values-7",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-unit-circle-values-7",
  "type": "Example",
  "number": "0.8.13",
  "title": "",
  "body": "  Evaluate and .    These values can be read directly from the table:    "
},
{
  "id": "ssec-trig-unit-circle-values-9",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-unit-circle-values-9",
  "type": "Example",
  "number": "0.8.14",
  "title": "",
  "body": "  Evaluate and .    The angle lies in Quadrant II and has reference angle . In Quadrant II, sine is positive and cosine is negative.    "
},
{
  "id": "thm-sin-cos-range",
  "level": "2",
  "url": "sec-precalc-trig.html#thm-sin-cos-range",
  "type": "Theorem",
  "number": "0.8.15",
  "title": "Range of Sine and Cosine.",
  "body": " Range of Sine and Cosine   For all real numbers ,    "
},
{
  "id": "ssec-trig-range-4",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-range-4",
  "type": "Remark",
  "number": "0.8.16",
  "title": "",
  "body": " This boundedness property is used frequently in calculus, especially when applying the Squeeze Theorem to evaluate limits.  "
},
{
  "id": "thm-pythagorean-trig",
  "level": "2",
  "url": "sec-precalc-trig.html#thm-pythagorean-trig",
  "type": "Theorem",
  "number": "0.8.17",
  "title": "Pythagorean Identities.",
  "body": " Pythagorean Identities     "
},
{
  "id": "ssec-trig-pythagorean-identities-5",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-pythagorean-identities-5",
  "type": "Remark",
  "number": "0.8.18",
  "title": "",
  "body": " These identities provide different ways to express the same geometric relationship. In calculus, choosing the appropriate form often simplifies a computation.  "
},
{
  "id": "ssec-trig-pythagorean-identities-6",
  "level": "2",
  "url": "sec-precalc-trig.html#ssec-trig-pythagorean-identities-6",
  "type": "Example",
  "number": "0.8.19",
  "title": "",
  "body": "  Simplify the expression .      "
},
{
  "id": "thm-angle-sum",
  "level": "2",
  "url": "sec-precalc-trig.html#thm-angle-sum",
  "type": "Theorem",
  "number": "0.8.20",
  "title": "Angle Sum Formulas.",
  "body": " Angle Sum Formulas     "
},
{
  "id": "thm-double-angle",
  "level": "2",
  "url": "sec-precalc-trig.html#thm-double-angle",
  "type": "Theorem",
  "number": "0.8.21",
  "title": "Double Angle Formulas.",
  "body": " Double Angle Formulas   The double angle formulas are obtained by setting in the angle sum formulas.    "
},
{
  "id": "sec-graphical-limits",
  "level": "1",
  "url": "sec-graphical-limits.html",
  "type": "Section",
  "number": "1.1",
  "title": "Limits from Graphs and Notation",
  "body": " Limits from Graphs and Notation    Understand the intuitive definition of a limit and how to express it using mathematical notation.  Determine limits from tables of values and from the graph of a function.  Recognize when a limit exists, and identify cases where the limit does not exist.  Interpret and compute one-sided limits, and explain how they relate to the existence of two-sided limits.  Understand the meaning of infinite limits and how they relate to vertical asymptotes.  Locate vertical asymptotes and describe a function’s behavior on both sides of each asymptote.     Definition of Limits  The concept of a limit is one of the cornerstones of calculus. Limits allow us to describe precisely what happens to a function’s values as the input approaches a particular number—whether or not the function is even defined at that point. They provide the language for defining continuity, derivatives, and integrals, and they help us capture “approaching” behavior that can’t be expressed by direct substitution alone. Before moving on to more formal ideas, we start with an intuitive definition of a limit.   Limit (intuitive)   Consider a function and numbers , . Then the limit of equals as approaches , in symbols , whenever can be forced arbitrarily close to by making sufficiently close to (but not equal to) . If we cannot make as close to a single value as we would like as approaches , then we say that does not have a limit as approaches .    That is, approximates to within any desired error tolerance, for all values of within some small distance from (but ). One more way to say it: if we make a table of for any sample values of getting closer and closer to (such as , , etc.), then the values of will get as close as we like to (though they might never quite reach ).  Graphically:   Reading a limit from a graph: .        Evaluating Limits  Let's make sure the definition makes sense. Here is a nice first problem to attempt.   Our First Limit   Consider the function   Using a calculator, evaluate the function at the indicated -values and fill in the corresponding entries in the table.    Based on the intuitive limit definition guess the limit value  View the graph of in Desmos . Use words to explain to another student how the table relates to the graph and how the limit can be determined from the graph.       Check Your Answers:         As approaches from either the left or the right, the output values get closer and closer to . Although is undefined (there is a hole in the graph), the limit still exists and equals .   Step by Step Video Solution:        Some limits are easy because we can plug in to get the limiting value , in which case we say is continuous at . Graphically, as in the above figure , this means the curve has no jump or hole at .   A Nice Continuous Example   Evaluate .    Full Written Solution:  Since our function is continuous around (we can draw the parabola without lifting our pencil), we can simply plug into to get the answer .  More Rigorous Solution:  Algebraically, if is close enough to , say for some small (close to ), then which is forced as close as we like to if is small enough to 0 (either positive or negative).    We have seen a few problems where a limit exists, but in fact, as the 2004 movie Mean Girls teaches us, sometimes    The limit does not exist GIF      One way this can occur is if does not approach a single limiting value as approaches . In such cases, we declare that the limit does not exist , and the symbol has no meaning. Now let's see such an example.   When a limit does not exist   Consider the sign function , defined by   Which when graphed looks like:    The sign function .       Determine the limit     Near , the function cannot be forced close to any single output value. That is, , since no matter how close gets to , there are some (namely negative) for which is far from ; and similarly is not , nor , nor any other value. In such cases, it is most appropriate to simply say does not exist.     An important feature of is that it does not depend on , even if is undefined: the limit only notices values of for . As a quick mini example, define for , and , having the graph:   The function for with (a removable discontinuity at ).      Then , since if is close enough to (but unequal to) , then is arbitrarily close to (in fact ). Again, , and is not continuous at .     One-sided Limits  Sometimes, the behavior of a function as you approach a point depends on which direction you come from. For example, a graph might approach one value when moving in from the left, but a completely different value when coming in from the right like in Example .  And so, let's define another type of limit:   One-Sided Limits    One-sided limits (from the right or left) consider only values of on one side of . The limit of equals as approaches from the right, denoted , whenever can be made arbitrarily close to by taking sufficiently close to (but greater than) . The limit from the left, denoted , is defined similarly, except with  less than .     If we have the ordinary limit , then the left and right limits must both have the same value . In the Example above, we have .  However in Example we have, and , even though does not exist.   In fact, we can make our first Theorem from this idea    For a function and real number , the (two-sided) limit exists if and only if both one-sided limits exist and are equal. Precisely,   if and only if     A full proof of this theorem requires the formal – definition of a limit and is beyond the scope of this course. You will encounter this level of rigor in MTH 320, where you will learn how to construct proofs of results like this one from first principles.      Infinite Limits  Up to this point, most of the limits we’ve encountered have approached a finite number. However, some functions behave very differently: as you get closer to certain -values, the function’s values grow without bound—either shooting up toward positive infinity or diving down toward negative infinity. In these cases, the function doesn’t have a finite limit, but the way it “blows up” is still predictable.   Infinite Limits and Vertical Asymptotes   We define infinite limits as follows: means that can be made larger than any real number (for example, ) by taking sufficiently close to (but not equal to) .  Similarly means that can be made smaller than any real number (for example, ) by taking sufficiently close to (but not equal to) .  Such behavior signals a vertical asymptote at .     The symbol (and likewise ) has no meaning by itself; it is simply a way of saying that can be made as large as desired.     Consider the function .  Which when graphed looks like:   The graph of .      Answer the following questions.   Using the graph of evaluate and explain your reasoning.  Try now without the graph (using only the equation of ) to evaluate and explain your reasoning.       Looking at the graph , we can notice two key features near :   The graph is in two pieces — one in quadrant II (for ) and one in quadrant I (for ).  Both pieces shoot straight up as they get close to .   This means the function grows beyond any large number we can choose when is close enough to . And so we know     As gets very close to , gets very small — like , , , and so on. Dividing by a very small positive number gives a very large positive number (for example, , , ). In general, we can shorthand this fact as .        True or False: .     False. The two one-sided limits behave differently: but . Because the left and right limits are not equal, the two-sided limit does not exist.    Note: Be careful to read problems in this class carefully! Here is problem that is quite similar looking but has a different result.    True or False: has a vertical asymptote at .     True. As approaches from the right, , and as approaches from the left, . This unbounded behavior around means the line is a vertical asymptote.      Locating Vertical Asymptotes  A vertical asymptote occurs at a value of where a function grows without bound (positively or negatively) as approaches that value. This often happens when the function’s formula has a denominator that becomes zero while the numerator stays nonzero, making the function’s value extremely large in magnitude near that point.   How to Locate Vertical Asymptotes  To locate possible vertical asymptotes, we look for values of that make the denominator zero but do not also make the numerator zero. Once we have these candidates, we check the one-sided limits to determine whether the function increases toward or decreases toward on each side.   Now let's see it in action with an example    Consider the function .   Locate the vertical asymptotes for .  For each vertical asymptote, describe the behavior of as approaches from both the left and the right.      Check Your Answers:    The vertical asymptotes are at and .   Here is the function's behavior around each asymptote:     Step by Step Video Solution:        And lastly, a true\/false problem on the same subject    True or False: The function has a vertical asymptote at .    False. Factoring numerator and denominator we get Notice that if we try to naively plug in we get 0 in both the numerator and denominator. From Remark we should suspect that this will not yield a vertical asymptote.  To verify we can plug in numbers close to on either side to see what is happening to .   From this we suspect . And in fact if we simplify and then plug in into the simplified function we get . We will learn in the next section that this will turn out to be a good strategy for evaluating limits. And so, does not yield a vertical asymptote.      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Limits from Graphs and Notation      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning     True or False: If , then .    False. A limit describes nearby behavior; the function value at the point can differ (or be undefined).      True or False: If and , then .    True. Equality of both one-sided limits guarantees the two-sided limit exists and has that value.      True or False: If , then is undefined.    False. The limit concerns values near ; may be anything (defined or not) without affecting the infinite limit.      True or False: If does not exist, then both and do not exist.    False. One-sided limits may exist but differ; that difference causes the two-sided limit to fail.      True or False: If is a vertical asymptote, then at least one of or is infinite.    True. A vertical asymptote is characterized by unbounded behavior from one or both sides.      True or False: If the graph decreases without bound as , then .    True. “Decreases without bound” means the values become arbitrarily negative.      True or False: .    True. Values grow beyond any bound from either side since for .      True or False: If , then is a vertical asymptote.    True.  ; the numerator is nonzero at , so is a VA.      True or False: If a rational function’s denominator is zero at , then the function must have a vertical asymptote at .    False. A common factor in numerator and denominator could cancel instead like in Problem .      "
},
{
  "id": "sec-graphical-limits-2",
  "level": "2",
  "url": "sec-graphical-limits.html#sec-graphical-limits-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  Understand the intuitive definition of a limit and how to express it using mathematical notation.  Determine limits from tables of values and from the graph of a function.  Recognize when a limit exists, and identify cases where the limit does not exist.  Interpret and compute one-sided limits, and explain how they relate to the existence of two-sided limits.  Understand the meaning of infinite limits and how they relate to vertical asymptotes.  Locate vertical asymptotes and describe a function’s behavior on both sides of each asymptote.   "
},
{
  "id": "def-limit-intuitive",
  "level": "2",
  "url": "sec-graphical-limits.html#def-limit-intuitive",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Limit (intuitive).",
  "body": " Limit (intuitive)   Consider a function and numbers , . Then the limit of equals as approaches , in symbols , whenever can be forced arbitrarily close to by making sufficiently close to (but not equal to) . If we cannot make as close to a single value as we would like as approaches , then we say that does not have a limit as approaches .   "
},
{
  "id": "fig-limit-graph",
  "level": "2",
  "url": "sec-graphical-limits.html#fig-limit-graph",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " Reading a limit from a graph: .     "
},
{
  "id": "ex-0001",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-0001",
  "type": "Example",
  "number": "1.1.3",
  "title": "Our First Limit.",
  "body": " Our First Limit   Consider the function   Using a calculator, evaluate the function at the indicated -values and fill in the corresponding entries in the table.    Based on the intuitive limit definition guess the limit value  View the graph of in Desmos . Use words to explain to another student how the table relates to the graph and how the limit can be determined from the graph.       Check Your Answers:         As approaches from either the left or the right, the output values get closer and closer to . Although is undefined (there is a hole in the graph), the limit still exists and equals .   Step by Step Video Solution:       "
},
{
  "id": "ssec-eval-limits-4",
  "level": "2",
  "url": "sec-graphical-limits.html#ssec-eval-limits-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous "
},
{
  "id": "ex-limit-continuous",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-limit-continuous",
  "type": "Example",
  "number": "1.1.4",
  "title": "A Nice Continuous Example.",
  "body": " A Nice Continuous Example   Evaluate .    Full Written Solution:  Since our function is continuous around (we can draw the parabola without lifting our pencil), we can simply plug into to get the answer .  More Rigorous Solution:  Algebraically, if is close enough to , say for some small (close to ), then which is forced as close as we like to if is small enough to 0 (either positive or negative).   "
},
{
  "id": "ssec-eval-limits-7-1",
  "level": "2",
  "url": "sec-graphical-limits.html#ssec-eval-limits-7-1",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " The limit does not exist GIF    "
},
{
  "id": "ex-limit-does-not-exist",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-limit-does-not-exist",
  "type": "Example",
  "number": "1.1.6",
  "title": "When a limit does not exist.",
  "body": " When a limit does not exist   Consider the sign function , defined by   Which when graphed looks like:    The sign function .       Determine the limit     Near , the function cannot be forced close to any single output value. That is, , since no matter how close gets to , there are some (namely negative) for which is far from ; and similarly is not , nor , nor any other value. In such cases, it is most appropriate to simply say does not exist.   "
},
{
  "id": "ssec-eval-limits-10",
  "level": "2",
  "url": "sec-graphical-limits.html#ssec-eval-limits-10",
  "type": "Remark",
  "number": "1.1.8",
  "title": "",
  "body": " An important feature of is that it does not depend on , even if is undefined: the limit only notices values of for . As a quick mini example, define for , and , having the graph:   The function for with (a removable discontinuity at ).      Then , since if is close enough to (but unequal to) , then is arbitrarily close to (in fact ). Again, , and is not continuous at .  "
},
{
  "id": "def-one-sided-limits",
  "level": "2",
  "url": "sec-graphical-limits.html#def-one-sided-limits",
  "type": "Definition",
  "number": "1.1.10",
  "title": "One-Sided Limits.",
  "body": " One-Sided Limits    One-sided limits (from the right or left) consider only values of on one side of . The limit of equals as approaches from the right, denoted , whenever can be made arbitrarily close to by taking sufficiently close to (but greater than) . The limit from the left, denoted , is defined similarly, except with  less than .   "
},
{
  "id": "rmk-one-sided-equality",
  "level": "2",
  "url": "sec-graphical-limits.html#rmk-one-sided-equality",
  "type": "Remark",
  "number": "1.1.11",
  "title": "",
  "body": " If we have the ordinary limit , then the left and right limits must both have the same value . In the Example above, we have .  However in Example we have, and , even though does not exist.  "
},
{
  "id": "thm-two-sided-iff-one-sided",
  "level": "2",
  "url": "sec-graphical-limits.html#thm-two-sided-iff-one-sided",
  "type": "Theorem",
  "number": "1.1.12",
  "title": "",
  "body": "  For a function and real number , the (two-sided) limit exists if and only if both one-sided limits exist and are equal. Precisely,   if and only if     A full proof of this theorem requires the formal – definition of a limit and is beyond the scope of this course. You will encounter this level of rigor in MTH 320, where you will learn how to construct proofs of results like this one from first principles.   "
},
{
  "id": "def-infinite-limits",
  "level": "2",
  "url": "sec-graphical-limits.html#def-infinite-limits",
  "type": "Definition",
  "number": "1.1.13",
  "title": "Infinite Limits and Vertical Asymptotes.",
  "body": " Infinite Limits and Vertical Asymptotes   We define infinite limits as follows: means that can be made larger than any real number (for example, ) by taking sufficiently close to (but not equal to) .  Similarly means that can be made smaller than any real number (for example, ) by taking sufficiently close to (but not equal to) .  Such behavior signals a vertical asymptote at .   "
},
{
  "id": "rmk-infinity-meaning",
  "level": "2",
  "url": "sec-graphical-limits.html#rmk-infinity-meaning",
  "type": "Remark",
  "number": "1.1.14",
  "title": "",
  "body": " The symbol (and likewise ) has no meaning by itself; it is simply a way of saying that can be made as large as desired.  "
},
{
  "id": "ex-inf-lim",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-inf-lim",
  "type": "Example",
  "number": "1.1.15",
  "title": "",
  "body": "  Consider the function .  Which when graphed looks like:   The graph of .      Answer the following questions.   Using the graph of evaluate and explain your reasoning.  Try now without the graph (using only the equation of ) to evaluate and explain your reasoning.       Looking at the graph , we can notice two key features near :   The graph is in two pieces — one in quadrant II (for ) and one in quadrant I (for ).  Both pieces shoot straight up as they get close to .   This means the function grows beyond any large number we can choose when is close enough to . And so we know     As gets very close to , gets very small — like , , , and so on. Dividing by a very small positive number gives a very large positive number (for example, , , ). In general, we can shorthand this fact as .     "
},
{
  "id": "prob-limit-inf-1overx",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-limit-inf-1overx",
  "type": "Problem",
  "number": "1.1.17",
  "title": "",
  "body": "  True or False: .     False. The two one-sided limits behave differently: but . Because the left and right limits are not equal, the two-sided limit does not exist.   "
},
{
  "id": "prob-VA-1overx",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-VA-1overx",
  "type": "Problem",
  "number": "1.1.18",
  "title": "",
  "body": "  True or False: has a vertical asymptote at .     True. As approaches from the right, , and as approaches from the left, . This unbounded behavior around means the line is a vertical asymptote.   "
},
{
  "id": "strat-locating-va",
  "level": "2",
  "url": "sec-graphical-limits.html#strat-locating-va",
  "type": "Strategy",
  "number": "1.1.19",
  "title": "How to Locate Vertical Asymptotes.",
  "body": " How to Locate Vertical Asymptotes  To locate possible vertical asymptotes, we look for values of that make the denominator zero but do not also make the numerator zero. Once we have these candidates, we check the one-sided limits to determine whether the function increases toward or decreases toward on each side.  "
},
{
  "id": "ex-vertical-asymptotes-signs",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-vertical-asymptotes-signs",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": "  Consider the function .   Locate the vertical asymptotes for .  For each vertical asymptote, describe the behavior of as approaches from both the left and the right.      Check Your Answers:    The vertical asymptotes are at and .   Here is the function's behavior around each asymptote:     Step by Step Video Solution:       "
},
{
  "id": "prob-hole-vs-asymptote",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-hole-vs-asymptote",
  "type": "Problem",
  "number": "1.1.21",
  "title": "",
  "body": "  True or False: The function has a vertical asymptote at .    False. Factoring numerator and denominator we get Notice that if we try to naively plug in we get 0 in both the numerator and denominator. From Remark we should suspect that this will not yield a vertical asymptote.  To verify we can plug in numbers close to on either side to see what is happening to .   From this we suspect . And in fact if we simplify and then plug in into the simplified function we get . We will learn in the next section that this will turn out to be a good strategy for evaluating limits. And so, does not yield a vertical asymptote.   "
},
{
  "id": "prob-tf-limit-value-vs-function",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-limit-value-vs-function",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  True or False: If , then .    False. A limit describes nearby behavior; the function value at the point can differ (or be undefined).   "
},
{
  "id": "prob-tf-onesided-implies-twosided",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-onesided-implies-twosided",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  True or False: If and , then .    True. Equality of both one-sided limits guarantees the two-sided limit exists and has that value.   "
},
{
  "id": "prob-tf-infinite-limit-value-defined",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-infinite-limit-value-defined",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  True or False: If , then is undefined.    False. The limit concerns values near ; may be anything (defined or not) without affecting the infinite limit.   "
},
{
  "id": "prob-tf-twosided-dne-implies-onesided-dne",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-twosided-dne-implies-onesided-dne",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  True or False: If does not exist, then both and do not exist.    False. One-sided limits may exist but differ; that difference causes the two-sided limit to fail.   "
},
{
  "id": "prob-tf-va-implies-infinite-onesided",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-va-implies-infinite-onesided",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  True or False: If is a vertical asymptote, then at least one of or is infinite.    True. A vertical asymptote is characterized by unbounded behavior from one or both sides.   "
},
{
  "id": "prob-tf-neg-infty-description",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-neg-infty-description",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  True or False: If the graph decreases without bound as , then .    True. “Decreases without bound” means the values become arbitrarily negative.   "
},
{
  "id": "prob-tf-one-over-xsq",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-one-over-xsq",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  True or False: .    True. Values grow beyond any bound from either side since for .   "
},
{
  "id": "prob-tf-2x-over-xsqminus9",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-2x-over-xsqminus9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  True or False: If , then is a vertical asymptote.    True.  ; the numerator is nonzero at , so is a VA.   "
},
{
  "id": "prob-tf-denominator-zero-always-va",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-denominator-zero-always-va",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  True or False: If a rational function’s denominator is zero at , then the function must have a vertical asymptote at .    False. A common factor in numerator and denominator could cancel instead like in Problem .   "
},
{
  "id": "sec-limit-laws",
  "level": "1",
  "url": "sec-limit-laws.html",
  "type": "Section",
  "number": "1.2",
  "title": "Limit Laws and Algebraic Techniques",
  "body": " Limit Laws and Algebraic Techniques    State and apply the basic Limit Laws (sum, difference, constant multiple, product, quotient, power, root).  Recognize when direct substitution can be used to evaluate a limit and when it leads to meaningless expressions.  Evaluate limits that initially give meaningless expressions by algebraic manipulation  Analyze limits of piecewise-defined functions by considering one-sided limits.  Apply the Squeeze Theorem to evaluate limits of functions bounded above and below.     Operations on Limits  Some general combination rules make most limit computations routine.   Limit Laws   Suppose we know that both and exist. Then we have the following Limit Laws:   Sum:  .  Difference:  .  Constant Multiple:  , for a constant .  Product:  .  Quotient:  , provided .  Power:  , for a whole number .  Root:  , for a whole number If is even, we assume  .   These all have the form: “The limit of an operation equals the operation applied to the limits.” These Laws are also valid for one-sided limits.    A full proof of these laws requires high-level mathematics and the formal – definition of limits (beyond the scope of this course). Rigorous proofs like this can be found in MSU's MTH 320 Real Analysis course. For those who would like a glimpse a Real Analysis proof, see this video proving the Limit Sum Law       Suppose and . Find .    Using the Difference, Constant Multiple, and Power Limit Laws:       Limits by Plugging In  Assuming the Limit Laws and the Basic Limits and , we can prove that most functions are continuous, meaning the limit can be obtained by direct substitution.   A Limit by Substitution   Compute using the Limit Laws.    Step by Step:   Thus the correct limit is obtained simply by substituting .   Note: The Quotient Law requires that the denominator have a non-zero limit. We tentatively proceed with the computation and find the denominator to be 3, which retrospectively justifies the quotient step.     Substituting usually gives the correct limit unless it leads to a meaningless expression such as or (complex values are not considered in this course).   In Section and Section , we will verify that trigonometric functions like and are also continuous when defined, and the same holds for functions like and . Thus, this principle works for pretty much all reasonable functions.    Limits by Canceling Zeros  Some of the most important limits are those where substitution gives a meaningless expression like . To compute these, we must cancel vanishing factors until the expression can be evaluated. This often requires algebraic manipulation such as factoring or multiplying by a conjugate.   Canceling Factors   Evaluate .    Direct substitution gives the meaningless expression , so we must simplify the expression first. Factor numerator and denominator:    Please note that this example is consistent with what we saw in the previous section. Here is a Desmos graph of the function, along with a table of values near .     Graph of        Keep in mind, however, that on quizzes and exams you may not have access to a calculator — in those cases the algebraic method will be our primary tool for solving such problems.      Using a Conjugate   Evaluate .    Direct substitution gives the meaningless expression , so we must simplify the expression first.  Multiply numerator and denominator by the conjugate :   Simplify the denominator using the difference of squares:  > Now cancel the common factor :    Again, this algebraic approach is important, but we can also explore the behavior graphically or with tables. View it here: Desmos Graph .       Limits by Cases  As we learned in Section , piecewise functions often require evaluating limits separately from the left and right. One key example of this is the absolute value function , which by its definition is really a piecewise function. Therefore limits involving absolute values often require a case-by-case analysis.   Absolute Value Example   Evaluate .     Check Your Answers:    does not exist, because the left-hand and right-hand limits are different.  Step by Step Video Solution:      Again, this algebraic approach is important, but we can also explore the behavior graphically or with tables. View it here: Desmos Graph .      Limits by Squeezing  Some limits are difficult to evaluate because the function behaves erratically near . For example:   The graph shows the unusual behavior, oscillating faster and faster near because completes infinitely many periods as becomes larger.    The function (solid) squeezed between (dashed).      However, we can still find the limit using the Squeeze Theorem , which applies when is squeezed between two other functions.   Squeeze Theorem   Suppose for all near (except possibly ), and . Then .    Now let's apply the Squeeze Theorem to our example   Squeezing Example   Evaluate .    First note the expression is defined for , which is fine for a limit: we only need values of near (but not equal to) .  Start from the basic bound true for every real :   Substitute (valid when ):   Multiply the entire inequality by . Because for all , the direction of the inequalities is preserved (multiplying by a nonnegative number does not flip signs):   Now add to each part of the inequality. Adding the same quantity to all three parts preserves the inequalities:   Define the “floor” and “ceiling” functions and . Compute their limits using substitution:    Since for all near (but not equal to) we have , and both bounding limits equal , the Squeeze Theorem gives:      Trigonometric functions are especially good candidates for the Squeeze Theorem, since they have natural bounds. For example,   and   These inequalities allow us to evaluate many limits involving trigonometric functions by “squeezing” them between simpler functions.     Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Limit Laws and Algebraic Techniques      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning    If and , then .   True. By the Sum Law: .     If , then .   False. A limit concerns nearby values, not necessarily the value at the point. For example, consider Example . The limit exists even though the function itself is not defined at the point.      .   True. Factor and cancel: for , so .     The Limit Laws can always be applied, even if one of the limits does not exist.   False. Each Limit Law requires the relevant limits to exist. If one does not exist, the law cannot be applied.     If and , then must equal 1.   False. The form is meaningless. For example, , give .     If is a polynomial, then for every real number .   True. Polynomials are continuous. We can apply the limit laws to substitute as discussed previously in this section. So for all .      does not exist.   True.  and , so the two-sided limit does not exist.      .   False. Simplify to , so , not .      .   True. By the Squeeze Theorem: , and both bounds go to 0 as .     The Squeeze Theorem can be used to evaluate .   True. Since , multiplying by gives . Both bounds go to 0, so .      "
},
{
  "id": "sec-limit-laws-2",
  "level": "2",
  "url": "sec-limit-laws.html#sec-limit-laws-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  State and apply the basic Limit Laws (sum, difference, constant multiple, product, quotient, power, root).  Recognize when direct substitution can be used to evaluate a limit and when it leads to meaningless expressions.  Evaluate limits that initially give meaningless expressions by algebraic manipulation  Analyze limits of piecewise-defined functions by considering one-sided limits.  Apply the Squeeze Theorem to evaluate limits of functions bounded above and below.   "
},
{
  "id": "thm-limit-laws",
  "level": "2",
  "url": "sec-limit-laws.html#thm-limit-laws",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "Limit Laws.",
  "body": " Limit Laws   Suppose we know that both and exist. Then we have the following Limit Laws:   Sum:  .  Difference:  .  Constant Multiple:  , for a constant .  Product:  .  Quotient:  , provided .  Power:  , for a whole number .  Root:  , for a whole number If is even, we assume  .   These all have the form: “The limit of an operation equals the operation applied to the limits.” These Laws are also valid for one-sided limits.    A full proof of these laws requires high-level mathematics and the formal – definition of limits (beyond the scope of this course). Rigorous proofs like this can be found in MSU's MTH 320 Real Analysis course. For those who would like a glimpse a Real Analysis proof, see this video proving the Limit Sum Law    "
},
{
  "id": "prob-limit-laws-simple",
  "level": "2",
  "url": "sec-limit-laws.html#prob-limit-laws-simple",
  "type": "Problem",
  "number": "1.2.2",
  "title": "",
  "body": "  Suppose and . Find .    Using the Difference, Constant Multiple, and Power Limit Laws:    "
},
{
  "id": "ex-limit-plug-in",
  "level": "2",
  "url": "sec-limit-laws.html#ex-limit-plug-in",
  "type": "Example",
  "number": "1.2.3",
  "title": "A Limit by Substitution.",
  "body": " A Limit by Substitution   Compute using the Limit Laws.    Step by Step:   Thus the correct limit is obtained simply by substituting .   Note: The Quotient Law requires that the denominator have a non-zero limit. We tentatively proceed with the computation and find the denominator to be 3, which retrospectively justifies the quotient step.   "
},
{
  "id": "ssec-plugging-in-4",
  "level": "2",
  "url": "sec-limit-laws.html#ssec-plugging-in-4",
  "type": "Remark",
  "number": "1.2.4",
  "title": "",
  "body": " Substituting usually gives the correct limit unless it leads to a meaningless expression such as or (complex values are not considered in this course).  "
},
{
  "id": "ex-canceling-zeros",
  "level": "2",
  "url": "sec-limit-laws.html#ex-canceling-zeros",
  "type": "Example",
  "number": "1.2.5",
  "title": "Canceling Factors.",
  "body": " Canceling Factors   Evaluate .    Direct substitution gives the meaningless expression , so we must simplify the expression first. Factor numerator and denominator:    Please note that this example is consistent with what we saw in the previous section. Here is a Desmos graph of the function, along with a table of values near .     Graph of        Keep in mind, however, that on quizzes and exams you may not have access to a calculator — in those cases the algebraic method will be our primary tool for solving such problems.    "
},
{
  "id": "ex-conjugate",
  "level": "2",
  "url": "sec-limit-laws.html#ex-conjugate",
  "type": "Example",
  "number": "1.2.8",
  "title": "Using a Conjugate.",
  "body": " Using a Conjugate   Evaluate .    Direct substitution gives the meaningless expression , so we must simplify the expression first.  Multiply numerator and denominator by the conjugate :   Simplify the denominator using the difference of squares:  > Now cancel the common factor :    Again, this algebraic approach is important, but we can also explore the behavior graphically or with tables. View it here: Desmos Graph .    "
},
{
  "id": "ex-abs-value",
  "level": "2",
  "url": "sec-limit-laws.html#ex-abs-value",
  "type": "Example",
  "number": "1.2.10",
  "title": "Absolute Value Example.",
  "body": " Absolute Value Example   Evaluate .     Check Your Answers:    does not exist, because the left-hand and right-hand limits are different.  Step by Step Video Solution:      Again, this algebraic approach is important, but we can also explore the behavior graphically or with tables. View it here: Desmos Graph .   "
},
{
  "id": "fig-squeeze-oscillation",
  "level": "2",
  "url": "sec-limit-laws.html#fig-squeeze-oscillation",
  "type": "Figure",
  "number": "1.2.11",
  "title": "",
  "body": " The function (solid) squeezed between (dashed).    "
},
{
  "id": "ssec-squeeze-6",
  "level": "2",
  "url": "sec-limit-laws.html#ssec-squeeze-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Squeeze Theorem "
},
{
  "id": "thm-squeeze",
  "level": "2",
  "url": "sec-limit-laws.html#thm-squeeze",
  "type": "Theorem",
  "number": "1.2.12",
  "title": "Squeeze Theorem.",
  "body": " Squeeze Theorem   Suppose for all near (except possibly ), and . Then .   "
},
{
  "id": "ex-squeeze-1",
  "level": "2",
  "url": "sec-limit-laws.html#ex-squeeze-1",
  "type": "Example",
  "number": "1.2.13",
  "title": "Squeezing Example.",
  "body": " Squeezing Example   Evaluate .    First note the expression is defined for , which is fine for a limit: we only need values of near (but not equal to) .  Start from the basic bound true for every real :   Substitute (valid when ):   Multiply the entire inequality by . Because for all , the direction of the inequalities is preserved (multiplying by a nonnegative number does not flip signs):   Now add to each part of the inequality. Adding the same quantity to all three parts preserves the inequalities:   Define the “floor” and “ceiling” functions and . Compute their limits using substitution:    Since for all near (but not equal to) we have , and both bounding limits equal , the Squeeze Theorem gives:    "
},
{
  "id": "ssec-squeeze-10",
  "level": "2",
  "url": "sec-limit-laws.html#ssec-squeeze-10",
  "type": "Remark",
  "number": "1.2.14",
  "title": "",
  "body": " Trigonometric functions are especially good candidates for the Squeeze Theorem, since they have natural bounds. For example,   and   These inequalities allow us to evaluate many limits involving trigonometric functions by “squeezing” them between simpler functions.  "
},
{
  "id": "tf-exercises-limits-2-3",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " If and , then .   True. By the Sum Law: .   "
},
{
  "id": "tf-exercises-limits-2-4",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " If , then .   False. A limit concerns nearby values, not necessarily the value at the point. For example, consider Example . The limit exists even though the function itself is not defined at the point.   "
},
{
  "id": "tf-exercises-limits-2-5",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  .   True. Factor and cancel: for , so .   "
},
{
  "id": "tf-exercises-limits-2-6",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " The Limit Laws can always be applied, even if one of the limits does not exist.   False. Each Limit Law requires the relevant limits to exist. If one does not exist, the law cannot be applied.   "
},
{
  "id": "tf-exercises-limits-2-7",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " If and , then must equal 1.   False. The form is meaningless. For example, , give .   "
},
{
  "id": "tf-exercises-limits-2-8",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " If is a polynomial, then for every real number .   True. Polynomials are continuous. We can apply the limit laws to substitute as discussed previously in this section. So for all .   "
},
{
  "id": "tf-exercises-limits-2-9",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  does not exist.   True.  and , so the two-sided limit does not exist.   "
},
{
  "id": "tf-exercises-limits-2-10",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  .   False. Simplify to , so , not .   "
},
{
  "id": "tf-exercises-limits-2-11",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  .   True. By the Squeeze Theorem: , and both bounds go to 0 as .   "
},
{
  "id": "tf-exercises-limits-2-12",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " The Squeeze Theorem can be used to evaluate .   True. Since , multiplying by gives . Both bounds go to 0, so .   "
},
{
  "id": "sec-limit-inf",
  "level": "1",
  "url": "sec-limit-inf.html",
  "type": "Section",
  "number": "1.3",
  "title": "Limits at Infinity: Horizontal Asymptotes",
  "body": " Limits at Infinity: Horizontal Asymptotes    Interpret limits as and graphically as long-term behavior of a function.  Identify horizontal asymptotes using limits at infinity.  Evaluate limits at infinity using dominant term analysis for rational and algebraic functions.  Apply the Squeeze Theorem to evaluate limits at infinity involving bounded functions.  Explain the meaning of a limit at infinity in an applied context.    To understand the behavior of a graph far to the left or far to the right on the -axis, we introduce limits in which becomes arbitrarily large in the positive or negative direction. These limits describe how a function behaves near the ends of its graph.    Let be a function and let be a real number.     means that can be made arbitrarily close to by taking sufficiently large.     means that can be made arbitrarily close to by taking sufficiently negative.      Graphically, if , then the graph of approaches the horizontal line toward the right. This line is called a horizontal asymptote . A similar interpretation applies toward the left when .   Visualizing Limits at Infinity  Limits at infinity are often easiest to understand by looking at graphs. While algebra tells us what happens analytically, graphs help us see how the function behaves for very large values of .   A function approaching the horizontal asymptote as .    Even if the graph crosses the horizontal asymptote many times, the key idea is that the function values remain close to once is sufficiently large.   A function that increases without bound and does not approach a horizontal asymptote.    When or , the graph does not level off, and no horizontal asymptote exists on that end.    Basic Limits at Infinity  The most fundamental limits at infinity come from power functions. If , then   These limits explain why higher powers of dominate lower powers, constants, and reciprocal terms as .    Dominant Terms and Rational Functions  For functions made from sums and quotients of powers of , limits at infinity are determined by the terms with the highest powers. These are called the dominant terms .    Determine whether has a horizontal asymptote.    The dominant term in the numerator is , and the dominant term in the denominator is . For large ,   Since , the graph approaches the horizontal asymptote on both ends.      Find the horizontal asymptote of .    The dominant terms are and , so   The graph approaches the horizontal line on both ends.      Determine the behavior of   as , and decide whether a horizontal asymptote exists.    First rewrite all terms using powers of . In the denominator,   The dominant term in the numerator is , and the dominant term in the denominator is . For large values of , the function behaves like   Simplifying,   Since , we conclude that   Therefore, this function does not have a horizontal asymptote. Instead, the approximation shows that the right end of the graph grows roughly like a line with slope .  The function is not defined for (because of the square roots), so there is no left-end behavior to consider.      Squeeze Theorem at Infinity  The Squeeze Theorem can also be applied to limits at infinity when a function is trapped between two simpler functions.    If for all sufficiently large and   then .      Evaluate .    Since , dividing by gives   Both bounds approach as . By the Squeeze Theorem,       An Application of Limits at Infinity  Limits at infinity are useful whenever a quantity approaches a stable long-term value. In these situations, a horizontal asymptote represents an equilibrium.    The population of a species of fish in a lake years after conservation measures are introduced is modeled by   Evaluate and interpret .    To evaluate the limit, we compare dominant terms in the numerator and denominator.   This means that as time passes, the population approaches fish.  In context, the value represents the long-term sustainable population of the lake. The population increases over time but does not exceed this level, which corresponds to the horizontal asymptote .      The concentration of a medication in a patient’s bloodstream hours after administration is modeled by   Evaluate and interpret .    To evaluate the limit, we compare the dominant terms in the numerator and denominator.  The dominant term in the numerator is , while the dominant term in the denominator is . For large values of ,   Since , we conclude that   This means the concentration approaches over time. In context, this indicates that the medication is gradually eliminated from the bloodstream, and no medication remains in the long term.      Limits at Infinity Beyond Algebraic Functions  Not all limits at infinity can be evaluated using dominant term analysis or algebraic simplification. Some functions require ideas from other areas of mathematics, and others cannot be evaluated until we develop additional calculus tools later in the course.    Consider the function . Evaluate and .    The inverse tangent function has a restricted range:   From trigonometry, as , the angle whose tangent is approaches , and as , it approaches .   This function has two different horizontal asymptotes: to the right and to the left.  Notice that dominant term analysis does not apply here, since is not an algebraic function. Instead, the limits are determined by the trigonometric meaning of the function.     There are many functions whose limits at infinity cannot yet be evaluated with the techniques in this section. For example, consider .  Although both the numerator and denominator grow without bound as , the dominant-term ideas developed here do not apply. Evaluating limits of this type requires additional tools, such as L’Hôpital’s Rule, which will be introduced later in the course.  For now, it is enough to recognize when a limit can be evaluated using algebraic methods and when it cannot.     Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Limits at Infinity: Horizontal Asymptotes      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning     If , then for all sufficiently large .     False. The statement means that can be made arbitrarily close to by taking sufficiently large. It does not require to equal for any value of .  For example, satisfies , but for any finite .      If , then .     True. This follows from the Limit Laws for limits at infinity: adding a constant shifts the limiting value by the same constant.      If for a rational function , then .     True. If the denominator has higher degree, then the denominator grows faster in magnitude than the numerator as , so the quotient approaches .  One way to justify this is to divide numerator and denominator by the highest power of in the denominator. Every term in the numerator becomes a power of (or higher), which goes to as , while the denominator approaches a nonzero constant.      If , then .     False. Limits as and describe the behavior of a function on different ends of the graph and are independent of one another.  For example, the function satisfies and , which are not equal.      For , the function has a horizontal asymptote as .     False. Rewrite the denominator using powers: and . The dominant term in the numerator is and in the denominator is .  Therefore, for large ,   so . Since the function does not approach a finite number, it has no horizontal asymptote as .      If a function satisfies for all , then .     True. Since and , the Squeeze Theorem implies that .       does not exist because oscillates.     False. Although oscillates, it is bounded: for all . For , dividing by gives   Both bounds approach as , so by the Squeeze Theorem, .      If , then has no horizontal asymptote to the right.     True. A horizontal asymptote to the right would require for some finite real number . If instead the function grows without bound so that , then it cannot approach any horizontal line .      "
},
{
  "id": "sec-limit-inf-2",
  "level": "2",
  "url": "sec-limit-inf.html#sec-limit-inf-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  Interpret limits as and graphically as long-term behavior of a function.  Identify horizontal asymptotes using limits at infinity.  Evaluate limits at infinity using dominant term analysis for rational and algebraic functions.  Apply the Squeeze Theorem to evaluate limits at infinity involving bounded functions.  Explain the meaning of a limit at infinity in an applied context.   "
},
{
  "id": "def-limit-at-infinity",
  "level": "2",
  "url": "sec-limit-inf.html#def-limit-at-infinity",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  Let be a function and let be a real number.     means that can be made arbitrarily close to by taking sufficiently large.     means that can be made arbitrarily close to by taking sufficiently negative.     "
},
{
  "id": "fig-horizontal-asymptote",
  "level": "2",
  "url": "sec-limit-inf.html#fig-horizontal-asymptote",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " A function approaching the horizontal asymptote as .   "
},
{
  "id": "fig-no-horizontal-asymptote",
  "level": "2",
  "url": "sec-limit-inf.html#fig-no-horizontal-asymptote",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " A function that increases without bound and does not approach a horizontal asymptote.   "
},
{
  "id": "ex-rational-zero-asymptote",
  "level": "2",
  "url": "sec-limit-inf.html#ex-rational-zero-asymptote",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Determine whether has a horizontal asymptote.    The dominant term in the numerator is , and the dominant term in the denominator is . For large ,   Since , the graph approaches the horizontal asymptote on both ends.   "
},
{
  "id": "ex-rational-constant-asymptote",
  "level": "2",
  "url": "sec-limit-inf.html#ex-rational-constant-asymptote",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Find the horizontal asymptote of .    The dominant terms are and , so   The graph approaches the horizontal line on both ends.   "
},
{
  "id": "ex-algebraic-dominant-terms",
  "level": "2",
  "url": "sec-limit-inf.html#ex-algebraic-dominant-terms",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  Determine the behavior of   as , and decide whether a horizontal asymptote exists.    First rewrite all terms using powers of . In the denominator,   The dominant term in the numerator is , and the dominant term in the denominator is . For large values of , the function behaves like   Simplifying,   Since , we conclude that   Therefore, this function does not have a horizontal asymptote. Instead, the approximation shows that the right end of the graph grows roughly like a line with slope .  The function is not defined for (because of the square roots), so there is no left-end behavior to consider.   "
},
{
  "id": "thm-squeeze-infinity",
  "level": "2",
  "url": "sec-limit-inf.html#thm-squeeze-infinity",
  "type": "Theorem",
  "number": "1.3.7",
  "title": "",
  "body": "  If for all sufficiently large and   then .   "
},
{
  "id": "ex-sin-over-x",
  "level": "2",
  "url": "sec-limit-inf.html#ex-sin-over-x",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": "  Evaluate .    Since , dividing by gives   Both bounds approach as . By the Squeeze Theorem,    "
},
{
  "id": "ex-application-population",
  "level": "2",
  "url": "sec-limit-inf.html#ex-application-population",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "  The population of a species of fish in a lake years after conservation measures are introduced is modeled by   Evaluate and interpret .    To evaluate the limit, we compare dominant terms in the numerator and denominator.   This means that as time passes, the population approaches fish.  In context, the value represents the long-term sustainable population of the lake. The population increases over time but does not exceed this level, which corresponds to the horizontal asymptote .   "
},
{
  "id": "ex-application-concentration",
  "level": "2",
  "url": "sec-limit-inf.html#ex-application-concentration",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "  The concentration of a medication in a patient’s bloodstream hours after administration is modeled by   Evaluate and interpret .    To evaluate the limit, we compare the dominant terms in the numerator and denominator.  The dominant term in the numerator is , while the dominant term in the denominator is . For large values of ,   Since , we conclude that   This means the concentration approaches over time. In context, this indicates that the medication is gradually eliminated from the bloodstream, and no medication remains in the long term.   "
},
{
  "id": "ex-arctan-asymptotes",
  "level": "2",
  "url": "sec-limit-inf.html#ex-arctan-asymptotes",
  "type": "Example",
  "number": "1.3.11",
  "title": "",
  "body": "  Consider the function . Evaluate and .    The inverse tangent function has a restricted range:   From trigonometry, as , the angle whose tangent is approaches , and as , it approaches .   This function has two different horizontal asymptotes: to the right and to the left.  Notice that dominant term analysis does not apply here, since is not an algebraic function. Instead, the limits are determined by the trigonometric meaning of the function.   "
},
{
  "id": "rem-limits-future-tools",
  "level": "2",
  "url": "sec-limit-inf.html#rem-limits-future-tools",
  "type": "Remark",
  "number": "1.3.12",
  "title": "",
  "body": " There are many functions whose limits at infinity cannot yet be evaluated with the techniques in this section. For example, consider .  Although both the numerator and denominator grow without bound as , the dominant-term ideas developed here do not apply. Evaluating limits of this type requires additional tools, such as L’Hôpital’s Rule, which will be introduced later in the course.  For now, it is enough to recognize when a limit can be evaluated using algebraic methods and when it cannot.  "
},
{
  "id": "tf-infinity-01",
  "level": "2",
  "url": "sec-limit-inf.html#tf-infinity-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If , then for all sufficiently large .     False. The statement means that can be made arbitrarily close to by taking sufficiently large. It does not require to equal for any value of .  For example, satisfies , but for any finite .   "
},
{
  "id": "tf-infinity-03",
  "level": "2",
  "url": "sec-limit-inf.html#tf-infinity-03",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If , then .     True. This follows from the Limit Laws for limits at infinity: adding a constant shifts the limiting value by the same constant.   "
},
{
  "id": "tf-infinity-06",
  "level": "2",
  "url": "sec-limit-inf.html#tf-infinity-06",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If for a rational function , then .     True. If the denominator has higher degree, then the denominator grows faster in magnitude than the numerator as , so the quotient approaches .  One way to justify this is to divide numerator and denominator by the highest power of in the denominator. Every term in the numerator becomes a power of (or higher), which goes to as , while the denominator approaches a nonzero constant.   "
},
{
  "id": "tf-infinity-left-right",
  "level": "2",
  "url": "sec-limit-inf.html#tf-infinity-left-right",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If , then .     False. Limits as and describe the behavior of a function on different ends of the graph and are independent of one another.  For example, the function satisfies and , which are not equal.   "
},
{
  "id": "tf-infinity-07",
  "level": "2",
  "url": "sec-limit-inf.html#tf-infinity-07",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  For , the function has a horizontal asymptote as .     False. Rewrite the denominator using powers: and . The dominant term in the numerator is and in the denominator is .  Therefore, for large ,   so . Since the function does not approach a finite number, it has no horizontal asymptote as .   "
},
{
  "id": "tf-infinity-08",
  "level": "2",
  "url": "sec-limit-inf.html#tf-infinity-08",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If a function satisfies for all , then .     True. Since and , the Squeeze Theorem implies that .   "
},
{
  "id": "tf-infinity-09",
  "level": "2",
  "url": "sec-limit-inf.html#tf-infinity-09",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   does not exist because oscillates.     False. Although oscillates, it is bounded: for all . For , dividing by gives   Both bounds approach as , so by the Squeeze Theorem, .   "
},
{
  "id": "tf-infinity-10",
  "level": "2",
  "url": "sec-limit-inf.html#tf-infinity-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If , then has no horizontal asymptote to the right.     True. A horizontal asymptote to the right would require for some finite real number . If instead the function grows without bound so that , then it cannot approach any horizontal line .   "
},
{
  "id": "sec-limit-continuity",
  "level": "1",
  "url": "sec-limit-continuity.html",
  "type": "Section",
  "number": "1.4",
  "title": "Continuity",
  "body": " Continuity    Understand the formal definition of continuity at a point and on an interval, and connect it to the intuitive “draw without lifting your pencil” idea.  Identify and classify discontinuities as removable, jump, infinite, or essential, based on their definitions and interpret their graphical representations.  Test piecewise functions for continuity at transition points and determine parameter values that make them continuous.  Determine the domain of continuity for functions involving rational expressions, square roots, and other common operations.  Apply the Composition Law to evaluate limits of compositions of continuous functions.     Definition and Overview  One of the most basic features of a function is whether it is continuous . Roughly, this means that a small change in always leads to a fairly small change in , without instantaneous jumps. In physical terms, the position of a particle moving in space is continuous, but the position displayed in a video could have a gap, making the position function jump discontinuously.    A function is continuous at whenever    Graphically, a function is continuous if the curve passes through the point without any jumps or holes. This matches the intuitive idea of continuity — you can draw the graph near without lifting your pencil.  We say is continuous on an interval whenever it is continuous at each point of the interval. For endpoints of a closed interval , we require one-sided limits: and .    Removable Discontinuity    A function has a removable discontinuity at if exists but is either undefined or does not equal that limit.   Graphically, a removable discontinuity appears as a hole in the curve at . The discontinuity is \"removable\" because we can redefine to equal the limit, making the function continuous at .   Two examples of removable discontinuities: one where is undefined, and one where the value does not equal the limit.          Revisit . Verify that the function has a removable discontinuity at .    At , both the numerator and denominator vanish, giving us the meaningless expression so the function is undefined. However, we can verify again that exists (is equal to ). This matches the definition of a removable discontinuity. Moreover we can view the picture in to see visually the hole in the graph at .      Revisit . Verify that this function has a removable discontinuity at .    At , both the numerator and denominator vanish, giving the undefined form . However, multiplying numerator and denominator by the conjugate simplifies the expression to , which is continuous everywhere. Taking the limit, we find Thus, although is undefined, the limit exists and equals 6. This is exactly the definition of a removable discontinuity, and the graph shows a “hole” at .      Jump Discontinuity    A function has a jump discontinuity at if the left and right limits exist but are unequal:    Graphically, a jump discontinuity appears as a sudden jump in the curve at .   A jump discontinuity where left and right limits differ.       Revisit . Verify that the function has a jump discontinuity at .    Notice that . For , the absolute value simplifies to , so . For , we instead get , so .  Thus the left-hand limit is while the right-hand limit is Since these limits are not equal, the two-sided limit does not exist. This confirms that has a jump discontinuity at .      Infinite Discontinuity    A function has an infinite discontinuity at if one or both one-sided limits diverge to infinity:    Graphically, an infinite discontinuity appears as a vertical asymptote in the curve at .   A discontinuity caused by a vertical asymptote.       Revisit . Verify that the function has an infinite discontinuity at .    The function is undefined at . As , , so . As , , so . In both directions the function grows beyond all bounds, so   Thus, has an infinite discontinuity at . Graphically, this appears as a vertical asymptote along the -axis.      Essential Discontinuity    A function has an essential discontinuity at if one or both one-sided limits fail to exist in any sense.   Graphically, an essential discontinuity quite often appears as a wild oscillation in the curve at .   An essential discontinuity where one-sided limits fail to exist.       Consider the function . Show that has an essential discontinuity at .    The function is not defined at . As approaches 0, the reciprocal grows without bound in magnitude. Since oscillates between and for all values of , the outputs continue to oscillate rapidly between and as .  No single limiting value can be assigned: the left-hand and right-hand limits both fail to exist because of these wild oscillations. By definition, this is an essential discontinuity at .  Graphically, the curve appears to “wiggle infinitely fast” near the vertical line , matching the intuition for an essential discontinuity.     In this course, students are not expected to determine whether a function has an essential discontinuity by analyzing its formula alone. Identifying essential discontinuities rigorously from an equation requires tools from real analysis, which are developed in courses such as MTH 320.  For MTH 132, essential discontinuities are included primarily so that you recognize that they exist and can identify them from a graph . You will not be asked to classify or prove essential discontinuities using algebraic or analytic arguments on quizzes or exams.     Continuity of Piecewise Functions  For a function defined by cases, whose graph consists of several continuous pieces, the function is continuous provided the pieces join together at the transition points where the cases meet.    Consider the piecewise function   Find the value of that makes continuous at .    To check continuity at , we need three things: (1) the function is defined at , (2) the limit exists, and (3) the limit equals .  First, , so the function is defined at for any value of .  Next, compute the one-sided limits. For , we use the left-hand piece : For , we use the right-hand piece :   For the limit to exist, these must be equal: Solving gives , so .  Finally, with we have , which matches the limit. Therefore is continuous at when .      Suppose a weight is winched from the ground at a constant speed for 8 seconds, is dropped, and lands 2 seconds later.  Then the height in feet at time seconds is given by   How fast should the winch haul upward?    The function is defined in two pieces. The first piece, , describes the weight being lifted upward from the ground at a constant speed feet per second, for times .  The second piece, , describes what happens once the weight is released at . Recall that a dropped object falls feet in seconds. Since the fall begins at , we measure the time of fall as . Thus, after seconds of falling, the weight will have fallen feet. The weight was released from a height of 64 feet, so its position after seconds is given by .  To find the correct speed of the winch, we need the two pieces of the function to “meet up” at . That means the height from the lifting phase at must equal the height from the falling phase at . Using the lifting phase we get . Using the falling phase we get . Setting these equal gives   Finally, let us check continuity explicitly at . From the left-hand side, From the right-hand side, Since both one-sided limits equal 64, the two-sided limit exists and equals 64. Moreover, this matches the value of the function at that point, . Therefore the function is continuous at .      Domain of Continuity  Almost all functions defined by formulas are continuous, except at points where they are undefined. This follows from our methods for computing limits.    Find where is continuous.    First, let’s analyze the rational factor outside the square root. Using the Limit Laws from repeatedly, we compute:   as long as the denominator does not vanish. In other words, this step is valid provided .  Next, consider the square root factor. By the Limit Laws,   but this only makes sense when the inside of the square root is nonnegative. Thus we require , or equivalently (strict inequality if we want the square root defined for all nearby ).  We now combine the two factors to evaluate the overall limit:   By the Limit Laws, the limit of a product equals the product of the limits, provided each individual limit exists. So we can separate this into two pieces:   We already computed each factor individually: the rational expression simplifies to (valid when ), and the square root tends to (valid when ).   Thus, whenever both conditions ( and ) are satisfied, this is the value of the limit.  Let's now examine the exceptional cases:     : The square root is undefined, so the function is not continuous.     : The square root is defined, and since this is the left endpoint of the domain, continuity only requires the right-hand limit. Indeed, , so the function is continuous at .     : The denominator vanishes, and the graph has a vertical asymptote. This corresponds to an infinite discontinuity (type (iv)).    Putting this all together, we conclude that is continuous everywhere in its domain, which consists of the intervals   The graph below illustrates this behavior:    Graph of showing its domain of continuity.         Compositions of Continuous Functions   Composition Law   If and is continuous at , then    A full – proof is omitted here; it uses techniques developed in a proof‑based course such as MTH320.      Evaluate     First, observe that the inside function is . Direct substitution gives , so we simplify:   Thus, as ,   Since the outer function is , which is continuous everywhere, we may apply the Composition Law:   Therefore, the limit is .      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Continuity      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning    If is continuous at , then .  True. This is exactly the definition of continuity at a point.    The function has a removable discontinuity at .   True. At , numerator and denominator both vanish, giving . Simplifying, for , so . Since is undefined, the discontinuity is removable.     If and , then has a jump discontinuity at .   True. The left and right limits both exist but are unequal, which is the definition of a jump discontinuity.     The function is continuous for all real numbers.   False. The function is only defined for . It is continuous on its domain , but not for all real numbers.     If and are both continuous at , then is also continuous at .   True. Can verify using the limit laws and definition of continuity.     The piecewise function is continuous at .   False.  while . Since the one-sided limits are unequal, the function has a jump discontinuity at .     If exists, then must be continuous at .   False. Continuity also requires that is defined and equals the limit. A function can have a removable discontinuity where the limit exists but the function is undefined (or defined to a different value).     The function has an infinite discontinuity at .   True. As , . The graph has a vertical asymptote at , so this is an infinite discontinuity.     The domain of continuity of is .   False. The square root requires , and the denominator excludes . Thus the domain is . At the endpoint , we have and   So the function is continuous at (one-sided at the endpoint). Therefore the domain of continuity is , not .     If and , then has an essential discontinuity at .   False. When one-sided limits are infinite (even if they diverge differently), this is classified as an infinite discontinuity, not an essential discontinuity.      "
},
{
  "id": "sec-limit-continuity-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "  Understand the formal definition of continuity at a point and on an interval, and connect it to the intuitive “draw without lifting your pencil” idea.  Identify and classify discontinuities as removable, jump, infinite, or essential, based on their definitions and interpret their graphical representations.  Test piecewise functions for continuity at transition points and determine parameter values that make them continuous.  Determine the domain of continuity for functions involving rational expressions, square roots, and other common operations.  Apply the Composition Law to evaluate limits of compositions of continuous functions.   "
},
{
  "id": "ssec-defn-continuity-2",
  "level": "2",
  "url": "sec-limit-continuity.html#ssec-defn-continuity-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous "
},
{
  "id": "ssec-defn-continuity-3",
  "level": "2",
  "url": "sec-limit-continuity.html#ssec-defn-continuity-3",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  A function is continuous at whenever   "
},
{
  "id": "ssec-defn-continuity-5",
  "level": "2",
  "url": "sec-limit-continuity.html#ssec-defn-continuity-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous on an interval "
},
{
  "id": "sec-limit-continuity-4-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-4-2",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": "  A function has a removable discontinuity at if exists but is either undefined or does not equal that limit.   Graphically, a removable discontinuity appears as a hole in the curve at . The discontinuity is \"removable\" because we can redefine to equal the limit, making the function continuous at .   Two examples of removable discontinuities: one where is undefined, and one where the value does not equal the limit.       "
},
{
  "id": "ex-removable-cancel",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-removable-cancel",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  Revisit . Verify that the function has a removable discontinuity at .    At , both the numerator and denominator vanish, giving us the meaningless expression so the function is undefined. However, we can verify again that exists (is equal to ). This matches the definition of a removable discontinuity. Moreover we can view the picture in to see visually the hole in the graph at .   "
},
{
  "id": "ex-removable-conjugate",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-removable-conjugate",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Revisit . Verify that this function has a removable discontinuity at .    At , both the numerator and denominator vanish, giving the undefined form . However, multiplying numerator and denominator by the conjugate simplifies the expression to , which is continuous everywhere. Taking the limit, we find Thus, although is undefined, the limit exists and equals 6. This is exactly the definition of a removable discontinuity, and the graph shows a “hole” at .   "
},
{
  "id": "sec-limit-continuity-5-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-5-2",
  "type": "Definition",
  "number": "1.4.6",
  "title": "",
  "body": "  A function has a jump discontinuity at if the left and right limits exist but are unequal:    Graphically, a jump discontinuity appears as a sudden jump in the curve at .   A jump discontinuity where left and right limits differ.    "
},
{
  "id": "ex-jump-abs-value",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-jump-abs-value",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": "  Revisit . Verify that the function has a jump discontinuity at .    Notice that . For , the absolute value simplifies to , so . For , we instead get , so .  Thus the left-hand limit is while the right-hand limit is Since these limits are not equal, the two-sided limit does not exist. This confirms that has a jump discontinuity at .   "
},
{
  "id": "sec-limit-continuity-6-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-6-2",
  "type": "Definition",
  "number": "1.4.9",
  "title": "",
  "body": "  A function has an infinite discontinuity at if one or both one-sided limits diverge to infinity:    Graphically, an infinite discontinuity appears as a vertical asymptote in the curve at .   A discontinuity caused by a vertical asymptote.    "
},
{
  "id": "ex-infinite-abs",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-infinite-abs",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": "  Revisit . Verify that the function has an infinite discontinuity at .    The function is undefined at . As , , so . As , , so . In both directions the function grows beyond all bounds, so   Thus, has an infinite discontinuity at . Graphically, this appears as a vertical asymptote along the -axis.   "
},
{
  "id": "sec-limit-continuity-7-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-7-2",
  "type": "Definition",
  "number": "1.4.12",
  "title": "",
  "body": "  A function has an essential discontinuity at if one or both one-sided limits fail to exist in any sense.   Graphically, an essential discontinuity quite often appears as a wild oscillation in the curve at .   An essential discontinuity where one-sided limits fail to exist.    "
},
{
  "id": "ex-essential-sinx-over-x",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-essential-sinx-over-x",
  "type": "Example",
  "number": "1.4.14",
  "title": "",
  "body": "  Consider the function . Show that has an essential discontinuity at .    The function is not defined at . As approaches 0, the reciprocal grows without bound in magnitude. Since oscillates between and for all values of , the outputs continue to oscillate rapidly between and as .  No single limiting value can be assigned: the left-hand and right-hand limits both fail to exist because of these wild oscillations. By definition, this is an essential discontinuity at .  Graphically, the curve appears to “wiggle infinitely fast” near the vertical line , matching the intuition for an essential discontinuity.   "
},
{
  "id": "rem-essential-discontinuity-scope",
  "level": "2",
  "url": "sec-limit-continuity.html#rem-essential-discontinuity-scope",
  "type": "Remark",
  "number": "1.4.15",
  "title": "",
  "body": " In this course, students are not expected to determine whether a function has an essential discontinuity by analyzing its formula alone. Identifying essential discontinuities rigorously from an equation requires tools from real analysis, which are developed in courses such as MTH 320.  For MTH 132, essential discontinuities are included primarily so that you recognize that they exist and can identify them from a graph . You will not be asked to classify or prove essential discontinuities using algebraic or analytic arguments on quizzes or exams.  "
},
{
  "id": "ex-piecewise-ap",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-piecewise-ap",
  "type": "Example",
  "number": "1.4.16",
  "title": "",
  "body": "  Consider the piecewise function   Find the value of that makes continuous at .    To check continuity at , we need three things: (1) the function is defined at , (2) the limit exists, and (3) the limit equals .  First, , so the function is defined at for any value of .  Next, compute the one-sided limits. For , we use the left-hand piece : For , we use the right-hand piece :   For the limit to exist, these must be equal: Solving gives , so .  Finally, with we have , which matches the limit. Therefore is continuous at when .   "
},
{
  "id": "sec-limit-continuity-8-4",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-8-4",
  "type": "Example",
  "number": "1.4.17",
  "title": "",
  "body": "  Suppose a weight is winched from the ground at a constant speed for 8 seconds, is dropped, and lands 2 seconds later.  Then the height in feet at time seconds is given by   How fast should the winch haul upward?    The function is defined in two pieces. The first piece, , describes the weight being lifted upward from the ground at a constant speed feet per second, for times .  The second piece, , describes what happens once the weight is released at . Recall that a dropped object falls feet in seconds. Since the fall begins at , we measure the time of fall as . Thus, after seconds of falling, the weight will have fallen feet. The weight was released from a height of 64 feet, so its position after seconds is given by .  To find the correct speed of the winch, we need the two pieces of the function to “meet up” at . That means the height from the lifting phase at must equal the height from the falling phase at . Using the lifting phase we get . Using the falling phase we get . Setting these equal gives   Finally, let us check continuity explicitly at . From the left-hand side, From the right-hand side, Since both one-sided limits equal 64, the two-sided limit exists and equals 64. Moreover, this matches the value of the function at that point, . Therefore the function is continuous at .   "
},
{
  "id": "sec-limit-continuity-9-3",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-9-3",
  "type": "Example",
  "number": "1.4.18",
  "title": "",
  "body": "  Find where is continuous.    First, let’s analyze the rational factor outside the square root. Using the Limit Laws from repeatedly, we compute:   as long as the denominator does not vanish. In other words, this step is valid provided .  Next, consider the square root factor. By the Limit Laws,   but this only makes sense when the inside of the square root is nonnegative. Thus we require , or equivalently (strict inequality if we want the square root defined for all nearby ).  We now combine the two factors to evaluate the overall limit:   By the Limit Laws, the limit of a product equals the product of the limits, provided each individual limit exists. So we can separate this into two pieces:   We already computed each factor individually: the rational expression simplifies to (valid when ), and the square root tends to (valid when ).   Thus, whenever both conditions ( and ) are satisfied, this is the value of the limit.  Let's now examine the exceptional cases:     : The square root is undefined, so the function is not continuous.     : The square root is defined, and since this is the left endpoint of the domain, continuity only requires the right-hand limit. Indeed, , so the function is continuous at .     : The denominator vanishes, and the graph has a vertical asymptote. This corresponds to an infinite discontinuity (type (iv)).    Putting this all together, we conclude that is continuous everywhere in its domain, which consists of the intervals   The graph below illustrates this behavior:    Graph of showing its domain of continuity.      "
},
{
  "id": "sec-limit-continuity-10-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-10-2",
  "type": "Theorem",
  "number": "1.4.20",
  "title": "Composition Law.",
  "body": " Composition Law   If and is continuous at , then    A full – proof is omitted here; it uses techniques developed in a proof‑based course such as MTH320.   "
},
{
  "id": "ex-composition-sin",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-composition-sin",
  "type": "Example",
  "number": "1.4.21",
  "title": "",
  "body": "  Evaluate     First, observe that the inside function is . Direct substitution gives , so we simplify:   Thus, as ,   Since the outer function is , which is continuous everywhere, we may apply the Composition Law:   Therefore, the limit is .   "
},
{
  "id": "tf-exercises-continuity-2-3",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " If is continuous at , then .  True. This is exactly the definition of continuity at a point.  "
},
{
  "id": "tf-exercises-continuity-2-4",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " The function has a removable discontinuity at .   True. At , numerator and denominator both vanish, giving . Simplifying, for , so . Since is undefined, the discontinuity is removable.   "
},
{
  "id": "tf-exercises-continuity-2-5",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " If and , then has a jump discontinuity at .   True. The left and right limits both exist but are unequal, which is the definition of a jump discontinuity.   "
},
{
  "id": "tf-exercises-continuity-2-6",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " The function is continuous for all real numbers.   False. The function is only defined for . It is continuous on its domain , but not for all real numbers.   "
},
{
  "id": "tf-exercises-continuity-2-7",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " If and are both continuous at , then is also continuous at .   True. Can verify using the limit laws and definition of continuity.   "
},
{
  "id": "tf-exercises-continuity-2-8",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " The piecewise function is continuous at .   False.  while . Since the one-sided limits are unequal, the function has a jump discontinuity at .   "
},
{
  "id": "tf-exercises-continuity-2-9",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " If exists, then must be continuous at .   False. Continuity also requires that is defined and equals the limit. A function can have a removable discontinuity where the limit exists but the function is undefined (or defined to a different value).   "
},
{
  "id": "tf-exercises-continuity-2-10",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " The function has an infinite discontinuity at .   True. As , . The graph has a vertical asymptote at , so this is an infinite discontinuity.   "
},
{
  "id": "tf-exercises-continuity-2-11",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " The domain of continuity of is .   False. The square root requires , and the denominator excludes . Thus the domain is . At the endpoint , we have and   So the function is continuous at (one-sided at the endpoint). Therefore the domain of continuity is , not .   "
},
{
  "id": "tf-exercises-continuity-2-12",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " If and , then has an essential discontinuity at .   False. When one-sided limits are infinite (even if they diverge differently), this is classified as an infinite discontinuity, not an essential discontinuity.   "
},
{
  "id": "sec-limit-ivt",
  "level": "1",
  "url": "sec-limit-ivt.html",
  "type": "Section",
  "number": "1.5",
  "title": "Intermediate Value Theorem",
  "body": " Intermediate Value Theorem    State the Intermediate Value Theorem and explain in your own words what it guarantees about continuous functions.  Apply the IVT to demonstrate that an equation has a solution within a given interval, even without finding the exact solution.  Recognize situations where the IVT cannot be applied, such as when a function is not continuous on the entire interval.  Interpret the IVT graphically and numerically, understanding how it ensures intermediate values are attained.    One of the most important applications of continuity is the Intermediate Value Theorem (IVT). This theorem provides a way to guarantee the existence of solutions to equations, even when we cannot solve them exactly. It also explains why continuous functions must pass through all intermediate values between two function outputs.   Intermediate Value Theorem (IVT)   If is continuous for in the interval , and is between and , meaning either or , then there is at least one (but possibly more) value of Here lies in the open interval , between and but excluding both endpoints: . such that .     Illustration of the Intermediate Value Theorem: a continuous function on , a value between and , and at least one point with .         This says that as the function value goes continuously from to , perhaps rising and falling many times, it must pass through every value between and .   Let's see how the theorem works in practice.   Applying the IVT   Let . Show that there exists a number such that .    The function is a polynomial, hence continuous on every interval, in particular on .  Evaluate the endpoints: and . Thus , so the value lies between and .  By the Intermediate Value Theorem, there exists such that . So although we do not know the exact value of we know that is must exist and what interval it is in.    In the previous example, everything worked out neatly: the function was continuous on the interval and the target value fell between the two endpoint values. But if continuity is broken, the Intermediate Value Theorem no longer applies. The next example illustrates this.    Consider the function:    Does take on the value somewhere in the interval ?  Can the Intermediate Value Theorem be applied to justify your answer to (a)? Why or why not?       Solve :    Since , the equation has no solution in . So No , does not take the value on .     No — the Intermediate Value Theorem (IVT) requires continuity on a closed interval. The function is not continuous on because it has a vertical asymptote at (the denominator is zero there).  So even though and , and the value lies between and , because is not continuous on the entire interval the Intermediate Value Theorem cannot be applied.      Finally, let's look at a famous equation where the IVT guarantees the existence of a solution, even though we cannot solve it with algebra alone.    Show that there exists a solution to the equation .    There is no simple algebraic way to solve directly. Instead, define a new function   Then solving is equivalent to finding a root of , that is, some with .  First check some values of on the interval :   .  .   Thus, and , so the function values change sign between and .  Next, recall that is continuous: the cosine function is continuous everywhere, and is also continuous, so their difference is continuous.  By the Intermediate Value Theorem, if a continuous function takes on values of opposite signs at the endpoints of an interval, then it must equal zero for some number between those endpoints. Therefore, there exists such that .  In other words, there is some number with . (In fact, numerically , but the IVT only guarantees existence, not the exact value.)    The Intermediate Value Theorem is powerful because it guarantees the existence of solutions even when they cannot be computed exactly. Without relying on advanced tools or calculators, it allows us to conclude that roots and crossing points must lie within specific intervals. This gives us both confidence and direction when working with problems that might otherwise seem inaccessible.   Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Intermediate Value Theorem      Practice \/ Study Problems   Some True\/False Questions   Determine whether each statement is true or false and explain your reasoning    The IVT can be used to show that has a solution in the interval .   True. Let (a polynomial, hence continuous). Then and . Since 0 lies between and , the IVT guarantees a root .      A function is continuous on the interval . Values of are given in the table below:   There must exist some such that .    True. Since and , and is continuous, the IVT guarantees a value with .     The IVT tells us exactly where a solution occurs and gives us the formula for the solution.   False. The IVT guarantees existence of at least one solution in an interval but does not locate it exactly or provide a formula.     If is continuous on and , , then for some .   True. Continuity on and opposite signs at the endpoints imply, by IVT, that some satisfies .      Multiple Choice   For each question, choose the single best answer from the options provided.     Which of the following best describes what the IVT guarantees?   The exact solution of .  The existence of at least one solution to in , if is continuous.  The maximum value of on .  The slope of the tangent line to .     Answer: B. The IVT guarantees existence (not exact location or value) provided continuity on and that lies between and .      Let . On which interval can the IVT be used to show a solution to exists?          Answer: B. , so a root lies in . The other intervals have no sign change.      The IVT can be used to show that has a solution in which interval?          Answer: A. For , and ; continuity gives a root in .      Which of the following is not an application of the IVT?   Proving an equation has a solution in an interval.  Guaranteeing that a continuous function crosses a certain horizontal line.  Finding the exact numerical value of a solution.  Explaining why a temperature must have reached 70°F if it rose from 65°F to 75°F.     Answer: C. IVT does not give exact values; it guarantees existence.      Written Response   Answer each question in complete sentences, showing your reasoning and any supporting work.    Use the IVT to prove that the equation has a solution in the interval .   Let (continuous). Compute and . Since 0 lies between these values, the IVT guarantees a root .     Explain why the function does not satisfy the conditions of the IVT on .    is not defined at and hence not continuous on the closed interval . The IVT requires continuity on the entire interval.     A function is continuous on , with and . Use the IVT to explain why must have a solution in .   Since lies between and , and is continuous on , the IVT guarantees with .     Suppose a car's speed (a continuous function of time) was 40 mph at 2:00 pm and 65 mph at 2:10 pm. Explain, using the IVT, why there must have been a time when the car's speed was exactly 55 mph.   Let be speed, continuous on . Since lies between and , the IVT implies some time in that interval with .     Why does the IVT not apply to the function on , even though and ?   The given formula is undefined at (removable discontinuity), so the function is not continuous on the entire closed interval . Thus the hypotheses of the IVT are not met.      "
},
{
  "id": "sec-limit-ivt-2",
  "level": "2",
  "url": "sec-limit-ivt.html#sec-limit-ivt-2",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "  State the Intermediate Value Theorem and explain in your own words what it guarantees about continuous functions.  Apply the IVT to demonstrate that an equation has a solution within a given interval, even without finding the exact solution.  Recognize situations where the IVT cannot be applied, such as when a function is not continuous on the entire interval.  Interpret the IVT graphically and numerically, understanding how it ensures intermediate values are attained.   "
},
{
  "id": "sec-limit-ivt-3",
  "level": "2",
  "url": "sec-limit-ivt.html#sec-limit-ivt-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Intermediate Value Theorem "
},
{
  "id": "thm-IVT",
  "level": "2",
  "url": "sec-limit-ivt.html#thm-IVT",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "Intermediate Value Theorem (IVT).",
  "body": " Intermediate Value Theorem (IVT)   If is continuous for in the interval , and is between and , meaning either or , then there is at least one (but possibly more) value of Here lies in the open interval , between and but excluding both endpoints: . such that .     Illustration of the Intermediate Value Theorem: a continuous function on , a value between and , and at least one point with .       "
},
{
  "id": "sec-limit-ivt-5",
  "level": "2",
  "url": "sec-limit-ivt.html#sec-limit-ivt-5",
  "type": "Remark",
  "number": "1.5.3",
  "title": "",
  "body": " This says that as the function value goes continuously from to , perhaps rising and falling many times, it must pass through every value between and .  "
},
{
  "id": "ex-ivt-first",
  "level": "2",
  "url": "sec-limit-ivt.html#ex-ivt-first",
  "type": "Example",
  "number": "1.5.4",
  "title": "Applying the IVT.",
  "body": " Applying the IVT   Let . Show that there exists a number such that .    The function is a polynomial, hence continuous on every interval, in particular on .  Evaluate the endpoints: and . Thus , so the value lies between and .  By the Intermediate Value Theorem, there exists such that . So although we do not know the exact value of we know that is must exist and what interval it is in.   "
},
{
  "id": "ex-ivt-rational",
  "level": "2",
  "url": "sec-limit-ivt.html#ex-ivt-rational",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": "  Consider the function:    Does take on the value somewhere in the interval ?  Can the Intermediate Value Theorem be applied to justify your answer to (a)? Why or why not?       Solve :    Since , the equation has no solution in . So No , does not take the value on .     No — the Intermediate Value Theorem (IVT) requires continuity on a closed interval. The function is not continuous on because it has a vertical asymptote at (the denominator is zero there).  So even though and , and the value lies between and , because is not continuous on the entire interval the Intermediate Value Theorem cannot be applied.     "
},
{
  "id": "sec-limit-ivt-11",
  "level": "2",
  "url": "sec-limit-ivt.html#sec-limit-ivt-11",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": "  Show that there exists a solution to the equation .    There is no simple algebraic way to solve directly. Instead, define a new function   Then solving is equivalent to finding a root of , that is, some with .  First check some values of on the interval :   .  .   Thus, and , so the function values change sign between and .  Next, recall that is continuous: the cosine function is continuous everywhere, and is also continuous, so their difference is continuous.  By the Intermediate Value Theorem, if a continuous function takes on values of opposite signs at the endpoints of an interval, then it must equal zero for some number between those endpoints. Therefore, there exists such that .  In other words, there is some number with . (In fact, numerically , but the IVT only guarantees existence, not the exact value.)   "
},
{
  "id": "exercises-ivt-2-3",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " The IVT can be used to show that has a solution in the interval .   True. Let (a polynomial, hence continuous). Then and . Since 0 lies between and , the IVT guarantees a root .   "
},
{
  "id": "ivt-table-tf",
  "level": "2",
  "url": "sec-limit-ivt.html#ivt-table-tf",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  A function is continuous on the interval . Values of are given in the table below:   There must exist some such that .    True. Since and , and is continuous, the IVT guarantees a value with .   "
},
{
  "id": "exercises-ivt-2-5",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " The IVT tells us exactly where a solution occurs and gives us the formula for the solution.   False. The IVT guarantees existence of at least one solution in an interval but does not locate it exactly or provide a formula.   "
},
{
  "id": "exercises-ivt-2-6",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " If is continuous on and , , then for some .   True. Continuity on and opposite signs at the endpoints imply, by IVT, that some satisfies .   "
},
{
  "id": "exercises-ivt-3-3",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-3-3",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Which of the following best describes what the IVT guarantees?   The exact solution of .  The existence of at least one solution to in , if is continuous.  The maximum value of on .  The slope of the tangent line to .     Answer: B. The IVT guarantees existence (not exact location or value) provided continuity on and that lies between and .   "
},
{
  "id": "exercises-ivt-3-4",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-3-4",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Let . On which interval can the IVT be used to show a solution to exists?          Answer: B. , so a root lies in . The other intervals have no sign change.   "
},
{
  "id": "exercises-ivt-3-5",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-3-5",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  The IVT can be used to show that has a solution in which interval?          Answer: A. For , and ; continuity gives a root in .   "
},
{
  "id": "exercises-ivt-3-6",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-3-6",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Which of the following is not an application of the IVT?   Proving an equation has a solution in an interval.  Guaranteeing that a continuous function crosses a certain horizontal line.  Finding the exact numerical value of a solution.  Explaining why a temperature must have reached 70°F if it rose from 65°F to 75°F.     Answer: C. IVT does not give exact values; it guarantees existence.   "
},
{
  "id": "exercises-ivt-4-3",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-4-3",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Use the IVT to prove that the equation has a solution in the interval .   Let (continuous). Compute and . Since 0 lies between these values, the IVT guarantees a root .   "
},
{
  "id": "exercises-ivt-4-4",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-4-4",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Explain why the function does not satisfy the conditions of the IVT on .    is not defined at and hence not continuous on the closed interval . The IVT requires continuity on the entire interval.   "
},
{
  "id": "exercises-ivt-4-5",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-4-5",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " A function is continuous on , with and . Use the IVT to explain why must have a solution in .   Since lies between and , and is continuous on , the IVT guarantees with .   "
},
{
  "id": "exercises-ivt-4-6",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-4-6",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Suppose a car's speed (a continuous function of time) was 40 mph at 2:00 pm and 65 mph at 2:10 pm. Explain, using the IVT, why there must have been a time when the car's speed was exactly 55 mph.   Let be speed, continuous on . Since lies between and , the IVT implies some time in that interval with .   "
},
{
  "id": "exercises-ivt-4-7",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-4-7",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Why does the IVT not apply to the function on , even though and ?   The given formula is undefined at (removable discontinuity), so the function is not continuous on the entire closed interval . Thus the hypotheses of the IVT are not met.   "
},
{
  "id": "sec-limit-ww",
  "level": "1",
  "url": "sec-limit-ww.html",
  "type": "Section",
  "number": "1.6",
  "title": "Additional Worked-Out Problems",
  "body": " Additional Worked-Out Problems   Limits from Graphs and Notation  test    Limit Laws and Algebraic Techniques  test    Limits at Infinity: Horizontal Asymptotes  test    Continuity  test    Intermediate Value Theorem  test   "
},
{
  "id": "sec-derivative-intro",
  "level": "1",
  "url": "sec-derivative-intro.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction and Motivation for Derivatives",
  "body": " Introduction and Motivation for Derivatives    Compute the average rate of change of a function on an interval and interpret it as the slope of a secant line.  Describe instantaneous velocity as the limit of average velocities over shrinking time intervals.  Interpret instantaneous rate of change geometrically as the slope of a tangent line.  Use tables, graphs, and nearby average rates of change to estimate an instantaneous rate of change.    Derivatives begin with a simple question: how fast is something changing right now ? You already know how to compute an average rate of change over a time interval. The derivative is what happens when we shrink that interval smaller and smaller and study the limiting behavior of these average rates.  Throughout this section, the same expression will appear in multiple contexts: average velocity, slopes of secant lines, and instantaneous rate of change. This expression is called the difference quotient .   Average and Instantaneous Velocity  Suppose a particle moves along a line so that at time it is at position . We begin by defining the average velocity over a time interval.    Let denote the position of an object at time . The average velocity of the object on the time interval is      The average velocity represents the total change in position divided by the total change in time. Geometrically, it is the slope of the secant line connecting and on the graph of .   Instantaneous velocity cannot be measured over a single moment in time. Instead, it is defined as a limit of average velocities over shrinking time intervals.    Let denote the position of an object at time . The instantaneous velocity at time is   provided this limit exists. More generally, if represents a quantity other than position, this same limit represents the instantaneous rate of change of that quantity with respect to time at .     Velocity may be positive or negative depending on direction of motion. The speed of an object is the absolute value of its velocity.     A stone dropped from a bridge has position (in feet below the bridge) approximately after seconds.     Compute the average velocity on using .    Using with and ,   So the average velocity on is ft\/sec.      Use the table of velocities below to estimate the instantaneous velocity at .     As gets smaller, the average velocities get closer to . So a reasonable estimate for the instantaneous velocity at is ft\/sec.      Compute the instantaneous velocity at using .    By , the instantaneous velocity at is   Since , we compute   As we take smaller and smaller, the error term approaches zero, and the average velocity approaches the limiting value , which by definition is the instantaneous velocity. Therefore, the instantaneous velocity at is ft\/sec.       Slopes of Secant Lines and Slopes of Tangent Lines  We have described velocity on several conceptual levels. It can be understood as a physical quantity describing motion, a numerical approximation obtained from average rates of change, and an algebraic computation using limits. Velocity also has a geometric interpretation in terms of the graph , where it corresponds to the slope of the graph at a given time.  A secant line is a line that passes through two distinct points on the graph. It cuts across the curve and represents how the function changes between two different input values. When these two points are far apart, the secant line gives a coarse description of the function’s behavior over an interval.    A secant line connecting the points and , representing the average rate of change of on the interval .       Let be a function and let . The slope of the secant line to between and is      The slope of the secant line is the slope of the line through the points and . Algebraically, it is the same formula used for the average rate of change.   A tangent line , on the other hand, touches the graph at a single point and matches the direction of the curve at that point. The tangent line represents the best linear approximation to the function near a specific point.    A tangent line through the point , representing the instantaneous rate of change of at .     As the second point used to define a secant line moves closer and closer to the first, the secant line approaches the tangent line. This idea leads directly to the following definitions.     As two points on the curve move closer together, the secant line determined by those points approaches the tangent line at a single point.   Animated graph of a smooth curve with two points marked on it. A secant line passes through the two points. As the points move closer together along the curve, the secant line rotates and converges to the tangent line at that point, illustrating how the tangent line arises as a limit of secant lines.        Let be a function and let be a point in its domain. The slope of the tangent line to at is   provided this limit exists. Equivalently, the slope of the tangent line can be written as   provided this limit exists.     The limit as is the more common definition in practice, because it is often algebraically convenient to evaluate limits at after simplifying the expression.    The slope of the tangent line gives the slope of the line that best approximates the graph of near . This is the same limit used to define instantaneous velocity, which explains why this limit describes both slopes of curves and rates of change.   At this stage, tables and graphs allow us to estimate instantaneous rates of change. Exact values will come from limits.   A Trigonometric Model and Estimating Rates   We model average daily temperature through the year by the sinusoidal function:   Using this model we found that   Using this table, estimate how quickly the weather is warming at (Apr 10), in degrees per day.    To estimate how quickly the temperature is changing at , we approximate the instantaneous rate of change using average rates of change from nearby data values in the table.  First, compute the average rate of change from to .   Next, compute the average rate of change from to .   These two values represent average rates of change on either side of . Since they are close in value, we use their average to estimate the instantaneous rate of change at .   Therefore, the temperature is increasing at approximately degrees Fahrenheit per day on April 10.    In the next sections, we will turn these ideas into a precise definition and develop tools for computing instantaneous rates of change efficiently.    Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Introduction and Motivation for Derivatives      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning      If , then the average rate of change of on is .     True. The average rate of change on is       The average rate of change of on any interval is .     True. On ,       If , then the average rate of change on is .     True (for ). Compute   Expand and simplify:       For , the slope of the tangent line to the graph of at is .     True. By the definition of the slope of the tangent line,   Expand and simplify:       If , then the slope of the tangent line to the graph of is at every point .     True. Using the definition,   This matches the geometric fact that the graph is a horizontal line.      If the position of an object at time is given by , then the instantaneous velocity of the object at is .     True. Instantaneous velocity at is defined by   Expand . Then   Simplify and evaluate:       If , then .     False. Compute   Multiply numerator and denominator by the conjugate :   Simplify and evaluate:       If average rates of change computed using and are very close in value, then that common value is a reasonable estimate of the instantaneous rate of change.     True. The instantaneous rate of change is defined as a limit of average rates of change as . If two average rates from small values of are close, that suggests the values are stabilizing, and the shared value is a reasonable estimate of the limiting value.      Estimates of instantaneous velocity obtained from tables are exact values.     False. A table provides approximate values of average velocity for small but nonzero time steps. Unless we compute the actual limit, the value from the table is only an estimate of the instantaneous velocity.      A negative instantaneous velocity means the object’s position is decreasing at that moment.     True. Instantaneous velocity is the instantaneous rate of change of position. If at a moment, then position is decreasing at that moment, meaning the object is moving in the negative direction.      The slope of the tangent line at is the limit of slopes of secant lines through and as .     True. The slope of the secant line through and is . The slope of the tangent line is defined as the limit of these secant slopes as .      If all nearby secant line slopes are increasing as , then the slope of the tangent line must be infinite.     False. Secant slopes can increase as the second point approaches and still approach a finite limit. For example, for at , the secant slopes increase as increases, but as the slopes approach , which is finite.      If , then has a horizontal tangent line at .     True. The expression is the slope of the tangent line at , provided it exists. If that slope equals , then the tangent line has slope , which means it is horizontal.      Two different functions can have the same average rate of change on an interval but different instantaneous rates of change at a point in that interval.     True. The average rate of change depends only on endpoint values, but instantaneous rate of change depends on local behavior. For example, on let and . Then and , so both have the same average rate of change: . But at , their instantaneous rates differ: has slope , while has a different slope because of the sinusoidal term.      "
},
{
  "id": "sec-derivative-intro-2",
  "level": "2",
  "url": "sec-derivative-intro.html#sec-derivative-intro-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "  Compute the average rate of change of a function on an interval and interpret it as the slope of a secant line.  Describe instantaneous velocity as the limit of average velocities over shrinking time intervals.  Interpret instantaneous rate of change geometrically as the slope of a tangent line.  Use tables, graphs, and nearby average rates of change to estimate an instantaneous rate of change.   "
},
{
  "id": "def-average-velocity",
  "level": "2",
  "url": "sec-derivative-intro.html#def-average-velocity",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  Let denote the position of an object at time . The average velocity of the object on the time interval is    "
},
{
  "id": "rem-avg-velocity-interpretation",
  "level": "2",
  "url": "sec-derivative-intro.html#rem-avg-velocity-interpretation",
  "type": "Remark",
  "number": "2.1.2",
  "title": "",
  "body": " The average velocity represents the total change in position divided by the total change in time. Geometrically, it is the slope of the secant line connecting and on the graph of .  "
},
{
  "id": "def-instantaneous-velocity",
  "level": "2",
  "url": "sec-derivative-intro.html#def-instantaneous-velocity",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "  Let denote the position of an object at time . The instantaneous velocity at time is   provided this limit exists. More generally, if represents a quantity other than position, this same limit represents the instantaneous rate of change of that quantity with respect to time at .   "
},
{
  "id": "rem-velocity-speed",
  "level": "2",
  "url": "sec-derivative-intro.html#rem-velocity-speed",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": " Velocity may be positive or negative depending on direction of motion. The speed of an object is the absolute value of its velocity.  "
},
{
  "id": "ex-falling-stone",
  "level": "2",
  "url": "sec-derivative-intro.html#ex-falling-stone",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  A stone dropped from a bridge has position (in feet below the bridge) approximately after seconds.     Compute the average velocity on using .    Using with and ,   So the average velocity on is ft\/sec.      Use the table of velocities below to estimate the instantaneous velocity at .     As gets smaller, the average velocities get closer to . So a reasonable estimate for the instantaneous velocity at is ft\/sec.      Compute the instantaneous velocity at using .    By , the instantaneous velocity at is   Since , we compute   As we take smaller and smaller, the error term approaches zero, and the average velocity approaches the limiting value , which by definition is the instantaneous velocity. Therefore, the instantaneous velocity at is ft\/sec.    "
},
{
  "id": "secant-and-tangent-3",
  "level": "2",
  "url": "sec-derivative-intro.html#secant-and-tangent-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant line "
},
{
  "id": "secant-line",
  "level": "2",
  "url": "sec-derivative-intro.html#secant-line",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": " A secant line connecting the points and , representing the average rate of change of on the interval .   "
},
{
  "id": "def-secant-slope",
  "level": "2",
  "url": "sec-derivative-intro.html#def-secant-slope",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": "  Let be a function and let . The slope of the secant line to between and is    "
},
{
  "id": "rem-secant-interpretation",
  "level": "2",
  "url": "sec-derivative-intro.html#rem-secant-interpretation",
  "type": "Remark",
  "number": "2.1.8",
  "title": "",
  "body": " The slope of the secant line is the slope of the line through the points and . Algebraically, it is the same formula used for the average rate of change.  "
},
{
  "id": "secant-and-tangent-7",
  "level": "2",
  "url": "sec-derivative-intro.html#secant-and-tangent-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent line "
},
{
  "id": "tangent-line",
  "level": "2",
  "url": "sec-derivative-intro.html#tangent-line",
  "type": "Figure",
  "number": "2.1.9",
  "title": "",
  "body": " A tangent line through the point , representing the instantaneous rate of change of at .   "
},
{
  "id": "secant-and-tangent-10-1-1",
  "level": "2",
  "url": "sec-derivative-intro.html#secant-and-tangent-10-1-1",
  "type": "Figure",
  "number": "2.1.10",
  "title": "",
  "body": " As two points on the curve move closer together, the secant line determined by those points approaches the tangent line at a single point.   Animated graph of a smooth curve with two points marked on it. A secant line passes through the two points. As the points move closer together along the curve, the secant line rotates and converges to the tangent line at that point, illustrating how the tangent line arises as a limit of secant lines.   "
},
{
  "id": "def-tangent-slope",
  "level": "2",
  "url": "sec-derivative-intro.html#def-tangent-slope",
  "type": "Definition",
  "number": "2.1.11",
  "title": "",
  "body": "  Let be a function and let be a point in its domain. The slope of the tangent line to at is   provided this limit exists. Equivalently, the slope of the tangent line can be written as   provided this limit exists.   "
},
{
  "id": "secant-and-tangent-12",
  "level": "2",
  "url": "sec-derivative-intro.html#secant-and-tangent-12",
  "type": "Remark",
  "number": "2.1.12",
  "title": "",
  "body": " The limit as is the more common definition in practice, because it is often algebraically convenient to evaluate limits at after simplifying the expression.  "
},
{
  "id": "rem-tangent-connection",
  "level": "2",
  "url": "sec-derivative-intro.html#rem-tangent-connection",
  "type": "Remark",
  "number": "2.1.13",
  "title": "",
  "body": " The slope of the tangent line gives the slope of the line that best approximates the graph of near . This is the same limit used to define instantaneous velocity, which explains why this limit describes both slopes of curves and rates of change.  "
},
{
  "id": "ex-temperature-average-rates",
  "level": "2",
  "url": "sec-derivative-intro.html#ex-temperature-average-rates",
  "type": "Example",
  "number": "2.1.14",
  "title": "A Trigonometric Model and Estimating Rates.",
  "body": " A Trigonometric Model and Estimating Rates   We model average daily temperature through the year by the sinusoidal function:   Using this model we found that   Using this table, estimate how quickly the weather is warming at (Apr 10), in degrees per day.    To estimate how quickly the temperature is changing at , we approximate the instantaneous rate of change using average rates of change from nearby data values in the table.  First, compute the average rate of change from to .   Next, compute the average rate of change from to .   These two values represent average rates of change on either side of . Since they are close in value, we use their average to estimate the instantaneous rate of change at .   Therefore, the temperature is increasing at approximately degrees Fahrenheit per day on April 10.   "
},
{
  "id": "tf-deriv-intro-01",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If , then the average rate of change of on is .     True. The average rate of change on is    "
},
{
  "id": "tf-deriv-intro-02",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  The average rate of change of on any interval is .     True. On ,    "
},
{
  "id": "tf-deriv-intro-04",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-04",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If , then the average rate of change on is .     True (for ). Compute   Expand and simplify:    "
},
{
  "id": "tf-deriv-intro-05",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-05",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  For , the slope of the tangent line to the graph of at is .     True. By the definition of the slope of the tangent line,   Expand and simplify:    "
},
{
  "id": "tf-deriv-intro-07",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-07",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If , then the slope of the tangent line to the graph of is at every point .     True. Using the definition,   This matches the geometric fact that the graph is a horizontal line.   "
},
{
  "id": "tf-deriv-intro-08",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-08",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If the position of an object at time is given by , then the instantaneous velocity of the object at is .     True. Instantaneous velocity at is defined by   Expand . Then   Simplify and evaluate:    "
},
{
  "id": "tf-deriv-intro-09",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-09",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  If , then .     False. Compute   Multiply numerator and denominator by the conjugate :   Simplify and evaluate:    "
},
{
  "id": "tf-deriv-intro-10",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If average rates of change computed using and are very close in value, then that common value is a reasonable estimate of the instantaneous rate of change.     True. The instantaneous rate of change is defined as a limit of average rates of change as . If two average rates from small values of are close, that suggests the values are stabilizing, and the shared value is a reasonable estimate of the limiting value.   "
},
{
  "id": "tf-deriv-intro-11",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Estimates of instantaneous velocity obtained from tables are exact values.     False. A table provides approximate values of average velocity for small but nonzero time steps. Unless we compute the actual limit, the value from the table is only an estimate of the instantaneous velocity.   "
},
{
  "id": "tf-deriv-intro-14",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-14",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  A negative instantaneous velocity means the object’s position is decreasing at that moment.     True. Instantaneous velocity is the instantaneous rate of change of position. If at a moment, then position is decreasing at that moment, meaning the object is moving in the negative direction.   "
},
{
  "id": "tf-deriv-intro-15",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-15",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  The slope of the tangent line at is the limit of slopes of secant lines through and as .     True. The slope of the secant line through and is . The slope of the tangent line is defined as the limit of these secant slopes as .   "
},
{
  "id": "tf-deriv-intro-16",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-16",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  If all nearby secant line slopes are increasing as , then the slope of the tangent line must be infinite.     False. Secant slopes can increase as the second point approaches and still approach a finite limit. For example, for at , the secant slopes increase as increases, but as the slopes approach , which is finite.   "
},
{
  "id": "tf-deriv-intro-18",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-18",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  If , then has a horizontal tangent line at .     True. The expression is the slope of the tangent line at , provided it exists. If that slope equals , then the tangent line has slope , which means it is horizontal.   "
},
{
  "id": "tf-deriv-intro-19",
  "level": "2",
  "url": "sec-derivative-intro.html#tf-deriv-intro-19",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Two different functions can have the same average rate of change on an interval but different instantaneous rates of change at a point in that interval.     True. The average rate of change depends only on endpoint values, but instantaneous rate of change depends on local behavior. For example, on let and . Then and , so both have the same average rate of change: . But at , their instantaneous rates differ: has slope , while has a different slope because of the sinusoidal term.   "
},
{
  "id": "sec-derivative-defn",
  "level": "1",
  "url": "sec-derivative-defn.html",
  "type": "Section",
  "number": "2.2",
  "title": "Definition of the Derivative",
  "body": " Definition of the Derivative    Compute the derivative using the limit definition.  Interpret the derivative as an instantaneous rate of change and as the slope of a tangent line.  Rewrite the derivative definition using either or .  Define the derivative function and interpret it as a new function.  Recognize common situations where a derivative fails to exist (vertical tangents, corners, discontinuities).  Identify where a function is differentiable on an interval by locating vertical tangents, corners\/cusps, and discontinuities.     Definition of the Derivative  In the last section, we saw that instantaneous velocity can be obtained as a limit of average velocities over shorter and shorter time increments. Likewise, the slope of a tangent line can be obtained as a limit of secant slopes as the secant point moves closer and closer to the point of tangency.  Both ideas measure an instantaneous rate of change. For a general function , we define its instantaneous rate of change at using the following limit.   Derivative at a Point   The derivative of a function at , denoted , is defined by   provided the limit exists.    Here is the change in the output, and is the change in the input. The quotient is the average rate of change over the interval from to , and the derivative is the limit as the increment shrinks to 0.  Another common form comes from substituting (so that ):   Geometrically, if exists, then it is the slope of the tangent line to at the point . The tangent line has equation    If the limit defining exists, we say is differentiable at . If the limit does not exist, then is undefined and is not differentiable at .     Computing Derivatives from the Definition  A derivative is always a limit of a difference quotient, so direct substitution usually produces the meaningless expression . The goal is to simplify the difference quotient until the limit can be evaluated.   A Rational Example   Find for .    Step by Step:      A Radical Example   Find for .    We multiply by the conjugate to eliminate the radical in the numerator.      A Cube Root Example   Find for .    Here we use the difference of cubes identity .   This example is a good preview of why we will soon develop derivative rules: computing derivatives from the limit definition can become algebraically heavy.      The Derivative Function  The derivative at a point is a single number. But we can compute the derivative for many input values, producing a new function.  For example, consider from the previous example. At each value of , the function has a slope. Plotting these slopes as points creates a new graph, which we call the graph of the derivative function .     Slopes of tangent lines to at many values of , plotted as points and connected to form the graph of the derivative function.   Animated graph showing the cube root function with tangent lines at various points. For each point, the slope of the tangent line is recorded and plotted separately. As these slope values are connected, they form a new curve representing the derivative function.       Derivative Function   The derivative function of , denoted , is defined by   for all where this limit exists.     Computing a Derivative Function   Let . Find .    Step by Step:   Graphically this is what we have accomplished     The function with tangent lines drawn at several points. The slopes of these tangent lines are labeled and shown to align with the values of the derivative function .   Graph showing the quadratic function f(x)=x(x-2). At several points along the curve, tangent lines are drawn and their slopes are labeled with values such as −4, −2, 0, 2, and 4. A separate straight line representing the derivative f'(x)=2x-2 is shown, illustrating how each slope of f corresponds to a point on the derivative graph.          When the Derivative Fails to Exist  Even if a function is defined at a point, the derivative may fail to exist there. Graphically, this happens when the curve does not have a single well-defined tangent line.  Common ways differentiability can fail include:   Vertical Tangent: slopes become infinite (unbounded).  Corner: the left-hand and right-hand slopes are different.  Discontinuity: if a function is not continuous at a point, then it cannot be differentiable there.   We first consider what happens when a function has a vertical tangent. Recall that the derivative at a point represents the slope of the tangent line. Because vertical lines have undefined slope, the derivative cannot exist at any point where the tangent line is vertical.   A Vertical Tangent   Consider the function , which we analyzed previously in . Show that has a vertical tangent at .    From , the derivative of is   Trying to substitute in , the denominator yields , causing the derivative to grow without bound like we saw in our section on infinite limits . In other words, the slopes of the tangent lines become arbitrarily large in magnitude.  Graphically, this behavior appears as the tangent lines becoming steeper and steeper near , eventually approaching a vertical line. Since vertical lines have undefined slope, the derivative does not exist at .   Graph of near , showing a vertical tangent line at the origin where the slope is undefined.   Graph of the cube root function near the origin. The curve becomes very steep as it approaches zero. A vertical line is drawn at zero to represent the tangent line at that point. Because the tangent line is vertical, its slope is undefined and the derivative does not exist there.    Therefore, is not differentiable at due to the presence of a vertical tangent line.    Next we consider two other common ways differentiability can fail: corners and discontinuities. In these situations, it is helpful to introduce right-hand and left-hand derivatives, defined using one-sided limits in the same spirit as one-sided limits for functions. These allow us to determine whether the derivative exists by comparing the slopes approaching a point from the right and from the left.   Right-Hand Derivative   Let be a function and let be a point in its domain. The right-hand derivative of at is   provided this limit exists.     Left-Hand Derivative   Let be a function and let be a point in its domain. The left-hand derivative of at is   provided this limit exists.     Remember that the derivative is defined as a limit. A two-sided limit exists only when the corresponding one-sided limits both exist and agree. Therefore, is differentiable at only if both and exist and satisfy . If the left-hand and right-hand derivatives do not agree, then the derivative does not exist.    A Corner   Show that the function is not differentiable at by computing the left-hand and right-hand derivatives at that point.    We compute the one-sided derivatives at . First note that .  To evaluate the limits, we recall the definition of absolute value from . This definition tells us how behaves depending on whether is positive or negative.  The right-hand derivative is   For , we have , so   The left-hand derivative is   For , we have , so   Since , the derivative at does not exist. This corresponds graphically to a sharp corner at the origin, where the slopes approaching from the left and right are different.    The function is continuous at , yet it is not differentiable there because of a sharp corner. Next, we examine a case where the function is not even continuous. In this situation, the derivative must fail to exist.   A Discontinuity   Consider the function   Determine whether is differentiable at .    Using the definitions of and , we compute:  The left-hand derivative at is   This limit does not exist because the numerator is constant while the denominator approaches zero. The right-hand derivative is   Since the one-sided derivatives do not both exist and agree, the derivative does not exist.    In all of the situations we have examined so far, differentiability has required the function to behave continuously at the point in question. This relationship between differentiability and continuity is fundamental and can be stated precisely as a theorem.   Differentiability Implies Continuity   If is differentiable at , then is continuous at .     The contrapositive is often the useful version in practice: if is not continuous at , then is not differentiable at .   Now that we have studied the main ways a derivative can fail to exist, we will put these ideas together and identify the regions where a function is differentiable (that is, where the derivative exists).    Differentiability on an Interval   Differentiable on an Interval   Let be an interval. We say that is differentiable on  if exists for every point in .  We say that is differentiable on  if exists for all . We say that is differentiable on  if exists for all and the one-sided derivatives and exist.    Problems that ask where a function is differentiable often come in two common forms. In the first, only a graph is given, with no algebraic expression for the function.   Differentiability from a Graph   The graph below represents a function . Identify all values of where is differentiable. Give your answer in interval notation.  A function illustrating multiple ways differentiability can fail.   Graph of a piecewise function defined for x greater than negative three and less than or equal to five. The graph has a sharp corner at x equals negative one. There is a jump at x equals zero, with a filled point above and an open point at the origin. A vertical dashed line at x equals two indicates another discontinuity. Away from these points, the graph is smooth.       A function is differentiable at a point only if it is continuous there and has a well-defined tangent line. We examine each notable feature of the graph.  At , the graph has a sharp corner. The slopes approaching from the left and right are different, so the derivative does not exist at this point.  At , the graph has a jump discontinuity. Because the function is not continuous at , it cannot be differentiable there.  At , the graph has another discontinuity, indicated by the vertical dashed line. Since the function does not have a defined value that matches nearby behavior, the derivative does not exist at .  On all other intervals where the graph is defined, smooth, and continuous, the function is differentiable. Therefore, is differentiable on the intervals     In the second common type of problem, the function is given by an explicit formula, often defined piecewise, and we must use algebraic reasoning to determine where the derivative exists.   Determining Differentiability for a Piecewise Function   Let   Determine where is differentiable. Give your answer in interval notation.    On each open interval where a single formula applies, the function is differentiable: is differentiable for , is differentiable for , and is differentiable for . Therefore, the only points we need to check are the junctions and .  At , we first check continuity: for , , so . Also . Since , the function is not continuous at , and therefore it is not differentiable at .  At , we again check continuity: for , , so . For , . Since the left-hand limit equals the function value, is continuous at . To determine differentiability, we compare one-sided derivatives.  The left-hand derivative at is   For close to 0, we have , so . Also . Hence   The right-hand derivative at is   For , we have , so . Using ,   Expand the numerator. Since , we have   Therefore,   Since , the derivative exists at .  Putting everything together, is differentiable for all real numbers except at . In interval notation, is differentiable on   To help us check\/visualize here is a graph of the function   Graph of the piecewise-defined function used to determine where it is differentiable.   Graph of a piecewise function. For x less than zero, the graph is a straight line ending at a filled point above the x-axis. At x equals zero, there is an open circle at the origin indicating a jump. From zero to two, the graph increases linearly. For x greater than or equal to two, the graph follows a smooth downward-opening curve. The graph highlights points where the function changes behavior and where differentiability must be checked.        Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Definition of the Derivative      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning.      If , then .     False. We can calculate the derivative , so , not 16.      If , then the limit definition shows that .     False. The derivative of a linear function is constant. Using the limit definition gives , not .      If , then for all .     True. For the derivative exists, and . This can be verified directly from the limit definition by combining the fractions and simplifying the difference quotient.      The derivative function assigns to each input the slope of the tangent line to at that input.     True. Where the derivative exists, it equals the slope of the tangent line to the graph of at that point.      The derivative function can exist at some values of but fail to exist at others.     True. Many functions are differentiable on part of their domain but not everywhere, for example at corners, discontinuities, or vertical tangents.      If is differentiable at , then the graph of must be smooth near with no corners or jumps.     True. Differentiability requires both continuity and a well-defined tangent line.      If is continuous at , then is differentiable at .     False. A function can be continuous but not differentiable. For example, is continuous at but has a corner there, so does not exist.      If for all in an interval, then is increasing on that interval.     True. A positive derivative means tangent slopes are positive, which corresponds to increasing behavior.      If exists, then must be a finite number.     True. By definition, is the value of this limit. If the limit were infinite or did not exist, then would be undefined.      A vertical tangent line corresponds to a derivative value of zero.     False. A vertical tangent line has undefined slope. This corresponds to the derivative failing to exist (the slopes become unbounded), not to a derivative of zero.      Algebraic simplification of the difference quotient is used to eliminate the form before taking the limit.     True. Direct substitution often yields , so we simplify the difference quotient (factor, combine fractions, use conjugates, identities) to evaluate the limit.      The right-hand derivative uses only values of the function for inputs greater than .     True. The limit uses , so .      If and both exist and are equal, then exists.     True. The derivative is a two-sided limit. If the one-sided limits exist and agree, then the two-sided limit exists and equals their common value.      "
},
{
  "id": "sec-derivative-defn-2",
  "level": "2",
  "url": "sec-derivative-defn.html#sec-derivative-defn-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "  Compute the derivative using the limit definition.  Interpret the derivative as an instantaneous rate of change and as the slope of a tangent line.  Rewrite the derivative definition using either or .  Define the derivative function and interpret it as a new function.  Recognize common situations where a derivative fails to exist (vertical tangents, corners, discontinuities).  Identify where a function is differentiable on an interval by locating vertical tangents, corners\/cusps, and discontinuities.   "
},
{
  "id": "def-derivative-at-a",
  "level": "2",
  "url": "sec-derivative-defn.html#def-derivative-at-a",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Derivative at a Point.",
  "body": " Derivative at a Point   The derivative of a function at , denoted , is defined by   provided the limit exists.   "
},
{
  "id": "rem-differentiable-language",
  "level": "2",
  "url": "sec-derivative-defn.html#rem-differentiable-language",
  "type": "Remark",
  "number": "2.2.2",
  "title": "",
  "body": " If the limit defining exists, we say is differentiable at . If the limit does not exist, then is undefined and is not differentiable at .  "
},
{
  "id": "ex-derivative-reciprocal",
  "level": "2",
  "url": "sec-derivative-defn.html#ex-derivative-reciprocal",
  "type": "Example",
  "number": "2.2.3",
  "title": "A Rational Example.",
  "body": " A Rational Example   Find for .    Step by Step:    "
},
{
  "id": "ex-derivative-sqrt",
  "level": "2",
  "url": "sec-derivative-defn.html#ex-derivative-sqrt",
  "type": "Example",
  "number": "2.2.4",
  "title": "A Radical Example.",
  "body": " A Radical Example   Find for .    We multiply by the conjugate to eliminate the radical in the numerator.    "
},
{
  "id": "ex-derivative-cuberoot",
  "level": "2",
  "url": "sec-derivative-defn.html#ex-derivative-cuberoot",
  "type": "Example",
  "number": "2.2.5",
  "title": "A Cube Root Example.",
  "body": " A Cube Root Example   Find for .    Here we use the difference of cubes identity .   This example is a good preview of why we will soon develop derivative rules: computing derivatives from the limit definition can become algebraically heavy.   "
},
{
  "id": "ssec-derivative-function-3",
  "level": "2",
  "url": "sec-derivative-defn.html#ssec-derivative-function-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivative function "
},
{
  "id": "ssec-derivative-function-4-1-1",
  "level": "2",
  "url": "sec-derivative-defn.html#ssec-derivative-function-4-1-1",
  "type": "Figure",
  "number": "2.2.6",
  "title": "",
  "body": " Slopes of tangent lines to at many values of , plotted as points and connected to form the graph of the derivative function.   Animated graph showing the cube root function with tangent lines at various points. For each point, the slope of the tangent line is recorded and plotted separately. As these slope values are connected, they form a new curve representing the derivative function.   "
},
{
  "id": "def-derivative-function",
  "level": "2",
  "url": "sec-derivative-defn.html#def-derivative-function",
  "type": "Definition",
  "number": "2.2.7",
  "title": "Derivative Function.",
  "body": " Derivative Function   The derivative function of , denoted , is defined by   for all where this limit exists.   "
},
{
  "id": "ex-derivative-function-quadratic",
  "level": "2",
  "url": "sec-derivative-defn.html#ex-derivative-function-quadratic",
  "type": "Example",
  "number": "2.2.8",
  "title": "Computing a Derivative Function.",
  "body": " Computing a Derivative Function   Let . Find .    Step by Step:   Graphically this is what we have accomplished     The function with tangent lines drawn at several points. The slopes of these tangent lines are labeled and shown to align with the values of the derivative function .   Graph showing the quadratic function f(x)=x(x-2). At several points along the curve, tangent lines are drawn and their slopes are labeled with values such as −4, −2, 0, 2, and 4. A separate straight line representing the derivative f'(x)=2x-2 is shown, illustrating how each slope of f corresponds to a point on the derivative graph.       "
},
{
  "id": "ex-derivative-fail-cuberoot",
  "level": "2",
  "url": "sec-derivative-defn.html#ex-derivative-fail-cuberoot",
  "type": "Example",
  "number": "2.2.10",
  "title": "A Vertical Tangent.",
  "body": " A Vertical Tangent   Consider the function , which we analyzed previously in . Show that has a vertical tangent at .    From , the derivative of is   Trying to substitute in , the denominator yields , causing the derivative to grow without bound like we saw in our section on infinite limits . In other words, the slopes of the tangent lines become arbitrarily large in magnitude.  Graphically, this behavior appears as the tangent lines becoming steeper and steeper near , eventually approaching a vertical line. Since vertical lines have undefined slope, the derivative does not exist at .   Graph of near , showing a vertical tangent line at the origin where the slope is undefined.   Graph of the cube root function near the origin. The curve becomes very steep as it approaches zero. A vertical line is drawn at zero to represent the tangent line at that point. Because the tangent line is vertical, its slope is undefined and the derivative does not exist there.    Therefore, is not differentiable at due to the presence of a vertical tangent line.   "
},
{
  "id": "def-right-derivative",
  "level": "2",
  "url": "sec-derivative-defn.html#def-right-derivative",
  "type": "Definition",
  "number": "2.2.12",
  "title": "Right-Hand Derivative.",
  "body": " Right-Hand Derivative   Let be a function and let be a point in its domain. The right-hand derivative of at is   provided this limit exists.   "
},
{
  "id": "def-left-derivative",
  "level": "2",
  "url": "sec-derivative-defn.html#def-left-derivative",
  "type": "Definition",
  "number": "2.2.13",
  "title": "Left-Hand Derivative.",
  "body": " Left-Hand Derivative   Let be a function and let be a point in its domain. The left-hand derivative of at is   provided this limit exists.   "
},
{
  "id": "rem-left-right-derivative",
  "level": "2",
  "url": "sec-derivative-defn.html#rem-left-right-derivative",
  "type": "Remark",
  "number": "2.2.14",
  "title": "",
  "body": " Remember that the derivative is defined as a limit. A two-sided limit exists only when the corresponding one-sided limits both exist and agree. Therefore, is differentiable at only if both and exist and satisfy . If the left-hand and right-hand derivatives do not agree, then the derivative does not exist.  "
},
{
  "id": "ex-absvalue-not-differentiable",
  "level": "2",
  "url": "sec-derivative-defn.html#ex-absvalue-not-differentiable",
  "type": "Example",
  "number": "2.2.15",
  "title": "A Corner.",
  "body": " A Corner   Show that the function is not differentiable at by computing the left-hand and right-hand derivatives at that point.    We compute the one-sided derivatives at . First note that .  To evaluate the limits, we recall the definition of absolute value from . This definition tells us how behaves depending on whether is positive or negative.  The right-hand derivative is   For , we have , so   The left-hand derivative is   For , we have , so   Since , the derivative at does not exist. This corresponds graphically to a sharp corner at the origin, where the slopes approaching from the left and right are different.   "
},
{
  "id": "ex-derivative-fail-discontinuous",
  "level": "2",
  "url": "sec-derivative-defn.html#ex-derivative-fail-discontinuous",
  "type": "Example",
  "number": "2.2.16",
  "title": "A Discontinuity.",
  "body": " A Discontinuity   Consider the function   Determine whether is differentiable at .    Using the definitions of and , we compute:  The left-hand derivative at is   This limit does not exist because the numerator is constant while the denominator approaches zero. The right-hand derivative is   Since the one-sided derivatives do not both exist and agree, the derivative does not exist.   "
},
{
  "id": "thm-diff-implies-cont",
  "level": "2",
  "url": "sec-derivative-defn.html#thm-diff-implies-cont",
  "type": "Theorem",
  "number": "2.2.17",
  "title": "Differentiability Implies Continuity.",
  "body": " Differentiability Implies Continuity   If is differentiable at , then is continuous at .   "
},
{
  "id": "rem-contrapositive",
  "level": "2",
  "url": "sec-derivative-defn.html#rem-contrapositive",
  "type": "Remark",
  "number": "2.2.18",
  "title": "",
  "body": " The contrapositive is often the useful version in practice: if is not continuous at , then is not differentiable at .  "
},
{
  "id": "def-differentiable-on-interval",
  "level": "2",
  "url": "sec-derivative-defn.html#def-differentiable-on-interval",
  "type": "Definition",
  "number": "2.2.19",
  "title": "Differentiable on an Interval.",
  "body": " Differentiable on an Interval   Let be an interval. We say that is differentiable on  if exists for every point in .  We say that is differentiable on  if exists for all . We say that is differentiable on  if exists for all and the one-sided derivatives and exist.   "
},
{
  "id": "ex-differentiable-intervals-graph",
  "level": "2",
  "url": "sec-derivative-defn.html#ex-differentiable-intervals-graph",
  "type": "Example",
  "number": "2.2.20",
  "title": "Differentiability from a Graph.",
  "body": " Differentiability from a Graph   The graph below represents a function . Identify all values of where is differentiable. Give your answer in interval notation.  A function illustrating multiple ways differentiability can fail.   Graph of a piecewise function defined for x greater than negative three and less than or equal to five. The graph has a sharp corner at x equals negative one. There is a jump at x equals zero, with a filled point above and an open point at the origin. A vertical dashed line at x equals two indicates another discontinuity. Away from these points, the graph is smooth.       A function is differentiable at a point only if it is continuous there and has a well-defined tangent line. We examine each notable feature of the graph.  At , the graph has a sharp corner. The slopes approaching from the left and right are different, so the derivative does not exist at this point.  At , the graph has a jump discontinuity. Because the function is not continuous at , it cannot be differentiable there.  At , the graph has another discontinuity, indicated by the vertical dashed line. Since the function does not have a defined value that matches nearby behavior, the derivative does not exist at .  On all other intervals where the graph is defined, smooth, and continuous, the function is differentiable. Therefore, is differentiable on the intervals    "
},
{
  "id": "ex-diff-interval-piecewise",
  "level": "2",
  "url": "sec-derivative-defn.html#ex-diff-interval-piecewise",
  "type": "Example",
  "number": "2.2.22",
  "title": "Determining Differentiability for a Piecewise Function.",
  "body": " Determining Differentiability for a Piecewise Function   Let   Determine where is differentiable. Give your answer in interval notation.    On each open interval where a single formula applies, the function is differentiable: is differentiable for , is differentiable for , and is differentiable for . Therefore, the only points we need to check are the junctions and .  At , we first check continuity: for , , so . Also . Since , the function is not continuous at , and therefore it is not differentiable at .  At , we again check continuity: for , , so . For , . Since the left-hand limit equals the function value, is continuous at . To determine differentiability, we compare one-sided derivatives.  The left-hand derivative at is   For close to 0, we have , so . Also . Hence   The right-hand derivative at is   For , we have , so . Using ,   Expand the numerator. Since , we have   Therefore,   Since , the derivative exists at .  Putting everything together, is differentiable for all real numbers except at . In interval notation, is differentiable on   To help us check\/visualize here is a graph of the function   Graph of the piecewise-defined function used to determine where it is differentiable.   Graph of a piecewise function. For x less than zero, the graph is a straight line ending at a filled point above the x-axis. At x equals zero, there is an open circle at the origin indicating a jump. From zero to two, the graph increases linearly. For x greater than or equal to two, the graph follows a smooth downward-opening curve. The graph highlights points where the function changes behavior and where differentiability must be checked.     "
},
{
  "id": "tf-derivative-defn-01",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If , then .     False. We can calculate the derivative , so , not 16.   "
},
{
  "id": "tf-derivative-defn-02",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If , then the limit definition shows that .     False. The derivative of a linear function is constant. Using the limit definition gives , not .   "
},
{
  "id": "tf-derivative-defn-03",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If , then for all .     True. For the derivative exists, and . This can be verified directly from the limit definition by combining the fractions and simplifying the difference quotient.   "
},
{
  "id": "tf-derivative-defn-04",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-04",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The derivative function assigns to each input the slope of the tangent line to at that input.     True. Where the derivative exists, it equals the slope of the tangent line to the graph of at that point.   "
},
{
  "id": "tf-derivative-defn-05",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-05",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  The derivative function can exist at some values of but fail to exist at others.     True. Many functions are differentiable on part of their domain but not everywhere, for example at corners, discontinuities, or vertical tangents.   "
},
{
  "id": "tf-derivative-defn-06",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-06",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If is differentiable at , then the graph of must be smooth near with no corners or jumps.     True. Differentiability requires both continuity and a well-defined tangent line.   "
},
{
  "id": "tf-derivative-defn-07",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-07",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  If is continuous at , then is differentiable at .     False. A function can be continuous but not differentiable. For example, is continuous at but has a corner there, so does not exist.   "
},
{
  "id": "tf-derivative-defn-08",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-08",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If for all in an interval, then is increasing on that interval.     True. A positive derivative means tangent slopes are positive, which corresponds to increasing behavior.   "
},
{
  "id": "tf-derivative-defn-09",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-09",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  If exists, then must be a finite number.     True. By definition, is the value of this limit. If the limit were infinite or did not exist, then would be undefined.   "
},
{
  "id": "tf-derivative-defn-11",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-11",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  A vertical tangent line corresponds to a derivative value of zero.     False. A vertical tangent line has undefined slope. This corresponds to the derivative failing to exist (the slopes become unbounded), not to a derivative of zero.   "
},
{
  "id": "tf-derivative-defn-12",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-12",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Algebraic simplification of the difference quotient is used to eliminate the form before taking the limit.     True. Direct substitution often yields , so we simplify the difference quotient (factor, combine fractions, use conjugates, identities) to evaluate the limit.   "
},
{
  "id": "tf-derivative-defn-13",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-13",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  The right-hand derivative uses only values of the function for inputs greater than .     True. The limit uses , so .   "
},
{
  "id": "tf-derivative-defn-14",
  "level": "2",
  "url": "sec-derivative-defn.html#tf-derivative-defn-14",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  If and both exist and are equal, then exists.     True. The derivative is a two-sided limit. If the one-sided limits exist and agree, then the two-sided limit exists and equals their common value.   "
},
{
  "id": "sec-derivative-rules",
  "level": "1",
  "url": "sec-derivative-rules.html",
  "type": "Section",
  "number": "2.3",
  "title": "Basic Differentiation Rules",
  "body": " Basic Differentiation Rules    Interpret derivative notation in both Newton form and Leibniz form .  Use basic derivative formulas to differentiate power functions and constants.  Apply the sum, constant multiple, product, and quotient rules to compute derivatives algebraically.  Interpret higher derivatives in an applied context (velocity and acceleration).    So far, we have seen how real-world rate-of-change problems and geometric tangent-line problems lead to derivatives. In this section, we focus on computing derivatives efficiently by using algebraic rules, so we do not need to return to the limit definition every time.   Notation for the Derivative  The derivative of a function can be written in several equivalent ways. In Newton notation we write . In Leibniz notation we write , which is meant to remind us of the definition of the derivative as a limit of difference quotients:   Here is a change in the input, and is the corresponding change in the output: and . The notation does not literally mean “a quotient of two tiny numbers.” It is a single symbol that represents a limit.  For example, if , then the derivative formula can be written as    To emphasize the distinction between the derivative function and the derivative at a specific point , we often write . This notation highlights that the derivative function is evaluated at . You may also encounter the notation for the derivative of , so that .     Basic Derivatives  The strategy is the same as earlier limit techniques: we establish derivatives of basic functions, then build more complicated derivatives from those. The most important basic formulas are the following.   Derivatives of Constant and Linear Functions    If is a constant function, then .  If , then .     We use the limit definition of the derivative.  First, suppose , where is a constant. By definition,   Since and , the numerator is zero.   Therefore, the derivative of a constant function is zero.  Next, suppose . Using the limit definition,   Simplifying the numerator gives   Therefore, the derivative of is equal to .     The Power Rule   Let be any real number for which is defined. If , then     We begin with a geometric intuition. For the function , increasing by a small amount produces a change in area that is approximately .    A geometric illustration of the change in area when a square of side length is increased by a small amount . The added strips show how the area grows approximately like .   A square with side length x and area x squared is shown. Light shaded strips of width Delta x are added along the top and right sides, representing the increase in area when x is increased by Delta x. The diagram visually illustrates how the change in area is approximately proportional to 2x times Delta x.     This suggests that   A similar idea applies to volume. For , the change in volume due to a small increase is approximately ,    A geometric illustration of the change in volume when a cube of side length is increased by a small amount . The added slabs show how the volume grows approximately like .   A cube with side length x and volume x cubed is shown. Light shaded slabs of thickness Delta x are added to the top, right, and back faces of the cube, representing the increase in volume when x is increased by Delta x. The diagram illustrates that the dominant contribution to the change in volume is proportional to 3x squared times Delta x.     suggesting that .  More generally, for the growth of an -dimensional cube with side length , this geometric reasoning suggests that . While this intuition cannot be visualized for higher dimensions, it motivates the algebraic proof that follows.  We now prove the Power Rule rigorously using the limit definition of the derivative. The constant and linear cases were proved earlier. We focus on the case .  The proof proceeds in stages, beginning with whole number powers. Throughout, we repeatedly use the identity   which holds for all positive integers .   Step 1: Positive integer powers. Let be a positive integer. Using the limit definition of the derivative,   Apply the factorization identity with and .   Cancel the factor of to obtain   Taking the limit as gives   Therefore, for positive integers ,    Step 2: Negative integer powers. Let , where is a positive integer. Then . In the derivative limit, we combine fractions and apply the same factorization identity with and .  After simplification, the resulting expression reduces to   Thus, the Power Rule holds for negative integers as well.   Step 3: Rational powers. Let , where is a positive integer and is any integer. Then   In the derivative limit, the numerator has the form . As in earlier work with cube roots, we multiply the numerator and denominator by   where and . This eliminates the radicals and produces the numerator   which we have already handled. Simplifying the resulting limit again yields .  Therefore, the Power Rule holds for all rational exponents.  The formula is also valid for irrational exponents such as , but proving this rigorously requires more advanced theory.      Compute each derivative:      .    Apply the power rule with .        .    First rewrite the cube root using exponent notation, then apply the power rule.        .    Rewrite the reciprocal using a negative exponent, then apply the power rule.        Derivative Rules  Once we know the derivatives of basic functions, we can differentiate combinations of functions using rules. Suppose and are differentiable at .      Sum Rule:  .   Difference Rule:  .   Constant Multiple Rule:  for any constant .   Product Rule:  .   Quotient Rule:  , where .     A proof of the Derivative Sum Rule is presented in the video below.    A proof of the Product Rule is presented in the following video.    Proofs of additional derivative rules can be found online. Your instructor would love to talk about this in office hours, and also you may want to consider a math major\/minor. These topics are covered in more detail in MTH 320.     Warning: the derivative of a product is not the product of derivatives. In general, .     Compute the following derivatives.     Compute .    First rewrite the square root using exponents and apply the constant multiple rule.       Compute .    The quantity is a constant, so its derivative is .       Let . Compute .    Use the Product Rule with and .   (Optional) You can also expand first and then differentiate term-by-term. Both approaches agree.      Differentiate .    First rewrite the denominator: . Then , so   You could also use the Quotient Rule directly; both methods produce equivalent results.      A block of ice has length cm, width cm, and height cm. Its length and width are decreasing at cm\/hr, and its height is decreasing at cm\/hr. How fast is the volume decreasing at that instant?    The volume is , and all three dimensions depend on time . Differentiate using the Product Rule (applied twice):   At the instant described: , , , , , (cm\/hr).   The volume is decreasing at .      Higher Derivatives  Because the derivative of a function is itself a function, we can differentiate again. The second derivative of is denoted , and in Leibniz notation it is written :   If represents position as a function of time, then is velocity and is acceleration .    A stone falls feet in seconds. Compute , , and interpret them.    Differentiate repeatedly using the power rule:   Here is velocity (ft\/sec), increasing with time. The constant is acceleration (ft\/sec ).     Higher derivatives are defined by repeatedly differentiating. The third derivative of is denoted , the fourth derivative is denoted , and in general the th derivative is written .  In Leibniz notation, these derivatives are written , , and .  As the order of the derivative increases, prime notation becomes cumbersome, so the superscript notation is typically preferred for higher derivatives.     Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Basic Differentiation Rules      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answer using derivative rules or interpretation.     The symbols and always represent the same quantity.     True. Both notations represent the derivative of with respect to . In other words, . (They are two different notational conventions for the same derivative.)      If , then for all .     True. The expression is a constant (it does not depend on ), so for all .      If , then .     True. Using the constant multiple rule and , we get .      If , then .     True. Rewrite (where defined). Then apply the power rule: .      If and then .     False. By the Product Rule, . Evaluating at gives . Since is not given, cannot be determined from the information provided, and it is not necessarily .      If represents velocity (where is a time variable), then represents acceleration.     True. When velocity is given as a function of time , its derivative with respect to time, , measures the rate of change of velocity. By definition, this rate of change is acceleration.      The notation and represent the same function.     True. Both notations mean the third derivative of with respect to .      More True\/False Questions   For this set of problems let be a differentiable function. Values of are given in the table below, and is piecewise linear function shown in the accompanying graph.       Graph of , a piecewise linear function composed of two line segments.   Graph of a piecewise linear function B(x). The graph consists of a line segment increasing from the point (0, 2) to (2, 4), followed by a line segment decreasing from (2, 4) to (5, 1). The two segments meet at a sharp corner at x = 2.        If , then .     True. By the Sum Rule, . From the table, . From the graph, is increasing with slope at , so .  Therefore, .      If , then .     False. By the Constant Multiple Rule, . From the graph, is decreasing with slope at , so .  Hence, , not .      If , then .     False. Use the Product Rule: . From the table, and .  Evaluating at , , not .      If , then .     True. Apply the Quotient Rule: From the table, and . From the graph, and .  Substituting,       If , then is increasing when .     True. Apply the Product Rule: From the table, and . From the graph, and .  Substituting,   Since has a positive derivative (a.k.a. slope) we know that it is increasing at .      "
},
{
  "id": "sec-derivative-rules-2",
  "level": "2",
  "url": "sec-derivative-rules.html#sec-derivative-rules-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "  Interpret derivative notation in both Newton form and Leibniz form .  Use basic derivative formulas to differentiate power functions and constants.  Apply the sum, constant multiple, product, and quotient rules to compute derivatives algebraically.  Interpret higher derivatives in an applied context (velocity and acceleration).   "
},
{
  "id": "rem-derivative-notation",
  "level": "2",
  "url": "sec-derivative-rules.html#rem-derivative-notation",
  "type": "Remark",
  "number": "2.3.1",
  "title": "",
  "body": " To emphasize the distinction between the derivative function and the derivative at a specific point , we often write . This notation highlights that the derivative function is evaluated at . You may also encounter the notation for the derivative of , so that .  "
},
{
  "id": "thm-constant-and-linear-derivatives",
  "level": "2",
  "url": "sec-derivative-rules.html#thm-constant-and-linear-derivatives",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "Derivatives of Constant and Linear Functions.",
  "body": " Derivatives of Constant and Linear Functions    If is a constant function, then .  If , then .     We use the limit definition of the derivative.  First, suppose , where is a constant. By definition,   Since and , the numerator is zero.   Therefore, the derivative of a constant function is zero.  Next, suppose . Using the limit definition,   Simplifying the numerator gives   Therefore, the derivative of is equal to .   "
},
{
  "id": "thm-power-rule",
  "level": "2",
  "url": "sec-derivative-rules.html#thm-power-rule",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "The Power Rule.",
  "body": " The Power Rule   Let be any real number for which is defined. If , then     We begin with a geometric intuition. For the function , increasing by a small amount produces a change in area that is approximately .    A geometric illustration of the change in area when a square of side length is increased by a small amount . The added strips show how the area grows approximately like .   A square with side length x and area x squared is shown. Light shaded strips of width Delta x are added along the top and right sides, representing the increase in area when x is increased by Delta x. The diagram visually illustrates how the change in area is approximately proportional to 2x times Delta x.     This suggests that   A similar idea applies to volume. For , the change in volume due to a small increase is approximately ,    A geometric illustration of the change in volume when a cube of side length is increased by a small amount . The added slabs show how the volume grows approximately like .   A cube with side length x and volume x cubed is shown. Light shaded slabs of thickness Delta x are added to the top, right, and back faces of the cube, representing the increase in volume when x is increased by Delta x. The diagram illustrates that the dominant contribution to the change in volume is proportional to 3x squared times Delta x.     suggesting that .  More generally, for the growth of an -dimensional cube with side length , this geometric reasoning suggests that . While this intuition cannot be visualized for higher dimensions, it motivates the algebraic proof that follows.  We now prove the Power Rule rigorously using the limit definition of the derivative. The constant and linear cases were proved earlier. We focus on the case .  The proof proceeds in stages, beginning with whole number powers. Throughout, we repeatedly use the identity   which holds for all positive integers .   Step 1: Positive integer powers. Let be a positive integer. Using the limit definition of the derivative,   Apply the factorization identity with and .   Cancel the factor of to obtain   Taking the limit as gives   Therefore, for positive integers ,    Step 2: Negative integer powers. Let , where is a positive integer. Then . In the derivative limit, we combine fractions and apply the same factorization identity with and .  After simplification, the resulting expression reduces to   Thus, the Power Rule holds for negative integers as well.   Step 3: Rational powers. Let , where is a positive integer and is any integer. Then   In the derivative limit, the numerator has the form . As in earlier work with cube roots, we multiply the numerator and denominator by   where and . This eliminates the radicals and produces the numerator   which we have already handled. Simplifying the resulting limit again yields .  Therefore, the Power Rule holds for all rational exponents.  The formula is also valid for irrational exponents such as , but proving this rigorously requires more advanced theory.   "
},
{
  "id": "ex-basic-derivatives-examples",
  "level": "2",
  "url": "sec-derivative-rules.html#ex-basic-derivatives-examples",
  "type": "Example",
  "number": "2.3.6",
  "title": "",
  "body": "  Compute each derivative:      .    Apply the power rule with .        .    First rewrite the cube root using exponent notation, then apply the power rule.        .    Rewrite the reciprocal using a negative exponent, then apply the power rule.     "
},
{
  "id": "thm-derivative-rules",
  "level": "2",
  "url": "sec-derivative-rules.html#thm-derivative-rules",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "",
  "body": "    Sum Rule:  .   Difference Rule:  .   Constant Multiple Rule:  for any constant .   Product Rule:  .   Quotient Rule:  , where .     A proof of the Derivative Sum Rule is presented in the video below.    A proof of the Product Rule is presented in the following video.    Proofs of additional derivative rules can be found online. Your instructor would love to talk about this in office hours, and also you may want to consider a math major\/minor. These topics are covered in more detail in MTH 320.   "
},
{
  "id": "rem-product-warning",
  "level": "2",
  "url": "sec-derivative-rules.html#rem-product-warning",
  "type": "Remark",
  "number": "2.3.8",
  "title": "",
  "body": " Warning: the derivative of a product is not the product of derivatives. In general, .  "
},
{
  "id": "ex-derivative-basic-power-constant",
  "level": "2",
  "url": "sec-derivative-rules.html#ex-derivative-basic-power-constant",
  "type": "Example",
  "number": "2.3.9",
  "title": "",
  "body": "  Compute the following derivatives.     Compute .    First rewrite the square root using exponents and apply the constant multiple rule.       Compute .    The quantity is a constant, so its derivative is .    "
},
{
  "id": "ex-product-rule-algebra",
  "level": "2",
  "url": "sec-derivative-rules.html#ex-product-rule-algebra",
  "type": "Example",
  "number": "2.3.10",
  "title": "",
  "body": "  Let . Compute .    Use the Product Rule with and .   (Optional) You can also expand first and then differentiate term-by-term. Both approaches agree.   "
},
{
  "id": "ex-quotient-rule-two-ways",
  "level": "2",
  "url": "sec-derivative-rules.html#ex-quotient-rule-two-ways",
  "type": "Example",
  "number": "2.3.11",
  "title": "",
  "body": "  Differentiate .    First rewrite the denominator: . Then , so   You could also use the Quotient Rule directly; both methods produce equivalent results.   "
},
{
  "id": "ex-ice-block-volume",
  "level": "2",
  "url": "sec-derivative-rules.html#ex-ice-block-volume",
  "type": "Example",
  "number": "2.3.12",
  "title": "",
  "body": "  A block of ice has length cm, width cm, and height cm. Its length and width are decreasing at cm\/hr, and its height is decreasing at cm\/hr. How fast is the volume decreasing at that instant?    The volume is , and all three dimensions depend on time . Differentiate using the Product Rule (applied twice):   At the instant described: , , , , , (cm\/hr).   The volume is decreasing at .   "
},
{
  "id": "higher-derivatives-4",
  "level": "2",
  "url": "sec-derivative-rules.html#higher-derivatives-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "velocity acceleration "
},
{
  "id": "ex-higher-derivatives-falling-stone",
  "level": "2",
  "url": "sec-derivative-rules.html#ex-higher-derivatives-falling-stone",
  "type": "Example",
  "number": "2.3.13",
  "title": "",
  "body": "  A stone falls feet in seconds. Compute , , and interpret them.    Differentiate repeatedly using the power rule:   Here is velocity (ft\/sec), increasing with time. The constant is acceleration (ft\/sec ).   "
},
{
  "id": "rem-higher-derivatives",
  "level": "2",
  "url": "sec-derivative-rules.html#rem-higher-derivatives",
  "type": "Remark",
  "number": "2.3.14",
  "title": "",
  "body": " Higher derivatives are defined by repeatedly differentiating. The third derivative of is denoted , the fourth derivative is denoted , and in general the th derivative is written .  In Leibniz notation, these derivatives are written , , and .  As the order of the derivative increases, prime notation becomes cumbersome, so the superscript notation is typically preferred for higher derivatives.  "
},
{
  "id": "tf-deriv-rules-01",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  The symbols and always represent the same quantity.     True. Both notations represent the derivative of with respect to . In other words, . (They are two different notational conventions for the same derivative.)   "
},
{
  "id": "tf-deriv-rules-04",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-04",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If , then for all .     True. The expression is a constant (it does not depend on ), so for all .   "
},
{
  "id": "tf-deriv-rules-05",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-05",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If , then .     True. Using the constant multiple rule and , we get .   "
},
{
  "id": "tf-deriv-rules-06",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-06",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If , then .     True. Rewrite (where defined). Then apply the power rule: .   "
},
{
  "id": "tf-deriv-rules-11",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-11",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If and then .     False. By the Product Rule, . Evaluating at gives . Since is not given, cannot be determined from the information provided, and it is not necessarily .   "
},
{
  "id": "tf-deriv-rules-18",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-18",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If represents velocity (where is a time variable), then represents acceleration.     True. When velocity is given as a function of time , its derivative with respect to time, , measures the rate of change of velocity. By definition, this rate of change is acceleration.   "
},
{
  "id": "tf-deriv-rules-20",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-20",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  The notation and represent the same function.     True. Both notations mean the third derivative of with respect to .   "
},
{
  "id": "fig-B-graph",
  "level": "2",
  "url": "sec-derivative-rules.html#fig-B-graph",
  "type": "Figure",
  "number": "2.3.15",
  "title": "",
  "body": " Graph of , a piecewise linear function composed of two line segments.   Graph of a piecewise linear function B(x). The graph consists of a line segment increasing from the point (0, 2) to (2, 4), followed by a line segment decreasing from (2, 4) to (5, 1). The two segments meet at a sharp corner at x = 2.   "
},
{
  "id": "tf-deriv-rules-21",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-21",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If , then .     True. By the Sum Rule, . From the table, . From the graph, is increasing with slope at , so .  Therefore, .   "
},
{
  "id": "tf-deriv-rules-24",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-24",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  If , then .     False. By the Constant Multiple Rule, . From the graph, is decreasing with slope at , so .  Hence, , not .   "
},
{
  "id": "tf-deriv-rules-22",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-22",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  If , then .     False. Use the Product Rule: . From the table, and .  Evaluating at , , not .   "
},
{
  "id": "tf-deriv-rules-23",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-23",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  If , then .     True. Apply the Quotient Rule: From the table, and . From the graph, and .  Substituting,    "
},
{
  "id": "tf-deriv-rules-25",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-25",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  If , then is increasing when .     True. Apply the Product Rule: From the table, and . From the graph, and .  Substituting,   Since has a positive derivative (a.k.a. slope) we know that it is increasing at .   "
},
{
  "id": "sec-derivative-trig",
  "level": "1",
  "url": "sec-derivative-trig.html",
  "type": "Section",
  "number": "2.4",
  "title": "Trigonometric Derivatives",
  "body": " Trigonometric Derivatives    Use geometric and graphical reasoning to understand why and .  Use these results with the product and quotient rules to differentiate the remaining trigonometric functions.  Evaluate basic trigonometric limits by rewriting them in terms of .  Remember that standard trigonometric derivative formulas assume angles are measured in radians.     Derivative of Sine and Cosine  Sine and cosine are fundamental for describing periodic motion. One way to predict their derivatives is to look at graphs. If we estimate the slope of the graph at many points, we can sketch its derivative function. The slopes appear to match the graph of .    The derivative of visualized: the slope of the tangent line to at each point matches the value of .   An animated graph showing a sine curve and a cosine curve. As a point moves along the sine curve, a tangent line is drawn. The steepness of the tangent line changes and matches the height of the cosine curve at the same horizontal position.       For all real (measured in radians),     A full proof of these derivative formulas begins with the limit definition of the derivative applied to the sine and cosine functions. Using trigonometric identities, this reduces the problem to understanding the behavior of certain key limits involving sine and cosine near zero.  The first half of this argument is presented clearly in the video Derivatives of Sine and Cosine from First Principles . As you will see, completing the proof requires evaluating limits such as the limit of sine of x over x as x approaches zero, which we will develop later in this section.    For the time being, we will take this result as given and focus on how to use it to find the derivative formulas for the other standard trigonometric functions.    General Trigonometric Derivatives  Now that we know the derivatives of sine and cosine, we can quickly find the derivatives of the remaining trigonometric functions by applying our basic differentiation rules, such as the Quotient Rule.    For all real such that is defined,     Recall that . Since wherever is defined, we may apply the Quotient Rule.   Therefore, wherever is defined.    And similarly    For all real such that the following functions are defined,      Again remember, the derivative formulas in this section are valid when is measured in radians , not degrees.   Now let’s take a moment to incorporate this new knowledge into ideas from earlier sections before moving on to our discussion of limits.    Find if .    Since is written as a product of two functions, we apply the Product Rule.   This expression is an acceptable final answer, though it could be simplified further if desired.      Evaluate .    Since the function is written as a quotient, we apply the Quotient Rule.       Two Fundamental Trigonometric Limits  Previously in this section, we outlined the proof that the derivative of the sine function is the cosine function. That argument reduces to evaluating certain key limits involving sine and cosine as the input approaches zero. In this subsection, we formally establish those limits using a generic variable . This prepares us for the substitutions and rewrites that commonly appear in trigonometric limit problems.     .    Consider the unit circle and an angle measured in radians, with . Geometric arguments This typically involves comparing the areas of triangles and circular sectors in the unit circle. In previous semesters, the full argument has been worked through in recitation. For students who are curious, Khan Academy also has a great video on this topic. show that   Dividing all three expressions by gives   Taking reciprocals reverses the inequalities:   As , we know . Since is trapped between two expressions that both approach , the Squeeze Theorem implies        .    Rewrite the expression by multiplying the numerator and denominator by :   Rewrite this expression to isolate the sine-over-input factor:   As , we have , , and . Therefore the entire product approaches , and     These two limits supply the missing analytic step in the proof of the sine and cosine derivative formulas and will be used repeatedly to evaluate more complicated trigonometric limits.    Limits of Trigonometric Quotients  Many trigonometric limits can be evaluated by rewriting the expression until a factor of the form appears, where . Then we use .    Compute .    Multiply and divide by to create .   In the third line we used the substitution , so forces .      Compute .    Rewrite and then introduce the standard sine-over-input factors.   We used and also by the substitution .      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Trigonometric Derivatives      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answer.      .      If angles are measured in degrees, then still holds without modification.      If , then .     True. We can use either algebra or the Product Rule. Since wherever it is defined,   on the domain where is defined. Then .  Alternatively, using the Product Rule directly,        The instantaneous rate of change of at is .     True. The instantaneous rate of change at a point is the derivative at that point. Use the Product Rule:   Evaluate at :   So the instantaneous rate of change at is .       The slope of the tangent line to at is .     False. First rewrite in simpler form. Since and , we have   on any interval where the expressions are defined. Thus .  Now differentiate:   Evaluate at :   The slope is , not , so the statement is false.      Since , it follows that .     False. The equation is not true for all . The expression equals only in the limiting sense , not as an identity. Since is not a constant function, its derivative is not zero. In fact, applying the Quotient Rule shows that is nonzero for all .       .     False. Rewrite as . Since as , the product becomes .       .     False.  grows without bound as . The limit does not exist as a finite number.       .     True. Rewrite the expression to introduce the standard limit .   Therefore the statement is true.       .     True. Replace each term with : .       .     True. Use the identity . Then the expression becomes , which tends to .      "
},
{
  "id": "sec-derivative-trig-2",
  "level": "2",
  "url": "sec-derivative-trig.html#sec-derivative-trig-2",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "  Use geometric and graphical reasoning to understand why and .  Use these results with the product and quotient rules to differentiate the remaining trigonometric functions.  Evaluate basic trigonometric limits by rewriting them in terms of .  Remember that standard trigonometric derivative formulas assume angles are measured in radians.   "
},
{
  "id": "derivative-of-sine-and-cosine-3-1",
  "level": "2",
  "url": "sec-derivative-trig.html#derivative-of-sine-and-cosine-3-1",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " The derivative of visualized: the slope of the tangent line to at each point matches the value of .   An animated graph showing a sine curve and a cosine curve. As a point moves along the sine curve, a tangent line is drawn. The steepness of the tangent line changes and matches the height of the cosine curve at the same horizontal position.   "
},
{
  "id": "thm-derivative-sin-cos",
  "level": "2",
  "url": "sec-derivative-trig.html#thm-derivative-sin-cos",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "",
  "body": "  For all real (measured in radians),     A full proof of these derivative formulas begins with the limit definition of the derivative applied to the sine and cosine functions. Using trigonometric identities, this reduces the problem to understanding the behavior of certain key limits involving sine and cosine near zero.  The first half of this argument is presented clearly in the video Derivatives of Sine and Cosine from First Principles . As you will see, completing the proof requires evaluating limits such as the limit of sine of x over x as x approaches zero, which we will develop later in this section.   "
},
{
  "id": "thm-derivative-tan",
  "level": "2",
  "url": "sec-derivative-trig.html#thm-derivative-tan",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "",
  "body": "  For all real such that is defined,     Recall that . Since wherever is defined, we may apply the Quotient Rule.   Therefore, wherever is defined.   "
},
{
  "id": "thm-derivative-sec-cot-csc",
  "level": "2",
  "url": "sec-derivative-trig.html#thm-derivative-sec-cot-csc",
  "type": "Theorem",
  "number": "2.4.4",
  "title": "",
  "body": "  For all real such that the following functions are defined,    "
},
{
  "id": "rem-radians-warning",
  "level": "2",
  "url": "sec-derivative-trig.html#rem-radians-warning",
  "type": "Remark",
  "number": "2.4.5",
  "title": "",
  "body": " Again remember, the derivative formulas in this section are valid when is measured in radians , not degrees.  "
},
{
  "id": "ex-derivative-sqrt-tan",
  "level": "2",
  "url": "sec-derivative-trig.html#ex-derivative-sqrt-tan",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "  Find if .    Since is written as a product of two functions, we apply the Product Rule.   This expression is an acceptable final answer, though it could be simplified further if desired.   "
},
{
  "id": "ex-derivative-cos-over-3x2",
  "level": "2",
  "url": "sec-derivative-trig.html#ex-derivative-cos-over-3x2",
  "type": "Example",
  "number": "2.4.7",
  "title": "",
  "body": "  Evaluate .    Since the function is written as a quotient, we apply the Quotient Rule.    "
},
{
  "id": "thm-limit-sin-u-over-u",
  "level": "2",
  "url": "sec-derivative-trig.html#thm-limit-sin-u-over-u",
  "type": "Theorem",
  "number": "2.4.8",
  "title": "",
  "body": "   .    Consider the unit circle and an angle measured in radians, with . Geometric arguments This typically involves comparing the areas of triangles and circular sectors in the unit circle. In previous semesters, the full argument has been worked through in recitation. For students who are curious, Khan Academy also has a great video on this topic. show that   Dividing all three expressions by gives   Taking reciprocals reverses the inequalities:   As , we know . Since is trapped between two expressions that both approach , the Squeeze Theorem implies    "
},
{
  "id": "thm-limit-cos-u-minus-one-over-u",
  "level": "2",
  "url": "sec-derivative-trig.html#thm-limit-cos-u-minus-one-over-u",
  "type": "Theorem",
  "number": "2.4.9",
  "title": "",
  "body": "   .    Rewrite the expression by multiplying the numerator and denominator by :   Rewrite this expression to isolate the sine-over-input factor:   As , we have , , and . Therefore the entire product approaches , and    "
},
{
  "id": "ex-limit-sin3x-over-x",
  "level": "2",
  "url": "sec-derivative-trig.html#ex-limit-sin3x-over-x",
  "type": "Example",
  "number": "2.4.10",
  "title": "",
  "body": "  Compute .    Multiply and divide by to create .   In the third line we used the substitution , so forces .   "
},
{
  "id": "ex-limit-tan-over-sin-sqrtx",
  "level": "2",
  "url": "sec-derivative-trig.html#ex-limit-tan-over-sin-sqrtx",
  "type": "Example",
  "number": "2.4.11",
  "title": "",
  "body": "  Compute .    Rewrite and then introduce the standard sine-over-input factors.   We used and also by the substitution .   "
},
{
  "id": "tf-deriv-trig-07",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-deriv-trig-07",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   .   "
},
{
  "id": "tf-deriv-trig-02",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-deriv-trig-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If angles are measured in degrees, then still holds without modification.   "
},
{
  "id": "tf-deriv-trig-comp-01",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-deriv-trig-comp-01",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If , then .     True. We can use either algebra or the Product Rule. Since wherever it is defined,   on the domain where is defined. Then .  Alternatively, using the Product Rule directly,    "
},
{
  "id": "tf-deriv-trig-comp-02",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-deriv-trig-comp-02",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The instantaneous rate of change of at is .     True. The instantaneous rate of change at a point is the derivative at that point. Use the Product Rule:   Evaluate at :   So the instantaneous rate of change at is .   "
},
{
  "id": "tf-deriv-trig-comp-03",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-deriv-trig-comp-03",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  The slope of the tangent line to at is .     False. First rewrite in simpler form. Since and , we have   on any interval where the expressions are defined. Thus .  Now differentiate:   Evaluate at :   The slope is , not , so the statement is false.   "
},
{
  "id": "tf-deriv-trig-31",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-deriv-trig-31",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Since , it follows that .     False. The equation is not true for all . The expression equals only in the limiting sense , not as an identity. Since is not a constant function, its derivative is not zero. In fact, applying the Quotient Rule shows that is nonzero for all .   "
},
{
  "id": "tf-trig-limits-01",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-trig-limits-01",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   .     False. Rewrite as . Since as , the product becomes .   "
},
{
  "id": "tf-trig-limits-02",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-trig-limits-02",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   .     False.  grows without bound as . The limit does not exist as a finite number.   "
},
{
  "id": "tf-trig-limits-03",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-trig-limits-03",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   .     True. Rewrite the expression to introduce the standard limit .   Therefore the statement is true.   "
},
{
  "id": "tf-trig-limits-06",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-trig-limits-06",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   .     True. Replace each term with : .   "
},
{
  "id": "tf-trig-limits-07",
  "level": "2",
  "url": "sec-derivative-trig.html#tf-trig-limits-07",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   .     True. Use the identity . Then the expression becomes , which tends to .   "
},
{
  "id": "sec-derivative-expChain",
  "level": "1",
  "url": "sec-derivative-expChain.html",
  "type": "Section",
  "number": "2.5",
  "title": "Exponential and Logarithmic Derivatives and the Chain Rule",
  "body": " Exponential and Logarithmic Derivatives and the Chain Rule    Apply the basic derivative formulas for , , and .  Understand and use the Chain Rule to differentiate composite functions algebraically, graphically, and through values provided in tables.  Compute derivatives of functions that combine exponentials, logarithms, powers, and trigonometric expressions using the Product Rule, Quotient Rule, and Chain Rule.    Exponential and logarithmic functions appear throughout calculus. Their derivatives play a central role in growth models, rates of change, and the behavior of composite functions. This section develops the essential derivative formulas for these functions and introduces the Chain Rule, which allows us to differentiate compositions of functions.  If you feel a bit out of practice with exponential rules, logarithm rules, or composition rules from algebra, it may be helpful to revisit those ideas before diving into the calculus. A strong foundation makes the new material much more approachable.   Review section on function composition    Review section on exponential functions    Review section on logarithmic functions       Key Derivative Formulas  We begin by collecting the fundamental derivative rules for exponential and logarithmic functions. Some are stated without proof here and will be justified later in the text.   Derivatives of the Natural Exponential and Natural Logarithm   For all in the domains of the functions below:     We will use these two derivative formulas throughout the course, but we will not prove both of them at this moment.  The fact that is a classical result that can be established in several different ways: by studying the compound interest definition of , by using limits, or by analyzing the unique solution to a differential equation. Curious students can find many proofs available online.  The proof of will appear later, once we have developed the tools needed to understand derivatives of inverse functions. See for a full derivation.  For now, we take both results as known facts and use them to develop more general differentiation techniques.    Now that we know the derivatives of and , we can combine them with the Product Rule, Quotient Rule, and earlier power–function rules to differentiate more complicated expressions.    Compute the derivatives of the following functions.      .    For , use the power rule and the fact that :         .    Rewrite and apply the Product Rule.         .    Apply the Quotient Rule with and . Then and .        Show that the curve has no tangent line with slope 2.    Compute the derivative:   To find a point where the slope is 2, we solve   Rearranging gives   Every term on the left side is positive for all real . The equation has no solution. Thus the slope never equals 2.      The Statement and Applications of The Chain Rule  Composite functions arise everywhere. For example, if measures a temperature that changes with time, and converts that temperature to pressure, then describes how pressure changes with time. The Chain Rule captures how variations in the inner function affect the slope of the composite function.   The Chain Rule   If and are differentiable functions, then their composition is differentiable and   In Leibniz notation, if we let , then     A full proof of the Chain Rule requires careful algebra using the limit definition of the derivative and the structure of composite functions. We present the result here without a complete derivation. Students who would like to explore the proof in detail may find the following video especially helpful:   A visual and intuitive explanation of the Chain Rule   The central idea behind the proof is that small changes in the input propagate through the inner function and then through the outer function . The Chain Rule formalizes this by multiplying the rate of change of with respect to by the rate of change of with respect to .     Informally, the Chain Rule says that the rate of change of a composite function is the rate of change of the outer function, evaluated at the inner function, multiplied by how fast the inner function itself is changing.   Now let's see the chain rule applied with a few examples.    Compute the derivative of     Apply the Chain Rule and Quotient rule. Let , then and so: Therefore       Let and be differentiable functions with the values shown below.   Compute the following derivatives.     Compute at .    Using the Chain Rule,   At , we have and , and the table gives .       Compute at .    Again apply the Chain Rule:   At , the table shows , so , and .      Lastly, we can use the Chain Rule to extend our exponential derivative formulas. This allows us to differentiate any exponential function, not just those with base .   Derivative of the General Exponential Functions   For any positive constant , the derivative of is     To compute the derivative of for a positive constant , we rewrite in terms of the natural exponential function. Recall that by using the power rule for logarithms and the inverse identity we can write:   We now differentiate using the Chain Rule. Let   Then , and by the Chain Rule,   Since , we have . Substituting back:   Using once more, we obtain the final formula:   This completes the proof.      Compute the derivative of .    Apply the exponential derivative formula with .       Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Exponential Functions and the Chain Rule      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answer.     If , then .     True. This is the Chain Rule with outer function and inner function . Since , we get .      If , then .     False. By the Chain Rule, . The factor is missing.      If for a constant , then for all real .     True. Using , we have for all real and when . Therefore for all .      If , then , regardless of .     True (assuming the Chain Rule applies at ). By the Chain Rule, . Since , the product is .      The derivative of and the derivative of are the same.     False. Using the Chain Rule: , while . These expressions are not equal in general.      If , then exists for all real .     False. The function is only defined for , so the derivative cannot exist for negative . (On it is differentiable; at one must check separately.)      If and on an interval, then is decreasing on that interval.     True (where the composition is defined). By the Chain Rule, . Since and , their product is negative, so is decreasing.      If has a horizontal tangent at , then either or .     True (assuming differentiability so the Chain Rule applies at ). A horizontal tangent means . By the Chain Rule, . A product is zero only if at least one factor is zero, so or .      If , then .     True. Let . Then . By the Chain Rule, .      Consider the graphs of and below. Since is not differentiable at we know that is not is not differentiable at .    Graphs of two functions and .   A coordinate plane showing two piecewise linear functions. The graph of g(x) is a straight line increasing from the point (0, 1.5) to (3, 3). The graph of f(x) consists of two line segments: one increasing from (0, 0) to (1, 1.5), followed by a decreasing segment from (1, 1.5) to (3, 1). The functions are labeled directly on the graph as f(x) and g(x).        False. The fact that is not differentiable at does not automatically mean that the composite is not differentiable at .  In fact, we can compute the derivative using the Chain Rule. The slope of is constant:   For , the graph of is the line segment from to , so its slope is   on that segment, including at . Therefore,   So  is differentiable at .      "
},
{
  "id": "sec-derivative-expChain-2",
  "level": "2",
  "url": "sec-derivative-expChain.html#sec-derivative-expChain-2",
  "type": "Objectives",
  "number": "2.5",
  "title": "",
  "body": "  Apply the basic derivative formulas for , , and .  Understand and use the Chain Rule to differentiate composite functions algebraically, graphically, and through values provided in tables.  Compute derivatives of functions that combine exponentials, logarithms, powers, and trigonometric expressions using the Product Rule, Quotient Rule, and Chain Rule.   "
},
{
  "id": "thm-derivatives-exp-log",
  "level": "2",
  "url": "sec-derivative-expChain.html#thm-derivatives-exp-log",
  "type": "Theorem",
  "number": "2.5.1",
  "title": "Derivatives of the Natural Exponential and Natural Logarithm.",
  "body": " Derivatives of the Natural Exponential and Natural Logarithm   For all in the domains of the functions below:     We will use these two derivative formulas throughout the course, but we will not prove both of them at this moment.  The fact that is a classical result that can be established in several different ways: by studying the compound interest definition of , by using limits, or by analyzing the unique solution to a differential equation. Curious students can find many proofs available online.  The proof of will appear later, once we have developed the tools needed to understand derivatives of inverse functions. See for a full derivation.  For now, we take both results as known facts and use them to develop more general differentiation techniques.   "
},
{
  "id": "ex-exp-log-basic-combined",
  "level": "2",
  "url": "sec-derivative-expChain.html#ex-exp-log-basic-combined",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": "  Compute the derivatives of the following functions.      .    For , use the power rule and the fact that :         .    Rewrite and apply the Product Rule.         .    Apply the Quotient Rule with and . Then and .     "
},
{
  "id": "ex-expChain-basic-02",
  "level": "2",
  "url": "sec-derivative-expChain.html#ex-expChain-basic-02",
  "type": "Example",
  "number": "2.5.3",
  "title": "",
  "body": "  Show that the curve has no tangent line with slope 2.    Compute the derivative:   To find a point where the slope is 2, we solve   Rearranging gives   Every term on the left side is positive for all real . The equation has no solution. Thus the slope never equals 2.   "
},
{
  "id": "thm-chain-rule",
  "level": "2",
  "url": "sec-derivative-expChain.html#thm-chain-rule",
  "type": "Theorem",
  "number": "2.5.4",
  "title": "The Chain Rule.",
  "body": " The Chain Rule   If and are differentiable functions, then their composition is differentiable and   In Leibniz notation, if we let , then     A full proof of the Chain Rule requires careful algebra using the limit definition of the derivative and the structure of composite functions. We present the result here without a complete derivation. Students who would like to explore the proof in detail may find the following video especially helpful:   A visual and intuitive explanation of the Chain Rule   The central idea behind the proof is that small changes in the input propagate through the inner function and then through the outer function . The Chain Rule formalizes this by multiplying the rate of change of with respect to by the rate of change of with respect to .   "
},
{
  "id": "rem-chainrule-informal",
  "level": "2",
  "url": "sec-derivative-expChain.html#rem-chainrule-informal",
  "type": "Remark",
  "number": "2.5.5",
  "title": "",
  "body": " Informally, the Chain Rule says that the rate of change of a composite function is the rate of change of the outer function, evaluated at the inner function, multiplied by how fast the inner function itself is changing.  "
},
{
  "id": "ex-expChain-basic-01",
  "level": "2",
  "url": "sec-derivative-expChain.html#ex-expChain-basic-01",
  "type": "Example",
  "number": "2.5.6",
  "title": "",
  "body": "  Compute the derivative of     Apply the Chain Rule and Quotient rule. Let , then and so: Therefore    "
},
{
  "id": "ex-expChain-table",
  "level": "2",
  "url": "sec-derivative-expChain.html#ex-expChain-table",
  "type": "Example",
  "number": "2.5.7",
  "title": "",
  "body": "  Let and be differentiable functions with the values shown below.   Compute the following derivatives.     Compute at .    Using the Chain Rule,   At , we have and , and the table gives .       Compute at .    Again apply the Chain Rule:   At , the table shows , so , and .     "
},
{
  "id": "thm-derivative-a-to-x",
  "level": "2",
  "url": "sec-derivative-expChain.html#thm-derivative-a-to-x",
  "type": "Theorem",
  "number": "2.5.8",
  "title": "Derivative of the General Exponential Functions.",
  "body": " Derivative of the General Exponential Functions   For any positive constant , the derivative of is     To compute the derivative of for a positive constant , we rewrite in terms of the natural exponential function. Recall that by using the power rule for logarithms and the inverse identity we can write:   We now differentiate using the Chain Rule. Let   Then , and by the Chain Rule,   Since , we have . Substituting back:   Using once more, we obtain the final formula:   This completes the proof.   "
},
{
  "id": "ex-derivative-2-to-x",
  "level": "2",
  "url": "sec-derivative-expChain.html#ex-derivative-2-to-x",
  "type": "Example",
  "number": "2.5.9",
  "title": "",
  "body": "  Compute the derivative of .    Apply the exponential derivative formula with .    "
},
{
  "id": "tf-expChain-ap-01",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If , then .     True. This is the Chain Rule with outer function and inner function . Since , we get .   "
},
{
  "id": "tf-expChain-ap-02",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If , then .     False. By the Chain Rule, . The factor is missing.   "
},
{
  "id": "tf-expChain-ap-03",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If for a constant , then for all real .     True. Using , we have for all real and when . Therefore for all .   "
},
{
  "id": "tf-expChain-ap-04",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-04",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If , then , regardless of .     True (assuming the Chain Rule applies at ). By the Chain Rule, . Since , the product is .   "
},
{
  "id": "tf-expChain-ap-05",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-05",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  The derivative of and the derivative of are the same.     False. Using the Chain Rule: , while . These expressions are not equal in general.   "
},
{
  "id": "tf-expChain-ap-06",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-06",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If , then exists for all real .     False. The function is only defined for , so the derivative cannot exist for negative . (On it is differentiable; at one must check separately.)   "
},
{
  "id": "tf-expChain-ap-08",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-08",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  If and on an interval, then is decreasing on that interval.     True (where the composition is defined). By the Chain Rule, . Since and , their product is negative, so is decreasing.   "
},
{
  "id": "tf-expChain-ap-10",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If has a horizontal tangent at , then either or .     True (assuming differentiability so the Chain Rule applies at ). A horizontal tangent means . By the Chain Rule, . A product is zero only if at least one factor is zero, so or .   "
},
{
  "id": "tf-expChain-ap-11",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  If , then .     True. Let . Then . By the Chain Rule, .   "
},
{
  "id": "tf-expChain-ap-12",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Consider the graphs of and below. Since is not differentiable at we know that is not is not differentiable at .    Graphs of two functions and .   A coordinate plane showing two piecewise linear functions. The graph of g(x) is a straight line increasing from the point (0, 1.5) to (3, 3). The graph of f(x) consists of two line segments: one increasing from (0, 0) to (1, 1.5), followed by a decreasing segment from (1, 1.5) to (3, 1). The functions are labeled directly on the graph as f(x) and g(x).        False. The fact that is not differentiable at does not automatically mean that the composite is not differentiable at .  In fact, we can compute the derivative using the Chain Rule. The slope of is constant:   For , the graph of is the line segment from to , so its slope is   on that segment, including at . Therefore,   So  is differentiable at .   "
},
{
  "id": "sec-derivative-implicit",
  "level": "1",
  "url": "sec-derivative-implicit.html",
  "type": "Section",
  "number": "2.6",
  "title": "Implicit Differentiation",
  "body": " Implicit Differentiation    Recognize when a relationship between and requires implicit differentiation rather than treating as an explicit function .  Differentiate equations that involve both and by treating , applying the Product Rule, Quotient Rule, and Chain Rule, and then solving for .  Compute slopes of tangent lines and write equations of tangent lines for curves defined implicitly, including identifying where tangents are horizontal or vertical.    In earlier sections, we found tangent lines and rates of change by differentiating functions written in the form . However, many important curves are not given as explicit functions of . Instead, they are described by equations that relate and implicitly. In this section, we develop a technique called implicit differentiation that allows us to compute derivatives directly from such equations.   A Motivating Example  Consider the circle defined by the equation . If we wish to find the slope of the tangent line at the point , we immediately face a difficulty: there is no function specified in the form .    Tangent line to the circle at the point .   A coordinate plane showing the circle defined by x squared plus y squared equals 25. The circle is centered at the origin with radius 5. A dashed line represents the tangent line at the point (3,4), touching the circle at exactly one point. The point of tangency is marked, and the tangent line slopes downward to the right.     One possible approach is to make the equation explicit by solving for . Let's consider this method first    Find the slope of the tangent line to the circle at the point by first solving for .    We begin by solving the equation of the circle for :     Explicit representations of the circle and the tangent line at .   A coordinate plane showing the circle x squared plus y squared equals 25, written explicitly as two functions. The upper semicircle is shown as y equals the square root of 25 minus x squared, drawn as a solid red curve. The lower semicircle is shown as y equals negative the square root of 25 minus x squared, drawn as a dotted green curve. A dashed blue line represents the tangent line at the point (3,4), touching the upper semicircle at that point. The upper and lower branches are labeled to emphasize that the circle is not a single function of x.     This shows that the circle is the union of two function graphs.  Since the point lies on the upper semicircle, we use .  Differentiate using the Chain Rule:   Evaluating at gives .     While solving an equation for can sometimes allow us to apply standard differentiation rules, this approach is often inconvenient and may even be impossible. In many equations, even relatively simple ones, such as , the variable appears in multiple locations and cannot be isolated as an explicit function of .  Implicit differentiation avoids this difficulty by treating as a function of and differentiating both sides of the equation directly, using the Chain Rule wherever appears.   Instead of solving for , we assume that is an unknown function of that satisfies the equation. Then we can differentiate both sides with respect to .    Use implicit differentiation to find for the circle , and determine the slope of the tangent line at the point .    We treat as a function of and differentiate both sides of the equation with respect to .    The derivative follows from a basic derivative rule. In contrast, differentiating requires the Chain Rule, since is itself a function of . Here the outside function is and the inside function is . As a result, the derivative introduces the unknown quantity , which we can then solve for algebraically.   We now solve for .   This derivative formula applies to every point on the circle. Evaluating at gives     Let us now formalize this process into a general technique.    Key Idea: Implicit Differentiation   Implicit Differentiation    Implicit differentiation consists of differentiating both sides of an equation with respect to and then solving the resulting equation for .  In the examples and exercises of this section, it is assumed that the given equation determines implicitly as a differentiable function of , so that implicit differentiation applies.     The key feature is that depends on , even if the equation does not explicitly solve for . So whenever you differentiate an expression containing , you must use the Chain Rule and include a factor of .     Given the equation , find using implicit differentiation.    Differentiate both sides with respect to . The left side requires the Product Rule on and the Chain Rule on and .   Now solve for by collecting terms with .   A common simplification is to multiply top and bottom by :       Find an equation of the tangent line to the curve at the point .    Differentiate both sides with respect to . Use the Product Rule on both sides.   Now substitute . Note , , , and .   The slope at is 1, so the tangent line is       Find if . At what point in the first quadrant is the tangent line to this curve horizontal?    Differentiate both sides with respect to . On the right side, use the Product Rule on .   Solve for .   A horizontal tangent occurs when , which requires the numerator to be zero (and the denominator nonzero):   Substitute into the original equation .   In the first quadrant, , so divide by :   Then . So the point in the first quadrant where the tangent is horizontal is   (This point is valid as long as , which you can check holds here.)      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Implicit Differentiation      Practice \/ Study Problems   Explain it to a Friend    Explain how to decide when implicit differentiation is needed to find , as opposed to using the standard differentiation rules for explicit functions.  In your explanation, include:   One example where implicit differentiation is required.  One example where implicit differentiation is not required, and standard rules apply directly.     If you have a equation then you can just use the normal way but if is not given explicitly as a function of , and it is not easy to solve for a then implicit differentiation should be used   Example of when implicit differentiation is not needed:     Example of when implicit differentiation is needed:          A student applies implicit differentiation to a curve and finds that at the point .  Explain the geometric meaning of this result in terms of the graph of the curve. Your explanation should describe what this value tells you about the tangent line and the behavior of the curve near the point.    The value at means that the tangent line to the curve at that point has slope . Geometrically, the curve is increasing at , and very close to that point the graph rises about units vertically for every unit horizontally.      True\/False Questions    If , then implicit differentiation is required to find .     True. Since appears on both sides of the equation, it is not possible to isolate as an explicit function of without also having on the right side. Therefore, implicit differentiation is required to find .      If , then .     True. Differentiating both sides with respect to gives Rearranging and solving for yields       If , then .     False. Differentiating both sides with respect to gives Rearranging and solving for yields       If , then .     False. Differentiating both sides with respect to gives Rearranging and solving for yields       If , then at the slope of the tangent line is .     False. Differentiating both sides with respect to gives Plugging in gives which simplifies to Solving for yields       If at a point on a curve defined implicitly, then the tangent line at that point is horizontal.     True. A slope of zero indicates that the tangent line is horizontal at that point on the curve.      If is undefined at a point on a curve defined implicitly, then the tangent line at that point is vertical.     False. While an undefined derivative often indicates a vertical tangent line, it can also occur at points where the curve has a cusp or corner. Therefore, an undefined derivative does not always imply a vertical tangent line.      If , then the curve has a vertical tangent at points where .     True. Differentiating both sides with respect to gives Rearranging and solving for yields At points where , the derivative is undefined, indicating a possible vertical tangent line. We must check if such points lie on the curve. Setting in the original equation gives , so the points and are on the curve and we can verify with a graph that they have vertical tangents.      If , then at the second derivative is .     False. Differentiating both sides with respect to gives Solving for yields Differentiating again with respect to gives Substituting the value of and evaluating at gives       "
},
{
  "id": "sec-derivative-implicit-2",
  "level": "2",
  "url": "sec-derivative-implicit.html#sec-derivative-implicit-2",
  "type": "Objectives",
  "number": "2.6",
  "title": "",
  "body": "  Recognize when a relationship between and requires implicit differentiation rather than treating as an explicit function .  Differentiate equations that involve both and by treating , applying the Product Rule, Quotient Rule, and Chain Rule, and then solving for .  Compute slopes of tangent lines and write equations of tangent lines for curves defined implicitly, including identifying where tangents are horizontal or vertical.   "
},
{
  "id": "fig-implicit-circle-tangent",
  "level": "2",
  "url": "sec-derivative-implicit.html#fig-implicit-circle-tangent",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": " Tangent line to the circle at the point .   A coordinate plane showing the circle defined by x squared plus y squared equals 25. The circle is centered at the origin with radius 5. A dashed line represents the tangent line at the point (3,4), touching the circle at exactly one point. The point of tangency is marked, and the tangent line slopes downward to the right.   "
},
{
  "id": "ex-explicit-circle-tangent",
  "level": "2",
  "url": "sec-derivative-implicit.html#ex-explicit-circle-tangent",
  "type": "Example",
  "number": "2.6.2",
  "title": "",
  "body": "  Find the slope of the tangent line to the circle at the point by first solving for .    We begin by solving the equation of the circle for :     Explicit representations of the circle and the tangent line at .   A coordinate plane showing the circle x squared plus y squared equals 25, written explicitly as two functions. The upper semicircle is shown as y equals the square root of 25 minus x squared, drawn as a solid red curve. The lower semicircle is shown as y equals negative the square root of 25 minus x squared, drawn as a dotted green curve. A dashed blue line represents the tangent line at the point (3,4), touching the upper semicircle at that point. The upper and lower branches are labeled to emphasize that the circle is not a single function of x.     This shows that the circle is the union of two function graphs.  Since the point lies on the upper semicircle, we use .  Differentiate using the Chain Rule:   Evaluating at gives .   "
},
{
  "id": "rem-implicit-motivation",
  "level": "2",
  "url": "sec-derivative-implicit.html#rem-implicit-motivation",
  "type": "Remark",
  "number": "2.6.4",
  "title": "",
  "body": " While solving an equation for can sometimes allow us to apply standard differentiation rules, this approach is often inconvenient and may even be impossible. In many equations, even relatively simple ones, such as , the variable appears in multiple locations and cannot be isolated as an explicit function of .  Implicit differentiation avoids this difficulty by treating as a function of and differentiating both sides of the equation directly, using the Chain Rule wherever appears.  "
},
{
  "id": "ex-implicit-circle-basic",
  "level": "2",
  "url": "sec-derivative-implicit.html#ex-implicit-circle-basic",
  "type": "Example",
  "number": "2.6.5",
  "title": "",
  "body": "  Use implicit differentiation to find for the circle , and determine the slope of the tangent line at the point .    We treat as a function of and differentiate both sides of the equation with respect to .    The derivative follows from a basic derivative rule. In contrast, differentiating requires the Chain Rule, since is itself a function of . Here the outside function is and the inside function is . As a result, the derivative introduces the unknown quantity , which we can then solve for algebraically.   We now solve for .   This derivative formula applies to every point on the circle. Evaluating at gives    "
},
{
  "id": "def-implicit-differentiation",
  "level": "2",
  "url": "sec-derivative-implicit.html#def-implicit-differentiation",
  "type": "Definition",
  "number": "2.6.7",
  "title": "Implicit Differentiation.",
  "body": " Implicit Differentiation    Implicit differentiation consists of differentiating both sides of an equation with respect to and then solving the resulting equation for .  In the examples and exercises of this section, it is assumed that the given equation determines implicitly as a differentiable function of , so that implicit differentiation applies.   "
},
{
  "id": "rem-implicit-why",
  "level": "2",
  "url": "sec-derivative-implicit.html#rem-implicit-why",
  "type": "Remark",
  "number": "2.6.8",
  "title": "",
  "body": " The key feature is that depends on , even if the equation does not explicitly solve for . So whenever you differentiate an expression containing , you must use the Chain Rule and include a factor of .  "
},
{
  "id": "ex-implicit-ln",
  "level": "2",
  "url": "sec-derivative-implicit.html#ex-implicit-ln",
  "type": "Example",
  "number": "2.6.9",
  "title": "",
  "body": "  Given the equation , find using implicit differentiation.    Differentiate both sides with respect to . The left side requires the Product Rule on and the Chain Rule on and .   Now solve for by collecting terms with .   A common simplification is to multiply top and bottom by :    "
},
{
  "id": "ex-implicit-tangent-line",
  "level": "2",
  "url": "sec-derivative-implicit.html#ex-implicit-tangent-line",
  "type": "Example",
  "number": "2.6.10",
  "title": "",
  "body": "  Find an equation of the tangent line to the curve at the point .    Differentiate both sides with respect to . Use the Product Rule on both sides.   Now substitute . Note , , , and .   The slope at is 1, so the tangent line is    "
},
{
  "id": "ex-implicit-astroid-like",
  "level": "2",
  "url": "sec-derivative-implicit.html#ex-implicit-astroid-like",
  "type": "Example",
  "number": "2.6.11",
  "title": "",
  "body": "  Find if . At what point in the first quadrant is the tangent line to this curve horizontal?    Differentiate both sides with respect to . On the right side, use the Product Rule on .   Solve for .   A horizontal tangent occurs when , which requires the numerator to be zero (and the denominator nonzero):   Substitute into the original equation .   In the first quadrant, , so divide by :   Then . So the point in the first quadrant where the tangent is horizontal is   (This point is valid as long as , which you can check holds here.)   "
},
{
  "id": "ex-implicit-when-needed",
  "level": "2",
  "url": "sec-derivative-implicit.html#ex-implicit-when-needed",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Explain how to decide when implicit differentiation is needed to find , as opposed to using the standard differentiation rules for explicit functions.  In your explanation, include:   One example where implicit differentiation is required.  One example where implicit differentiation is not required, and standard rules apply directly.     If you have a equation then you can just use the normal way but if is not given explicitly as a function of , and it is not easy to solve for a then implicit differentiation should be used   Example of when implicit differentiation is not needed:     Example of when implicit differentiation is needed:       "
},
{
  "id": "ex-geom-meaning-slope",
  "level": "2",
  "url": "sec-derivative-implicit.html#ex-geom-meaning-slope",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  A student applies implicit differentiation to a curve and finds that at the point .  Explain the geometric meaning of this result in terms of the graph of the curve. Your explanation should describe what this value tells you about the tangent line and the behavior of the curve near the point.    The value at means that the tangent line to the curve at that point has slope . Geometrically, the curve is increasing at , and very close to that point the graph rises about units vertically for every unit horizontally.   "
},
{
  "id": "tf-imp-ap-05",
  "level": "2",
  "url": "sec-derivative-implicit.html#tf-imp-ap-05",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If , then implicit differentiation is required to find .     True. Since appears on both sides of the equation, it is not possible to isolate as an explicit function of without also having on the right side. Therefore, implicit differentiation is required to find .   "
},
{
  "id": "tf-imp-ap-01",
  "level": "2",
  "url": "sec-derivative-implicit.html#tf-imp-ap-01",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If , then .     True. Differentiating both sides with respect to gives Rearranging and solving for yields    "
},
{
  "id": "tf-imp-ap-04",
  "level": "2",
  "url": "sec-derivative-implicit.html#tf-imp-ap-04",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If , then .     False. Differentiating both sides with respect to gives Rearranging and solving for yields    "
},
{
  "id": "tf-imp-ap-07",
  "level": "2",
  "url": "sec-derivative-implicit.html#tf-imp-ap-07",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If , then .     False. Differentiating both sides with respect to gives Rearranging and solving for yields    "
},
{
  "id": "tf-imp-ap-09",
  "level": "2",
  "url": "sec-derivative-implicit.html#tf-imp-ap-09",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  If , then at the slope of the tangent line is .     False. Differentiating both sides with respect to gives Plugging in gives which simplifies to Solving for yields    "
},
{
  "id": "tf-imp-ap-11",
  "level": "2",
  "url": "sec-derivative-implicit.html#tf-imp-ap-11",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If at a point on a curve defined implicitly, then the tangent line at that point is horizontal.     True. A slope of zero indicates that the tangent line is horizontal at that point on the curve.   "
},
{
  "id": "tf-imp-ap-12",
  "level": "2",
  "url": "sec-derivative-implicit.html#tf-imp-ap-12",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  If is undefined at a point on a curve defined implicitly, then the tangent line at that point is vertical.     False. While an undefined derivative often indicates a vertical tangent line, it can also occur at points where the curve has a cusp or corner. Therefore, an undefined derivative does not always imply a vertical tangent line.   "
},
{
  "id": "tf-imp-ap-13",
  "level": "2",
  "url": "sec-derivative-implicit.html#tf-imp-ap-13",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  If , then the curve has a vertical tangent at points where .     True. Differentiating both sides with respect to gives Rearranging and solving for yields At points where , the derivative is undefined, indicating a possible vertical tangent line. We must check if such points lie on the curve. Setting in the original equation gives , so the points and are on the curve and we can verify with a graph that they have vertical tangents.   "
},
{
  "id": "tf-imp-ap-14",
  "level": "2",
  "url": "sec-derivative-implicit.html#tf-imp-ap-14",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  If , then at the second derivative is .     False. Differentiating both sides with respect to gives Solving for yields Differentiating again with respect to gives Substituting the value of and evaluating at gives    "
},
{
  "id": "sec-derivative-inverse",
  "level": "1",
  "url": "sec-derivative-inverse.html",
  "type": "Section",
  "number": "2.7",
  "title": "Inverse Functions and Their Derivatives",
  "body": " Inverse Functions and Their Derivatives    Use implicit differentiation to derive the formula for the derivative of an inverse function.  Compute derivatives of functions involving logarithmic, trigonometric, and inverse trigonometric functions.  Interpret derivative values of inverse functions geometrically as slopes of tangent lines.    This section builds on your knowledge of implicit differentiation to find derivatives of inverse functions and particularly the inverse trigonometric functions. If you feel a bit out of practice with inverse functions or trigonometric functions, it may be helpful to revisit those ideas before diving into the calculus. A strong foundation makes the new material much more approachable.   Review section on function inverses    Review section on trigonometric functions      Motivating Example and Strategy  Back in the section on exponentials and logs , we stated that the derivative of the natural logarithm function and said that we would prove it later... well now is later! We will use implicit differentiation to find the derivative of .    Create the formula for by using implicit differentiation.    Let . Then by the inverse relationship with the exponential function, Differentiate both sides with respect to to get: Therefore, Now rewrite in terms of . Since we know from above that , we have Thus,     Now let's take this idea and generalize it to find a formula for the derivative of the inverse of any differentiable function.   Finding the Derivative of an Inverse Function     Start with a differentiable function and its inverse . Then by the definition of inverse functions, .    Differentiate both sides with respect to , treating as a function of .    Solve for , then rewrite the result in terms of .      Now let's use this idea to find the formulas for the derivatives of various inverse trigonometric functions.    Derivatives of Inverse Trig Functions   Derivative of      Let . Then . Differentiate both sides with respect to :   Now rewrite in terms of . Since and has range , we have , so   Therefore,      Derivative of      Let . Then . Differentiate:   Since and , we have , and   Therefore,      Derivative of      Let , so . Differentiate:   Use the pythagorean identity and :      Notations of Inverse Trigonometric Functions  Note that some both , , and along with , , and are valid notations for the inverse trigonometric functions. We will use them interchangeably in our course. Students are expected to be comfortable with both notations.     Select Examples  Now that we have the formulas for the derivatives of various inverse functions, let's see some example of problems that would make reasonable homework, quiz, or exam questions.    Find and .    For , use the Chain Rule with outer function and inner function :   For , use the Chain Rule and the derivative of :       Find the derivative of .    Differentiate using the Chain Rule:       Find a point on the curve where the slope is . Is there more than one answer?    Since , we want   Solve for :   So there are two points. When , , and when , . Therefore the slope is at   Yes, there is more than one answer because depends on , so it has the same value at and .      Suppose that is differentiable, , and . Find .    Let . Then . Differentiate both sides with respect to :   Therefore,   Now evaluate at . Since , we have because . Thus,       Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Inverse Functions and Their Derivatives      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answer.      .   False. The Chain Rule introduces a factor of 5.     If , then .   False. The derivative requires the Quotient Rule.       The derivative of is always less than 1.   True. Since and for all real , the derivative is always less than or equal to 1, and equal to 1 only at .     If , then .   False. The derivative of is . At , the expression under the square root is negative, so is undefined. Therefore, .     If , then at the tangent line equation is given by .   True. The derivative of is . At , and , so the tangent line equation is .     If is one-to-one and differentiable and contains the point and is its inverse, then .   True. Consider , then so , which gives . Since , therefore      If and note that , then .   True. Consider , then so , which gives . Since , we have , so . Therefore,      If has a horizontal tangent at , then has a vertical tangent at .   True. If has a horizontal tangent at , then . Since , it follows that , which is undefined. Therefore, has a vertical tangent at . We can also verify this by sketching the graphs of and and remembering that they are reflections across the line .     If is increasing, then is decreasing.   False. Both are increasing.  If is increasing, then for all in the domain of . Since , and , it follows that . Therefore, is also increasing.      Consider a function and its inverse as shown in the figure below. The function contains the point and contains the point . Since the functions are inverses of each other, the two tangent lines at these corresponding points must be perpendicular to each other.   >  A function and its inverse , shown as reflections across the line .   A coordinate plane showing the graph of a function f(x) in red and its inverse f inverse of x in blue. The two graphs are mirror images of each other across the dashed diagonal line y equals x. A point on f(x) at approximately (4, 2) corresponds to a point on f inverse of x at approximately (2, 4), illustrating the inverse relationship between the functions.        False. The slopes of the tangent lines at corresponding points of a function and its inverse are multiplicative inverses of each other, not negative reciprocals. Therefore, the tangent lines are not necessarily perpendicular. You can also sketch the tangent lines to see that they are not perpendicular.      "
},
{
  "id": "sec-derivative-inverse-2",
  "level": "2",
  "url": "sec-derivative-inverse.html#sec-derivative-inverse-2",
  "type": "Objectives",
  "number": "2.7",
  "title": "",
  "body": "  Use implicit differentiation to derive the formula for the derivative of an inverse function.  Compute derivatives of functions involving logarithmic, trigonometric, and inverse trigonometric functions.  Interpret derivative values of inverse functions geometrically as slopes of tangent lines.   "
},
{
  "id": "ex-derivative-ln",
  "level": "2",
  "url": "sec-derivative-inverse.html#ex-derivative-ln",
  "type": "Example",
  "number": "2.7.1",
  "title": "",
  "body": "  Create the formula for by using implicit differentiation.    Let . Then by the inverse relationship with the exponential function, Differentiate both sides with respect to to get: Therefore, Now rewrite in terms of . Since we know from above that , we have Thus,    "
},
{
  "id": "insight-derivative-inverse-general",
  "level": "2",
  "url": "sec-derivative-inverse.html#insight-derivative-inverse-general",
  "type": "Strategy",
  "number": "2.7.2",
  "title": "Finding the Derivative of an Inverse Function.",
  "body": " Finding the Derivative of an Inverse Function     Start with a differentiable function and its inverse . Then by the definition of inverse functions, .    Differentiate both sides with respect to , treating as a function of .    Solve for , then rewrite the result in terms of .     "
},
{
  "id": "thm-derivative-arcsin",
  "level": "2",
  "url": "sec-derivative-inverse.html#thm-derivative-arcsin",
  "type": "Theorem",
  "number": "2.7.3",
  "title": "Derivative of <span class=\"process-math\">\\(\\arcsin(x)\\)<\/span>.",
  "body": " Derivative of      Let . Then . Differentiate both sides with respect to :   Now rewrite in terms of . Since and has range , we have , so   Therefore,    "
},
{
  "id": "thm-derivative-arccos",
  "level": "2",
  "url": "sec-derivative-inverse.html#thm-derivative-arccos",
  "type": "Theorem",
  "number": "2.7.4",
  "title": "Derivative of <span class=\"process-math\">\\(\\arccos(x)\\)<\/span>.",
  "body": " Derivative of      Let . Then . Differentiate:   Since and , we have , and   Therefore,    "
},
{
  "id": "thm-derivative-arctan",
  "level": "2",
  "url": "sec-derivative-inverse.html#thm-derivative-arctan",
  "type": "Theorem",
  "number": "2.7.5",
  "title": "Derivative of <span class=\"process-math\">\\(\\arctan(x)\\)<\/span>.",
  "body": " Derivative of      Let , so . Differentiate:   Use the pythagorean identity and :    "
},
{
  "id": "remark-derivative-inverse-trig-domains",
  "level": "2",
  "url": "sec-derivative-inverse.html#remark-derivative-inverse-trig-domains",
  "type": "Remark",
  "number": "2.7.6",
  "title": "Notations of Inverse Trigonometric Functions.",
  "body": " Notations of Inverse Trigonometric Functions  Note that some both , , and along with , , and are valid notations for the inverse trigonometric functions. We will use them interchangeably in our course. Students are expected to be comfortable with both notations.  "
},
{
  "id": "ex-deriv-ln-sin-arcsin",
  "level": "2",
  "url": "sec-derivative-inverse.html#ex-deriv-ln-sin-arcsin",
  "type": "Example",
  "number": "2.7.7",
  "title": "",
  "body": "  Find and .    For , use the Chain Rule with outer function and inner function :   For , use the Chain Rule and the derivative of :    "
},
{
  "id": "ex-domain-derivative-sqrt-ln",
  "level": "2",
  "url": "sec-derivative-inverse.html#ex-domain-derivative-sqrt-ln",
  "type": "Example",
  "number": "2.7.8",
  "title": "",
  "body": "  Find the derivative of .    Differentiate using the Chain Rule:    "
},
{
  "id": "ex-arctan-slope-point",
  "level": "2",
  "url": "sec-derivative-inverse.html#ex-arctan-slope-point",
  "type": "Example",
  "number": "2.7.9",
  "title": "",
  "body": "  Find a point on the curve where the slope is . Is there more than one answer?    Since , we want   Solve for :   So there are two points. When , , and when , . Therefore the slope is at   Yes, there is more than one answer because depends on , so it has the same value at and .   "
},
{
  "id": "ex-inverse-derivative-general",
  "level": "2",
  "url": "sec-derivative-inverse.html#ex-inverse-derivative-general",
  "type": "Example",
  "number": "2.7.10",
  "title": "",
  "body": "  Suppose that is differentiable, , and . Find .    Let . Then . Differentiate both sides with respect to :   Therefore,   Now evaluate at . Since , we have because . Thus,    "
},
{
  "id": "exercises-derivative-inv-tf-2-3",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   .   False. The Chain Rule introduces a factor of 5.  "
},
{
  "id": "exercises-derivative-inv-tf-2-4",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If , then .   False. The derivative requires the Quotient Rule.    "
},
{
  "id": "exercises-derivative-inv-tf-2-5",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  The derivative of is always less than 1.   True. Since and for all real , the derivative is always less than or equal to 1, and equal to 1 only at .  "
},
{
  "id": "exercises-derivative-inv-tf-2-6",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If , then .   False. The derivative of is . At , the expression under the square root is negative, so is undefined. Therefore, .  "
},
{
  "id": "exercises-derivative-inv-tf-2-7",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If , then at the tangent line equation is given by .   True. The derivative of is . At , and , so the tangent line equation is .  "
},
{
  "id": "exercises-derivative-inv-tf-2-8",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If is one-to-one and differentiable and contains the point and is its inverse, then .   True. Consider , then so , which gives . Since , therefore   "
},
{
  "id": "exercises-derivative-inv-tf-2-9",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  If and note that , then .   True. Consider , then so , which gives . Since , we have , so . Therefore,   "
},
{
  "id": "exercises-derivative-inv-tf-2-10",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If has a horizontal tangent at , then has a vertical tangent at .   True. If has a horizontal tangent at , then . Since , it follows that , which is undefined. Therefore, has a vertical tangent at . We can also verify this by sketching the graphs of and and remembering that they are reflections across the line .  "
},
{
  "id": "exercises-derivative-inv-tf-2-11",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  If is increasing, then is decreasing.   False. Both are increasing.  If is increasing, then for all in the domain of . Since , and , it follows that . Therefore, is also increasing.   "
},
{
  "id": "exercises-derivative-inv-tf-2-12",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Consider a function and its inverse as shown in the figure below. The function contains the point and contains the point . Since the functions are inverses of each other, the two tangent lines at these corresponding points must be perpendicular to each other.   >  A function and its inverse , shown as reflections across the line .   A coordinate plane showing the graph of a function f(x) in red and its inverse f inverse of x in blue. The two graphs are mirror images of each other across the dashed diagonal line y equals x. A point on f(x) at approximately (4, 2) corresponds to a point on f inverse of x at approximately (2, 4), illustrating the inverse relationship between the functions.        False. The slopes of the tangent lines at corresponding points of a function and its inverse are multiplicative inverses of each other, not negative reciprocals. Therefore, the tangent lines are not necessarily perpendicular. You can also sketch the tangent lines to see that they are not perpendicular.   "
},
{
  "id": "sec-derivative-ww",
  "level": "1",
  "url": "sec-derivative-ww.html",
  "type": "Section",
  "number": "2.8",
  "title": "Additional Worked-Out Problems",
  "body": " Additional Worked-Out Problems   Introduction and Motivation for Derivatives  test    Definition of the Derivative  test    Basic Differentiation Rules  test    Trigonometric Derivatives  test    Exponential Functions and the Chain Rule  test    Implicit Differentiation  test    Inverse Functions and Their Derivatives  test   "
},
{
  "id": "sec-derivApp-motion",
  "level": "1",
  "url": "sec-derivApp-motion.html",
  "type": "Section",
  "number": "3.1",
  "title": "Motion in Physics",
  "body": " Motion in Physics    Translate between physical, geometric, numerical, and algebraic meanings of the derivative.  Interpret motion quantities , , , and using derivatives.  Use graphs and tables to estimate rates of change and interpret what they mean in context.     Conceptual Levels of the Derivative  Mathematics solves problems partly with technical tools, but also by translating between different levels of meaning. Many problems begin in a physical or geometric setting. We often translate them into a numerical or algebraic setting where our tools apply, then translate the result back to the original context.  Our key concept so far has been the derivative . For a function , the derivative has several complementary meanings.    Physical:  is the rate of change of with respect to . For a specific input , describes how fast changes near .   Geometric:  is the slope of the tangent line to the graph at .   Numerical: we approximate the derivative using a difference quotient where is small. As , the average rate of change approaches the instantaneous rate of change.   Algebraic: we compute derivatives from formulas using derivative rules and known basic derivatives. Occasionally we return to the definition      Functions of Motion  Many applications of derivatives involve motion. In this subsection, all quantities are functions of time .    Position (or displacement) : distance past a reference point (for example, in feet) at time seconds.   Velocity  : the rate of change of position (ft\/sec). Velocity may be negative. Speed is .   Acceleration  : the rate of change of velocity (ft\/sec 2 ). A useful benchmark is one gee , about ft\/sec 2 , the free-fall acceleration near Earth’s surface.   Jerk  : the rate of change of acceleration (ft\/sec 3 ).     Car Stopping  Consider a car whose speedometer data is represented by the velocity graph below. Remember: velocity is the derivative of position, so the level of is the slope of .   Velocity data from a car’s speedometer.    Since , a constant velocity corresponds to a distance graph with constant slope. If the velocity suddenly drops to zero, the distance graph becomes flat.   Distance consistent with the velocity graph.    Acceleration is the derivative of velocity, , so the slope of the velocity graph becomes the level of the acceleration graph. The transition is very steep, so the average acceleration over that short time is large.    Acceleration is near zero except during the sudden stop.     These graphs describe a car going from about 40 mph to 0 in about 0.1 seconds. That is not normal braking. It indicates a crash. The deceleration is roughly gees for a brief moment, which would feel like many times your weight pressing into the seatbelt.     Braking Techniques and Jerk  Now imagine braking steadily at a traffic light, slowing at a constant rate until the car stops. Here the velocity decreases linearly, and the acceleration is roughly constant.    A steady stop: acceleration is roughly constant (left), velocity decreases linearly (middle), and distance levels off smoothly (right).      Even if the deceleration is not large, an abrupt change in acceleration produces a noticeable jolt. That jolt corresponds to a large value of jerk for a brief moment.  To reduce jerk, the acceleration should change gradually: squeeze the brake down and release it smoothly. This makes the acceleration graph rise and fall instead of jumping suddenly.   Smoother braking reduces jerk, but it may require a longer stopping time to keep peak deceleration reasonable.       Smoother changes in acceleration often require a longer stopping distance and time. In driving terms: if you want a gentle stop without a jolt, you usually need to begin braking earlier.     The Ballistic Equation  A basic model for vertical motion under constant gravity is the ballistic equation :   Here is the initial height, is the initial velocity, and is a positive constant representing the strength of gravity. Differentiating reveals the relationships among position, velocity, acceleration, and jerk.     Under standard gravity ft\/sec 2 , suppose a ball is thrown straight up from height ft. How large must be so that the ball hits the ground after seconds? How high does it go?    The model is . Landing at means .   so and therefore ft\/sec.  The velocity is . The ball reaches its highest point when .   The height at that time is ft.  For the velocity is positive (the ball rises). For the velocity is negative (the ball falls).     The graph of is a downward-opening parabola in , representing height over time. It is not the full two-dimensional flight path of the ball, since horizontal motion is ignored in this model.     Practice: Translating Between Levels    A position graph is increasing and concave down on an interval. Describe what this says about the signs of and on that interval.      A velocity graph is above the -axis and decreasing. What can you conclude about the motion of the object? Include a statement about speed and acceleration.      Suppose a car’s acceleration graph has a sharp jump at a moment in time. What does this suggest about the jerk? Give a real-world interpretation.     "
},
{
  "id": "sec-derivApp-motion-2",
  "level": "2",
  "url": "sec-derivApp-motion.html#sec-derivApp-motion-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "  Translate between physical, geometric, numerical, and algebraic meanings of the derivative.  Interpret motion quantities , , , and using derivatives.  Use graphs and tables to estimate rates of change and interpret what they mean in context.   "
},
{
  "id": "conceptual-levels-3",
  "level": "2",
  "url": "sec-derivApp-motion.html#conceptual-levels-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivative "
},
{
  "id": "fig-stop-v-1",
  "level": "2",
  "url": "sec-derivApp-motion.html#fig-stop-v-1",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " Velocity data from a car’s speedometer.   "
},
{
  "id": "fig-stop-s-1",
  "level": "2",
  "url": "sec-derivApp-motion.html#fig-stop-s-1",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " Distance consistent with the velocity graph.   "
},
{
  "id": "fig-stop-a-1",
  "level": "2",
  "url": "sec-derivApp-motion.html#fig-stop-a-1",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": " Acceleration is near zero except during the sudden stop.   "
},
{
  "id": "rem-crash-interpretation",
  "level": "2",
  "url": "sec-derivApp-motion.html#rem-crash-interpretation",
  "type": "Remark",
  "number": "3.1.4",
  "title": "",
  "body": " These graphs describe a car going from about 40 mph to 0 in about 0.1 seconds. That is not normal braking. It indicates a crash. The deceleration is roughly gees for a brief moment, which would feel like many times your weight pressing into the seatbelt.  "
},
{
  "id": "fig-stop-a-v-s-2",
  "level": "2",
  "url": "sec-derivApp-motion.html#fig-stop-a-v-s-2",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": " A steady stop: acceleration is roughly constant (left), velocity decreases linearly (middle), and distance levels off smoothly (right).     "
},
{
  "id": "fig-stop-a-v-s-3",
  "level": "2",
  "url": "sec-derivApp-motion.html#fig-stop-a-v-s-3",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": " Smoother braking reduces jerk, but it may require a longer stopping time to keep peak deceleration reasonable.     "
},
{
  "id": "rem-braking-tradeoff",
  "level": "2",
  "url": "sec-derivApp-motion.html#rem-braking-tradeoff",
  "type": "Remark",
  "number": "3.1.7",
  "title": "",
  "body": " Smoother changes in acceleration often require a longer stopping distance and time. In driving terms: if you want a gentle stop without a jolt, you usually need to begin braking earlier.  "
},
{
  "id": "ballistic-equation-2",
  "level": "2",
  "url": "sec-derivApp-motion.html#ballistic-equation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ballistic equation "
},
{
  "id": "ex-throw-ball-4-seconds",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-throw-ball-4-seconds",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": "  Under standard gravity ft\/sec 2 , suppose a ball is thrown straight up from height ft. How large must be so that the ball hits the ground after seconds? How high does it go?    The model is . Landing at means .   so and therefore ft\/sec.  The velocity is . The ball reaches its highest point when .   The height at that time is ft.  For the velocity is positive (the ball rises). For the velocity is negative (the ball falls).   "
},
{
  "id": "rem-trajectory-vs-height",
  "level": "2",
  "url": "sec-derivApp-motion.html#rem-trajectory-vs-height",
  "type": "Remark",
  "number": "3.1.9",
  "title": "",
  "body": " The graph of is a downward-opening parabola in , representing height over time. It is not the full two-dimensional flight path of the ball, since horizontal motion is ignored in this model.  "
},
{
  "id": "ex-translation-1",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-translation-1",
  "type": "Checkpoint",
  "number": "3.1.10",
  "title": "",
  "body": "  A position graph is increasing and concave down on an interval. Describe what this says about the signs of and on that interval.   "
},
{
  "id": "ex-translation-2",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-translation-2",
  "type": "Checkpoint",
  "number": "3.1.11",
  "title": "",
  "body": "  A velocity graph is above the -axis and decreasing. What can you conclude about the motion of the object? Include a statement about speed and acceleration.   "
},
{
  "id": "ex-translation-3",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-translation-3",
  "type": "Checkpoint",
  "number": "3.1.12",
  "title": "",
  "body": "  Suppose a car’s acceleration graph has a sharp jump at a moment in time. What does this suggest about the jerk? Give a real-world interpretation.   "
},
{
  "id": "sec-derivApp-related",
  "level": "1",
  "url": "sec-derivApp-related.html",
  "type": "Section",
  "number": "3.2",
  "title": "Related Rates",
  "body": " Related Rates    Set up a related rates problem by identifying variables, constants, current values, and known rates.  Write a geometric relationship among variables, then differentiate with respect to time using the Chain Rule.  Compute an unknown rate at a specific instant by substituting current values only at the end.  Check answers for sign and real-world plausibility, including unit consistency.     Pulley Example  Consider a weight hanging from a rope that goes up to a pulley 10 ft above the floor and then down to your hand, which is 3 ft above the floor and 15 ft horizontally from the pulley. If you walk away from the pulley at ft\/sec, how fast will the weight rise?  This is a related rates problem: we want an unknown rate of change from a known rate, using a geometric relationship. Start by drawing a picture and labeling constants and variables. Let be the horizontal distance from the weight to your hand, and let be the length of the rope segment from the pulley to your hand. The problem gives the current value and the current rate (ft\/sec). We want .   Pulley setup with variables and .    The vertical distance from your hand up to the pulley is constant: ft. By the Pythagorean Theorem, the geometry implies   One approach is to solve for and then differentiate.   Now substitute the current values:   The weight rises at the same rate that the rope segment increases, so the weight rises at about ft\/sec at that instant.   Plug in the current values only at the last step. If you substitute before differentiating, you turn variables into constants and their derivatives become zero.   We can also do this more directly by implicitly differentiating the relationship .   Since , this gives the same numerical result as above.    A Method for Related Rates Problems   Draw a picture labeled with:  numerical constant values,  letter variables and their current values,  arrows showing known current rates (derivatives),  an arrow for the unknown target rate you want.    Write an equation relating the variables using geometry (or a known formula).  Assume each variable depends on time , then differentiate both sides with respect to . Use the Chain Rule whenever a variable appears inside a power, root, trig function, etc. Solve for the target derivative if needed.  Substitute the current values and current rates to compute the target rate.     Spill Radius Example  A stream of water spreads a circular puddle on the floor. If the puddle is 1 meter across and the stream increases the area at a rate of m 2 \/min, how quickly is the puddle widening at that instant?   A growing circular puddle with radius and area .    Let be the puddle’s radius and its area. A diameter of 1 m means the current radius is . The given rate is m 2 \/min. We want .  The geometric relationship is Differentiate both sides with respect to time:   Solve for the target rate and substitute the current values:    Always check plausibility. A radius increase of about 0.6 m per minute can be reasonable, depending on flow rate and surface.     Searchlight Example  A searchlight shines along a wall 20 meters away. If the light is currently away from pointing directly at the wall and the light is rotating at per second, what is the speed of the bright spot moving along the wall at that instant?   The spotlight position depends on the angle .    Let be the angle and the distance of the spot from the point on the wall closest to the light. The geometry gives so   Differentiate with respect to time:   Trig derivatives require radians. Convert the current angle and angular speed:   Now compute:   Since , we have , so    The problem asks for speed , so report . If the rotation direction were opposite, the derivative would change sign but the speed would be the same.    If you mistakenly use in degrees\/sec inside the derivative formula, the numerical answer will be wrong. Convert to radians\/sec before substituting.     Flashlight Examples  A flashlight shines a cone of light straight toward a wall. The lit region on the wall is a circle. What is the rate of change of the lit circular area if: (a) the flashlight moves toward the wall at 2 m\/sec; (b) the flashlight stays 5 m from the wall, but the focus narrows so the total angle decreases at per second?   Case (a): Moving Toward the Wall   As the flashlight moves, similar triangles relate the radius to the distance .    Let be the distance from the wall, the radius of the lit circle, and its area. We are given , , and . Similar triangles show , so , and therefore .  Differentiate and substitute:   The negative sign matches the situation: as the flashlight moves closer, the circle on the wall shrinks.    Case (b): Narrowing the Beam  Now the distance is constant at 5 m, but the beam angle changes. Let be the total cone angle and let be the radius of the lit circle. The right triangle in the diagram uses the half-angle :   Differentiate using the Chain Rule:   We are given , so . Convert to radians\/sec: .  We are not given , but we are given and distance 5 m, so . Also, using the same right triangle, the adjacent side is 5 and the opposite side is , so the hypotenuse squared is , giving .  Substitute into the derivative formula:   The sign makes sense: the beam narrows, so the lit area decreases.   A quick check: . If the angle is decreasing at about \/sec, the circle can shrink very quickly at that instant, so a relatively large negative area rate is plausible.      Practice Problems    In the pulley example, explain why substituting into before differentiating leads to an incorrect conclusion about .      A circular disk has radius and area . If is constant and positive, describe how the sign and size of change as grows.      In the searchlight example, identify which step requires converting degrees to radians, and explain why that conversion is essential.     "
},
{
  "id": "sec-derivApp-related-2",
  "level": "2",
  "url": "sec-derivApp-related.html#sec-derivApp-related-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "  Set up a related rates problem by identifying variables, constants, current values, and known rates.  Write a geometric relationship among variables, then differentiate with respect to time using the Chain Rule.  Compute an unknown rate at a specific instant by substituting current values only at the end.  Check answers for sign and real-world plausibility, including unit consistency.   "
},
{
  "id": "pulley-example-3",
  "level": "2",
  "url": "sec-derivApp-related.html#pulley-example-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "related rates "
},
{
  "id": "fig-pulley",
  "level": "2",
  "url": "sec-derivApp-related.html#fig-pulley",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Pulley setup with variables and .   "
},
{
  "id": "rem-plug-in-last",
  "level": "2",
  "url": "sec-derivApp-related.html#rem-plug-in-last",
  "type": "Remark",
  "number": "3.2.2",
  "title": "",
  "body": " Plug in the current values only at the last step. If you substitute before differentiating, you turn variables into constants and their derivatives become zero.  "
},
{
  "id": "fig-puddle",
  "level": "2",
  "url": "sec-derivApp-related.html#fig-puddle",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " A growing circular puddle with radius and area .   "
},
{
  "id": "rem-puddle-plausible",
  "level": "2",
  "url": "sec-derivApp-related.html#rem-puddle-plausible",
  "type": "Remark",
  "number": "3.2.4",
  "title": "",
  "body": " Always check plausibility. A radius increase of about 0.6 m per minute can be reasonable, depending on flow rate and surface.  "
},
{
  "id": "fig-searchlight",
  "level": "2",
  "url": "sec-derivApp-related.html#fig-searchlight",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " The spotlight position depends on the angle .   "
},
{
  "id": "rem-sign-speed",
  "level": "2",
  "url": "sec-derivApp-related.html#rem-sign-speed",
  "type": "Remark",
  "number": "3.2.6",
  "title": "",
  "body": " The problem asks for speed , so report . If the rotation direction were opposite, the derivative would change sign but the speed would be the same.  "
},
{
  "id": "rem-radians-required",
  "level": "2",
  "url": "sec-derivApp-related.html#rem-radians-required",
  "type": "Remark",
  "number": "3.2.7",
  "title": "",
  "body": " If you mistakenly use in degrees\/sec inside the derivative formula, the numerical answer will be wrong. Convert to radians\/sec before substituting.  "
},
{
  "id": "fig-flashlight-a",
  "level": "2",
  "url": "sec-derivApp-related.html#fig-flashlight-a",
  "type": "Figure",
  "number": "3.2.8",
  "title": "",
  "body": " As the flashlight moves, similar triangles relate the radius to the distance .   "
},
{
  "id": "rem-angle-size-check",
  "level": "2",
  "url": "sec-derivApp-related.html#rem-angle-size-check",
  "type": "Remark",
  "number": "3.2.9",
  "title": "",
  "body": " A quick check: . If the angle is decreasing at about \/sec, the circle can shrink very quickly at that instant, so a relatively large negative area rate is plausible.  "
},
{
  "id": "ex-rr-1",
  "level": "2",
  "url": "sec-derivApp-related.html#ex-rr-1",
  "type": "Checkpoint",
  "number": "3.2.10",
  "title": "",
  "body": "  In the pulley example, explain why substituting into before differentiating leads to an incorrect conclusion about .   "
},
{
  "id": "ex-rr-2",
  "level": "2",
  "url": "sec-derivApp-related.html#ex-rr-2",
  "type": "Checkpoint",
  "number": "3.2.11",
  "title": "",
  "body": "  A circular disk has radius and area . If is constant and positive, describe how the sign and size of change as grows.   "
},
{
  "id": "ex-rr-3",
  "level": "2",
  "url": "sec-derivApp-related.html#ex-rr-3",
  "type": "Checkpoint",
  "number": "3.2.12",
  "title": "",
  "body": "  In the searchlight example, identify which step requires converting degrees to radians, and explain why that conversion is essential.   "
},
{
  "id": "sec-derivApp-linear",
  "level": "1",
  "url": "sec-derivApp-linear.html",
  "type": "Section",
  "number": "3.3",
  "title": "Linear Approximation and L’Hopital’s Rule",
  "body": " Linear Approximation and L'Hopital's Rule    Students should understand the idea of linearization (tangent line approximation) and recognize why it can be used to approximate a function near .  Students should recognize the purpose of linearization as a tool for simplifying complicated functions and interpreting the result in context.  Students should be able to apply the linear approximation formula in simple to moderately complicated problems.  Students should see how linearization can be used to motivate (and ultimately prove) L’Hôpital’s Rule.  Students should recognize when L’Hôpital’s Rule applies, particularly for indeterminate forms and .  Students should be able to apply L’Hôpital’s Rule in simple to moderately complicated problems, including those that require up to two applications.     Linearization    Let be differentiable at . The linearization of at is the linear function   The graph of is the tangent line to at the point .    The idea is that when is close to , the curve and its tangent line have very similar values. So can be used to approximate near .    Find the linearization of at . Use it to approximate and .    First compute and .    Therefore the linearization at is   To approximate , notice that , so   Similarly, , so       Use linear approximation to estimate .    Let and linearize at (since is close to ). We have and , so .   Therefore,       L’Hôpital’s Rule   L’Hôpital’s Rule (Informal Statement)   Suppose and are differentiable near (except possibly at ), and near . If   then   provided the limit on the right exists (or is infinite).     One way to motivate L’Hôpital’s Rule is through linearization: near a point, differentiable functions behave like their tangent lines, and tangent lines are linear. This idea can be used to build an argument for why replacing and by and can preserve the limiting ratio in indeterminate forms.     Compute .    As , we have and , so this is an indeterminate form . Apply L’Hôpital’s Rule:       Compute . (This requires two applications of L’Hôpital’s Rule.)    As , both and go to , so this is an indeterminate form . Apply L’Hôpital’s Rule:   This is still , so apply L’Hôpital’s Rule again:   Therefore, . In words: grows faster than .     "
},
{
  "id": "sec-derivApp-linear-2",
  "level": "2",
  "url": "sec-derivApp-linear.html#sec-derivApp-linear-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "  Students should understand the idea of linearization (tangent line approximation) and recognize why it can be used to approximate a function near .  Students should recognize the purpose of linearization as a tool for simplifying complicated functions and interpreting the result in context.  Students should be able to apply the linear approximation formula in simple to moderately complicated problems.  Students should see how linearization can be used to motivate (and ultimately prove) L’Hôpital’s Rule.  Students should recognize when L’Hôpital’s Rule applies, particularly for indeterminate forms and .  Students should be able to apply L’Hôpital’s Rule in simple to moderately complicated problems, including those that require up to two applications.   "
},
{
  "id": "def-linearization",
  "level": "2",
  "url": "sec-derivApp-linear.html#def-linearization",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  Let be differentiable at . The linearization of at is the linear function   The graph of is the tangent line to at the point .   "
},
{
  "id": "ex-linearization-sqrt",
  "level": "2",
  "url": "sec-derivApp-linear.html#ex-linearization-sqrt",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Find the linearization of at . Use it to approximate and .    First compute and .    Therefore the linearization at is   To approximate , notice that , so   Similarly, , so    "
},
{
  "id": "ex-linearization-exp-01",
  "level": "2",
  "url": "sec-derivApp-linear.html#ex-linearization-exp-01",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Use linear approximation to estimate .    Let and linearize at (since is close to ). We have and , so .   Therefore,    "
},
{
  "id": "thm-lhopital",
  "level": "2",
  "url": "sec-derivApp-linear.html#thm-lhopital",
  "type": "Theorem",
  "number": "3.3.4",
  "title": "L’Hôpital’s Rule (Informal Statement).",
  "body": " L’Hôpital’s Rule (Informal Statement)   Suppose and are differentiable near (except possibly at ), and near . If   then   provided the limit on the right exists (or is infinite).   "
},
{
  "id": "rem-linearization-motivation",
  "level": "2",
  "url": "sec-derivApp-linear.html#rem-linearization-motivation",
  "type": "Remark",
  "number": "3.3.5",
  "title": "",
  "body": " One way to motivate L’Hôpital’s Rule is through linearization: near a point, differentiable functions behave like their tangent lines, and tangent lines are linear. This idea can be used to build an argument for why replacing and by and can preserve the limiting ratio in indeterminate forms.  "
},
{
  "id": "ex-lhopital-ln-over-xminus1",
  "level": "2",
  "url": "sec-derivApp-linear.html#ex-lhopital-ln-over-xminus1",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "  Compute .    As , we have and , so this is an indeterminate form . Apply L’Hôpital’s Rule:    "
},
{
  "id": "ex-lhopital-exp-over-x2",
  "level": "2",
  "url": "sec-derivApp-linear.html#ex-lhopital-exp-over-x2",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": "  Compute . (This requires two applications of L’Hôpital’s Rule.)    As , both and go to , so this is an indeterminate form . Apply L’Hôpital’s Rule:   This is still , so apply L’Hôpital’s Rule again:   Therefore, . In words: grows faster than .   "
},
{
  "id": "sec-derivApp-extrema",
  "level": "1",
  "url": "sec-derivApp-extrema.html",
  "type": "Section",
  "number": "3.4",
  "title": "Extrema",
  "body": " Extrema  Text of section.  "
},
{
  "id": "sec-derivApp-mvt",
  "level": "1",
  "url": "sec-derivApp-mvt.html",
  "type": "Section",
  "number": "3.5",
  "title": "Mean Value Theorem",
  "body": " Mean Value Theorem  Text of section.  "
},
{
  "id": "sec-derivApp-curve1",
  "level": "1",
  "url": "sec-derivApp-curve1.html",
  "type": "Section",
  "number": "3.6",
  "title": "Curve Sketching Part 1",
  "body": " Curve Sketching Part 1  Text of section.  "
},
{
  "id": "sec-derivApp-curve2",
  "level": "1",
  "url": "sec-derivApp-curve2.html",
  "type": "Section",
  "number": "3.7",
  "title": "Curve Sketching Part 2",
  "body": " Curve Sketching Part 2  Text of section.  "
},
{
  "id": "sec-derivApp-opt",
  "level": "1",
  "url": "sec-derivApp-opt.html",
  "type": "Section",
  "number": "3.8",
  "title": "Optimization Problems",
  "body": " Optimization Problems  Text of section.  "
},
{
  "id": "sec-integral-antiderivatives",
  "level": "1",
  "url": "sec-integral-antiderivatives.html",
  "type": "Section",
  "number": "4.1",
  "title": "Antiderivatives",
  "body": " Antiderivatives  Text of section.  "
},
{
  "id": "sec-integral-riemannSums",
  "level": "1",
  "url": "sec-integral-riemannSums.html",
  "type": "Section",
  "number": "4.2",
  "title": "Riemann Sums and Areas",
  "body": " Riemann Sums and Areas  Text of section.  "
},
{
  "id": "sec-integral-defInt",
  "level": "1",
  "url": "sec-integral-defInt.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Definite Integral",
  "body": " The Definite Integral  Text of section.  "
},
{
  "id": "sec-integral-FTC",
  "level": "1",
  "url": "sec-integral-FTC.html",
  "type": "Section",
  "number": "4.4",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus  Text of section.  "
},
{
  "id": "sec-integral-net",
  "level": "1",
  "url": "sec-integral-net.html",
  "type": "Section",
  "number": "4.5",
  "title": "Net Change Theorem and Indefinite Integrals",
  "body": " Net Change Theorem and Indefinite Integrals  Text of section.  "
},
{
  "id": "sec-integral-usub",
  "level": "1",
  "url": "sec-integral-usub.html",
  "type": "Section",
  "number": "4.6",
  "title": "Substitution Rule for Integration",
  "body": " Substitution Rule for Integration  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Quiz \/ Exam Formula Sheet",
  "body": " Quiz \/ Exam Formula Sheet  This is a copy of the formulas that are available for you on our formula sheet for 2025 and beyond.  Test   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
