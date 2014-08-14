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

OpenDesk does not impose standard layer formats on designers and therefore manually processes each 2D design that is received in order to ensure it does not contain any mistakes and is saved in a standardised format. This process can take a long time depending on the complexity of design. This consistent file can then be used by the Makers to generate a tool path for their individual machines.

Makers around the world work to different tolerances depending on their machine and with different material thicknesses depending what is locally available. These parameters can have a large impact on the original design. For example a slot designed to fit a beam of thickness 18MM will not fit a beam that has been cut from a sheet with a thickness of 20MM. In order to resolve this issue, an OpenDesk designer will manually edit all the effected slots in the original 2D design file.

Imagine a system that could import both 2D or 3D design files from the Designers and automatically translate them in to the standard OpenDesk format with the ability to parameterise the original design, so minor changes such as material thickness could be made with the press of a button and the final design file updated automatically. That is the challenge presented by open nature of OpenDesk and the challenge that this review aims to solve.

## The Solution

The framework of the solution is diagrammatically shown below. There are three clear stages within this workflow framework; Designer, In-house (manual) and In-house (automatic).

![alt tag](https://github.com/harrykeen18/openmaking.is/blob/gh-pages/gfx/Framework2.png)

The first data transition from designer to Opendesk can occur in 3D or 2D. Many different 3D file formats exist and most are specific to certain CAD programs. Conveniently there exists a standard "dumb solid" file format called .STP (step). This file contains the basic information required for CAD software to construct an accurate 3D model. It is becoming an standard within the industry to transfer 3D data in this format and will therefore will be used by OpenDesk to receive models from designers. 2D designs can also be transferred in .DXF format as all major CAD platforms can also import this file type.

Once received by OpenDesk the "dumb" files must be converted into a format that OpenDesk can manipulate and edit ready to convert to the final DXF format. This is the second stage of the process and will require a specific CAD platform. The selection of this software is critical as some platforms are very good at parameterisation of models whilst others may be more able to integrate with downstream processes. Apart from creating a model ready for conversion to the final DXF, this 3D model will be used for generating assembly instructions and rendering imagery for client content. A CAD platform that facilitates these additional requirements would be beneficial. Due to the complexity of this stage, the 3D model will inevitably have to be produced manually by an OpenDesk designer. Different CAD platforms house features that may help this process such as Synchronous (or Direct) Modelling and Feature Recognition.

With a workable model produced the final DXF can be generated. This is not a particularly straight forward process, but has a high potential to be automated by different pieces of existing software and bespoke scripting. The 3D model must be flattened in to a 2D drawing, the different features such as through cuts, holes and slots identified, nest the required number of parts within a custom sheet size and finally drop the nested results into an OpenDesk standard template.

The figure shows some of the software routes explored so far. The circle shows at which point a particular program takes over the process and the square shows where it hands the process on to another program. The two most thoroughly investigated paths shown with solid lines involve Autodesk Inventor, AutoCAD and a piece of CAM (Computer Aided Manufacture) software called CIMtech. Further investigation will be undertaken on the dotted paths and there is potential for further paths to added as the review deepens.

## Analysis

An example model was passed through each path shown to gain an understanding of the CAD packages worked and how efficiently they completed the process. The process was iterative and new paths were invented and developed as the analysis was conducted.

##Path 1: Inventor - CIMtech - AutoCAD

The first path shown begins with using Autodesk Inventor to carry out stage two, the construction of an OpenDesk version of the original received design. Step files were converted in to Inventor specific (IPT) models using an Add-in called Feature Recognition. This identifies features such as holes, fillets, chamfers and extrusions in order to reverse engineer the part. It was found to be useful on simple geometry but failed to identify more complex curves and shapes. In some cases the most complex parts had to made from scratch by projecting the original geometry on to an entirely new part. Extruding flat DXF files was also quite involved as converting DXF vectors in to sketches that can be parameterised involves several steps. However, once this model has been created SolidCIM, a CIMtech package can take this design via a single button press and convert it to layered flat pattern whilst adding features that are required for routing such as extended lines on edge slots. Opening this file in RouterCIM can then nest the parts ready to manually drop in to the OpenDesk template.

This stage is automated and well developed, it does however come at high price. The path requires both AutoCAD and Autodesk Inventor packages as well as CIMtech's solution. Autodesk Inventor also has a good rendering package and it is possible to create exploded views for use in assembly manuals.

##Path 2: AutoCAD - CIMtech - AutoCAD

This path is similar to the first but uses AutoCAD instead of Inventor to convert designers files into a usable format. This is method is efficient at converting both 3D and 2D into a standardised format, however parameterisation is quite clunky. AutoCAD uses a Visual Basic API, so it would be possible to develop add-ins that automate much of the layer assignment process. The only major draw back is the lack of a 3D assembly that can be used for rendering and exploded views.

CIMtech has been outlined in this process however any nesting program that integrates with Autodesk could be used.

## Further Work

The dotted lines show software flows that have yet to be investigated. NX shows promise as an all encompassing solution and both Solidworks and SolidEdge look like they can provide a solution alongside a 3rd party CAM package.

Check back here soon for the results!

