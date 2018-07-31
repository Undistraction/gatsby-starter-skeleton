import { graphql } from 'gatsby'
import AboutPage from '../AboutPage'

export default AboutPage

// Note: Ideally this would be in its own file and imported from a Page
// Container, but Gatsby preprocesses the pages looking for a graphql call.
// Moving it anywhere else results in an error.
export const query = graphql`
  query AboutPageQuery {
    markdownRemark(frontmatter: { slug: { eq: "about" } }) {
      htmlAst
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
    site {
      siteMetadata {
        metadata {
          about {
            title
            description
            keywords
          }
        }
        structure {
          pages {
            about {
              title
            }
          }
        }
      }
    }
  }
`
