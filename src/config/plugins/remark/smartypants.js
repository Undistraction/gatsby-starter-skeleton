module.exports = () => ({
  resolve: `gatsby-remark-smartypants`,
  options: {
    quotes: true,
    ellipses: true,
    backticks: false,
    dashes: `oldschool`, // Two dashes for an en-dash, three for an em-dash
  },
})
