import graphql from 'graphql'
import Template from '../ProjectPage'

export default Template

export const query = graphql`
  query ProjectQuery($slug: String, $dateFormat: String) {
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
            date(formatString: $dateFormat)
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
