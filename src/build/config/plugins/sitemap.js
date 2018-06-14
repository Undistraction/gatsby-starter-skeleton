module.exports = () => ({
  resolve: `gatsby-plugin-sitemap`,
  options: {
    output: `/sitemap.xml`,
    query: `
      {
        site {
          siteMetadata {
            data {
              url
            }
          }
        }
        allSitePage {
          edges {
            node {
              path
            }
          }
        }
    }`,
    exclude: [`/redirect-to-codepen/*`],
    serialize: ({ site, allSitePage }) =>
      allSitePage.edges.map(edge => ({
        url: site.siteMetadata.data.url + edge.node.path,
        changefreq: `daily`,
        priority: 0.7,
      })),
  },
})
