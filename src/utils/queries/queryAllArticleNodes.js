module.exports = graphql =>
  graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/articles/./" } } }
      ) {
        edges {
          node {
            frontmatter {
              keywords
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
