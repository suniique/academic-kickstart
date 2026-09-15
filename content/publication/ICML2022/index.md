---
title: "On the Practicality of Deterministic Epistemic Uncertainty"
authors:
- Janis Postels
- Mattia Segu
- admin
- Luca Daniel Sieber
- Luc Van Gool
- Fisher Yu
- Federico Tombari
date: "2022-01-15T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2022-03-15T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Proceedings of the International Conference on Machine Learning (ICML) 2022
publication_short: In *ICML 2022*
equal_contribution: true
venue_label: ICML 2022
homepage_image: thumbnail.webp
visual_alt: "A diagram evaluating deterministic uncertainty methods under distribution shifts and on semantic segmentation."

abstract: A set of novel approaches for estimating epistemic uncertainty in deep neural networks with a single forward pass has recently emerged as a valid alternative to Bayesian Neural Networks. On the premise of informative representations, these deterministic uncertainty methods (DUMs) achieve strong performance on detecting out-of-distribution (OOD) data while adding negligible computational costs at inference time. However, it remains unclear whether DUMs are well calibrated and can seamlessly scale to real-world applications - both prerequisites for their practical deployment. To this end, we first provide a taxonomy of DUMs, and evaluate their calibration under continuous distributional shifts. Then, we extend them to semantic segmentation. We find that, while DUMs scale to realistic vision tasks and perform well on OOD detection, the practicality of current methods is undermined by poor calibration under distributional shifts.

# Summary. An optional shortened abstract.
summary: "Testing whether deterministic uncertainty estimates remain reliable under distribution shifts and in dense prediction tasks."

tags:
- Computer Vision
- Uncertainty Estimation
- Robustness
featured: true

links:
url_pdf: https://arxiv.org/pdf/2107.00649.pdf

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'DUM'
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
