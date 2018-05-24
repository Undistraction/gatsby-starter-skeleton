---
title: "Downloads"
date: "2017-04-29"
slug: "downloads"
description: Easily include downloadable files.
keywords: downloads, pdf
category: Downloads
author: Pedr Browne
image: ./images/main.jpg
---

You can offer visitors links to file downloads just by referencing the file you
want to make available using its filepath relative to your markdown file. For
example if you have a directory called `pdfs` in the same directory as your main
markdown file you can create download links for those files like this:

```
[Download this](pdfs/download-1.pdf) or [Download this](pdfs/download-2.pdf)
```

[Download this](pdfs/download-1.pdf) or [Download this](pdfs/download-2.pdf)

Files will be served from `/downloads`.

---

# Plugins Used

* [gatsby-remark-copy-linked-files](https://www.gatsbyjs.org/packages/gatsby-remark-copy-linked-files)
