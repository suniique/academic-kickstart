---
title: "ARC: A Reasoning Recipe for Robot Foundation Models"
authors:
- Gokul Puthumanaillam
- Tao Sun
- Elie Aljalbout
- Moritz Reuss
- Zhaoshuo Li
- Fabio Ramos
- Ankit Goyal
- Jenai Xuning Yang
date: "2026-10-08T00:00:00Z"
publishDate: "2026-10-08T00:00:00Z"
# 3 = Preprint / Working Paper
publication_types: ["3"]
publication: "arXiv:2610.12386"
publication_short: Preprint 2026
venue_label: Preprint 2026
abstract: "ARC improves robot foundation models by teaching them to reason about the causes and expected effects of their next actions. It combines action-grounded reasoning traces, an automatic pipeline for labeling existing demonstrations, and model-specific adaptation strategies. The pipeline produces ARC-Trace-DROID without collecting additional robot data. ARC adapts both vision-language-action models, including π₀.₅, and world-action models, including Cosmos3-Nano-Policy. The adapted models achieve state-of-the-art results on RoboLab-120 and MolmoSpaces, with gains of up to 50 percentage points on RoboLab-Reasoning-50. Real-robot experiments improve π₀.₅ task success by 82.2 percentage points, without additional robot demonstrations or foundation-scale training."
summary: "Action-grounded causal reasoning improves robot foundation models using automatically labeled existing demonstrations."
tags:
- Robot Foundation Models
- Reasoning
- Vision-Language-Action Models
- World-Action Models
featured: true
url_pdf: https://arxiv.org/pdf/2610.12386
links:
- name: Project
  url: https://arc-robot-reasoning.github.io/
homepage_image: featured.webp
visual_alt: "ARC labels existing robot demonstrations with action-grounded causal reasoning traces, then adapts vision-language-action and world-action policies using those traces."
image:
  caption: "ARC combines action-grounded reasoning, automatic demonstration labeling, and adaptation of robot foundation models."
  focal_point: Center
  preview_only: false
---
