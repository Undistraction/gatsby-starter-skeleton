import { graphql } from 'gatsby'
import Template from '../CategoryPage'

export default Template

export const query = graphql`
  query CategoryQuery($category: String, $dateFormat: String) {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 170)
          wordCount {
            words
          }
          timeToRead
          wordCount {
            words
          }
          timeToRead
          fields {
            title
            tags
            date(formatString: $dateFormat)
            category
            author
            slug
            metadata {
              description
              title
              keywords
            }
          }
          frontmatter {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        metadata {
          category {
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
  }
`
