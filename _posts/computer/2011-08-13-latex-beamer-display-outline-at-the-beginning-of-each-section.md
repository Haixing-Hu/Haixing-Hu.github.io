---
layout: post
title: "LaTeX Beamer: display outline at the beginning of each section"
author: Haixing Hu
category: computer
tags: [software, LaTeX, beamer]
---

Use the following code snip

    \AtBeginSubsection{
        \begin{frame}{Outline}
            \tableofcontents[currentsection,currentsubsection]
        \end{frame}
    }

<!--more-->