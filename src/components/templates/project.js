import { graphql } from 'gatsby'
import Template from '../ProjectPage'

export default Template

export const query = graphql`
  query ProjectQuery(
    $slug: String
    $previousSlug: String
    $nextSlug: String
    $dateFormat: String
  ) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
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
        tags
        metadata {
          description
          title
          keywords
        }
      }
    }
    previous: markdownRemark(
      fields: { type: { eq: "project" }, slug: { eq: $previousSlug } }
    ) {
      id
      fields {
        title
        slug
      }
    }
    next: markdownRemark(
      fields: { type: { eq: "project" }, slug: { eq: $nextSlug } }
    ) {
      fields {
        title
        slug
      }
    }
  }
`
