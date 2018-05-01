import graphql from 'graphql'

import Template from '../ProjectsPage'

export default Template

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        metadata {
          projects {
            title
            description
            keywords
          }
        }
      }
    }
  }
`
