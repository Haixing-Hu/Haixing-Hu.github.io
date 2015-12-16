---
layout: post
title: "How to implements the 'drop user if exists' in MySQL"
tagline: "A workaround solution"
author: Hao
source_url: http://stackoverflow.com/questions/598190/mysql-check-if-the-user-exists-and-drop-it
category: programming
tags: [Database, MySQL, SQL]
---

MySQL has no `DROP USER IF EXISTS ...` syntax.

The following code imexplicitly creates the user and then drop the user.

    GRANT USAGE ON *.* TO 'username'@'localhost' IDENTIFIED BY 'password';
    DROP USER 'username'@'localhost';

