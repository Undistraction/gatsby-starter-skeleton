module.exports = (graphql, path) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { slug: { regex: "/${path}/./" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              codePath
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
