---
layout: post
title: "OS X: How to reset the DNS cache"
author: Apple Inc.
source_url: http://support.apple.com/kb/HT5343
category: computer
tags: [software, Mac OS X]
---

For OS X Mountain Lion or Lion, use the following Terminal command to reset the
DNS cache:

    sudo killall -HUP mDNSResponder
 
For Mac OS X v10.6, use the following Terminal command to reset the DNS cache:

    sudo dscacheutil -flushcache