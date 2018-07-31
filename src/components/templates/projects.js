import { graphql } from 'gatsby'
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
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: $dateFormat)
            keywords
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
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
