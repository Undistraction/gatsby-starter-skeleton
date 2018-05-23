module.exports = images => ({
  resolve: `gatsby-remark-images`,
  options: {
    // The maximum width of images on the site.
    maxWidth: images.maxWidth,
    // Set the quality of the processed images
    quality: images.quality,
    linkImagesToOriginal: false,
  },
})
