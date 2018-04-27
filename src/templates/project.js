import graphql from 'graphql';
import Template from '../components/ProjectPage';

export default Template;

export const query = graphql`
  query ExperimentQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        keywords
        image {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      fields {
        tags
        metadata {
          description
          title
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
