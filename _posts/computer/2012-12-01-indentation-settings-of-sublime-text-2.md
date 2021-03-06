---
layout: post
title: "Indentation Settings of Sublime Text 2"
author: Sublime Text 2
source_url: http://www.sublimetext.com/docs/2/indentation.html
tagline: ""
description: ""
category: computer
tags: [software, editor, sublime text]
---

Indentation Settings determine the size of the tab stops, and control whether
the tab key should insert tabs or spaces. In addition to the automatic
detection, they can be customized globally, per-file type, or per-file.

<!--more-->

## Settings

variable | type | description
:---------|:-----|:------------
`tab_size` | Integer | The number of spaces a tab is considered equal to
`translate_tabs_to_spaces` | Boolean | if true, spaces will be inserted up to the next tab stop when tab is pressed, rather than inserting a tab character
`detect_indentation` | Boolean | if true (the default), `tab_size` and `translate_tabs_to_spaces` will be calculated automatically when loading a file
`use_tab_stops` | Boolean | If `translate_tabs_to_spaces` is true, `use_tab_stops` will make tab and backspace insert/delete up to the next tab stop Settings Files

Settings files are consulted in this order:

  1. Packages/Default/Preferences.sublime-settings
  2. Packages/Default/Preferences ({platform}).sublime-settings
  3. **Packages/User/Preferences.sublime-settings**
  4. Packages/{syntax}/{syntax}.sublime-settings
  5. **Packages/User/{syntax}.sublime-settings**

In general, you should place your settings in `Packages/User/Preferences.sublime-settings`.
If you want to specify settings for a certain file type, for example, Python,
you should place them in `Packages/User/Python.sublime-settings`.

## Example Settings File

Try saving this as `Packages/User/Preferences.sublime-settings`

    {
      "tab_size": 4,
      "translate_tabs_to_spaces": false
    }

## Per-syntax Settings

Settings may be specified on a per-syntax basis. You can edit the settings for
the current syntax using the *Preferences/Settings - More/Syntax Specific -
User menu*.

## Indentation Detection

When a file is loaded, its contents are examined, and the `tab_size` and
`translate_tabs_to_spaces` settings are set for that file. The status area will
report when this happens. While this generally works well, you may want to
disable it. You can do that with the `detect_indentation` setting.

Indentation detection can be run manually via the *View/Indentation/Guess
Settings From Buffer* menu, which runs the `detect_indentation` command.

## Converting Between Tabs and Spaces

The *View/Indentation* menu has commands to convert leading whitespace in the
current file between tabs and spaces. These menu items run the `expand_tabs`
and `unexpand_tabs` commands.

## Automatic Indentation

Automatic indentation guesses the amount of leading whitespace to insert on
each line when you press enter. It's controlled with these settings:

variable | type | description
:---------|:-----|:------------
`auto_indent` | Boolean | enabled by default. Enables auto indent
`smart_indent` | Boolean | enabled by default. Makes auto indent a little smarter, e.g., by indenting the next line after an if statement in C.
`trim_automatic_white_space` | Boolean | enabled by default. Trims white space added by auto_indent when moving the caret off the line.
`indent_to_bracket` | Boolean | disabled by default. Adds whitespace up to the first open bracket when indenting.