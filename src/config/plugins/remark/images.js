module.exports = (layout, media) => ({
  resolve: 'gatsby-remark-images',
  options: {
    // The maximum width of images on the site.
    maxWidth: layout.maxWidth * 2,
    // Set the quality of the processed images
    quality: media.images.quality,
    linkImagesToOriginal: false,
  },
});
