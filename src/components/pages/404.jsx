import { graphql } from 'gatsby'
import FourOhFourPage from '../FourOhFourPage'

export default FourOhFourPage

// Note: Ideally this would be in its own file and imported from a Page
// Container, but Gatsby preprocesses the pages looking for a graphql call.
// Moving it anywhere else results in an error.
export const query = graphql`
  query FourOhFourPageQuery {
    site {
      siteMetadata {
        structure {
          pages {
            notFound {
              title
            }
          }
        }
      }
    }
  }
`
