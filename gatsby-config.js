module.exports = {
  siteMetadata: {
    owner: 'Your Name Here',
    // This will be used in the site title
    title: 'Your Site Name Here',
    // This will be used in the site copyright
    startYear: 2017,
  },
  plugins: [
    // Add react-helmet for changing tags in the page head
    'gatsby-plugin-react-helmet',
    // Add support for Google analytics
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // Get tracking id for property from your Google Analytics account.
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
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
    // Add the pages dir to src path
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/content/pages`,
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
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2400,
              // Set the quality of the processed images
              quality: 70,
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
        ],
      },
    },
  ],
};
