module.exports = (graphql, paths) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { slug: { regex: "${paths}/./" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              keywords
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)
