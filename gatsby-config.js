const validatedConfig = require('./src/config/validatedConfig');

const { meta, seo, structure, media, layout } = validatedConfig();

const trackingConfig = trackingID => ({
  resolve: 'gatsby-plugin-google-analytics',
  options: {
    // Get tracking id for property from your Google Analytics account.
    trackingId: trackingID,
  },
});

const codeDirPath = `${__dirname}/src/content/code`;

const plugins = [
  // Use styled-components for CSS-in-JS
  'gatsby-plugin-styled-components',
  // Add react-helmet for changing tags in the page head
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-twitter',
  {
    resolve: 'gatsby-plugin-feed',
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              });
            });
          },
          query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: { fields: { slug: { regex: "/articles/./" } } }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
          output: '/rss.xml',
        },
      ],
    },
  },
  // Add the articles dir to src path
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/content/articles`,
    },
  },
  'gatsby-plugin-sharp',
  // Add the pages dir to src path
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/content/pages`,
    },
  },
  {
    resolve: 'gatsby-plugin-favicon',
    options: {
      logo: './src/images/favicon/favicon.png',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: true,
        yandex: false,
        windows: false,
      },
    },
  },
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        // Define which files can be used as downloads and where to put them
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: structure.downloadsDirectory,
          },
        },
        'gatsby-remark-responsive-iframe',
        {
          resolve: 'gatsby-remark-images',
          options: {
            // The maximum width of images on the site.
            maxWidth: layout.maxWidth,
            // Set the quality of the processed images
            quality: media.images.quality,
          },
        },
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            // Class prefix for <pre> tags containing syntax highlighting;
            // defaults to 'language-' (eg <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (eg for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: 'language-',
          },
        },
        {
          resolve: 'gatsby-remark-embed-snippet',
          options: {
            // Class prefix for <pre> tags containing syntax highlighting;
            // defaults to 'language-' (eg <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (eg for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: 'language-',

            // Example code links are relative to this dir.
            // eg examples/path/to/file.js
            directory: codeDirPath,
          },
        },
        {
          resolve: 'gatsby-remark-code-repls',
          options: {
            // Optional default link text.
            // Defaults to "REPL".
            // eg <a href="...">Click here</a>
            defaultText: 'Open in REPL',

            // // Optional runtime dependencies to load from NPM.
            // // This option only applies to REPLs that support it (eg CodeSandbox).
            // // eg ['react', 'react-dom'] or ['react@15', 'react-dom@15']
            // dependencies: ['react', 'react-dom'],

            // Example code links are relative to this dir.
            // eg examples/path/to/file.js
            directory: codeDirPath,

            // Optional externals to load from a CDN.
            // This option only applies to REPLs that support it (eg Codepen).
            // eg '//unpkg.com/react/umd/react.development.js'
            // externals: [],

            // Optional HTML contents to inject into REPL.
            // Defaults to `<div id="root"></div>`.
            // This option only applies to REPLs that support it (eg Codepen, CodeSandbox).
            // eg '<div id="root"></div>'
            // html: '<div class="repl"></div>',

            // Optional path to a custom redirect template.
            // The redirect page is only shown briefly,
            // But you can use this setting to override its CSS styling.
            // redirectTemplate: `${__dirname}/src/redirect-template.js`),
          },
        },
      ],
    },
  },
];

// Add support for Google analytics if a tracking code was defined
if (seo.googleTrackingID) {
  plugins.push(trackingConfig(seo.googleTrackingID));
}

module.exports = {
  siteMetadata: {
    owner: meta.owner,
    // This will be used in the site title
    title: meta.title,
    // This will be used in the site copyright
    startYear: meta.startYear,
    description: 'A description of your site',
    siteUrl: 'http://your-site-here.com',
  },
  plugins,
};
