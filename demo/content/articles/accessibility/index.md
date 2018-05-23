---
title: "Accessibility"
date: "2018-01-01"
slug: "accessibility"
description: Ensuring the site is accessible
keywords: accessibility, a11y
category: Feature
author: Pedr Browne
image: ./images/main.jpg
---

Given the limitations inherent with content derived from markdown, I've tried to
make this starter as accessible as possible. The site includes a plugin to flag
accessibility errors in the D.O.M using
[accessibilityjs](https://github.com/github/accessibilityjs). This is enabled by
default in development and will be disabled in all other environments.

# Issues

You can add alt text to images defined in Markdown, but at present Gatsby offers
no means of associating alt text with images defined in frontmatter. See the
issue [here](https://github.com/gatsbyjs/gatsby/issues/2910)

---

# Plugins Used

* [gatsby-plugin-accessibilityjs](https://www.gatsbyjs.org/packages/gatsby-plugin-accessibilityjs)
