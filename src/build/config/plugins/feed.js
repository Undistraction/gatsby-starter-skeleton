module.exports = () => ({
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
      {
        site {
          siteMetadata {
            data {
              title
              description
              url
            }
          }
        }
      }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allMarkdownRemark } }) =>
          allMarkdownRemark.edges.map(edge =>
            Object.assign({}, edge.node.frontmatter, {
              description: edge.node.excerpt,
              url: site.siteMetadata.data.url + edge.node.fields.slug,
              guid: site.siteMetadata.data.url + edge.node.fields.slug,
              custom_elements: [{ 'content:encoded': edge.node.html }],
              date: edge.node.frontmatter.date,
            })
          ),
        query: `
          {
            allMarkdownRemark(
              limit: 1000,
              sort: { order: DESC, fields: [fields___date] },
              filter: { fields: { type: { eq: "article" } } }
            ) {
              edges {
                node {
                  excerpt
                  html
                  fields { 
                    slug 
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }
          }
        `,
        output: `/rss.xml`,
      },
    ],
  },
})
