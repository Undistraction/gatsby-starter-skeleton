module.exports = graphql =>
  graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/articles/./" } } }
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
  `);
