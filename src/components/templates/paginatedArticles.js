import graphql from 'graphql'
import Template from '../ArticlesPage'

export default Template

export const query = graphql`
  query ArticlesQuery(
    $startIndex: Int
    $thisGroupSize: Int
    $dateFormat: String
  ) {
    site {
      siteMetadata {
        metadata {
          articles {
            title
            description
            keywords
          }
        }
        structure {
          resources {
            articles {
              title
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "article" } } }
      skip: $startIndex
      limit: $thisGroupSize
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: $dateFormat)
            image {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            title
            slug
          }
          excerpt
        }
      }
    }
  }
`
