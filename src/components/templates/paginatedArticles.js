import graphql from 'graphql'

import Template from '../PaginatedArticlesPage'

export default Template

export const query = graphql`
  query PaginatedArticlesQuery(
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
      filter: { fields: { slug: { regex: "/articles/./" } } }
      skip: $startIndex
      limit: $thisGroupSize
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: $dateFormat)
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
            slug
          }
          excerpt
        }
      }
    }
  }
`
