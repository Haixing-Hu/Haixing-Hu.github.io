---
layout: post
title: "Sublime Text 2 Plugin to Convert Tabs to Spaces on Save"
author: mbutler
source_url: http://www.butlerpc.net/blog/2012/07/sublime-text-2-plugin-to-convert-tabs-to-spaces-on-save/
category: computer
tags: [software, editor, sublime text]
---

Here is a simple [Sublime Text 2](http://www.sublimetext.com/) plug-in to
convert tabs (only at the beginning of lines) to spaces in the current file
whenever you save it.

In Sublime, go to the *Preferences* menu and choose *Browse Packages…* This
will open the Sublime Text 2 Packages folder. Create a new folder here with
your last name, then open your new folder (you just created your own Package!)

Next, create an empty file in the folder called `tabs_to_spaces.py`. Paste this
code into the file:

    import sublime, sublime_plugin
    # class ExampleCommand(sublime_plugin.TextCommand):
    #   def run(self, edit):
    #       self.view.insert(edit, 0, "Hello, World!")
    class ConvertTabsToSpaces(sublime_plugin.EventListener):    
          def on_pre_save(self, view):        
          edit = view.begin_edit()        
          view.run_command('expand_tabs', {"set_translate_tabs": True})
          view.end_edit(edit)        
          #sublime.message_dialog("Converted endings.")

This creates a hook and runs whenever you save the file, but right before the
save actually occurs, allowing you to modify the document text. In this case
all we did was run the menu command `expand_tabs`. You could also run other
commands or perform custom text replacements.