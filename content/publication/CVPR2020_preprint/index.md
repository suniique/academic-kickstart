---
title: "Whole-Object Segmentation Using Regional Variance Losses"
authors:
- admin
date: "2019-11-15T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2019-11-15T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: Submitted (Under review)
publication_short: Submitted (Under review)

abstract: Learning structured predictions in semantic segmentation receives increasing attention in recent years. Most semantic segmentation methods focus on common object datasets such as VOC and COCO, which label only visible parts of each object, e.g., sections of a horse separated by objects in front of it. Domain-specific objects, on the other hand, often require whole-object segmentation despite image occlusion, e.g., roads and buildings in satellite imagery under vegetation cover, cells, and organs in noisy medical images, lanes, and signs in autonomous driving applications. The widely used cross entropy loss doesn't work well in these cases, because its pixel-level independence assumption ignores topology and often leads to structural issues such as fragments and broken boundaries. To tackle this, we propose a simple but novel loss term that produces a much more continuous and smooth prediction for whole-object segmentation. Experiments on various tasks show that other structured approaches often perform worse than baseline for whole-object segmentation, while our loss shows significant topological improvements yet preserving the pixel-level metrics.

# Summary. An optional shortened abstract.
summary: Reducing the over-segmented fragments and gaps in "whole-object" segmentation by regulating the local variance. 

tags:
- Computer Vision
- Structure-Aware
- Loss Function
featured: true

links:
# - name: Slides
#   url: 'GeoAI 2018.pdf'
# - name: Link
#   url: https://dl.acm.org/citation.cfm?id=3281550
# url_pdf: 'SIGSPATIAL_Workshop_2018_Combining_Satellite Imagery_and_GPS_Data_for_Road_Extraction_paper.pdf'
 
# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Satellite image with GPS trajectories'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

