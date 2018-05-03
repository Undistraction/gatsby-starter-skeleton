import graphql from 'graphql'
import Template from '../ArticlePage'

export default Template

export const query = graphql`
  query ArticleQuery(
    $slug: String
    $previousSlug: String
    $nextSlug: String
    $dateFormat: String
  ) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
        tags
        metadata {
          description
          title
          keywords
        }
      }
    }
    previous: markdownRemark(
      fields: { type: { eq: "article" }, slug: { eq: $previousSlug } }
    ) {
      id
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    next: markdownRemark(
      fields: { type: { eq: "article" }, slug: { eq: $nextSlug } }
    ) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
