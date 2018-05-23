---
title: "RSS"
date: "2016-07-01"
slug: "rss"
description: Automatic generation of RSS Feed
keywords: rss, share, social
category: Social
author: Pedr Browne
image: ./images/main.jpg
---

Whenever you build your site, an RSS feed is generated to `/rss.xml` with entries for every Article page. It uses the following fields form `site-config.xml`'s `data` field:

- title
- description
- url

---

# Plugins Used

* [gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed)
