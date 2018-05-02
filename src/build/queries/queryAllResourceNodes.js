const { toRegExpAlternatives } = require(`../utils/regexp`)

module.exports = (graphql, directories) =>
  graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/${toRegExpAlternatives(
          directories
        )}/./" } } }
      ) {
        edges {
          node {
            fields {
              slug
              tags
            }
          }
        }
      }
    }
  `)
