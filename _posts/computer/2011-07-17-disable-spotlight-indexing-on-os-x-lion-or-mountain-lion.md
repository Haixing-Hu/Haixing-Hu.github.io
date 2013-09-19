---
layout: post
title: "Disable spotlight indexing on OS X Lion or Mountain Lion"
author: Mike Hudson
source_url: http://www.mikesel.info/disable-spotlight/
category: computer
tags: [software, Mac OS X]
---

Mac OS X Spotlight search is a powerful beast, returning all types of search
results in seconds. However, if you don’t use it to launch apps, or find files
then it can take up precious CPU cycles for no good reason.

As with all features such as this, if you don’t use it or use alternatives such
as [QuickSilver](http://qsapp.com/index.php) then switch it off. Doing so will
prevent Spotlight index service from indexing the drives on your machine, thus
meaning it will return no results when used.  To switch off the indexing open a
Terminal window and type:

	sudo mdutil -a -i off

**NB:** You will be prompted to enter your admin password.

If you change your mind about Spotlight, and decide to give it another try,
then it’s just as easy to switch back on as it was to switch off.

Again, in a terminal window type the following:

	sudo mdutil -a -i on

**NB:** You will be prompted to enter your admin password.