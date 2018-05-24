---
title: "Images"
date: "2017-07-01"
slug: "images"
description: Use images in your markdown.
keywords: images, responsive, markdown
category: Markdown
author: Pedr Browne
image: ./images/main.jpg
---

# Responsive Images

Use images in your markdown and they will be made responsive. Just refer to them
by their file-path, relative to the markdown document. For example if you have a
directory called `images` in the same directory as your main markdown file you
can display an image like this:

```
![An example](images/example.png)
```

![An example](images/example.png)

# Supported Filetypes

You can use the following filetypes:

* jpeg
* jpg
* png
* webp
* tif
* tiff

---

# Plugins Used

* [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image)
* [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp)
* [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp)
* [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images)
