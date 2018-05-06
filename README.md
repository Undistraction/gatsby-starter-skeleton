# Gatsby Skeleton Starter

[![NPM
Version](https://img.shields.io/npm/v/gatsby-skeleton-starter.svg)](https://www.npmjs.com/package/styled-mq)
[![Build
Status](https://img.shields.io/travis/Undistraction/gatsby-skeleton-starter.svg)](https://travis-ci.org/Undistraction/styled-mq)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg)](./LICENSE.md)

The is a static site built with [Gatsby](https://www.gatsbyjs.org/). It would
particularly suit a developer who wants to publish articles and share code or
anyone wanting a clean, simple simple blog. It has a minimal and responsive
design with an emphasis on typography and it aims to be quick and easy to use
straight out of the box while offering a powerful set of options for
customisation.

You can see a demo version which also introduces you to the site's features
[here](https://undistraction.github.io/gatsby-skeleton-starter/articles).

## Quickstart

To build a new Gatsby project using this as your starter:

```bash
gatsby new project https://github.com/undistraction/gatsby-skeleton-starter
```

### Configuration

Inside `src` is a `config.js` file. This is where you can set up much of the
site by updating the fields.

## Code

### JavaScript

Javascript is transpiled using [Babel](https://babeljs.io/). The `.babelrc` file
in the project root started as a copy of the file included with Gatsby, which
will now use this file instead.

The fabric of the site is split into:

* Components found in `src/components`.
* Layouts found in `src/layouts`.
* Pages found in `src/pages`.

## Articles

Articles are built using the directories in the `articles` directory. Each
directory should contain a markdown file and a separate `images` directory. The
markdown file should define frontmatter containing at minimum:

* `title` The title of the article (which will also be used for the `title`
  field in the page head.
* `date` The data of the article in the form YYYY-MM-DD.

The following fields can also be used:

* `slug` The last fragment used for the page slug.
* `description` The description metadata for the page.
* `keywords` The keywords metadata for the page.

## Dynamic Data

Dynamic data is pulled into the application using GraphQL queries in the pages
or layouts from where it is passed into the components.

## Site Data

Site metadata, for example company name or start date for a copyright statement
is defined in the `metadata` object within `gatsby-config.js`, pulled into the
index layout an passed into the components.

## Metadata

Metadata is drawn from two locations.

* For pages within the `/pages` dir pull in their metadata from the file
  `metadata.yaml`, using a unique key.
* Articles define their metadata in their frontmatter using `title`,
  `description` and `keywords` fields.

## Favicons

Favicons are generated automatically at all configured sizes using the image
file `src/images/favicons/favicon.png`.

## Linting

Linting is via ESLint and Prettier, configured in `.eslintrc` and `.prettierrc`
respectively.

## Google Analytics

Google analytics is integrated using a Gatsby plugin and configured with a
tracking id in production via an environmental variable. The tracking ID can be
found on your `analytics.google.com` account for relevant property, and will
take the form: `UA-XXXXXXXX-X`.

## Placeholder images

Via placeholder.com

```
http://via.placeholder.com/2400x1400.jpg?text=Home+2400+x+1400
```

## Maintainance

### General

Install all NPM modules:

```bash
yarn
```

Run the site on the development server:

```bash
yarn run dev
```

Open development server in default browser (`http://localhost:8000`):

```bash
yarn run open
```

Build a production version of the site to `/public`:

```bash
yarn run build
```

Run the built version of the site locally: Note: you will get a 404 if you
haven't already built the site.

```bash
yarn run serve
```

### Demo

The root project contains very minimal content - just enough to get someone
started. However the demo version uses a more comprehensive set of content, so a
separate version must be built and deployed to Github Pages.

This process consists of the following steps:

1. A new Gatsby project is created in `./demo/project`, using this project's
   master branch from Github as its starter.

2. The content for the demo is swapped in for the default content, using the
   contents of the `./demo/content` directory.

3. A `pathPrefix` config option is injected into `gatsby-config.js`

4. The demo version is built to `./demo/project/public`

5. The demo version is deployed to Github pages.

There are granular commands for each step:

* `demo:import`
* `demo:build`
* `demo:deploy`
* `demo:open`

Or the entire process can be run using:

```bash
yarn demo
```

There are also convenience commands for testing the demo locally:

* `demo:dev`
* `demo:serve`
