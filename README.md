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
yarn fun open
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

## Data

Metadata defined in the `gatsby-config.js` is loaded into the `index` layout component using GraphQL and distributed through the component layer as needed. All general site-related data should be defined here.

## Linting

Linting is via ESLint and Prettier, configured in `.eslintrc` and `.prettierrc` respectively.

## Google Analytics 

Google analytics is integrated using a Gatsby plugin and configured with a tracking id in production via an environmental variable. The tracking ID can be found on your `analytics.google.com` account for relevant property, and will take the form: `UA-XXXXXXXX-X`.

