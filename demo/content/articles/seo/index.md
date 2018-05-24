---
title: "SEO"
date: "2017-09-27"
slug: "seo"
description: Optimising Site For Search Engines.
keywords: seo, google, search
category: SEO
author: Pedr Browne
image: ./images/main.jpg
---

# Page Metadata

Every page will include the following metadata tags:

```html
<title></title>
<meta name="description" content=""/>
<meta name="keywords" content=""/>
```

## Non-Generated Pages

For pages that are not generated using a template, i.e.. all pages in the
`pages/` directory, metadata is defined in `site-config.js` in its `metadata`
fields.

## Generated Pages

For pages that are generated, i.e. all pages in the `templates/` directory,
metadata is defined in the index.md file's frontmatter for the page.

## Hybrid Pages

Tags and categories pages use a combination of text defined in `site-config.js`
and the name of the tag or category.

# Robots.txt

A `robots.txt` file is generated automatically for your site with the following
configuration:

```text
Sitemap: `http://example.com/sitemap.xml`,
User-agent: *
Allow: /
```

# Google Analytics

If you add a tracking code to the `seo.googleTrackingID` field of
`site-config.js`, Google's tracking code will be included in your pages.

# Sitemap

A sitemap is automatically generated to `/sitemap.xml` for your site every time
it is built, meaning it will always be up-to-date. The sitemap uses the
`site.url` field in `site-config.js`.

---

# Plugins used

* [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet)
* [gatsby-plugin-google-analytics)
* [gatsby-plugin-sitemap]](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics)
* [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap)
* [plugin-robots-txt](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt)
