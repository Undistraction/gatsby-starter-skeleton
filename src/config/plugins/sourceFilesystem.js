module.exports = dir => ({
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `src`,
    path: `${process.cwd()}/src/content/${dir}`,
  },
})
