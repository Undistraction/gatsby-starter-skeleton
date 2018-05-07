---
title: "Downloads"
date: "2017-04-29"
slug: "downloads"
description: Easily include downloadable files.
keywords: downloads, pdf
image: ./images/main.jpg
---

You can offer downloads just by referencing the file you want to make available
using its relative filepath to your markdown file. For example if you have a
directory called `pdfs` in the same directory as your main markdown file you can
create download links for those files like this:

```
[Download this](pdfs/download-1.pdf) or [Download this](pdfs/download-2.pdf)
```

[Download this](pdfs/download-1.pdf) or [Download this](pdfs/download-2.pdf)

Files will be served from `/downloads`.
