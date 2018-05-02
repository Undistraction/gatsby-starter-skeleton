import graphql from 'graphql'

import Template from '../ProjectsPage'

export default Template

export const query = graphql`
  query ProjectsQuery($dateFormat: String) {
    site {
      siteMetadata {
        metadata {
          projects {
            title
            description
            keywords
          }
        }
        structure {
          resources {
            projects {
              title
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/projects/./" } } }
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
