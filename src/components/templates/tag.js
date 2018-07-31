import { graphql } from 'gatsby'
import Template from '../TagPage'

export default Template

export const query = graphql`
  query TagQuery($tag: String, $dateFormat: String) {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { tags: { in: [$tag] } } }
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
          tag {
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
