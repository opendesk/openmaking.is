---
title: OpenDesk Data Flow & Processing Review
description: |
    How do we standardise the work of hundreds of different designers into a single editable format that can be used by makers around the world?
author: harrykeen18
thumbnail:
layout: article
categories:
- articles
tags:
- concepts
---


## OpenDesk Data Flow & Processing Review

The unique community driven structure of OpenDesk presents some interesting challenges that have not previously been addressed by the manufacturing industry. A wide range of designers and makers exist within the global OpenDesk community and each one is working to different standards. The overriding philosophy of OpenDesk is to embrace this variety and build a framework which every designer and maker can operate in, using their own individual processes, software and machines. Whilst engineering and design companies can impose standards and limitations for their designers to adhere to, OpenDesk must process a huge range of designs and produce a standardised design file that every maker can work with despite their machine, units of measurement or material.


## The Problem Details

Currently OpenDesk receives 2D vector drawing files from designers, typically in a file type called DXF. Some designers work directly in this format, but others work in a 3D modelling CAD (Computer Aided Design) package, then flattern their designs in to the 2D DXF format. The 2D file contains critical information on different layers. For example one layer will contain a series of lines shown in a specific colour. These lines on each layer define similar features, an example of similar features could be 6MM diameter holes drilled to a depth of 10MM, or on another layer a line that defines the outer profile of a part.

OpenDesk doesn't impose standard layer formats for designers and therefore manually processes each 2D design that is received in order to ensure it does not contain any mistakes and is saved in a standardised format. This process can take a long time depending on the complexity of design. This consistent file can then be used by the Makers to generate a tool path for their individual machines.

Makers around the world work to different tolerances depending on their machine and with different material thicknesses depending what is locally available. These parameters can have a large impact on the original design. For example a slot designed to fit a beam of thickness 18MM will not fit a beam that has been cut from a sheet with a thickness of 20MM. In order to resolve this issue, an OpenDesk designer will manually edit all the effected slots in the original 2D design file.

Imagine a system that could import both 2D or 3D design files from the Designers and automatically translate them in to the standard OpenDesk format with the ability to parameterise the original design, so minor changes such as material thickness could be made with the press of a button and the final design file updated automatically. That is the challenge presented by open nature of OpenDesk and the challenge that this review aims to solve.
