---
layout: post
title: "Disable Spotlight and remove Spotlight icon from menu"
author: wisemagic
source_url: http://hints.macworld.com/article.php?story=20091030173117381
category: computer
tags: [software, Mac OS X]
---

To turn Spotlight Indexing off and on in Mac OS X 10.6 Snow Leopard, and to
remove the Menu Bar Icon, follow these steps.

<!--more-->

To turn Spotlight Indexing off in open Terminal and run this command:

    sudo mdutil -a -i off

To turn Spotlight Indexing back on, repeat the above command, but change off to
on. To remove the menu bar icon, run this Terminal command:

    sudo chmod 600 /System/Library/CoreServices/Search.bundle/Contents/MacOS/Search

You'll then to restart the menu bar with `killall SystemUIServer` to see the
icon vanish.