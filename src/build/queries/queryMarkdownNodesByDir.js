const { toRegExpAlternatives } = require(`../utils/regexp`)

module.exports = (graphql, directories) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [fields___date], order: DESC }
        filter: { fields: { slug: { regex: "/${toRegExpAlternatives(
          directories
        )}/./" } } }
      ) {
        edges {
          node {
            frontmatter {
              category
            }
            fields {
              slug
              tags
            }
          }
        }
      }
    }
  `)
