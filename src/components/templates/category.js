import graphql from 'graphql'
import Template from '../CategoryPage'

export default Template

export const query = graphql`
  query CategoryQuery($category: String) {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
