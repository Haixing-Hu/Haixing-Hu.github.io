---
layout: post
title: "Maven over SOCKS proxy"
author: Haixing Hu
category: programming
tags: [java,maven,proxy]
---

Setup a SSH tunnel to as SOCKS proxy:

    ssh -D 8085 yourname@your.gateway.com

Now tell maven to use the proxy we just created:
	
    mvn -U clean install -DsocksProxyHost=127.0.0.1 -DsocksProxyPort=8085

Or export it to env for convenience.
	
    export MAVEN_OPTS="-DsocksProxyHost=127.0.0.1 -DsocksProxyPort=8085"