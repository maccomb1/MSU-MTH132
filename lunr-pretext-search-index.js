var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-graphical-limits",
  "level": "1",
  "url": "sec-graphical-limits.html",
  "type": "Section",
  "number": "1.1",
  "title": "Limits from Graphs and Notation",
  "body": " Limits from Graphs and Notation   Definition of Limits  The key technical tool in the previous section was the idea of a limiting value approached by approximations. We need limits for all the definitions of calculus, so we must understand them clearly.   Limit (intuitive)   Consider a function and numbers , . Then the limit of equals as approaches , in symbols , whenever can be forced arbitrarily close to by making sufficiently close to (but not equal to) . If we cannot make as close to a single value as we would like as approaches , then we say that does not have a limit as approaches .    That is, approximates to within any desired error tolerance, for all values of within some small distance from (but ). One more way to say it: if we make a table of for any sample values of getting closer and closer to (such as , , etc.), then the values of will get as close as we like to (though they might never quite reach ).  Graphically:   Reading a limit from a graph: .        Evaluating limits Definition of Limits  Let's make sure the definition makes sense. Here is a nice first problem to attempt.   Our First Limit   Consider the function   Using a calculator, evaluate the function at the indicated -values and fill in the corresponding entries in the table.    Based on the intuitive limit definition guess the limit value  View the graph of in Desmos . Use words to explain to another student how the table relates to the graph and how the limit can be determined from the graph.       Check Your Answers:         As approaches from either the left or the right, the output values get closer and closer to . Although is undefined (there is a hole in the graph), the limit still exists and equals .   Step by Step Video Solution:        Some limits are easy because we can plug in to get the limiting value , in which case we say is continuous at . Graphically, as in the above figure , this means the curve has no jump or hole at .   A Nice Continuous Example   Evaluate .    Full Written Solution:  Since our function is continuous around (we can draw the parabola without lifting our pencil), we can simply plug into to get the answer .  More Rigorous Solution:  Algebraically, if is close enough to , say for some small (close to ), then which is forced as close as we like to if is small enough to 0 (either positive or negative).    We have seen a few problems where a limit exists, but in fact, as the 2004 movie Mean Girls teaches us, sometimes     The limit does not exist GIF   One way this can occur is if does not approach a single limiting value as approaches . In such cases, we declare that the limit does not exist , and the symbol has no meaning. Now let's see such an example.   When a limit does not exist   Consider the sign function for , undefined at .    The graph of .     As , , while as , . There is no single limiting value at , so does not exist.      Limit exists though the function is undefined at   Evaluate .    A removable discontinuity at .     Factor and cancel: for . Since is continuous, .     One-sided limits   The right-hand limit means can be made arbitrarily close to by taking sufficiently close to . The left-hand limit is defined similarly using .    The (two-sided) limit exists and equals if and only if both one-sided limits exist and are equal to .     Infinite limits and vertical asymptotes   We write to indicate that the values of grow beyond any bound as approaches (from either side). Likewise, indicates unbounded decrease. Such behavior signals a vertical asymptote at .     has an infinite limit at .     One-sided infinite limits for   has opposite behavior on each side of .      and .     Determining vertical asymptotes and their signs   Analyze .    Zeros occur where the numerator vanishes: . The denominator vanishes at and , producing vertical asymptotes there (no common factors). Sign analysis shows:   , .  , .     Graph of with vertical asymptotes.     If , then the common factor cancels: there is a removable discontinuity (a hole) at , not a vertical asymptote.     Practice    From a graph of a function with a hole at but approaching height , determine and whether is continuous at .    Recall that limits depend on nearby values, not on .      Decide whether exists. Justify using one-sided limits.      Find the vertical asymptotes and one-sided behavior of .     "
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
  "id": "sec-graphical-limits-3-4",
  "level": "2",
  "url": "sec-graphical-limits.html#sec-graphical-limits-3-4",
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
  "id": "sec-graphical-limits-3-7",
  "level": "2",
  "url": "sec-graphical-limits.html#sec-graphical-limits-3-7",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": "   The limit does not exist GIF  "
},
{
  "id": "ex-limit-does-not-exist",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-limit-does-not-exist",
  "type": "Example",
  "number": "1.1.6",
  "title": "When a limit does not exist.",
  "body": " When a limit does not exist   Consider the sign function for , undefined at .    The graph of .     As , , while as , . There is no single limiting value at , so does not exist.   "
},
{
  "id": "ex-removable-hole",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-removable-hole",
  "type": "Example",
  "number": "1.1.8",
  "title": "Limit exists though the function is undefined at <span class=\"process-math\">\\(a\\)<\/span>.",
  "body": " Limit exists though the function is undefined at   Evaluate .    A removable discontinuity at .     Factor and cancel: for . Since is continuous, .   "
},
{
  "id": "def-one-sided",
  "level": "2",
  "url": "sec-graphical-limits.html#def-one-sided",
  "type": "Definition",
  "number": "1.1.10",
  "title": "One-sided limits.",
  "body": " One-sided limits   The right-hand limit means can be made arbitrarily close to by taking sufficiently close to . The left-hand limit is defined similarly using .    The (two-sided) limit exists and equals if and only if both one-sided limits exist and are equal to .   "
},
{
  "id": "def-infinite-limit",
  "level": "2",
  "url": "sec-graphical-limits.html#def-infinite-limit",
  "type": "Definition",
  "number": "1.1.11",
  "title": "Infinite limits and vertical asymptotes.",
  "body": " Infinite limits and vertical asymptotes   We write to indicate that the values of grow beyond any bound as approaches (from either side). Likewise, indicates unbounded decrease. Such behavior signals a vertical asymptote at .   "
},
{
  "id": "fig-absx-reciprocal",
  "level": "2",
  "url": "sec-graphical-limits.html#fig-absx-reciprocal",
  "type": "Figure",
  "number": "1.1.12",
  "title": "",
  "body": " has an infinite limit at .   "
},
{
  "id": "ex-one-sided-infinite",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-one-sided-infinite",
  "type": "Example",
  "number": "1.1.13",
  "title": "One-sided infinite limits for <span class=\"process-math\">\\(\\dfrac{1}{x}\\)<\/span>.",
  "body": " One-sided infinite limits for   has opposite behavior on each side of .      and .   "
},
{
  "id": "ex-vertical-asymptotes-signs",
  "level": "2",
  "url": "sec-graphical-limits.html#ex-vertical-asymptotes-signs",
  "type": "Example",
  "number": "1.1.15",
  "title": "Determining vertical asymptotes and their signs.",
  "body": " Determining vertical asymptotes and their signs   Analyze .    Zeros occur where the numerator vanishes: . The denominator vanishes at and , producing vertical asymptotes there (no common factors). Sign analysis shows:   , .  , .     Graph of with vertical asymptotes.     If , then the common factor cancels: there is a removable discontinuity (a hole) at , not a vertical asymptote.   "
},
{
  "id": "exercises-graphical-limits-2",
  "level": "2",
  "url": "sec-graphical-limits.html#exercises-graphical-limits-2",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "",
  "body": "  From a graph of a function with a hole at but approaching height , determine and whether is continuous at .    Recall that limits depend on nearby values, not on .   "
},
{
  "id": "exercises-graphical-limits-3",
  "level": "2",
  "url": "sec-graphical-limits.html#exercises-graphical-limits-3",
  "type": "Exercise",
  "number": "1.1.3.2",
  "title": "",
  "body": "  Decide whether exists. Justify using one-sided limits.   "
},
{
  "id": "exercises-graphical-limits-4",
  "level": "2",
  "url": "sec-graphical-limits.html#exercises-graphical-limits-4",
  "type": "Exercise",
  "number": "1.1.3.3",
  "title": "",
  "body": "  Find the vertical asymptotes and one-sided behavior of .   "
},
{
  "id": "sec-limit-alg",
  "level": "1",
  "url": "sec-limit-alg.html",
  "type": "Section",
  "number": "1.2",
  "title": "Limit Laws and Algebraic Techniques",
  "body": " Limit Laws and Algebraic Techniques  Text of section.  "
},
{
  "id": "sec-limit-continuity",
  "level": "1",
  "url": "sec-limit-continuity.html",
  "type": "Section",
  "number": "1.3",
  "title": "Continuity",
  "body": " Continuity  Text of section.  "
},
{
  "id": "sec-limit-ivt",
  "level": "1",
  "url": "sec-limit-ivt.html",
  "type": "Section",
  "number": "1.4",
  "title": "Intermediate Value Theorem",
  "body": " Intermediate Value Theorem  Text of section.  "
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
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
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
