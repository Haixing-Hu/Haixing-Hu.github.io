---
layout: post
title: "How to add a user from the OS X command line"
author: Bill Ellis
source_url: http://osxdaily.com/2007/10/29/how-to-add-a-user-from-the-os-x-command-line-works-with-leopard/
category: computer
tags: [software, Mac OS X]
---

Adding a user is something easily accomplished using the built in GUI tools
that ship with OS X, however any power user can appreciate the possible
efficiency gained from using the command line. So in the spirit of efficiency
here are the steps necessary to add a user to your Mac OS X system all with our
good friend, Terminal.app.

These commands need to be run as either the root user or with the “sudo”
command. For more information on the sudo command see the [sudo man
page](http://developer.apple.com/documentation/Darwin/Reference/ManPages/man8/sudo.8.html).

Create a new entry in the local (/) domain under the category /users.

    dscl / -create /Users/toddharris

Create and set the shell property to bash.

    dscl / -create /Users/toddharris UserShell /bin/bash

Create and set the user’s full name.

    dscl / -create /Users/toddharris RealName "Dr. Todd Harris"

Create and set the user’s ID.

    dscl / -create /Users/toddharris UniqueID 503

Create and set the user’s group ID property.

    dscl / -create /Users/toddharris PrimaryGroupID 1000

Create and set the user home directory.

    dscl / -create /Users/toddharris NFSHomeDirectory /Local/Users/toddharris

Set the password.

    dscl / -passwd /Users/toddharris PASSWORD

or

    passwd toddharris

If you would like Dr. Harris to be able to perform administrative functions:

    dscl / -append /Groups/admin GroupMembership toddharris