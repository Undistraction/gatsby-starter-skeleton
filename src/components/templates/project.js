import graphql from 'graphql'
import Template from '../ProjectPage'

export default Template

export const query = graphql`
  query ProjectQuery($slug: String, $dateFormat: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
      filter: { fields: { type: { eq: "article" } } }
    ) {
      totalCount
      edges {
        node {
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
