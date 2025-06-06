---
title: "Rectified Point Flow: Generic Point Cloud Pose Estimation"
authors:
- Tao Sun
- Liyuan Zhu
- Shengyu Huang
- Shuran Song
- Iro Armeni

date: "2025-06-06T00:00:00Z"
doi: "https://doi.org/10.48550/arXiv.2506.05282"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-06-06T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: arXiv
publication_short: Preprint

abstract: We introduce Rectified Point Flow, a unified parameterization that formulates pairwise point cloud registration and multi-part shape assembly as a single conditional generative problem. Given unposed point clouds, our method learns a continuous point-wise velocity field that transports noisy points toward their target positions, from which part poses are recovered. In contrast to prior work that regresses part-wise poses with ad-hoc symmetry handling, our method intrinsically learns assembly symmetries without symmetry labels. Together with a self-supervised encoder focused on overlapping points, our method achieves a new state-of-the-art performance on six benchmarks spanning pairwise registration and shape assembly. Notably, our unified formulation enables effective joint training on diverse datasets, facilitating the learning of shared geometric priors and consequently boosting accuracy.

# Summary. An optional shortened abstract.
summary: We introduce a point cloud generative model that unifies pairwise registration and multi-part shape assembly, achieving state-of-the-art performance across multiple benchmarks.

tags:
- Point Cloud Pose Estimation
- Shape Assembly
- Point Cloud Registration
- Rectified Flow
featured: true

links:
url_pdf: https://arxiv.org/pdf/2506.05282

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

