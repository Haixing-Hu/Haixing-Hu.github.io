---
layout: post
title: "How to symbolic link a directory to Tomcat's webapp"
author: Haixing Hu
category: programming
tags: [web, tomcat, debuging]
---

I found that using the command sudo mount --bind olddir newdir gets me out of
trouble. If you don't have root access then this won't work for you. See
`mount --help` or `man mount` for some more info on binding but it basically
mounts one directory on top of another so it has the same affect as a symlink
but it gets around tomcat's limitation with symlinks.

More precisely, executes the following command:

    sudo mount --bind /path/to/your/app /var/lib/tomcat7/webapps/myapp

and then the `/var/lib/tomcat7/webapps/myapp` will be linked to `/path/to/your/app`.
