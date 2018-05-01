module.exports = images => ({
  resolve: 'gatsby-remark-images',
  options: {
    // The maximum width of images on the site.
    maxWidth: images.maxWidth * 2,
    // Set the quality of the processed images
    quality: images.quality,
    linkImagesToOriginal: false,
  },
})
