import graphql from 'graphql'
import Template from '../components/TagPage'

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
            slug
            tags
          }
          frontmatter {
            title
            keywords
            date
          }
        }
      }
    }
  }
`
