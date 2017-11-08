# README

The site is a static site built with [Gatsby](https://www.gatsbyjs.org/). 

## Quickstart

Install all NPM modules:

```
yarn
```

Run the site in the development server: 
```
yarn run dev
```

Open development server in default browser:
```
yarn run open
```

Build a production version of the site to `/public`:
```
gatsby build
```

Deploy to staging:
```
yarn run deploy-staging
```

Deploy to production:
```
yarn run deploy-production
```

## Code

### Environmental Variables

Add environmental vars to the relevant `.env` file and access using: `process.env.EXAMPLE_ENV`.

### JavaScript

Javascript is transpiled using [Babel](https://babeljs.io/). The `.babelrc` file in the project root started as a copy of the file included with Gatsby, which will now use this file instead.

The fabric of the site is split into:

  - Components found in `src/components`.
  - Layouts found in `src/layouts`.
  - Pages found in `src/pages`.

## Articles

Articles are built using the directories in the `articles` directory. Each directory should contain a markdown file and a separate `images` directory. The markdown file should define frontmatter containing at minimum:

- `title` The title of the article (which will also be used for the `title` field in the page head.
- `date` The data of the article in the form YYYY-MM-DD.

The following fields can also be used:

- `slug` The last fragment used for the page slug.
- `description` The description metadata for the page.
- `keywords` The keywords metadata for the page.


## Dynamic Data

Dynamic data is pulled into the application using GraphQL queries in the pages or layouts from where it is passed into the components.

## Site Data

Site metadata, for example company name or start date for a copyright statement is defined in the `metadata` object within `gatsby-config.js`,  pulled into the index layout an passed into the components.

## Metadata

Metadata is drawn from two locations.

- For pages within the  `/pages` dir pull in their metadata from the file `metadata.yaml`, using a unique key.
- Articles define their metadata in their frontmatter using `title`, `description` and `keywords` fields. 

## Favicons

Favicons are generated automatically at all configured sizes using the image file `src/images/favicons/favicon.png`.

## Linting

Linting is via ESLint and Prettier, configured in `.eslintrc` and `.prettierrc` respectively.

## Google Analytics 

Google analytics is integrated using a Gatsby plugin and configured with a tracking id in production via an environmental variable. The tracking ID can be found on your `analytics.google.com` account for relevant property, and will take the form: `UA-XXXXXXXX-X`.


## Placeholder images

Via placeholder.com

```
http://via.placeholder.com/2400x1400.jpg?text=Home+2400+x+1400
```

## Thanks

Skull By Tina Rataj-Berard (The Noun Project) [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons