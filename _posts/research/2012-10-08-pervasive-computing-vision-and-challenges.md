---
layout: post
title: "Pervasive Computing: Vision and Challenges"
author: Mahadev Satyanarayanan
category: research
tags: [pervasive computing, notes]
---

This post is the reading notes of the following paper:

Mahadev Satyanarayanan,
*Pervasive Computing: Vision and Challenges*,
IEEE Personal Communications, 8, 2001:10-17.

<!--more-->

## Abstract

It then identifies four new research thrusts: effective use of smart spaces,
invisibility, localized scalability, and masking uneven conditioning.

## 1. Introduction

"The most profound technologies are those that disappear. They weave themselves
into the fabric of everyday life until they are indistinguishable from it." So
began Mark Weiser’s seminal 1991 paper [44] that described his vision of
ubiquitous computing, now also called pervasive computing.


## 2. Related Fields

This body of knowledge spans many areas that are foundational to pervasive
computing and is now well codified in textbooks [8, 19, 20]:
- remote communication, including protocol layering, remote procedure call [3],
  the use of timeouts, and the use of end-to-end arguments in placement of
  functionality [28].
- fault tolerance, including atomic transactions, distributed and nested
  transactions, and two-phase commit [13].
- high availability, including optimistic and pessimistic replica control [9],
  mirrored execution [4], and optimistic recovery [37].
- remote information access, including caching, function shipping, distributed
  file systems, and distributed databases [30].
- security, including encryption-based mutual authentication and privacy [23].

Although many basic principles of distributed system design continued to apply,
four key constraints of mobility forced the development of specialized
techniques. These constraints are[31]:

1. unpredictable variation in network quality
2. lowered trust and robustness of mobile elements,
3. limitations on local resources imposed by weight and size constraints,
4. and concern for battery power consumption.

Mobile computing has the following borad areas:

1. mobile networking
2. mobile information access
3. support for adaptative applications
4. system-level energy saving techniques
5. location sensitivity

We characterized a pervasive computing environment as one saturated with
computing and communication capability, yet so gracefully integrated with users
that it becomes a ‘‘technology that disappears.’’

## 3. Example Scenarios

## 4. Drilling Down

## 5. Conclusion

## BibTeX of the paper

	@article{satyanarayanan2001pervasive,
		author = {Mahadev Satyanarayanan},
	    title = {Pervasive Computing: Vision and Challenges},
    	journal = {IEEE Personal Communications},
	    year = {2001},
	    volume = {8},
    	pages = {10--17},
	    doi = {http://dx.doi.org/10.1109/98.943998}
	}