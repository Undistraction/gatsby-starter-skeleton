module.exports = downloadsDirectory => ({
  resolve: 'gatsby-remark-copy-linked-files',
  options: {
    destinationDir: downloadsDirectory,
  },
});
