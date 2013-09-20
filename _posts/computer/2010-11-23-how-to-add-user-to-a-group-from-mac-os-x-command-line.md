---
layout: post
title: "How to add user to a group from Mac OS X command line"
author: Gordon Davisson
source_url: http://superuser.com/questions/214004/how-to-add-user-to-a-group-from-mac-os-x-command-line/214311#214311
category: computer
tags: [software, Mac OS X]
---

Use the following commands to add user to a group:

    sudo dseditgroup -o edit -a usernametoadd -t user admin
    sudo dseditgroup -o edit -a usernametoadd -t user wheel

<!--more-->

It's also possible to do this with dscl, but to do it properly you need to both
add the user's short name to the group's `GroupMembership` list, and add the
user's GeneratedUID to the group's `GroupMembers` list. `dseditgroup` takes
care of both in a single operation.