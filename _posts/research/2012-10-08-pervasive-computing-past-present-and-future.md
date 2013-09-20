---
layout: post
title: "Pervasive computing: Past, present, and future"
author: Stan Kurkovsky
category: research
tags: [reading notes, pervasive computing]
---

This post is the reading notes of the following paper:
Stan Kurkovsky, 
*Pervasive computing: Past, present, and future*,
The 5-th International Conference on Information and Communication 
Technology (ICICT 2007), 2007: 65-71.

## Abstract

The paradigm of pervasive computing describes ubiquitous computing environments
that provide anytime and anywhere access to information services while making
the presence of the system invisible to the user.  Pervasive computing
envisioned by Mark Weiser emerged at the conjunction of research and
development in a number of areas which include embedded and devices and
systems, wireless communications, and distributed, mobile and context-aware
computing.

## I. INTRODUCTION

The fundamental properties of a system comprised of tabs, pads and boards
described by Weiser include wireless communications, embedded and mobile
devices, distributed computing, and context awareness.

As in any emerging research area, there are many challenging problems in
pervasive computing. One of the most important and open questions is how to
ensure that a computing system is seamlessly and invisibly embedded in the
environment and how to minimize the possible impact of its intrusiveness on a
user’s perception.

Generally, there are two mutually complementing approaches to solving the
problem of unobtrusiveness of a pervasive system: by miniaturization of devices
and embedding of the system’s logic into wearable, handheld, and mobile
devices, as well as into the environment, and by achieving a level of
intelligence of the system that will be able to anticipate the actions of the
user in the context of the factors in the environment.

As a result, such a pervasive system will “fade into the background” and the
users will only need to interact with such a system at their leisure without
giving it much thought [14,23,28,30,32].


## II. COMPONENTS OF PERVASIVE COMPUTING SYSTEMS

In addition to making the system physically invisible, the concept of pervasive
computing provides for making systems logically invisible.

Such a logical invisibility can be achieved if the system can adjust itself to
the behavioral patterns exhibited by its user and to the factors of the
surrounding environment, which include time, location, other users, objects and
systems. Such capabilities can be achieved through context-awareness, which is
a necessary component in providing the system’s logical invisibility to
complement its physical invisibility ensured by device embedding [28].

Pervasive computing systems comprise of a large number of sensors, devices and
mobile systems; Software architectures that may be better suited to such an
environment requires that the application logic be decomposed into atomic
functions, which are distributed across ubiquitous processing, storage and
input/output resources and that it be capable of reassembling in varying
combinations as may be needed by a particular task.

Distributed systems generally include components playing one of three possible
roles: resources, resource managers, and clients [3].

Every resource within the distributed system has a unique identity, independent
of the resource location.

A distributed system is said to provide transparency of migration if it
supports mobility of its resources.

Context-awareness is a vital factor enabling the invisibility of pervasive
computing systems [3,10,28,31]. Context-aware systems can adjust their
properties and behavior according to the information about the current state of
the user, such as physiological state, behavioral patterns, orientation and
position, geographical location, or properties of the surrounding environment,
such as time of day, nearby users, objects and other systems [6,15,26,28]

For example, based on locality and availability, a context-aware service with
limited resources may be able to off-load processor intensive operations or
storage onto other systems located nearby that have more substantial resources.
A vehicle navigation system that is aware of the remaining level of gasoline in
the tank and the brand and type of fuel preferred by the user, may alert the
driver when he or she is within certain proximity of a gas station selling that
type of fuel at an acceptable price.

Invisibility in a pervasive computing system depends on how successfully it
implements a certain level of intelligence that would enable it to allow the
user to focus on a particular task at hand rather on interacting with the
system itself [12]. Context-aware systems utilizing this type of intelligence
often calculate the intent of the user based on a number of contexts. As a
result, context-awareness helps eliminate the bottleneck of the human attention
by anticipating the user’s reactions to relevant events [9].

1. Pervasive computing systems need to anticipate the actions of the user and
   adjust themselves while maintaining a careful a balance between their
   proactivity and invisibility of the system.
2. The ability of the system to adapt to changing factors in its environment is 
   another important consideration of preserving the system’s invisibility.

3. Finally, pervasive computing infrastructure could dynamically notify the
   user about the changes in resource availability and offer a choice of
   corrective actions.

For example, suppose a user is viewing a video stream on a mobile wireless
device [20].

## III. MOBILE PHONES AND PERVASIVE COMPUTING

Personalization is typically achieved by implementing different levels of
context-awareness, which vary from rudimentary setting of user preferences [27]
to intelligent profile matching [34].


## IV. SUMMARY

As Weiser wrote [32], “tabs, pads, and boards are just the beginning [of
pervasive computing systems]. The real power of the concept comes not from any
one of these devices; it emerges from the interaction of all of them.”

## BibTeX of the Paper

	@inproceedings{kurkovsky2007pervasive,
    	title = {Pervasive computing: Past, present, and future},
     	author = {Stan Kurkovsky},
     	year = {2007},
     	month = {December},
     	booktitle = {The 5-th International Conference on Information and Communication Technology (ICICT 2007)},
     	pages = {65--71},
     	address = {Cairo, Egypt},
     	doi = {http://dx.doi.org/10.1109/ITICT.2007.4475619},
	}
