import { graphql } from 'gatsby'
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
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { type: { eq: "article" } } }
      skip: $startIndex
      limit: $thisGroupSize
    ) {
      edges {
        node {
          excerpt(pruneLength: 170)
          wordCount {
            words
          }
          timeToRead
          frontmatter {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            category
            author
            date(formatString: $dateFormat)
            tags
            title
            slug
          }
        }
      }
    }
  }
`
