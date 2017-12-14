module.exports = (layout, media) => ({
  resolve: 'gatsby-remark-images',
  options: {
    // The maximum width of images on the site.
    maxWidth: layout.maxWidth,
    // Set the quality of the processed images
    quality: media.images.quality,
  },
});
