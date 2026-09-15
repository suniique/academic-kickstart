# September 2026 homepage update

Implemented on `update-sept2026-3`. The checkout was already on this branch when work began; existing local CSS and menu changes were preserved. The other trial branches were not opened or inspected.

## Content and sources

Checked September 15, 2026. Google Scholar returned HTTP 403, so the publication update was cross-checked against author projects, official proceedings, arXiv, and Stanford's lab pages. The homepage now contains eleven papers, each with its own original research visual.

### Added acceptance news and Seed1.5-Thinking

The news now includes all five conference/journal acceptances among the listed papers since 2024, plus the Seed report release. No separate 2024 acceptance was found among these papers; NSS was accepted January 7, 2025, despite its legacy `ISPRS2024` directory name.

- RAP: June 2026, using the [ECCV final-decision schedule](https://eccv.eventhosts.cc/Conferences/2026/Dates) (June 17).
- ECD: April 2026, using the [ICML author-notification schedule](https://icml.cc/Conferences/2026/Dates) (April 30).
- Real-3DQA: January 2026, using the [ICLR author guide](https://iclr.cc/Conferences/2026/AuthorGuide).
- Rectified Point Flow: September 2025, using the [NeurIPS notification schedule](https://neurips.cc/Conferences/2025/Dates) (September 18); Spotlight status is confirmed on the project page.
- NSS: January 2025, explicitly dated in the [published journal paper](https://openreview.net/pdf?id=pbdiB0xg2L).
- Conference news uses month-level dates inferred from official notification schedules, not claimed dates of personal emails.
- Seed1.5-Thinking: April 2025 technical-report release, not a conference acceptance. The [arXiv record](https://arxiv.org/abs/2504.13914) confirms title, release date, and Tao Sun's authorship. The card uses corporate authorship “ByteDance Seed (including Tao Sun)” rather than implying first authorship; the detail page links to the complete author list.
- Seed's authentic benchmark image comes from the [official repository](https://raw.githubusercontent.com/ByteDance-Seed/Seed-Thinking-v1.5/main/images/performance.png), resized without changing plotted data. The figure uses the original model name, Seed-Thinking-v1.5; the publication title follows the revised report, Seed1.5-Thinking.

After these additions, the production build passed with 241 pages and 44 publication resources. The homepage has eleven publication cards and ten news items, including nine static figures and two original GIFs.

| Update | Source and date handling |
| --- | --- |
| RAP, ECCV 2026 | [Project](https://register-any-point.github.io/) and [repository](https://github.com/PRBonn/RAP). Oral and best paper candidacy are corroborated by [coauthor Liyuan Zhu](https://www.zhuliyuan.net/). The top-ten detail is supplied by Tao. The [conference site](https://eccv.ecva.net/) gives September 8–12, 2026, but its awards link still says “coming soon”; no exact selection day is asserted. |
| Energy-based Compositional Diffusion Planning, ICML 2026 | [arXiv](https://arxiv.org/abs/2606.21646), [repository](https://github.com/GradientSpaces/ECD), and [Stanford research listing](https://gradientspaces.stanford.edu/research). Newly added publication bundle. |
| Real-3DQA, ICLR 2026 | [Official proceedings](https://proceedings.iclr.cc/paper_files/paper/2026/hash/3739050312e637d158e39a2859fa8b01-Abstract-Conference.html), [project](https://real-3dqa.github.io/), and [arXiv](https://arxiv.org/abs/2603.23523). Newly added bundle; Ma and Sun contributed equally. |
| Rectified Point Flow | Updated from preprint to NeurIPS 2025, Spotlight, with equal-contribution marks and conference BibTeX. [Project](https://rectified-pointflow.github.io/) and [official proceedings](https://proceedings.neurips.cc/paper_files/paper/2025/hash/f72599679c20c6e59878c075706132f1-Abstract-Conference.html). |
| NSS award | [ISPRS award page](https://www.isprs.org/society/awards/helava/2025.aspx); the [society's announcements](https://www.isprs.org/news/announcements/default.aspx) date the announcement **April 5, 2026**. Also in the [April 2026 bulletin](https://www.isprs.org/news/newsletter/2026-01/index.html). Wording identifies the journal's annual Best Paper Award for 2025, avoiding confusion with the four-year Helava award. |
| SRC fellowship | Receipt and May 2026 date supplied by Tao. The [SRC Robotics Scholars Program](https://src.stanford.edu/src-robotics-scholars) confirms the formal program name. |
| NVIDIA internship | Start month (June 2026) and world-action-model research supplied by Tao; linked to [NVIDIA Cosmos Lab](https://research.nvidia.com/labs/cosmos-lab/). |
| Prior biography | Education, ByteDance/ETH experience, and research collaborators retained from [Tao's public homepage](https://taosun.io/). Used “PhD student,” matching the public profile. |
| ICML 2022 metadata | Corrected the venue expansion and the missing Luca Daniel Sieber in BibTeX using [PMLR](https://proceedings.mlr.press/v162/postels22a.html). |

## Visual provenance

All visuals are original author/project figures or experiment animations. No AI image generation or AI image editing was used. ECD's comparison panels and the first three Rectified Point Flow examples were cropped from the original GIFs, then resized and palette-optimized. The GIFs are approximately 230 KB and 658 KB, with static final-frame WebP fallbacks, per-animation pause controls, and support for reduced motion. The remaining eight papers use static WebP figures.

| Paper | Original visual source |
| --- | --- |
| RAP | [Project teaser](https://register-any-point.github.io/images/rap_teaser_new.png). |
| ECD | [Official repository comparison GIF](https://raw.githubusercontent.com/GradientSpaces/ECD/main/assets/ecd_vs_cd_giant_new.gif) and [method figure](https://raw.githubusercontent.com/GradientSpaces/ECD/main/assets/method.png). |
| Real-3DQA | [Project figure](https://real-3dqa.github.io/assets/figure3.png). |
| Rectified Point Flow | [Official repository assembly GIF](https://raw.githubusercontent.com/GradientSpaces/Rectified-Point-Flow/main/assets/merged_trajectory_grid.gif) and [method figure](https://rectified-pointflow.github.io/images/overview_flow_asm.png). |
| NSS | Existing author-owned `content/publication/ISPRS2024/featured.png`, also on [the live publication page](https://taosun.io/publication/isprs2024/). |
| SHIFT, ICML 2022, CVPR 2019, GeoAI 2018, DeepGlobe 2018 | Existing per-paper `featured` images in their publication bundles, optimized as WebP thumbnails. |
| Portrait | Existing `content/authors/admin/avatar.jpg`. |

## Maintaining the page

- Biography: `content/authors/admin/_index.md`.
- News and research directions: `data/homepage.yaml`.
- Papers: existing `content/publication/<paper>/index.md` bundles, automatically grouped by year. `venue_label`, `recognition`, and `equal_contribution` control the presentation. `homepage_image` selects a static thumbnail; optional `homepage_animation` selects a GIF. Each paper must have a valid static thumbnail or the build fails.
- Layout: `layouts/index.html` and `layouts/partials/homepage/`.
- Style and animation controls: `assets/css/homepage.css` and `assets/js/homepage.js`.
- Existing publication URLs, downloadable papers, bibliography files, project links, and lecture-note resources remain available. The publication archive retains the theme's search/filter interface.

Hugo **0.147.8 extended** is used locally and pinned in `netlify.toml`. Two local template overrides fix older Academic theme expressions for publication types and author paths, without modifying the theme submodule.

Preview with `hugo server --port 1319 --baseURL http://localhost:1319/`. Build with `hugo --minify`. This update is prepared for local review; the public homepage has not been deployed.

## Verification

The production build completed successfully (230 generated pages). Checks found ten publication cards and no broken local references among the homepage's 41 local assets and destinations. Browser review at 1280 px desktop and 390 px / 320 px mobile widths found no horizontal overflow; all eleven images loaded. The ECD animation pause control was exercised successfully, and a publication detail page was checked. Screenshots are in `artifacts/homepage-sept2026/`.
