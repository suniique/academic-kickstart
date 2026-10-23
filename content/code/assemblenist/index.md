---
title: "AssembleNIST: One Policy for All NIST Board Assemblies"
authors:
- Tao Sun
date: "2026-10-21T00:00:00Z"
publishDate: "2026-10-21T00:00:00Z"
# Rendered with the publication page template.
type: publication
publication: "Open-source code release · MIT License"
venue_label: Code · 2026
summary: "An open-source implementation of AlphaNIST in MuJoCo. One RL policy assembles all 20 parts of the NIST task board with 98.7% success."
tags:
- Robotic Assembly
- Reinforcement Learning
- MuJoCo
url_code: https://github.com/suniique/assembly-nist
links:
- name: Videos
  url: https://github.com/suniique/assembly-nist/tree/main/docs/videos
homepage_image: thumbnail.webp
homepage_animation: featured.webp
visual_alt: "A simulated Franka Panda arm assembling parts on the NIST Assembly Task Board 1 in MuJoCo."
image:
  caption: "One policy assembling parts on the NIST Assembly Task Board 1. The inset shows the wrist camera."
---

AssembleNIST is an independent, open-source implementation of [AlphaNIST](https://alpha-nist.github.io/) in [MuJoCo](https://mujoco.org/). A single reinforcement-learning policy, trained with PPO from binary success rewards, controls a Franka Panda arm and completes all 20 assembly tasks on the NIST Assembly Task Board 1. Code, pretrained policies, and instructions are in the [GitHub repository](https://github.com/suniique/assembly-nist). This project is not affiliated with or endorsed by the AlphaNIST authors.

## Results

With 8,192 parallel environments, the policy reaches 98.4% success after 10K PPO iterations and 98.7% after 12.5K. AlphaNIST reports 86.9% after 25K iterations, but it uses a different simulator, asset set, and implementation, so the numbers are not directly comparable.

![Success rate over training iterations. It rises from about 25% to above 98% by 5,500 iterations. AlphaNIST's reported results are marked at 25K iterations.](learning_curve.webp)

![The 20 parts at random initial poses on the board.](board_start.webp)
![The board after the policy assembles every part.](board_done.webp)

Left: the 20 parts at random initial poses. Right: the board after assembly.

## Acknowledgements

This project builds on [AlphaNIST](https://alpha-nist.github.io/) and [Success Guided Sampling](https://sgs-rl.github.io/). Thanks to [Octi Zhang](https://zoctipus.github.io) for guidance on training details and [Jing Zhang](https://jingz6676.github.io/) for helpful discussions.
