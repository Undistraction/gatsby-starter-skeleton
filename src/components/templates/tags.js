import graphql from 'graphql'

import Template from '../TagsPage'

export default Template

export const query = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        metadata {
          tags {
            title
            description
            keywords
          }
        }
      }
    }
  }
`
