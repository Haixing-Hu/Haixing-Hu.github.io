---
layout: post
title: "Create 'native' Java applications on OS X and Windows using Maven plugins"
author: Tobias Södergren
source_url: http://www.jayway.com/2011/08/15/create-native-java-applications-on-os-x-and-windows-using-maven-plugins/
category: programming
tags: [programming, java, maven, Mac OS X, Windows]
---

When building a desktop application, the target audience usually expects an executable to when launching it. If the application is written in Java you have the options to create a batch file to launch it, create an executable jar file, compile the application as a native application or wrap the application using a native ‘launcher’. This post will result in a maven pom for dealing with the last option, it may be used in both Windows and OS X environments.

<!--more-->

The pom is configured to use two different plugins depending on which operating system that is executing it.

On Windows, a [Launch4j](http://launch4j.sourceforge.net/) project [plugin](http://alakai.org/reference/plugins/launch4j-plugin-usage.html) will be used. On OS X the [osxappbundle](http://mojo.codehaus.org/osxappbundle-maven-plugin/) plugin is used, which creates an OS X application directory structure and uses the `JavaApplicationStub` binary for launching the application.

The `<profile>` tag is used for deciding which plugin to use depending on operating system.

The pom also points out different application icons for the binaries, OS X requires the icon to be in the [icns](http://en.wikipedia.org/wiki/Apple_Icon_Image_format) and windows in the [ico](http://en.wikipedia.org/wiki/ICO_(file_format)) format.

The wrapped application has a main class in the file `com.jayway.wrappedapplication.Launcher`

### The pom.xml

	<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	         xsi:schemalocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
	  <modelversion>4.0.0</modelversion>
	  <groupid>com.jayway.wrappedapplication</groupid>
	  <artifactid>launcher</artifactid>
	  <packaging>jar</packaging>
	  <version>1.0-SNAPSHOT</version>
	  <name>launcher</name>
	  <url>http://maven.apache.org</url>
	  <profiles>
	    <profile>
	      <id>windows-deploy</id>
	      <activation>
	        <os>
	          <family>Windows</family>
	        </os>
	      </activation>
	      <build>
	        <plugins>
	          <plugin>
	            <groupid>org.bluestemsoftware.open.maven.plugin</groupid>
	            <artifactid>launch4j-plugin</artifactid>
	            <version>1.5.0.0</version>
	            <executions>
	              <execution>
	                <id>launch4j</id>
	                <phase>verify</phase>
	                <goals>
	                  <goal>launch4j</goal>
	                </goals>
	                <configuration>
	                  <dontwrapjar>false</dontwrapjar>
	                  <headertype>gui</headertype>
	                  <outfile>${project.build.directory}/relauncher-${project.version}.exe</outfile>
	                  <jar>${project.build.directory}/${project.build.finalName}.jar</jar>
	                  <errtitle>Launcher</errtitle>
	                  <jre>
	                    <minversion>1.6.0</minversion>
	                  </jre>
	                  <classpath>
	                    <mainclass>com.jayway.wrappedapplication.Launcher</mainclass>
	                    <adddependencies>false</adddependencies>
	                    <precp>anything</precp>
	                  </classpath>
	                  <icon>${basedir}/build-resources/win/icons/application.ico</icon>
	                </configuration>
	              </execution>
	            </executions>
	          </plugin>
	        </plugins>
	      </build>
	    </profile>
	    <profile>
	      <activation>
	        <os>
	          <family>mac</family>
	        </os>
	      </activation>
	      <build>
	        <plugins>
	          <plugin>
	            <groupid>org.codehaus.mojo</groupid>
	            <artifactid>osxappbundle-maven-plugin</artifactid>
	            <version>1.0-alpha-2</version>
	            <configuration>
	              <mainclass>com.jayway.wrappedapplication.Launcher</mainclass>
	              <iconfile>${basedir}/build-resources/osx/icons/application.icns</iconfile>
	            </configuration>
	            <executions>
	              <execution>
	                <phase>package</phase>
	                <goals>
	                  <goal>bundle</goal>
	                </goals>
	              </execution>
	            </executions>
	          </plugin>
	        </plugins>
	      </build>
	    </profile>
	  </profiles>
	</project>
	
And that’s it.	