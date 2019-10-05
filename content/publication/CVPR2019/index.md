---
title: "Leveraging Crowdsourced GPS Data for Road Extraction From Aerial Imagery"
authors:
- admin
- Zonglin Di
- Pengyu Che
- Chun Liu
- Yin Wang
date: "2018-12-15T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In Procedings of *The IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2019*
publication_short: In *CVPR*

abstract: Deep learning is revolutionizing the mapping industry. Under lightweight human curation, computer has generated almost half of the roads in Thailand on Open- StreetMap (OSM) using high resolution aerial imagery. Bing maps are displaying 125 million computer generated building polygons in the U.S. While tremendously more efficient than manual mapping, one cannot map out everything from the air. Especially for roads, a small prediction gap by image occlusion renders the entire road useless for routing. Misconnections can be more dangerous. Therefore computer-based mapping often requires local verifications, which is still labor intensive. In this paper, we propose to leverage crowdsourced GPS data to improve and support road extraction from aerial imagery. Through novel data augmentation, GPS rendering, and 1D transpose convolution techniques, we show almost 5% improvements over previous competition winning models, and much better robustness when predicting new areas without any new training data or domain adaptation.

# Summary. An optional shortened abstract.
summary: Leveraging crowdsourced GPS data to improve and support road extraction from aerial imagery.

tags:
- Computer Vision
- Road Extraction
featured: true

links:
- name: Supp
  url: http://openaccess.thecvf.com/content_CVPR_2019/supplemental/Sun_Leveraging_Crowdsourced_GPS_CVPR_2019_supplemental.pdf
url_pdf: http://openaccess.thecvf.com/content_CVPR_2019/papers/Sun_Leveraging_Crowdsourced_GPS_Data_for_Road_Extraction_From_Aerial_Imagery_CVPR_2019_paper.pdf
url_code: https://github.com/suniique/Leveraging-Crowdsourced-GPS-Data-for-Road-Extraction-from-Aerial-Imagery
url_poster: 'cvpr19_poster_sun.pdf'

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

