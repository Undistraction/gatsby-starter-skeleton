const validatedConfig = require('../../config/validatedConfig')

module.exports = (graphql, path) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { slug: { regex: "${path}/./" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "${validatedConfig().data.dateFormat}")
              keywords
              image {
                childImageSharp {
                  sizes(maxWidth: 1000) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
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
