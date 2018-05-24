---
title: "Configuration"
date: "2018-05-30"
slug: "configuration"
description: Configuring the site
keywords: settings, config
category: Configuration
author: Pedr Browne
image: ./images/main.jpg
---

There are several layers of configuration for the site and you can go as deep as
you want or need.

# site-config.xml

Much of the configuration for the site can be defined in `site-config.xml`. This
is not a standard Gatsby configuration file and is specific to this starter. The
contents of the file are well commented. By changing the content of this file
you can customise many aspects of the site. The data defined in this file is
used to:

* construct pages
* display data
* supply data to plugins
* configure and enable / disable features

# Plugins

Gatsby uses a plugin architecture to add additional functionality. This starter
uses a large number of plugins which are configured via `gatsby-config.js`. All
plugin configuration is found there, or in individual files for each plugin
within the `/config` directory. Many of the plugins draw configuration options
from `site-config.xml`, however you can also edit the plugin configuration
directly to further customise the behaviour and features offered by the plugins.

# Styling

This site uses [CSSAPI](https://github.com/Undistraction/cssapi) to define
styles used throughout the site. This gives you a single, centralised location
to make changes to color, fonts and spacing amongst other things. Style
configuration can be found in `src/components/styles/api.js`.

# Components

The site uses
[Styled Components](https://github.com/styled-components/styled-components)
throughout. Pages and the components within them are each defined as a separate
component found in `src/components`. Components used in more than one location
can be found in `src/components/shared`. Note that elements generated from
markdown are also transformed into components. This mapping of generic HTML
elements to components happens in `src/components/shared/MarkdownContent.jsx`.
