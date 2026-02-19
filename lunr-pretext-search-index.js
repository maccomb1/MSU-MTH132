var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This project was made possible in large part by the support of Michigan State University and the College of Natural Science through the EDGE Fellowship awarded in Spring 2026. That fellowship provided the time and space necessary to meaningfully develop and refine these course notes, and I am deeply grateful for that support.  I am also indebted to Dr. Peter Magyar, who authored the first version of the MTH 132 course notes . In many places, this text builds directly on his structure, ideas, and exposition, and his work served as an essential foundation for what appears here.  Thanks are also due to the SIGMAA WEB group at Mathfest 2025, whose sessions clearly demonstrated how approachable and powerful PreTeXt can be. Their work and examples played an important role in lowering the barrier to getting this project off the ground.  If you spot any errors or unclear explanations please let me know. I welcome suggestions for improvement and corrections, and I would be grateful if readers would share feedback using the following Google Feedback Form .     Ryan Maccombs  Michigan State University  January 2026   maccomb1@msu.edu    "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Students: How to Use this Book",
  "body": " Students: How to Use this Book  Welcome to MTH 132: Calculus I . This book has been created to guide you through the course, to support your in-class learning, and to give you a resource for independent study and practice.  Structure of the Book  The book is divided into chapters and sections that match the topics of the course. Each section may contain:   Definitions of important concepts.  Theorems that summarize key results.  Examples to illustrate ideas and methods.  Remarks and alerts that highlight common pitfalls or important insights.  Exercises for you to practice and check understanding.   How to Approach Each Section  Here are some suggestions for making the most of each section:   Before class: Skim the definitions, theorems, and examples. Preview the exercises.  During class: Focus on interactive examples and problem-solving activities with your peers and instructor.  After class: Revisit the examples, complete the exercises, and check solutions or hints when provided.   Exercises and Practice  Exercises are a central part of learning calculus. You will find:   Conceptual checks to test your understanding of definitions and theorems.  Computational practice to build fluency with calculations and algebraic techniques.  Applications that connect calculus to real-world situations.   Some exercises will resemble questions on WeBWorK, quizzes, or exams, while others are meant for practice and exploration.  Technology and Tools  This book makes use of graphs, figures, and sometimes interactive elements (such as Desmos activities). A scientific calculator or graphing tool may be helpful, especially when you are first learning new concepts. That said, calculators should not replace understanding. The primary goal is to develop conceptual insight and the ability to carry out computations by hand. Be aware that calculator use may be restricted or not allowed at all on quizzes and exams, so practicing without a calculator an important part of your preparation.  Connections to Course Materials  This book works alongside other course resources:   D2L for announcements, grades, and course structure.  WeBWorK for online homework practice.  Recitations and weekly reviews for collaborative practice.  Quizzes and exams for formal assessment.   Study Strategies  Some tips for success:   Practice actively : work through examples, don’t just read them.  Collaborate with classmates and discuss your reasoning.  Always show your work and leave answers in exact form when possible.  Interpret results and think about what they mean in context.   Accessibility and Flexibility  This book has been designed with accessibility in mind. Figures include alt text, and the content can be navigated easily.  Final Encouragement  Remember: this book is a tool, not just a reference. Stay engaged, practice often, and combine it with the support of your instructors, TAs, and the Math Learning Center. With steady effort, you will succeed in calculus.  "
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
  "body": " Limits from Graphs and Notation    Understand the intuitive definition of a limit and how to express it using mathematical notation.  Determine limits from tables of values and from the graph of a function.  Recognize when a limit exists, and identify cases where the limit does not exist.  Interpret and compute one-sided limits, and explain how they relate to the existence of two-sided limits.  Understand the meaning of infinite limits and how they relate to vertical asymptotes.  Locate vertical asymptotes and describe a function’s behavior on both sides of each asymptote.     Definition of Limits  The concept of a limit is one of the cornerstones of calculus. Limits allow us to describe precisely what happens to a function’s values as the input approaches a particular number—whether or not the function is even defined at that point. They provide the language for defining continuity, derivatives, and integrals, and they help us capture “approaching” behavior that can’t be expressed by direct substitution alone. Before moving on to more formal ideas, we start with an intuitive definition of a limit.   Limit (intuitive)   Consider a function and numbers , . Then the limit of equals as approaches , in symbols , whenever can be forced arbitrarily close to by making sufficiently close to (but not equal to) . If we cannot make as close to a single value as we would like as approaches , then we say that does not have a limit as approaches .    That is, approximates to within any desired error tolerance, for all values of within some small distance from (but ). One more way to say it: if we make a table of for any sample values of getting closer and closer to (such as , , etc.), then the values of will get as close as we like to (though they might never quite reach ).  Graphically:   Reading a limit from a graph: .        Evaluating Limits  Let's make sure the definition makes sense. Here is a nice first problem to attempt.   Our First Limit   Consider the function   Using a calculator, evaluate the function at the indicated -values and fill in the corresponding entries in the table.    Based on the intuitive limit definition guess the limit value  View the graph of in Desmos . Use words to explain to another student how the table relates to the graph and how the limit can be determined from the graph.       Check Your Answers:         As approaches from either the left or the right, the output values get closer and closer to . Although is undefined (there is a hole in the graph), the limit still exists and equals .   Step by Step Video Solution:        Some limits are easy because we can plug in to get the limiting value , in which case we say is continuous at . Graphically, as in the above figure , this means the curve has no jump or hole at .   A Nice Continuous Example   Evaluate .    Full Written Solution:  Since our function is continuous around (we can draw the parabola without lifting our pencil), we can simply plug into to get the answer .  More Rigorous Solution:  Algebraically, if is close enough to , say for some small (close to ), then which is forced as close as we like to if is small enough to 0 (either positive or negative).    We have seen a few problems where a limit exists, but in fact, as the 2004 movie Mean Girls teaches us, sometimes    The limit does not exist GIF      One way this can occur is if does not approach a single limiting value as approaches . In such cases, we declare that the limit does not exist , and the symbol has no meaning. Now let's see such an example.   When a limit does not exist   Consider the sign function , defined by   Which when graphed looks like:    The sign function .       Determine the limit     Near , the function cannot be forced close to any single output value. That is, , since no matter how close gets to , there are some (namely negative) for which is far from ; and similarly is not , nor , nor any other value. In such cases, it is most appropriate to simply say does not exist.     An important feature of is that it does not depend on , even if is undefined: the limit only notices values of for . As a quick mini example, define for , and , having the graph:   The function for with .      Then , since if is close enough to (but unequal to) , then is arbitrarily close to (in fact ). Again, , and is not continuous at .     One-sided Limits  Sometimes, the behavior of a function as you approach a point depends on which direction you come from. For example, a graph might approach one value when moving in from the left, but a completely different value when coming in from the right like in Example .  And so, let's define another type of limit:   One-Sided Limits    One-sided limits (from the right or left) consider only values of on one side of . The limit of equals as approaches from the right, denoted , whenever can be made arbitrarily close to by taking sufficiently close to (but greater than) . The limit from the left, denoted , is defined similarly, except with  less than .     If we have the ordinary limit , then the left and right limits must both have the same value . In the Example above, we have .  However in Example we have, and , even though does not exist.   In fact, we can make our first Theorem from this idea    For a function and real number , the (two-sided) limit exists if and only if both one-sided limits exist and are equal. Precisely,   if and only if     A full proof of this theorem requires the formal – definition of a limit and is beyond the scope of this course. You will encounter this level of rigor in MTH 320, where you will learn how to construct proofs of results like this one from first principles.    Finally, let's put it all together with an example before we move on to another idea.   Evaluating One-Sided Limits   Consider the function given in the graph below:    Graph of a piecewise-defined function with a mix of curves, line segments, open circles, and filled points.   A graph on a coordinate grid showing a piecewise function. On the far left, a smooth curve rises to a maximum near x equals negative four and then decreases. At x equals negative three, the left-hand piece ends at an open circle at height two. At the same x-value, there is a filled point at height one, which begins a straight line segment sloping downward to the right. This line segment continues to an open circle at x equals negative one and height negative one. At x equals negative one, there is also a filled point at height one. From the open circle at negative one, a straight line segment slopes upward to a filled point at x equals one and height two. To the right of x equals one, the graph continues as a smooth increasing curve starting at that filled point.     Use the graph to evaluate the following limits, if they exist. If a limit does not exist, explain why.          As approaches from the left, the graph of approaches the height of . Thus, .           As approaches , the left-hand limit approaches (from the curve) while the right-hand limit approaches (from the line segment). Since the one-sided limits are not equal, the two-sided limit does not exist .           As approaches , the left-hand limit approaches (from the line segment). From the right, the limit also approaches the height of (along the other line segment). Therefore, since the left-hand and right-hand limits are equal, the two-sided limit exists and equals . So            As approaches from the right, the graph of approaches the height of . Thus, .       Infinite Limits  Up to this point, most of the limits we’ve encountered have approached a finite number. However, some functions behave very differently: as you get closer to certain -values, the function’s values grow without bound—either shooting up toward positive infinity or diving down toward negative infinity. In these cases, the function doesn’t have a finite limit, but the way it “blows up” is still predictable.   Infinite Limits and Vertical Asymptotes   We define infinite limits as follows: means that can be made larger than any real number (for example, ) by taking sufficiently close to (but not equal to) .  Similarly means that can be made smaller than any real number (for example, ) by taking sufficiently close to (but not equal to) .  Such behavior signals a vertical asymptote at .     The symbol (and likewise ) has no meaning by itself; it is simply a way of saying that can be made as large as desired.     Consider the function .  Which when graphed looks like:   The graph of .      Answer the following questions.   Using the graph of evaluate and explain your reasoning.  Try now without the graph (using only the equation of ) to evaluate and explain your reasoning.       Looking at the graph , we can notice two key features near :   The graph is in two pieces — one in quadrant II (for ) and one in quadrant I (for ).  Both pieces shoot straight up as they get close to .   This means the function grows beyond any large number we can choose when is close enough to . And so we know     As gets very close to , gets very small — like , , , and so on. Dividing by a very small positive number gives a very large positive number (for example, , , ). In general, we can shorthand this fact as .        True or False: .     False. The two one-sided limits behave differently: but . Because the left and right limits are not equal, the two-sided limit does not exist.    Note: Be careful to read problems in this class carefully! Here is problem that is quite similar looking but has a different result.    True or False: has a vertical asymptote at .     True. As approaches from the right, , and as approaches from the left, . This unbounded behavior around means the line is a vertical asymptote.      Locating Vertical Asymptotes  A vertical asymptote occurs at a value of where a function grows without bound (positively or negatively) as approaches that value. This often happens when the function’s formula has a denominator that becomes zero while the numerator stays nonzero, making the function’s value extremely large in magnitude near that point.   How to Locate Vertical Asymptotes  To locate possible vertical asymptotes, we look for values of that make the denominator zero but do not also make the numerator zero. Once we have these candidates, we check the one-sided limits to determine whether the function increases toward or decreases toward on each side.   Now let's see it in action with an example    Consider the function .   Locate the vertical asymptotes for .  For each vertical asymptote, describe the behavior of as approaches from both the left and the right.      Check Your Answers:    The vertical asymptotes are at and .   Here is the function's behavior around each asymptote:     Step by Step Video Solution:        And lastly, a true\/false problem on the same subject    True or False: The function has a vertical asymptote at .    False. Factoring numerator and denominator we get Notice that if we try to naively plug in we get 0 in both the numerator and denominator. From Remark we should suspect that this will not yield a vertical asymptote.  To verify we can plug in numbers close to on either side to see what is happening to .   From this we suspect . And in fact if we simplify and then plug in into the simplified function we get . We will learn in the next section that this will turn out to be a good strategy for evaluating limits. And so, does not yield a vertical asymptote.      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Limits from Graphs and Notation      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning     True or False: If , then .    False. A limit describes nearby behavior; the function value at the point can differ (or be undefined).      True or False: If and , then .    True. Equality of both one-sided limits guarantees the two-sided limit exists and has that value.      True or False: If , then is undefined.    False. The limit concerns values near ; may be anything (defined or not) without affecting the infinite limit.      True or False: If does not exist, then both and do not exist.    False. One-sided limits may exist but differ; that difference causes the two-sided limit to fail.      True or False: If is a vertical asymptote, then at least one of or is infinite.    True. A vertical asymptote is characterized by unbounded behavior from one or both sides.      True or False: If the graph decreases without bound as , then .    True. “Decreases without bound” means the values become arbitrarily negative.      True or False: .    True. Values grow beyond any bound from either side since for .      True or False: If , then is a vertical asymptote.    True.  ; the numerator is nonzero at , so is a VA.      True or False: If a rational function’s denominator is zero at , then the function must have a vertical asymptote at .    False. A common factor in numerator and denominator could cancel instead like in Problem .      "
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
  "body": " An important feature of is that it does not depend on , even if is undefined: the limit only notices values of for . As a quick mini example, define for , and , having the graph:   The function for with .      Then , since if is close enough to (but unequal to) , then is arbitrarily close to (in fact ). Again, , and is not continuous at .  "
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
  "id": "ex-one-sided-limits",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-one-sided-limits",
  "type": "Example",
  "number": "1.1.13",
  "title": "Evaluating One-Sided Limits.",
  "body": " Evaluating One-Sided Limits   Consider the function given in the graph below:    Graph of a piecewise-defined function with a mix of curves, line segments, open circles, and filled points.   A graph on a coordinate grid showing a piecewise function. On the far left, a smooth curve rises to a maximum near x equals negative four and then decreases. At x equals negative three, the left-hand piece ends at an open circle at height two. At the same x-value, there is a filled point at height one, which begins a straight line segment sloping downward to the right. This line segment continues to an open circle at x equals negative one and height negative one. At x equals negative one, there is also a filled point at height one. From the open circle at negative one, a straight line segment slopes upward to a filled point at x equals one and height two. To the right of x equals one, the graph continues as a smooth increasing curve starting at that filled point.     Use the graph to evaluate the following limits, if they exist. If a limit does not exist, explain why.          As approaches from the left, the graph of approaches the height of . Thus, .           As approaches , the left-hand limit approaches (from the curve) while the right-hand limit approaches (from the line segment). Since the one-sided limits are not equal, the two-sided limit does not exist .           As approaches , the left-hand limit approaches (from the line segment). From the right, the limit also approaches the height of (along the other line segment). Therefore, since the left-hand and right-hand limits are equal, the two-sided limit exists and equals . So            As approaches from the right, the graph of approaches the height of . Thus, .    "
},
{
  "id": "def-infinite-limits",
  "level": "2",
  "url": "sec-graphical-limits.html#def-infinite-limits",
  "type": "Definition",
  "number": "1.1.15",
  "title": "Infinite Limits and Vertical Asymptotes.",
  "body": " Infinite Limits and Vertical Asymptotes   We define infinite limits as follows: means that can be made larger than any real number (for example, ) by taking sufficiently close to (but not equal to) .  Similarly means that can be made smaller than any real number (for example, ) by taking sufficiently close to (but not equal to) .  Such behavior signals a vertical asymptote at .   "
},
{
  "id": "rmk-infinity-meaning",
  "level": "2",
  "url": "sec-graphical-limits.html#rmk-infinity-meaning",
  "type": "Remark",
  "number": "1.1.16",
  "title": "",
  "body": " The symbol (and likewise ) has no meaning by itself; it is simply a way of saying that can be made as large as desired.  "
},
{
  "id": "ex-inf-lim",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-inf-lim",
  "type": "Example",
  "number": "1.1.17",
  "title": "",
  "body": "  Consider the function .  Which when graphed looks like:   The graph of .      Answer the following questions.   Using the graph of evaluate and explain your reasoning.  Try now without the graph (using only the equation of ) to evaluate and explain your reasoning.       Looking at the graph , we can notice two key features near :   The graph is in two pieces — one in quadrant II (for ) and one in quadrant I (for ).  Both pieces shoot straight up as they get close to .   This means the function grows beyond any large number we can choose when is close enough to . And so we know     As gets very close to , gets very small — like , , , and so on. Dividing by a very small positive number gives a very large positive number (for example, , , ). In general, we can shorthand this fact as .     "
},
{
  "id": "prob-limit-inf-1overx",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-limit-inf-1overx",
  "type": "Problem",
  "number": "1.1.19",
  "title": "",
  "body": "  True or False: .     False. The two one-sided limits behave differently: but . Because the left and right limits are not equal, the two-sided limit does not exist.   "
},
{
  "id": "prob-VA-1overx",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-VA-1overx",
  "type": "Problem",
  "number": "1.1.20",
  "title": "",
  "body": "  True or False: has a vertical asymptote at .     True. As approaches from the right, , and as approaches from the left, . This unbounded behavior around means the line is a vertical asymptote.   "
},
{
  "id": "strat-locating-va",
  "level": "2",
  "url": "sec-graphical-limits.html#strat-locating-va",
  "type": "Strategy",
  "number": "1.1.21",
  "title": "How to Locate Vertical Asymptotes.",
  "body": " How to Locate Vertical Asymptotes  To locate possible vertical asymptotes, we look for values of that make the denominator zero but do not also make the numerator zero. Once we have these candidates, we check the one-sided limits to determine whether the function increases toward or decreases toward on each side.  "
},
{
  "id": "ex-vertical-asymptotes-signs",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-vertical-asymptotes-signs",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": "  Consider the function .   Locate the vertical asymptotes for .  For each vertical asymptote, describe the behavior of as approaches from both the left and the right.      Check Your Answers:    The vertical asymptotes are at and .   Here is the function's behavior around each asymptote:     Step by Step Video Solution:       "
},
{
  "id": "prob-hole-vs-asymptote",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-hole-vs-asymptote",
  "type": "Problem",
  "number": "1.1.23",
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
  "body": " Limits at Infinity: Horizontal Asymptotes    Interpret limits as and graphically as long-term behavior of a function.  Identify horizontal asymptotes using limits at infinity.  Evaluate limits at infinity using dominant term analysis for rational and algebraic functions.  Apply the Squeeze Theorem to evaluate limits at infinity involving bounded functions.  Explain the meaning of a limit at infinity in an applied context.    To understand the behavior of a graph far to the left or far to the right on the -axis, we introduce limits in which becomes arbitrarily large in the positive or negative direction. These limits describe how a function behaves near the ends of its graph.    Let be a function and let be a real number.     means that can be made arbitrarily close to by taking sufficiently large.     means that can be made arbitrarily close to by taking sufficiently negative.      Graphically, if , then the graph of approaches the horizontal line toward the right. This line is called a horizontal asymptote . A similar interpretation applies toward the left when .   Visualizing Limits at Infinity  Limits at infinity are often easiest to understand by looking at graphs. While algebra tells us what happens analytically, graphs help us see how the function behaves for very large values of .   A function approaching the horizontal asymptote as .    Even if the graph crosses the horizontal asymptote many times, the key idea is that the function values remain close to once is sufficiently large.   A function that increases without bound and does not approach a horizontal asymptote.    When or , the graph does not level off, and no horizontal asymptote exists on that end.    Basic Limits at Infinity  The most fundamental limits at infinity come from power functions. If , then   These limits explain why higher powers of dominate lower powers, constants, and reciprocal terms as .    Dominant Terms and Rational Functions  For functions made from sums and quotients of powers of , limits at infinity are determined by the terms with the highest powers. These are called the dominant terms .    Determine whether has a horizontal asymptote.    The dominant term in the numerator is , and the dominant term in the denominator is . For large ,   Since , the graph approaches the horizontal asymptote on both ends.      Find the horizontal asymptote of .    The dominant terms are and , so   The graph approaches the horizontal line on both ends.    This technique can also be extended to other functions that involve power of , such as those with roots.    Determine the behavior of   as , and decide whether a horizontal asymptote exists.    First rewrite all terms using powers of . In the denominator,   The dominant term in the numerator is , and the dominant term in the denominator is . For large values of , the function behaves like   Simplifying,   Since , we conclude that   Therefore, this function does not have a horizontal asymptote. Instead, the approximation shows that the right end of the graph grows roughly like a line with slope .  The function is not defined for (because of the square roots), so there is no left-end behavior to consider.      Squeeze Theorem at Infinity  The Squeeze Theorem can also be applied to limits at infinity when a function is trapped between two simpler functions.    If for all sufficiently large and   then .      Evaluate .    Since , dividing by gives   Both bounds approach as . By the Squeeze Theorem,       An Application of Limits at Infinity  Limits at infinity are useful whenever a quantity approaches a stable long-term value. In these situations, a horizontal asymptote represents an equilibrium.    The population of a species of fish in a lake years after conservation measures are introduced is modeled by   Evaluate and interpret .    To evaluate the limit, we compare dominant terms in the numerator and denominator.   This means that as time passes, the population approaches fish.  In context, the value represents the long-term sustainable population of the lake. The population increases over time but does not exceed this level, which corresponds to the horizontal asymptote .      The concentration of a medication in a patient’s bloodstream hours after administration is modeled by   Evaluate and interpret .    To evaluate the limit, we compare the dominant terms in the numerator and denominator.  The dominant term in the numerator is , while the dominant term in the denominator is . For large values of ,   Since , we conclude that   This means the concentration approaches over time. In context, this indicates that the medication is gradually eliminated from the bloodstream, and no medication remains in the long term.      Limits at Infinity Beyond Algebraic Functions  Not all limits at infinity can be evaluated using dominant term analysis or algebraic simplification. Here are a few other basic examples of limits at infinity that you are expected to remember using knowlege from previous algebra \/ trigonometry classes. These can largely be gleaned from the graphs of these functions.   Limits of Other Well Known Functions     Exponential functions:     Graph of y equals e to the x showing a horizontal asymptote at y equals 0.       Logarithmic functions:     Graph of y equals natural log of x showing a vertical asymptote at x equals 0.       Trigonometric functions:     Graph of y equals arctangent of x with horizontal asymptotes at y equals pi over 2 and negative pi over 2.       Using the above limits, we can evaluate limits at infinity for more complicated functions that involve these types of terms.    Find the horizontal asymptote(s) of .    As we know that , so therefore . Since the denominator grows without bound, and the numerator is a constant, the function approaches . Thus, .  As , we know that , so therefore . Since the denominator approaches a constant value, and the numerator is a constant, the function approaches . Thus, .     There are still many functions whose limits at infinity cannot yet be evaluated with the techniques in this section. For example, consider .  Although both the numerator and denominator grow without bound as , the dominant-term ideas developed here do not apply. Evaluating limits of this type requires additional tools, such as L’Hôpital’s Rule, which will be introduced later in the course.  For now, it is enough to recognize when a limit can be evaluated using algebraic methods and when it cannot.     Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Limits at Infinity: Horizontal Asymptotes      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning     If , then for all sufficiently large .     False. The statement means that can be made arbitrarily close to by taking sufficiently large. It does not require to equal for any value of .  For example, satisfies , but for any finite .      If , then .     True. This follows from the Limit Laws for limits at infinity: adding a constant shifts the limiting value by the same constant.      If for a rational function , then .     True. If the denominator has higher degree, then the denominator grows faster in magnitude than the numerator as , so the quotient approaches .  One way to justify this is to divide numerator and denominator by the highest power of in the denominator. Every term in the numerator becomes a power of (or higher), which goes to as , while the denominator approaches a nonzero constant.      If , then .     False. Limits as and describe the behavior of a function on different ends of the graph and are independent of one another.  For example, the function satisfies and , which are not equal.      For , the function has a horizontal asymptote as .     False. Rewrite the denominator using powers: and . The dominant term in the numerator is and in the denominator is .  Therefore, for large ,   so . Since the function does not approach a finite number, it has no horizontal asymptote as .      If a function satisfies for all , then .     True. Since and , the Squeeze Theorem implies that .       does not exist because oscillates.     False. Although oscillates, it is bounded: for all . For , dividing by gives   Both bounds approach as , so by the Squeeze Theorem, .      If , then has no horizontal asymptote to the right.     True. A horizontal asymptote to the right would require for some finite real number . If instead the function grows without bound so that , then it cannot approach any horizontal line .       .     False. As , we have , so .      "
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
  "id": "thm-other-inf-limits",
  "level": "2",
  "url": "sec-limit-inf.html#thm-other-inf-limits",
  "type": "Theorem",
  "number": "1.3.11",
  "title": "Limits of Other Well Known Functions.",
  "body": " Limits of Other Well Known Functions     Exponential functions:     Graph of y equals e to the x showing a horizontal asymptote at y equals 0.       Logarithmic functions:     Graph of y equals natural log of x showing a vertical asymptote at x equals 0.       Trigonometric functions:     Graph of y equals arctangent of x with horizontal asymptotes at y equals pi over 2 and negative pi over 2.      "
},
{
  "id": "ex-non-algebraic-infinity",
  "level": "2",
  "url": "sec-limit-inf.html#ex-non-algebraic-infinity",
  "type": "Example",
  "number": "1.3.12",
  "title": "",
  "body": "  Find the horizontal asymptote(s) of .    As we know that , so therefore . Since the denominator grows without bound, and the numerator is a constant, the function approaches . Thus, .  As , we know that , so therefore . Since the denominator approaches a constant value, and the numerator is a constant, the function approaches . Thus, .   "
},
{
  "id": "rem-limits-future-tools",
  "level": "2",
  "url": "sec-limit-inf.html#rem-limits-future-tools",
  "type": "Remark",
  "number": "1.3.13",
  "title": "",
  "body": " There are still many functions whose limits at infinity cannot yet be evaluated with the techniques in this section. For example, consider .  Although both the numerator and denominator grow without bound as , the dominant-term ideas developed here do not apply. Evaluating limits of this type requires additional tools, such as L’Hôpital’s Rule, which will be introduced later in the course.  For now, it is enough to recognize when a limit can be evaluated using algebraic methods and when it cannot.  "
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
  "id": "exercises-limits-infinity-tf-2-11",
  "level": "2",
  "url": "sec-limit-inf.html#exercises-limits-infinity-tf-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   .     False. As , we have , so .   "
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
  "id": "ssec-types-discontinuities-2",
  "level": "2",
  "url": "sec-limit-continuity.html#ssec-types-discontinuities-2",
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
  "id": "ssec-jump-discontinuity-2",
  "level": "2",
  "url": "sec-limit-continuity.html#ssec-jump-discontinuity-2",
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
  "id": "ssec-infinite-discontinuity-2",
  "level": "2",
  "url": "sec-limit-continuity.html#ssec-infinite-discontinuity-2",
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
  "id": "ssec-essential-discontinuity-2",
  "level": "2",
  "url": "sec-limit-continuity.html#ssec-essential-discontinuity-2",
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
  "id": "ssec-piecewise-continuity-4",
  "level": "2",
  "url": "sec-limit-continuity.html#ssec-piecewise-continuity-4",
  "type": "Example",
  "number": "1.4.17",
  "title": "",
  "body": "  Suppose a weight is winched from the ground at a constant speed for 8 seconds, is dropped, and lands 2 seconds later.  Then the height in feet at time seconds is given by   How fast should the winch haul upward?    The function is defined in two pieces. The first piece, , describes the weight being lifted upward from the ground at a constant speed feet per second, for times .  The second piece, , describes what happens once the weight is released at . Recall that a dropped object falls feet in seconds. Since the fall begins at , we measure the time of fall as . Thus, after seconds of falling, the weight will have fallen feet. The weight was released from a height of 64 feet, so its position after seconds is given by .  To find the correct speed of the winch, we need the two pieces of the function to “meet up” at . That means the height from the lifting phase at must equal the height from the falling phase at . Using the lifting phase we get . Using the falling phase we get . Setting these equal gives   Finally, let us check continuity explicitly at . From the left-hand side, From the right-hand side, Since both one-sided limits equal 64, the two-sided limit exists and equals 64. Moreover, this matches the value of the function at that point, . Therefore the function is continuous at .   "
},
{
  "id": "ssec-domain-continuity-3",
  "level": "2",
  "url": "sec-limit-continuity.html#ssec-domain-continuity-3",
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
  "body": " Additional Worked-Out Problems   Limits from Graphs and Notation   Graphing a Function to Find a Limit   Consider the function .  Sketch the graph of and use it to find , if it exists.    To graph , we first graph the pieces of the function on their respective domains. For , we graph , which is a parabola opening upwards. At , we have a single point . For , we graph , which is a line with a negative slope. Together, these pieces form the graph of .    Graph of a piecewise-defined function as described in the example.   A graph on a coordinate grid showing a piecewise function. For x less than 2, the graph is a smooth upward-opening curve with a minimum at the origin. As x approaches 2 from the left, the curve rises toward an open circle at x equals 2 and height 4. At x equals 2, there is a filled point at height 3, indicating the function value. Also at x equals 2, there is an open circle at height 2 that begins a straight line segment. For x greater than 2, the graph is a straight line sloping downward from the open circle at x equals 2 and height 2, passing through the point x equals 3 and height 1, and continuing downward toward x equals 4. The differing open and closed points at x equals 2 show that the left-hand limit, right-hand limit, and the function value at x equals 2 are not all the same.     Now, we analyze the behavior of as approaches 2 from both sides. As approaches 2 from the left ( ), approaches . As approaches 2 from the right ( ), approaches .  Since the left-hand limit ( ) and the right-hand limit ( ) are not equal, the overall limit does not exist.      Consider the function .  Find all the vertical asymptotes of .    To find the vertical asymptotes of the function , we first factor the denominator: . The vertical asymptotes occur where the denominator is zero, provided the numerator is not also zero at those points. Setting the denominator equal to zero gives us: , which has solutions and .  Next, we check the numerator at these points: .  At , the numerator is zero, indicating there is no vertical asymptote there (in fact it will be called a removable discontinuity once we learn about this in our continuity section). At , the numerator is non-zero ( ), confirming that there is a vertical asymptote at this point. Therefore, the only vertical asymptote of is at .      Limit Laws and Algebraic Techniques    Evaluate the limit:     Begin by simplifying the expression in the numerator. Expand :   Substituting this back into the limit gives   Factor from the numerator and simplify:   Now evaluate the limit by direct substitution:   Therefore, the value of the limit is .      Evaluate the limit:     Direct substitution gives a meaningless expression , so we begin by simplifying the numerator.  Combine the fractions in the numerator using a common denominator:   Simplify the numerator:   Substitute this back into the original expression:   Notice that , so we can factor and cancel:   Now we can safely evaluate the limit by substitution:   Therefore,       Suppose is a function such that for all ,   Use the Squeeze Theorem to evaluate , or explain why the Squeeze Theorem does not apply.    Compute the limits of the bounding functions as . Since and polynomials are continuous, we can substitute :   Both bounding functions approach the same value, . Therefore, by the Squeeze Theorem,       Limits at Infinity: Horizontal Asymptotes    Evaluate the limit:     To evaluate this limit, we compare the dominant powers of in the numerator and denominator. The largest power of in the numerator is , and the largest power of in the denominator is . Therefore   As , . Thus, the limit is       Evaluate the limits     To evaluate limits at infinity for rational functions, we compare the dominant (highest–power) terms in the numerator and denominator. In this case, the dominant term in the numerator is , and the dominant term in the denominator is .  For large values of , the lower–degree terms become negligible, so the function behaves like   Since both dominant terms involve , which is positive for both positive and negative values of , this approximation applies as and as .       Let .  (a) Evaluate . (b) Find the equation of the horizontal asymptote associated with this limit.    (a) To evaluate , we analyze the dominant terms in the numerator and denominator. The dominant term in the numerator is , and the dominant term in the denominator is . Therefore, for large values of , the function behaves like   Thus,   (b) Since , the curve approaches height as becomes large. Therefore the horizontal asymptote (for ) is .      Evaluate the limit:     Direct substitution leads to a confusing expression of the form . To resolve this and apply our technique, let's first multiply by the conjugate of the expression.   The dominant term in the numerator is , and the dominant term in the denominator is also . Therefore, for large values of , the function behaves like   Thus,       Continuity    For each function defined below, determine whether it is continuous or discontinuous . Briefly justify your choice.  (a) Let be the amount of water (in gallons) remaining in a reservoir after hours of steady drainage.  (b) Let be the floor number that an elevator is on at time seconds.  (c) Let be the number of pages read in a book after days.    (a) Continuous . The function is continuous because the amount of water in the reservoir changes smoothly over time as it drains steadily. There are no sudden jumps or breaks in the amount of water; it decreases gradually.  (b) Discontinuous . The function is discontinuous because the elevator moves between floors in jumps. The floor number changes suddenly when the elevator passes from one floor to the next.  (c) Discontinuous . The function is discontinuous because the number of pages read is a step function. The number of pages read increases in whole numbers, resulting in jumps rather than a smooth change     Assessing and Fixing a Removable Discontinuity   Let     (a) Determine whether is continuous at . Justify your answer.  (b) If is not continuous at , explain how to redefine so that becomes continuous at .    (a) To evaluate the limit as , we first simplify the expression for . Factor the denominator:   For , the function simplifies to   Therefore,   However, the value of the function at is Since the limit exists but is not equal to the function value, is not continuous at . This is a removable discontinuity .  (b) To remove the discontinuity, we redefine to equal the limit:   With this definition, becomes continuous at . The full definition of is now       The graph of a function is shown in the figure below.   Graph of a piecewise-defined function illustrating several types of discontinuities,   A graph of a function on a coordinate grid. On the left, a smooth increasing curve approaches the point (0, 2) but has an open circle there. At x = 0, the function instead has a filled point at (0, -1), indicating a jump. From x = 0 to x = 1, a straight line rises from (0, -1) to an open circle at (1, 1). From x = 1 to x = 3, a straight line descends from the open circle at (1, 1) to a filled point at (3, -1). A dashed vertical line at x = 3 indicates a vertical asymptote. For x greater than 3, the graph shows a decreasing curve that approaches the asymptote from the right and decreases toward zero as x increases.    For each value of listed below, determine whether is continuous or discontinuous at that point. If is discontinuous, classify the type of discontinuity.     Classify the behavior of at .    From the graph, as , the function approaches the open circle at height , while as , the function approaches the value . Since the one-sided limits are not equal, the limit does not exist.  Therefore, has a jump discontinuity at .      Classify the behavior of at .    As from both sides, the graph approaches the same height, indicated by an open circle at . However, there is no filled point at , so is not defined.  Since the limit exists but is undefined, has a removable discontinuity at .      Classify the behavior of at .    The graph shows a dashed vertical line at , and the function values increase without bound as . This indicates that the function grows arbitrarily large near .  Therefore, has an infinite discontinuity (a vertical asymptote) at .      On which intervals shown in the graph is continuous?    The function is continuous on any interval that does not include a discontinuity. From the graph, is continuous on        Intermediate Value Theorem    A function is continuous on , with and . What does the Intermediate Value Theorem guarantee about the equation ?    Since is continuous on the interval and and , the Intermediate Value Theorem states that for any value between and , there exists at least one in such that . Since is between and , there exists at least one in such that .      Let . Use the Intermediate Value Theorem to show that has at least one solution for .    First, we need to show that is continuous for . Since and are both continuous for , their sum is also continuous for , and thus for .  Next, we evaluate and :   Since and , by the Intermediate Value Theorem, there exists at least one in such that . Therefore, the equation has at least one solution for .      The temperature (in degrees Celsius) at a location varies continuously over time. If and , explain why the temperature must have been exactly at some time between 8:00 am and 2:00 pm.    Since temperature varies continuously over time, the function is continuous on the interval from 8:00 am to 2:00 pm. Given that and , by the Intermediate Value Theorem, for any temperature value between and , there exists at least one time in the interval from 8:00 am to 2:00 pm such that . Since is between and , there must be at least one time in that interval when the temperature was exactly .     "
},
{
  "id": "ex-limit-graph-02",
  "level": "2",
  "url": "sec-limit-ww.html#ex-limit-graph-02",
  "type": "Example",
  "number": "1.6.1",
  "title": "Graphing a Function to Find a Limit.",
  "body": " Graphing a Function to Find a Limit   Consider the function .  Sketch the graph of and use it to find , if it exists.    To graph , we first graph the pieces of the function on their respective domains. For , we graph , which is a parabola opening upwards. At , we have a single point . For , we graph , which is a line with a negative slope. Together, these pieces form the graph of .    Graph of a piecewise-defined function as described in the example.   A graph on a coordinate grid showing a piecewise function. For x less than 2, the graph is a smooth upward-opening curve with a minimum at the origin. As x approaches 2 from the left, the curve rises toward an open circle at x equals 2 and height 4. At x equals 2, there is a filled point at height 3, indicating the function value. Also at x equals 2, there is an open circle at height 2 that begins a straight line segment. For x greater than 2, the graph is a straight line sloping downward from the open circle at x equals 2 and height 2, passing through the point x equals 3 and height 1, and continuing downward toward x equals 4. The differing open and closed points at x equals 2 show that the left-hand limit, right-hand limit, and the function value at x equals 2 are not all the same.     Now, we analyze the behavior of as approaches 2 from both sides. As approaches 2 from the left ( ), approaches . As approaches 2 from the right ( ), approaches .  Since the left-hand limit ( ) and the right-hand limit ( ) are not equal, the overall limit does not exist.   "
},
{
  "id": "ex-vert-asymptotes-rational-01",
  "level": "2",
  "url": "sec-limit-ww.html#ex-vert-asymptotes-rational-01",
  "type": "Example",
  "number": "1.6.3",
  "title": "",
  "body": "  Consider the function .  Find all the vertical asymptotes of .    To find the vertical asymptotes of the function , we first factor the denominator: . The vertical asymptotes occur where the denominator is zero, provided the numerator is not also zero at those points. Setting the denominator equal to zero gives us: , which has solutions and .  Next, we check the numerator at these points: .  At , the numerator is zero, indicating there is no vertical asymptote there (in fact it will be called a removable discontinuity once we learn about this in our continuity section). At , the numerator is non-zero ( ), confirming that there is a vertical asymptote at this point. Therefore, the only vertical asymptote of is at .   "
},
{
  "id": "ex-limit-rational-a-zero-01",
  "level": "2",
  "url": "sec-limit-ww.html#ex-limit-rational-a-zero-01",
  "type": "Example",
  "number": "1.6.4",
  "title": "",
  "body": "  Evaluate the limit:     Begin by simplifying the expression in the numerator. Expand :   Substituting this back into the limit gives   Factor from the numerator and simplify:   Now evaluate the limit by direct substitution:   Therefore, the value of the limit is .   "
},
{
  "id": "ex-limit-difference-quotient-01",
  "level": "2",
  "url": "sec-limit-ww.html#ex-limit-difference-quotient-01",
  "type": "Example",
  "number": "1.6.5",
  "title": "",
  "body": "  Evaluate the limit:     Direct substitution gives a meaningless expression , so we begin by simplifying the numerator.  Combine the fractions in the numerator using a common denominator:   Simplify the numerator:   Substitute this back into the original expression:   Notice that , so we can factor and cancel:   Now we can safely evaluate the limit by substitution:   Therefore,    "
},
{
  "id": "ex-squeeze-x-2-cos-poly",
  "level": "2",
  "url": "sec-limit-ww.html#ex-squeeze-x-2-cos-poly",
  "type": "Example",
  "number": "1.6.6",
  "title": "",
  "body": "  Suppose is a function such that for all ,   Use the Squeeze Theorem to evaluate , or explain why the Squeeze Theorem does not apply.    Compute the limits of the bounding functions as . Since and polynomials are continuous, we can substitute :   Both bounding functions approach the same value, . Therefore, by the Squeeze Theorem,    "
},
{
  "id": "ex-limit-infinity-radical-rational",
  "level": "2",
  "url": "sec-limit-ww.html#ex-limit-infinity-radical-rational",
  "type": "Example",
  "number": "1.6.7",
  "title": "",
  "body": "  Evaluate the limit:     To evaluate this limit, we compare the dominant powers of in the numerator and denominator. The largest power of in the numerator is , and the largest power of in the denominator is . Therefore   As , . Thus, the limit is    "
},
{
  "id": "ex-limit-infinity-polynomial-dominant",
  "level": "2",
  "url": "sec-limit-ww.html#ex-limit-infinity-polynomial-dominant",
  "type": "Example",
  "number": "1.6.8",
  "title": "",
  "body": "  Evaluate the limits     To evaluate limits at infinity for rational functions, we compare the dominant (highest–power) terms in the numerator and denominator. In this case, the dominant term in the numerator is , and the dominant term in the denominator is .  For large values of , the lower–degree terms become negligible, so the function behaves like   Since both dominant terms involve , which is positive for both positive and negative values of , this approximation applies as and as .    "
},
{
  "id": "ex-limit-infinity-horizontal-asymptote-sqrt-x2plus1",
  "level": "2",
  "url": "sec-limit-ww.html#ex-limit-infinity-horizontal-asymptote-sqrt-x2plus1",
  "type": "Example",
  "number": "1.6.9",
  "title": "",
  "body": "  Let .  (a) Evaluate . (b) Find the equation of the horizontal asymptote associated with this limit.    (a) To evaluate , we analyze the dominant terms in the numerator and denominator. The dominant term in the numerator is , and the dominant term in the denominator is . Therefore, for large values of , the function behaves like   Thus,   (b) Since , the curve approaches height as becomes large. Therefore the horizontal asymptote (for ) is .   "
},
{
  "id": "ex-limit-infinity-sqrt-minus-x",
  "level": "2",
  "url": "sec-limit-ww.html#ex-limit-infinity-sqrt-minus-x",
  "type": "Example",
  "number": "1.6.10",
  "title": "",
  "body": "  Evaluate the limit:     Direct substitution leads to a confusing expression of the form . To resolve this and apply our technique, let's first multiply by the conjugate of the expression.   The dominant term in the numerator is , and the dominant term in the denominator is also . Therefore, for large values of , the function behaves like   Thus,    "
},
{
  "id": "ex-continuity-realworld-02",
  "level": "2",
  "url": "sec-limit-ww.html#ex-continuity-realworld-02",
  "type": "Example",
  "number": "1.6.11",
  "title": "",
  "body": "  For each function defined below, determine whether it is continuous or discontinuous . Briefly justify your choice.  (a) Let be the amount of water (in gallons) remaining in a reservoir after hours of steady drainage.  (b) Let be the floor number that an elevator is on at time seconds.  (c) Let be the number of pages read in a book after days.    (a) Continuous . The function is continuous because the amount of water in the reservoir changes smoothly over time as it drains steadily. There are no sudden jumps or breaks in the amount of water; it decreases gradually.  (b) Discontinuous . The function is discontinuous because the elevator moves between floors in jumps. The floor number changes suddenly when the elevator passes from one floor to the next.  (c) Discontinuous . The function is discontinuous because the number of pages read is a step function. The number of pages read increases in whole numbers, resulting in jumps rather than a smooth change   "
},
{
  "id": "ex-continuity-removable-02",
  "level": "2",
  "url": "sec-limit-ww.html#ex-continuity-removable-02",
  "type": "Example",
  "number": "1.6.12",
  "title": "Assessing and Fixing a Removable Discontinuity.",
  "body": " Assessing and Fixing a Removable Discontinuity   Let     (a) Determine whether is continuous at . Justify your answer.  (b) If is not continuous at , explain how to redefine so that becomes continuous at .    (a) To evaluate the limit as , we first simplify the expression for . Factor the denominator:   For , the function simplifies to   Therefore,   However, the value of the function at is Since the limit exists but is not equal to the function value, is not continuous at . This is a removable discontinuity .  (b) To remove the discontinuity, we redefine to equal the limit:   With this definition, becomes continuous at . The full definition of is now    "
},
{
  "id": "ex-classify-discontinuities-graph",
  "level": "2",
  "url": "sec-limit-ww.html#ex-classify-discontinuities-graph",
  "type": "Example",
  "number": "1.6.13",
  "title": "",
  "body": "  The graph of a function is shown in the figure below.   Graph of a piecewise-defined function illustrating several types of discontinuities,   A graph of a function on a coordinate grid. On the left, a smooth increasing curve approaches the point (0, 2) but has an open circle there. At x = 0, the function instead has a filled point at (0, -1), indicating a jump. From x = 0 to x = 1, a straight line rises from (0, -1) to an open circle at (1, 1). From x = 1 to x = 3, a straight line descends from the open circle at (1, 1) to a filled point at (3, -1). A dashed vertical line at x = 3 indicates a vertical asymptote. For x greater than 3, the graph shows a decreasing curve that approaches the asymptote from the right and decreases toward zero as x increases.    For each value of listed below, determine whether is continuous or discontinuous at that point. If is discontinuous, classify the type of discontinuity.     Classify the behavior of at .    From the graph, as , the function approaches the open circle at height , while as , the function approaches the value . Since the one-sided limits are not equal, the limit does not exist.  Therefore, has a jump discontinuity at .      Classify the behavior of at .    As from both sides, the graph approaches the same height, indicated by an open circle at . However, there is no filled point at , so is not defined.  Since the limit exists but is undefined, has a removable discontinuity at .      Classify the behavior of at .    The graph shows a dashed vertical line at , and the function values increase without bound as . This indicates that the function grows arbitrarily large near .  Therefore, has an infinite discontinuity (a vertical asymptote) at .      On which intervals shown in the graph is continuous?    The function is continuous on any interval that does not include a discontinuity. From the graph, is continuous on     "
},
{
  "id": "ivt-04",
  "level": "2",
  "url": "sec-limit-ww.html#ivt-04",
  "type": "Example",
  "number": "1.6.15",
  "title": "",
  "body": "  A function is continuous on , with and . What does the Intermediate Value Theorem guarantee about the equation ?    Since is continuous on the interval and and , the Intermediate Value Theorem states that for any value between and , there exists at least one in such that . Since is between and , there exists at least one in such that .   "
},
{
  "id": "ivt-02",
  "level": "2",
  "url": "sec-limit-ww.html#ivt-02",
  "type": "Example",
  "number": "1.6.16",
  "title": "",
  "body": "  Let . Use the Intermediate Value Theorem to show that has at least one solution for .    First, we need to show that is continuous for . Since and are both continuous for , their sum is also continuous for , and thus for .  Next, we evaluate and :   Since and , by the Intermediate Value Theorem, there exists at least one in such that . Therefore, the equation has at least one solution for .   "
},
{
  "id": "ivt-08",
  "level": "2",
  "url": "sec-limit-ww.html#ivt-08",
  "type": "Example",
  "number": "1.6.17",
  "title": "",
  "body": "  The temperature (in degrees Celsius) at a location varies continuously over time. If and , explain why the temperature must have been exactly at some time between 8:00 am and 2:00 pm.    Since temperature varies continuously over time, the function is continuous on the interval from 8:00 am to 2:00 pm. Given that and , by the Intermediate Value Theorem, for any temperature value between and , there exists at least one time in the interval from 8:00 am to 2:00 pm such that . Since is between and , there must be at least one time in that interval when the temperature was exactly .   "
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
  "body": " Definition of the Derivative    Compute the derivative using the limit definition.  Interpret the derivative as an instantaneous rate of change and as the slope of a tangent line.  Rewrite the derivative definition using either or .  Define the derivative function and interpret it as a new function.  Recognize common situations where a derivative fails to exist (vertical tangents, corners, discontinuities).  Identify where a function is differentiable on an interval by locating vertical tangents, corners\/cusps, and discontinuities.     Definition of the Derivative  In the last section, we saw that instantaneous velocity can be obtained as a limit of average velocities over shorter and shorter time increments. Likewise, the slope of a tangent line can be obtained as a limit of secant slopes as the secant point moves closer and closer to the point of tangency.  Both ideas measure an instantaneous rate of change. For a general function , we define its instantaneous rate of change at using the following limit.   Derivative at a Point   The derivative of a function at , denoted , is defined by   provided the limit exists.    Here is the change in the output, and is the change in the input. The quotient is the average rate of change over the interval from to , and the derivative is the limit as the increment shrinks to 0.  Another common form comes from substituting (so that ):   Geometrically, if exists, then it is the slope of the tangent line to at the point . The tangent line has equation    If the limit defining exists, we say is differentiable at . If the limit does not exist, then is undefined and is not differentiable at .     Computing Derivatives from the Definition  A derivative is always a limit of a difference quotient, so direct substitution usually produces the meaningless expression . The goal is to simplify the difference quotient until the limit can be evaluated.   A Rational Example   Find for .    First let's start by writing out the difference quotient:   Now we can evaluate the limit as :   So the slope of the tangent line to at is .     A Radical Example   Find for .    We multiply by the conjugate to eliminate the radical in the numerator.      A Cube Root Example   Find for .    Here we use the difference of cubes identity .   This example is a good preview of why we will soon develop derivative rules: computing derivatives from the limit definition can become algebraically heavy.      The Derivative Function  The derivative at a point is a single number. But we can compute the derivative for many input values, producing a new function.  For example, consider from the previous example. At each value of , the function has a slope. Plotting these slopes as points creates a new graph, which we call the graph of the derivative function .     Slopes of tangent lines to at many values of , plotted as points and connected to form the graph of the derivative function.   Animated graph showing the cube root function with tangent lines at various points. For each point, the slope of the tangent line is recorded and plotted separately. As these slope values are connected, they form a new curve representing the derivative function.       Derivative Function   The derivative function of , denoted , is defined by   for all where this limit exists.     Computing a Derivative Function   Let . Find .    Step by Step:   Graphically this is what we have accomplished     The function with tangent lines drawn at several points. The slopes of these tangent lines are labeled and shown to align with the values of the derivative function .   Graph showing the quadratic function f(x)=x(x-2). At several points along the curve, tangent lines are drawn and their slopes are labeled with values such as −4, −2, 0, 2, and 4. A separate straight line representing the derivative f'(x)=2x-2 is shown, illustrating how each slope of f corresponds to a point on the derivative graph.          When the Derivative Fails to Exist  Even if a function is defined at a point, the derivative may fail to exist there. Graphically, this happens when the curve does not have a single well-defined tangent line.  Common ways differentiability can fail include:   Vertical Tangent: slopes become infinite (unbounded).  Corner: the left-hand and right-hand slopes are different.  Discontinuity: if a function is not continuous at a point, then it cannot be differentiable there.   We first consider what happens when a function has a vertical tangent. Recall that the derivative at a point represents the slope of the tangent line. Because vertical lines have undefined slope, the derivative cannot exist at any point where the tangent line is vertical.   A Vertical Tangent   Consider the function , which we analyzed previously in . Show that has a vertical tangent at .    From , the derivative of is   Trying to substitute in , the denominator yields , causing the derivative to grow without bound like we saw in our section on infinite limits . In other words, the slopes of the tangent lines become arbitrarily large in magnitude.  Graphically, this behavior appears as the tangent lines becoming steeper and steeper near , eventually approaching a vertical line. Since vertical lines have undefined slope, the derivative does not exist at .   Graph of near , showing a vertical tangent line at the origin where the slope is undefined.   Graph of the cube root function near the origin. The curve becomes very steep as it approaches zero. A vertical line is drawn at zero to represent the tangent line at that point. Because the tangent line is vertical, its slope is undefined and the derivative does not exist there.    Therefore, is not differentiable at due to the presence of a vertical tangent line.    Next we consider two other common ways differentiability can fail: corners and discontinuities. In these situations, it is helpful to introduce right-hand and left-hand derivatives, defined using one-sided limits in the same spirit as one-sided limits for functions. These allow us to determine whether the derivative exists by comparing the slopes approaching a point from the right and from the left.   Right-Hand Derivative   Let be a function and let be a point in its domain. The right-hand derivative of at is   provided this limit exists.     Left-Hand Derivative   Let be a function and let be a point in its domain. The left-hand derivative of at is   provided this limit exists.     Remember that the derivative is defined as a limit. A two-sided limit exists only when the corresponding one-sided limits both exist and agree. Therefore, is differentiable at only if both and exist and satisfy . If the left-hand and right-hand derivatives do not agree, then the derivative does not exist.    A Corner   Show that the function is not differentiable at by computing the left-hand and right-hand derivatives at that point.    We compute the one-sided derivatives at . First note that .  To evaluate the limits, we recall the definition of absolute value from . This definition tells us how behaves depending on whether is positive or negative.  The right-hand derivative is   For , we have , so   The left-hand derivative is   For , we have , so   Since , the derivative at does not exist. This corresponds graphically to a sharp corner at the origin, where the slopes approaching from the left and right are different.    The function is continuous at , yet it is not differentiable there because of a sharp corner. Next, we examine a case where the function is not even continuous. In this situation, the derivative must fail to exist.   A Discontinuity   Consider the function   Determine whether is differentiable at .    Using the definitions of and , we compute:  The left-hand derivative at is   This limit does not exist because the numerator is constant while the denominator approaches zero. The right-hand derivative is   Since the one-sided derivatives do not both exist and agree, the derivative does not exist.    In all of the situations we have examined so far, differentiability has required the function to behave continuously at the point in question. This relationship between differentiability and continuity is fundamental and can be stated precisely as a theorem.   Differentiability Implies Continuity   If is differentiable at , then is continuous at .     The contrapositive is often the useful version in practice: if is not continuous at , then is not differentiable at .   Now that we have studied the main ways a derivative can fail to exist, we will put these ideas together and identify the regions where a function is differentiable (that is, where the derivative exists).    Differentiability on an Interval   Differentiable on an Interval   Let be an interval. We say that is differentiable on  if exists for every point in .  We say that is differentiable on  if exists for all . We say that is differentiable on  if exists for all and the one-sided derivatives and exist.    Problems that ask where a function is differentiable often come in two common forms. In the first, only a graph is given, with no algebraic expression for the function.   Differentiability from a Graph   The graph below represents a function . Identify all values of where is differentiable. Give your answer in interval notation.  A function illustrating multiple ways differentiability can fail.   Graph of a piecewise function defined for x greater than negative three and less than or equal to five. The graph has a sharp corner at x equals negative one. There is a jump at x equals zero, with a filled point above and an open point at the origin. A vertical dashed line at x equals two indicates another discontinuity. Away from these points, the graph is smooth.       A function is differentiable at a point only if it is continuous there and has a well-defined tangent line. We examine each notable feature of the graph.  At , the graph has a sharp corner. The slopes approaching from the left and right are different, so the derivative does not exist at this point.  At , the graph has a jump discontinuity. Because the function is not continuous at , it cannot be differentiable there.  At , the graph has another discontinuity, indicated by the vertical dashed line. Since the function does not have a defined value that matches nearby behavior, the derivative does not exist at .  On all other intervals where the graph is defined, smooth, and continuous, the function is differentiable. Therefore, is differentiable on the intervals     In the second common type of problem, the function is given by an explicit formula, often defined piecewise, and we must use algebraic reasoning to determine where the derivative exists.   Determining Differentiability for a Piecewise Function   Let   Determine where is differentiable. Give your answer in interval notation.    On each open interval where a single formula applies, the function is differentiable: is differentiable for , is differentiable for , and is differentiable for . Therefore, the only points we need to check are the junctions and .  At , we first check continuity: for , , so . Also . Since , the function is not continuous at , and therefore it is not differentiable at .  At , we again check continuity: for , , so . For , . Since the left-hand limit equals the function value, is continuous at . To determine differentiability, we compare one-sided derivatives.  The left-hand derivative at is   For close to 0, we have , so . Also . Hence   The right-hand derivative at is   For , we have , so . Using ,   Expand the numerator. Since , we have   Therefore,   Since , the derivative exists at .  Putting everything together, is differentiable for all real numbers except at . In interval notation, is differentiable on   To help us check\/visualize here is a graph of the function   Graph of the piecewise-defined function used to determine where it is differentiable.   Graph of a piecewise function. For x less than zero, the graph is a straight line ending at a filled point above the x-axis. At x equals zero, there is an open circle at the origin indicating a jump. From zero to two, the graph increases linearly. For x greater than or equal to two, the graph follows a smooth downward-opening curve. The graph highlights points where the function changes behavior and where differentiability must be checked.        Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Definition of the Derivative      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning.      If , then .     False. We can calculate the derivative , so , not 16.      If , then the limit definition shows that .     False. The derivative of a linear function is constant. Using the limit definition gives , not .      If , then for all .     True. For the derivative exists, and . This can be verified directly from the limit definition by combining the fractions and simplifying the difference quotient.      The derivative function assigns to each input the slope of the tangent line to at that input.     True. Where the derivative exists, it equals the slope of the tangent line to the graph of at that point.      The derivative function can exist at some values of but fail to exist at others.     True. Many functions are differentiable on part of their domain but not everywhere, for example at corners, discontinuities, or vertical tangents.      If is differentiable at , then the graph of must be smooth near with no corners or jumps.     True. Differentiability requires both continuity and a well-defined tangent line.      If is continuous at , then is differentiable at .     False. A function can be continuous but not differentiable. For example, is continuous at but has a corner there, so does not exist.      If for all in an interval, then is increasing on that interval.     True. A positive derivative means tangent slopes are positive, which corresponds to increasing behavior.      If exists, then must be a finite number.     True. By definition, is the value of this limit. If the limit were infinite or did not exist, then would be undefined.      A vertical tangent line corresponds to a derivative value of zero.     False. A vertical tangent line has undefined slope. This corresponds to the derivative failing to exist (the slopes become unbounded), not to a derivative of zero.      Algebraic simplification of the difference quotient is used to eliminate the form before taking the limit.     True. Direct substitution often yields , so we simplify the difference quotient (factor, combine fractions, use conjugates, identities) to evaluate the limit.      The right-hand derivative uses only values of the function for inputs greater than .     True. The limit uses , so .      If and both exist and are equal, then exists.     True. The derivative is a two-sided limit. If the one-sided limits exist and agree, then the two-sided limit exists and equals their common value.      "
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
  "body": " A Rational Example   Find for .    First let's start by writing out the difference quotient:   Now we can evaluate the limit as :   So the slope of the tangent line to at is .   "
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
  "body": " Basic Differentiation Rules    Interpret derivative notation in both Newton form and Leibniz form .  Use basic derivative formulas to differentiate power functions and constants.  Apply the sum, constant multiple, product, and quotient rules to compute derivatives algebraically.  Interpret higher derivatives in an applied context (velocity and acceleration).    So far, we have seen how real-world rate-of-change problems and geometric tangent-line problems lead to derivatives. In this section, we focus on computing derivatives efficiently by using algebraic rules, so we do not need to return to the limit definition every time.   Notation for the Derivative  The derivative of a function can be written in several equivalent ways. In Newton notation we write . In Leibniz notation we write , which is meant to remind us of the definition of the derivative as a limit of difference quotients:   Here is a change in the input, and is the corresponding change in the output: and . The notation does not literally mean “a quotient of two tiny numbers.” It is a single symbol that represents a limit.  For example, if , then the derivative formula can be written as    To emphasize the distinction between the derivative function and the derivative at a specific point , we often write . This notation highlights that the derivative function is evaluated at . You may also encounter the notation for the derivative of , so that .     Basic Derivatives  The strategy is the same as earlier limit techniques: we establish derivatives of basic functions, then build more complicated derivatives from those. The most important basic formulas are the following.   Derivatives of Constant and Linear Functions    If is a constant function, then .  If , then .     We use the limit definition of the derivative.  First, suppose , where is a constant. By definition,   Since and , the numerator is zero.   Therefore, the derivative of a constant function is zero.  Next, suppose . Using the limit definition,   Simplifying the numerator gives   Therefore, the derivative of is equal to .     The Power Rule   Let be any real number for which is defined. If , then     We begin with a geometric intuition. For the function , increasing by a small amount produces a change in area that is approximately .    A geometric illustration of the change in area when a square of side length is increased by a small amount . The added strips show how the area grows approximately like .   A square with side length x and area x squared is shown. Light shaded strips of width Delta x are added along the top and right sides, representing the increase in area when x is increased by Delta x. The diagram visually illustrates how the change in area is approximately proportional to 2x times Delta x.     This suggests that   A similar idea applies to volume. For , the change in volume due to a small increase is approximately ,    A geometric illustration of the change in volume when a cube of side length is increased by a small amount . The added slabs show how the volume grows approximately like .   A cube with side length x and volume x cubed is shown. Light shaded slabs of thickness Delta x are added to the top, right, and back faces of the cube, representing the increase in volume when x is increased by Delta x. The diagram illustrates that the dominant contribution to the change in volume is proportional to 3x squared times Delta x.     suggesting that .  More generally, for the growth of an -dimensional cube with side length , this geometric reasoning suggests that . While this intuition cannot be visualized for higher dimensions, it motivates the algebraic proof that follows.  We now prove the Power Rule rigorously using the limit definition of the derivative. The constant and linear cases were proved earlier. We focus on the case .  The proof proceeds in stages, beginning with whole number powers. Throughout, we repeatedly use the identity   which holds for all positive integers .   Step 1: Positive integer powers. Let be a positive integer. Using the limit definition of the derivative,   Apply the factorization identity with and .   Cancel the factor of to obtain   Taking the limit as gives   Therefore, for positive integers ,    Step 2: Negative integer powers. Let , where is a positive integer. Then . In the derivative limit, we combine fractions and apply the same factorization identity with and .  After simplification, the resulting expression reduces to   Thus, the Power Rule holds for negative integers as well.   Step 3: Rational powers. Let , where is a positive integer and is any integer. Then   In the derivative limit, the numerator has the form . As in earlier work with cube roots, we multiply the numerator and denominator by   where and . This eliminates the radicals and produces the numerator   which we have already handled. Simplifying the resulting limit again yields .  Therefore, the Power Rule holds for all rational exponents.  The formula is also valid for irrational exponents such as , but proving this rigorously requires more advanced theory.      Compute each derivative:      .    Apply the power rule with .        .    First rewrite the cube root using exponent notation, then apply the power rule.        .    Rewrite the reciprocal using a negative exponent, then apply the power rule.        Derivative Rules  Once we know the derivatives of basic functions, we can differentiate combinations of functions using rules. Suppose and are differentiable at .      Sum Rule:  .   Difference Rule:  .   Constant Multiple Rule:  for any constant .   Product Rule:  .   Quotient Rule:  , where .     A proof of the Derivative Sum Rule is presented in the video below.    A proof of the Product Rule is presented in the following video.    Proofs of additional derivative rules can be found online. Your instructor would love to talk about this in office hours, and also you may want to consider a math major\/minor. These topics are covered in more detail in MTH 320.     Warning: the derivative of a product is not the product of derivatives. In general, .     Compute the following derivatives.     Compute .    First rewrite the square root using exponents and apply the constant multiple rule.       Compute .    The quantity is a constant, so its derivative is .       Let . Compute .    Use the Product Rule with and .   (Optional) You can also expand first and then differentiate term-by-term. Both approaches agree.      Differentiate .    First rewrite the denominator: . Then , so   You could also use the Quotient Rule directly; both methods produce equivalent results.      A block of ice has length cm, width cm, and height cm. Its length and width are decreasing at cm\/hr, and its height is decreasing at cm\/hr. How fast is the volume decreasing at that instant?    The volume is , and all three dimensions depend on time . Differentiate using the Product Rule (applied twice):   At the instant described: , , , , , (cm\/hr).   The volume is decreasing at .      Higher Derivatives  Because the derivative of a function is itself a function, we can differentiate again. The second derivative of is denoted , and in Leibniz notation it is written :   If represents position as a function of time, then is velocity and is acceleration .    A stone falls feet in seconds. Compute , , and interpret them.    Differentiate repeatedly using the power rule:   Here is velocity (ft\/sec), increasing with time. The constant is acceleration (ft\/sec ).     Higher derivatives are defined by repeatedly differentiating. The third derivative of is denoted , the fourth derivative is denoted , and in general the th derivative is written .  In Leibniz notation, these derivatives are written , , and .  As the order of the derivative increases, prime notation becomes cumbersome, so the superscript notation is typically preferred for higher derivatives.     Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Basic Differentiation Rules      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answer using derivative rules or interpretation.     The symbols and always represent the same quantity.     True. Both notations represent the derivative of with respect to . In other words, . (They are two different notational conventions for the same derivative.)      If , then for all .     True. The expression is a constant (it does not depend on ), so for all .      If , then .     True. Using the constant multiple rule and , we get .      If , then .     True. Rewrite (where defined). Then apply the power rule: .      If and then .     False. By the Product Rule, . Evaluating at gives . Since is not given, cannot be determined from the information provided, and it is not necessarily .      If represents velocity (where is a time variable), then represents acceleration.     True. When velocity is given as a function of time , its derivative with respect to time, , measures the rate of change of velocity. By definition, this rate of change is acceleration.      The notation and represent the same function.     True. Both notations mean the third derivative of with respect to .      If , then .     False. Remember that the quotient rule is complicated and there is no reason to think that such a clean relationship like this should exist. Here is the quotient rule for both quotients: For a concrete example we can take and . Then (notice that this example is so simple that the quotient rule is not even needed to compute the derivatives): And as for the other quotient: Evaluating at gives , not . So the derivative of is in general not the reciprocal of the derivative of .      More True\/False Questions   For this set of problems let be a differentiable function. Values of are given in the table below, and is piecewise linear function shown in the accompanying graph.       Graph of , a piecewise linear function composed of two line segments.   Graph of a piecewise linear function B(x). The graph consists of a line segment increasing from the point (0, 2) to (2, 4), followed by a line segment decreasing from (2, 4) to (5, 1). The two segments meet at a sharp corner at x = 2.        If , then .     True. By the Sum Rule, . From the table, . From the graph, is increasing with slope at , so .  Therefore, .      If , then .     False. By the Constant Multiple Rule, . From the graph, is decreasing with slope at , so .  Hence, , not .      If , then .     False. Use the Product Rule: . From the table, and .  Evaluating at , , not .      If , then .     True. Apply the Quotient Rule: From the table, and . From the graph, and .  Substituting,       If , then is increasing when .     True. Apply the Product Rule: From the table, and . From the graph, and .  Substituting,   Since has a positive derivative (a.k.a. slope) we know that it is increasing at .      "
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
  "id": "tf-deriv-rules-19",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-19",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If , then .     False. Remember that the quotient rule is complicated and there is no reason to think that such a clean relationship like this should exist. Here is the quotient rule for both quotients: For a concrete example we can take and . Then (notice that this example is so simple that the quotient rule is not even needed to compute the derivatives): And as for the other quotient: Evaluating at gives , not . So the derivative of is in general not the reciprocal of the derivative of .   "
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
  "number": "9",
  "title": "",
  "body": "  If , then .     True. By the Sum Rule, . From the table, . From the graph, is increasing with slope at , so .  Therefore, .   "
},
{
  "id": "tf-deriv-rules-24",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-24",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  If , then .     False. By the Constant Multiple Rule, . From the graph, is decreasing with slope at , so .  Hence, , not .   "
},
{
  "id": "tf-deriv-rules-22",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-22",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  If , then .     False. Use the Product Rule: . From the table, and .  Evaluating at , , not .   "
},
{
  "id": "tf-deriv-rules-23",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-23",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  If , then .     True. Apply the Quotient Rule: From the table, and . From the graph, and .  Substituting,    "
},
{
  "id": "tf-deriv-rules-25",
  "level": "2",
  "url": "sec-derivative-rules.html#tf-deriv-rules-25",
  "type": "Exercise",
  "number": "13",
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
  "title": "Exponential Derivatives and the Chain Rule",
  "body": " Exponential Derivatives and the Chain Rule    Apply the basic derivative formulas for and .  Understand and use the Chain Rule to differentiate composite functions algebraically, graphically, and through values provided in tables.  Compute derivatives of functions that combine exponentials, powers, and trigonometric expressions using the Product Rule, Quotient Rule, and Chain Rule.     Prerequisite Review  If you feel a bit out of practice with exponential rules or composition rules from algebra, it may be helpful to revisit those ideas before diving into the calculus.   Review section on function composition    Review section on exponential functions       Exponential functions appear throughout calculus. Their derivatives play a central role in growth models, rates of change, and the behavior of composite functions. This section develops the essential derivative formulas for these functions and introduces the Chain Rule, which allows us to differentiate compositions of functions.    Key Derivative Formula  We begin by stating the derivative formula for the natural exponential function.   Derivative of the Natural Exponential Function      We will use this derivative formula throughout the course, but we will not prove it at this moment.  The fact that is a classical result that can be established in several different ways: by studying the compound interest definition of , by using limits, or by analyzing the unique solution to a differential equation. Curious students can find many proofs available online.  For now, we take this result as a known fact and use it to develop more general differentiation techniques.     Now that we know the derivative of , we can combine it with the Product Rule, Quotient Rule, and earlier power–function rules to differentiate more complicated expressions.    Compute the derivatives of the following functions.      .    For , use the power rule and the fact that :         .    Rewrite and apply the Product Rule.         Show that the curve has no tangent line with slope 2.    Compute the derivative:   To find a point where the slope is 2, we solve   Rearranging gives   Every term on the left side is positive for all real . The equation has no solution. Thus the slope never equals 2.      The Statement and Applications of The Chain Rule  Composite functions arise everywhere. For example, if measures a temperature that changes with time, and converts that temperature to pressure, then describes how pressure changes with time. The Chain Rule captures how variations in the inner function affect the slope of the composite function.   The Chain Rule   If and are differentiable functions, then their composition is differentiable and   In Leibniz notation, if we let , then     A full proof of the Chain Rule requires careful algebra using the limit definition of the derivative and the structure of composite functions. We present the result here without a complete derivation. Students who would like to explore the proof in detail may find the following video especially helpful:   A visual and intuitive explanation of the Chain Rule   The central idea behind the proof is that small changes in the input propagate through the inner function and then through the outer function . The Chain Rule formalizes this by multiplying the rate of change of with respect to by the rate of change of with respect to .     Informally, the Chain Rule says that the rate of change of a composite function is the rate of change of the outer function, evaluated at the inner function, multiplied by how fast the inner function itself is changing.   Now let's see the chain rule applied with a few examples.    Compute the derivative of     Apply the Chain Rule and Quotient rule. Let , then and so: Therefore       Let and be differentiable functions with the values shown below.   Compute the following derivatives.     Compute at .    Using the Chain Rule,   At , we have and , and the table gives .       Compute at .    Again apply the Chain Rule:   At , the table shows , so , and .      Lastly, we can use the Chain Rule to extend our exponential derivative formulas. This allows us to differentiate any exponential function, not just those with base .   Derivative of the General Exponential Functions   For any positive constant , the derivative of is     To compute the derivative of for a positive constant , we rewrite in terms of the natural exponential function. Recall that by using the power rule for logarithms and the inverse identity we can write:   We now differentiate using the Chain Rule. Let   Then , and by the Chain Rule,   Since , we have . Substituting back:   Using once more, we obtain the final formula:   This completes the proof.      Compute the derivative of .    Apply the exponential derivative formula with .       Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Exponential Functions and the Chain Rule      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answer.     If , then .     True. This is the Chain Rule with outer function and inner function . Since , we get .      If for a constant , then for all real .     True. Using , we have for all real and when . Therefore for all .      If , then , regardless of .     True (assuming the Chain Rule applies at ). By the Chain Rule, . Since , the product is .      The derivative of and the derivative of are the same.     False. Using the Chain Rule: , while . These expressions are not equal in general.      If , then exists for all real .     False. The function is only defined for , so the derivative cannot exist for negative . (On it is differentiable; at one must check separately.)      If and on an interval, then is decreasing on that interval.     True (where the composition is defined). By the Chain Rule, . Since and , their product is negative, so is decreasing.      If has a horizontal tangent at , then either or .     True (assuming differentiability so the Chain Rule applies at ). A horizontal tangent means . By the Chain Rule, . A product is zero only if at least one factor is zero, so or .      Consider the graphs of and below. Since is not differentiable at we know that is not is not differentiable at .    Graphs of two functions and .   A coordinate plane showing two piecewise linear functions. The graph of g(x) is a straight line increasing from the point (0, 1.5) to (3, 3). The graph of f(x) consists of two line segments: one increasing from (0, 0) to (1, 1.5), followed by a decreasing segment from (1, 1.5) to (3, 1). The functions are labeled directly on the graph as f(x) and g(x).        False. The fact that is not differentiable at does not automatically mean that the composite is not differentiable at .  In fact, we can compute the derivative using the Chain Rule. The slope of is constant:   For , the graph of is the line segment from to , so its slope is   on that segment, including at . Therefore,   So  is differentiable at .      "
},
{
  "id": "sec-derivative-expChain-2",
  "level": "2",
  "url": "sec-derivative-expChain.html#sec-derivative-expChain-2",
  "type": "Objectives",
  "number": "2.5",
  "title": "",
  "body": "  Apply the basic derivative formulas for and .  Understand and use the Chain Rule to differentiate composite functions algebraically, graphically, and through values provided in tables.  Compute derivatives of functions that combine exponentials, powers, and trigonometric expressions using the Product Rule, Quotient Rule, and Chain Rule.   "
},
{
  "id": "wrn-expChain-prereq",
  "level": "2",
  "url": "sec-derivative-expChain.html#wrn-expChain-prereq",
  "type": "Warning",
  "number": "2.5.1",
  "title": "Prerequisite Review.",
  "body": " Prerequisite Review  If you feel a bit out of practice with exponential rules or composition rules from algebra, it may be helpful to revisit those ideas before diving into the calculus.   Review section on function composition    Review section on exponential functions      "
},
{
  "id": "thm-derivatives-exp",
  "level": "2",
  "url": "sec-derivative-expChain.html#thm-derivatives-exp",
  "type": "Theorem",
  "number": "2.5.2",
  "title": "Derivative of the Natural Exponential Function.",
  "body": " Derivative of the Natural Exponential Function      We will use this derivative formula throughout the course, but we will not prove it at this moment.  The fact that is a classical result that can be established in several different ways: by studying the compound interest definition of , by using limits, or by analyzing the unique solution to a differential equation. Curious students can find many proofs available online.  For now, we take this result as a known fact and use it to develop more general differentiation techniques.   "
},
{
  "id": "ex-exp-log-basic-combined",
  "level": "2",
  "url": "sec-derivative-expChain.html#ex-exp-log-basic-combined",
  "type": "Example",
  "number": "2.5.3",
  "title": "",
  "body": "  Compute the derivatives of the following functions.      .    For , use the power rule and the fact that :         .    Rewrite and apply the Product Rule.      "
},
{
  "id": "ex-expChain-basic-02",
  "level": "2",
  "url": "sec-derivative-expChain.html#ex-expChain-basic-02",
  "type": "Example",
  "number": "2.5.4",
  "title": "",
  "body": "  Show that the curve has no tangent line with slope 2.    Compute the derivative:   To find a point where the slope is 2, we solve   Rearranging gives   Every term on the left side is positive for all real . The equation has no solution. Thus the slope never equals 2.   "
},
{
  "id": "thm-chain-rule",
  "level": "2",
  "url": "sec-derivative-expChain.html#thm-chain-rule",
  "type": "Theorem",
  "number": "2.5.5",
  "title": "The Chain Rule.",
  "body": " The Chain Rule   If and are differentiable functions, then their composition is differentiable and   In Leibniz notation, if we let , then     A full proof of the Chain Rule requires careful algebra using the limit definition of the derivative and the structure of composite functions. We present the result here without a complete derivation. Students who would like to explore the proof in detail may find the following video especially helpful:   A visual and intuitive explanation of the Chain Rule   The central idea behind the proof is that small changes in the input propagate through the inner function and then through the outer function . The Chain Rule formalizes this by multiplying the rate of change of with respect to by the rate of change of with respect to .   "
},
{
  "id": "rem-chainrule-informal",
  "level": "2",
  "url": "sec-derivative-expChain.html#rem-chainrule-informal",
  "type": "Remark",
  "number": "2.5.6",
  "title": "",
  "body": " Informally, the Chain Rule says that the rate of change of a composite function is the rate of change of the outer function, evaluated at the inner function, multiplied by how fast the inner function itself is changing.  "
},
{
  "id": "ex-expChain-basic-01",
  "level": "2",
  "url": "sec-derivative-expChain.html#ex-expChain-basic-01",
  "type": "Example",
  "number": "2.5.7",
  "title": "",
  "body": "  Compute the derivative of     Apply the Chain Rule and Quotient rule. Let , then and so: Therefore    "
},
{
  "id": "ex-expChain-table",
  "level": "2",
  "url": "sec-derivative-expChain.html#ex-expChain-table",
  "type": "Example",
  "number": "2.5.8",
  "title": "",
  "body": "  Let and be differentiable functions with the values shown below.   Compute the following derivatives.     Compute at .    Using the Chain Rule,   At , we have and , and the table gives .       Compute at .    Again apply the Chain Rule:   At , the table shows , so , and .     "
},
{
  "id": "thm-derivative-a-to-x",
  "level": "2",
  "url": "sec-derivative-expChain.html#thm-derivative-a-to-x",
  "type": "Theorem",
  "number": "2.5.9",
  "title": "Derivative of the General Exponential Functions.",
  "body": " Derivative of the General Exponential Functions   For any positive constant , the derivative of is     To compute the derivative of for a positive constant , we rewrite in terms of the natural exponential function. Recall that by using the power rule for logarithms and the inverse identity we can write:   We now differentiate using the Chain Rule. Let   Then , and by the Chain Rule,   Since , we have . Substituting back:   Using once more, we obtain the final formula:   This completes the proof.   "
},
{
  "id": "ex-derivative-2-to-x",
  "level": "2",
  "url": "sec-derivative-expChain.html#ex-derivative-2-to-x",
  "type": "Example",
  "number": "2.5.10",
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
  "id": "tf-expChain-ap-03",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-03",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If for a constant , then for all real .     True. Using , we have for all real and when . Therefore for all .   "
},
{
  "id": "tf-expChain-ap-04",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-04",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If , then , regardless of .     True (assuming the Chain Rule applies at ). By the Chain Rule, . Since , the product is .   "
},
{
  "id": "tf-expChain-ap-05",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-05",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The derivative of and the derivative of are the same.     False. Using the Chain Rule: , while . These expressions are not equal in general.   "
},
{
  "id": "tf-expChain-ap-06",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-06",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If , then exists for all real .     False. The function is only defined for , so the derivative cannot exist for negative . (On it is differentiable; at one must check separately.)   "
},
{
  "id": "tf-expChain-ap-08",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-08",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If and on an interval, then is decreasing on that interval.     True (where the composition is defined). By the Chain Rule, . Since and , their product is negative, so is decreasing.   "
},
{
  "id": "tf-expChain-ap-10",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-10",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  If has a horizontal tangent at , then either or .     True (assuming differentiability so the Chain Rule applies at ). A horizontal tangent means . By the Chain Rule, . A product is zero only if at least one factor is zero, so or .   "
},
{
  "id": "tf-expChain-ap-12",
  "level": "2",
  "url": "sec-derivative-expChain.html#tf-expChain-ap-12",
  "type": "Exercise",
  "number": "8",
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
  "body": " Inverse Functions and Their Derivatives    Use implicit differentiation to derive the formula for the derivative of an inverse function.  Compute derivatives of functions involving logarithmic, trigonometric, and inverse trigonometric functions.  Interpret derivative values of inverse functions geometrically as slopes of tangent lines.     Prerequisite Review  This section builds on your knowledge of implicit differentiation to find derivatives of inverse functions and particularly the logarithmic and inverse trigonometric functions. If you feel a bit out of practice with inverse functions, it may be helpful to revisit those ideas before diving into the calculus.   Review section on function inverses    Review section on logarithmic functions    Review section on trigonometric functions       The Natural Logarithm and Finding Derivatives of Inverse Functions  Here we will demonstrate how we can use implicit differentiation to find the derivative of the natural logarithm function, . We will use this same idea to find the derivatives of other inverse functions as well.         Let . Then by the inverse relationship with the exponential function, Differentiate both sides with respect to to get: Therefore, Now rewrite in terms of . Since we know from above that , we have Thus,     Now let's take this idea and generalize it to find a formula for the derivative of the inverse of any differentiable function.   Finding the Derivative of an Inverse Function     Start with a differentiable function and its inverse . Then by the definition of inverse functions, .    Differentiate both sides with respect to , treating as a function of .    Solve for , then rewrite the result in terms of .      Now let's use this idea to find the formulas for the derivatives of various inverse trigonometric functions.    Derivatives of Inverse Trig Functions   Derivative of      Let . Then . Differentiate both sides with respect to :   Now rewrite in terms of . Since and has range , we have , so   Therefore,      Derivative of      Let . Then . Differentiate:   Since and , we have , and   Therefore,      Derivative of      Let , so . Differentiate:   Use the pythagorean identity and :      Notations of Inverse Trigonometric Functions  Note that some both , , and along with , , and are valid notations for the inverse trigonometric functions. We will use them interchangeably in our course. Students are expected to be comfortable with both notations.     Select Examples  Now that we have the formulas for the derivatives of various inverse functions, let's see some example of problems that would make reasonable homework, quiz, or exam questions.    Find and .    For , use the Chain Rule with outer function and inner function :   For , use the Chain Rule and the derivative of :       Find the derivative of .    Differentiate using the Chain Rule:       Find a point on the curve where the slope is . Is there more than one answer?    Since , we want   Solve for :   So there are two points. When , , and when , . Therefore the slope is at   Yes, there is more than one answer because depends on , so it has the same value at and .      Suppose that is differentiable, , and . Find .    Let . Then . Differentiate both sides with respect to :   Therefore,   Now evaluate at . Since , we have because . Thus,       Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Examples for Inverse Functions and Their Derivatives      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answer.     If , then .     False. By the Chain Rule, . The factor is missing.      If , then .     True. Let . Then . By the Chain Rule, .       .   False. The Chain Rule introduces a factor of 5.     If , then .   False. The derivative requires the Quotient Rule.       The derivative of is always less than 1.   True. Since and for all real , the derivative is always less than or equal to 1, and equal to 1 only at .     If , then .   False. The derivative of is . At , the expression under the square root is negative, so is undefined. Therefore, .     If , then at the tangent line equation is given by .   True. The derivative of is . At , and , so the tangent line equation is .     If is one-to-one and differentiable and contains the point and is its inverse, then .   True. Consider , then so , which gives . Since , therefore      If and note that , then .   True. Consider , then so , which gives . Since , we have , so . Therefore,      If has a horizontal tangent at , then has a vertical tangent at .   True. If has a horizontal tangent at , then . Since , it follows that , which is undefined. Therefore, has a vertical tangent at . We can also verify this by sketching the graphs of and and remembering that they are reflections across the line .     If is increasing, then is decreasing.   False. Both are increasing.  If is increasing, then for all in the domain of . Since , and , it follows that . Therefore, is also increasing.      Consider a function and its inverse as shown in the figure below. The function contains the point and contains the point . Since the functions are inverses of each other, the two tangent lines at these corresponding points must be perpendicular to each other.   >  A function and its inverse , shown as reflections across the line .   A coordinate plane showing the graph of a function f(x) in red and its inverse f inverse of x in blue. The two graphs are mirror images of each other across the dashed diagonal line y equals x. A point on f(x) at approximately (4, 2) corresponds to a point on f inverse of x at approximately (2, 4), illustrating the inverse relationship between the functions.        False. The slopes of the tangent lines at corresponding points of a function and its inverse are multiplicative inverses of each other, not negative reciprocals. Therefore, the tangent lines are not necessarily perpendicular. You can also sketch the tangent lines to see that they are not perpendicular.      "
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
  "id": "wrn-derivative-inverse-prereq",
  "level": "2",
  "url": "sec-derivative-inverse.html#wrn-derivative-inverse-prereq",
  "type": "Warning",
  "number": "2.7.1",
  "title": "Prerequisite Review.",
  "body": " Prerequisite Review  This section builds on your knowledge of implicit differentiation to find derivatives of inverse functions and particularly the logarithmic and inverse trigonometric functions. If you feel a bit out of practice with inverse functions, it may be helpful to revisit those ideas before diving into the calculus.   Review section on function inverses    Review section on logarithmic functions    Review section on trigonometric functions     "
},
{
  "id": "thm-derivative-ln",
  "level": "2",
  "url": "sec-derivative-inverse.html#thm-derivative-ln",
  "type": "Theorem",
  "number": "2.7.2",
  "title": "",
  "body": "       Let . Then by the inverse relationship with the exponential function, Differentiate both sides with respect to to get: Therefore, Now rewrite in terms of . Since we know from above that , we have Thus,    "
},
{
  "id": "strat-derivative-inverse-general",
  "level": "2",
  "url": "sec-derivative-inverse.html#strat-derivative-inverse-general",
  "type": "Strategy",
  "number": "2.7.3",
  "title": "Finding the Derivative of an Inverse Function.",
  "body": " Finding the Derivative of an Inverse Function     Start with a differentiable function and its inverse . Then by the definition of inverse functions, .    Differentiate both sides with respect to , treating as a function of .    Solve for , then rewrite the result in terms of .     "
},
{
  "id": "thm-derivative-arcsin",
  "level": "2",
  "url": "sec-derivative-inverse.html#thm-derivative-arcsin",
  "type": "Theorem",
  "number": "2.7.4",
  "title": "Derivative of <span class=\"process-math\">\\(\\arcsin(x)\\)<\/span>.",
  "body": " Derivative of      Let . Then . Differentiate both sides with respect to :   Now rewrite in terms of . Since and has range , we have , so   Therefore,    "
},
{
  "id": "thm-derivative-arccos",
  "level": "2",
  "url": "sec-derivative-inverse.html#thm-derivative-arccos",
  "type": "Theorem",
  "number": "2.7.5",
  "title": "Derivative of <span class=\"process-math\">\\(\\arccos(x)\\)<\/span>.",
  "body": " Derivative of      Let . Then . Differentiate:   Since and , we have , and   Therefore,    "
},
{
  "id": "thm-derivative-arctan",
  "level": "2",
  "url": "sec-derivative-inverse.html#thm-derivative-arctan",
  "type": "Theorem",
  "number": "2.7.6",
  "title": "Derivative of <span class=\"process-math\">\\(\\arctan(x)\\)<\/span>.",
  "body": " Derivative of      Let , so . Differentiate:   Use the pythagorean identity and :    "
},
{
  "id": "remark-derivative-inverse-trig-domains",
  "level": "2",
  "url": "sec-derivative-inverse.html#remark-derivative-inverse-trig-domains",
  "type": "Remark",
  "number": "2.7.7",
  "title": "Notations of Inverse Trigonometric Functions.",
  "body": " Notations of Inverse Trigonometric Functions  Note that some both , , and along with , , and are valid notations for the inverse trigonometric functions. We will use them interchangeably in our course. Students are expected to be comfortable with both notations.  "
},
{
  "id": "ex-deriv-ln-sin-arcsin",
  "level": "2",
  "url": "sec-derivative-inverse.html#ex-deriv-ln-sin-arcsin",
  "type": "Example",
  "number": "2.7.8",
  "title": "",
  "body": "  Find and .    For , use the Chain Rule with outer function and inner function :   For , use the Chain Rule and the derivative of :    "
},
{
  "id": "ex-domain-derivative-sqrt-ln",
  "level": "2",
  "url": "sec-derivative-inverse.html#ex-domain-derivative-sqrt-ln",
  "type": "Example",
  "number": "2.7.9",
  "title": "",
  "body": "  Find the derivative of .    Differentiate using the Chain Rule:    "
},
{
  "id": "ex-arctan-slope-point",
  "level": "2",
  "url": "sec-derivative-inverse.html#ex-arctan-slope-point",
  "type": "Example",
  "number": "2.7.10",
  "title": "",
  "body": "  Find a point on the curve where the slope is . Is there more than one answer?    Since , we want   Solve for :   So there are two points. When , , and when , . Therefore the slope is at   Yes, there is more than one answer because depends on , so it has the same value at and .   "
},
{
  "id": "ex-inverse-derivative-general",
  "level": "2",
  "url": "sec-derivative-inverse.html#ex-inverse-derivative-general",
  "type": "Example",
  "number": "2.7.11",
  "title": "",
  "body": "  Suppose that is differentiable, , and . Find .    Let . Then . Differentiate both sides with respect to :   Therefore,   Now evaluate at . Since , we have because . Thus,    "
},
{
  "id": "tf-expChain-ap-02",
  "level": "2",
  "url": "sec-derivative-inverse.html#tf-expChain-ap-02",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If , then .     False. By the Chain Rule, . The factor is missing.   "
},
{
  "id": "tf-expChain-ap-11",
  "level": "2",
  "url": "sec-derivative-inverse.html#tf-expChain-ap-11",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If , then .     True. Let . Then . By the Chain Rule, .   "
},
{
  "id": "exercises-derivative-inv-tf-2-5",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "   .   False. The Chain Rule introduces a factor of 5.  "
},
{
  "id": "exercises-derivative-inv-tf-2-6",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If , then .   False. The derivative requires the Quotient Rule.    "
},
{
  "id": "exercises-derivative-inv-tf-2-7",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  The derivative of is always less than 1.   True. Since and for all real , the derivative is always less than or equal to 1, and equal to 1 only at .  "
},
{
  "id": "exercises-derivative-inv-tf-2-8",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If , then .   False. The derivative of is . At , the expression under the square root is negative, so is undefined. Therefore, .  "
},
{
  "id": "exercises-derivative-inv-tf-2-9",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  If , then at the tangent line equation is given by .   True. The derivative of is . At , and , so the tangent line equation is .  "
},
{
  "id": "exercises-derivative-inv-tf-2-10",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If is one-to-one and differentiable and contains the point and is its inverse, then .   True. Consider , then so , which gives . Since , therefore   "
},
{
  "id": "exercises-derivative-inv-tf-2-11",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  If and note that , then .   True. Consider , then so , which gives . Since , we have , so . Therefore,   "
},
{
  "id": "exercises-derivative-inv-tf-2-12",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  If has a horizontal tangent at , then has a vertical tangent at .   True. If has a horizontal tangent at , then . Since , it follows that , which is undefined. Therefore, has a vertical tangent at . We can also verify this by sketching the graphs of and and remembering that they are reflections across the line .  "
},
{
  "id": "exercises-derivative-inv-tf-2-13",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-13",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  If is increasing, then is decreasing.   False. Both are increasing.  If is increasing, then for all in the domain of . Since , and , it follows that . Therefore, is also increasing.   "
},
{
  "id": "exercises-derivative-inv-tf-2-14",
  "level": "2",
  "url": "sec-derivative-inverse.html#exercises-derivative-inv-tf-2-14",
  "type": "Exercise",
  "number": "12",
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
  "body": " Additional Worked-Out Problems   Introduction and Motivation for Derivatives    Find the average rate of change of the function on the interval .    To find the average rate of change of the function on the interval , we use the formula for the average rate of change:   where and .  First, we calculate and :    Now, we substitute these values into the average rate of change formula and simplify:   Therefore, the average rate of change of the function on the interval is .      Let .  (a) Find the slope of the secant line joining and .  (b) Find the slope of the secant line joining and .  (c) Find the slope of the tangent line at .  (d) Find the equation of the tangent line at .    (a) The slope of the secant line is   Compute the function values:    So the slope of the secant line is .  (b) The slope of the secant line is   First compute:    Expand:   So the difference quotient becomes   (c) The slope of the tangent line is the limit as :   So the slope of the tangent line at is .  (d) Using point-slope form:    The tangent line is horizontal at .      Definition of the Derivative    Consider the function near .  (a) Simplify the difference quotient as much as possible:   (b) Use your result from part (a) and the limit definition of the derivative to calculate :   (c) Consider the following table of values of near . Use difference quotients to approximate .   Approximate by computing the following difference quotients:   For , compute .  For , compute .  For , compute .  For , compute .     (a) First compute:   Expand:    Since , we have:    (b) Now take the limit:   (c) Using the table:  For :   For :   For :   For :   These values approach , confirming that .      Let be the height (in meters) of a rubber ball dropped from a ledge at time seconds. The ball hits the ground at seconds and then immediately bounces upward with a smaller velocity. A graph of is shown below.   A graph of height versus time. The curve begins at time 0 with height 12 meters and decreases smoothly, curving downward as time increases. The graph reaches height 0 at time 0.9 seconds. At that point there is a sharp corner. After 0.9 seconds, the graph changes direction and increases along a straight line segment, representing the ball rising upward at a constant but smaller speed than it had while falling.   (a) What are the units of ? Explain what the sign of tells you about the motion of the ball.  (b) Use the graph to approximate for . What is the velocity of the ball just before it hits the ground?  (c) Use the graph to approximate the velocity of the ball immediately after the bounce (for )?  (d) Compare the left-hand and right-hand derivatives at . Does exist? Explain your reasoning using the graph.    (a) Height is measured in meters and time in seconds, so has units of meters per second (m\/sec). If is negative, the ball is moving downward. If is positive, the ball is moving upward.  (b) For , we have and . Just before impact, the average velocity is approximately   So the ball is moving downward at approximately m\/sec just before hitting the ground.  (c) For , we have and . Therefore the average velocity is approximately   So immediately after the bounce, the ball is moving upward at approximately m\/sec.  (d) The left-hand derivative at is approximately , while the right-hand derivative is . Since these values are not equal, the derivative does not exist at . Graphically, the function has a sharp corner at the bounce point.      Let be the position of an object at time . Here is measured in meters and is measured in seconds.  (a) Simplify the following difference quotient as much as possible:   (b) Use your result from part (a) and the limit definition of the derivative to calculate the instantaneous velocity of the object at time .   (c) What is the object's velocity at second?    (a) First compute   So the difference quotient becomes   Combine the fractions over a common denominator:   After expanding and simplifying, this reduces to   (b) Now take the limit as :   (c) Evaluate at :   So the velocity at second is m\/s.      Basic Differentiation Rules    Let . Evaluate the following:  (a)   (b)   (c)   (d)     (a) To find , we differentiate each term of the function.  Recall that , so we can apply the power rule to this term as well.   (b) To find , we substitute into the expression for :   (c) To find , we differentiate :   (d) To find , we substitute into the expression for :       Let .  (a) Find .  (b) Find the equation of the tangent line to the graph of at the point where .  (c) Find the equation of the perpendicular line to the graph of at the point where .    (a) To find , we first need to find the derivative using the quotient rule. The quotient rule states that if , then In our case, let and . We compute: Now we can apply the quotient rule:  Now we substitute into the expression for to find :    (b) To find the equation of the tangent line to the graph of at the point where , we first need to find the coordinates of the point on the graph at . We compute: So the point of tangency is . The slope of the tangent line is given by . Using the point-slope form of a line, we can write the equation of the tangent line as: Simplifying this gives:   (c) To find the equation of the perpendicular line to the graph of at the point where , we first need to find the slope of the perpendicular line. The slope of the tangent line is , so the slope of the perpendicular line is the negative reciprocal of , which is . Using the point-slope form of a line again, we can write the equation of the perpendicular line as: Simplifying this gives:      Using Given Function and Derivative Values   Suppose and are differentiable functions and that   Evaluate the following derivatives at .  (a)  (b)  (c)  (d)    (a) We use the linearity of differentiation:   (b) We use the product rule:   (c) We use the quotient rule:   (d) Again, we use the quotient rule:       Find all points of the graph of that have horizontal tangents.    Horizontal tangents occur where the slope (derivative) is zero. So we are looking to solve the equation .   Set  , so or .  Therefore, the horizontal tangents occur at and . To find the corresponding points on the graph, we compute:   Thus, the points of the graph that have horizontal tangents are and .      Find the derivative of the given function.     There are multiple ways to approach this problem. One way is to first simplify the expression for and then differentiate. Another way is to apply the product rule multiple times without simplifying first. Here, we will take the simpler route and simplify first.  First, we can rewrite as:   Now we can apply the product rule to differentiate with respect to :   Although we can continue to simplify this expression, it is often acceptable to leave the derivative in this form, especially if the problem does not explicitly ask for further simplification.      Is there a point on the curve where the tangent line has the equation . If so, find the values of and the point of tangency.    The slope of the line is .  The derivative of the curve is .  For the line to be tangent to the curve, their slopes must be equal at some point. So we set:   The point of tangency must also be on both curves. So we know that:   Solving for gives:   Substituting back into (either) curve equation we get:   And substituting this value back into our equation gives:   Thus, the value of is , and the point of tangency is . You can verify in Desmos that the line is indeed tangent to the curve at the point .      Trigonometric Derivatives  test    Exponential Functions and the Chain Rule  test    Implicit Differentiation  test    Inverse Functions and Their Derivatives  test   "
},
{
  "id": "ex-deriv-ww-1",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-deriv-ww-1",
  "type": "Example",
  "number": "2.8.1",
  "title": "",
  "body": "  Find the average rate of change of the function on the interval .    To find the average rate of change of the function on the interval , we use the formula for the average rate of change:   where and .  First, we calculate and :    Now, we substitute these values into the average rate of change formula and simplify:   Therefore, the average rate of change of the function on the interval is .   "
},
{
  "id": "ex-secant-tangent-polynomial",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-secant-tangent-polynomial",
  "type": "Example",
  "number": "2.8.2",
  "title": "",
  "body": "  Let .  (a) Find the slope of the secant line joining and .  (b) Find the slope of the secant line joining and .  (c) Find the slope of the tangent line at .  (d) Find the equation of the tangent line at .    (a) The slope of the secant line is   Compute the function values:    So the slope of the secant line is .  (b) The slope of the secant line is   First compute:    Expand:   So the difference quotient becomes   (c) The slope of the tangent line is the limit as :   So the slope of the tangent line at is .  (d) Using point-slope form:    The tangent line is horizontal at .   "
},
{
  "id": "ex-derivative-limit-def-cubic",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-derivative-limit-def-cubic",
  "type": "Example",
  "number": "2.8.3",
  "title": "",
  "body": "  Consider the function near .  (a) Simplify the difference quotient as much as possible:   (b) Use your result from part (a) and the limit definition of the derivative to calculate :   (c) Consider the following table of values of near . Use difference quotients to approximate .   Approximate by computing the following difference quotients:   For , compute .  For , compute .  For , compute .  For , compute .     (a) First compute:   Expand:    Since , we have:    (b) Now take the limit:   (c) Using the table:  For :   For :   For :   For :   These values approach , confirming that .   "
},
{
  "id": "ex-velocity-from-graph-bounce",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-velocity-from-graph-bounce",
  "type": "Example",
  "number": "2.8.4",
  "title": "",
  "body": "  Let be the height (in meters) of a rubber ball dropped from a ledge at time seconds. The ball hits the ground at seconds and then immediately bounces upward with a smaller velocity. A graph of is shown below.   A graph of height versus time. The curve begins at time 0 with height 12 meters and decreases smoothly, curving downward as time increases. The graph reaches height 0 at time 0.9 seconds. At that point there is a sharp corner. After 0.9 seconds, the graph changes direction and increases along a straight line segment, representing the ball rising upward at a constant but smaller speed than it had while falling.   (a) What are the units of ? Explain what the sign of tells you about the motion of the ball.  (b) Use the graph to approximate for . What is the velocity of the ball just before it hits the ground?  (c) Use the graph to approximate the velocity of the ball immediately after the bounce (for )?  (d) Compare the left-hand and right-hand derivatives at . Does exist? Explain your reasoning using the graph.    (a) Height is measured in meters and time in seconds, so has units of meters per second (m\/sec). If is negative, the ball is moving downward. If is positive, the ball is moving upward.  (b) For , we have and . Just before impact, the average velocity is approximately   So the ball is moving downward at approximately m\/sec just before hitting the ground.  (c) For , we have and . Therefore the average velocity is approximately   So immediately after the bounce, the ball is moving upward at approximately m\/sec.  (d) The left-hand derivative at is approximately , while the right-hand derivative is . Since these values are not equal, the derivative does not exist at . Graphically, the function has a sharp corner at the bounce point.   "
},
{
  "id": "ex-difference-quotient-rational-position",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-difference-quotient-rational-position",
  "type": "Example",
  "number": "2.8.5",
  "title": "",
  "body": "  Let be the position of an object at time . Here is measured in meters and is measured in seconds.  (a) Simplify the following difference quotient as much as possible:   (b) Use your result from part (a) and the limit definition of the derivative to calculate the instantaneous velocity of the object at time .   (c) What is the object's velocity at second?    (a) First compute   So the difference quotient becomes   Combine the fractions over a common denominator:   After expanding and simplifying, this reduces to   (b) Now take the limit as :   (c) Evaluate at :   So the velocity at second is m\/s.   "
},
{
  "id": "ex-derivatives-multi",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-derivatives-multi",
  "type": "Example",
  "number": "2.8.6",
  "title": "",
  "body": "  Let . Evaluate the following:  (a)   (b)   (c)   (d)     (a) To find , we differentiate each term of the function.  Recall that , so we can apply the power rule to this term as well.   (b) To find , we substitute into the expression for :   (c) To find , we differentiate :   (d) To find , we substitute into the expression for :    "
},
{
  "id": "ex-derivative-ww-2",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-derivative-ww-2",
  "type": "Example",
  "number": "2.8.7",
  "title": "",
  "body": "  Let .  (a) Find .  (b) Find the equation of the tangent line to the graph of at the point where .  (c) Find the equation of the perpendicular line to the graph of at the point where .    (a) To find , we first need to find the derivative using the quotient rule. The quotient rule states that if , then In our case, let and . We compute: Now we can apply the quotient rule:  Now we substitute into the expression for to find :    (b) To find the equation of the tangent line to the graph of at the point where , we first need to find the coordinates of the point on the graph at . We compute: So the point of tangency is . The slope of the tangent line is given by . Using the point-slope form of a line, we can write the equation of the tangent line as: Simplifying this gives:   (c) To find the equation of the perpendicular line to the graph of at the point where , we first need to find the slope of the perpendicular line. The slope of the tangent line is , so the slope of the perpendicular line is the negative reciprocal of , which is . Using the point-slope form of a line again, we can write the equation of the perpendicular line as: Simplifying this gives:    "
},
{
  "id": "ex-deriv-values-at-point",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-deriv-values-at-point",
  "type": "Example",
  "number": "2.8.8",
  "title": "Using Given Function and Derivative Values.",
  "body": " Using Given Function and Derivative Values   Suppose and are differentiable functions and that   Evaluate the following derivatives at .  (a)  (b)  (c)  (d)    (a) We use the linearity of differentiation:   (b) We use the product rule:   (c) We use the quotient rule:   (d) Again, we use the quotient rule:    "
},
{
  "id": "ex-horizontal-tangents-poly",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-horizontal-tangents-poly",
  "type": "Example",
  "number": "2.8.9",
  "title": "",
  "body": "  Find all points of the graph of that have horizontal tangents.    Horizontal tangents occur where the slope (derivative) is zero. So we are looking to solve the equation .   Set  , so or .  Therefore, the horizontal tangents occur at and . To find the corresponding points on the graph, we compute:   Thus, the points of the graph that have horizontal tangents are and .   "
},
{
  "id": "ex-derivative-triple-product",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-derivative-triple-product",
  "type": "Example",
  "number": "2.8.10",
  "title": "",
  "body": "  Find the derivative of the given function.     There are multiple ways to approach this problem. One way is to first simplify the expression for and then differentiate. Another way is to apply the product rule multiple times without simplifying first. Here, we will take the simpler route and simplify first.  First, we can rewrite as:   Now we can apply the product rule to differentiate with respect to :   Although we can continue to simplify this expression, it is often acceptable to leave the derivative in this form, especially if the problem does not explicitly ask for further simplification.   "
},
{
  "id": "ex-tangent-line-parameters",
  "level": "2",
  "url": "sec-derivative-ww.html#ex-tangent-line-parameters",
  "type": "Example",
  "number": "2.8.11",
  "title": "",
  "body": "  Is there a point on the curve where the tangent line has the equation . If so, find the values of and the point of tangency.    The slope of the line is .  The derivative of the curve is .  For the line to be tangent to the curve, their slopes must be equal at some point. So we set:   The point of tangency must also be on both curves. So we know that:   Solving for gives:   Substituting back into (either) curve equation we get:   And substituting this value back into our equation gives:   Thus, the value of is , and the point of tangency is . You can verify in Desmos that the line is indeed tangent to the curve at the point .   "
},
{
  "id": "sec-derivApp-motion",
  "level": "1",
  "url": "sec-derivApp-motion.html",
  "type": "Section",
  "number": "3.1",
  "title": "Motion in Physics",
  "body": " Motion in Physics    Calculate velocity, acceleration, and jerk using derivatives. Include units and interpret results in real-world context.  Move fluently between multiple representations of motion (formula, table, and graph), including estimating derivatives from graphs or tables and interpreting slopes as rates of change.  Determine when an object is moving in the positive or negative direction by analyzing the sign of the velocity, and identify times when the object is at rest ( ).  Use acceleration to describe how velocity is changing, and compute acceleration values either by differentiating or by finding slopes on a velocity graph.  Decide when an object is speeding up or slowing down by comparing the signs of velocity and acceleration, and express the answer in interval notation.  Interpret and solve motion problems that require setting up and solving equations or inequalities (for example, finding when height is above a given value, when velocity is positive, or when speed exceeds a threshold).     Prerequisite Review  In this section there are several types of problems that require us to be able to solve inequalities. Problems such as determining when an object is moving in the positive direction, or speeding up, or when it has a negative acceleration.  If you feel a bit out of practice with inequalities, it may be helpful to revisit those ideas via the Precalculus Review: Inequalities section before proceeding.   Mathematics solves problems partly with technical tools, but also by translating between different levels of meaning. Many problems begin in a physical or geometric setting. We often translate them into a numerical or algebraic setting where our tools apply, then translate the result back to the original context.  Our key concept so far has been the derivative . For a function , the derivative has several complementary meanings.    Physical:  is the rate of change of with respect to . For a specific input , describes how fast changes near .   Geometric:  is the slope of the tangent line to the graph at .   Numerical: we approximate the derivative using a difference quotient where is small. As , the average rate of change approaches the instantaneous rate of change.   Algebraic: we compute derivatives from formulas using derivative rules and known basic derivatives. Occasionally we return to the definition     The Basics of Motion  Many applications of derivatives involve motion. In this section, all quantities are functions of time . Here is a basic set of definitions:   Position, Velocity, Acceleration, and Jerk   Let denote the position of an object at time , measured relative to a fixed reference point. The following quantities describe different aspects of the object’s motion:    Position  : the distance past a reference point (for example, in feet) at time seconds.   Velocity  : the rate of change of position, measured in feet per second. Velocity may be negative if the object is moving in the negative direction. The speed of the object is the absolute value of velocity, .   Acceleration  : the rate of change of velocity, measured in feet per second squared. A useful benchmark is one gee , approximately ft\/sec , which is the acceleration due to gravity near Earth’s surface.   Jerk  : the rate of change of acceleration, measured in feet per second cubed.       A ball is thrown straight up from a height of 6 feet with an initial velocity of 64 ft\/sec. Its vertical position (height) at time seconds is modeled by .    Find formulas for the ball’s velocity and acceleration .    Differentiating gives and       When is does the ball have a velocity of zero? What is special about that moment in terms of the ball's height?    The ball has zero velocity when Solving gives seconds. At that time, the ball reaches its maximum height before falling back down.      When does the ball hit the ground? What are its velocity and acceleration right before it strikes the ground?    The ball hits the ground when : Or equivalently, Solving this quadratic equation (using the quadratic formula) gives Since time must be positive, we take the larger solution: seconds (approximately 4.1 seconds).  The velocity just before impact is (approximately -67 ft\/sec, indicating downward motion).  The acceleration is constant: at all times, including right before the ball strikes the ground.      The graph of in is a downward-opening parabola in , representing height over time. It is not the full two-dimensional flight path of the ball, since horizontal motion is ignored in this model.     Consider the velocity graph of a particle moving along a line given below.   Velocity graph for a particle moving along a line.   A graph of velocity versus time for a particle moving along a line. At time 0, the velocity is 4. From time 0 to time 2, the velocity decreases linearly from 4 to 1. From time 2 to time 4, the velocity remains constant at 1. From time 4 to time 6, the velocity decreases linearly from 1 to negative 1, crossing zero at time 5.    Use this to answer the following questions:     When is the particle moving at a constant speed? Explain how you know.    The particle is moving at a constant speed from time to . In interval notation this is . This is because the velocity graph is flat (horizontal) during this interval, indicating that the velocity is not changing.      When is the particle changing direction? Explain how you know.    The particle is changing direction at time . This is because the velocity graph crosses the -axis at this time, indicating that the velocity changes from positive to negative. A change in the sign of velocity indicates a change in direction of motion.      What is the acceleration of the particle at time ?    The acceleration at time is the slope of the velocity graph at that time. From the graph, we see that from to , the velocity decreases linearly from 4 to 1. The slope of this line segment is Therefore, the acceleration at time is units per second squared.     Now that we have reviewed some of the basic concepts of motion, let's move on to a more advanced topic.    Speeding Up and Slowing Down  Before we proceed, it is important to emphasize the difference between velocity and speed. An object is said to be speeding up when its speed is increasing, and slowing down when its speed is decreasing. Let's consider the following example to illustrate this concept before we get our main rule for this section.    Consider the following situations. In each case, determine whether the particle is speeding up or slowing down.     The velocity of a particle is initially m\/sec and it increases to m\/sec.    Since speed is the absolute value of velocity, the speed changes from m\/sec to m\/sec. Because the speed is increasing, the particle is speeding up.      The velocity of a particle is initially m\/sec and it decreases to m\/sec.    Since speed is the absolute value of velocity, the speed changes from m\/sec to m\/sec. Because the speed is decreasing, the particle is slowing down.      The velocity of a particle is initially m\/sec and it decreases to m\/sec.    Since speed is the absolute value of velocity, the speed changes from m\/sec to m\/sec. Because the speed is increasing, the particle is speeding up.      The velocity of a particle is initially m\/sec and it increases to m\/sec.    Since speed is the absolute value of velocity, the speed changes from m\/sec to m\/sec. Because the speed is decreasing, the particle is slowing down.      In summary it is not enough to know whether the velocity is increasing or decreasing to determine if the object is speeding up or slowing down. One must also consider the sign of the velocity.   Now let's summarize this information as a theorem:   Speeding Up and Slowing Down     An object is speeding up when its velocity and acceleration have the same sign (either both positive or both negative).  An object is slowing down when its velocity and acceleration have opposite signs (one is positive and the other is negative).      Justification  If the velocity is positive then it is the same as speed. Thus if the acceleration is also positive then the velocity is increasing which means the speed is increasing.  If the velocity is negative then the speed is the opposite of velocity. Thus if the acceleration is also negative then the velocity is decreasing which means the speed is increasing.  The other two cases are similar.      Suppose an object has velocity . Determine when the object is speeding up and when it is slowing down. Express your answers in interval notation.    First let's find the sign of the velocity. We have Using the Test Point Method for Inequalities , we find that the velocity is zero at and . These points divide the number line into three intervals: , , and . Choosing test points from each interval, we find:  For in , , so velocity is positive on this interval.  For in , , so velocity is negative on this interval.  For in , , so velocity is positive on this interval.       A figure showing the sign of the velocity function on the number line.        Next, we find the acceleration by differentiating the velocity: Setting the acceleration equal to zero gives , or . This divides the number line into two intervals: and . Choosing test points from each interval, we find:  For in , , so acceleration is negative on this interval.  For in , , so acceleration is positive on this interval.       A figure showing the sign of the acceleration function on the number line.        Now we can determine when the object is speeding up and when it is slowing down by comparing the signs of velocity and acceleration:     A figure showing the sign of the velocity function and the acceleration function together on one number line.          On , velocity is positive and acceleration is negative, so the object is slowing down.  On , velocity is negative and acceleration is negative, so the object is speeding up.  On , velocity is negative and acceleration is positive, so the object is slowing down.  On , velocity is positive and acceleration is positive, so the object is speeding up.    Therefore, the object is speeding up on and slowing down on .        Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Worked-Out Problems for Motion in Physics      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answers.     If is positive on , then is increasing on .     True. If the velocity is positive, the position function is increasing.      For , the ball reaches its maximum height at seconds because .     False. The velocity function is . Setting , we solve: Therefore, the ball reaches its maximum height at seconds, not seconds.      If at a time , then the object must change direction at .     False. When the velocity is zero, the object is momentarily at rest. However, this does not necessarily mean that the object changes direction at that time. For example, if the velocity changes from positive to zero and then back to positive, the object does not change direction.      If is decreasing on an interval, then the object is slowing down on that interval.     False. If the velocity is decreasing, it means that the acceleration is negative. However, whether the object is slowing down or speeding up depends on the sign of the velocity as well. If the velocity is positive and decreasing, the object is slowing down. But if the velocity is negative and decreasing, the object is actually speeding up.      If at a time , then the object must be at rest (even momentarily) at .     False. When the acceleration is zero, it means that the velocity is not changing at that time. However, this does not necessarily mean that the object is at rest. The object could be moving with a constant velocity.      If and , then the object is speeding up at .     True. Since the velocity is positive, the object is moving in the positive direction. Since the acceleration is also positive, the velocity is increasing. Therefore, the speed of the object is increasing, which means the object is speeding up.       An object moving along a line has position function . The object is speeding up on the interval .     False. First, we find the velocity and acceleration functions:  Next, we determine the signs of velocity and acceleration on the interval . Setting , we solve: Thus, on the interval , the velocity is positive on and negative on . Setting , we solve: Thus, on the interval , the acceleration is negative on and positive on . Therefore, the object is slowing down on and , and speeding up on . Since the object is not speeding up on the entire interval , the statement is false.      "
},
{
  "id": "sec-derivApp-motion-2",
  "level": "2",
  "url": "sec-derivApp-motion.html#sec-derivApp-motion-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "  Calculate velocity, acceleration, and jerk using derivatives. Include units and interpret results in real-world context.  Move fluently between multiple representations of motion (formula, table, and graph), including estimating derivatives from graphs or tables and interpreting slopes as rates of change.  Determine when an object is moving in the positive or negative direction by analyzing the sign of the velocity, and identify times when the object is at rest ( ).  Use acceleration to describe how velocity is changing, and compute acceleration values either by differentiating or by finding slopes on a velocity graph.  Decide when an object is speeding up or slowing down by comparing the signs of velocity and acceleration, and express the answer in interval notation.  Interpret and solve motion problems that require setting up and solving equations or inequalities (for example, finding when height is above a given value, when velocity is positive, or when speed exceeds a threshold).   "
},
{
  "id": "rem-derivApp-motion-inequalities",
  "level": "2",
  "url": "sec-derivApp-motion.html#rem-derivApp-motion-inequalities",
  "type": "Warning",
  "number": "3.1.1",
  "title": "Prerequisite Review.",
  "body": " Prerequisite Review  In this section there are several types of problems that require us to be able to solve inequalities. Problems such as determining when an object is moving in the positive direction, or speeding up, or when it has a negative acceleration.  If you feel a bit out of practice with inequalities, it may be helpful to revisit those ideas via the Precalculus Review: Inequalities section before proceeding.  "
},
{
  "id": "sec-derivApp-motion-5",
  "level": "2",
  "url": "sec-derivApp-motion.html#sec-derivApp-motion-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivative "
},
{
  "id": "def-motion-quantities",
  "level": "2",
  "url": "sec-derivApp-motion.html#def-motion-quantities",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Position, Velocity, Acceleration, and Jerk.",
  "body": " Position, Velocity, Acceleration, and Jerk   Let denote the position of an object at time , measured relative to a fixed reference point. The following quantities describe different aspects of the object’s motion:    Position  : the distance past a reference point (for example, in feet) at time seconds.   Velocity  : the rate of change of position, measured in feet per second. Velocity may be negative if the object is moving in the negative direction. The speed of the object is the absolute value of velocity, .   Acceleration  : the rate of change of velocity, measured in feet per second squared. A useful benchmark is one gee , approximately ft\/sec , which is the acceleration due to gravity near Earth’s surface.   Jerk  : the rate of change of acceleration, measured in feet per second cubed.    "
},
{
  "id": "ex-ball-motion-derivatives",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-ball-motion-derivatives",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  A ball is thrown straight up from a height of 6 feet with an initial velocity of 64 ft\/sec. Its vertical position (height) at time seconds is modeled by .    Find formulas for the ball’s velocity and acceleration .    Differentiating gives and       When is does the ball have a velocity of zero? What is special about that moment in terms of the ball's height?    The ball has zero velocity when Solving gives seconds. At that time, the ball reaches its maximum height before falling back down.      When does the ball hit the ground? What are its velocity and acceleration right before it strikes the ground?    The ball hits the ground when : Or equivalently, Solving this quadratic equation (using the quadratic formula) gives Since time must be positive, we take the larger solution: seconds (approximately 4.1 seconds).  The velocity just before impact is (approximately -67 ft\/sec, indicating downward motion).  The acceleration is constant: at all times, including right before the ball strikes the ground.    "
},
{
  "id": "rem-trajectory-vs-height",
  "level": "2",
  "url": "sec-derivApp-motion.html#rem-trajectory-vs-height",
  "type": "Remark",
  "number": "3.1.4",
  "title": "",
  "body": " The graph of in is a downward-opening parabola in , representing height over time. It is not the full two-dimensional flight path of the ball, since horizontal motion is ignored in this model.  "
},
{
  "id": "ex-velocity-particle-graph",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-velocity-particle-graph",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "  Consider the velocity graph of a particle moving along a line given below.   Velocity graph for a particle moving along a line.   A graph of velocity versus time for a particle moving along a line. At time 0, the velocity is 4. From time 0 to time 2, the velocity decreases linearly from 4 to 1. From time 2 to time 4, the velocity remains constant at 1. From time 4 to time 6, the velocity decreases linearly from 1 to negative 1, crossing zero at time 5.    Use this to answer the following questions:     When is the particle moving at a constant speed? Explain how you know.    The particle is moving at a constant speed from time to . In interval notation this is . This is because the velocity graph is flat (horizontal) during this interval, indicating that the velocity is not changing.      When is the particle changing direction? Explain how you know.    The particle is changing direction at time . This is because the velocity graph crosses the -axis at this time, indicating that the velocity changes from positive to negative. A change in the sign of velocity indicates a change in direction of motion.      What is the acceleration of the particle at time ?    The acceleration at time is the slope of the velocity graph at that time. From the graph, we see that from to , the velocity decreases linearly from 4 to 1. The slope of this line segment is Therefore, the acceleration at time is units per second squared.    "
},
{
  "id": "ex-speeding-up-slowing-down-01",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-speeding-up-slowing-down-01",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "  Consider the following situations. In each case, determine whether the particle is speeding up or slowing down.     The velocity of a particle is initially m\/sec and it increases to m\/sec.    Since speed is the absolute value of velocity, the speed changes from m\/sec to m\/sec. Because the speed is increasing, the particle is speeding up.      The velocity of a particle is initially m\/sec and it decreases to m\/sec.    Since speed is the absolute value of velocity, the speed changes from m\/sec to m\/sec. Because the speed is decreasing, the particle is slowing down.      The velocity of a particle is initially m\/sec and it decreases to m\/sec.    Since speed is the absolute value of velocity, the speed changes from m\/sec to m\/sec. Because the speed is increasing, the particle is speeding up.      The velocity of a particle is initially m\/sec and it increases to m\/sec.    Since speed is the absolute value of velocity, the speed changes from m\/sec to m\/sec. Because the speed is decreasing, the particle is slowing down.    "
},
{
  "id": "rem-speeding-up-slowing-down",
  "level": "2",
  "url": "sec-derivApp-motion.html#rem-speeding-up-slowing-down",
  "type": "Remark",
  "number": "3.1.8",
  "title": "",
  "body": " In summary it is not enough to know whether the velocity is increasing or decreasing to determine if the object is speeding up or slowing down. One must also consider the sign of the velocity.  "
},
{
  "id": "thm-speeding-up-slowing-down",
  "level": "2",
  "url": "sec-derivApp-motion.html#thm-speeding-up-slowing-down",
  "type": "Theorem",
  "number": "3.1.9",
  "title": "Speeding Up and Slowing Down.",
  "body": " Speeding Up and Slowing Down     An object is speeding up when its velocity and acceleration have the same sign (either both positive or both negative).  An object is slowing down when its velocity and acceleration have opposite signs (one is positive and the other is negative).      Justification  If the velocity is positive then it is the same as speed. Thus if the acceleration is also positive then the velocity is increasing which means the speed is increasing.  If the velocity is negative then the speed is the opposite of velocity. Thus if the acceleration is also negative then the velocity is decreasing which means the speed is increasing.  The other two cases are similar.   "
},
{
  "id": "ex-speeding-up-slowing-down2",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-speeding-up-slowing-down2",
  "type": "Example",
  "number": "3.1.10",
  "title": "",
  "body": "  Suppose an object has velocity . Determine when the object is speeding up and when it is slowing down. Express your answers in interval notation.    First let's find the sign of the velocity. We have Using the Test Point Method for Inequalities , we find that the velocity is zero at and . These points divide the number line into three intervals: , , and . Choosing test points from each interval, we find:  For in , , so velocity is positive on this interval.  For in , , so velocity is negative on this interval.  For in , , so velocity is positive on this interval.       A figure showing the sign of the velocity function on the number line.        Next, we find the acceleration by differentiating the velocity: Setting the acceleration equal to zero gives , or . This divides the number line into two intervals: and . Choosing test points from each interval, we find:  For in , , so acceleration is negative on this interval.  For in , , so acceleration is positive on this interval.       A figure showing the sign of the acceleration function on the number line.        Now we can determine when the object is speeding up and when it is slowing down by comparing the signs of velocity and acceleration:     A figure showing the sign of the velocity function and the acceleration function together on one number line.          On , velocity is positive and acceleration is negative, so the object is slowing down.  On , velocity is negative and acceleration is negative, so the object is speeding up.  On , velocity is negative and acceleration is positive, so the object is slowing down.  On , velocity is positive and acceleration is positive, so the object is speeding up.    Therefore, the object is speeding up on and slowing down on .   "
},
{
  "id": "ex-derivApp-motion-tf-12",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-derivApp-motion-tf-12",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If is positive on , then is increasing on .     True. If the velocity is positive, the position function is increasing.   "
},
{
  "id": "ex-derivApp-motion-tf-14",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-derivApp-motion-tf-14",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  For , the ball reaches its maximum height at seconds because .     False. The velocity function is . Setting , we solve: Therefore, the ball reaches its maximum height at seconds, not seconds.   "
},
{
  "id": "ex-derivApp-motion-tf-03",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-derivApp-motion-tf-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If at a time , then the object must change direction at .     False. When the velocity is zero, the object is momentarily at rest. However, this does not necessarily mean that the object changes direction at that time. For example, if the velocity changes from positive to zero and then back to positive, the object does not change direction.   "
},
{
  "id": "ex-derivApp-motion-tf-08",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-derivApp-motion-tf-08",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If is decreasing on an interval, then the object is slowing down on that interval.     False. If the velocity is decreasing, it means that the acceleration is negative. However, whether the object is slowing down or speeding up depends on the sign of the velocity as well. If the velocity is positive and decreasing, the object is slowing down. But if the velocity is negative and decreasing, the object is actually speeding up.   "
},
{
  "id": "ex-derivApp-motion-tf-06",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-derivApp-motion-tf-06",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If at a time , then the object must be at rest (even momentarily) at .     False. When the acceleration is zero, it means that the velocity is not changing at that time. However, this does not necessarily mean that the object is at rest. The object could be moving with a constant velocity.   "
},
{
  "id": "ex-derivApp-motion-tf-04",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-derivApp-motion-tf-04",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If and , then the object is speeding up at .     True. Since the velocity is positive, the object is moving in the positive direction. Since the acceleration is also positive, the velocity is increasing. Therefore, the speed of the object is increasing, which means the object is speeding up.   "
},
{
  "id": "ex-derivApp-motion-tf-102",
  "level": "2",
  "url": "sec-derivApp-motion.html#ex-derivApp-motion-tf-102",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  An object moving along a line has position function . The object is speeding up on the interval .     False. First, we find the velocity and acceleration functions:  Next, we determine the signs of velocity and acceleration on the interval . Setting , we solve: Thus, on the interval , the velocity is positive on and negative on . Setting , we solve: Thus, on the interval , the acceleration is negative on and positive on . Therefore, the object is slowing down on and , and speeding up on . Since the object is not speeding up on the entire interval , the statement is false.   "
},
{
  "id": "sec-derivApp-related",
  "level": "1",
  "url": "sec-derivApp-related.html",
  "type": "Section",
  "number": "3.2",
  "title": "Related Rates",
  "body": " Related Rates    Identify all relevant quantities in a related rates problem, distinguishing between constants, variables, known rates, and unknown rates.  Translate a physical or geometric situation into an equation relating the variables using appropriate formulas.  Create and label an appropriate diagram to support problem setup and reasoning.  Apply differentiation rules to a relationship involving multiple time-dependent quantities using the chain rule and possibly implicit differentiation.     Introduction to Related Rates  Many real-world situations involve quantities that change over time. In some cases, the rates of change of certain quantities are known, and we want to find the rates of change of other related quantities. These problems are called related rates problems.  The key steps in solving related rates problems are:   Steps for Solving Related Rates Problems   Establish a relationship between the variables using geometry or known formulas.  Differentiate the relationship with respect to time, applying the Chain Rule as needed.  Substituting known values and rates to find the unknown rate.     Related rates problems often involve geometric relationships, such as those found in triangles, circles, or other shapes. Some students find that every problem feels a bit different, but the overall method remains consistent across various scenarios.  Remember that our formula sheet, included in Appendix includes many geometric formulas that can be useful in setting up these problems and that many of the quantities involved may depend on time, even if not explicitly stated (so the chain rule will often be needed).   Now that we have the technique outlined, let's explore some examples to see how these steps are applied in practice.    Select Examples   Spill Example   A stream of water spreads a circular puddle on the floor. If the puddle is 1 meter across and the stream increases the area at a rate of m \/min, how quickly is the puddle's radius widening at that instant?   A circular puddle grows as water spreads outward.   An animation on a coordinate grid showing a circle centered at the origin expanding outward over time, modeling a circular puddle that is widening. The circle represents the puddle’s boundary and grows smoothly, indicating increasing radius and diameter. The situation corresponds to the instant when the puddle’s diameter is 1 meter and the area is increasing at 2 square meters per minute, and the goal is to determine how fast the radius is increasing at that instant.      We can see in this problem that they give us the rate of change of the area of the puddle, and we are asked to find the rate of change of the radius, these are the two rates we are try to relate together in this problem.  So for this problem, since the puddle is circular, we can use the formula for the area of a circle, which is , where is the radius of the circle.  Since both the area and the radius are changing over time, we can express them as functions of time: and .  We are given that the area is increasing at a rate of m \/min, which means m \/min. We are asked to find how quickly the radius is widening, which means we need to find .  To find , we can differentiate the area formula with respect to time using the Chain Rule:   Now we can solve for :   Now we will take the to be the time where the puddle is 1 meter across (so ). Recall also we know that . So therefore:   So the radius is widening at a rate of m\/min when the puddle is 1 meter across.     Pulley Example   Consider a weight hanging from a rope that goes up to a pulley 10 ft above the floor and then down to your hand, which is 3 ft above the floor and 15 ft horizontally from the pulley. If you walk away from the pulley at ft\/sec, how fast will the weight rise?   A pulley system with a hanging weight and a rope held by a person walking away from the pulley.   An animated diagram on a grid showing a pulley mounted above the floor with a rope passing over it. On the left, a weight hangs vertically from the pulley down to the floor. On the right, a person holds the other end of the rope at a point 3 feet above the floor and moves horizontally to the right. An arrow indicates the person walking away from the pulley at a constant speed of 2 feet per second. As the person moves farther away, the rope segment from the pulley to the person lengthens and the vertical rope segment shortens, illustrating that the hanging weight is rising.      First let's define our variables. Let be the horizontal distance from the pulley to your hand, let be the length of the rope segment from the pulley to your hand, and finally let be the height (vertical distance) from your hand to the pulley.  Since your hand is 3 ft above the floor and the pulley is 10 ft above the floor, the height between the two will be a constant can be expressed as:   So no matter the time, is constant. Also notice that because the rope is connected to the weight, as the rope length increases, the height of the weight will decrease at the same rate. So if we can find , we will also have found the rate at which the weight is rising.  Finally, notice that these three variables ( , , and ) form a right triangle with the hypotenuse being the rope segment from the pulley to your hand. So we can use the Pythagorean theorem to get:   Now we can differentiate both sides with respect to time using the Chain Rule:   Now we can solve for :   Next we can let be the time of interest (when we are 15 ft from the pulley), so and .  Also, at time , we can compute using the Pythagorean theorem:   Substituting into our expression for :   So the rope length is increasing at a rate of ft\/sec when you are 15 ft from the pulley which means that the box is rising at the same rate of ft\/sec.     Plug in the current values only at the last step. If you substitute before differentiating, you turn variables into constants and their derivatives become zero.    Searchlight Example   A searchlight shines along a wall 20 meters away. If the light is currently away from pointing directly at the wall and the light is rotating at per second, what is the speed of the bright spot moving along the wall at that instant?   We are intentionally not providing a figure for this example (until you look at the solution). Try drawing your own diagram to help visualize the situation. This is an important skill when solving related rates problems that may be required for quizzes or exams.     Here is a sketch of the situation:   This diagram models the related-rates problem stated above asking how fast the illuminated spot on the wall is moving upward at that instant.   A diagram on a grid showing a vertical wall on the left and a searchlight on the ground to the right. A straight beam of light extends from the searchlight to a point on the wall. At the searchlight, the beam makes a 30 degree angle with the horizontal ground. A curved arrow at the searchlight indicates that the beam is rotating upward at a rate of 5 degrees per second. The illuminated point on the wall is above the ground and moves vertically as the beam rotates, illustrating the changing height of the light spot on the wall.    Let be the angle of the light beam from the horizontal and be the distance of the spot from the point on the wall closest to the light. We are given that at some time of interest (which we will call ) that and , and we want to find .  Since the situation is about a right triangle formed by the light beam, the wall, and the ground, we have several options to consider (like sine, cosine, or tangent or the pythagorean theorem). However, to relate the angle and the distance along the wall we should use the tangent function. This gives:   Differentiating both sides with respect to time:   Solving for :   Now we can substitute in our known values at :   However, because the trig differentiation formulas are only valid for radian measure (See ), we need to convert he angle and angular speed to radians before substituting:   Now substituting in:   Since , we have , so   So the speed of the bright spot moving along the wall at that instant is m\/sec.   The problem asks for speed , so report . If the rotation direction were opposite, the derivative would change sign but the speed would be the same.    If you mistakenly use in degrees\/sec inside the derivative formula, the numerical answer will be wrong. Convert to radians\/sec before substituting.       Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Worked-Out Problems for Related Rates      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answers.     In any related rates problem, all quantities that change must be written as functions of time, even if time is not mentioned explicitly in the problem.     True . In related rates problems, all variables must be expressed as functions of time to properly apply the chain rule. It is possible that some quantities do not change (and thus are constants), but any quantity that does change must be treated as a function of time.      If a related rates problem asks for a speed , the final answer should be reported as a nonnegative value even if the derivative is negative.     True . Speed is defined as the magnitude of velocity, which is always nonnegative. Therefore, when a related rates problem asks for speed, the final answer should be reported as a nonnegative value, regardless of the sign of the derivative.      In a related rates problem involving a right triangle, the Pythagorean Theorem must be used to relate the variables before differentiating.     False . While the Pythagorean Theorem is often useful in related rates problems involving right triangles, it is not always necessary. Depending on the specific problem, other relationships such as trigonometric functions (sine, cosine, tangent) or geometric formulas may be more appropriate to relate the variables before differentiating.      If , then after differentiating with respect to time.     True . Differentiating both sides of the equation with respect to time using the chain rule gives:   This confirms that the statement is true.      A circle has radius meters at a certain instant. If the radius is increasing at m\/min, then the area is increasing at m \/min at that instant.     False . The area of a circle is given by the formula , where is the radius. To find the rate of change of the area with respect to time, we differentiate both sides with respect to time using the chain rule:   Substituting the given values m and m\/min into the equation for :   This shows that the area is increasing at m \/min, not m \/min as stated.      If the volume of a cube is increasing at cm \/sec when the side length is cm, then the side length is increasing at cm\/sec at that instant.     True . The volume of a cube is given by the formula , where is the side length. To find the rate of change of the side length with respect to time, we differentiate both sides with respect to time using the chain rule:   Substituting the given values cm \/sec and cm into the equation for :   This confirms that the side length is increasing at cm\/sec at that instant.      A ladder 10 ft long is leaning against a vertical wall. If the bottom of the ladder is sliding away from the wall at 1 ft\/sec, then the top of the ladder is sliding down the wall at 1 ft\/sec when the bottom of the ladder is 6 ft from the wall.     False . Let be the distance from the wall to the bottom of the ladder and be the height of the top of the ladder on the wall. The relationship between and is given by the Pythagorean theorem:   Differentiating both sides with respect to time:   Solving for :   At the instant when ft and ft\/sec, we can find using the Pythagorean theorem:   Substituting these values into the equation for :   This shows that the top of the ladder is sliding down the wall at a rate of ft\/sec, not 1 ft\/sec as stated.      If the radius of a sphere is increasing at a constant rate, then the volume of the sphere is also increasing at a constant rate.     False . The volume of a sphere is given by the formula . If the radius is increasing at a constant rate, the volume will not increase at a constant rate because the relationship between volume and radius is cubic. As the radius increases, the rate of change of the volume will also increase.  A simple example would be if (which has a constant rate of change of ), then , and the derivative is not constant.      "
},
{
  "id": "sec-derivApp-related-2",
  "level": "2",
  "url": "sec-derivApp-related.html#sec-derivApp-related-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "  Identify all relevant quantities in a related rates problem, distinguishing between constants, variables, known rates, and unknown rates.  Translate a physical or geometric situation into an equation relating the variables using appropriate formulas.  Create and label an appropriate diagram to support problem setup and reasoning.  Apply differentiation rules to a relationship involving multiple time-dependent quantities using the chain rule and possibly implicit differentiation.   "
},
{
  "id": "related-rates-intro-2",
  "level": "2",
  "url": "sec-derivApp-related.html#related-rates-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "related rates "
},
{
  "id": "strat-related-rates-steps",
  "level": "2",
  "url": "sec-derivApp-related.html#strat-related-rates-steps",
  "type": "Strategy",
  "number": "3.2.1",
  "title": "Steps for Solving Related Rates Problems.",
  "body": " Steps for Solving Related Rates Problems   Establish a relationship between the variables using geometry or known formulas.  Differentiate the relationship with respect to time, applying the Chain Rule as needed.  Substituting known values and rates to find the unknown rate.   "
},
{
  "id": "rem-related-rates-overview",
  "level": "2",
  "url": "sec-derivApp-related.html#rem-related-rates-overview",
  "type": "Remark",
  "number": "3.2.2",
  "title": "",
  "body": " Related rates problems often involve geometric relationships, such as those found in triangles, circles, or other shapes. Some students find that every problem feels a bit different, but the overall method remains consistent across various scenarios.  Remember that our formula sheet, included in Appendix includes many geometric formulas that can be useful in setting up these problems and that many of the quantities involved may depend on time, even if not explicitly stated (so the chain rule will often be needed).  "
},
{
  "id": "example-spill-radius",
  "level": "2",
  "url": "sec-derivApp-related.html#example-spill-radius",
  "type": "Example",
  "number": "3.2.3",
  "title": "Spill Example.",
  "body": " Spill Example   A stream of water spreads a circular puddle on the floor. If the puddle is 1 meter across and the stream increases the area at a rate of m \/min, how quickly is the puddle's radius widening at that instant?   A circular puddle grows as water spreads outward.   An animation on a coordinate grid showing a circle centered at the origin expanding outward over time, modeling a circular puddle that is widening. The circle represents the puddle’s boundary and grows smoothly, indicating increasing radius and diameter. The situation corresponds to the instant when the puddle’s diameter is 1 meter and the area is increasing at 2 square meters per minute, and the goal is to determine how fast the radius is increasing at that instant.      We can see in this problem that they give us the rate of change of the area of the puddle, and we are asked to find the rate of change of the radius, these are the two rates we are try to relate together in this problem.  So for this problem, since the puddle is circular, we can use the formula for the area of a circle, which is , where is the radius of the circle.  Since both the area and the radius are changing over time, we can express them as functions of time: and .  We are given that the area is increasing at a rate of m \/min, which means m \/min. We are asked to find how quickly the radius is widening, which means we need to find .  To find , we can differentiate the area formula with respect to time using the Chain Rule:   Now we can solve for :   Now we will take the to be the time where the puddle is 1 meter across (so ). Recall also we know that . So therefore:   So the radius is widening at a rate of m\/min when the puddle is 1 meter across.   "
},
{
  "id": "example-pulley",
  "level": "2",
  "url": "sec-derivApp-related.html#example-pulley",
  "type": "Example",
  "number": "3.2.5",
  "title": "Pulley Example.",
  "body": " Pulley Example   Consider a weight hanging from a rope that goes up to a pulley 10 ft above the floor and then down to your hand, which is 3 ft above the floor and 15 ft horizontally from the pulley. If you walk away from the pulley at ft\/sec, how fast will the weight rise?   A pulley system with a hanging weight and a rope held by a person walking away from the pulley.   An animated diagram on a grid showing a pulley mounted above the floor with a rope passing over it. On the left, a weight hangs vertically from the pulley down to the floor. On the right, a person holds the other end of the rope at a point 3 feet above the floor and moves horizontally to the right. An arrow indicates the person walking away from the pulley at a constant speed of 2 feet per second. As the person moves farther away, the rope segment from the pulley to the person lengthens and the vertical rope segment shortens, illustrating that the hanging weight is rising.      First let's define our variables. Let be the horizontal distance from the pulley to your hand, let be the length of the rope segment from the pulley to your hand, and finally let be the height (vertical distance) from your hand to the pulley.  Since your hand is 3 ft above the floor and the pulley is 10 ft above the floor, the height between the two will be a constant can be expressed as:   So no matter the time, is constant. Also notice that because the rope is connected to the weight, as the rope length increases, the height of the weight will decrease at the same rate. So if we can find , we will also have found the rate at which the weight is rising.  Finally, notice that these three variables ( , , and ) form a right triangle with the hypotenuse being the rope segment from the pulley to your hand. So we can use the Pythagorean theorem to get:   Now we can differentiate both sides with respect to time using the Chain Rule:   Now we can solve for :   Next we can let be the time of interest (when we are 15 ft from the pulley), so and .  Also, at time , we can compute using the Pythagorean theorem:   Substituting into our expression for :   So the rope length is increasing at a rate of ft\/sec when you are 15 ft from the pulley which means that the box is rising at the same rate of ft\/sec.   "
},
{
  "id": "rem-plug-in-last",
  "level": "2",
  "url": "sec-derivApp-related.html#rem-plug-in-last",
  "type": "Remark",
  "number": "3.2.7",
  "title": "",
  "body": " Plug in the current values only at the last step. If you substitute before differentiating, you turn variables into constants and their derivatives become zero.  "
},
{
  "id": "example-searchlight",
  "level": "2",
  "url": "sec-derivApp-related.html#example-searchlight",
  "type": "Example",
  "number": "3.2.8",
  "title": "Searchlight Example.",
  "body": " Searchlight Example   A searchlight shines along a wall 20 meters away. If the light is currently away from pointing directly at the wall and the light is rotating at per second, what is the speed of the bright spot moving along the wall at that instant?   We are intentionally not providing a figure for this example (until you look at the solution). Try drawing your own diagram to help visualize the situation. This is an important skill when solving related rates problems that may be required for quizzes or exams.     Here is a sketch of the situation:   This diagram models the related-rates problem stated above asking how fast the illuminated spot on the wall is moving upward at that instant.   A diagram on a grid showing a vertical wall on the left and a searchlight on the ground to the right. A straight beam of light extends from the searchlight to a point on the wall. At the searchlight, the beam makes a 30 degree angle with the horizontal ground. A curved arrow at the searchlight indicates that the beam is rotating upward at a rate of 5 degrees per second. The illuminated point on the wall is above the ground and moves vertically as the beam rotates, illustrating the changing height of the light spot on the wall.    Let be the angle of the light beam from the horizontal and be the distance of the spot from the point on the wall closest to the light. We are given that at some time of interest (which we will call ) that and , and we want to find .  Since the situation is about a right triangle formed by the light beam, the wall, and the ground, we have several options to consider (like sine, cosine, or tangent or the pythagorean theorem). However, to relate the angle and the distance along the wall we should use the tangent function. This gives:   Differentiating both sides with respect to time:   Solving for :   Now we can substitute in our known values at :   However, because the trig differentiation formulas are only valid for radian measure (See ), we need to convert he angle and angular speed to radians before substituting:   Now substituting in:   Since , we have , so   So the speed of the bright spot moving along the wall at that instant is m\/sec.   The problem asks for speed , so report . If the rotation direction were opposite, the derivative would change sign but the speed would be the same.    If you mistakenly use in degrees\/sec inside the derivative formula, the numerical answer will be wrong. Convert to radians\/sec before substituting.    "
},
{
  "id": "rr-tf-01",
  "level": "2",
  "url": "sec-derivApp-related.html#rr-tf-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  In any related rates problem, all quantities that change must be written as functions of time, even if time is not mentioned explicitly in the problem.     True . In related rates problems, all variables must be expressed as functions of time to properly apply the chain rule. It is possible that some quantities do not change (and thus are constants), but any quantity that does change must be treated as a function of time.   "
},
{
  "id": "rr-tf-16",
  "level": "2",
  "url": "sec-derivApp-related.html#rr-tf-16",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If a related rates problem asks for a speed , the final answer should be reported as a nonnegative value even if the derivative is negative.     True . Speed is defined as the magnitude of velocity, which is always nonnegative. Therefore, when a related rates problem asks for speed, the final answer should be reported as a nonnegative value, regardless of the sign of the derivative.   "
},
{
  "id": "rr-tf-08",
  "level": "2",
  "url": "sec-derivApp-related.html#rr-tf-08",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  In a related rates problem involving a right triangle, the Pythagorean Theorem must be used to relate the variables before differentiating.     False . While the Pythagorean Theorem is often useful in related rates problems involving right triangles, it is not always necessary. Depending on the specific problem, other relationships such as trigonometric functions (sine, cosine, tangent) or geometric formulas may be more appropriate to relate the variables before differentiating.   "
},
{
  "id": "rr-tf-09",
  "level": "2",
  "url": "sec-derivApp-related.html#rr-tf-09",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If , then after differentiating with respect to time.     True . Differentiating both sides of the equation with respect to time using the chain rule gives:   This confirms that the statement is true.   "
},
{
  "id": "rr-tf-11",
  "level": "2",
  "url": "sec-derivApp-related.html#rr-tf-11",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  A circle has radius meters at a certain instant. If the radius is increasing at m\/min, then the area is increasing at m \/min at that instant.     False . The area of a circle is given by the formula , where is the radius. To find the rate of change of the area with respect to time, we differentiate both sides with respect to time using the chain rule:   Substituting the given values m and m\/min into the equation for :   This shows that the area is increasing at m \/min, not m \/min as stated.   "
},
{
  "id": "rr-tf-15",
  "level": "2",
  "url": "sec-derivApp-related.html#rr-tf-15",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If the volume of a cube is increasing at cm \/sec when the side length is cm, then the side length is increasing at cm\/sec at that instant.     True . The volume of a cube is given by the formula , where is the side length. To find the rate of change of the side length with respect to time, we differentiate both sides with respect to time using the chain rule:   Substituting the given values cm \/sec and cm into the equation for :   This confirms that the side length is increasing at cm\/sec at that instant.   "
},
{
  "id": "rr-tf-12",
  "level": "2",
  "url": "sec-derivApp-related.html#rr-tf-12",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  A ladder 10 ft long is leaning against a vertical wall. If the bottom of the ladder is sliding away from the wall at 1 ft\/sec, then the top of the ladder is sliding down the wall at 1 ft\/sec when the bottom of the ladder is 6 ft from the wall.     False . Let be the distance from the wall to the bottom of the ladder and be the height of the top of the ladder on the wall. The relationship between and is given by the Pythagorean theorem:   Differentiating both sides with respect to time:   Solving for :   At the instant when ft and ft\/sec, we can find using the Pythagorean theorem:   Substituting these values into the equation for :   This shows that the top of the ladder is sliding down the wall at a rate of ft\/sec, not 1 ft\/sec as stated.   "
},
{
  "id": "rr-tf-03",
  "level": "2",
  "url": "sec-derivApp-related.html#rr-tf-03",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If the radius of a sphere is increasing at a constant rate, then the volume of the sphere is also increasing at a constant rate.     False . The volume of a sphere is given by the formula . If the radius is increasing at a constant rate, the volume will not increase at a constant rate because the relationship between volume and radius is cubic. As the radius increases, the rate of change of the volume will also increase.  A simple example would be if (which has a constant rate of change of ), then , and the derivative is not constant.   "
},
{
  "id": "sec-derivApp-linear",
  "level": "1",
  "url": "sec-derivApp-linear.html",
  "type": "Section",
  "number": "3.3",
  "title": "Linear Approximation and L’Hopital’s Rule",
  "body": " Linear Approximation and L'Hopital's Rule    Understand the idea of linearization (tangent line approximation) and recognize why it can be used to approximate a function near .  Recognize the purpose of linearization as a tool for simplifying complicated functions and interpreting the result in context.  Apply the linear approximation formula .  Recognize when L’Hôpital’s Rule applies, particularly for indeterminate forms and .  Apply L’Hôpital’s Rule in limit problems, including those that require up to two applications.     Linearization  One of the most useful applications of derivatives is linearization , which uses tangent lines to approximate the values of a function. Earlier, we interpreted the derivative at a point as the slope of the tangent line to a curve. Linearization builds on this idea by treating the tangent line as a stand-in for the function itself. When we focus on values of near a chosen point, the tangent line provides a simple and accurate approximation of the function.    Let be differentiable at . The linearization of at is the linear function   The graph of is the tangent line to at the point .    The idea is that when is close to , the curve and its tangent line have very similar values. So near .  To see this idea in action consider the GIF below which shows us zooming in on the curve and that the curve and tangent line become indistinguishable.    Zooming in on a curve near a point of tangency, illustrating how the graph of the function becomes indistinguishable from its tangent line at sufficiently small scales. This visual shows why using the linearization, the tangent line, is an effective strategy for estimating the function’s values at nearby -values.   An animated graph showing a red curve and a purple straight line touching at a single point. As the view zooms in closer to that point, the red curve and the purple line overlap more closely until they are nearly indistinguishable. This illustrates that near a point of tangency, a differentiable function behaves almost linearly, which justifies using the tangent line to approximate the function at nearby points.       Find the linearization of at . Use it to approximate and .    First let's build the linearization by computing and .   So therefore   Which gives the linearization at as   To approximate , notice that , so   Similarly, , so   Using a calculator, we find that and , so our approximations are quite close! Indeed the linearization provides a good estimate for values of near .      Use linear approximation to estimate .    Let and linearize at (since is close to ). We have and , so .   Therefore,   Again we can check with a calculator: , so our approximation is quite good!    Linearization gives us a powerful way to understand how functions behave near a point by replacing them with their tangent lines. This local linear behavior turns out to be especially useful when studying limits that initially appear undefined.    L’Hôpital’s Rule   L’Hôpital’s Rule (Informal Statement)   Suppose and are differentiable near (except possibly at ), and near . If   then   provided the limit on the right exists (or is infinite).    Formal Proof  A formal proof of L’Hôpital’s Rule requires something called the Cauchy Mean Value Theorem, along with a careful analysis of limits. This is beyond the scope of our class. However students interested in seeing a formal proof are encouraged to pursue a math major\/minor and take MTH 320 (or equivalent) where this proof is typically covered.    Idea of a Proof  We will focus on the case, that is where and . The case where both approach is similar  The linearizations of and at are    Since again, and .  Now as we have seen earlier, differentiable functions behave like their tangent lines when we are close to the point of tangency. Therefore, as , we have   Therefore, we can conclude that      We have previously called the expressions and \" meaningless expressions \". A more precise term for these expressions that you may encounter on the internet or other texts is indeterminate forms .  This is because these expressions do not have a well-defined value and must be evaluated on a case-by-case basis. We will see cases where evaluates to 2 but other cases where it evaluates to 5 or 0 or does not exist at all.     Compute .    As , we have and , so this is an indeterminate form . Apply L’Hôpital’s Rule:       Compute . (This requires two applications of L’Hôpital’s Rule.)    As , both and go to , so this is an indeterminate form . Apply L’Hôpital’s Rule:   This is still , so apply L’Hôpital’s Rule again:   Therefore, .      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Worked-Out Problems for Linear Approximation and L’Hopital’s Rule      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answers.     If is differentiable at , then the linearization gives an exact value of for all .   False. The linearization is only an approximation of near . It is not exact for all values of .     The linearization of at is .   True. We can verify this by computing and , so . Therefore, the linearization at is .     The limit can be evaluated using L’Hôpital’s Rule.   True. Although previously we have used geometric arguments to evaluate this limit, we can also apply L’Hôpital’s Rule since both the numerator and denominator approach 0 as . Applying L’Hôpital’s Rule gives .     Using linearization for at tells us that .   True. The linearization of at is . Evaluating at , we get: .     Using a linearization at gives us .   False. The linearization of at is . Evaluating at , we get: . This is not equal to .     Using a linearization at gives us .   True. The linearization of at is . Therefore, . Remember that for trigonometric functions, the angle must be in radians!      by L’Hôpital’s Rule.   True. Plugging in gives the indeterminate form . Applying L’Hôpital’s Rule, we get .      by L’Hôpital’s Rule.   True. Plugging in gives the indeterminate form . Applying L’Hôpital’s Rule, we get .      using L’Hôpital’s Rule.   True. Plugging in gives the indeterminate form . Applying L’Hôpital’s Rule, we get . When we attempt to plug in again, we still get the indeterminate form , so we apply L’Hôpital’s Rule again: . Therefore, the original limit is .      by L’Hôpital’s Rule.   False. Plugging in gives the indeterminate form . Applying L’Hôpital’s Rule, we get . When we attempt to plug in again, we get , which is undefined. Therefore, the limit does not exist.     Consider the table of values below   Evaluating yields .   False. As , we have and , so the limit evaluates to . Notice that L’Hôpital’s Rule does not apply here since the limit is not an indeterminate form.     Consider the graph below that shows and .   Two functions, and , both passing through the origin, shown together with their tangent lines at .   A coordinate plane showing two curves and their tangent lines at the origin. The red curve, labeled f of x, passes through the point (0,0). Its tangent line at x equals 0 is shown as a dashed red line with slope negative two. The blue curve, labeled g of x, also passes through the point (0,0). Its tangent line at x equals 0 is shown as a dashed blue line with slope three.    Then .   True. Since both functions pass through the origin, we have and , so this is an indeterminate form . Applying L’Hôpital’s Rule, we get Based on the slopes of the tangent lines shown in the graph.     "
},
{
  "id": "sec-derivApp-linear-2",
  "level": "2",
  "url": "sec-derivApp-linear.html#sec-derivApp-linear-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "  Understand the idea of linearization (tangent line approximation) and recognize why it can be used to approximate a function near .  Recognize the purpose of linearization as a tool for simplifying complicated functions and interpreting the result in context.  Apply the linear approximation formula .  Recognize when L’Hôpital’s Rule applies, particularly for indeterminate forms and .  Apply L’Hôpital’s Rule in limit problems, including those that require up to two applications.   "
},
{
  "id": "linearization-definition-2",
  "level": "2",
  "url": "sec-derivApp-linear.html#linearization-definition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearization "
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
  "id": "linearization-definition-6-1",
  "level": "2",
  "url": "sec-derivApp-linear.html#linearization-definition-6-1",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " Zooming in on a curve near a point of tangency, illustrating how the graph of the function becomes indistinguishable from its tangent line at sufficiently small scales. This visual shows why using the linearization, the tangent line, is an effective strategy for estimating the function’s values at nearby -values.   An animated graph showing a red curve and a purple straight line touching at a single point. As the view zooms in closer to that point, the red curve and the purple line overlap more closely until they are nearly indistinguishable. This illustrates that near a point of tangency, a differentiable function behaves almost linearly, which justifies using the tangent line to approximate the function at nearby points.   "
},
{
  "id": "ex-linearization-sqrt",
  "level": "2",
  "url": "sec-derivApp-linear.html#ex-linearization-sqrt",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Find the linearization of at . Use it to approximate and .    First let's build the linearization by computing and .   So therefore   Which gives the linearization at as   To approximate , notice that , so   Similarly, , so   Using a calculator, we find that and , so our approximations are quite close! Indeed the linearization provides a good estimate for values of near .   "
},
{
  "id": "ex-linearization-exp-01",
  "level": "2",
  "url": "sec-derivApp-linear.html#ex-linearization-exp-01",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Use linear approximation to estimate .    Let and linearize at (since is close to ). We have and , so .   Therefore,   Again we can check with a calculator: , so our approximation is quite good!   "
},
{
  "id": "thm-lhopital",
  "level": "2",
  "url": "sec-derivApp-linear.html#thm-lhopital",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "L’Hôpital’s Rule (Informal Statement).",
  "body": " L’Hôpital’s Rule (Informal Statement)   Suppose and are differentiable near (except possibly at ), and near . If   then   provided the limit on the right exists (or is infinite).    Formal Proof  A formal proof of L’Hôpital’s Rule requires something called the Cauchy Mean Value Theorem, along with a careful analysis of limits. This is beyond the scope of our class. However students interested in seeing a formal proof are encouraged to pursue a math major\/minor and take MTH 320 (or equivalent) where this proof is typically covered.    Idea of a Proof  We will focus on the case, that is where and . The case where both approach is similar  The linearizations of and at are    Since again, and .  Now as we have seen earlier, differentiable functions behave like their tangent lines when we are close to the point of tangency. Therefore, as , we have   Therefore, we can conclude that    "
},
{
  "id": "rem-lhopital-indeterminate-forms",
  "level": "2",
  "url": "sec-derivApp-linear.html#rem-lhopital-indeterminate-forms",
  "type": "Remark",
  "number": "3.3.6",
  "title": "",
  "body": " We have previously called the expressions and \" meaningless expressions \". A more precise term for these expressions that you may encounter on the internet or other texts is indeterminate forms .  This is because these expressions do not have a well-defined value and must be evaluated on a case-by-case basis. We will see cases where evaluates to 2 but other cases where it evaluates to 5 or 0 or does not exist at all.  "
},
{
  "id": "ex-lhopital-ln-over-xminus1",
  "level": "2",
  "url": "sec-derivApp-linear.html#ex-lhopital-ln-over-xminus1",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": "  Compute .    As , we have and , so this is an indeterminate form . Apply L’Hôpital’s Rule:    "
},
{
  "id": "ex-lhopital-exp-over-x2",
  "level": "2",
  "url": "sec-derivApp-linear.html#ex-lhopital-exp-over-x2",
  "type": "Example",
  "number": "3.3.8",
  "title": "",
  "body": "  Compute . (This requires two applications of L’Hôpital’s Rule.)    As , both and go to , so this is an indeterminate form . Apply L’Hôpital’s Rule:   This is still , so apply L’Hôpital’s Rule again:   Therefore, .   "
},
{
  "id": "eg-derivApp-linear-tf-3",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If is differentiable at , then the linearization gives an exact value of for all .   False. The linearization is only an approximation of near . It is not exact for all values of .  "
},
{
  "id": "eg-derivApp-linear-tf-4",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  The linearization of at is .   True. We can verify this by computing and , so . Therefore, the linearization at is .  "
},
{
  "id": "eg-derivApp-linear-tf-5",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  The limit can be evaluated using L’Hôpital’s Rule.   True. Although previously we have used geometric arguments to evaluate this limit, we can also apply L’Hôpital’s Rule since both the numerator and denominator approach 0 as . Applying L’Hôpital’s Rule gives .  "
},
{
  "id": "eg-derivApp-linear-tf-6",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Using linearization for at tells us that .   True. The linearization of at is . Evaluating at , we get: .  "
},
{
  "id": "eg-derivApp-linear-tf-7",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Using a linearization at gives us .   False. The linearization of at is . Evaluating at , we get: . This is not equal to .  "
},
{
  "id": "eg-derivApp-linear-tf-8",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Using a linearization at gives us .   True. The linearization of at is . Therefore, . Remember that for trigonometric functions, the angle must be in radians!  "
},
{
  "id": "eg-derivApp-linear-tf-9",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   by L’Hôpital’s Rule.   True. Plugging in gives the indeterminate form . Applying L’Hôpital’s Rule, we get .  "
},
{
  "id": "eg-derivApp-linear-tf-10",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   by L’Hôpital’s Rule.   True. Plugging in gives the indeterminate form . Applying L’Hôpital’s Rule, we get .  "
},
{
  "id": "eg-derivApp-linear-tf-11",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   using L’Hôpital’s Rule.   True. Plugging in gives the indeterminate form . Applying L’Hôpital’s Rule, we get . When we attempt to plug in again, we still get the indeterminate form , so we apply L’Hôpital’s Rule again: . Therefore, the original limit is .  "
},
{
  "id": "eg-derivApp-linear-tf-12",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   by L’Hôpital’s Rule.   False. Plugging in gives the indeterminate form . Applying L’Hôpital’s Rule, we get . When we attempt to plug in again, we get , which is undefined. Therefore, the limit does not exist.  "
},
{
  "id": "eg-derivApp-linear-tf-13",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-13",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Consider the table of values below   Evaluating yields .   False. As , we have and , so the limit evaluates to . Notice that L’Hôpital’s Rule does not apply here since the limit is not an indeterminate form.  "
},
{
  "id": "eg-derivApp-linear-tf-14",
  "level": "2",
  "url": "sec-derivApp-linear.html#eg-derivApp-linear-tf-14",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Consider the graph below that shows and .   Two functions, and , both passing through the origin, shown together with their tangent lines at .   A coordinate plane showing two curves and their tangent lines at the origin. The red curve, labeled f of x, passes through the point (0,0). Its tangent line at x equals 0 is shown as a dashed red line with slope negative two. The blue curve, labeled g of x, also passes through the point (0,0). Its tangent line at x equals 0 is shown as a dashed blue line with slope three.    Then .   True. Since both functions pass through the origin, we have and , so this is an indeterminate form . Applying L’Hôpital’s Rule, we get Based on the slopes of the tangent lines shown in the graph.  "
},
{
  "id": "sec-derivApp-extrema",
  "level": "1",
  "url": "sec-derivApp-extrema.html",
  "type": "Section",
  "number": "3.4",
  "title": "Extrema",
  "body": " Extrema    Define and distinguish between absolute and local maxima and minima, both verbally and graphically.  Use the Extreme Value Theorem to determine when absolute extrema are guaranteed to exist, and explain why the hypotheses (continuity and a closed, finite interval) matter.  Identify critical points of a function by solving and locating points where is undefined.  Explain why local extrema in the interior of an interval must occur at critical points (or where differentiability fails).  Find absolute extrema of a function on a closed interval by evaluating the function at critical points and endpoints.  Use graphs to classify extrema and determine whether extrema are local, absolute, both, or neither.    In many real-world problems, we are not just interested in how a function behaves, but in finding its largest or smallest possible values. For example, we might want to know the maximum height of a projectile, the minimum cost of producing an item, or the highest temperature reached during a day. Problems like these lead us to the study of extrema .   Absolute Maxima and Minima   Absolute Maximum and Minimum   Let be a function defined on a closed interval .  An absolute maximum of on occurs at a point in if for all .  An absolute minimum of on occurs at a point in if for all .    The output values are called the maximum value and minimum value of the function. These values are real numbers and unique. However it is possible for a function to attain the same maximum or minimum value at more than one input.   The terms maximum , minimum , and extremum come from Latin. Their plural forms are maxima , minima , and extrema .   For example, here is a graph of on the interval    Graph of a sinusoidal function on the interval , illustrating absolute extrema. The function attains absolute maximum values of at and , and an absolute minimum value of at .   A smooth wave-shaped graph on the interval from 0 to 3 pi over 2. The curve starts at 0, rises to a highest point of 1 at pi over 4, decreases through 0 at pi over 2, reaches a lowest point of negative 1 at 3 pi over 4, then rises again through 0 at pi, reaches another highest point of 1 at 5 pi over 4, and finally decreases back to 0 at 3 pi over 2. The highest value on the graph is 1 and the lowest value is negative 1, representing the absolute maximum and absolute minimum on the interval.    Here is another example. This time the graph of on the interval    Graph of a function on the interval illustrating absolute extrema. The function has an absolute minimum value of at and an absolute maximum value of at .   A graph defined from x equals negative 1 to x equals 2. There is a filled point at negative 1 with y-value 1. The curve decreases from that point to a lowest point at 0 with y-value 0. From x equals 0, the curve increases smoothly to a filled point at 2 with y-value 4. The lowest value on the graph is 0 at x equals 0, and the highest value is 4 at x equals 2.    So now that we can visualize absolute extrema, the question becomes how can we find them? Especially if we do not have a graph to rely on. But before we get to that though, we need to know when should we even be looking for them. For instance if we were asked to find the absolute maximum of on the interval , there is no absolute maximum because the function continues to get bigger and bigger without bound. Any real number that you might propose as a maximum can be exceeded by choosing a larger number (remember is not a real number). The next section will give us a powerful tool for determining when absolute extrema are guaranteed to exist.    Extreme Value Theorem   Extreme Value Theorem   If a function is continuous on a closed, finite interval , then has at least one absolute maximum and at least one absolute minimum on .    The proof of the Extreme Value Theorem relies on the completeness property of the real numbers. Since is continuous on the closed interval , the set of values for is a bounded subset of the real numbers. By the completeness property, this set has a least upper bound (supremum) and a greatest lower bound (infimum). The continuity of ensures that these bounds are actually attained at some points in , giving us the absolute maximum and minimum. A more rigorous proof can be found in MTH 320 (real analysis), but the key idea is that continuity and the closed interval together guarantee the existence of extrema.     This theorem does not tell us where the extrema occur, only that they must exist. If the function is not continuous or the interval is not closed, absolute extrema may fail to exist.   Before moving on let's stop and justify that if a function is not continuous or the interval is not closed, absolute extrema may fail to exist.    Consider the function on the interval . Argue that this function has no absolute maximum on this interval, even though it is continuous.    The function is continuous on the interval , and it takes values that get arbitrarily close to 1 as approaches 1 from the left. However, since the interval does not include 1, there is no point in the interval where actually attains the value of 1. Therefore, there is no absolute maximum on this interval, even though the function is continuous.   If we were to say the absolute maximum is 1, then that would be incorrect because never attains the value 1 on the interval . We would be claiming that there is some such that , but no such exists.    And if we were to say that the absolute maximum is some value less than 1 but very close (like 0.9999), then that would also be incorrect because there are values of that are greater than 0.9999 on the interval .   And so the function on the interval has no absolute maximum, even though it is continuous.  Note that this function does happen to have an absolute minimum of 0 at . Again the extreme value theorem does not guarantee that either a maximum or minimum will exist in this case but they may happen to exist. In this case we have an absolute minimum but no absolute maximum.      Consider the function on the interval . Argue that this function has no absolute minimum on this closed, finite interval .   A function on a closed interval that does not attain an absolute minimum.   A graph of a function defined on a finite interval that includes a vertical dashed line at x = 1 representing a vertical asymptote. As x approaches 1 from either side, the function decreases without bound toward negative infinity. To the right, the curve increases and levels off near y = 0. A closed point appears at approximately (4, 0), which is the highest point shown on the interval. Because the function values decrease without bound near x = 1, there is no absolute minimum on the interval, even though an absolute maximum exists.      The function is not continuous on the closed interval , and it takes values that get arbitrarily close to negative infinity as approaches 1 from either side. However, since the function decreases without bound near , there is no point in the interval where attains a minimum value. Therefore, there is no finite absolute minimum on this interval.  Note that this function does happen to have an absolute maximum of at . Again the extreme value theorem does not guarantee that either a maximum or minimum will exist in this case but they may happen to exist. In this case we have an absolute maximum but no absolute minimum.    Before we learn formally how to find absolute extrema, let's take a small detour and talk about a related but different concept of local extrema. Local extrema are important to understand because they are often easier to find than absolute extrema, and they can provide valuable information about the behavior of a function even when absolute extrema do not exist or are difficult to determine.    Local Maxima and Minima  Absolute extrema describe the highest and lowest points over an entire interval. A broader concept focuses only on nearby behavior.   Local Maximum and Minimum   A local maximum of a function occurs at if for all sufficiently close to in the domain of .  A local minimum of a function occurs at if for all sufficiently close to in the domain of .    Intuitively, local maxima correspond to hilltops and local minima correspond to valley bottoms. Every absolute maximum or minimum is also a local extremum, but not every local extremum is an absolute one.   A graph illustrating the difference between local extrema and absolute extrema. The curve contains multiple turning points, including local maxima, local minima, one absolute minimum, and one absolute maximum.   A smooth curve defined on a closed interval from approximately x = 0 to x = 4. At x = 0 there is a local maximum near y = 0. The curve decreases to a lowest point near x = 0.5 with y = -3.5, labeled both local minimum and absolute minimum. The graph then rises to a local maximum at x = 2 with y = 3. It decreases again to a local minimum at x = 3 with y = 2. Finally, the graph increases to its highest point at x = 4 with y = 4, labeled both local maximum and absolute maximum. This image shows that absolute extrema are the highest and lowest values on the entire interval, while local extrema occur at nearby turning points.      Derivatives and Extrema  Calculus provides a powerful tool for locating extrema. If a function has a smooth hilltop or valley bottom at an interior point, the tangent line there is horizontal.   First Derivative Test for Extrema   If has a local maximum or minimum at an interior point and is differentiable at , then .     The converse is not true. A point where need not be a maximum or minimum. For instance, has a critical point at , but it is neither a maximum nor a minimum (can verify by graphing or by testing values of near 0).   So therefore if we are looking for local extrema, we should look for points where the derivative is zero. But what about points where the derivative is undefined? These points can also correspond to local extrema, for instance consider the function at . The derivative is undefined at this point, but it is clearly a local minimum. This leads us to the concept of critical points.   Critical Point   A critical point (or critical number ) of a function is a point in the domain of where either     Critical points are the only possible locations of local extrema in the interior of an interval. Endpoints of the interval must also be considered when searching for absolute extrema.    Find the critical point(s) of .    We compute the derivative: Setting this equal to zero gives us Since the derivative is defined for all real numbers, there are no points where the derivative is undefined. Therefore, the only critical point of is at .      Find the critical point(s) of .    We compute the derivative using the power rule: Setting this equal to zero gives us This equation has no solution because the expression on the left is never zero for any real number . However, the derivative is undefined at because of the negative exponent. Therefore, the only critical point of is at .      Finding Absolute Extrema  So as we have discussed, absolute extrema can only occur at critical points or at endpoints of the interval. Therefore, to find absolute extrema we need to evaluate the function at these points and compare the values. The following strategy summarizes this process.   Closed Interval Method for Finding Absolute Maxima and Minima  To find the absolute maximum and minimum of a function on a closed interval :   Find all critical points of in .  Evaluate at each critical point and at the endpoints and .  The largest value is the absolute maximum; the smallest value is the absolute minimum.      Find the absolute maximum and minimum of on the interval .    We already found the critical point of in a previous example: . This critical point is in the interval . Now we evaluate at the critical point and at the endpoints:     Comparing these values, we see that the absolute maximum is , occurring at , and the absolute minimum is , occurring at .      Find the absolute maximum and minimum values of on the interval and the corresponding values of .    First, we find the critical points of by computing its derivative:   Setting the derivative equal to zero gives:   Both critical points are in the interval . Now we evaluate at the critical points and at the endpoints:   Comparing these values, we see that the absolute maximum is , occurring at , and the absolute minimum is , occurring at both and .      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Worked-Out Problems for Extrema      Practice \/ Study Problems   True\/False Questions   Determine whether each statement is true or false. Justify your answers.     A function that is continuous on an open interval must have an absolute maximum on that interval.     False. A function that is continuous on an open interval is not guaranteed to have an absolute maximum on that interval. For example, the function is continuous on the open interval , but it does not have an absolute maximum because it approaches 1 as approaches 1 from the left, but never actually attains the value of 1 on the interval.      If a function is continuous on , then it is guaranteed to attain its maximum and minimum values at critical points only.     False . If a function is continuous on a closed interval , then it is guaranteed to attain its maximum and minimum values on that interval, but these extrema may occur at critical points or at the endpoints of the interval. For example, the function on the interval has an absolute minimum at (an endpoint) and an absolute maximum at (also an endpoint), even though there are no critical points in the interior of the interval.      If a function has an absolute maximum at , then .     False . If a function has an absolute maximum at , it does not necessarily mean that . The function could have a sharp peak at where the derivative is undefined, or the maximum could occur at an endpoint of the interval where the derivative does not need to be zero. For example, the function has an absolute maximum of 3 at , but the derivative is undefined at that point due to the sharp peak.      If , then must have either a local maximum or local minimum at .     False . If , it means that the tangent line to the graph of at is horizontal, but this does not necessarily imply that there is a local maximum or minimum at that point. The function could have an inflection point at , where the concavity changes but there is no local extremum. For example, the function has a critical point at where the derivative is zero, but it is neither a local maximum nor a local minimum.      If a function is not continuous on , then it cannot have absolute extrema on that interval.     False . If a function is not continuous on a closed interval , it may still have absolute extrema on that interval. The lack of continuity does not necessarily prevent the function from attaining maximum or minimum values. For example, the function defined by is not continuous at , but it has an absolute maximum of 2 at and an absolute minimum of 0 at all other points in the interval.      A function can have more than one absolute minimum value on a closed interval.     True . A function can have more than one absolute minimum value on a closed interval if it attains the same minimum value at multiple points. For example, the function on the interval has an absolute maximum value of 1 at and , and an absolute minimum value of -1 at . In this case, the absolute minimum value of -1 is attained at only one point, but the absolute maximum value of 1 is attained at two different points.      The function has three critical points.     False . To find the critical points of the function , we first compute its derivative: Setting the derivative equal to zero gives us: The derivative is defined for all real numbers, so there are no points where the derivative is undefined. Therefore, the critical points of the function are at and . However, we need to check if there are any other critical points. Since the derivative is a quadratic function, it can only have two real roots, which we have already found. Therefore, there are only two critical points, not three.      The function on has its absolute minimum at an endpoint.     False . The function on the interval has its absolute minimum at , which is not an endpoint of the interval. To see this, we can evaluate the function at the endpoints and at the critical point: Comparing these values, we see that the absolute minimum value is 0, occurring at , which is an interior point of the interval, not an endpoint.      The function on has a critical point at .     True . To determine if is a critical point of the function , we first compute the derivative: The derivative is undefined at because it involves division by zero. However, for a point to be a critical point, it must be in the domain of the function. Since is in the domain of , we can consider it a critical point.      If on , then the absolute maximum occurs at .     False . To find the absolute maximum of the function on the interval , we first compute its derivative: Setting the derivative equal to zero gives us: The critical point is at , which is in the interval . Now we evaluate the function at the critical point and at the endpoints: Comparing these values, we see that the absolute maximum value is , occurring at , not at .      The function on has an absolute minimum on that interval.     True . The function on the interval has an absolute minimum of at and . To see this, we can evaluate the function at the endpoints and based on the graph of the function: The function has a vertical asymptote at , where the function values increase without bound as approaches 2 from either side. Therefore, the absolute minimum value of the function on the interval is , occurring at both endpoints and .      "
},
{
  "id": "sec-derivApp-extrema-2",
  "level": "2",
  "url": "sec-derivApp-extrema.html#sec-derivApp-extrema-2",
  "type": "Objectives",
  "number": "3.4",
  "title": "",
  "body": "  Define and distinguish between absolute and local maxima and minima, both verbally and graphically.  Use the Extreme Value Theorem to determine when absolute extrema are guaranteed to exist, and explain why the hypotheses (continuity and a closed, finite interval) matter.  Identify critical points of a function by solving and locating points where is undefined.  Explain why local extrema in the interior of an interval must occur at critical points (or where differentiability fails).  Find absolute extrema of a function on a closed interval by evaluating the function at critical points and endpoints.  Use graphs to classify extrema and determine whether extrema are local, absolute, both, or neither.   "
},
{
  "id": "sec-derivApp-extrema-3",
  "level": "2",
  "url": "sec-derivApp-extrema.html#sec-derivApp-extrema-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extrema "
},
{
  "id": "def-absolute-extrema",
  "level": "2",
  "url": "sec-derivApp-extrema.html#def-absolute-extrema",
  "type": "Definition",
  "number": "3.4.1",
  "title": "Absolute Maximum and Minimum.",
  "body": " Absolute Maximum and Minimum   Let be a function defined on a closed interval .  An absolute maximum of on occurs at a point in if for all .  An absolute minimum of on occurs at a point in if for all .   "
},
{
  "id": "ssec-absolute-extrema-4",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ssec-absolute-extrema-4",
  "type": "Remark",
  "number": "3.4.2",
  "title": "",
  "body": " The terms maximum , minimum , and extremum come from Latin. Their plural forms are maxima , minima , and extrema .  "
},
{
  "id": "fig-absolute-extrema-sine",
  "level": "2",
  "url": "sec-derivApp-extrema.html#fig-absolute-extrema-sine",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": " Graph of a sinusoidal function on the interval , illustrating absolute extrema. The function attains absolute maximum values of at and , and an absolute minimum value of at .   A smooth wave-shaped graph on the interval from 0 to 3 pi over 2. The curve starts at 0, rises to a highest point of 1 at pi over 4, decreases through 0 at pi over 2, reaches a lowest point of negative 1 at 3 pi over 4, then rises again through 0 at pi, reaches another highest point of 1 at 5 pi over 4, and finally decreases back to 0 at 3 pi over 2. The highest value on the graph is 1 and the lowest value is negative 1, representing the absolute maximum and absolute minimum on the interval.   "
},
{
  "id": "fig-absolute-extrema-parabola-piece",
  "level": "2",
  "url": "sec-derivApp-extrema.html#fig-absolute-extrema-parabola-piece",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " Graph of a function on the interval illustrating absolute extrema. The function has an absolute minimum value of at and an absolute maximum value of at .   A graph defined from x equals negative 1 to x equals 2. There is a filled point at negative 1 with y-value 1. The curve decreases from that point to a lowest point at 0 with y-value 0. From x equals 0, the curve increases smoothly to a filled point at 2 with y-value 4. The lowest value on the graph is 0 at x equals 0, and the highest value is 4 at x equals 2.   "
},
{
  "id": "thm-extreme-value",
  "level": "2",
  "url": "sec-derivApp-extrema.html#thm-extreme-value",
  "type": "Theorem",
  "number": "3.4.5",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem   If a function is continuous on a closed, finite interval , then has at least one absolute maximum and at least one absolute minimum on .    The proof of the Extreme Value Theorem relies on the completeness property of the real numbers. Since is continuous on the closed interval , the set of values for is a bounded subset of the real numbers. By the completeness property, this set has a least upper bound (supremum) and a greatest lower bound (infimum). The continuity of ensures that these bounds are actually attained at some points in , giving us the absolute maximum and minimum. A more rigorous proof can be found in MTH 320 (real analysis), but the key idea is that continuity and the closed interval together guarantee the existence of extrema.   "
},
{
  "id": "subsec-EVT-3",
  "level": "2",
  "url": "sec-derivApp-extrema.html#subsec-EVT-3",
  "type": "Remark",
  "number": "3.4.6",
  "title": "",
  "body": " This theorem does not tell us where the extrema occur, only that they must exist. If the function is not continuous or the interval is not closed, absolute extrema may fail to exist.  "
},
{
  "id": "ex-no-absolute-maximum",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-no-absolute-maximum",
  "type": "Example",
  "number": "3.4.7",
  "title": "",
  "body": "  Consider the function on the interval . Argue that this function has no absolute maximum on this interval, even though it is continuous.    The function is continuous on the interval , and it takes values that get arbitrarily close to 1 as approaches 1 from the left. However, since the interval does not include 1, there is no point in the interval where actually attains the value of 1. Therefore, there is no absolute maximum on this interval, even though the function is continuous.   If we were to say the absolute maximum is 1, then that would be incorrect because never attains the value 1 on the interval . We would be claiming that there is some such that , but no such exists.    And if we were to say that the absolute maximum is some value less than 1 but very close (like 0.9999), then that would also be incorrect because there are values of that are greater than 0.9999 on the interval .   And so the function on the interval has no absolute maximum, even though it is continuous.  Note that this function does happen to have an absolute minimum of 0 at . Again the extreme value theorem does not guarantee that either a maximum or minimum will exist in this case but they may happen to exist. In this case we have an absolute minimum but no absolute maximum.   "
},
{
  "id": "ex-no-absolute-min",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-no-absolute-min",
  "type": "Example",
  "number": "3.4.8",
  "title": "",
  "body": "  Consider the function on the interval . Argue that this function has no absolute minimum on this closed, finite interval .   A function on a closed interval that does not attain an absolute minimum.   A graph of a function defined on a finite interval that includes a vertical dashed line at x = 1 representing a vertical asymptote. As x approaches 1 from either side, the function decreases without bound toward negative infinity. To the right, the curve increases and levels off near y = 0. A closed point appears at approximately (4, 0), which is the highest point shown on the interval. Because the function values decrease without bound near x = 1, there is no absolute minimum on the interval, even though an absolute maximum exists.      The function is not continuous on the closed interval , and it takes values that get arbitrarily close to negative infinity as approaches 1 from either side. However, since the function decreases without bound near , there is no point in the interval where attains a minimum value. Therefore, there is no finite absolute minimum on this interval.  Note that this function does happen to have an absolute maximum of at . Again the extreme value theorem does not guarantee that either a maximum or minimum will exist in this case but they may happen to exist. In this case we have an absolute maximum but no absolute minimum.   "
},
{
  "id": "def-local-extrema",
  "level": "2",
  "url": "sec-derivApp-extrema.html#def-local-extrema",
  "type": "Definition",
  "number": "3.4.10",
  "title": "Local Maximum and Minimum.",
  "body": " Local Maximum and Minimum   A local maximum of a function occurs at if for all sufficiently close to in the domain of .  A local minimum of a function occurs at if for all sufficiently close to in the domain of .   "
},
{
  "id": "fig-local-absolute-extrema",
  "level": "2",
  "url": "sec-derivApp-extrema.html#fig-local-absolute-extrema",
  "type": "Figure",
  "number": "3.4.11",
  "title": "",
  "body": " A graph illustrating the difference between local extrema and absolute extrema. The curve contains multiple turning points, including local maxima, local minima, one absolute minimum, and one absolute maximum.   A smooth curve defined on a closed interval from approximately x = 0 to x = 4. At x = 0 there is a local maximum near y = 0. The curve decreases to a lowest point near x = 0.5 with y = -3.5, labeled both local minimum and absolute minimum. The graph then rises to a local maximum at x = 2 with y = 3. It decreases again to a local minimum at x = 3 with y = 2. Finally, the graph increases to its highest point at x = 4 with y = 4, labeled both local maximum and absolute maximum. This image shows that absolute extrema are the highest and lowest values on the entire interval, while local extrema occur at nearby turning points.   "
},
{
  "id": "thm-first-derivative-extrema",
  "level": "2",
  "url": "sec-derivApp-extrema.html#thm-first-derivative-extrema",
  "type": "Theorem",
  "number": "3.4.12",
  "title": "First Derivative Test for Extrema.",
  "body": " First Derivative Test for Extrema   If has a local maximum or minimum at an interior point and is differentiable at , then .   "
},
{
  "id": "ssec-derivatives-extrema-4",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ssec-derivatives-extrema-4",
  "type": "Remark",
  "number": "3.4.13",
  "title": "",
  "body": " The converse is not true. A point where need not be a maximum or minimum. For instance, has a critical point at , but it is neither a maximum nor a minimum (can verify by graphing or by testing values of near 0).  "
},
{
  "id": "def-critical-point",
  "level": "2",
  "url": "sec-derivApp-extrema.html#def-critical-point",
  "type": "Definition",
  "number": "3.4.14",
  "title": "Critical Point.",
  "body": " Critical Point   A critical point (or critical number ) of a function is a point in the domain of where either    "
},
{
  "id": "ssec-derivatives-extrema-8",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ssec-derivatives-extrema-8",
  "type": "Example",
  "number": "3.4.15",
  "title": "",
  "body": "  Find the critical point(s) of .    We compute the derivative: Setting this equal to zero gives us Since the derivative is defined for all real numbers, there are no points where the derivative is undefined. Therefore, the only critical point of is at .   "
},
{
  "id": "ssec-derivatives-extrema-9",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ssec-derivatives-extrema-9",
  "type": "Example",
  "number": "3.4.16",
  "title": "",
  "body": "  Find the critical point(s) of .    We compute the derivative using the power rule: Setting this equal to zero gives us This equation has no solution because the expression on the left is never zero for any real number . However, the derivative is undefined at because of the negative exponent. Therefore, the only critical point of is at .   "
},
{
  "id": "strat-extrema",
  "level": "2",
  "url": "sec-derivApp-extrema.html#strat-extrema",
  "type": "Strategy",
  "number": "3.4.17",
  "title": "Closed Interval Method for Finding Absolute Maxima and Minima.",
  "body": " Closed Interval Method for Finding Absolute Maxima and Minima  To find the absolute maximum and minimum of a function on a closed interval :   Find all critical points of in .  Evaluate at each critical point and at the endpoints and .  The largest value is the absolute maximum; the smallest value is the absolute minimum.   "
},
{
  "id": "ssec-method-extrema-4",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ssec-method-extrema-4",
  "type": "Example",
  "number": "3.4.18",
  "title": "",
  "body": "  Find the absolute maximum and minimum of on the interval .    We already found the critical point of in a previous example: . This critical point is in the interval . Now we evaluate at the critical point and at the endpoints:     Comparing these values, we see that the absolute maximum is , occurring at , and the absolute minimum is , occurring at .   "
},
{
  "id": "ssec-method-extrema-5",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ssec-method-extrema-5",
  "type": "Example",
  "number": "3.4.19",
  "title": "",
  "body": "  Find the absolute maximum and minimum values of on the interval and the corresponding values of .    First, we find the critical points of by computing its derivative:   Setting the derivative equal to zero gives:   Both critical points are in the interval . Now we evaluate at the critical points and at the endpoints:   Comparing these values, we see that the absolute maximum is , occurring at , and the absolute minimum is , occurring at both and .   "
},
{
  "id": "ex-extrema-tf-02",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-02",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  A function that is continuous on an open interval must have an absolute maximum on that interval.     False. A function that is continuous on an open interval is not guaranteed to have an absolute maximum on that interval. For example, the function is continuous on the open interval , but it does not have an absolute maximum because it approaches 1 as approaches 1 from the left, but never actually attains the value of 1 on the interval.   "
},
{
  "id": "ex-extrema-tf-03",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-03",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If a function is continuous on , then it is guaranteed to attain its maximum and minimum values at critical points only.     False . If a function is continuous on a closed interval , then it is guaranteed to attain its maximum and minimum values on that interval, but these extrema may occur at critical points or at the endpoints of the interval. For example, the function on the interval has an absolute minimum at (an endpoint) and an absolute maximum at (also an endpoint), even though there are no critical points in the interior of the interval.   "
},
{
  "id": "ex-extrema-tf-04",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-04",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If a function has an absolute maximum at , then .     False . If a function has an absolute maximum at , it does not necessarily mean that . The function could have a sharp peak at where the derivative is undefined, or the maximum could occur at an endpoint of the interval where the derivative does not need to be zero. For example, the function has an absolute maximum of 3 at , but the derivative is undefined at that point due to the sharp peak.   "
},
{
  "id": "ex-extrema-tf-05",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-05",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If , then must have either a local maximum or local minimum at .     False . If , it means that the tangent line to the graph of at is horizontal, but this does not necessarily imply that there is a local maximum or minimum at that point. The function could have an inflection point at , where the concavity changes but there is no local extremum. For example, the function has a critical point at where the derivative is zero, but it is neither a local maximum nor a local minimum.   "
},
{
  "id": "ex-extrema-tf-08",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-08",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If a function is not continuous on , then it cannot have absolute extrema on that interval.     False . If a function is not continuous on a closed interval , it may still have absolute extrema on that interval. The lack of continuity does not necessarily prevent the function from attaining maximum or minimum values. For example, the function defined by is not continuous at , but it has an absolute maximum of 2 at and an absolute minimum of 0 at all other points in the interval.   "
},
{
  "id": "ex-extrema-tf-09",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-09",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  A function can have more than one absolute minimum value on a closed interval.     True . A function can have more than one absolute minimum value on a closed interval if it attains the same minimum value at multiple points. For example, the function on the interval has an absolute maximum value of 1 at and , and an absolute minimum value of -1 at . In this case, the absolute minimum value of -1 is attained at only one point, but the absolute maximum value of 1 is attained at two different points.   "
},
{
  "id": "ex-extrema-tf-16",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-16",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  The function has three critical points.     False . To find the critical points of the function , we first compute its derivative: Setting the derivative equal to zero gives us: The derivative is defined for all real numbers, so there are no points where the derivative is undefined. Therefore, the critical points of the function are at and . However, we need to check if there are any other critical points. Since the derivative is a quadratic function, it can only have two real roots, which we have already found. Therefore, there are only two critical points, not three.   "
},
{
  "id": "ex-extrema-tf-17",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-17",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  The function on has its absolute minimum at an endpoint.     False . The function on the interval has its absolute minimum at , which is not an endpoint of the interval. To see this, we can evaluate the function at the endpoints and at the critical point: Comparing these values, we see that the absolute minimum value is 0, occurring at , which is an interior point of the interval, not an endpoint.   "
},
{
  "id": "ex-extrema-tf-18",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-18",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  The function on has a critical point at .     True . To determine if is a critical point of the function , we first compute the derivative: The derivative is undefined at because it involves division by zero. However, for a point to be a critical point, it must be in the domain of the function. Since is in the domain of , we can consider it a critical point.   "
},
{
  "id": "ex-extrema-tf-19",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-19",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  If on , then the absolute maximum occurs at .     False . To find the absolute maximum of the function on the interval , we first compute its derivative: Setting the derivative equal to zero gives us: The critical point is at , which is in the interval . Now we evaluate the function at the critical point and at the endpoints: Comparing these values, we see that the absolute maximum value is , occurring at , not at .   "
},
{
  "id": "ex-extrema-tf-20",
  "level": "2",
  "url": "sec-derivApp-extrema.html#ex-extrema-tf-20",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  The function on has an absolute minimum on that interval.     True . The function on the interval has an absolute minimum of at and . To see this, we can evaluate the function at the endpoints and based on the graph of the function: The function has a vertical asymptote at , where the function values increase without bound as approaches 2 from either side. Therefore, the absolute minimum value of the function on the interval is , occurring at both endpoints and .   "
},
{
  "id": "sec-derivApp-mvt",
  "level": "1",
  "url": "sec-derivApp-mvt.html",
  "type": "Section",
  "number": "3.5",
  "title": "Mean Value Theorem",
  "body": " Mean Value Theorem    State Rolle’s Theorem and the Mean Value Theorem, including all hypotheses.  Interpret the Mean Value Theorem geometrically as a tangent line parallel to a secant line.  Solve for values of that satisfies the Mean Value Theorem in selected examples.    Derivatives tell us the instantaneous rate of change of a function. In this section, we connect derivatives to the overall behavior of a graph on an interval. The key message is that somewhere between two points, the instantaneous rate of change must match the average rate of change.   Rolle’s Theorem  We begin with a special case where the function starts and ends at the same height. In that situation, the graph must have a horizontal tangent somewhere in between.   Rolle’s Theorem   Let be continuous on and differentiable on . If , then there exists a number in such that .   A sketch of a continuous and differentiable function on the interval .   Graph of y equals f of x on the closed interval from a to b. The curve starts at a low value at x equals a, rises and levels off, reaches its highest point at x equals c, then decreases to the same low value at x equals b. Dashed lines mark the maximum height and the common endpoint height.       Since is continuous on , the Extreme Value Theorem guarantees that has an absolute maximum value and an absolute minimum value on .  If a maximum (or minimum) occurs at an interior point , then has a local extremum there. Since is differentiable at , the derivative must satisfy .  If instead both the maximum and minimum occur only at endpoints, then the condition forces the maximum value and minimum value to be the same. In that case, must be constant on , and therefore for every .  In all cases, there exists such that .     In mathematics, the hypotheses of a theorem are the assumptions (the “if” part), and the conclusion is what we deduce from them (the “then” part). For Rolle’s Theorem, the hypotheses are continuity on , differentiability on , and the condition .   A physical interpretation can help. If represents the height of a rocket that starts and ends on its launch pad, then at some moment the rocket must have zero vertical velocity. That is exactly the conclusion .   Each hypothesis matters. If a function is not differentiable (for example, it has a corner), then the conclusion can fail. A graph can rise and then fall sharply without ever having a well-defined horizontal tangent.   A sketch of a continuous (but not differentiable) function on the interval .   Graph of y equals f of x on the closed interval from a to b. The curve starts at a low value at x equals a, rises and levels off, reaches its highest point but then take a sharp turn and never has a horizontal tangent, and then decreases to the same low value at x equals b.        Consider the function   Verify that the hypotheses and conclusion of Rolle’s Theorem on the interval .    The function is a polynomial, so it is continuous on and differentiable on . Also and , so the hypotheses of Rolle’s Theorem are satisfied. Differentiating gives . Setting this equal to zero gives , which is in the interval . Therefore there exists such that , as Rolle’s Theorem predicts.      Derivatives versus Difference Quotients  Throughout our theory, the derivative has been shadowed by the difference quotient , over some interval . Numerically, the difference quotient is an approximation to the derivative , provided is small. In physical terms, the difference quotient is the average rate of change of over . Geometrically, in terms of the graph , the difference quotient is the slope of the secant line cutting through the points and .  Now we come to the basic theorem that connects the derivative of a function with its basic properties. It says that the derivative is somewhere exactly equal to the difference quotient, that is, the slope of one particular tangent line is equal to the slope of the secant line.   Mean Value Theorem   Let be continuous on and differentiable on . Then there exists a number in such that    Graph of on the interval showing a secant line through and and a tangent line at that is parallel to the secant, illustrating the Mean Value Theorem.   A smooth curve labeled y equals f of x runs from x equals a to x equals b. A dashed blue secant line connects the endpoints at a and b. A dashed red tangent line at an interior point c is parallel to the secant line. The points a, c, and b are marked on the x axis.      The proof uses Rolle’s Theorem by subtracting off the secant line. This produces a new function whose endpoints match, so Rolle’s Theorem applies.  Assume is continuous on and differentiable on . Define a new function   The function is continuous on and differentiable on , since it is built from and linear functions. Also,   and similarly . Therefore , and Rolle’s Theorem applies. So there exists such that .  Differentiate :   Substituting and using gives   which is equivalent to      Rolle’s Theorem is the special case of the Mean Value Theorem when . In that case, the secant slope is , so the conclusion becomes .    The Mean Value Theorem guarantees that at least one such value of exists, but it does not provide a direct method to find it. In many applications, we only need to know that some exists. When practice problems ask you to find , we usually solve the equation .     Let on the interval . Verify that the hypotheses of the Mean Value Theorem apply, and find all values of that satisfy the conclusion.    The function is continuous for , so is continuous on . Differentiating (for ),   This derivative exists for every in , so the Mean Value Theorem applies. Compute the average rate of change:   We solve :   Multiply both sides by (valid since ):   Let , so . Then the equation becomes   Using the quadratic formula,   Since , we take the positive root: . Therefore    Graph of on showing a secant line from to and a tangent line at that is parallel to the secant, illustrating the Mean Value Theorem for a specific function.   The graph of y equals 5 times the square root of x minus x to the three halves, drawn from x equals 0 to x equals 4. A dashed blue secant line connects the points at x equals 0 and x equals 4. A dashed red tangent line at an interior point labeled c is parallel to the secant line. The point of tangency is marked on the curve.        Derivative Controls Direction  One of the first important consequences of the Mean Value Theorem it allows us to prove some intuition we have about how the sign of the derivative controls whether a function increases or decreases. Intuitively if the slope of the tangent line is positive, then the function should be increasing. The Mean Value Theorem allows us to make this intuition precise and rigorous. This will become increasingly important as we move into the next sections on curve sketching and optimization.   Positive Derivative Implies Increasing   Suppose is differentiable on an interval . If for every , then is increasing on . That is, whenever in , we have .    Let be any two points in . By the Mean Value Theorem, there exists such that   Since and , we conclude , so .     A similar argument shows that if throughout an interval, then is decreasing on that interval.      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available in:  Additional Examples for the Mean Value Theorem      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning.     If a function is continuous on and differentiable on , then there exists exactly one number satisfying the Mean Value Theorem.     False. The Mean Value Theorem guarantees at least one such , but there may be more than one. For example, for on , both and satisfy the conclusion.      If and is continuous on but not differentiable at some point in , then Rolle’s Theorem still guarantees a value such that .     False. Rolle’s Theorem requires differentiability on the entire open interval . If there is a point where the function is not differentiable, then the conclusion can fail. For example, for on , we have , and is continuous on , but there is no value of such that .      If for every in , then .     True. By the Mean Value Theorem, there exists such that . Since , we have , which implies , so .      The Mean Value Theorem guarantees that the tangent line at passes through the points and .     False. The Mean Value Theorem guarantees that the tangent line at is parallel to the secant line through and , but it does not guarantee that the tangent line passes through those points.      If is differentiable on and continuous on , then there exists such that .     True. This is exactly the statement of the Mean Value Theorem.      If for all in where , then .     True. By the Mean Value Theorem, there exists such that . Since and , we have , which implies .      For on , there exists such that .     True. The function is a polynomial, so it is continuous on and differentiable on . Compute the average rate of change:   By the Mean Value Theorem, there exists such that . In fact, since , we can solve to find .      The Mean Value Theorem applies to every polynomial on any closed interval.     True. Polynomials are continuous and differentiable everywhere, so the Mean Value Theorem applies on any closed interval.      If , then must be the midpoint of .     False. The Mean Value Theorem guarantees the existence of some such that , but it does not guarantee that is the midpoint. In many cases, is not the midpoint. For example see       For on , the Mean Value Theorem applies.     True. The function is continuous for , so it is continuous on . Also, the derivative exists for every , so the Mean Value Theorem applies.      Algebraic and Procedural Problems    Let on . Find all values in that satisfy the Mean Value Theorem conclusion.    Compute the secant slope:   Since , solve , so .      Consider on . (a) Verify that Rolle’s Theorem applies. (b) Find a value in such that .    The function is a polynomial, so it is continuous on and differentiable on . Also and , so Rolle’s Theorem applies.  Differentiate:   Factor:   In , the root is .      A differentiable function satisfies and . Explain what the Mean Value Theorem guarantees about the value of for some .    The secant slope is . The Mean Value Theorem guarantees there exists such that .      "
},
{
  "id": "sec-derivApp-mvt-2",
  "level": "2",
  "url": "sec-derivApp-mvt.html#sec-derivApp-mvt-2",
  "type": "Objectives",
  "number": "3.5",
  "title": "",
  "body": "  State Rolle’s Theorem and the Mean Value Theorem, including all hypotheses.  Interpret the Mean Value Theorem geometrically as a tangent line parallel to a secant line.  Solve for values of that satisfies the Mean Value Theorem in selected examples.   "
},
{
  "id": "thm-rolles",
  "level": "2",
  "url": "sec-derivApp-mvt.html#thm-rolles",
  "type": "Theorem",
  "number": "3.5.1",
  "title": "Rolle’s Theorem.",
  "body": " Rolle’s Theorem   Let be continuous on and differentiable on . If , then there exists a number in such that .   A sketch of a continuous and differentiable function on the interval .   Graph of y equals f of x on the closed interval from a to b. The curve starts at a low value at x equals a, rises and levels off, reaches its highest point at x equals c, then decreases to the same low value at x equals b. Dashed lines mark the maximum height and the common endpoint height.       Since is continuous on , the Extreme Value Theorem guarantees that has an absolute maximum value and an absolute minimum value on .  If a maximum (or minimum) occurs at an interior point , then has a local extremum there. Since is differentiable at , the derivative must satisfy .  If instead both the maximum and minimum occur only at endpoints, then the condition forces the maximum value and minimum value to be the same. In that case, must be constant on , and therefore for every .  In all cases, there exists such that .   "
},
{
  "id": "rem-hypothesis-conclusion",
  "level": "2",
  "url": "sec-derivApp-mvt.html#rem-hypothesis-conclusion",
  "type": "Remark",
  "number": "3.5.3",
  "title": "",
  "body": " In mathematics, the hypotheses of a theorem are the assumptions (the “if” part), and the conclusion is what we deduce from them (the “then” part). For Rolle’s Theorem, the hypotheses are continuity on , differentiability on , and the condition .  "
},
{
  "id": "rem-rolles-necessity",
  "level": "2",
  "url": "sec-derivApp-mvt.html#rem-rolles-necessity",
  "type": "Remark",
  "number": "3.5.4",
  "title": "",
  "body": " Each hypothesis matters. If a function is not differentiable (for example, it has a corner), then the conclusion can fail. A graph can rise and then fall sharply without ever having a well-defined horizontal tangent.   A sketch of a continuous (but not differentiable) function on the interval .   Graph of y equals f of x on the closed interval from a to b. The curve starts at a low value at x equals a, rises and levels off, reaches its highest point but then take a sharp turn and never has a horizontal tangent, and then decreases to the same low value at x equals b.     "
},
{
  "id": "ex-rolles01",
  "level": "2",
  "url": "sec-derivApp-mvt.html#ex-rolles01",
  "type": "Example",
  "number": "3.5.6",
  "title": "",
  "body": "  Consider the function   Verify that the hypotheses and conclusion of Rolle’s Theorem on the interval .    The function is a polynomial, so it is continuous on and differentiable on . Also and , so the hypotheses of Rolle’s Theorem are satisfied. Differentiating gives . Setting this equal to zero gives , which is in the interval . Therefore there exists such that , as Rolle’s Theorem predicts.   "
},
{
  "id": "thm-mvt",
  "level": "2",
  "url": "sec-derivApp-mvt.html#thm-mvt",
  "type": "Theorem",
  "number": "3.5.7",
  "title": "Mean Value Theorem.",
  "body": " Mean Value Theorem   Let be continuous on and differentiable on . Then there exists a number in such that    Graph of on the interval showing a secant line through and and a tangent line at that is parallel to the secant, illustrating the Mean Value Theorem.   A smooth curve labeled y equals f of x runs from x equals a to x equals b. A dashed blue secant line connects the endpoints at a and b. A dashed red tangent line at an interior point c is parallel to the secant line. The points a, c, and b are marked on the x axis.      The proof uses Rolle’s Theorem by subtracting off the secant line. This produces a new function whose endpoints match, so Rolle’s Theorem applies.  Assume is continuous on and differentiable on . Define a new function   The function is continuous on and differentiable on , since it is built from and linear functions. Also,   and similarly . Therefore , and Rolle’s Theorem applies. So there exists such that .  Differentiate :   Substituting and using gives   which is equivalent to    "
},
{
  "id": "rem-rolles-special-case",
  "level": "2",
  "url": "sec-derivApp-mvt.html#rem-rolles-special-case",
  "type": "Remark",
  "number": "3.5.9",
  "title": "",
  "body": " Rolle’s Theorem is the special case of the Mean Value Theorem when . In that case, the secant slope is , so the conclusion becomes .  "
},
{
  "id": "rem-mvt-finding-c",
  "level": "2",
  "url": "sec-derivApp-mvt.html#rem-mvt-finding-c",
  "type": "Remark",
  "number": "3.5.10",
  "title": "",
  "body": " The Mean Value Theorem guarantees that at least one such value of exists, but it does not provide a direct method to find it. In many applications, we only need to know that some exists. When practice problems ask you to find , we usually solve the equation .  "
},
{
  "id": "ex-mvt-sqrt",
  "level": "2",
  "url": "sec-derivApp-mvt.html#ex-mvt-sqrt",
  "type": "Example",
  "number": "3.5.11",
  "title": "",
  "body": "  Let on the interval . Verify that the hypotheses of the Mean Value Theorem apply, and find all values of that satisfy the conclusion.    The function is continuous for , so is continuous on . Differentiating (for ),   This derivative exists for every in , so the Mean Value Theorem applies. Compute the average rate of change:   We solve :   Multiply both sides by (valid since ):   Let , so . Then the equation becomes   Using the quadratic formula,   Since , we take the positive root: . Therefore    Graph of on showing a secant line from to and a tangent line at that is parallel to the secant, illustrating the Mean Value Theorem for a specific function.   The graph of y equals 5 times the square root of x minus x to the three halves, drawn from x equals 0 to x equals 4. A dashed blue secant line connects the points at x equals 0 and x equals 4. A dashed red tangent line at an interior point labeled c is parallel to the secant line. The point of tangency is marked on the curve.     "
},
{
  "id": "thm-positive-derivative-increasing",
  "level": "2",
  "url": "sec-derivApp-mvt.html#thm-positive-derivative-increasing",
  "type": "Theorem",
  "number": "3.5.13",
  "title": "Positive Derivative Implies Increasing.",
  "body": " Positive Derivative Implies Increasing   Suppose is differentiable on an interval . If for every , then is increasing on . That is, whenever in , we have .    Let be any two points in . By the Mean Value Theorem, there exists such that   Since and , we conclude , so .   "
},
{
  "id": "rem-negative-derivative",
  "level": "2",
  "url": "sec-derivApp-mvt.html#rem-negative-derivative",
  "type": "Remark",
  "number": "3.5.14",
  "title": "",
  "body": " A similar argument shows that if throughout an interval, then is decreasing on that interval.  "
},
{
  "id": "exercises-mvt-2-3",
  "level": "2",
  "url": "sec-derivApp-mvt.html#exercises-mvt-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If a function is continuous on and differentiable on , then there exists exactly one number satisfying the Mean Value Theorem.     False. The Mean Value Theorem guarantees at least one such , but there may be more than one. For example, for on , both and satisfy the conclusion.   "
},
{
  "id": "exercises-mvt-2-4",
  "level": "2",
  "url": "sec-derivApp-mvt.html#exercises-mvt-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If and is continuous on but not differentiable at some point in , then Rolle’s Theorem still guarantees a value such that .     False. Rolle’s Theorem requires differentiability on the entire open interval . If there is a point where the function is not differentiable, then the conclusion can fail. For example, for on , we have , and is continuous on , but there is no value of such that .   "
},
{
  "id": "exercises-mvt-2-5",
  "level": "2",
  "url": "sec-derivApp-mvt.html#exercises-mvt-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If for every in , then .     True. By the Mean Value Theorem, there exists such that . Since , we have , which implies , so .   "
},
{
  "id": "exercises-mvt-2-6",
  "level": "2",
  "url": "sec-derivApp-mvt.html#exercises-mvt-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The Mean Value Theorem guarantees that the tangent line at passes through the points and .     False. The Mean Value Theorem guarantees that the tangent line at is parallel to the secant line through and , but it does not guarantee that the tangent line passes through those points.   "
},
{
  "id": "exercises-mvt-2-7",
  "level": "2",
  "url": "sec-derivApp-mvt.html#exercises-mvt-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If is differentiable on and continuous on , then there exists such that .     True. This is exactly the statement of the Mean Value Theorem.   "
},
{
  "id": "exercises-mvt-2-8",
  "level": "2",
  "url": "sec-derivApp-mvt.html#exercises-mvt-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If for all in where , then .     True. By the Mean Value Theorem, there exists such that . Since and , we have , which implies .   "
},
{
  "id": "exercises-mvt-2-9",
  "level": "2",
  "url": "sec-derivApp-mvt.html#exercises-mvt-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  For on , there exists such that .     True. The function is a polynomial, so it is continuous on and differentiable on . Compute the average rate of change:   By the Mean Value Theorem, there exists such that . In fact, since , we can solve to find .   "
},
{
  "id": "exercises-mvt-2-10",
  "level": "2",
  "url": "sec-derivApp-mvt.html#exercises-mvt-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  The Mean Value Theorem applies to every polynomial on any closed interval.     True. Polynomials are continuous and differentiable everywhere, so the Mean Value Theorem applies on any closed interval.   "
},
{
  "id": "exercises-mvt-2-11",
  "level": "2",
  "url": "sec-derivApp-mvt.html#exercises-mvt-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  If , then must be the midpoint of .     False. The Mean Value Theorem guarantees the existence of some such that , but it does not guarantee that is the midpoint. In many cases, is not the midpoint. For example see    "
},
{
  "id": "exercises-mvt-2-12",
  "level": "2",
  "url": "sec-derivApp-mvt.html#exercises-mvt-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  For on , the Mean Value Theorem applies.     True. The function is continuous for , so it is continuous on . Also, the derivative exists for every , so the Mean Value Theorem applies.   "
},
{
  "id": "prob-mvt-find-c-poly",
  "level": "2",
  "url": "sec-derivApp-mvt.html#prob-mvt-find-c-poly",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Let on . Find all values in that satisfy the Mean Value Theorem conclusion.    Compute the secant slope:   Since , solve , so .   "
},
{
  "id": "prob-rolles-check",
  "level": "2",
  "url": "sec-derivApp-mvt.html#prob-rolles-check",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Consider on . (a) Verify that Rolle’s Theorem applies. (b) Find a value in such that .    The function is a polynomial, so it is continuous on and differentiable on . Also and , so Rolle’s Theorem applies.  Differentiate:   Factor:   In , the root is .   "
},
{
  "id": "prob-mvt-graphical",
  "level": "2",
  "url": "sec-derivApp-mvt.html#prob-mvt-graphical",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  A differentiable function satisfies and . Explain what the Mean Value Theorem guarantees about the value of for some .    The secant slope is . The Mean Value Theorem guarantees there exists such that .   "
},
{
  "id": "sec-derivApp-curve1",
  "level": "1",
  "url": "sec-derivApp-curve1.html",
  "type": "Section",
  "number": "3.6",
  "title": "Curve Sketching Part 1",
  "body": " Curve Sketching Part 1    Determine where a function is increasing or decreasing using the sign of .  Use the First Derivative Test to classify critical points as local maxima, local minima, or neither.  Determine concavity using the sign of and identify inflection points.  Combine derivative information with intercepts and asymptotes to sketch a reasonable graph.     Prerequisite Review  A key skill needed for curve sketching is the ability to solve equations and inequalities involving derivatives. If you feel a bit out of practice with your inequality solving techniques, it may be helpful to revisit those ideas before diving into the calculus.   Review section on inequalities      Derivatives do more than provide slopes at individual points. They also reveal the overall shape of a graph. In this section, we build a toolkit for sketching the graph of by analyzing and . The goal is not a perfect drawing, but a reliable picture that captures the key features.   Increasing and Decreasing   Increasing and Decreasing   A function is increasing on an interval if whenever in . A function is decreasing on if whenever in .    The derivative provides an efficient test: the graph rises where slopes are positive and falls where slopes are negative.   Increasing\/Decreasing Test   Let be continuous on and differentiable on .    If for all , then is increasing on .    If for all , then is decreasing on .      Assume for all , and choose any in . By the Mean Value Theorem, there exists such that   Since and , we have , so . Therefore is increasing on . The decreasing case is similar.      Let .  (a) Identify all critical points of and determine where it is increasing and decreasing.  (b) Use your results from (a) to plot a sketch of the graph of .  (c) Use your sketch from (b) to classify the critical points as local maxima, minima, or neither.    Video Solution  Here is a video solution to this problem.        Written Solution  (a) Differentiate:   The critical points occur where (since it is never undefined), so .  Since we will need to plot the graph, we should also compute the -coordinates of the critical points:   Now we will use the test point method to determine where (i.e., where the function is increasing) and where (i.e., where the function is decreasing).  Choose test points in each of the intervals determined by the critical points:   Remember: That the value of the derivative at the test point is not important; only the sign matters. The sign of is determined by the signs of the factors , , and (hence the short-hand notation in the table above).  A sign chart is summarized below.   (b) To sketch the graph we can first plot the critical points and then use the increasing\/decreasing behavior to connect them.  Here is a good place to start   A sign chart indicating where a function is increasing and decreasing. Along with the critical points.   A graph with vertical dashed lines at x = -3, 0, and 3 dividing the real line into four intervals. The leftmost and rightmost regions are labeled INC (increasing), while the two middle regions are labeled DEC (decreasing). Points marking critical values are shown on the graph.    And here is a good final sketch. Remember at the critical points the slope is zero so the graph should flatten out near these points. Also polynomial functions are differentiable everywhere so we should not have any sharp corners or cusps.   A sign chart indicating where a function is increasing and decreasing, the critical points, and a sketch of the graph connecting them.   A graph with vertical dashed lines at x = -3, 0, and 3 dividing the real line into four intervals. The leftmost and rightmost regions are labeled INC (increasing), while the two middle regions are labeled DEC (decreasing). Points marking critical values are shown on the graph. A curve connects the critical points, rising from the left to the first critical point at (-3, 162), then falling to the second critical point at (0, 0), then falling again to the third critical point at (3, -162), and finally rising again to the right.    (c) The function changes from increasing to decreasing at , so there is a local maximum at . The function changes from decreasing to increasing at , so there is a local minimum at . At , the derivative is zero but the function is decreasing on both sides, so is neither a local maximum nor a local minimum.     Now let's formalize the classification of critical points like we did in the last example using the first derivative.   First Derivative Test   Let be differentiable on an interval around and suppose .    If for and for , then is a local maximum.    If for and for , then is a local minimum.    If has the same sign on both sides of , then is neither a local maximum nor a local minimum.       So with only the first derivative, we can determine where a function is increasing or decreasing and classify critical points as local maxima, minima, or neither. However, there are other features of the graph that we can analyze using the second derivative.   Concavity and Inflection Points  Increasing and decreasing behavior describes whether the graph rises or falls. Concavity describes how the graph bends.    A graph is concave up when it looks like a smile, the curve is bending upwards. The graph is concave down when it looks like a frown, the curve is bending downwards. An inflection point is a point where the concavity changes.     Concavity is independent of increasing\/decreasing behavior. A graph can be increasing and concave down at the same time, for example. Here are some examples of graphs with different combinations of increasing\/decreasing and concavity.   A diagram showing what concavity looks like for increasing and decreasing functions.   Six small coordinate graphs arranged in two columns and three rows. Top left: an increasing curve that is concave down, labeled “INC and CON down.” Top right: a decreasing curve that is concave down, labeled “DEC and CON down.” Middle left: an increasing curve that is concave up, labeled “INC and CON up.” Middle right: a decreasing curve that is concave up, labeled “DEC and CON up.” Bottom left: a cubic-shaped curve with an inflection point at x = 2 marked by a dot, labeled “INFLECTION POINT.” Bottom right: a reflected cubic-shaped curve with an inflection point at x = 2 marked by a dot, labeled “INFLECTION POINT.”      A helpful way to connect this to derivatives is to think about slopes. When a function is concave up, its slopes tend to increase as increases. When a function is concave down, its slopes tend to decrease.   Concavity Test   Let be twice differentiable on an interval .    If for all , then is concave up on .    If for all , then is concave down on .    If and changes sign at , then is an inflection point.      Apply the Increasing\/Decreasing Test to . If , then is increasing. Since , the condition means is increasing, which corresponds to concave up behavior. The concave down case is similar, and the inflection point criterion follows from a sign change in .      Continue with . Find where the graph is concave up or concave down, and identify inflection points.    Video Solution  Here is a video solution to this problem.        Written Solution  We already computed . Differentiate again:   Candidate inflection points occur where or where is undefined (while is defined). However since is defined for all real , we only consider where . So either or , which gives .  Remember that so the inflection points are approximately at , , and .  Now we will use the test point method to determine where (i.e., where the function is concave up) and where (i.e., where the function is concave down).  Choose test points in each of the intervals and check the sign of :   So therefore is concave down on , and concave up on .  Because changes sign at each of the three candidates, there are inflection points at , , and .     Let's illustrate these ideas with a more complicated example that combines all of the features we have discussed so far.  This upcoming example will also utilize vertical asymptotes from Locating Vertical Asymptotes as well as horizontal asymptotes from Calculating Horizontal Asymptotes back in Chapter 1.    Longer Example   Consider the function .  (a) Identify intercepts, vertical asymptotes, and horizontal asymptotes of the graph of .  (b) Locate critical points and intervals of increase\/decrease.  (c) Determine concavity and inflection points.  (d) Use your results from (a)-(c) to sketch the graph of .    Video Solution  Here is a video solution to this problem.        Written Solution  (a) The -intercept occurs at . Setting and solving for , we find: so the -intercepts are at and .  There is a vertical asymptote at since the denominator of the rational part is zero there and the numerator is not. To find horizontal asymptotes, we compute limits as . We can use dominant term analysis to find that so there are no horizontal asymptotes.  (b) To find critical points, we first compute the derivative:   The critical points occur where or where is undefined (while is defined). Since only undefined when (since the denominator is zero there), and is undefined at , we only consider where . Setting the derivative equal to zero and solving for , we find: so the critical points are at and .  To determine where is increasing or decreasing, we can use the test point method to check the sign of in each interval determined by the critical points and vertical asymptote:   So is increasing on and decreasing on .  (c) To determine concavity, we compute the second derivative:   Candidate inflection points occur where or where is undefined (while is defined). Since is undefined at , we do not consider that point since is also undefined there. Setting the second derivative equal to zero and solving for , we find:   Since there is no value of that makes , there are no inflection points.  To determine where is concave up or concave down, we can use the test point method to check the sign of in each interval determined by the vertical asymptote:   So is concave up on and concave down on .  (d) We can now combine all of this information to sketch the graph of . First I would plot the intercepts, asymptotes, and critical points. Then I would use the intervals of increase\/decrease and concavity to determine the shape of the graph in each region.   A sign chart showing intervals of increase, decrease, and concavity along with some key points on the graph of .   A coordinate plane divided by a vertical dashed line marking a critical or inflection value. The leftmost region is shaded and labeled “INC, CON DOWN.” The next region is labeled “DEC.” To the right of the dashed line the region is labeled “DEC, CON UP.” The far right region is labeled “INC.” Several points are marked on the graph to indicate function values in different intervals.    Now we can use the information from the sign chart, asymptotes and critical points to connect all the key points into a coherent sketch of the graph.   Our final sketch of the graph of based on the intervals of increase\/decrease and concavity along with key points and asymptotes.   A coordinate plane divided by a vertical dashed line marking a critical or inflection value. The leftmost region is shaded and labeled “INC, CON DOWN.” The next region is labeled “DEC.” To the right of the dashed line the region is labeled “DEC, CON UP.” The far right region is labeled “INC.” Several points are marked on the graph to indicate function values in different intervals. A curve is drawn through the points that matches the increasing\/decreasing and concavity behavior indicated by the sign chart.         Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available in:  Additional Examples for Curve Sketching Part 1      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and briefly justify your reasoning.     If for all in an interval , then is increasing on .    True. This is exactly the Increasing\/Decreasing Test.      If , then has a local maximum or a local minimum at .    False. A critical point can be neither. For example, consider at .       If changes sign from negative to positive at , then has a local minimum at .    True. This is the First Derivative Test for a local minimum.      If on an interval, then the slopes of are increasing on that interval.    True.  means is increasing.      If is increasing on an interval, then it must be concave up on that interval.    False. A function can be increasing and concave down.      If is concave down on an interval, then is decreasing on that interval.    True. Concave down means , so decreases.      If , then must be an inflection point.    False. You also need to change sign at .      It is possible for to have an inflection point at even if .    True. Inflection points concern concavity; the slope can be zero there.      If is undefined at , then cannot be an inflection point.    False. An inflection point can occur where is undefined, as long as concavity changes and is defined.      Consider the graph of below. On this graph .   A coordinate plane showing a curve labeled f(x). The curve is increasing from left to right and gradually flattening, meaning its slope is positive but decreasing as x increases. The graph bends downward, indicating it is concave down. A solid point is marked on the curve directly above x equals 2, with a dashed vertical line dropping from the point to the x-axis at 2.      True. The slope at is positive (the curve is increasing), so therefore . The concavity is downward (the curve is bending down), so . Therefore, .       While these True \/ False problems are good for quickly testing your understanding of the concepts, you should also practice applying these ideas to more complicated and complete problems (like those that appear on WeBWork) and can possibly appear on quizzes and exams.  Reminder: There are more fully worked-out examples available in Additional Examples for Curve Sketching Part 1 that you can use to practice with and to check your work against.   "
},
{
  "id": "sec-derivApp-curve1-2",
  "level": "2",
  "url": "sec-derivApp-curve1.html#sec-derivApp-curve1-2",
  "type": "Objectives",
  "number": "3.6",
  "title": "",
  "body": "  Determine where a function is increasing or decreasing using the sign of .  Use the First Derivative Test to classify critical points as local maxima, local minima, or neither.  Determine concavity using the sign of and identify inflection points.  Combine derivative information with intercepts and asymptotes to sketch a reasonable graph.   "
},
{
  "id": "wrn-curve1-prereq",
  "level": "2",
  "url": "sec-derivApp-curve1.html#wrn-curve1-prereq",
  "type": "Warning",
  "number": "3.6.1",
  "title": "Prerequisite Review.",
  "body": " Prerequisite Review  A key skill needed for curve sketching is the ability to solve equations and inequalities involving derivatives. If you feel a bit out of practice with your inequality solving techniques, it may be helpful to revisit those ideas before diving into the calculus.   Review section on inequalities     "
},
{
  "id": "def-increasing-decreasing",
  "level": "2",
  "url": "sec-derivApp-curve1.html#def-increasing-decreasing",
  "type": "Definition",
  "number": "3.6.2",
  "title": "Increasing and Decreasing.",
  "body": " Increasing and Decreasing   A function is increasing on an interval if whenever in . A function is decreasing on if whenever in .   "
},
{
  "id": "thm-inc-dec",
  "level": "2",
  "url": "sec-derivApp-curve1.html#thm-inc-dec",
  "type": "Theorem",
  "number": "3.6.3",
  "title": "Increasing\/Decreasing Test.",
  "body": " Increasing\/Decreasing Test   Let be continuous on and differentiable on .    If for all , then is increasing on .    If for all , then is decreasing on .      Assume for all , and choose any in . By the Mean Value Theorem, there exists such that   Since and , we have , so . Therefore is increasing on . The decreasing case is similar.   "
},
{
  "id": "ex-inc-dec-poly",
  "level": "2",
  "url": "sec-derivApp-curve1.html#ex-inc-dec-poly",
  "type": "Example",
  "number": "3.6.4",
  "title": "",
  "body": "  Let .  (a) Identify all critical points of and determine where it is increasing and decreasing.  (b) Use your results from (a) to plot a sketch of the graph of .  (c) Use your sketch from (b) to classify the critical points as local maxima, minima, or neither.    Video Solution  Here is a video solution to this problem.        Written Solution  (a) Differentiate:   The critical points occur where (since it is never undefined), so .  Since we will need to plot the graph, we should also compute the -coordinates of the critical points:   Now we will use the test point method to determine where (i.e., where the function is increasing) and where (i.e., where the function is decreasing).  Choose test points in each of the intervals determined by the critical points:   Remember: That the value of the derivative at the test point is not important; only the sign matters. The sign of is determined by the signs of the factors , , and (hence the short-hand notation in the table above).  A sign chart is summarized below.   (b) To sketch the graph we can first plot the critical points and then use the increasing\/decreasing behavior to connect them.  Here is a good place to start   A sign chart indicating where a function is increasing and decreasing. Along with the critical points.   A graph with vertical dashed lines at x = -3, 0, and 3 dividing the real line into four intervals. The leftmost and rightmost regions are labeled INC (increasing), while the two middle regions are labeled DEC (decreasing). Points marking critical values are shown on the graph.    And here is a good final sketch. Remember at the critical points the slope is zero so the graph should flatten out near these points. Also polynomial functions are differentiable everywhere so we should not have any sharp corners or cusps.   A sign chart indicating where a function is increasing and decreasing, the critical points, and a sketch of the graph connecting them.   A graph with vertical dashed lines at x = -3, 0, and 3 dividing the real line into four intervals. The leftmost and rightmost regions are labeled INC (increasing), while the two middle regions are labeled DEC (decreasing). Points marking critical values are shown on the graph. A curve connects the critical points, rising from the left to the first critical point at (-3, 162), then falling to the second critical point at (0, 0), then falling again to the third critical point at (3, -162), and finally rising again to the right.    (c) The function changes from increasing to decreasing at , so there is a local maximum at . The function changes from decreasing to increasing at , so there is a local minimum at . At , the derivative is zero but the function is decreasing on both sides, so is neither a local maximum nor a local minimum.    "
},
{
  "id": "thm-first-derivative-test",
  "level": "2",
  "url": "sec-derivApp-curve1.html#thm-first-derivative-test",
  "type": "Theorem",
  "number": "3.6.7",
  "title": "First Derivative Test.",
  "body": " First Derivative Test   Let be differentiable on an interval around and suppose .    If for and for , then is a local maximum.    If for and for , then is a local minimum.    If has the same sign on both sides of , then is neither a local maximum nor a local minimum.     "
},
{
  "id": "def-concavity",
  "level": "2",
  "url": "sec-derivApp-curve1.html#def-concavity",
  "type": "Definition",
  "number": "3.6.8",
  "title": "",
  "body": "  A graph is concave up when it looks like a smile, the curve is bending upwards. The graph is concave down when it looks like a frown, the curve is bending downwards. An inflection point is a point where the concavity changes.   "
},
{
  "id": "rem-concavity-visual",
  "level": "2",
  "url": "sec-derivApp-curve1.html#rem-concavity-visual",
  "type": "Remark",
  "number": "3.6.9",
  "title": "",
  "body": " Concavity is independent of increasing\/decreasing behavior. A graph can be increasing and concave down at the same time, for example. Here are some examples of graphs with different combinations of increasing\/decreasing and concavity.   A diagram showing what concavity looks like for increasing and decreasing functions.   Six small coordinate graphs arranged in two columns and three rows. Top left: an increasing curve that is concave down, labeled “INC and CON down.” Top right: a decreasing curve that is concave down, labeled “DEC and CON down.” Middle left: an increasing curve that is concave up, labeled “INC and CON up.” Middle right: a decreasing curve that is concave up, labeled “DEC and CON up.” Bottom left: a cubic-shaped curve with an inflection point at x = 2 marked by a dot, labeled “INFLECTION POINT.” Bottom right: a reflected cubic-shaped curve with an inflection point at x = 2 marked by a dot, labeled “INFLECTION POINT.”     "
},
{
  "id": "thm-concavity-test",
  "level": "2",
  "url": "sec-derivApp-curve1.html#thm-concavity-test",
  "type": "Theorem",
  "number": "3.6.11",
  "title": "Concavity Test.",
  "body": " Concavity Test   Let be twice differentiable on an interval .    If for all , then is concave up on .    If for all , then is concave down on .    If and changes sign at , then is an inflection point.      Apply the Increasing\/Decreasing Test to . If , then is increasing. Since , the condition means is increasing, which corresponds to concave up behavior. The concave down case is similar, and the inflection point criterion follows from a sign change in .   "
},
{
  "id": "ex-concavity-poly",
  "level": "2",
  "url": "sec-derivApp-curve1.html#ex-concavity-poly",
  "type": "Example",
  "number": "3.6.12",
  "title": "",
  "body": "  Continue with . Find where the graph is concave up or concave down, and identify inflection points.    Video Solution  Here is a video solution to this problem.        Written Solution  We already computed . Differentiate again:   Candidate inflection points occur where or where is undefined (while is defined). However since is defined for all real , we only consider where . So either or , which gives .  Remember that so the inflection points are approximately at , , and .  Now we will use the test point method to determine where (i.e., where the function is concave up) and where (i.e., where the function is concave down).  Choose test points in each of the intervals and check the sign of :   So therefore is concave down on , and concave up on .  Because changes sign at each of the three candidates, there are inflection points at , , and .   "
},
{
  "id": "ex-curvesketch-rational",
  "level": "2",
  "url": "sec-derivApp-curve1.html#ex-curvesketch-rational",
  "type": "Example",
  "number": "3.6.13",
  "title": "Longer Example.",
  "body": " Longer Example   Consider the function .  (a) Identify intercepts, vertical asymptotes, and horizontal asymptotes of the graph of .  (b) Locate critical points and intervals of increase\/decrease.  (c) Determine concavity and inflection points.  (d) Use your results from (a)-(c) to sketch the graph of .    Video Solution  Here is a video solution to this problem.        Written Solution  (a) The -intercept occurs at . Setting and solving for , we find: so the -intercepts are at and .  There is a vertical asymptote at since the denominator of the rational part is zero there and the numerator is not. To find horizontal asymptotes, we compute limits as . We can use dominant term analysis to find that so there are no horizontal asymptotes.  (b) To find critical points, we first compute the derivative:   The critical points occur where or where is undefined (while is defined). Since only undefined when (since the denominator is zero there), and is undefined at , we only consider where . Setting the derivative equal to zero and solving for , we find: so the critical points are at and .  To determine where is increasing or decreasing, we can use the test point method to check the sign of in each interval determined by the critical points and vertical asymptote:   So is increasing on and decreasing on .  (c) To determine concavity, we compute the second derivative:   Candidate inflection points occur where or where is undefined (while is defined). Since is undefined at , we do not consider that point since is also undefined there. Setting the second derivative equal to zero and solving for , we find:   Since there is no value of that makes , there are no inflection points.  To determine where is concave up or concave down, we can use the test point method to check the sign of in each interval determined by the vertical asymptote:   So is concave up on and concave down on .  (d) We can now combine all of this information to sketch the graph of . First I would plot the intercepts, asymptotes, and critical points. Then I would use the intervals of increase\/decrease and concavity to determine the shape of the graph in each region.   A sign chart showing intervals of increase, decrease, and concavity along with some key points on the graph of .   A coordinate plane divided by a vertical dashed line marking a critical or inflection value. The leftmost region is shaded and labeled “INC, CON DOWN.” The next region is labeled “DEC.” To the right of the dashed line the region is labeled “DEC, CON UP.” The far right region is labeled “INC.” Several points are marked on the graph to indicate function values in different intervals.    Now we can use the information from the sign chart, asymptotes and critical points to connect all the key points into a coherent sketch of the graph.   Our final sketch of the graph of based on the intervals of increase\/decrease and concavity along with key points and asymptotes.   A coordinate plane divided by a vertical dashed line marking a critical or inflection value. The leftmost region is shaded and labeled “INC, CON DOWN.” The next region is labeled “DEC.” To the right of the dashed line the region is labeled “DEC, CON UP.” The far right region is labeled “INC.” Several points are marked on the graph to indicate function values in different intervals. A curve is drawn through the points that matches the increasing\/decreasing and concavity behavior indicated by the sign chart.     "
},
{
  "id": "tf-curve1-01",
  "level": "2",
  "url": "sec-derivApp-curve1.html#tf-curve1-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If for all in an interval , then is increasing on .    True. This is exactly the Increasing\/Decreasing Test.   "
},
{
  "id": "tf-curve1-02",
  "level": "2",
  "url": "sec-derivApp-curve1.html#tf-curve1-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If , then has a local maximum or a local minimum at .    False. A critical point can be neither. For example, consider at .   "
},
{
  "id": "tf-curve1-05",
  "level": "2",
  "url": "sec-derivApp-curve1.html#tf-curve1-05",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If changes sign from negative to positive at , then has a local minimum at .    True. This is the First Derivative Test for a local minimum.   "
},
{
  "id": "tf-curve1-07",
  "level": "2",
  "url": "sec-derivApp-curve1.html#tf-curve1-07",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If on an interval, then the slopes of are increasing on that interval.    True.  means is increasing.   "
},
{
  "id": "tf-curve1-08",
  "level": "2",
  "url": "sec-derivApp-curve1.html#tf-curve1-08",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If is increasing on an interval, then it must be concave up on that interval.    False. A function can be increasing and concave down.   "
},
{
  "id": "tf-curve1-09",
  "level": "2",
  "url": "sec-derivApp-curve1.html#tf-curve1-09",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If is concave down on an interval, then is decreasing on that interval.    True. Concave down means , so decreases.   "
},
{
  "id": "tf-curve1-10",
  "level": "2",
  "url": "sec-derivApp-curve1.html#tf-curve1-10",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  If , then must be an inflection point.    False. You also need to change sign at .   "
},
{
  "id": "tf-curve1-11",
  "level": "2",
  "url": "sec-derivApp-curve1.html#tf-curve1-11",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  It is possible for to have an inflection point at even if .    True. Inflection points concern concavity; the slope can be zero there.   "
},
{
  "id": "tf-curve1-12",
  "level": "2",
  "url": "sec-derivApp-curve1.html#tf-curve1-12",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  If is undefined at , then cannot be an inflection point.    False. An inflection point can occur where is undefined, as long as concavity changes and is defined.   "
},
{
  "id": "tf-curve1-13",
  "level": "2",
  "url": "sec-derivApp-curve1.html#tf-curve1-13",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Consider the graph of below. On this graph .   A coordinate plane showing a curve labeled f(x). The curve is increasing from left to right and gradually flattening, meaning its slope is positive but decreasing as x increases. The graph bends downward, indicating it is concave down. A solid point is marked on the curve directly above x equals 2, with a dashed vertical line dropping from the point to the x-axis at 2.      True. The slope at is positive (the curve is increasing), so therefore . The concavity is downward (the curve is bending down), so . Therefore, .   "
},
{
  "id": "sec-derivApp-curve1-10",
  "level": "2",
  "url": "sec-derivApp-curve1.html#sec-derivApp-curve1-10",
  "type": "Remark",
  "number": "3.6.16",
  "title": "",
  "body": " While these True \/ False problems are good for quickly testing your understanding of the concepts, you should also practice applying these ideas to more complicated and complete problems (like those that appear on WeBWork) and can possibly appear on quizzes and exams.  Reminder: There are more fully worked-out examples available in Additional Examples for Curve Sketching Part 1 that you can use to practice with and to check your work against.  "
},
{
  "id": "sec-derivApp-curve2",
  "level": "1",
  "url": "sec-derivApp-curve2.html",
  "type": "Section",
  "number": "3.7",
  "title": "Curve Sketching Part 2",
  "body": " Curve Sketching Part 2    Apply the Second Derivative Test to classify critical points as local maxima, local minima, or inconclusive.  Determine if a function has even and odd symmetry and use symmetry to reduce the amount of work required in a sketch.   Use the full curve sketching method to analyze and sketch a variety of functions including:  Identifying domain, asymptotes, intercepts, and symmetry.  Find and classify critical points and determine where the function increases or decreases using .  Find inflection points and determine intervals of concavity using .  Combine all information to produce a clear sketch of the graph of the function.       At this point, you may be asking, \" Why do I need to learn to sketch graphs by hand when there are computers and calculators that can graph instantly? \" One reason is that calculus helps us focus on the important parts of the graph: critical points, asymptotes, and regions where behavior changes. Another reason is error checking. A quick sketch, combined with a few well-chosen test values, can reveal when a result is unreasonable long before a mistake spreads into a larger calculation. Finally, sketching by hand is a skill that can be useful in many contexts, such as when you are explaining a graph to someone else, or when you are trying to understand a graph that is already drawn.  So in this section, we first learn a few more skills to aid our curve sketching abilities. Then we will work through several longer problems that apply the full curve sketching method.   The Second Derivative Test  The First Derivative Test classifies critical points by checking whether changes sign. When exists, there is a quicker classification that often works.   Second Derivative Test   Let be twice differentiable near , and suppose .    If , then has a local minimum at .    If , then has a local maximum at .    If , then the test is inconclusive.       If , the point could still be a local maximum, a local minimum, or neither. In that case, you should return to the First Derivative Test (or another method).     Use the Second Derivative Test to classify the critical points of .    Doing some prep work, the derivatives are and . Now to find the critical points, we set , which gives . Factoring gives , so the critical points are and . Note that is defined everywhere, so there are no critical points from undefined derivatives.  Evaluating the second derivative at these points gives , so there is a local maximum at , and , so there is a local minimum at .      Symmetry  Sometimes symmetry can dramatically reduce the work needed to sketch a graph. If you can recognize that a function is even or odd, then you can often sketch a smaller portion of the graph and use symmetry to complete the picture.  Note that the idea of symmetry was first introduced in an algebraic context in the section on functions, but here we are using it as a tool for graphing.   Even and Odd Functions     A function is even if for all in its domain. Visually, the graph of even functions are symmetric about the -axis, a mirror image on either side.   A graph of the function showing even symmetry about the -axis.   A coordinate plane showing the graph of y = x^2. The curve is a U-shaped parabola opening upward with its vertex at the origin. The left and right sides of the parabola are mirror images across the y-axis, illustrating even symmetry.       A function is odd if for all in its domain. Visually, the graph of odd functions has 180-degree ( radians) rotational symmetry about the origin.   A graph of the function showing odd symmetry about the origin.   A coordinate plane showing the graph of y = x^3. The curve is an S-shaped curve passing through the origin, symmetric about the origin. The left and right sides of the curve are mirror images across the origin, illustrating odd symmetry.           For each of the following functions, determine whether it is even, odd, both, or neither.           Even. We have             Odd. We have    Note: that you need to remember from your favorite trig class that is an odd function, so . It is also true that is an even function, so .            Neither. We have This is not equal to , so it is not even. It is also not equal to , so it is not odd.  We can also use a specific counterexample to show that is not even or odd. For instance, , but and .       Putting It All Together  Now that we have developed all of the necessary tools, we are ready to apply the full curve sketching method to a variety of functions. Below is a checklist of the types of steps that might be required in a curve sketching problem. Not every problem will require every step. You should focus only on the parts that are explicitly requested. In particular, on timed quizzes and exams, it is important to balance completeness with efficiency. Problems are designed so that the requested steps can reasonably be completed within the allotted time.   Curve Sketching Checklist   Compute and .  Find critical points from and where is undefined.  Use the sign of to determine where the function increases or decreases and to classify critical points.  Find possible inflection points from and where is undefined.  Use the sign of to determine concavity and confirm inflection points.  Find intercepts and identify any vertical asymptotes from the domain.  Describe end behavior as using our horizontal asymptote techniques.  Check for even\/odd symmetry, or .  Combine these features into a clear sketch.      Consider the function on the interval .  (a) Identify vertical and horizontal asymptotes, and symmetry if they exist.  (b) Find critical points and regions of increase and decrease.  (c) Find inflection points and intervals of concavity.  (d) Combine parts (a)-(c) to sketch the graph of . Plot all critical points and inflection points.    Video Solution  Here is a video solution to this problem.        Written Solution  (a) There are no vertical asymptotes since the domain is all real numbers. There are no horizontal asymptotes since the function grows without bound as .  The function is odd since, so it has 180-degree rotational symmetry about the origin.  (b) The derivative is . This is always defined, so there are no critical points from undefined derivatives. So we only need to solve to find critical points.   Note that the symmetry of the function means that the critical points are symmetric about the origin, and the behavior on is a mirror image of the behavior on .  Choosing test points in each interval determined by the critical points gives the following sign chart for :   So the function is decreasing on , and increasing on .  Again we could have used the symmetry of the function to reduce our work. For instance, we could have just analyzed the behavior on and then used symmetry to get the rest of our conclusion.  (c) The second derivative is , which is defined everywhere, so there are no inflection points from undefined derivatives. To find inflection points, we solve , which gives . This happens at . Because and are endpoints of the interval, they cannot be inflection points, so the only possible inflection points are at .  To determine intervals of concavity, we can use test points in each interval determined by the possible inflection points. This gives the following sign chart for :   So the function is concave up on and concave down on .  Because the function changes concavity at , these points are indeed inflection points.  (d) Combining all of this information, we can sketch the graph of . We know there are no asymptotes, and the function is odd, so we can focus on sketching the portion of the graph on and then use symmetry to get the rest of the graph.  Since we will need to plot all critical points and inflection points, we should compute the function values at these points.   Plotting these points and using the behavior determined in parts (b) and (c) gives the following sketch of the graph of :    A GIF showing the graph of first on the interval then using symmetry to complete the graph.   Animated graph of s of x equals x minus 2 sine x. The curve has a local minimum near x equals pi over 3 and a local maximum near x equals 5 pi over 3. There are inflection points at x equals 0 and x equals pi. The graph decreases to the minimum, then increases to the maximum, and changes concavity at the inflection points. The graph is odd, so the portion on the left side of the y-axis is a rotationally symmetric image of the portion on the right side, reflected across the origin.       Note that this problem was designed to be completed in a reasonable amount of time on a quiz or exam, so it is not meant to be an exhaustive analysis of the function. For example it did not ask for intercepts, so we did not compute them. It also did not ask us to classify critical points as local maxima or minima, so we just identified them as critical points and used the sign of the derivative to determine where the function increases or decreases.        Consider the function with derivatives   (a) Identify vertical and horizontal asymptotes, intercepts and symmetry.  (b) Find critical points and regions of increase and decrease. Classify critical points as local maxima, local minima, or neither.  (c) Find intervals of concavity and inflection points.  (d) Combine parts (a)-(c) to sketch the graph of .    Video Solution  Here is a video solution to this problem.       Written Answers  Here are the answers to this problem to help you check your work. More detailed explanations are available in the video solution.  (a) There are no vertical asymptotes, and there is a horizontal asymptotes at and . The y-intercept is at , and there are no x-intercepts. The function is neither even nor odd, so there is no symmetry.  (b) The derivative is , which is defined everywhere, so there are no critical points from undefined derivatives. Setting the derivative equal to zero gives , which has no solutions, so there are no critical points from either. So there are no critical points. Choosing any test point in , we see that for all , so the function is increasing everywhere.  (c) The second derivative is , which is defined everywhere, so there are no inflection points from undefined derivatives. Setting the second derivative equal to zero gives , which has a solution at . Choosing test points in and shows that the function is concave up on and concave down on , so there is an inflection point at .  (d) Plotting the intercept and inflection point, and using the behavior determined in parts (a)-(c) gives the following sketch of the graph of :   Graph of the reciprocal of 1 plus the exponential of negative x. The function is increasing everywhere and has horizontal asymptotes at y equals 1 and y equals 0. There is an inflection point at x equals 0, where the graph changes from concave up to concave down. The graph approaches y equals 0 as x goes to negative infinity and approaches y equals 1 as x goes to positive infinity.        Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available in:  Additional Examples for Curve Sketching Part 2      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and briefly justify your reasoning.     If and , then has a local minimum at .     True. This is exactly the conclusion of the Second Derivative Test.      If and , then has neither a local minimum nor a local maximum at .     False. If , the Second Derivative Test is inconclusive, so we cannot conclude anything about local minima or maxima at . For instance, the function has and , but it has a local minimum at .      If , then must be decreasing at .     False. If , then the function is concave down at , but it could be increasing, decreasing, or constant at that point. For instance, the function has , but it is increasing at .      If is an odd function with a local maximum at , then there is a local minimum at .     True. If is odd, then . So if there is a local maximum at , then there is a local minimum at .      If is an even function with a local maximum at , then there is a local minimum at .     False. If is even, then . So if there is a local maximum at , then there is also a local maximum at .      If has symmetry (either even or odd) and has an inflection point at , then there is also an inflection point at .     True. If is even, then and the concavity changes at , so there is an inflection point at . If is odd, then and the concavity changes at , so there is also an inflection point at .      If is even, then is odd (whenever exists).     True. If is even, then . Differentiating both sides gives , so , which means that is odd.      The function is odd.     False. We have       The function is even.     True. We have so the function is even.      The function is decreasing on .     True. The derivative is . For , we have , so , so the function is decreasing on .      The function has exactly one critical point.     True. The derivative is , which is defined everywhere on the domain of , so there are no critical points from undefined derivatives. Setting the derivative equal to zero gives , which has a solution at . So there is exactly one critical point from , and there are no critical points from undefined derivatives, so there is exactly one critical point in total.      The function has exactly one inflection point.     True. The second derivative is , which is defined everywhere on the domain of , so there are no inflection points from undefined derivatives. Setting the second derivative equal to zero gives , which has a solution at . We can check by testing the sign of on either side of that it does change signs. For example, and . So there is exactly one inflection point from , and there are no inflection points from undefined derivatives.       While these True \/ False problems are good for quickly testing your understanding of the concepts, you should also practice applying these ideas to more complicated and complete problems (like those that appear on WeBWork) and can possibly appear on quizzes and exams.  Reminder: There are more fully worked-out examples available in Additional Examples for Curve Sketching Part 2 that you can use to practice with and to check your work against.   "
},
{
  "id": "sec-derivApp-curve2-2",
  "level": "2",
  "url": "sec-derivApp-curve2.html#sec-derivApp-curve2-2",
  "type": "Objectives",
  "number": "3.7",
  "title": "",
  "body": "  Apply the Second Derivative Test to classify critical points as local maxima, local minima, or inconclusive.  Determine if a function has even and odd symmetry and use symmetry to reduce the amount of work required in a sketch.   Use the full curve sketching method to analyze and sketch a variety of functions including:  Identifying domain, asymptotes, intercepts, and symmetry.  Find and classify critical points and determine where the function increases or decreases using .  Find inflection points and determine intervals of concavity using .  Combine all information to produce a clear sketch of the graph of the function.      "
},
{
  "id": "thm-second-derivative-test",
  "level": "2",
  "url": "sec-derivApp-curve2.html#thm-second-derivative-test",
  "type": "Theorem",
  "number": "3.7.1",
  "title": "Second Derivative Test.",
  "body": " Second Derivative Test   Let be twice differentiable near , and suppose .    If , then has a local minimum at .    If , then has a local maximum at .    If , then the test is inconclusive.     "
},
{
  "id": "rem-sdt-inconclusive",
  "level": "2",
  "url": "sec-derivApp-curve2.html#rem-sdt-inconclusive",
  "type": "Remark",
  "number": "3.7.2",
  "title": "",
  "body": " If , the point could still be a local maximum, a local minimum, or neither. In that case, you should return to the First Derivative Test (or another method).  "
},
{
  "id": "ex-second-derivative-test",
  "level": "2",
  "url": "sec-derivApp-curve2.html#ex-second-derivative-test",
  "type": "Example",
  "number": "3.7.3",
  "title": "",
  "body": "  Use the Second Derivative Test to classify the critical points of .    Doing some prep work, the derivatives are and . Now to find the critical points, we set , which gives . Factoring gives , so the critical points are and . Note that is defined everywhere, so there are no critical points from undefined derivatives.  Evaluating the second derivative at these points gives , so there is a local maximum at , and , so there is a local minimum at .   "
},
{
  "id": "def-even-odd",
  "level": "2",
  "url": "sec-derivApp-curve2.html#def-even-odd",
  "type": "Definition",
  "number": "3.7.4",
  "title": "Even and Odd Functions.",
  "body": " Even and Odd Functions     A function is even if for all in its domain. Visually, the graph of even functions are symmetric about the -axis, a mirror image on either side.   A graph of the function showing even symmetry about the -axis.   A coordinate plane showing the graph of y = x^2. The curve is a U-shaped parabola opening upward with its vertex at the origin. The left and right sides of the parabola are mirror images across the y-axis, illustrating even symmetry.       A function is odd if for all in its domain. Visually, the graph of odd functions has 180-degree ( radians) rotational symmetry about the origin.   A graph of the function showing odd symmetry about the origin.   A coordinate plane showing the graph of y = x^3. The curve is an S-shaped curve passing through the origin, symmetric about the origin. The left and right sides of the curve are mirror images across the origin, illustrating odd symmetry.        "
},
{
  "id": "ssec-symmetry-5",
  "level": "2",
  "url": "sec-derivApp-curve2.html#ssec-symmetry-5",
  "type": "Example",
  "number": "3.7.7",
  "title": "",
  "body": "  For each of the following functions, determine whether it is even, odd, both, or neither.           Even. We have             Odd. We have    Note: that you need to remember from your favorite trig class that is an odd function, so . It is also true that is an even function, so .            Neither. We have This is not equal to , so it is not even. It is also not equal to , so it is not odd.  We can also use a specific counterexample to show that is not even or odd. For instance, , but and .    "
},
{
  "id": "strat-curve-sketching",
  "level": "2",
  "url": "sec-derivApp-curve2.html#strat-curve-sketching",
  "type": "Strategy",
  "number": "3.7.8",
  "title": "Curve Sketching Checklist.",
  "body": " Curve Sketching Checklist   Compute and .  Find critical points from and where is undefined.  Use the sign of to determine where the function increases or decreases and to classify critical points.  Find possible inflection points from and where is undefined.  Use the sign of to determine concavity and confirm inflection points.  Find intercepts and identify any vertical asymptotes from the domain.  Describe end behavior as using our horizontal asymptote techniques.  Check for even\/odd symmetry, or .  Combine these features into a clear sketch.   "
},
{
  "id": "ex-curve-trig",
  "level": "2",
  "url": "sec-derivApp-curve2.html#ex-curve-trig",
  "type": "Example",
  "number": "3.7.9",
  "title": "",
  "body": "  Consider the function on the interval .  (a) Identify vertical and horizontal asymptotes, and symmetry if they exist.  (b) Find critical points and regions of increase and decrease.  (c) Find inflection points and intervals of concavity.  (d) Combine parts (a)-(c) to sketch the graph of . Plot all critical points and inflection points.    Video Solution  Here is a video solution to this problem.        Written Solution  (a) There are no vertical asymptotes since the domain is all real numbers. There are no horizontal asymptotes since the function grows without bound as .  The function is odd since, so it has 180-degree rotational symmetry about the origin.  (b) The derivative is . This is always defined, so there are no critical points from undefined derivatives. So we only need to solve to find critical points.   Note that the symmetry of the function means that the critical points are symmetric about the origin, and the behavior on is a mirror image of the behavior on .  Choosing test points in each interval determined by the critical points gives the following sign chart for :   So the function is decreasing on , and increasing on .  Again we could have used the symmetry of the function to reduce our work. For instance, we could have just analyzed the behavior on and then used symmetry to get the rest of our conclusion.  (c) The second derivative is , which is defined everywhere, so there are no inflection points from undefined derivatives. To find inflection points, we solve , which gives . This happens at . Because and are endpoints of the interval, they cannot be inflection points, so the only possible inflection points are at .  To determine intervals of concavity, we can use test points in each interval determined by the possible inflection points. This gives the following sign chart for :   So the function is concave up on and concave down on .  Because the function changes concavity at , these points are indeed inflection points.  (d) Combining all of this information, we can sketch the graph of . We know there are no asymptotes, and the function is odd, so we can focus on sketching the portion of the graph on and then use symmetry to get the rest of the graph.  Since we will need to plot all critical points and inflection points, we should compute the function values at these points.   Plotting these points and using the behavior determined in parts (b) and (c) gives the following sketch of the graph of :    A GIF showing the graph of first on the interval then using symmetry to complete the graph.   Animated graph of s of x equals x minus 2 sine x. The curve has a local minimum near x equals pi over 3 and a local maximum near x equals 5 pi over 3. There are inflection points at x equals 0 and x equals pi. The graph decreases to the minimum, then increases to the maximum, and changes concavity at the inflection points. The graph is odd, so the portion on the left side of the y-axis is a rotationally symmetric image of the portion on the right side, reflected across the origin.       Note that this problem was designed to be completed in a reasonable amount of time on a quiz or exam, so it is not meant to be an exhaustive analysis of the function. For example it did not ask for intercepts, so we did not compute them. It also did not ask us to classify critical points as local maxima or minima, so we just identified them as critical points and used the sign of the derivative to determine where the function increases or decreases.     "
},
{
  "id": "subsec-allTogether-7",
  "level": "2",
  "url": "sec-derivApp-curve2.html#subsec-allTogether-7",
  "type": "Example",
  "number": "3.7.12",
  "title": "",
  "body": "  Consider the function with derivatives   (a) Identify vertical and horizontal asymptotes, intercepts and symmetry.  (b) Find critical points and regions of increase and decrease. Classify critical points as local maxima, local minima, or neither.  (c) Find intervals of concavity and inflection points.  (d) Combine parts (a)-(c) to sketch the graph of .    Video Solution  Here is a video solution to this problem.       Written Answers  Here are the answers to this problem to help you check your work. More detailed explanations are available in the video solution.  (a) There are no vertical asymptotes, and there is a horizontal asymptotes at and . The y-intercept is at , and there are no x-intercepts. The function is neither even nor odd, so there is no symmetry.  (b) The derivative is , which is defined everywhere, so there are no critical points from undefined derivatives. Setting the derivative equal to zero gives , which has no solutions, so there are no critical points from either. So there are no critical points. Choosing any test point in , we see that for all , so the function is increasing everywhere.  (c) The second derivative is , which is defined everywhere, so there are no inflection points from undefined derivatives. Setting the second derivative equal to zero gives , which has a solution at . Choosing test points in and shows that the function is concave up on and concave down on , so there is an inflection point at .  (d) Plotting the intercept and inflection point, and using the behavior determined in parts (a)-(c) gives the following sketch of the graph of :   Graph of the reciprocal of 1 plus the exponential of negative x. The function is increasing everywhere and has horizontal asymptotes at y equals 1 and y equals 0. There is an inflection point at x equals 0, where the graph changes from concave up to concave down. The graph approaches y equals 0 as x goes to negative infinity and approaches y equals 1 as x goes to positive infinity.     "
},
{
  "id": "tf-curve2-01",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If and , then has a local minimum at .     True. This is exactly the conclusion of the Second Derivative Test.   "
},
{
  "id": "tf-curve2-02",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If and , then has neither a local minimum nor a local maximum at .     False. If , the Second Derivative Test is inconclusive, so we cannot conclude anything about local minima or maxima at . For instance, the function has and , but it has a local minimum at .   "
},
{
  "id": "tf-curve2-03",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If , then must be decreasing at .     False. If , then the function is concave down at , but it could be increasing, decreasing, or constant at that point. For instance, the function has , but it is increasing at .   "
},
{
  "id": "tf-curve2-05",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-05",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If is an odd function with a local maximum at , then there is a local minimum at .     True. If is odd, then . So if there is a local maximum at , then there is a local minimum at .   "
},
{
  "id": "tf-curve2-06",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-06",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If is an even function with a local maximum at , then there is a local minimum at .     False. If is even, then . So if there is a local maximum at , then there is also a local maximum at .   "
},
{
  "id": "tf-curve2-07",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-07",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If has symmetry (either even or odd) and has an inflection point at , then there is also an inflection point at .     True. If is even, then and the concavity changes at , so there is an inflection point at . If is odd, then and the concavity changes at , so there is also an inflection point at .   "
},
{
  "id": "tf-curve2-11",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-11",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  If is even, then is odd (whenever exists).     True. If is even, then . Differentiating both sides gives , so , which means that is odd.   "
},
{
  "id": "tf-curve2-15",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-15",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  The function is odd.     False. We have    "
},
{
  "id": "tf-curve2-16",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-16",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  The function is even.     True. We have so the function is even.   "
},
{
  "id": "tf-curve2-18",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-18",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  The function is decreasing on .     True. The derivative is . For , we have , so , so the function is decreasing on .   "
},
{
  "id": "tf-curve2-21",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-21",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  The function has exactly one critical point.     True. The derivative is , which is defined everywhere on the domain of , so there are no critical points from undefined derivatives. Setting the derivative equal to zero gives , which has a solution at . So there is exactly one critical point from , and there are no critical points from undefined derivatives, so there is exactly one critical point in total.   "
},
{
  "id": "tf-curve2-19",
  "level": "2",
  "url": "sec-derivApp-curve2.html#tf-curve2-19",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  The function has exactly one inflection point.     True. The second derivative is , which is defined everywhere on the domain of , so there are no inflection points from undefined derivatives. Setting the second derivative equal to zero gives , which has a solution at . We can check by testing the sign of on either side of that it does change signs. For example, and . So there is exactly one inflection point from , and there are no inflection points from undefined derivatives.   "
},
{
  "id": "sec-derivApp-curve2-10",
  "level": "2",
  "url": "sec-derivApp-curve2.html#sec-derivApp-curve2-10",
  "type": "Remark",
  "number": "3.7.13",
  "title": "",
  "body": " While these True \/ False problems are good for quickly testing your understanding of the concepts, you should also practice applying these ideas to more complicated and complete problems (like those that appear on WeBWork) and can possibly appear on quizzes and exams.  Reminder: There are more fully worked-out examples available in Additional Examples for Curve Sketching Part 2 that you can use to practice with and to check your work against.  "
},
{
  "id": "sec-derivApp-opt",
  "level": "1",
  "url": "sec-derivApp-opt.html",
  "type": "Section",
  "number": "3.8",
  "title": "Optimization Problems",
  "body": " Optimization Problems    Translate a word problem into a function to be maximized or minimized.  Identify controlling variables, constraints, and the target quantity in an optimization setting.  Determine a relevant domain based on physical or geometric restrictions.  Find absolute maxima and minima using critical points and endpoint checks.  Interpret an optimal solution in context and check that it is physically reasonable.    In many applications, we are not just interested in computing derivatives. Instead, we use derivatives as a tool to make the best possible choice: the largest area, the smallest cost, the least time, or the greatest profit. These sorts of real-world problems are called optimization problems .   Motivating Example and Overall Technique    Suppose we have meters of fencing to enclose a rectangular area. What dimensions maximize the area?    Click the Desmos model below to experiment with different rectangles and get a sense of the problem and for what the answer should be.    A GIF showing various rectangles with a perimeter of 40 meters. As the dimensions of the rectangle change, the area is calculated and displayed. The animation illustrates how the area changes for different length and width combinations, helping to visualize the optimization problem and understand which dimensions yield the maximum area.   Animated graph showing rectangles with a perimeter of 40 meters. As the length and width of the rectangle change, the area is calculated and displayed. The animation helps visualize how the area changes for different dimensions, guiding us towards understanding which dimensions maximize the area. It appears that the area is maximized when the rectangle is a square, with both length and width equal to 10 meters.       Use calculus techniques to find the dimensions of the rectangle of greatest area.      (a) Experimenting with the Desmos model suggests that the rectangle of greatest area is a square with side length 10 meters. We will confirm this using calculus in part (b).  (b) To solve this problem, we first identify the controlling variables, constraints, and target quantity.  Our target quantity that we are trying to maximize is the area of the rectangle ( ). The controlling variables are the length and width of the rectangle. The constraint is that the perimeter must be 40 meters.  Using the constraint, we can express one variable in terms of the other and write the area as a single-variable function.   Using this we can express the area as a function of :   The physical domain requires and , so . Now we find the absolute maximum of on .   The critical point satisfies , so .  Since the domain is a closed interval, we can use the Closed Interval Method to check the endpoints and the critical point:   So the largest Area value occurs at meters. Therefore meters. And so we can see from this example that the rectangle of greatest area is a square with side length 10 meters, confirming our initial guess from the Desmos model.    Since we are interested in finding absolute extrema, it is helpful that we already have a method for functions defined on a closed interval, as in the previous example. However, what happens when the domain is open or unbounded? Up to this point, our techniques in those settings allow us to find only local extrema . For that reason, the following two results will be especially useful.   First Derivative Test for Absolute Extrema   Suppose that is the only critical point of a function on an interval , then the following hold:    If for all and for all , then is an absolute maximum of on .    If for all and for all , then is an absolute minimum of on .       Second Derivative Test for Absolute Extrema   Suppose that is the only critical point of a function on an interval such that , then the following hold:    If , then is an absolute maximum of on .    If , then is an absolute minimum of on .      Now let's summarize the overall technique for solving optimization problems.   Technique for Optimization  Most optimization problems follow the same workflow:   Draw a labeled picture (if appropriate). Identify the controlling variable(s), the constraint(s), and the target quantity you want to maximize or minimize.  Write equations that relate the variables using geometry, formulas, or context.  Choose one controlling variable as the independent variable and rewrite the target quantity as a single-variable function (in our previous example our target quantity was area). Determine the domain of .   Find the desired absolute extrema of on its domain by one of   The Closed Interval Method if the domain is a closed interval.    The First Derivative Test for Absolute Extrema if the domain is open or unbounded and the critical point is the only candidate.    The Second Derivative Test for Absolute Extrema if the domain is open or unbounded and the critical point is the only candidate (and it is difficult to analyze the sign of the first derivative).      Interpret your answer in context and check that it makes sense.    And with that we are ready to solve optimization problems! Similar to related rates problems, the key is to practice the technique on a variety of examples so that you can recognize the pattern and apply it efficiently.    More Examples    A 10-quart bucket has cylindrical sides and a circular bottom (no top). What is the minimum surface area for such a bucket?  Hint: 10 quarts is cubic inches.    Use the Desmos graphing tool to visualize the situation, the surface area function, and approximate the optimal dimensions.    A GIF showing various cylinders with a fixed volume of 10 quarts. As the radius and height of the cylinder change, the surface area is calculated and displayed. The animation helps visualize how the surface area changes for different dimensions, guiding us towards understanding which dimensions minimize the surface area.   A GIF showing various cylinders with a fixed volume of 10 quarts. As the radius and height of the cylinder change, the surface area is calculated and displayed. The animation helps visualize how the surface area changes for different dimensions, guiding us towards understanding which dimensions minimize the surface area. It appears that the surface area is minimized when the radius is about 5.5 inches. At this point the Surface Area is around 300 square inches.       Find the minimum surface area. What are the dimensions that minimize surface area? Confirm that they minimize surface area.      The target quantity is the surface area   The constraint is the volume. Converting 10 quarts to cubic inches gives in 3 , so   Use the constraint to write in terms of :   Substitute into to obtain a single-variable function:   The domain is . Differentiate:   Set :   This is the only critical point. To confirm it is an absolute minimum, note that   Since the surface area grows without bound at both ends, the single critical point must give the absolute minimum.  Now compute the corresponding height:   In fact, simplifying shows , so the optimal bucket is as tall as its radius. This yields a bucket that is twice as wide as it is tall.   Real buckets are often designed with other priorities besides minimizing material, such as stability, ease of carrying, stackability, and manufacturing constraints. Optimization models are most useful when we clearly state what is being optimized and what is being ignored.       A line of ants travels from the lower-left corner to the upper-right corner of a cm by cm square of carpet. They may travel along the left or bottom edge at speed cm\/sec, and then cut across the carpet at speed cm\/sec.  Let be the distance traveled along an edge before entering the carpet. Find the value of that minimizes: (a) the total distance traveled, and (b) the total travel time.    The diagonal segment across the carpet has length . From the right triangle,   Therefore   The domain is . The total distance is   The total time is distance divided by speed. Along the edge the speed is , so time is . Across the carpet the speed is , so time is . Thus    (a) Minimize distance. Differentiate:   Solving would require . Squaring both sides gives , which reduces to , an impossibility. Therefore there are no critical points in , so the minimum occurs at an endpoint.   Since , the minimum distance occurs at . In other words, the straight diagonal is the shortest path.   (b) Minimize time. Differentiate:   Set :   Square both sides and simplify:   Apply the quadratic formula:   Only lies in , so it is our only critical point. Compare to the endpoints:   Since is the smallest of these values, the minimum time occurs at .   Minimizing distance and minimizing time are different problems because the speed changes. The ants save time by traveling partway along the faster edge and then cutting across the slower carpet.       A company produces a product for per item and sells it for dollars per item. Market demand is modeled by , meaning that when the price is , the number of items sold is .  What price maximizes total profit?    The profit per item is , and the number sold is . Therefore total profit is   The relevant domain is , since selling below cost is not sensible here, and demand reaches zero at .  Differentiate:   The critical point satisfies , so . Check the endpoints:   The maximum profit occurs at . The most profitable selling price is per item.      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available in:  Additional Examples for Optimization Problems      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and briefly justify your reasoning.     If , then must give an absolute maximum or minimum of .     False. A critical point is only a candidate. The absolute extremum could occur at an endpoint, and some critical points are neither maxima nor minima.      In an optimization problem on a closed interval, it is always necessary to check endpoints.     True. Absolute maxima and minima can occur at endpoints, so they must be included as candidates.      If the domain is , then an absolute minimum cannot exist.     False. An absolute minimum may exist on an open or unbounded domain, but we must justify it by analyzing critical points and limits at the boundaries.      Algebraic and Applied Problems    You have 48 meters of fencing to enclose a rectangle. What dimensions maximize area, and what is the maximum area?      An open-top box is made by cutting equal squares of side length from the corners of a by rectangle and folding up the sides. Write the volume as a function of and determine the value of that maximizes the volume.      A company has cost per item and demand . Write a profit function and determine the price that maximizes profit.      A person walks along a sidewalk at m\/s and then crosses a field at m\/s. Sketch a diagram and set up a time function similar to the ants problem. Explain what your independent variable is and what domain it must satisfy.      "
},
{
  "id": "sec-derivApp-opt-2",
  "level": "2",
  "url": "sec-derivApp-opt.html#sec-derivApp-opt-2",
  "type": "Objectives",
  "number": "3.8",
  "title": "",
  "body": "  Translate a word problem into a function to be maximized or minimized.  Identify controlling variables, constraints, and the target quantity in an optimization setting.  Determine a relevant domain based on physical or geometric restrictions.  Find absolute maxima and minima using critical points and endpoint checks.  Interpret an optimal solution in context and check that it is physically reasonable.   "
},
{
  "id": "sec-derivApp-opt-3",
  "level": "2",
  "url": "sec-derivApp-opt.html#sec-derivApp-opt-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "optimization problems "
},
{
  "id": "ex-opt-rectangle",
  "level": "2",
  "url": "sec-derivApp-opt.html#ex-opt-rectangle",
  "type": "Example",
  "number": "3.8.1",
  "title": "",
  "body": "  Suppose we have meters of fencing to enclose a rectangular area. What dimensions maximize the area?    Click the Desmos model below to experiment with different rectangles and get a sense of the problem and for what the answer should be.    A GIF showing various rectangles with a perimeter of 40 meters. As the dimensions of the rectangle change, the area is calculated and displayed. The animation illustrates how the area changes for different length and width combinations, helping to visualize the optimization problem and understand which dimensions yield the maximum area.   Animated graph showing rectangles with a perimeter of 40 meters. As the length and width of the rectangle change, the area is calculated and displayed. The animation helps visualize how the area changes for different dimensions, guiding us towards understanding which dimensions maximize the area. It appears that the area is maximized when the rectangle is a square, with both length and width equal to 10 meters.       Use calculus techniques to find the dimensions of the rectangle of greatest area.      (a) Experimenting with the Desmos model suggests that the rectangle of greatest area is a square with side length 10 meters. We will confirm this using calculus in part (b).  (b) To solve this problem, we first identify the controlling variables, constraints, and target quantity.  Our target quantity that we are trying to maximize is the area of the rectangle ( ). The controlling variables are the length and width of the rectangle. The constraint is that the perimeter must be 40 meters.  Using the constraint, we can express one variable in terms of the other and write the area as a single-variable function.   Using this we can express the area as a function of :   The physical domain requires and , so . Now we find the absolute maximum of on .   The critical point satisfies , so .  Since the domain is a closed interval, we can use the Closed Interval Method to check the endpoints and the critical point:   So the largest Area value occurs at meters. Therefore meters. And so we can see from this example that the rectangle of greatest area is a square with side length 10 meters, confirming our initial guess from the Desmos model.   "
},
{
  "id": "thm-abs-ext-first-deriv-test",
  "level": "2",
  "url": "sec-derivApp-opt.html#thm-abs-ext-first-deriv-test",
  "type": "Theorem",
  "number": "3.8.3",
  "title": "First Derivative Test for Absolute Extrema.",
  "body": " First Derivative Test for Absolute Extrema   Suppose that is the only critical point of a function on an interval , then the following hold:    If for all and for all , then is an absolute maximum of on .    If for all and for all , then is an absolute minimum of on .     "
},
{
  "id": "thm-abs-ext-second-deriv-test",
  "level": "2",
  "url": "sec-derivApp-opt.html#thm-abs-ext-second-deriv-test",
  "type": "Theorem",
  "number": "3.8.4",
  "title": "Second Derivative Test for Absolute Extrema.",
  "body": " Second Derivative Test for Absolute Extrema   Suppose that is the only critical point of a function on an interval such that , then the following hold:    If , then is an absolute maximum of on .    If , then is an absolute minimum of on .     "
},
{
  "id": "strat-optimization-method",
  "level": "2",
  "url": "sec-derivApp-opt.html#strat-optimization-method",
  "type": "Strategy",
  "number": "3.8.5",
  "title": "Technique for Optimization.",
  "body": " Technique for Optimization  Most optimization problems follow the same workflow:   Draw a labeled picture (if appropriate). Identify the controlling variable(s), the constraint(s), and the target quantity you want to maximize or minimize.  Write equations that relate the variables using geometry, formulas, or context.  Choose one controlling variable as the independent variable and rewrite the target quantity as a single-variable function (in our previous example our target quantity was area). Determine the domain of .   Find the desired absolute extrema of on its domain by one of   The Closed Interval Method if the domain is a closed interval.    The First Derivative Test for Absolute Extrema if the domain is open or unbounded and the critical point is the only candidate.    The Second Derivative Test for Absolute Extrema if the domain is open or unbounded and the critical point is the only candidate (and it is difficult to analyze the sign of the first derivative).      Interpret your answer in context and check that it makes sense.   "
},
{
  "id": "ex-opt-bucket",
  "level": "2",
  "url": "sec-derivApp-opt.html#ex-opt-bucket",
  "type": "Example",
  "number": "3.8.6",
  "title": "",
  "body": "  A 10-quart bucket has cylindrical sides and a circular bottom (no top). What is the minimum surface area for such a bucket?  Hint: 10 quarts is cubic inches.    Use the Desmos graphing tool to visualize the situation, the surface area function, and approximate the optimal dimensions.    A GIF showing various cylinders with a fixed volume of 10 quarts. As the radius and height of the cylinder change, the surface area is calculated and displayed. The animation helps visualize how the surface area changes for different dimensions, guiding us towards understanding which dimensions minimize the surface area.   A GIF showing various cylinders with a fixed volume of 10 quarts. As the radius and height of the cylinder change, the surface area is calculated and displayed. The animation helps visualize how the surface area changes for different dimensions, guiding us towards understanding which dimensions minimize the surface area. It appears that the surface area is minimized when the radius is about 5.5 inches. At this point the Surface Area is around 300 square inches.       Find the minimum surface area. What are the dimensions that minimize surface area? Confirm that they minimize surface area.      The target quantity is the surface area   The constraint is the volume. Converting 10 quarts to cubic inches gives in 3 , so   Use the constraint to write in terms of :   Substitute into to obtain a single-variable function:   The domain is . Differentiate:   Set :   This is the only critical point. To confirm it is an absolute minimum, note that   Since the surface area grows without bound at both ends, the single critical point must give the absolute minimum.  Now compute the corresponding height:   In fact, simplifying shows , so the optimal bucket is as tall as its radius. This yields a bucket that is twice as wide as it is tall.   Real buckets are often designed with other priorities besides minimizing material, such as stability, ease of carrying, stackability, and manufacturing constraints. Optimization models are most useful when we clearly state what is being optimized and what is being ignored.    "
},
{
  "id": "ex-opt-ants",
  "level": "2",
  "url": "sec-derivApp-opt.html#ex-opt-ants",
  "type": "Example",
  "number": "3.8.9",
  "title": "",
  "body": "  A line of ants travels from the lower-left corner to the upper-right corner of a cm by cm square of carpet. They may travel along the left or bottom edge at speed cm\/sec, and then cut across the carpet at speed cm\/sec.  Let be the distance traveled along an edge before entering the carpet. Find the value of that minimizes: (a) the total distance traveled, and (b) the total travel time.    The diagonal segment across the carpet has length . From the right triangle,   Therefore   The domain is . The total distance is   The total time is distance divided by speed. Along the edge the speed is , so time is . Across the carpet the speed is , so time is . Thus    (a) Minimize distance. Differentiate:   Solving would require . Squaring both sides gives , which reduces to , an impossibility. Therefore there are no critical points in , so the minimum occurs at an endpoint.   Since , the minimum distance occurs at . In other words, the straight diagonal is the shortest path.   (b) Minimize time. Differentiate:   Set :   Square both sides and simplify:   Apply the quadratic formula:   Only lies in , so it is our only critical point. Compare to the endpoints:   Since is the smallest of these values, the minimum time occurs at .   Minimizing distance and minimizing time are different problems because the speed changes. The ants save time by traveling partway along the faster edge and then cutting across the slower carpet.    "
},
{
  "id": "ex-opt-profit",
  "level": "2",
  "url": "sec-derivApp-opt.html#ex-opt-profit",
  "type": "Example",
  "number": "3.8.11",
  "title": "",
  "body": "  A company produces a product for per item and sells it for dollars per item. Market demand is modeled by , meaning that when the price is , the number of items sold is .  What price maximizes total profit?    The profit per item is , and the number sold is . Therefore total profit is   The relevant domain is , since selling below cost is not sensible here, and demand reaches zero at .  Differentiate:   The critical point satisfies , so . Check the endpoints:   The maximum profit occurs at . The most profitable selling price is per item.   "
},
{
  "id": "tf-opt-01",
  "level": "2",
  "url": "sec-derivApp-opt.html#tf-opt-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  If , then must give an absolute maximum or minimum of .     False. A critical point is only a candidate. The absolute extremum could occur at an endpoint, and some critical points are neither maxima nor minima.   "
},
{
  "id": "tf-opt-02",
  "level": "2",
  "url": "sec-derivApp-opt.html#tf-opt-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  In an optimization problem on a closed interval, it is always necessary to check endpoints.     True. Absolute maxima and minima can occur at endpoints, so they must be included as candidates.   "
},
{
  "id": "tf-opt-03",
  "level": "2",
  "url": "sec-derivApp-opt.html#tf-opt-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  If the domain is , then an absolute minimum cannot exist.     False. An absolute minimum may exist on an open or unbounded domain, but we must justify it by analyzing critical points and limits at the boundaries.   "
},
{
  "id": "prob-opt-rect-48",
  "level": "2",
  "url": "sec-derivApp-opt.html#prob-opt-rect-48",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  You have 48 meters of fencing to enclose a rectangle. What dimensions maximize area, and what is the maximum area?   "
},
{
  "id": "prob-opt-open-top-box",
  "level": "2",
  "url": "sec-derivApp-opt.html#prob-opt-open-top-box",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  An open-top box is made by cutting equal squares of side length from the corners of a by rectangle and folding up the sides. Write the volume as a function of and determine the value of that maximizes the volume.   "
},
{
  "id": "prob-opt-profit-new",
  "level": "2",
  "url": "sec-derivApp-opt.html#prob-opt-profit-new",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  A company has cost per item and demand . Write a profit function and determine the price that maximizes profit.   "
},
{
  "id": "prob-opt-time-speed-change",
  "level": "2",
  "url": "sec-derivApp-opt.html#prob-opt-time-speed-change",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  A person walks along a sidewalk at m\/s and then crosses a field at m\/s. Sketch a diagram and set up a time function similar to the ants problem. Explain what your independent variable is and what domain it must satisfy.   "
},
{
  "id": "sec-derivApp-ww",
  "level": "1",
  "url": "sec-derivApp-ww.html",
  "type": "Section",
  "number": "3.9",
  "title": "Additional Worked-Out Problems",
  "body": " Additional Worked-Out Problems   Motion in Physics  test    Related Rates  test    Linear Approximation and L'Hopital's Rule  test    Extrema  test    Mean Value Theorem  test    Curve Sketching Part 1    Let . Find the critical points, intervals of increase\/decrease, concavity, and inflection points. Then sketch a graph.      Let . Find where is increasing or decreasing and where it is concave up or concave down. Then sketch a graph.      A differentiable function has critical points at and . The sign of is positive on , negative on , and positive on . Describe the behavior of the graph and classify the critical points.      Curve Sketching Part 2  test    Optimization Problems  test   "
},
{
  "id": "prob-cs1-poly",
  "level": "2",
  "url": "sec-derivApp-ww.html#prob-cs1-poly",
  "type": "Example",
  "number": "3.9.1",
  "title": "",
  "body": "  Let . Find the critical points, intervals of increase\/decrease, concavity, and inflection points. Then sketch a graph.   "
},
{
  "id": "prob-cs1-rational",
  "level": "2",
  "url": "sec-derivApp-ww.html#prob-cs1-rational",
  "type": "Example",
  "number": "3.9.2",
  "title": "",
  "body": "  Let . Find where is increasing or decreasing and where it is concave up or concave down. Then sketch a graph.   "
},
{
  "id": "prob-cs1-sign-chart",
  "level": "2",
  "url": "sec-derivApp-ww.html#prob-cs1-sign-chart",
  "type": "Example",
  "number": "3.9.3",
  "title": "",
  "body": "  A differentiable function has critical points at and . The sign of is positive on , negative on , and positive on . Describe the behavior of the graph and classify the critical points.   "
},
{
  "id": "sec-integral-antiderivatives",
  "level": "1",
  "url": "sec-integral-antiderivatives.html",
  "type": "Section",
  "number": "4.1",
  "title": "Antiderivatives",
  "body": " Antiderivatives    Interpret an antiderivative as “reversing differentiation” and connect it to rates of change (velocity, acceleration).  Find general antiderivatives using basic antidifferentiation rules and linearity.  Solve simple initial value problems by using a given function value to determine the constant of integration.  Use simple substitution patterns (reverse Chain Rule) when a constant multiple is missing.  Recognize when an integrand must be rewritten (for example, by algebra or a trig identity) before antidifferentiating.     Reversing Differentiation  In many applications we care about some unknown function , but what we can measure or model is its rate of change, the derivative . Finding from is the process of antidifferentiation . We call an antiderivative (or primitive ) of . A helpful memory trick is “big , little .”    Suppose . Find a general formula for .    Since and , one antiderivative is . Any constant disappears when differentiating, so the general antiderivative is     Different choices of shift the graph up or down but do not change slopes. If we also know a single value like , then we can determine and get a unique function. Problems like this are called initial value problems .    Find the unique function satisfying and .    An antiderivative of is , so . Plug in : .       Definition and the Constant of Integration   Antiderivative   A function is an antiderivative of on an interval if for all in that interval.     Antiderivatives Differ by a Constant   Suppose is one antiderivative of on an interval. Then every antiderivative of has the form for some constant .    If is any antiderivative of , then . By the Uniqueness Theorem from the Mean Value Theorem section, two functions with the same derivative differ by a constant. Therefore .     Uniqueness with One Function Value   If is an antiderivative of on an interval, then for any point in the interval and any real number , there is exactly one antiderivative satisfying and .    By the previous theorem, any antiderivative has the form . Requiring gives , so , which is a single value.      Basic Antidifferentiation Rules  Antidifferentiation starts by reversing the derivative rules you already know. The key is to build a library of basic patterns, then use linearity to break complicated expressions into simpler pieces.   Linearity of Antiderivatives   If and , then for constants , an antiderivative of is .    Here are several basic patterns (each includes the constant of integration).   We are not formally defining integrals yet, so you can read the display above as a list of “reverse derivative” facts. The important idea is that the derivative table can be read backward, with a added.    Find a general antiderivative of .    Rewrite using exponents and secant: , , and . Then antidifferentiate term-by-term:   A quick check is to differentiate and confirm you get back .      A Simple “Reverse Chain Rule” Pattern  Sometimes a function looks like the derivative of a composition, except for a missing constant multiple. In these cases, you can often fix the issue by introducing the correct constant.    Find a general antiderivative of .    Since , we divide by 3:       Find a general antiderivative of .    Rewrite as a sum of powers: . Then antidifferentiate term-by-term:     Be careful with products and quotients. In general, the antiderivative of a product is not the product of antiderivatives. When you can rewrite the expression as a sum of basic patterns, the problem becomes manageable.    When You Must Rewrite First    Find a general antiderivative of .    The function is not on our basic list. Use the identity , which gives . Now antidifferentiate:       Acceleration, Velocity, and Position  In motion problems, derivatives connect position, velocity, and acceleration: and . If we know acceleration and some initial conditions, we can recover velocity and position by antidifferentiating twice.    A rocket has acceleration (in m\/sec 2 ). At time , its height is meters and its velocity is m\/sec. Find the velocity function and the height function .    Since , antidifferentiate:   Use : , so . Thus   Now antidifferentiate again because :   Use : , so . Therefore   With both conditions applied, the constants are determined and the solution is unique.      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Worked-Out Problems for Antiderivatives      Practice \/ Study Problems   Basic Antiderivatives    Find a general antiderivative of each function.           Find a general antiderivative of .      Rewrite First    Find a general antiderivative of . (Rewrite as a sum of powers first.)      Find a general antiderivative of . (Hint: use .)      Initial Value Problems    Find the unique function such that and .      A particle moves on a line with acceleration . At , the velocity is and the position is . Find and .      "
},
{
  "id": "sec-integral-antiderivatives-2",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#sec-integral-antiderivatives-2",
  "type": "Objectives",
  "number": "4.1",
  "title": "",
  "body": "  Interpret an antiderivative as “reversing differentiation” and connect it to rates of change (velocity, acceleration).  Find general antiderivatives using basic antidifferentiation rules and linearity.  Solve simple initial value problems by using a given function value to determine the constant of integration.  Use simple substitution patterns (reverse Chain Rule) when a constant multiple is missing.  Recognize when an integrand must be rewritten (for example, by algebra or a trig identity) before antidifferentiating.   "
},
{
  "id": "ssec-antiderivatives-motivation-2",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#ssec-antiderivatives-motivation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "antidifferentiation antiderivative primitive "
},
{
  "id": "ex-antiderivative-simple",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#ex-antiderivative-simple",
  "type": "Example",
  "number": "4.1.1",
  "title": "",
  "body": "  Suppose . Find a general formula for .    Since and , one antiderivative is . Any constant disappears when differentiating, so the general antiderivative is    "
},
{
  "id": "ssec-antiderivatives-motivation-4",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#ssec-antiderivatives-motivation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial value problems "
},
{
  "id": "ex-antiderivative-ivp",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#ex-antiderivative-ivp",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Find the unique function satisfying and .    An antiderivative of is , so . Plug in : .    "
},
{
  "id": "def-antiderivative",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#def-antiderivative",
  "type": "Definition",
  "number": "4.1.3",
  "title": "Antiderivative.",
  "body": " Antiderivative   A function is an antiderivative of on an interval if for all in that interval.   "
},
{
  "id": "thm-antiderivative-family",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#thm-antiderivative-family",
  "type": "Theorem",
  "number": "4.1.4",
  "title": "Antiderivatives Differ by a Constant.",
  "body": " Antiderivatives Differ by a Constant   Suppose is one antiderivative of on an interval. Then every antiderivative of has the form for some constant .    If is any antiderivative of , then . By the Uniqueness Theorem from the Mean Value Theorem section, two functions with the same derivative differ by a constant. Therefore .   "
},
{
  "id": "thm-ivp-unique-antiderivative",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#thm-ivp-unique-antiderivative",
  "type": "Theorem",
  "number": "4.1.5",
  "title": "Uniqueness with One Function Value.",
  "body": " Uniqueness with One Function Value   If is an antiderivative of on an interval, then for any point in the interval and any real number , there is exactly one antiderivative satisfying and .    By the previous theorem, any antiderivative has the form . Requiring gives , so , which is a single value.   "
},
{
  "id": "thm-antiderivative-linearity",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#thm-antiderivative-linearity",
  "type": "Theorem",
  "number": "4.1.6",
  "title": "Linearity of Antiderivatives.",
  "body": " Linearity of Antiderivatives   If and , then for constants , an antiderivative of is .   "
},
{
  "id": "ex-antiderivative-linearity",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#ex-antiderivative-linearity",
  "type": "Example",
  "number": "4.1.7",
  "title": "",
  "body": "  Find a general antiderivative of .    Rewrite using exponents and secant: , , and . Then antidifferentiate term-by-term:   A quick check is to differentiate and confirm you get back .   "
},
{
  "id": "ex-antiderivative-cos3x",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#ex-antiderivative-cos3x",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "  Find a general antiderivative of .    Since , we divide by 3:    "
},
{
  "id": "ex-antiderivative-algebra-first",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#ex-antiderivative-algebra-first",
  "type": "Example",
  "number": "4.1.9",
  "title": "",
  "body": "  Find a general antiderivative of .    Rewrite as a sum of powers: . Then antidifferentiate term-by-term:    "
},
{
  "id": "ex-antiderivative-sin-squared",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#ex-antiderivative-sin-squared",
  "type": "Example",
  "number": "4.1.10",
  "title": "",
  "body": "  Find a general antiderivative of .    The function is not on our basic list. Use the identity , which gives . Now antidifferentiate:    "
},
{
  "id": "ex-antiderivative-rocket",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#ex-antiderivative-rocket",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "  A rocket has acceleration (in m\/sec 2 ). At time , its height is meters and its velocity is m\/sec. Find the velocity function and the height function .    Since , antidifferentiate:   Use : , so . Thus   Now antidifferentiate again because :   Use : , so . Therefore   With both conditions applied, the constants are determined and the solution is unique.   "
},
{
  "id": "prob-anti-01",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#prob-anti-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Find a general antiderivative of each function.        "
},
{
  "id": "prob-anti-02",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#prob-anti-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Find a general antiderivative of .   "
},
{
  "id": "prob-anti-03",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#prob-anti-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Find a general antiderivative of . (Rewrite as a sum of powers first.)   "
},
{
  "id": "prob-anti-04",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#prob-anti-04",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Find a general antiderivative of . (Hint: use .)   "
},
{
  "id": "prob-anti-05",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#prob-anti-05",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Find the unique function such that and .   "
},
{
  "id": "prob-anti-06",
  "level": "2",
  "url": "sec-integral-antiderivatives.html#prob-anti-06",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  A particle moves on a line with acceleration . At , the velocity is and the position is . Find and .   "
},
{
  "id": "sec-integral-riemannSums",
  "level": "1",
  "url": "sec-integral-riemannSums.html",
  "type": "Section",
  "number": "4.2",
  "title": "Riemann Sums and Areas",
  "body": " Riemann Sums and Areas    Connect the definite integral to accumulation: total change from a rate of change.  Approximate a definite integral using Riemann sums (left, right, and “upper\/lower” estimates).  Interpret a definite integral geometrically as (signed) area under a curve.  Set up from a real-world description involving small increments .  Use upper and lower sums to bound an integral and estimate a value to a specified accuracy.     Review: Derivatives as Rates of Change  A function has a derivative with several complementary meanings. We will lean on these meanings as we introduce the integral.     Physical: If depends on , then is the rate of change of per tiny change in , starting at .     Geometric:  is the slope of the graph at the point , meaning the tangent line near is .     Numerical: For near , the derivative is approximated by a difference quotient: . This matches the linear approximation .     Algebraic: We define and use derivative rules to compute from a formula.    The physical idea is the driving one: derivatives describe change, so they are essential in any system that evolves. Once a situation is translated into a derivative statement, we can use numerical approximations or algebraic rules to answer questions. For example, to find maximum values of , we look for places where the tangent slope is zero, so we solve .    Accumulation of Influence  In the previous section we reversed differentiation algebraically: given a function , we looked for an antiderivative with . Now we will build a numerical definition of antiderivative that works even when no simple formula exists.  Think of as the influence on a quantity . Near , the derivative relationship says , so   A small input change produces a small output change controlled by . Adding many small changes gives the total change in . This “add up tiny effects” viewpoint is what the definite integral will formalize.  Here are several examples of “accumulation” in everyday language:   Position is the cumulative effect of velocity.  Velocity is the cumulative effect of acceleration.  Temperature is the cumulative effect of warming and cooling rates.  Energy used is the cumulative effect of power (wattage) over time.  Total mass is the cumulative effect of density over volume.  Total force is the cumulative effect of pressure over an area.  Population is the cumulative effect of net growth rate over time.  Total cost is the cumulative effect of marginal cost as production increases.     Riemann Sums for Distance  To make accumulation computable, we introduce a new operation: the definite integral . We will define it numerically as a limit of approximations.  Imagine a toy car whose velocity is (in meters per second) over . If is position and , then the total distance traveled by time is . Over a short time interval, distance is approximately velocity times time: .  A very rough estimate would treat the velocity as constant at the final value , giving , which is far too large because the car starts at rest. To improve the estimate, split into many short intervals.  For example, take subintervals, each of width . Using right endpoints , we get a right Riemann sum:   Since is increasing, sampling at the right endpoints gives an overestimate. Sampling at the left endpoints gives an underestimate:   So lies between 2.47 and 2.87. If we increase , the rectangles get thinner and the estimates improve. This motivates the definition of the integral as a limit.   Definite Integral (Riemann Sum Definition)   Let be a function on . Partition into subintervals of equal width , and choose a sample point in each subinterval. If the limit exists as , we define     The symbol is an elongated for “sum.” The reminds us that is becoming very small.  For this particular example we can also check against an algebraic antiderivative. Since and , we have , so , which lies between the two estimates above.    The Integral as Total Change  The distance story is one example of a more general idea. If is a rate of change of some quantity , meaning , then adding up tiny changes produces the total change .   You can read this as: “the total change equals the accumulated rate of change.” Later, we will prove this relationship (and learn fast techniques for computing integrals) in the Fundamental Theorem of Calculus.    Area Under a Curve  Now comes one of the most useful interpretations of the integral. Suppose on . Then is the area under the graph above the -axis from to .  To see why, approximate the area with rectangles. Over each small subinterval, the area of a rectangle is (height) (width) . Adding these areas produces the same type of Riemann sum we used for distance. Taking a limit gives the exact area.    Interpret as an area, and connect it to the distance example.    Since on , the integral equals the area under above . Approximating with right-endpoint rectangles produces the same sum we computed for distance with velocity . The area and the distance are numerically equal because both are defined by the same limiting process: in each case we add up terms of the form “height” “width.”    In this section we are focusing on functions that stay nonnegative, so “area under the curve” matches the integral directly. Later, when a function dips below the axis, the integral still makes sense but it represents signed area (area above minus area below).    Approximating an Integral with Upper and Lower Sums  Sometimes we want a numerical value of an integral even when we do not yet have a quick algebraic method. Upper and lower Riemann sums give guaranteed bounds.    Approximate to one decimal place. (That is, find a value within .)    The function increases on and decreases on . So an upper estimate uses right endpoints on the first half and left endpoints on the second half. A lower estimate does the opposite.  Take equal subintervals, so . A computed upper sum gives about 1.60 and a computed lower sum gives about 1.54, so   Averaging the bounds gives a good estimate: , which is certainly accurate to one decimal place.  (Later, once we have more integral tools, we can compute this exactly and confirm the approximation.)      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Worked-Out Problems for Riemann Sums and Areas      Practice \/ Study Problems   Setting Up Riemann Sums    Let on . Use equal subintervals and right endpoints. Write the Riemann sum explicitly in terms of . (Do not evaluate the limit.)      Let on . Use equal subintervals and left endpoints. Write the corresponding Riemann sum in terms of .      Left and Right Sums    A particle has velocity on . Compute the left and right Riemann sums with subintervals. Which one is larger, and why?      Let on . Without computing exact values, explain whether the left Riemann sum is an underestimate or overestimate, and do the same for the right Riemann sum.      Area Interpretation    Sketch a graph of a nonnegative function on and explain (in a sentence or two) why the sum represents the total area of rectangles.      Suppose on . Describe in words what represents geometrically.      Upper and Lower Bounds    The function is increasing on . Explain why the right Riemann sum is an overestimate and the left Riemann sum is an underestimate on this interval.      Estimate using left rectangles and right rectangles. Then average the two values.      "
},
{
  "id": "sec-integral-riemannSums-2",
  "level": "2",
  "url": "sec-integral-riemannSums.html#sec-integral-riemannSums-2",
  "type": "Objectives",
  "number": "4.2",
  "title": "",
  "body": "  Connect the definite integral to accumulation: total change from a rate of change.  Approximate a definite integral using Riemann sums (left, right, and “upper\/lower” estimates).  Interpret a definite integral geometrically as (signed) area under a curve.  Set up from a real-world description involving small increments .  Use upper and lower sums to bound an integral and estimate a value to a specified accuracy.   "
},
{
  "id": "def-definite-integral-riemann",
  "level": "2",
  "url": "sec-integral-riemannSums.html#def-definite-integral-riemann",
  "type": "Definition",
  "number": "4.2.1",
  "title": "Definite Integral (Riemann Sum Definition).",
  "body": " Definite Integral (Riemann Sum Definition)   Let be a function on . Partition into subintervals of equal width , and choose a sample point in each subinterval. If the limit exists as , we define    "
},
{
  "id": "ex-area-x-squared",
  "level": "2",
  "url": "sec-integral-riemannSums.html#ex-area-x-squared",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Interpret as an area, and connect it to the distance example.    Since on , the integral equals the area under above . Approximating with right-endpoint rectangles produces the same sum we computed for distance with velocity . The area and the distance are numerically equal because both are defined by the same limiting process: in each case we add up terms of the form “height” “width.”   "
},
{
  "id": "ex-riemann-sin-squared",
  "level": "2",
  "url": "sec-integral-riemannSums.html#ex-riemann-sin-squared",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Approximate to one decimal place. (That is, find a value within .)    The function increases on and decreases on . So an upper estimate uses right endpoints on the first half and left endpoints on the second half. A lower estimate does the opposite.  Take equal subintervals, so . A computed upper sum gives about 1.60 and a computed lower sum gives about 1.54, so   Averaging the bounds gives a good estimate: , which is certainly accurate to one decimal place.  (Later, once we have more integral tools, we can compute this exactly and confirm the approximation.)   "
},
{
  "id": "prob-riemann-01",
  "level": "2",
  "url": "sec-integral-riemannSums.html#prob-riemann-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Let on . Use equal subintervals and right endpoints. Write the Riemann sum explicitly in terms of . (Do not evaluate the limit.)   "
},
{
  "id": "prob-riemann-02",
  "level": "2",
  "url": "sec-integral-riemannSums.html#prob-riemann-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Let on . Use equal subintervals and left endpoints. Write the corresponding Riemann sum in terms of .   "
},
{
  "id": "prob-riemann-03",
  "level": "2",
  "url": "sec-integral-riemannSums.html#prob-riemann-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  A particle has velocity on . Compute the left and right Riemann sums with subintervals. Which one is larger, and why?   "
},
{
  "id": "prob-riemann-04",
  "level": "2",
  "url": "sec-integral-riemannSums.html#prob-riemann-04",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Let on . Without computing exact values, explain whether the left Riemann sum is an underestimate or overestimate, and do the same for the right Riemann sum.   "
},
{
  "id": "prob-riemann-05",
  "level": "2",
  "url": "sec-integral-riemannSums.html#prob-riemann-05",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Sketch a graph of a nonnegative function on and explain (in a sentence or two) why the sum represents the total area of rectangles.   "
},
{
  "id": "prob-riemann-06",
  "level": "2",
  "url": "sec-integral-riemannSums.html#prob-riemann-06",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Suppose on . Describe in words what represents geometrically.   "
},
{
  "id": "prob-riemann-07",
  "level": "2",
  "url": "sec-integral-riemannSums.html#prob-riemann-07",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  The function is increasing on . Explain why the right Riemann sum is an overestimate and the left Riemann sum is an underestimate on this interval.   "
},
{
  "id": "prob-riemann-08",
  "level": "2",
  "url": "sec-integral-riemannSums.html#prob-riemann-08",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Estimate using left rectangles and right rectangles. Then average the two values.   "
},
{
  "id": "sec-integral-defInt",
  "level": "1",
  "url": "sec-integral-defInt.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Definite Integral",
  "body": " The Definite Integral    State the Riemann-sum definition of and identify the parts of the notation.  Explain (at a conceptual level) what it means for a function to be integrable on .  Interpret as total change and as signed area.  Use basic integral rules (linearity, bounds, domination, splitting, reversing limits) to simplify and estimate integrals.  Compute simple definite integrals using basic integral formulas and the rules.     Precise Definition  We have described the integral as a number that can be approximated by Riemann sums. The integral is useful because it measures accumulation: given a velocity function it computes distance traveled, and given a nonnegative graph it computes the area between the graph and the -axis. More generally, if is a varying rate of change, then the integral computes total change; if represents a varying influence, then the integral computes cumulative effect.  The parts of the notation have standard names: is the integral sign, is the lower limit of integration , is the upper limit of integration , is the integrand , and is the variable of integration . The variable of integration is just a name, so changing it does not change the value: .   Definite Integral (Riemann Sum Definition)   Let be a function and let . For each positive integer , divide the interval into subintervals of equal width , with division points   Choose sample points with anywhere in the th subinterval: . If the limit exists, we define   We say is integrable on if this limit exists and has the same value for every possible choice of sample points .    (More formally, writing means: for any error tolerance , there is a number such that any Riemann sum with terms is within of .)    Integrable Functions  Most functions you meet in calculus are integrable on a closed interval as long as they do not blow up to infinity. In particular, continuous functions are integrable. (A full proof belongs to a Real Analysis course.)  To see what can go wrong, consider on . The function has a vertical asymptote at , so the area under the curve is not finite. If we try a Riemann sum with and sample points , we get   As , this grows without bound, so the Riemann sums do not approach a finite limit. Geometrically, this reflects infinite area near the vertical asymptote.    Negative Integrands and Signed Area  So far we have emphasized integrals with , where the integral is positive and equals an area. The definition still works when , but the value becomes negative. For example, if , then   Geometrically, we think of each term as (height) (width). When the graph lies below the -axis, the “height” is negative, so it contributes negative area. In general, is the signed area between the graph and the -axis: regions above count positive, and regions below count negative.    Evaluate using geometry.    The line crosses the -axis at . It is above the axis on and below the axis on . So the integral is (area of a triangle above) minus (area of a triangle below):       Reversing Limits of Integration  If the limits of integration are the same, then every Riemann sum has width , so . We also define switching limits by . This convention makes several rules cleaner, especially the splitting rule.    Integral Rules  Later we will learn powerful methods for computing integrals. For now, we will rely on a small collection of basic integrals and the following rules. Let and be integrable on , and let be constants.   Rules for Definite Integrals    Sum:  .  Difference:  .  Constant Multiple:  .  Domination: If on , then .  Bounds: If on , then .  Splitting: For any , .     The sum, difference, and constant multiple rules follow from the corresponding properties of sums. The bounds and domination rules match the geometric idea that a function trapped between two horizontal lines has area trapped between rectangles. The splitting rule matches “area over a big interval equals area over pieces,” and the sign convention for reversed limits makes it valid no matter the order of .    Basic Integrals  Here are three basic definite integrals that we can justify directly from Riemann sums:   Later, these will fall out quickly from the Fundamental Theorem of Calculus. For now, they give us a working toolkit.    Examples    Evaluate .    Since is not equal to , we expand the integrand and use the rules:   (Notice again: the variable of integration is just a name.)      Find an upper bound for .    Since , we have . By domination,       Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Worked-Out Problems for Definite Integrals      Practice \/ Study Problems   Concepts and Interpretation    In the notation , identify the lower limit, upper limit, integrand, and variable of integration.      Explain in a sentence or two what “signed area” means.      Without computing exactly, decide whether is positive, negative, or zero. Briefly justify your answer from the graph of .      Rules Practice    Use the splitting rule to rewrite as a sum of two integrals split at .      Suppose on . Use the bounds rule to trap between two numbers.      If on , explain what the domination rule says about the two integrals.      Basic Integrals    Compute .      Compute .      Compute .      Putting It Together    Evaluate by expanding the integrand and using basic integrals.      Find an upper bound for . (You do not need the exact value.)      "
},
{
  "id": "sec-integral-defInt-2",
  "level": "2",
  "url": "sec-integral-defInt.html#sec-integral-defInt-2",
  "type": "Objectives",
  "number": "4.3",
  "title": "",
  "body": "  State the Riemann-sum definition of and identify the parts of the notation.  Explain (at a conceptual level) what it means for a function to be integrable on .  Interpret as total change and as signed area.  Use basic integral rules (linearity, bounds, domination, splitting, reversing limits) to simplify and estimate integrals.  Compute simple definite integrals using basic integral formulas and the rules.   "
},
{
  "id": "def-riemann-integral",
  "level": "2",
  "url": "sec-integral-defInt.html#def-riemann-integral",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Definite Integral (Riemann Sum Definition).",
  "body": " Definite Integral (Riemann Sum Definition)   Let be a function and let . For each positive integer , divide the interval into subintervals of equal width , with division points   Choose sample points with anywhere in the th subinterval: . If the limit exists, we define   We say is integrable on if this limit exists and has the same value for every possible choice of sample points .   "
},
{
  "id": "ex-signed-area-line",
  "level": "2",
  "url": "sec-integral-defInt.html#ex-signed-area-line",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  Evaluate using geometry.    The line crosses the -axis at . It is above the axis on and below the axis on . So the integral is (area of a triangle above) minus (area of a triangle below):    "
},
{
  "id": "thm-integral-rules",
  "level": "2",
  "url": "sec-integral-defInt.html#thm-integral-rules",
  "type": "Theorem",
  "number": "4.3.3",
  "title": "Rules for Definite Integrals.",
  "body": " Rules for Definite Integrals    Sum:  .  Difference:  .  Constant Multiple:  .  Domination: If on , then .  Bounds: If on , then .  Splitting: For any , .    "
},
{
  "id": "ex-defint-expand-square",
  "level": "2",
  "url": "sec-integral-defInt.html#ex-defint-expand-square",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Evaluate .    Since is not equal to , we expand the integrand and use the rules:   (Notice again: the variable of integration is just a name.)   "
},
{
  "id": "ex-defint-upper-bound",
  "level": "2",
  "url": "sec-integral-defInt.html#ex-defint-upper-bound",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "  Find an upper bound for .    Since , we have . By domination,    "
},
{
  "id": "prob-defint-01",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  In the notation , identify the lower limit, upper limit, integrand, and variable of integration.   "
},
{
  "id": "prob-defint-02",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Explain in a sentence or two what “signed area” means.   "
},
{
  "id": "prob-defint-03",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Without computing exactly, decide whether is positive, negative, or zero. Briefly justify your answer from the graph of .   "
},
{
  "id": "prob-defint-04",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-04",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Use the splitting rule to rewrite as a sum of two integrals split at .   "
},
{
  "id": "prob-defint-05",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-05",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Suppose on . Use the bounds rule to trap between two numbers.   "
},
{
  "id": "prob-defint-06",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-06",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  If on , explain what the domination rule says about the two integrals.   "
},
{
  "id": "prob-defint-07",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-07",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "prob-defint-08",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-08",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "prob-defint-09",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-09",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "prob-defint-10",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Evaluate by expanding the integrand and using basic integrals.   "
},
{
  "id": "prob-defint-11",
  "level": "2",
  "url": "sec-integral-defInt.html#prob-defint-11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Find an upper bound for . (You do not need the exact value.)   "
},
{
  "id": "sec-integral-FTC",
  "level": "1",
  "url": "sec-integral-FTC.html",
  "type": "Section",
  "number": "4.4",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus    Explain how an integral with a variable upper limit defines an antiderivative.  Use the First Fundamental Theorem of Calculus to differentiate integral functions.  Use the Second Fundamental Theorem of Calculus to evaluate definite integrals from an antiderivative.  Interpret as total change when .  Sketch an integral function using the fact that .     Integral as Antiderivative  In the previous section we used a velocity function to compute distance traveled over a time interval . The distance is an integral defined as a limit of Riemann sums, adding up (velocity) (time) over many small time increments:   If we fix the starting time and assume , then taking a variable endpoint gives a function   Since the rate of change of position is velocity, . The remarkable point is that the integral function always produces an antiderivative of , even if we cannot find an antiderivative by reversing derivative formulas.    The First Fundamental Theorem of Calculus   First Fundamental Theorem of Calculus   Let be continuous on and define   Then for . In particular, is the unique antiderivative of satisfying .    In physical language: the rate of change of a cumulative effect up to time is the strength of the effect at time .   Proof idea. We start from the definition of the derivative: . Using the splitting rule for integrals, , so:   When is small, the integral is the area under over a very short interval, so it behaves like (height) (width). To make that precise, let be the minimum value of on and be the maximum value on . Since on this interval, the bounds rule gives   As , the interval shrinks to the point , so by continuity . By the squeeze theorem, , hence . The condition and the antiderivative uniqueness theorem give the uniqueness statement.    Derivatives of Integral Functions  The First Fundamental Theorem can be used as a basic derivative rule: if is continuous, then   Here is a constant, is the input, and is a dummy variable that only matters inside the integral. If the upper limit is a function , then the chain rule gives     Find the derivative of .    Rewrite with a fixed lower limit and then differentiate:        Let and be constants. Find if .    The expression is a number that does not depend on , so is constant and .      Sketching Integral Functions  An integral function may not have an elementary formula. Even so, it can be understood: its derivative is . In other words, the slope of is determined by the height of . This lets us use the same curve-sketching ideas from earlier sections.    Sketch the function .    By the First Fundamental Theorem, . Critical points occur where , that is where . This happens when for integers , so .  For concavity, . So possible inflection points occur when , i.e. or , which means .  Using the sign of gives the rough shape:   Because is even, the integral function is odd: . So the graph has rotational symmetry about the origin.      The Second Fundamental Theorem of Calculus   Second Fundamental Theorem of Calculus   Suppose is an antiderivative of on , so . Then   That is, the integral of a rate of change is the total change.     Proof idea. The First Fundamental Theorem says is an antiderivative of . Any two antiderivatives differ by a constant, so . Since , we get , so . Thus , and evaluating at gives .    Evaluate .    An antiderivative is . Apply the theorem:       Determine the area under and above the -axis.    First find where the graph meets the -axis: . Let , so the equation becomes , which has solutions and . Only gives real , so the intercepts are . The function is nonnegative between these intercepts, so the area is   Quick check: the base is about and the average height is around , so an area near is reasonable.      Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Worked-Out Problems for The Fundamental Theorem of Calculus      Practice \/ Study Problems   Using the First Fundamental Theorem    Let . Compute .      Compute .      Compute .      Using the Second Fundamental Theorem    Evaluate .      Evaluate .      Find the area between and the -axis on the interval .      "
},
{
  "id": "sec-integral-FTC-2",
  "level": "2",
  "url": "sec-integral-FTC.html#sec-integral-FTC-2",
  "type": "Objectives",
  "number": "4.4",
  "title": "",
  "body": "  Explain how an integral with a variable upper limit defines an antiderivative.  Use the First Fundamental Theorem of Calculus to differentiate integral functions.  Use the Second Fundamental Theorem of Calculus to evaluate definite integrals from an antiderivative.  Interpret as total change when .  Sketch an integral function using the fact that .   "
},
{
  "id": "thm-ftc-1",
  "level": "2",
  "url": "sec-integral-FTC.html#thm-ftc-1",
  "type": "Theorem",
  "number": "4.4.1",
  "title": "First Fundamental Theorem of Calculus.",
  "body": " First Fundamental Theorem of Calculus   Let be continuous on and define   Then for . In particular, is the unique antiderivative of satisfying .   "
},
{
  "id": "ex-ftoc-derivative-variable-limits",
  "level": "2",
  "url": "sec-integral-FTC.html#ex-ftoc-derivative-variable-limits",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": "  Find the derivative of .    Rewrite with a fixed lower limit and then differentiate:     "
},
{
  "id": "ex-ftoc-constant-limits",
  "level": "2",
  "url": "sec-integral-FTC.html#ex-ftoc-constant-limits",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  Let and be constants. Find if .    The expression is a number that does not depend on , so is constant and .   "
},
{
  "id": "ex-ftoc-sketch-sin-x2",
  "level": "2",
  "url": "sec-integral-FTC.html#ex-ftoc-sketch-sin-x2",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": "  Sketch the function .    By the First Fundamental Theorem, . Critical points occur where , that is where . This happens when for integers , so .  For concavity, . So possible inflection points occur when , i.e. or , which means .  Using the sign of gives the rough shape:   Because is even, the integral function is odd: . So the graph has rotational symmetry about the origin.   "
},
{
  "id": "thm-ftc-2",
  "level": "2",
  "url": "sec-integral-FTC.html#thm-ftc-2",
  "type": "Theorem",
  "number": "4.4.5",
  "title": "Second Fundamental Theorem of Calculus.",
  "body": " Second Fundamental Theorem of Calculus   Suppose is an antiderivative of on , so . Then   That is, the integral of a rate of change is the total change.   "
},
{
  "id": "ex-ftc-evaluate-even-poly",
  "level": "2",
  "url": "sec-integral-FTC.html#ex-ftc-evaluate-even-poly",
  "type": "Example",
  "number": "4.4.6",
  "title": "",
  "body": "  Evaluate .    An antiderivative is . Apply the theorem:    "
},
{
  "id": "ex-ftc-area-poly",
  "level": "2",
  "url": "sec-integral-FTC.html#ex-ftc-area-poly",
  "type": "Example",
  "number": "4.4.7",
  "title": "",
  "body": "  Determine the area under and above the -axis.    First find where the graph meets the -axis: . Let , so the equation becomes , which has solutions and . Only gives real , so the intercepts are . The function is nonnegative between these intercepts, so the area is   Quick check: the base is about and the average height is around , so an area near is reasonable.   "
},
{
  "id": "prob-ftoc-01",
  "level": "2",
  "url": "sec-integral-FTC.html#prob-ftoc-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Let . Compute .   "
},
{
  "id": "prob-ftoc-02",
  "level": "2",
  "url": "sec-integral-FTC.html#prob-ftoc-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "prob-ftoc-03",
  "level": "2",
  "url": "sec-integral-FTC.html#prob-ftoc-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "prob-ftoc-04",
  "level": "2",
  "url": "sec-integral-FTC.html#prob-ftoc-04",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Evaluate .   "
},
{
  "id": "prob-ftoc-05",
  "level": "2",
  "url": "sec-integral-FTC.html#prob-ftoc-05",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Evaluate .   "
},
{
  "id": "prob-ftoc-06",
  "level": "2",
  "url": "sec-integral-FTC.html#prob-ftoc-06",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Find the area between and the -axis on the interval .   "
},
{
  "id": "sec-integral-net",
  "level": "1",
  "url": "sec-integral-net.html",
  "type": "Section",
  "number": "4.5",
  "title": "Net Change Theorem and Indefinite Integrals",
  "body": " Net Change Theorem and Indefinite Integrals    Interpret a definite integral as net change of a quantity whose rate of change is known.  Use indefinite integral notation to represent the family of all antiderivatives.  Compute net change from a velocity (or rate) function using .  Compute the average value of a function on an interval.  State and use the Mean Value Theorem for Integrals.     Review: Four Meanings of the Definite Integral  The definite integral has several complementary interpretations.     Physical: Suppose and are physical quantities that depend continuously on an independent variable , with and . If is the rate of change of , meaning , then the integral of over is the total change in from to .  In Leibniz notation, this is written   In Newton notation, if , then   which is the Second Fundamental Theorem of Calculus. If an initial value is known, then   which is the First Fundamental Theorem of Calculus.     Geometric: The integral is the signed area between the graph and the -axis on , counting regions above the axis as positive and regions below as negative.     Numerical: Divide into increments of width . Choose sample points (one in each increment). Then the integral is approximated by a Riemann sum:   and the exact integral is the limit as (so ).     Algebraic: If we can find an antiderivative with , then . Later we will develop systematic methods for finding antiderivatives (for example, substitution, which reverses the Chain Rule).      The Net Change Theorem   Net Change Theorem   If a quantity changes with respect to at a rate , then the net change in on is   Equivalently, if , then .    The phrase net change emphasizes that increases and decreases both count: if the rate is sometimes positive and sometimes negative, the integral records the overall effect.    Indefinite Integral Notation  Because antiderivatives and integrals are linked by the Fundamental Theorems, we use the integral sign as notation for the most general antiderivative:   The expression is called an indefinite integral . It represents a family of functions (all antiderivatives), not a single number.    Compute .    Since , we have       A car has velocity (meters per second). How far does it travel from to ?    Distance traveled is net change in position: . First find an antiderivative:   Now evaluate as a definite integral:       Average Value of a Function  In a Riemann sum approximation, can be rewritten to highlight an average of the sample values:   Taking the limit as motivates the definition of the average value of on :    The average value of on is       Find the average value of on .    An antiderivative is . Therefore,   Even though ranges from 0 to 2 on , the average is above 1 because the graph bulges upward.      Let be a position function with velocity . Show that the average value of on equals total distance traveled divided by elapsed time.    Using the definition of average value and the Second Fundamental Theorem:       Mean Value Theorem for Integrals   Mean Value Theorem for Integrals   If is continuous on , then there exists a point such that   In words: at some point, the function attains its average value.     Proof idea. Let . By the Mean Value Theorem for derivatives, there is such that . By the First Fundamental Theorem, . Also . Substituting gives the result.  In the example on , we found . So there is with , meaning .    Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Worked-Out Problems for Net Change Theorem and Indefinite Integrals      Practice \/ Study Problems   Net Change and Indefinite Integrals    A bacteria culture grows at rate (cells per hour). Interpret in words.      Compute .      Compute .      Average Value    Find the average value of on .      Let be continuous on and suppose . Use the bounds rule to give an inequality for .      "
},
{
  "id": "sec-integral-net-2",
  "level": "2",
  "url": "sec-integral-net.html#sec-integral-net-2",
  "type": "Objectives",
  "number": "4.5",
  "title": "",
  "body": "  Interpret a definite integral as net change of a quantity whose rate of change is known.  Use indefinite integral notation to represent the family of all antiderivatives.  Compute net change from a velocity (or rate) function using .  Compute the average value of a function on an interval.  State and use the Mean Value Theorem for Integrals.   "
},
{
  "id": "thm-net-change",
  "level": "2",
  "url": "sec-integral-net.html#thm-net-change",
  "type": "Theorem",
  "number": "4.5.1",
  "title": "Net Change Theorem.",
  "body": " Net Change Theorem   If a quantity changes with respect to at a rate , then the net change in on is   Equivalently, if , then .   "
},
{
  "id": "ex-indef-int-power",
  "level": "2",
  "url": "sec-integral-net.html#ex-indef-int-power",
  "type": "Example",
  "number": "4.5.2",
  "title": "",
  "body": "  Compute .    Since , we have    "
},
{
  "id": "ex-net-change-velocity",
  "level": "2",
  "url": "sec-integral-net.html#ex-net-change-velocity",
  "type": "Example",
  "number": "4.5.3",
  "title": "",
  "body": "  A car has velocity (meters per second). How far does it travel from to ?    Distance traveled is net change in position: . First find an antiderivative:   Now evaluate as a definite integral:    "
},
{
  "id": "def-average-value",
  "level": "2",
  "url": "sec-integral-net.html#def-average-value",
  "type": "Definition",
  "number": "4.5.4",
  "title": "",
  "body": "  The average value of on is    "
},
{
  "id": "ex-average-sqrt",
  "level": "2",
  "url": "sec-integral-net.html#ex-average-sqrt",
  "type": "Example",
  "number": "4.5.5",
  "title": "",
  "body": "  Find the average value of on .    An antiderivative is . Therefore,   Even though ranges from 0 to 2 on , the average is above 1 because the graph bulges upward.   "
},
{
  "id": "ex-average-velocity",
  "level": "2",
  "url": "sec-integral-net.html#ex-average-velocity",
  "type": "Example",
  "number": "4.5.6",
  "title": "",
  "body": "  Let be a position function with velocity . Show that the average value of on equals total distance traveled divided by elapsed time.    Using the definition of average value and the Second Fundamental Theorem:    "
},
{
  "id": "thm-mvt-integrals",
  "level": "2",
  "url": "sec-integral-net.html#thm-mvt-integrals",
  "type": "Theorem",
  "number": "4.5.7",
  "title": "Mean Value Theorem for Integrals.",
  "body": " Mean Value Theorem for Integrals   If is continuous on , then there exists a point such that   In words: at some point, the function attains its average value.   "
},
{
  "id": "prob-net-change-01",
  "level": "2",
  "url": "sec-integral-net.html#prob-net-change-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  A bacteria culture grows at rate (cells per hour). Interpret in words.   "
},
{
  "id": "prob-indef-01",
  "level": "2",
  "url": "sec-integral-net.html#prob-indef-01",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "prob-indef-02",
  "level": "2",
  "url": "sec-integral-net.html#prob-indef-02",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "prob-avg-01",
  "level": "2",
  "url": "sec-integral-net.html#prob-avg-01",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Find the average value of on .   "
},
{
  "id": "prob-avg-02",
  "level": "2",
  "url": "sec-integral-net.html#prob-avg-02",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Let be continuous on and suppose . Use the bounds rule to give an inequality for .   "
},
{
  "id": "sec-integral-usub",
  "level": "1",
  "url": "sec-integral-usub.html",
  "type": "Section",
  "number": "4.6",
  "title": "Substitution Rule for Integration",
  "body": " Substitution Rule for Integration    Recognize when an integrand has the form and apply substitution.  Use substitution to evaluate indefinite integrals and then check results by differentiation.  Use substitution with updated limits to evaluate definite integrals.  Use symmetry (odd functions) to evaluate certain definite integrals quickly.  Model a real situation with an integral and interpret a substitution physically.     Reversing the Chain Rule  By the Second Fundamental Theorem of Calculus, one efficient way to evaluate a definite integral is to find an antiderivative and compute . In this section we develop a powerful method for finding antiderivatives by reversing the Chain Rule: .  For example, consider the indefinite integral . The inside function appears inside the cosine, and its derivative is . Since the integrand contains a factor , we rewrite it to match the Chain Rule pattern:   Now set . Then , so , and the integral becomes   A quick check comes from the Chain Rule: if , then .    Substitution Method  Substitution is a structured way to reverse the Chain Rule. The goal is to rewrite the integrand so it looks like .    Start with an integral . Look for an inside function so that appears as a factor (possibly after multiplying and dividing by a constant):   After factoring out , rewrite the remaining part as a function of .    Let , so . Then rewrite the integral in :   Compute using basic antiderivatives and rules.    Substitute back to express the final answer in terms of :       Examples    Evaluate .    Let . Then , so . Thus,       Evaluate .    Let , so and . We also solve for : gives .       Evaluate .    Let . Then . Rewrite to produce :       Evaluate .    Let . Then , so .       Evaluate in two ways, and explain why the answers agree.    Method 1: Let . Then .   Method 2: Write the integrand as and let . Then .   These differ by a constant because . So , meaning the two antiderivative families are the same.      Substitution for Definite Integrals  Substitution can be used directly with definite integrals by changing the limits. If , then     Evaluate .    Let , so and . Update the limits: when , ; when , .       Integral Symmetry for Odd Functions   Integral Symmetry Theorem   If is odd, meaning , then for any ,      By the splitting rule,   In the first integral, substitute , so . When , ; when , . Then:   Therefore .     Evaluate .    The integrand is odd because . By the symmetry theorem,       The graph of is rotationally symmetric about the origin, so the signed areas on and cancel.       Application: Heart Flow Rate  In a medical test, a known amount of dye is injected into a vein flowing toward the heart. Let be the measured dye concentration in arterial blood (mg per liter) at time minutes. If the (unknown) blood flow rate is constant at liters per minute, then the total blood volume that has passed is . Let be the dye concentration after liters have passed, so .  The total amount of dye (in mg) can be computed by integrating concentration with respect to volume:   Substitute , so and . Then   Solving for the flow rate gives   In practice, once the dye has passed through the system, becomes (essentially) zero, so the improper integral can be replaced by a finite upper limit chosen from the data. The remaining integral can be approximated numerically (for example, by a Riemann sum or a spreadsheet).    Additional Worked-Out Examples  To keep this section at a reasonable length, we include only a few representative examples directly in the text. If you find yourself stuck on a homework problem, or if you are studying before a quiz or exam, additional fully worked-out examples are available via:  Additional Worked-Out Problems for Substitution Rule for Integration      Practice \/ Study Problems   Indefinite Integrals by Substitution    Compute .      Compute .      Compute and check by differentiating.      Definite Integrals and Symmetry    Evaluate using substitution with updated limits.      Without finding an antiderivative, evaluate .      "
},
{
  "id": "sec-integral-usub-2",
  "level": "2",
  "url": "sec-integral-usub.html#sec-integral-usub-2",
  "type": "Objectives",
  "number": "4.6",
  "title": "",
  "body": "  Recognize when an integrand has the form and apply substitution.  Use substitution to evaluate indefinite integrals and then check results by differentiation.  Use substitution with updated limits to evaluate definite integrals.  Use symmetry (odd functions) to evaluate certain definite integrals quickly.  Model a real situation with an integral and interpret a substitution physically.   "
},
{
  "id": "ex-sub-01",
  "level": "2",
  "url": "sec-integral-usub.html#ex-sub-01",
  "type": "Example",
  "number": "4.6.1",
  "title": "",
  "body": "  Evaluate .    Let . Then , so . Thus,    "
},
{
  "id": "ex-sub-02",
  "level": "2",
  "url": "sec-integral-usub.html#ex-sub-02",
  "type": "Example",
  "number": "4.6.2",
  "title": "",
  "body": "  Evaluate .    Let , so and . We also solve for : gives .    "
},
{
  "id": "ex-sub-03",
  "level": "2",
  "url": "sec-integral-usub.html#ex-sub-03",
  "type": "Example",
  "number": "4.6.3",
  "title": "",
  "body": "  Evaluate .    Let . Then . Rewrite to produce :    "
},
{
  "id": "ex-sub-04",
  "level": "2",
  "url": "sec-integral-usub.html#ex-sub-04",
  "type": "Example",
  "number": "4.6.4",
  "title": "",
  "body": "  Evaluate .    Let . Then , so .    "
},
{
  "id": "ex-sub-05",
  "level": "2",
  "url": "sec-integral-usub.html#ex-sub-05",
  "type": "Example",
  "number": "4.6.5",
  "title": "",
  "body": "  Evaluate in two ways, and explain why the answers agree.    Method 1: Let . Then .   Method 2: Write the integrand as and let . Then .   These differ by a constant because . So , meaning the two antiderivative families are the same.   "
},
{
  "id": "ex-sub-def-01",
  "level": "2",
  "url": "sec-integral-usub.html#ex-sub-def-01",
  "type": "Example",
  "number": "4.6.6",
  "title": "",
  "body": "  Evaluate .    Let , so and . Update the limits: when , ; when , .    "
},
{
  "id": "thm-integral-symmetry-odd",
  "level": "2",
  "url": "sec-integral-usub.html#thm-integral-symmetry-odd",
  "type": "Theorem",
  "number": "4.6.7",
  "title": "Integral Symmetry Theorem.",
  "body": " Integral Symmetry Theorem   If is odd, meaning , then for any ,    "
},
{
  "id": "ssec-integral-symmetry-3",
  "level": "2",
  "url": "sec-integral-usub.html#ssec-integral-symmetry-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " By the splitting rule,   In the first integral, substitute , so . When , ; when , . Then:   Therefore .  "
},
{
  "id": "ex-odd-symmetry-01",
  "level": "2",
  "url": "sec-integral-usub.html#ex-odd-symmetry-01",
  "type": "Example",
  "number": "4.6.8",
  "title": "",
  "body": "  Evaluate .    The integrand is odd because . By the symmetry theorem,    "
},
{
  "id": "fig-xcosx",
  "level": "2",
  "url": "sec-integral-usub.html#fig-xcosx",
  "type": "Figure",
  "number": "4.6.9",
  "title": "",
  "body": "  The graph of is rotationally symmetric about the origin, so the signed areas on and cancel.    "
},
{
  "id": "prob-sub-01",
  "level": "2",
  "url": "sec-integral-usub.html#prob-sub-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "prob-sub-02",
  "level": "2",
  "url": "sec-integral-usub.html#prob-sub-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "prob-sub-03",
  "level": "2",
  "url": "sec-integral-usub.html#prob-sub-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Compute and check by differentiating.   "
},
{
  "id": "prob-sub-def-01",
  "level": "2",
  "url": "sec-integral-usub.html#prob-sub-def-01",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Evaluate using substitution with updated limits.   "
},
{
  "id": "prob-odd-01",
  "level": "2",
  "url": "sec-integral-usub.html#prob-odd-01",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Without finding an antiderivative, evaluate .   "
},
{
  "id": "sec-integral-ww",
  "level": "1",
  "url": "sec-integral-ww.html",
  "type": "Section",
  "number": "4.7",
  "title": "Additional Worked-Out Problems",
  "body": " Additional Worked-Out Problems   Antiderivatives  test    Riemann Sums and Areas  test    Definite Integrals  test    The Fundamental Theorem of Calculus  test    Net Change Theorem and Indefinite Integrals  test    Substitution Rule for Integration  test   "
},
{
  "id": "formula-sheet",
  "level": "1",
  "url": "formula-sheet.html",
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
