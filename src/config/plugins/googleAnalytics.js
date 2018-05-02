module.exports = seo => ({
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    // Get tracking id for property from your Google Analytics account.
    trackingId: seo.googleTrackingID,
  },
})
