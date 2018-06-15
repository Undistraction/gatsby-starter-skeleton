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
            fields {
              slug
              tags
              category
            }
          }
        }
      }
    }
  `)
