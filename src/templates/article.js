import graphql from 'graphql';
import Template from './ArticleTemplate';

export default Template;

export const query = graphql`
  query ArticleQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        keywords
      }
      fields {
        tags
        metadata {
          description
          title
          keywords
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/src/content/articles/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
