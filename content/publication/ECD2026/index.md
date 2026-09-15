---
title: "Energy-based Compositional Diffusion Planning"
authors:
- Tao Sun
- Utkarsh Aashu Mishra
- Jiaxin Lu
- Danfei Xu
- Iro Armeni
date: "2026-06-19T00:00:00Z"
publishDate: "2026-06-19T00:00:00Z"
publication_types: ["1"]
publication: International Conference on Machine Learning (ICML) 2026
publication_short: ICML 2026
venue_label: ICML 2026
abstract: "Energy-based Compositional Diffuser (ECD) composes short diffusion-generated trajectory fragments into long-horizon robot plans. It defines a global trajectory energy whose gradient corrects inconsistencies at fragment boundaries. An efficient Markov-based approximation keeps inference cost linear in the planning horizon. Experiments on OGBench stitching tasks evaluate planning success and inference efficiency."
summary: "Composing short trajectory fragments into coherent long-horizon robot plans with a global energy and consistent boundary corrections."
tags:
- Robot Planning
- Diffusion Models
- Compositionality
featured: true
url_pdf: https://arxiv.org/pdf/2606.21646
url_code: https://github.com/GradientSpaces/ECD
links:
- name: OpenReview
  url: https://openreview.net/forum?id=r2sJKlXY3M
homepage_image: thumbnail.webp
homepage_animation: preview.gif
visual_alt: "AntMaze trajectories comparing CompDiffuser and ECD: blue paths reach the goal without hitting walls, while red paths collide."
image:
  caption: "Energy-based composition corrects the boundaries between short trajectory fragments."
  focal_point: Center
  preview_only: false
---
