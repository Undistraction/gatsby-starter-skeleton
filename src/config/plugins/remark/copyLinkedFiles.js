module.exports = downloadsDir => ({
  resolve: `gatsby-remark-copy-linked-files`,
  options: {
    destinationDir: downloadsDir,
  },
})
