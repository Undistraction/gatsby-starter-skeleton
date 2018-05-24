# Gatsby Skeleton Starter

[![NPM
Version](https://img.shields.io/npm/v/gatsby-skeleton-starter.svg)](https://www.npmjs.com/package/styled-mq)
[![Build
Status](https://img.shields.io/travis/Undistraction/gatsby-skeleton-starter.svg)](https://travis-ci.org/Undistraction/styled-mq)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg)](./LICENSE.md)

This is a starter for a static site built with Gatsby. There is a demo version
that outlines the features included in this starter
[here](https://undistraction.github.io/gatsby-skeleton-starter). It is designed as a personal site for a developer or designer, with both Articles and Projects, and tagging and categorising of articles. However it would work well for anyone looking for a full-featured blog or personal site. The site is responsive and accessible.

## Quickstart

To build a new Gatsby project using this as your starter:

```bash
gatsby new project https://github.com/undistraction/gatsby-skeleton-starter
```

## Configuration

This starter uses a custom configuration which allows for a significant amount
of customisation without touching any other parts of the starter. Take a look at
`src/site-config.js` to see the available settings.

## Maintainance

## Linting

Linting is via ESLint and Prettier, configured in `.eslintrc` and `.prettierrc`
respectively.

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
started. However the demo version also acts as documentation, so a separate
version must be built and deployed to Github Pages.

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
* `demo:copy`
* `demo:build`
* `demo:deploy`
* `demo:open`

Or the entire process can be run using:

```bash
yarn demo
```

There are also convenience commands for testing the demo locally:

* `demo:dev`
* `demo:serve
