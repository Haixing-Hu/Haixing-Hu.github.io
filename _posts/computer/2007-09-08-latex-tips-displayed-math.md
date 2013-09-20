---
layout: post
title: "LaTeX tips: Displayed Math"
author: A. J. Hildebrand
source_url: http://www.math.uiuc.edu/~hildebr/tex/displays.html
category: computer
tags: [software, LaTeX]
---

Most of the tips below require the `amslatex` macros. These are automatically
loaded if you use the `amsart` documentclass, but if you use other
documentclasses, such as `article`, put the following in the preamble, after
`\documentclass{...}`:

    \usepackage{amsmath, amsthm, amssymb}

For more about the amslatex macros, and as a general reference for the tips
below, see Gratzer's "Math into LaTeX".

<!--more-->

## Single line displays

### The double dollar symbol

    The formula $...$ means that ...

In Plaintex and Amstex displayed math was set by enclosing it between a pair of
double dollar signs. In LaTeX the double dollar sign does not exist as a valid
command, and most LaTeX books don't even mention it, since it is not supposed
to be used.

However, the dirty secret is that it works just fine in most situations, and
many authors use it with impunity. Nonetheless, there are a few situations
where it causes problems, and it may not work under future versions of tex. If
you come from a Tex/Amstex background and are in the habit of typing `$...$`,
try to gradually switch over to using the backslash/bracket pair. If you are
new to Tex/LaTeX, learn it right from the start (i.e., use the
backslash/bracket method).

### The backslash/bracket pair

    Therefore we have
    \[
       ...
    \]

Use this for all unnumbered displays. It's a good habit to put each of these
pairs on a line by itself.  Though Tex doesn't care, this makes displays stand
out visually and makes editing and revising the tex file easier.

### Use `equation` environment

    \begin{equation}\label{...}
      ...
    \end{equation}

Use this if you want the equation to be automatically numbered. You can later
reference the equation with `\eqref{...}`, where the text inside the braces is
the equation label.  (Note that no parentheses are required with `\eqref`.) For
more on equation numbering, see below.

### Use `equation*` envrionment

    \begin{equation*}
      ...  \tag{...}
    \end{equation*}

Same as the equation environment, except that automatic numbering is disabled,
and the `\tag{...}` command generates an explicit equation number. For example,
to get equation number (4.1a), use `\tag{4.1a}`. (Again no parentheses are
needed.)

## Multiline displays

While single line displays are pretty straightforward to typeset, there are at
least a dozen different constructs to generate multiline displays with the
amslatex macros, and it's easy for a beginner to be overwhelmed by the
multitude of options.

Fortunately, you can get by knowning only two of these, namely the
`align/align*` and `cases` environments. Unless you are a professional
typesetter striving for 110% perfection, you don't need anything beyond that.

### Use `align` or `align*` envrionment

    \begin{align}
      ...
    \end{align}`

or

    \begin{align*}
      ...
    \end{align*}

Nearly all multiline displays can be typeset with the one of these two
environments, which are derived from the amstex `\align ... \endalign`
construct, and follow (essentially) the same syntax.

The difference between `align` and `align*` is the same as between `equation`
and `equation*`: The starred versions don't automatically generate equation
numbers. Use those versions, if you don't want equation numbers, or if you want
to number equations manually.

### Equation numbering and labelling in `align` or `align*`

By default, every line gets numbered separately in the `align` environment. If
you want just a single equation number for the entire display (which would be
appropriate if the display consists of a chain of equalities or inequalities),
pick a line in the middle of the display that is to get the number, and put
`\notag` right before the linebreak symbol (`\\`) on all other lines. On lines
that are to be numbered, you can put the label command, `\label{...}`, before
the linebreak.

With `align*`, it works the other way: By default, none of the lines gets
numbered, so to number a particular line you must put an explicit `\tag{...}`
command at the end of that line, before the linebreak symbol.

### Use `cases` envrionment

    \begin{cases}
      ...
    \end{cases}

Aside from align, the only other multiline construct that you may need with any
frequency is `cases`.

It works in much the same way as the amstex `\cases ... \endcases`
construct. Note that the `cases` environment is a `subsidiary` math
environment and has to be enclosed by another, top level, display math
environment, such as equation or `align/align*`.

Here is a typical example:

    \begin{equation*}
      |x|= \begin{cases}
           x & \text{if $x≥0$,} \\
           -x &\text{if $x\le 0$.}
           \end{cases}
    \end{equation*}

Note that the part after the alignment symbol usual contains some text and is
best typeset using `\text{... }`, and enclosing any math material within the
braces in dollar signs.

### The `eqnarray/eqnarray*` and `array` envrionment

Avoid these. Before the advent of amslatex, multiline displays and cases
constructs had to be typeset with `eqnarray` and `array`. However, the above
(amslatex) environments `align/align*` and `cases` are easier too use, provide
greater functionality, and generate better looking output.

There is no reason whatsoever to use `eqnarray` instead of `align`, and, except
in very rare situations, `array` is unnecessary.

### Other amslatex display environments

Amslatex provides several other environments for multiline displays, such as
`split`, `gather`, `gathered`, `multline`, `aligned`, `alignat`, as well as
starred version of most of these. These may do a marginally better job in some
special situations, but the (mostly cosmetic) gain that these environments
provide in those situations is not worth the effort of memorizing the various
alternatives to the `align/align*` environments.

## Writing tips

### How to number equations

By default, LaTeX will number equations consecutively, as (1), (2), etc.,
assuming you use the automatic equation numbering mechanism.

If the paper is very short, or if there are only a few numbered equations, this
is fine, but once the numbers get into the twenties and higher, a scheme that
numbers equations by section, as in (1.1), (1.2), ..., (2.1), etc., is
preferable.

In fact, for the vast majority of journal articles, the latter is probably the
best numbering scheme. To get equations numbered by section, just put the
following into the preamble:

    \numberwithin{equation}{section}

For books, theses, or very long papers, an equation numbering scheme that is
three levels deep (with numbers like (4.1.1), etc.) may be appropriate. To get
this, just replace `section` above by `subsection`, or the corresponding
innermost level.

The same mechanism works for other counters, e.g., theorem counters, instead of
`equation`.

### When to number equations

It is (generally) bad style to number every displayed equation
indicriminately. This is what you get if you would use the `equation`
environment throughout.

The reason for numbering an equation is to enable subsequent references to
it. Thus, in general only equations that are being referred to in the paper
should be numbered.

However, there are situations where one might number an equation even if it is
not referred to in the paper. For instance, it might be appropriate to number
all equations inside theorems, for consistency of style, and to make it easy to
refer to these equations in subsequent work.

Similarly, if a reference to an equation occurs right after that equation, a
number may not be necessary; one could get by saying something like "Since f(x)
is positive, the last linequality implies that ...".

### When to display a mathematical formula or equation

Formulas set inline are harder to spot, may cause problems with bad linebreaks
(which one has to fix by inserting explicit linebreaks), and they may look
poor, especially if they involve fractions, sums, integrals, or other "large"
objects.

On the other hand, one should not indiscriminately display every equation or
formula.

A judicious choice of what to display can make a a significant difference in
the overall appearance and readability of a paper. Here are some
guidelines. You should display formulas/equations in the following cases:

* A numbered equation. This is a no-brainer.
* A formula that is excessively long. If a formula takes up more than about
  half of a line of space, it would probably be good to display it. Formulas
  set inline should never be longer than one line (even though tex would accept
  multiline inline displays and probably do a reasonably good job in splitting
  the formula).
* A formula that takes up excessive vertical space. Formulas that involves
  complicated sums or integrals with multiple subscripts or superscripts, or
  stacked fractions, take up a lot of vertical space and cause subsequent lines
  to be moved down, if set as inline formulas. In these situations, it may be
  appriopriate to display the formula. Simple sums, integrals, or fractions,
  are usually not a problem; for example, an expression like
  `\sum_{k=1}^nk=n(n+1)/2` doesn't need to be displayed.
* A formula that you want to give special emphasis. Even if a formula would
  look fine inline from a typesetting point of view, it may be appropriate to
  display it for emphasis. This could be the case, for example, with an
  important definition, or a crucial condition/hypothesis in a theorem.

### How to break up long formulas

Breaking up overlong lines in displays can be very tricky, and requires a good
knowledge of the underlying mathematics as well as a feel for good mathematical
typesetting.

For that reason, TeX doesn't break formulas, as it does with ordinary
text. However, there are some general guidelines. Here are possible breaking
points, in decreasing order of desirability:

* Right before an equal sign or equivalent (e.g., a "less than" sign). In this
  case, place the alignment symbol (ampersand) placed before the equal sign,
  i.e., ` ... + x \\ &= `. The equal signs (or equivalent) should be aligned.
* Before a plus or minus sign. In that case, the continuation line should be
  shifted to the right by a `\qquad`. If the continuation line is very short,
  two `\qquad`'s might be better.
* Between two large "chunks" that are multiplied. The chunks could be large
  parenthesized expression, sums or integrals. This should be used only as a
  last resort, and in that case the preceding line should end with an explicit
  multiplication symbol (`\times`), the continuation line should begin with
  `\times` symbol and be shifted as far to the right (by preceding it with a
  few `\qquad`'s after the alignment symbol).

### Punctuation in displays

Displayed mathematics should be properly punctuated.

For example, if a displayed formula occurs at the end of a sentence, the
display should be terminated by a period. No additional spacing (such as `\,`
or `\ `) is needed to separate the formula from the punctuation sign.

A good way to get the punctuation right is to replace the display by a place
holder, such as "[DISPLAY]" and punctuate accordingly. Thus, for example, if
the sentence surrounding the display is "Since f is monotonic, we have
[DISPLAY], where ...", then no punctuation symbol is needed before the display,
but the display should be terminated by a comma, since the phrase introduced by
"where" following the display calls for a comma. A comma before the display
would be wrong in this case (as would any other punctuation sign, such as a
colon), since it would interrupt the continuity of the sentence.

Here are additional hints for some special situations:

* Punctuation in cases constructs. If a formula is set via a `cases` construct,
  each case ( = line) should be terminated with a comma; if the display occurs
  at the end of the sentence, the final comma should be changed to a period.
* Puntuation for "parenthetical" matter. Expressions indicating the range of
  validaty of a formula, or a limiting process can be set either in parenthesis
  with no punctuation separating the expression from the formula, or separated
  from the formula by a comma. The following examples illustrate the two
  options:
      f(x) = \sqrt{1+x} \quad (x \ge  -1)
      f(x) = \sqrt{1+x}, \quad x \ge -1
      f(x) \sim x^2 \quad (x\to\infty)
      f(x) \sim x^2, \quad x\to\infty
  It would be wrong to use both a comma and parentheses. (Note that, depending
  on the context, a punctuation sign at the end of the display may also be
  called for.)

## Additional hints

### Spacing in displays

Usually it's best to leave the spacing up to TeX.

 However, if explicit horizontal spacing is needed (for example, to set an
expression like `(n \to \infty)` apart from the rest of the display, or to
separate two equations on the same line), `\quad` in most cases generates the
right amount of space. Don't try to create spacing with a bunch of explicit
spaces (`\ `); the spacing generated in this way is usually not optimal, and
the explicit spaces will likely have to be removed (and possibly replaced by
`\quad`) when the paper is typeset at the publisher's end.

### Avoid blank lines

Avoid blank lines before or after a display, unless you really want to start a
new paragraph: It is tempting to surround displayed math material by blank
lines in the source file, to make them stand out and easier to locate.

However, this is usually wrong, since blank lines are interpreted as paragraph
breaks, may generate some additional vertical spacing and cause the next line
of text to be indented - something you usually don't want.

If you want to set off displays in your source file, do so by inserting a line
with comment symbols, such as

    %%%%% equation 3.1 %%%%%%%%%%%%%%

before and/or after the display.

### Correcting underful vboxes and bad page breaks

By default, TeX does not break pages inside display environments such as
`align`. If a paper has many multiline formulas, this may cause "underful
vboxes", which can look very poor if the badness (reported by tex in the log
file) is a few thousand.

One way to remedy this is to put the command `\allowdisplaybreaks` in the
preamble. However, this may cause some poor pagebreaks which may have to be
fixed.

A compromise solution is to use `\allowdisplaybreaks` locally, on the
individual displays that cause problems:

    {
        \allowdisplaybreaks
        \begin{align}
        ...
        \end{align}
    }

The best solution is to prevent this problem by avoiding excessively long
displays (say, with five or more lines). It is often not hard to break up a
very long display into two, for example by inserting a phrase like "By the
Cauchy-Schwarz inequality, the last expression is at most" in the middle of the
overlong display, followed by the remaining lines of the display.

### Multiline subscripts on sums or integrals

Use the `\substack{...}` command, which works much like the `\sb ... \endsb`
pair in `amstex`. It is much easier to use, and produces better looking output
than an array environment or a construct using `\atop` (derived from plain
tex).