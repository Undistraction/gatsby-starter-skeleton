module.exports = {
  siteMetadata: {
    owner: 'Your Name Here',
    // This will be used in the site title
    title: 'Your Site Name Here',
    // This will be used in the site copyright
    startYear: 2017,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
