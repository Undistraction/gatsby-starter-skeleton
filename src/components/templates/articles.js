import graphql from 'graphql'

import Template from '../ArticlesPage'

export default Template

export const query = graphql`
  query ArticlesQuery {
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
  }
`
