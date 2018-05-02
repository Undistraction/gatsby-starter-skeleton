import graphql from 'graphql'

import Template from '../PaginatedArticlesPage'

export default Template

export const query = graphql`
  query PaginatedArticlesQuery($firstItemIndex: Int, $perPage: Int) {
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
      skip: $firstItemIndex
      limit: $perPage
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
