---
title: "Register Any Point: Scaling 3D Point Cloud Registration by Flow Matching"
authors:
- Yue Pan
- Tao Sun
- Liyuan Zhu
- Lucas Nunes
- Iro Armeni
- Jens Behley
- Cyrill Stachniss

date: "2026-09-09T00:00:00Z"
publishDate: "2026-09-09T00:00:00Z"
publication_types: ["1"]
publication: European Conference on Computer Vision (ECCV) 2026
publication_short: "ECCV 2026 · Oral · Best Paper Candidate"
venue_label: ECCV 2026
recognition: Oral · Best Paper Candidate (top 10)
homepage_image: thumbnail.webp
visual_alt: "RAP aligns multiple colored point clouds into a shared 3D scene across objects, indoor rooms, and outdoor environments."

abstract: "Point cloud registration aligns multiple unposed point clouds into a common frame, a core capability for 3D reconstruction and robot localization. We cast registration as conditional generation: a learned continuous point-wise velocity field transports noisy points to a registered scene, from which the pose of each view is recovered. The resulting model performs strongly across pairwise and multi-view registration benchmarks, particularly under low overlap, and generalizes across scales and sensor modalities."

summary: "A single flow-matching model for pairwise and multi-view registration, generalizing across scene scales and sensor modalities."

tags:
- Point Cloud Registration
- Flow Matching
- 3D Vision
- Robotics
featured: true

links:
- name: Project
  url: https://register-any-point.github.io/
url_pdf: https://arxiv.org/pdf/2512.01850
url_code: https://github.com/PRBonn/RAP

image:
  caption: "RAP learns to transport points into a shared registered scene."
  focal_point: "Center"
  preview_only: false
---
