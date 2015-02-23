---
layout: post
title: "Maven Tip: Get sources and Javadocs"
author: Haixing Hu
category: programming
tags: [programming, maven, java]
author: Ted Wise
source_url: http://tedwise.com/2010/01/27/maven-micro-tip-get-sources-and-javadocs/
---

When you’re using Maven in an IDE you often find the need for your IDE to resolve source code and Javadocs for your library dependencies. There’s an easy way to accomplish that goal.

    # mvn dependency:sources
    # mvn dependency:resolve -Dclassifier=javadoc

The first command will attempt to download source code for each of the dependencies in your pom file.

The second command will attempt to download the Javadocs.

Maven is at the mercy of the library packagers here. So some of them won’t have source code packaged and many of them won’t have Javadocs.