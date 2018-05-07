module.exports = host => ({
  resolve: `gatsby-plugin-robots-txt`,
  options: {
    host,
    sitemap: `${host}/sitemap.xml`,
    policy: [{ userAgent: `*`, allow: `/` }],
  },
})
