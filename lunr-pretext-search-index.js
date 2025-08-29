var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Students: How to Use this Book",
  "body": " Students: How to Use this Book  Welcome to MTH 132: Calculus I . This book has been created to guide you through the course, to support your in-class learning, and to give you a resource for independent study and practice.  Structure of the Book  The book is divided into chapters and sections that match the topics of the course. Each section may contain:   Definitions of important concepts.  Theorems that summarize key results.  Examples to illustrate ideas and methods.  Exercises for you to practice and check understanding.  Remarks and alerts that highlight common pitfalls or important insights.   How to Approach Each Section  Here are some suggestions for making the most of each section:   Before class: Skim the definitions, theorems, and examples. Preview the exercises.  During class: Focus on interactive examples and problem-solving activities with your peers and instructor.  After class: Revisit the examples, complete the exercises, and check solutions or hints when provided.   Exercises and Practice  Exercises are a central part of learning calculus. You will find:   Conceptual checks to test your understanding of definitions and theorems.  Computational practice to build fluency with calculations and algebraic techniques.  Applications that connect calculus to real-world situations.   Some exercises will resemble questions on WeBWorK, quizzes, or exams, while others are meant for practice and exploration.  Technology and Tools  This book makes use of graphs, figures, and sometimes interactive elements (such as Desmos activities). A scientific calculator or graphing tool may be helpful, especially when you are first learning new concepts. However, calculators should not become a crutch—the main goal is to understand the ideas and be able to carry out the work by hand. Be aware that calculator use may be restricted or not allowed at all on quizzes and exams, so practicing without a calculator is important preparation.  Connections to Course Materials  This book works alongside other course resources:   D2L for announcements, grades, and course structure.  WeBWorK for online homework practice.  Recitations and weekly reviews for collaborative practice.  Quizzes and exams for formal assessment.   Study Strategies  Some tips for success:   Practice actively: work through examples, don’t just read them.  Collaborate with classmates and discuss your reasoning.  Always show your work and leave answers in exact form when possible.  Interpret results and think about what they mean in context.   Accessibility and Flexibility  This book has been designed with accessibility in mind. Figures include alt text, and the content can be navigated electronically or in print. Use whichever format supports your learning best.  Final Encouragement  Remember: this book is a tool, not just a reference. Stay engaged, practice often, and combine it with the support of your instructors, TAs, and the Math Learning Center. With steady effort, you will succeed in calculus.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Instructors: How to Use this Book",
  "body": " Instructors: How to Use this Book  This text is both a student resource and a teaching tool for MTH 132: Calculus I . It aligns with course goals, departmental pacing, and assessments such as weekly reviews, quizzes, and exams. The notes below suggest ways to integrate sections, examples, and exercises into your teaching while maintaining consistency across the course.  Structure and Organization  The chapters and sections mirror the course calendar. Within each section you will find:   Definitions and Theorems that frame the main ideas.  Examples that model reasoning, computation, and interpretation.  Exercises spanning conceptual checks, skill practice, and applications.  Remarks and alerts highlighting pitfalls and teaching notes.   Examples and exercises are selected to build toward the techniques and habits needed for quizzes and department-wide exams.  Using the Book in Class  Suggestions for weaving the text into lessons:   Lead with ideas: foreground the definition or theorem and its intuition before procedural steps.  Model reasoning: work through examples that showcase setup, algebra, and interpretation.  Guided practice: assign short in-class problems that mirror examples, leaving space for collaboration.  Bridge to recitation: point out which exercise sets are best suited for group work later in the week.   Technology and Tools  This book includes graphs, figures, and sometimes interactive elements (such as Desmos activities). These can be effective for building intuition, especially early on. Calculators and graphing tools may be used by students when first learning new content, but they should not become a substitute for understanding. Remind students that calculator use is often restricted—or entirely prohibited—on quizzes and exams (policies vary by semester). Encourage them to practice without calculators so they are prepared for assessments.  Supporting Student Learning  Help students get the most out of the text by making expectations explicit:   Ask students to preview definitions and theorems before class.  Encourage them to revisit worked examples after class, comparing their solutions to the text.  Promote group work in recitations and study sessions, emphasizing clear explanation of reasoning.  Stress the importance of exact form, proper notation, and interpretation of results.   Flexibility for Teaching Styles  The text can be used with different instructional approaches:   Lecture-forward: select a small set of worked examples and reserve time for guided practice.  Activity-based: begin with targeted problems, then synthesize with definitions and theorems.  Flipped: assign readings or videos outside class and use class time for problem-solving and Q&A.   Supplement with your own examples or applications while keeping alignment with shared course goals.  Connections to Course Infrastructure  Integrate this book with other course resources:   D2L for announcements, scheduling, and gradebook access.  WeBWorK for online practice aligned with section skills.  Recitations and weekly reviews for structured collaboration.  Departmental quizzes and exams for common assessment standards.   Final Notes  This book provides a shared framework for consistency across all sections of MTH 132 . Adapt examples and presentation to fit your teaching style while keeping notation, core content, and expectations uniform. Model the same habits we want students to adopt: show work clearly, use precise language, and interpret results in context.  "
},
{
  "id": "sec-graphical-limits",
  "level": "1",
  "url": "sec-graphical-limits.html",
  "type": "Section",
  "number": "1.1",
  "title": "Limits from Graphs and Notation",
  "body": " Limits from Graphs and Notation    Understand the intuitive definition of a limit and how to express it using mathematical notation.  Determine limits from tables of values and from the graph of a function.  Recognize when a limit exists, and identify cases where the limit does not exist.  Interpret and compute one-sided limits, and explain how they relate to the existence of two-sided limits.  Understand the meaning of infinite limits and how they relate to vertical asymptotes.  Locate vertical asymptotes and describe a function’s behavior on both sides of each asymptote.     Definition of Limits  The concept of a limit is one of the cornerstones of calculus. Limits allow us to describe precisely what happens to a function’s values as the input approaches a particular number—whether or not the function is even defined at that point. They provide the language for defining continuity, derivatives, and integrals, and they help us capture “approaching” behavior that can’t be expressed by direct substitution alone. Before moving on to more formal ideas, we start with an intuitive definition of a limit.   Limit (intuitive)   Consider a function and numbers , . Then the limit of equals as approaches , in symbols , whenever can be forced arbitrarily close to by making sufficiently close to (but not equal to) . If we cannot make as close to a single value as we would like as approaches , then we say that does not have a limit as approaches .    That is, approximates to within any desired error tolerance, for all values of within some small distance from (but ). One more way to say it: if we make a table of for any sample values of getting closer and closer to (such as , , etc.), then the values of will get as close as we like to (though they might never quite reach ).  Graphically:   Reading a limit from a graph: .        Evaluating Limits  Let's make sure the definition makes sense. Here is a nice first problem to attempt.   Our First Limit   Consider the function   Using a calculator, evaluate the function at the indicated -values and fill in the corresponding entries in the table.    Based on the intuitive limit definition guess the limit value  View the graph of in Desmos . Use words to explain to another student how the table relates to the graph and how the limit can be determined from the graph.       Check Your Answers:         As approaches from either the left or the right, the output values get closer and closer to . Although is undefined (there is a hole in the graph), the limit still exists and equals .   Step by Step Video Solution:        Some limits are easy because we can plug in to get the limiting value , in which case we say is continuous at . Graphically, as in the above figure , this means the curve has no jump or hole at .   A Nice Continuous Example   Evaluate .    Full Written Solution:  Since our function is continuous around (we can draw the parabola without lifting our pencil), we can simply plug into to get the answer .  More Rigorous Solution:  Algebraically, if is close enough to , say for some small (close to ), then which is forced as close as we like to if is small enough to 0 (either positive or negative).    We have seen a few problems where a limit exists, but in fact, as the 2004 movie Mean Girls teaches us, sometimes    The limit does not exist GIF      One way this can occur is if does not approach a single limiting value as approaches . In such cases, we declare that the limit does not exist , and the symbol has no meaning. Now let's see such an example.   When a limit does not exist   Consider the sign function , defined by   Which when graphed looks like:    The sign function .       Determine the limit     Near , the function cannot be forced close to any single output value. That is, , since no matter how close gets to , there are some (namely negative) for which is far from ; and similarly is not , nor , nor any other value. In such cases, it is most appropriate to simply say does not exist.     An important feature of is that it does not depend on , even if is undefined: the limit only notices values of for . As a quick mini example, define for , and , having the graph:   The function for with (a removable discontinuity at ).      Then , since if is close enough to (but unequal to) , then is arbitrarily close to (in fact ). Again, , and is not continuous at .     One-sided Limits  Sometimes, the behavior of a function as you approach a point depends on which direction you come from. For example, a graph might approach one value when moving in from the left, but a completely different value when coming in from the right like in Example .  And so, let's define another type of limit:   One-Sided Limits    One-sided limits (from the right or left) consider only values of on one side of . The limit of equals as approaches from the right, denoted , whenever can be made arbitrarily close to by taking sufficiently close to (but greater than) . The limit from the left, denoted , is defined similarly, except with  less than .     If we have the ordinary limit , then the left and right limits must both have the same value . In the Example above, we have .  However in Example we have, and , even though does not exist.   In fact, we can make our first Theorem from this idea    For a function and real number , the (two-sided) limit exists if and only if both one-sided limits exist and are equal. Precisely,   if and only if     A full proof of this theorem requires the formal – definition of a limit and is beyond the scope of this course. You will encounter this level of rigor in MTH 320, where you will learn how to construct proofs of results like this one from first principles.      Infinite Limits  Up to this point, most of the limits we’ve encountered have approached a finite number. However, some functions behave very differently: as you get closer to certain -values, the function’s values grow without bound—either shooting up toward positive infinity or diving down toward negative infinity. In these cases, the function doesn’t have a finite limit, but the way it “blows up” is still predictable.   Infinite Limits and Vertical Asymptotes   We define infinite limits as follows: means that can be made larger than any real number (for example, ) by taking sufficiently close to (but not equal to) .  Similarly means that can be made smaller than any real number (for example, ) by taking sufficiently close to (but not equal to) .  Such behavior signals a vertical asymptote at .     The symbol (and likewise ) has no meaning by itself; it is simply a way of saying that can be made as large as desired.     Consider the function .  Which when graphed looks like:   The graph of .      Answer the following questions.   Using the graph of evaluate and explain your reasoning.  Try now without the graph (using only the equation of ) to evaluate and explain your reasoning.       Looking at the graph , we can notice two key features near :   The graph is in two pieces — one in quadrant II (for ) and one in quadrant I (for ).  Both pieces shoot straight up as they get close to .   This means the function grows beyond any large number we can choose when is close enough to . And so we know     As gets very close to , gets very small — like , , , and so on. Dividing by a very small positive number gives a very large positive number (for example, , , ). In general, we can shorthand this fact as .        True or False: .     False. The two one-sided limits behave differently: but . Because the left and right limits are not equal, the two-sided limit does not exist.    Note: Be careful to read problems in this class carefully! Here is problem that is quite similar looking but has a different result.    True or False: has a vertical asymptote at .     True. As approaches from the right, , and as approaches from the left, . This unbounded behavior around means the line is a vertical asymptote.      Locating Vertical Asymptotes  A vertical asymptote occurs at a value of where a function grows without bound (positively or negatively) as approaches that value. This often happens when the function’s formula has a denominator that becomes zero while the numerator stays nonzero, making the function’s value extremely large in magnitude near that point.   How to Locate Vertical Asymptotes  To locate possible vertical asymptotes, we look for values of that make the denominator zero but do not also make the numerator zero. Once we have these candidates, we check the one-sided limits to determine whether the function increases toward or decreases toward on each side.   Now let's see it in action with an example    Consider the function .   Locate the vertical asymptotes for .  For each vertical asymptote, describe the behavior of as approaches from both the left and the right.      Check Your Answers:    The vertical asymptotes are at and .   Here is the function's behavior around each asymptote:     Step by Step Video Solution:        And lastly, a true\/false problem on the same subject    True or False: The function has a vertical asymptote at .    False. Factoring numerator and denominator we get Notice that if we try to naively plug in we get 0 in both the numerator and denominator. From Remark we should suspect that this will not yield a vertical asymptote.  To verify we can plug in numbers close to on either side to see what is happening to .   From this we suspect . And in fact if we simplify and then plug in into the simplified function we get . We will learn in the next section that this will turn out to be a good strategy for evaluating limits. And so, does not yield a vertical asymptote.      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning     True or False: If , then .    False. A limit describes nearby behavior; the function value at the point can differ (or be undefined).      True or False: If and , then .    True. Equality of both one-sided limits guarantees the two-sided limit exists and has that value.      True or False: If , then is undefined.    False. The limit concerns values near ; may be anything (defined or not) without affecting the infinite limit.      True or False: If does not exist, then both and do not exist.    False. One-sided limits may exist but differ; that difference causes the two-sided limit to fail.      True or False: If is a vertical asymptote, then at least one of or is infinite.    True. A vertical asymptote is characterized by unbounded behavior from one or both sides.      True or False: If the graph decreases without bound as , then .    True. “Decreases without bound” means the values become arbitrarily negative.      True or False: .    True. Values grow beyond any bound from either side since for .      True or False: If , then is a vertical asymptote.    True.  ; the numerator is nonzero at , so is a VA.      True or False: If a rational function’s denominator is zero at , then the function must have a vertical asymptote at .    False. A common factor in numerator and denominator could cancel instead like in Problem .      "
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
  "number": "1.1.6.1",
  "title": "",
  "body": "  True or False: If , then .    False. A limit describes nearby behavior; the function value at the point can differ (or be undefined).   "
},
{
  "id": "prob-tf-onesided-implies-twosided",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-onesided-implies-twosided",
  "type": "Exercise",
  "number": "1.1.6.2",
  "title": "",
  "body": "  True or False: If and , then .    True. Equality of both one-sided limits guarantees the two-sided limit exists and has that value.   "
},
{
  "id": "prob-tf-infinite-limit-value-defined",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-infinite-limit-value-defined",
  "type": "Exercise",
  "number": "1.1.6.3",
  "title": "",
  "body": "  True or False: If , then is undefined.    False. The limit concerns values near ; may be anything (defined or not) without affecting the infinite limit.   "
},
{
  "id": "prob-tf-twosided-dne-implies-onesided-dne",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-twosided-dne-implies-onesided-dne",
  "type": "Exercise",
  "number": "1.1.6.4",
  "title": "",
  "body": "  True or False: If does not exist, then both and do not exist.    False. One-sided limits may exist but differ; that difference causes the two-sided limit to fail.   "
},
{
  "id": "prob-tf-va-implies-infinite-onesided",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-va-implies-infinite-onesided",
  "type": "Exercise",
  "number": "1.1.6.5",
  "title": "",
  "body": "  True or False: If is a vertical asymptote, then at least one of or is infinite.    True. A vertical asymptote is characterized by unbounded behavior from one or both sides.   "
},
{
  "id": "prob-tf-neg-infty-description",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-neg-infty-description",
  "type": "Exercise",
  "number": "1.1.6.6",
  "title": "",
  "body": "  True or False: If the graph decreases without bound as , then .    True. “Decreases without bound” means the values become arbitrarily negative.   "
},
{
  "id": "prob-tf-one-over-xsq",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-one-over-xsq",
  "type": "Exercise",
  "number": "1.1.6.7",
  "title": "",
  "body": "  True or False: .    True. Values grow beyond any bound from either side since for .   "
},
{
  "id": "prob-tf-2x-over-xsqminus9",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-2x-over-xsqminus9",
  "type": "Exercise",
  "number": "1.1.6.8",
  "title": "",
  "body": "  True or False: If , then is a vertical asymptote.    True.  ; the numerator is nonzero at , so is a VA.   "
},
{
  "id": "prob-tf-denominator-zero-always-va",
  "level": "2",
  "url": "sec-graphical-limits.html#prob-tf-denominator-zero-always-va",
  "type": "Exercise",
  "number": "1.1.6.9",
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
  "body": " Limit Laws and Algebraic Techniques    State and apply the basic Limit Laws (sum, difference, constant multiple, product, quotient, power, root).  Recognize when direct substitution can be used to evaluate a limit and when it leads to meaningless expressions.  Evaluate limits that initially give meaningless expressions by algebraic manipulation  Analyze limits of piecewise-defined functions by considering one-sided limits.  Apply the Squeeze Theorem to evaluate limits of functions bounded above and below.     Operations on Limits  Some general combination rules make most limit computations routine.   Limit Laws   Suppose we know that both and exist. Then we have the following Limit Laws:   Sum:  .  Difference:  .  Constant Multiple:  , for a constant .  Product:  .  Quotient:  , provided .  Power:  , for a whole number .  Root:  , for a whole number If is even, we assume  .   These all have the form: “The limit of an operation equals the operation applied to the limits.” These Laws are also valid for one-sided limits.    A full proof of these laws requires high-level mathematics and the formal – definition of limits (beyond the scope of this course). Rigorous proofs like this can be found in MSU's MTH 320 Real Analysis course. For those who would like a glimpse a Real Analysis proof, see this video proving the Limit Sum Law       Suppose and . Find .    Using the Difference, Constant Multiple, and Power Limit Laws:       Limits by Plugging In  Assuming the Limit Laws and the Basic Limits and , we can prove that most functions are continuous, meaning the limit can be obtained by direct substitution.   A Limit by Substitution   Compute using the Limit Laws.    Step by Step:   Thus the correct limit is obtained simply by substituting .   Note: The Quotient Law requires that the denominator have a non-zero limit. We tentatively proceed with the computation and find the denominator to be 3, which retrospectively justifies the quotient step.     Substituting usually gives the correct limit unless it leads to a meaningless expression such as or (complex values are not considered in this course).   In Section and Section , we will verify that trigonometric functions like and are also continuous when defined, and the same holds for functions like and . Thus, this principle works for pretty much all reasonable functions.    Limits by Canceling Zeros  Some of the most important limits are those where substitution gives a meaningless expression like . To compute these, we must cancel vanishing factors until the expression can be evaluated. This often requires algebraic manipulation such as factoring or multiplying by a conjugate.   Canceling Factors   Evaluate .    Direct substitution gives the meaningless expression , so we must simplify the expression first. Factor numerator and denominator:    Please note that this example is consistent with what we saw in the previous section. Here is a Desmos graph of the function, along with a table of values near .     Graph of        Keep in mind, however, that on quizzes and exams you may not have access to a calculator — in those cases the algebraic method will be our primary tool for solving such problems.      Using a Conjugate   Evaluate .    Direct substitution gives the meaningless expression , so we must simplify the expression first.  Multiply numerator and denominator by the conjugate :   Simplify the denominator using the difference of squares:  > Now cancel the common factor :    Again, this algebraic approach is important, but we can also explore the behavior graphically or with tables. View it here: Desmos Graph .       Limits by Cases  As we learned in Section , piecewise functions often require evaluating limits separately from the left and right. One key example of this is the absolute value function , which by its definition is really a piecewise function. Therefore limits involving absolute values often require a case-by-case analysis.   Absolute Value Example   Evaluate .     Check Your Answers:    does not exist, because the left-hand and right-hand limits are different.  Step by Step Video Solution:      Again, this algebraic approach is important, but we can also explore the behavior graphically or with tables. View it here: Desmos Graph .      Limits by Squeezing  Some limits are difficult to evaluate because the function behaves erratically near . For example:   The graph shows the unusual behavior, oscillating faster and faster near because completes infinitely many periods as becomes larger.    The function (solid) squeezed between (dashed).      However, we can still find the limit using the Squeeze Theorem , which applies when is squeezed between two other functions.   Squeeze Theorem   Suppose for all near (except possibly ), and . Then .    Now let's apply the Squeeze Theorem to our example   Squeezing Example   Evaluate .    First note the expression is defined for , which is fine for a limit: we only need values of near (but not equal to) .  Start from the basic bound true for every real :   Substitute (valid when ):   Multiply the entire inequality by . Because for all , the direction of the inequalities is preserved (multiplying by a nonnegative number does not flip signs):   Now add to each part of the inequality. Adding the same quantity to all three parts preserves the inequalities:   Define the “floor” and “ceiling” functions and . Compute their limits using substitution:    Since for all near (but not equal to) we have , and both bounding limits equal , the Squeeze Theorem gives:      Trigonometric functions are especially good candidates for the Squeeze Theorem, since they have natural bounds. For example,   and   These inequalities allow us to evaluate many limits involving trigonometric functions by “squeezing” them between simpler functions.     Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning    If and , then .   True. By the Sum Law: .     If , then .   False. A limit concerns nearby values, not necessarily the value at the point. For example, consider Example . The limit exists even though the function itself is not defined at the point.      .   True. Factor and cancel: for , so .     The Limit Laws can always be applied, even if one of the limits does not exist.   False. Each Limit Law requires the relevant limits to exist. If one does not exist, the law cannot be applied.     If and , then must equal 1.   False. The form is meaningless. For example, , give .     If is a polynomial, then for every real number .   True. Polynomials are continuous. We can apply the limit laws to substitute as discussed previously in this section. So for all .      does not exist.   True.  and , so the two-sided limit does not exist.      .   False. Simplify to , so , not .      .   True. By the Squeeze Theorem: , and both bounds go to 0 as .     The Squeeze Theorem can be used to evaluate .   True. Since , multiplying by gives . Both bounds go to 0, so .      "
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
  "number": "1.2.6.1",
  "title": "",
  "body": " If and , then .   True. By the Sum Law: .   "
},
{
  "id": "tf-exercises-limits-2-4",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-4",
  "type": "Exercise",
  "number": "1.2.6.2",
  "title": "",
  "body": " If , then .   False. A limit concerns nearby values, not necessarily the value at the point. For example, consider Example . The limit exists even though the function itself is not defined at the point.   "
},
{
  "id": "tf-exercises-limits-2-5",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-5",
  "type": "Exercise",
  "number": "1.2.6.3",
  "title": "",
  "body": "  .   True. Factor and cancel: for , so .   "
},
{
  "id": "tf-exercises-limits-2-6",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-6",
  "type": "Exercise",
  "number": "1.2.6.4",
  "title": "",
  "body": " The Limit Laws can always be applied, even if one of the limits does not exist.   False. Each Limit Law requires the relevant limits to exist. If one does not exist, the law cannot be applied.   "
},
{
  "id": "tf-exercises-limits-2-7",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-7",
  "type": "Exercise",
  "number": "1.2.6.5",
  "title": "",
  "body": " If and , then must equal 1.   False. The form is meaningless. For example, , give .   "
},
{
  "id": "tf-exercises-limits-2-8",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-8",
  "type": "Exercise",
  "number": "1.2.6.6",
  "title": "",
  "body": " If is a polynomial, then for every real number .   True. Polynomials are continuous. We can apply the limit laws to substitute as discussed previously in this section. So for all .   "
},
{
  "id": "tf-exercises-limits-2-9",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-9",
  "type": "Exercise",
  "number": "1.2.6.7",
  "title": "",
  "body": "  does not exist.   True.  and , so the two-sided limit does not exist.   "
},
{
  "id": "tf-exercises-limits-2-10",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-10",
  "type": "Exercise",
  "number": "1.2.6.8",
  "title": "",
  "body": "  .   False. Simplify to , so , not .   "
},
{
  "id": "tf-exercises-limits-2-11",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-11",
  "type": "Exercise",
  "number": "1.2.6.9",
  "title": "",
  "body": "  .   True. By the Squeeze Theorem: , and both bounds go to 0 as .   "
},
{
  "id": "tf-exercises-limits-2-12",
  "level": "2",
  "url": "sec-limit-laws.html#tf-exercises-limits-2-12",
  "type": "Exercise",
  "number": "1.2.6.10",
  "title": "",
  "body": " The Squeeze Theorem can be used to evaluate .   True. Since , multiplying by gives . Both bounds go to 0, so .   "
},
{
  "id": "sec-limit-continuity",
  "level": "1",
  "url": "sec-limit-continuity.html",
  "type": "Section",
  "number": "1.3",
  "title": "Continuity",
  "body": " Continuity    Understand the formal definition of continuity at a point and on an interval, and connect it to the intuitive “draw without lifting your pencil” idea.  Identify and classify discontinuities as removable, jump, infinite, or essential, based on their definitions and interpret their graphical representations.  Test piecewise functions for continuity at transition points and determine parameter values that make them continuous.  Determine the domain of continuity for functions involving rational expressions, square roots, and other common operations.  Apply the Composition Law to evaluate limits of compositions of continuous functions.     Definition and Overview  One of the most basic features of a function is whether it is continuous . Roughly, this means that a small change in always leads to a fairly small change in , without instantaneous jumps. In physical terms, the position of a particle moving in space is continuous, but the position displayed in a video could have a gap, making the position function jump discontinuously.    A function is continuous at whenever    Graphically, a function is continuous if the curve passes through the point without any jumps or holes. This matches the intuitive idea of continuity — you can draw the graph near without lifting your pencil.  We say is continuous on an interval whenever it is continuous at each point of the interval. For endpoints of a closed interval , we require one-sided limits: and .    Removable Discontinuity    A function has a removable discontinuity at if exists but is either undefined or does not equal that limit.   Graphically, a removable discontinuity appears as a hole in the curve at . The discontinuity is \"removable\" because we can redefine to equal the limit, making the function continuous at .   Two examples of removable discontinuities: one where is undefined, and one where the value does not equal the limit.          Revisit . Verify that the function has a removable discontinuity at .    At , both the numerator and denominator vanish, giving us the meaningless expression so the function is undefined. However, we can verify again that exists (is equal to ). This matches the definition of a removable discontinuity. Moreover we can view the picture in to see visually the hole in the graph at .      Revisit . Verify that this function has a removable discontinuity at .    At , both the numerator and denominator vanish, giving the undefined form . However, multiplying numerator and denominator by the conjugate simplifies the expression to , which is continuous everywhere. Taking the limit, we find Thus, although is undefined, the limit exists and equals 6. This is exactly the definition of a removable discontinuity, and the graph shows a “hole” at .      Jump Discontinuity    A function has a jump discontinuity at if the left and right limits exist but are unequal:    Graphically, a jump discontinuity appears as a sudden jump in the curve at .   A jump discontinuity where left and right limits differ.       Revisit . Verify that the function has a jump discontinuity at .    Notice that . For , the absolute value simplifies to , so . For , we instead get , so .  Thus the left-hand limit is while the right-hand limit is Since these limits are not equal, the two-sided limit does not exist. This confirms that has a jump discontinuity at .      Infinite Discontinuity    A function has an infinite discontinuity at if one or both one-sided limits diverge to infinity:    Graphically, an infinite discontinuity appears as a vertical asymptote in the curve at .   A discontinuity caused by a vertical asymptote.       Revisit . Verify that the function has an infinite discontinuity at .    The function is undefined at . As , , so . As , , so . In both directions the function grows beyond all bounds, so   Thus, has an infinite discontinuity at . Graphically, this appears as a vertical asymptote along the -axis.      Essential Discontinuity    A function has an essential discontinuity at if one or both one-sided limits fail to exist in any sense.   Graphically, an essential discontinuity quite often appears as a wild oscillation in the curve at .   An essential discontinuity where one-sided limits fail to exist.       Consider the function . Show that has an essential discontinuity at .    The function is not defined at . As approaches 0, the reciprocal grows without bound in magnitude. Since oscillates between and for all values of , the outputs continue to oscillate rapidly between and as .  No single limiting value can be assigned: the left-hand and right-hand limits both fail to exist because of these wild oscillations. By definition, this is an essential discontinuity at .  Graphically, the curve appears to “wiggle infinitely fast” near the vertical line , matching the intuition for an essential discontinuity.      Continuity of Piecewise Functions  For a function defined by cases, whose graph consists of several continuous pieces, the function is continuous provided the pieces join together at the transition points where the cases meet.    Consider the piecewise function   Find the value of that makes continuous at .    To check continuity at , we need three things: (1) the function is defined at , (2) the limit exists, and (3) the limit equals .  First, , so the function is defined at for any value of .  Next, compute the one-sided limits. For , we use the left-hand piece : For , we use the right-hand piece :   For the limit to exist, these must be equal: Solving gives , so .  Finally, with we have , which matches the limit. Therefore is continuous at when .      Suppose a weight is winched from the ground at a constant speed for 8 seconds, is dropped, and lands 2 seconds later.  Then the height in feet at time seconds is given by   How fast should the winch haul upward?    The function is defined in two pieces. The first piece, , describes the weight being lifted upward from the ground at a constant speed feet per second, for times .  The second piece, , describes what happens once the weight is released at . Recall that a dropped object falls feet in seconds. Since the fall begins at , we measure the time of fall as . Thus, after seconds of falling, the weight will have fallen feet. The weight was released from a height of 64 feet, so its position after seconds is given by .  To find the correct speed of the winch, we need the two pieces of the function to “meet up” at . That means the height from the lifting phase at must equal the height from the falling phase at . Using the lifting phase we get . Using the falling phase we get . Setting these equal gives   Finally, let us check continuity explicitly at . From the left-hand side, From the right-hand side, Since both one-sided limits equal 64, the two-sided limit exists and equals 64. Moreover, this matches the value of the function at that point, . Therefore the function is continuous at .      Domain of Continuity  Almost all functions defined by formulas are continuous, except at points where they are undefined. This follows from our methods for computing limits.    Find where is continuous.    First, let’s analyze the rational factor outside the square root. Using the Limit Laws from repeatedly, we compute:   as long as the denominator does not vanish. In other words, this step is valid provided .  Next, consider the square root factor. By the Limit Laws,   but this only makes sense when the inside of the square root is nonnegative. Thus we require , or equivalently (strict inequality if we want the square root defined for all nearby ).  We now combine the two factors to evaluate the overall limit:   By the Limit Laws, the limit of a product equals the product of the limits, provided each individual limit exists. So we can separate this into two pieces:   We already computed each factor individually: the rational expression simplifies to (valid when ), and the square root tends to (valid when ).   Thus, whenever both conditions ( and ) are satisfied, this is the value of the limit.  Let's now examine the exceptional cases:     : The square root is undefined, so the function is not continuous.     : The square root is defined, and since this is the left endpoint of the domain, continuity only requires the right-hand limit. Indeed, , so the function is continuous at .     : The denominator vanishes, and the graph has a vertical asymptote. This corresponds to an infinite discontinuity (type (iv)).    Putting this all together, we conclude that is continuous everywhere in its domain, which consists of the intervals   The graph below illustrates this behavior:    Graph of showing its domain of continuity.         Compositions of Continuous Functions   Composition Law   If and is continuous at , then    A full – proof is omitted here; it uses techniques developed in a proof‑based course such as MTH320.      Evaluate     First, observe that the inside function is . Direct substitution gives , so we simplify:   Thus, as ,   Since the outer function is , which is continuous everywhere, we may apply the Composition Law:   Therefore, the limit is .      Practice \/ Study Problems   Some True\/False Problems   Determine whether each statement is true or false and explain your reasoning    If is continuous at , then .  True. This is exactly the definition of continuity at a point.    The function has a removable discontinuity at .   True. At , numerator and denominator both vanish, giving . Simplifying, for , so . Since is undefined, the discontinuity is removable.     If and , then has a jump discontinuity at .   True. The left and right limits both exist but are unequal, which is the definition of a jump discontinuity.     The function is continuous for all real numbers.   False. The function is only defined for . It is continuous on its domain , but not for all real numbers.     If and are both continuous at , then is also continuous at .   True. Can verify using the limit laws and definition of continuity.     The piecewise function is continuous at .   False.  while . Since the one-sided limits are unequal, the function has a jump discontinuity at .     If exists, then must be continuous at .   False. Continuity also requires that is defined and equals the limit. A function can have a removable discontinuity where the limit exists but the function is undefined (or defined to a different value).     The function has an infinite discontinuity at .   True. As , . The graph has a vertical asymptote at , so this is an infinite discontinuity.     The domain of continuity of is .   False. The square root requires , and the denominator excludes . Thus the domain is . At the endpoint , we have and   So the function is continuous at (one-sided at the endpoint). Therefore the domain of continuity is , not .     If and , then has an essential discontinuity at .   False. When one-sided limits are infinite (even if they diverge differently), this is classified as an infinite discontinuity, not an essential discontinuity.      "
},
{
  "id": "sec-limit-continuity-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-2",
  "type": "Objectives",
  "number": "1.3",
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
  "number": "1.3.1",
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
  "number": "1.3.2",
  "title": "",
  "body": "  A function has a removable discontinuity at if exists but is either undefined or does not equal that limit.   Graphically, a removable discontinuity appears as a hole in the curve at . The discontinuity is \"removable\" because we can redefine to equal the limit, making the function continuous at .   Two examples of removable discontinuities: one where is undefined, and one where the value does not equal the limit.       "
},
{
  "id": "ex-removable-cancel",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-removable-cancel",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Revisit . Verify that the function has a removable discontinuity at .    At , both the numerator and denominator vanish, giving us the meaningless expression so the function is undefined. However, we can verify again that exists (is equal to ). This matches the definition of a removable discontinuity. Moreover we can view the picture in to see visually the hole in the graph at .   "
},
{
  "id": "ex-removable-conjugate",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-removable-conjugate",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Revisit . Verify that this function has a removable discontinuity at .    At , both the numerator and denominator vanish, giving the undefined form . However, multiplying numerator and denominator by the conjugate simplifies the expression to , which is continuous everywhere. Taking the limit, we find Thus, although is undefined, the limit exists and equals 6. This is exactly the definition of a removable discontinuity, and the graph shows a “hole” at .   "
},
{
  "id": "sec-limit-continuity-5-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-5-2",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "  A function has a jump discontinuity at if the left and right limits exist but are unequal:    Graphically, a jump discontinuity appears as a sudden jump in the curve at .   A jump discontinuity where left and right limits differ.    "
},
{
  "id": "ex-jump-abs-value",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-jump-abs-value",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": "  Revisit . Verify that the function has a jump discontinuity at .    Notice that . For , the absolute value simplifies to , so . For , we instead get , so .  Thus the left-hand limit is while the right-hand limit is Since these limits are not equal, the two-sided limit does not exist. This confirms that has a jump discontinuity at .   "
},
{
  "id": "sec-limit-continuity-6-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-6-2",
  "type": "Definition",
  "number": "1.3.9",
  "title": "",
  "body": "  A function has an infinite discontinuity at if one or both one-sided limits diverge to infinity:    Graphically, an infinite discontinuity appears as a vertical asymptote in the curve at .   A discontinuity caused by a vertical asymptote.    "
},
{
  "id": "ex-infinite-abs",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-infinite-abs",
  "type": "Example",
  "number": "1.3.11",
  "title": "",
  "body": "  Revisit . Verify that the function has an infinite discontinuity at .    The function is undefined at . As , , so . As , , so . In both directions the function grows beyond all bounds, so   Thus, has an infinite discontinuity at . Graphically, this appears as a vertical asymptote along the -axis.   "
},
{
  "id": "sec-limit-continuity-7-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-7-2",
  "type": "Definition",
  "number": "1.3.12",
  "title": "",
  "body": "  A function has an essential discontinuity at if one or both one-sided limits fail to exist in any sense.   Graphically, an essential discontinuity quite often appears as a wild oscillation in the curve at .   An essential discontinuity where one-sided limits fail to exist.    "
},
{
  "id": "ex-essential-sinx-over-x",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-essential-sinx-over-x",
  "type": "Example",
  "number": "1.3.14",
  "title": "",
  "body": "  Consider the function . Show that has an essential discontinuity at .    The function is not defined at . As approaches 0, the reciprocal grows without bound in magnitude. Since oscillates between and for all values of , the outputs continue to oscillate rapidly between and as .  No single limiting value can be assigned: the left-hand and right-hand limits both fail to exist because of these wild oscillations. By definition, this is an essential discontinuity at .  Graphically, the curve appears to “wiggle infinitely fast” near the vertical line , matching the intuition for an essential discontinuity.   "
},
{
  "id": "ex-piecewise-ap",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-piecewise-ap",
  "type": "Example",
  "number": "1.3.15",
  "title": "",
  "body": "  Consider the piecewise function   Find the value of that makes continuous at .    To check continuity at , we need three things: (1) the function is defined at , (2) the limit exists, and (3) the limit equals .  First, , so the function is defined at for any value of .  Next, compute the one-sided limits. For , we use the left-hand piece : For , we use the right-hand piece :   For the limit to exist, these must be equal: Solving gives , so .  Finally, with we have , which matches the limit. Therefore is continuous at when .   "
},
{
  "id": "sec-limit-continuity-8-4",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-8-4",
  "type": "Example",
  "number": "1.3.16",
  "title": "",
  "body": "  Suppose a weight is winched from the ground at a constant speed for 8 seconds, is dropped, and lands 2 seconds later.  Then the height in feet at time seconds is given by   How fast should the winch haul upward?    The function is defined in two pieces. The first piece, , describes the weight being lifted upward from the ground at a constant speed feet per second, for times .  The second piece, , describes what happens once the weight is released at . Recall that a dropped object falls feet in seconds. Since the fall begins at , we measure the time of fall as . Thus, after seconds of falling, the weight will have fallen feet. The weight was released from a height of 64 feet, so its position after seconds is given by .  To find the correct speed of the winch, we need the two pieces of the function to “meet up” at . That means the height from the lifting phase at must equal the height from the falling phase at . Using the lifting phase we get . Using the falling phase we get . Setting these equal gives   Finally, let us check continuity explicitly at . From the left-hand side, From the right-hand side, Since both one-sided limits equal 64, the two-sided limit exists and equals 64. Moreover, this matches the value of the function at that point, . Therefore the function is continuous at .   "
},
{
  "id": "sec-limit-continuity-9-3",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-9-3",
  "type": "Example",
  "number": "1.3.17",
  "title": "",
  "body": "  Find where is continuous.    First, let’s analyze the rational factor outside the square root. Using the Limit Laws from repeatedly, we compute:   as long as the denominator does not vanish. In other words, this step is valid provided .  Next, consider the square root factor. By the Limit Laws,   but this only makes sense when the inside of the square root is nonnegative. Thus we require , or equivalently (strict inequality if we want the square root defined for all nearby ).  We now combine the two factors to evaluate the overall limit:   By the Limit Laws, the limit of a product equals the product of the limits, provided each individual limit exists. So we can separate this into two pieces:   We already computed each factor individually: the rational expression simplifies to (valid when ), and the square root tends to (valid when ).   Thus, whenever both conditions ( and ) are satisfied, this is the value of the limit.  Let's now examine the exceptional cases:     : The square root is undefined, so the function is not continuous.     : The square root is defined, and since this is the left endpoint of the domain, continuity only requires the right-hand limit. Indeed, , so the function is continuous at .     : The denominator vanishes, and the graph has a vertical asymptote. This corresponds to an infinite discontinuity (type (iv)).    Putting this all together, we conclude that is continuous everywhere in its domain, which consists of the intervals   The graph below illustrates this behavior:    Graph of showing its domain of continuity.      "
},
{
  "id": "sec-limit-continuity-10-2",
  "level": "2",
  "url": "sec-limit-continuity.html#sec-limit-continuity-10-2",
  "type": "Theorem",
  "number": "1.3.19",
  "title": "Composition Law.",
  "body": " Composition Law   If and is continuous at , then    A full – proof is omitted here; it uses techniques developed in a proof‑based course such as MTH320.   "
},
{
  "id": "ex-composition-sin",
  "level": "2",
  "url": "sec-limit-continuity.html#ex-composition-sin",
  "type": "Example",
  "number": "1.3.20",
  "title": "",
  "body": "  Evaluate     First, observe that the inside function is . Direct substitution gives , so we simplify:   Thus, as ,   Since the outer function is , which is continuous everywhere, we may apply the Composition Law:   Therefore, the limit is .   "
},
{
  "id": "tf-exercises-continuity-2-3",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-3",
  "type": "Exercise",
  "number": "1.3.9.1",
  "title": "",
  "body": " If is continuous at , then .  True. This is exactly the definition of continuity at a point.  "
},
{
  "id": "tf-exercises-continuity-2-4",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-4",
  "type": "Exercise",
  "number": "1.3.9.2",
  "title": "",
  "body": " The function has a removable discontinuity at .   True. At , numerator and denominator both vanish, giving . Simplifying, for , so . Since is undefined, the discontinuity is removable.   "
},
{
  "id": "tf-exercises-continuity-2-5",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-5",
  "type": "Exercise",
  "number": "1.3.9.3",
  "title": "",
  "body": " If and , then has a jump discontinuity at .   True. The left and right limits both exist but are unequal, which is the definition of a jump discontinuity.   "
},
{
  "id": "tf-exercises-continuity-2-6",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-6",
  "type": "Exercise",
  "number": "1.3.9.4",
  "title": "",
  "body": " The function is continuous for all real numbers.   False. The function is only defined for . It is continuous on its domain , but not for all real numbers.   "
},
{
  "id": "tf-exercises-continuity-2-7",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-7",
  "type": "Exercise",
  "number": "1.3.9.5",
  "title": "",
  "body": " If and are both continuous at , then is also continuous at .   True. Can verify using the limit laws and definition of continuity.   "
},
{
  "id": "tf-exercises-continuity-2-8",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-8",
  "type": "Exercise",
  "number": "1.3.9.6",
  "title": "",
  "body": " The piecewise function is continuous at .   False.  while . Since the one-sided limits are unequal, the function has a jump discontinuity at .   "
},
{
  "id": "tf-exercises-continuity-2-9",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-9",
  "type": "Exercise",
  "number": "1.3.9.7",
  "title": "",
  "body": " If exists, then must be continuous at .   False. Continuity also requires that is defined and equals the limit. A function can have a removable discontinuity where the limit exists but the function is undefined (or defined to a different value).   "
},
{
  "id": "tf-exercises-continuity-2-10",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-10",
  "type": "Exercise",
  "number": "1.3.9.8",
  "title": "",
  "body": " The function has an infinite discontinuity at .   True. As , . The graph has a vertical asymptote at , so this is an infinite discontinuity.   "
},
{
  "id": "tf-exercises-continuity-2-11",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-11",
  "type": "Exercise",
  "number": "1.3.9.9",
  "title": "",
  "body": " The domain of continuity of is .   False. The square root requires , and the denominator excludes . Thus the domain is . At the endpoint , we have and   So the function is continuous at (one-sided at the endpoint). Therefore the domain of continuity is , not .   "
},
{
  "id": "tf-exercises-continuity-2-12",
  "level": "2",
  "url": "sec-limit-continuity.html#tf-exercises-continuity-2-12",
  "type": "Exercise",
  "number": "1.3.9.10",
  "title": "",
  "body": " If and , then has an essential discontinuity at .   False. When one-sided limits are infinite (even if they diverge differently), this is classified as an infinite discontinuity, not an essential discontinuity.   "
},
{
  "id": "sec-limit-ivt",
  "level": "1",
  "url": "sec-limit-ivt.html",
  "type": "Section",
  "number": "1.4",
  "title": "Intermediate Value Theorem",
  "body": " Intermediate Value Theorem    State the Intermediate Value Theorem and explain in your own words what it guarantees about continuous functions.  Apply the IVT to demonstrate that an equation has a solution within a given interval, even without finding the exact solution.  Recognize situations where the IVT cannot be applied, such as when a function is not continuous on the entire interval.  Interpret the IVT graphically and numerically, understanding how it ensures intermediate values are attained.    One of the most important applications of continuity is the Intermediate Value Theorem (IVT). This theorem provides a way to guarantee the existence of solutions to equations, even when we cannot solve them exactly. It also explains why continuous functions must pass through all intermediate values between two function outputs.   Intermediate Value Theorem (IVT)   If is continuous for in the interval , and is between and , meaning either or , then there is at least one (but possibly more) value of Here lies in the open interval , between and but excluding both endpoints: . such that .     Illustration of the Intermediate Value Theorem: a continuous function on , a value between and , and at least one point with .         This says that as the function value goes continuously from to , perhaps rising and falling many times, it must pass through every value between and .   Let's see how the theorem works in practice.   Applying the IVT   Let . Show that there exists a number such that .    The function is a polynomial, hence continuous on every interval, in particular on .  Evaluate the endpoints: and . Thus , so the value lies between and .  By the Intermediate Value Theorem, there exists such that . So although we do not know the exact value of we know that is must exist and what interval it is in.    In the previous example, everything worked out neatly: the function was continuous on the interval and the target value fell between the two endpoint values. But if continuity is broken, the Intermediate Value Theorem no longer applies. The next example illustrates this.    Consider the function:    Does take on the value somewhere in the interval ?  Can the Intermediate Value Theorem be applied to justify your answer to (a)? Why or why not?       Solve :    Since , the equation has no solution in . So No , does not take the value on .     No — the Intermediate Value Theorem (IVT) requires continuity on a closed interval. The function is not continuous on because it has a vertical asymptote at (the denominator is zero there).  So even though and , and the value lies between and , because is not continuous on the entire interval the Intermediate Value Theorem cannot be applied.      Finally, let's look at a famous equation where the IVT guarantees the existence of a solution, even though we cannot solve it with algebra alone.    Show that there exists a solution to the equation .    There is no simple algebraic way to solve directly. Instead, define a new function   Then solving is equivalent to finding a root of , that is, some with .  First check some values of on the interval :   .  .   Thus, and , so the function values change sign between and .  Next, recall that is continuous: the cosine function is continuous everywhere, and is also continuous, so their difference is continuous.  By the Intermediate Value Theorem, if a continuous function takes on values of opposite signs at the endpoints of an interval, then it must equal zero for some number between those endpoints. Therefore, there exists such that .  In other words, there is some number with . (In fact, numerically , but the IVT only guarantees existence, not the exact value.)    The Intermediate Value Theorem is powerful because it guarantees the existence of solutions even when we cannot compute them exactly. Without needing advanced tools or calculators, we can still be certain that roots and crossing points must lie within specific intervals — giving us both confidence and direction in solving problems that might otherwise feel impossible.   Practice \/ Study Problems   Some True\/False Questions   Determine whether each statement is true or false and explain your reasoning    The IVT can be used to show that has a solution in the interval .   True. Let (a polynomial, hence continuous). Then and . Since 0 lies between and , the IVT guarantees a root .      A function is continuous on the interval . Values of are given in the table below:   There must exist some such that .    True. Since and , and is continuous, the IVT guarantees a value with .     The IVT tells us exactly where a solution occurs and gives us the formula for the solution.   False. The IVT guarantees existence of at least one solution in an interval but does not locate it exactly or provide a formula.     If is continuous on and , , then for some .   True. Continuity on and opposite signs at the endpoints imply, by IVT, that some satisfies .      Multiple Choice   For each question, choose the single best answer from the options provided.     Which of the following best describes what the IVT guarantees?   The exact solution of .  The existence of at least one solution to in , if is continuous.  The maximum value of on .  The slope of the tangent line to .     Answer: B. The IVT guarantees existence (not exact location or value) provided continuity on and that lies between and .      Let . On which interval can the IVT be used to show a solution to exists?          Answer: B. , so a root lies in . The other intervals have no sign change.      The IVT can be used to show that has a solution in which interval?          Answer: A. For , and ; continuity gives a root in .      Which of the following is not an application of the IVT?   Proving an equation has a solution in an interval.  Guaranteeing that a continuous function crosses a certain horizontal line.  Finding the exact numerical value of a solution.  Explaining why a temperature must have reached 70°F if it rose from 65°F to 75°F.     Answer: C. IVT does not give exact values; it guarantees existence.      Written Response   Answer each question in complete sentences, showing your reasoning and any supporting work.    Use the IVT to prove that the equation has a solution in the interval .   Let (continuous). Compute and . Since 0 lies between these values, the IVT guarantees a root .     Explain why the function does not satisfy the conditions of the IVT on .    is not defined at and hence not continuous on the closed interval . The IVT requires continuity on the entire interval.     A function is continuous on , with and . Use the IVT to explain why must have a solution in .   Since lies between and , and is continuous on , the IVT guarantees with .     Suppose a car's speed (a continuous function of time) was 40 mph at 2:00 pm and 65 mph at 2:10 pm. Explain, using the IVT, why there must have been a time when the car's speed was exactly 55 mph.   Let be speed, continuous on . Since lies between and , the IVT implies some time in that interval with .     Why does the IVT not apply to the function on , even though and ?   The given formula is undefined at (removable discontinuity), so the function is not continuous on the entire closed interval . Thus the hypotheses of the IVT are not met.      "
},
{
  "id": "sec-limit-ivt-2",
  "level": "2",
  "url": "sec-limit-ivt.html#sec-limit-ivt-2",
  "type": "Objectives",
  "number": "1.4",
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
  "number": "1.4.1",
  "title": "Intermediate Value Theorem (IVT).",
  "body": " Intermediate Value Theorem (IVT)   If is continuous for in the interval , and is between and , meaning either or , then there is at least one (but possibly more) value of Here lies in the open interval , between and but excluding both endpoints: . such that .     Illustration of the Intermediate Value Theorem: a continuous function on , a value between and , and at least one point with .       "
},
{
  "id": "sec-limit-ivt-5",
  "level": "2",
  "url": "sec-limit-ivt.html#sec-limit-ivt-5",
  "type": "Remark",
  "number": "1.4.3",
  "title": "",
  "body": " This says that as the function value goes continuously from to , perhaps rising and falling many times, it must pass through every value between and .  "
},
{
  "id": "ex-ivt-first",
  "level": "2",
  "url": "sec-limit-ivt.html#ex-ivt-first",
  "type": "Example",
  "number": "1.4.4",
  "title": "Applying the IVT.",
  "body": " Applying the IVT   Let . Show that there exists a number such that .    The function is a polynomial, hence continuous on every interval, in particular on .  Evaluate the endpoints: and . Thus , so the value lies between and .  By the Intermediate Value Theorem, there exists such that . So although we do not know the exact value of we know that is must exist and what interval it is in.   "
},
{
  "id": "ex-ivt-rational",
  "level": "2",
  "url": "sec-limit-ivt.html#ex-ivt-rational",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Consider the function:    Does take on the value somewhere in the interval ?  Can the Intermediate Value Theorem be applied to justify your answer to (a)? Why or why not?       Solve :    Since , the equation has no solution in . So No , does not take the value on .     No — the Intermediate Value Theorem (IVT) requires continuity on a closed interval. The function is not continuous on because it has a vertical asymptote at (the denominator is zero there).  So even though and , and the value lies between and , because is not continuous on the entire interval the Intermediate Value Theorem cannot be applied.     "
},
{
  "id": "sec-limit-ivt-11",
  "level": "2",
  "url": "sec-limit-ivt.html#sec-limit-ivt-11",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "  Show that there exists a solution to the equation .    There is no simple algebraic way to solve directly. Instead, define a new function   Then solving is equivalent to finding a root of , that is, some with .  First check some values of on the interval :   .  .   Thus, and , so the function values change sign between and .  Next, recall that is continuous: the cosine function is continuous everywhere, and is also continuous, so their difference is continuous.  By the Intermediate Value Theorem, if a continuous function takes on values of opposite signs at the endpoints of an interval, then it must equal zero for some number between those endpoints. Therefore, there exists such that .  In other words, there is some number with . (In fact, numerically , but the IVT only guarantees existence, not the exact value.)   "
},
{
  "id": "exercises-ivt-2-3",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-2-3",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": " The IVT can be used to show that has a solution in the interval .   True. Let (a polynomial, hence continuous). Then and . Since 0 lies between and , the IVT guarantees a root .   "
},
{
  "id": "ivt-table-tf",
  "level": "2",
  "url": "sec-limit-ivt.html#ivt-table-tf",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "  A function is continuous on the interval . Values of are given in the table below:   There must exist some such that .    True. Since and , and is continuous, the IVT guarantees a value with .   "
},
{
  "id": "exercises-ivt-2-5",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-2-5",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": " The IVT tells us exactly where a solution occurs and gives us the formula for the solution.   False. The IVT guarantees existence of at least one solution in an interval but does not locate it exactly or provide a formula.   "
},
{
  "id": "exercises-ivt-2-6",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-2-6",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": " If is continuous on and , , then for some .   True. Continuity on and opposite signs at the endpoints imply, by IVT, that some satisfies .   "
},
{
  "id": "exercises-ivt-3-3",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-3-3",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "  Which of the following best describes what the IVT guarantees?   The exact solution of .  The existence of at least one solution to in , if is continuous.  The maximum value of on .  The slope of the tangent line to .     Answer: B. The IVT guarantees existence (not exact location or value) provided continuity on and that lies between and .   "
},
{
  "id": "exercises-ivt-3-4",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-3-4",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": "  Let . On which interval can the IVT be used to show a solution to exists?          Answer: B. , so a root lies in . The other intervals have no sign change.   "
},
{
  "id": "exercises-ivt-3-5",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-3-5",
  "type": "Exercise",
  "number": "1.4.7",
  "title": "",
  "body": "  The IVT can be used to show that has a solution in which interval?          Answer: A. For , and ; continuity gives a root in .   "
},
{
  "id": "exercises-ivt-3-6",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-3-6",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": "  Which of the following is not an application of the IVT?   Proving an equation has a solution in an interval.  Guaranteeing that a continuous function crosses a certain horizontal line.  Finding the exact numerical value of a solution.  Explaining why a temperature must have reached 70°F if it rose from 65°F to 75°F.     Answer: C. IVT does not give exact values; it guarantees existence.   "
},
{
  "id": "exercises-ivt-4-3",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-4-3",
  "type": "Exercise",
  "number": "1.4.9",
  "title": "",
  "body": " Use the IVT to prove that the equation has a solution in the interval .   Let (continuous). Compute and . Since 0 lies between these values, the IVT guarantees a root .   "
},
{
  "id": "exercises-ivt-4-4",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-4-4",
  "type": "Exercise",
  "number": "1.4.10",
  "title": "",
  "body": " Explain why the function does not satisfy the conditions of the IVT on .    is not defined at and hence not continuous on the closed interval . The IVT requires continuity on the entire interval.   "
},
{
  "id": "exercises-ivt-4-5",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-4-5",
  "type": "Exercise",
  "number": "1.4.11",
  "title": "",
  "body": " A function is continuous on , with and . Use the IVT to explain why must have a solution in .   Since lies between and , and is continuous on , the IVT guarantees with .   "
},
{
  "id": "exercises-ivt-4-6",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-4-6",
  "type": "Exercise",
  "number": "1.4.12",
  "title": "",
  "body": " Suppose a car's speed (a continuous function of time) was 40 mph at 2:00 pm and 65 mph at 2:10 pm. Explain, using the IVT, why there must have been a time when the car's speed was exactly 55 mph.   Let be speed, continuous on . Since lies between and , the IVT implies some time in that interval with .   "
},
{
  "id": "exercises-ivt-4-7",
  "level": "2",
  "url": "sec-limit-ivt.html#exercises-ivt-4-7",
  "type": "Exercise",
  "number": "1.4.13",
  "title": "",
  "body": " Why does the IVT not apply to the function on , even though and ?   The given formula is undefined at (removable discontinuity), so the function is not continuous on the entire closed interval . Thus the hypotheses of the IVT are not met.   "
},
{
  "id": "sec-derivative-defn",
  "level": "1",
  "url": "sec-derivative-defn.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition of the Derivative",
  "body": " Definition of the Derivative  Text of section.  "
},
{
  "id": "sec-derivative-rules",
  "level": "1",
  "url": "sec-derivative-rules.html",
  "type": "Section",
  "number": "2.2",
  "title": "Basic Differentiation Rules",
  "body": " Basic Differentiation Rules  Text of section.  "
},
{
  "id": "sec-derivative-trig",
  "level": "1",
  "url": "sec-derivative-trig.html",
  "type": "Section",
  "number": "2.3",
  "title": "Trigonometric Derivatives",
  "body": " Trigonometric Derivatives  Text of section.  "
},
{
  "id": "sec-derivative-expChain",
  "level": "1",
  "url": "sec-derivative-expChain.html",
  "type": "Section",
  "number": "2.4",
  "title": "Exponential Functions and the Chain Rule",
  "body": " Exponential Functions and the Chain Rule  Text of section.  "
},
{
  "id": "sec-derivative-implicit",
  "level": "1",
  "url": "sec-derivative-implicit.html",
  "type": "Section",
  "number": "2.5",
  "title": "Implicit Differentiation",
  "body": " Implicit Differentiation  Text of section.  "
},
{
  "id": "sec-derivative-inverse",
  "level": "1",
  "url": "sec-derivative-inverse.html",
  "type": "Section",
  "number": "2.6",
  "title": "Inverse Functions and Their Derivatives",
  "body": " Inverse Functions and Their Derivatives  Text of section.  "
},
{
  "id": "sec-derivApp-motion",
  "level": "1",
  "url": "sec-derivApp-motion.html",
  "type": "Section",
  "number": "3.1",
  "title": "Motion in Physics",
  "body": " Motion in Physics  Text of section.  "
},
{
  "id": "sec-derivApp-related",
  "level": "1",
  "url": "sec-derivApp-related.html",
  "type": "Section",
  "number": "3.2",
  "title": "Related Rates",
  "body": " Related Rates  Text of section.  "
},
{
  "id": "sec-derivApp-linear",
  "level": "1",
  "url": "sec-derivApp-linear.html",
  "type": "Section",
  "number": "3.3",
  "title": "Linear Approximation and L’Hopital’s Rule",
  "body": " Linear Approximation and L'Hopital's Rule  Text of section.  "
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
  "id": "sec-derivApp-curve",
  "level": "1",
  "url": "sec-derivApp-curve.html",
  "type": "Section",
  "number": "3.6",
  "title": "Curve Sketching",
  "body": " Curve Sketching  Text of section.  "
},
{
  "id": "sec-derivApp-opt",
  "level": "1",
  "url": "sec-derivApp-opt.html",
  "type": "Section",
  "number": "3.7",
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
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "Algebra Review: Core Tools for Calculus",
  "body": " Algebra Review: Core Tools for Calculus   Absolute Value   For any real number , the absolute value of , written , is defined by   Geometrically, represents the distance from to on the number line.    "
},
{
  "id": "def-absolute-value",
  "level": "2",
  "url": "backmatter-3.html#def-absolute-value",
  "type": "Definition",
  "number": "B.0.1",
  "title": "Absolute Value.",
  "body": " Absolute Value   For any real number , the absolute value of , written , is defined by   Geometrically, represents the distance from to on the number line.   "
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
