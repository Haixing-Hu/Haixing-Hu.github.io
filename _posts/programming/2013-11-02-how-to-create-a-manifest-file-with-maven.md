---
layout: post
title: "How to create a manifest file with Maven"
author: mkyong
source_url: http://www.mkyong.com/maven/how-to-create-a-manifest-file-with-maven/
category: programming
tags: [programming, java, maven]
---

This tutorial will show you how to use the maven-jar-plugin to create a manifest file, and package / add it into the final jar file. The manifest file is normally used to define following tasks :

1. Define the entry point of the Application, make the Jar executable.
2. Add project dependency classpath.

<!--more-->

When you run the command mvn package to package project into a Jar, the following `meta-inf/manifest.mf` file will be generated and added into the final Jar file automatically.

	Manifest-Version: 1.0
	Built-By: ${user.name}
	Build-Jdk: ${java.version}
	Created-By: Apache Maven
	Archiver-Version: Plexus Archiver


## Make the Jar executable

Define `maven-jar-plugin` in `pom.xml`, and configure the manifest file via configuration tag.

	<plugin>
		<groupId>org.apache.maven.plugins</groupId>
		<artifactId>maven-jar-plugin</artifactId>
		<version>2.4</version>
		<configuration>
			<archive>
				<manifest>
					<mainClass>com.mkyong.core.App</mainClass>
				</manifest>
			</archive>
		</configuration>
	</plugin>

Following manifest file will be generated. If you run this Jar, it will execute the `com.mkyong.core.App`.

	anifest-Version: 1.0
	Built-By: mkyong
	Build-Jdk: 1.6.0_35
	Created-By: Apache Maven
	Main-Class: com.mkyong.core.App
	Archiver-Version: Plexus Archiver

## Add project dependency classpath

Most Java projects need dependency, and it can define in manifest file easily. Normally, you will use `maven-dependency-plugin` to copy project dependencies to somewhere else.

	  <plugin>
		<groupId>org.apache.maven.plugins</groupId>
		<artifactId>maven-jar-plugin</artifactId>
		<version>2.4</version>
		<configuration>
		  <archive>
		    <manifest>
			<addClasspath>true</addClasspath>
			<mainClass>com.mkyong.core.App</mainClass>
			<classpathPrefix>dependency-jars/</classpathPrefix>
		    </manifest>
		  </archive>
		</configuration>
	  </plugin>
	  <plugin>
		<groupId>org.apache.maven.plugins</groupId>
		<artifactId>maven-dependency-plugin</artifactId>
		<version>2.5.1</version>
		<executions>
		  <execution>
			<id>copy-dependencies</id>
			<phase>package</phase>
			<goals>
			    <goal>copy-dependencies</goal>
			</goals>
			<configuration>
			    <outputDirectory>
	               ${project.build.directory}/dependency-jars/
	            </outputDirectory>
			</configuration>
		    </execution>
		</executions>
	  </plugin>
 

Following manifest file will be generated. The project dependencies will be copied to `{project}/target/dependency-jars/`.

	manifest-Version: 1.0
	Built-By: mkyong
	Build-Jdk: 1.6.0_35
	Class-Path: dependency-jars/log4j-1.2.17.jar
	Created-By: Apache Maven
	Main-Class: com.mkyong.core.App
	Archiver-Version: Plexus Archiver


## Additional Notes

When using the above `maven-dependency-plugin`, Eclipse's m2e plugin will report an error:

	maven-dependency-plugin (goals "copy-dependencies", "unpack") is not supported by m2e.

It seems to be a known issue. You should instruct m2e to ignore this. Add the following inside your <build/> tag:

	<!-- Ignore/Execute plugin execution -->
    <plugin>
        <groupId>org.eclipse.m2e</groupId>
        <artifactId>lifecycle-mapping</artifactId>
        <version>1.0.0</version>
        <configuration>
            <lifecycleMappingMetadata>
                <pluginExecutions>
                    <!-- copy-dependency plugin -->
                    <pluginExecution>
                        <pluginExecutionFilter>
                            <groupId>org.apache.maven.plugins</groupId>
                            <artifactId>maven-dependency-plugin</artifactId>
                            <versionRange>[1.0.0,)</versionRange>
                            <goals>
                                <goal>copy-dependencies</goal>
                            </goals>
                        </pluginExecutionFilter>
                        <action>
                            <ignore />
                        </action>
                    </pluginExecution>
                </pluginExecutions>
            </lifecycleMappingMetadata>
        </configuration>
    </plugin>
    
Please check [http://stackoverflow.com/questions/8706017/maven-dependency-plugin-goals-copy-dependencies-unpack-is-not-supported-b]() for more details.    