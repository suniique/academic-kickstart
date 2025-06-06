---
title: "Nothing Stands Still: A Spatiotemporal Benchmark on 3D Point Cloud Registration Under Large Geometric and Temporal Change"
authors:
- Tao Sun
- Yan Hao
- Shengyu Huang
- Silvio Savarese
- Konrad Schindler
- Marc Pollefeys
- Iro Armeni 

date: "2025-02-25T00:00:00Z"
doi: "https://doi.org/10.1016/j.isprsjprs.2025.01.010"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-02-25T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: ISPRS Journal of Photogrammetry and Remote Sensing
publication_short: In *ISPRS Journal 2025*

abstract: Building 3D geometric maps of man-made spaces is a well-established and active field that is fundamental to numerous computer vision and robotics applications. However, considering the continuously evolving nature of built environments, it is essential to question the capabilities of current mapping efforts in handling temporal changes. In addition to the above, the ability to create spatiotemporal maps holds significant potential for achieving sustainability and circularity goals. Existing mapping approaches focus on small changes, such as object relocation within common living spaces or self-driving car operation in outdoor spaces; all cases where the main structure of the scene remains fixed. Consequently, these approaches fail to address more radical change in the structure of the built environment, such as on the geometry and topology of it. To promote advancements on this front, we introduce the Nothing Stands Still (NSS) benchmark, which focuses on the spatiotemporal registration of 3D scenes undergoing large spatial and temporal change, ultimately creating one coherent spatiotemporal map. Specifically, the benchmark involves registering within the same coordinate system two or more partial 3D point clouds (fragments) originating from the same scene but captured from different spatiotemporal views. In addition to the standard task of pairwise registration, we assess multi-way registration of multiple fragments that belong to the same indoor environment and any temporal stage. As part of NSS, we introduce a dataset of 3D point clouds recurrently captured in large-scale building indoor environments that are under construction or renovation. The NSS benchmark presents three scenarios of increasing difficulty, with the goal to quantify the generalization ability of point cloud registration methods over space (within one building and across buildings) and time. We conduct extensive evaluations of state-of-the-art methods on NSS over all tasks and scenarios. The results demonstrate the necessity for novel methods specifically designed to handle large spatiotemporal changes. The homepage of our benchmark is at http://nothing-stands-still.com.

# Summary. An optional shortened abstract.
summary: We introduce the Nothing Stands Still (NSS) benchmark, which focuses on the spatiotemporal registration of 3D scenes undergoing large spatial and temporal change.

tags:
- Point Cloud Registration
- Spatiotemporal Mapping
- 3D Scene Understanding
- Benchmark
featured: true

links:
- name: Project
  url: http://nothing-stands-still.com/
- name: NSS Challenge
  url: https://www.nothing-stands-still.com/challenge
url_pdf: https://arxiv.org/pdf/2311.09346
url_code: https://github.com/GradientSpaces/nss-challenge

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Overview of the Nothing Stands Still (NSS) benchmark.'
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

