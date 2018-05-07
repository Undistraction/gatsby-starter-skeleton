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
          fields {
            title
            slug
            tags
            type
          }
          excerpt
          frontmatter {
            keywords
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
      }
    }
  }
`
