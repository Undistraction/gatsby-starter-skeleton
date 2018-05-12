import graphql from 'graphql'
import Template from '../TagPage'

export default Template

export const query = graphql`
  query TagQuery($tag: String) {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
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
            slug
            tags
            type
          }
          frontmatter {
            author
            category
            date
            image {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
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
