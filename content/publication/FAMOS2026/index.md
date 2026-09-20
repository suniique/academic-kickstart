---
title: "FAMOS: Feed-Forward 3D Articulation Modeling from Sparse Observations"
authors:
- Kevin Qu
- Tao Sun
- Massimiliano Viola
- Liyuan Zhu
- Zhizhuo Zhou
- Sayan Deb Sarkar
- Konrad Schindler
- Iro Armeni
date: "2026-09-17T00:00:00Z"
publishDate: "2026-09-17T00:00:00Z"
# 3 = Preprint / Working Paper
publication_types: ["3"]
publication: "arXiv:2609.20817"
publication_short: Preprint 2026
venue_label: Preprint 2026
abstract: "Modeling articulated objects from sparse monocular views is challenging because each observation reveals only partial geometry and motion evidence. Most feed-forward methods infer articulation from a single observation and therefore rely heavily on learned category-level shape priors. We present FAMOS, a feed-forward model that predicts movable-part segmentation and joint parameters from a sparse, unordered set of partial point clouds. Our model jointly reasons over multiple observations and naturally supports a variable number of inputs, including a single view. To aggregate articulation cues across observations, we introduce a Multi-state Articulation Transformer with alternating state-wise and global attention. We further propose an observed articulation span objective that supervises the motion range each part exhibits across the input observations, encouraging the model to leverage the full observation set. To overcome the limited scale and diversity of existing datasets, we introduce a procedural data generator that synthesizes self-annotated assets during training. Experiments on PartNet-Mobility, ACD, and ArtiCraft-10K demonstrate consistent improvements over both feed-forward and optimization-based baselines."
summary: "A feed-forward model that predicts movable parts and joint parameters of articulated objects from a sparse, unordered set of partial point clouds."
tags:
- Articulated Objects
- 3D Vision
- Point Clouds
featured: true
url_pdf: https://arxiv.org/pdf/2609.20817
links:
- name: Project
  url: https://kevinqu7.github.io/famos
homepage_image: thumbnail.webp
homepage_animation: preview.gif
visual_alt: "Sparse input views of a stove cabinet and a vanity desk next to FAMOS predictions: point clouds with colored movable parts and joint axes, animated through their articulation."
image:
  caption: "FAMOS predicts movable-part segmentation and joint parameters from sparse observations."
  focal_point: Center
  preview_only: false
---
