---
title: "Combining Satellite Imagery and GPS Data for Road Extraction"
authors:
- admin
- Zonglin Di
- Yin Wang
date: "2019-06-16T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In Procedings of *the 2nd ACM SIGSPATIAL International Workshop on AI for Geographic Knowledge Discovery*
publication_short: In *GeoAI'18*

abstract: Road extraction is a fundamental problem in remote sensing and mapping. Recent advances in Convolution Neural Network (CNN) have contributed significant improvements in automatic road extraction from satellite imagery, albeit prediction gaps challenge post-processing. Some of the gaps are hard to bridge by satellite imagery alone due to dense vegetation, road construction, and building shadows. In this paper, we combine satellite imagery with GPS data to improve road extraction quality. Our dataset includes 100cm pixel resolution satellite imagery and 192-hour taxi GPS traces from the urban area of Beijing. Experimenting with various layers to combine GPS data, our CNN model outperforms the RGB-only model by nearly 13% on mean IoU.

# Summary. An optional shortened abstract.
summary: Combining satellite imagery with GPS data to improve road extraction quality

tags:
- Computer Vision
- Road Extraction
featured: true

links:
- name: Link
  url: https://dl.acm.org/citation.cfm?id=3281550
url_pdf: 'SIGSPATIAL_Workshop_2018_Combining_Satellite Imagery_and_GPS_Data_for_Road_Extraction_paper.pdf'
 
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

