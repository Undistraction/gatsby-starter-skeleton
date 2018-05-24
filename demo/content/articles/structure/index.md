---
title: "Structure"
date: "2018-05-29"
slug: "structure"
description: Structure of the site.
keywords: site, website, blog, pages
category: Configuration
author: Pedr Browne
image: ./images/main.jpg
---

All content for the site lives in `src/content`. The starter will generate a
site comprising of three main sets of pages.

# Generic Pages

Generic pages can be found in the `src/content/pages`. Each consists of a
markdown document and a directory of images.

* Home Page
* About Page
* 404

You can view the 404 page when running your site in development by navigating to
`localhost:8000/404`. Both the Home Page and the About Page must include an
image at least 2400px wide.

# Resources

There are two kinds of resource pages: Articles and Projects.

## Articles

Articles can be found in `src/content/articles`. Like Pages they consist of a
markdown document and a directory for images. They must include a set of
frontmatter data used in building the site. Articles are displayed in
chronological order, starting with the most recent. They should be categorised
and tagged. The title for the article should be defined in the frontmatter, not
in the markdown. You can change the name of the resource from
`src/site-config.js`, and this will update across the site, including links and
URLs. For example you could change 'Articles' to 'Posts' or 'Writings'. All
Articles must include an image that is at least 2400px wide.

## Projects

`Projects are structured the same way as Articles, though they don't supportz`
categorisation. If you don't want to include projects pages it is easy to remove
them from the site. Like Articles you can change the name of the resource from
`src/site-config.js` and like Articles, Projects must include an image.

# Tags and Categories

## Tags

Both Articles and Projects allow you to define keywords in their frontmatter. In
both cases they will be used in the page metadata, however in the case of
Articles the article they will also be used to associate tags with that Article.
These tags become links that can be used to view all Articles that have been
tagged with a given tag. You can add as many tags as you want to an Article or
Project.

## Categories

Articles also allow you to define a single Category per article. These are much
higher-level than tags. Like tags, they will become links which can be used to
view all Articles that fall within a given category.
