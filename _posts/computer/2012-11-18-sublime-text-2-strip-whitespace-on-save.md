---
layout: post
title: "Sublime Text 2 Strip Whitespace on Save"
author: Nate Good
source_url: http://blog.nategood.com/sublime-text-strip-whitespace-save
category: computer
tags: [software, editor, sublime text]
---

I’ve become fond of [Sublime Text 2](http://www.sublimetext.com/). Gasp! Wait,
what? You don’t use [emacs/vim/butterflies](http://xkcd.com/378/)? Anyway,
regardless of the editor, I like to keep my whitespace under control. This
usually means I add a hook to strip trailing whitespace when saving. The
Sublime Text 2 Python API reference looks pretty complete, but there’s little
pragmatic documentation. I tinkered with creating my own, found others that had
semi decent solutions, but ultimately gave up. After my failed attempts and
failed googling, my coworker informed me that Sublime Text has this built right
in as a user setting you can set by adding a simple JSON snippet. Awesome.

## Make it Happen

Go to *SublimeText 2 > Preferences > User Settings* (or just hit the Mac
Standard `cmd + ,`). This should open your User Settings as a JSON file. Add
the following to your file:

    "trim_trailing_white_space_on_save": true

That’s it. You’re good to go.