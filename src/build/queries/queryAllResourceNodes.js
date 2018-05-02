const { ensureArray } = require('ramda-adjunct')
const { compose, join } = require('ramda')
const validatedConfig = require('../../config/validatedConfig')

const toRegExpAlternatives = compose(join('|'), ensureArray)

module.exports = (graphql, directories) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { slug: { regex: "${toRegExpAlternatives(
          directories
        )}/./" } } }
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
