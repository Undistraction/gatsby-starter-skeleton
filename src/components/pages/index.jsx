import graphql from 'graphql'
import HomePage from '../HomePage'

export default HomePage

// Note: Ideally this would be in its own file and imported from a Page
// Container, but Gatsby preprocesses the pages looking for a graphql call.
// Moving it anywhere else results in an error.
export const query = graphql`
  query HomePageQuery {
    markdownRemark(frontmatter: { slug: { eq: "home" } }) {
      htmlAst
      frontmatter {
        image {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        metadata {
          home {
            title
            description
            keywords
          }
        }
        structure {
          pages {
            home {
              title
            }
          }
        }
      }
    }
  }
`
