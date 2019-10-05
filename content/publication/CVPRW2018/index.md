---
title: "Stacked U-Nets with Multi-output for Road Extraction"
authors:
- admin
- Zehui Chen
- Wenxiang Wen
- Yin Wang
date: "2018-06-16T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In Procedings of *2018 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW) 2018*
publication_short: In *DeepGlobe*

abstract: With the recent advances of Convolutional Neural Networks(CNN) in computer vision, there have been rapid progresses in extracting roads and other features from satellite imagery for mapping and other purposes. In this paper, we propose a new method for road extraction using stacked U-Nets with multiple output. A hybrid loss function is used to address the problem of unbalanced classes of training data. Post-processing methods, including road map vectorization and shortest path search with hierarchical thresholds, help improve recall. The overall improvement of mean IoU compared to the vanilla VGG network is more than 20%.

# Summary. An optional shortened abstract.
summary: A new method for road extraction using stacked U-Nets with multiple output, hybrid loss function used to address the problem of unbalanced classes of training data, and post-processing methods to bridge prediction gaps.

tags:
- Computer Vision
- Road Extraction
featured: true

links:
url_pdf: http://openaccess.thecvf.com/content_cvpr_2018_workshops/papers/w4/Sun_Stacked_U-Nets_With_CVPR_2018_paper.pdf

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

