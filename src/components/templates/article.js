import { graphql } from 'gatsby'
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
      htmlAst
      wordCount {
        words
      }
      timeToRead
      frontmatter {
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
        date(formatString: $dateFormat)
        category
        author
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
      fields {
        title
        slug
      }
    }
    next: markdownRemark(
      fields: { type: { eq: "article" }, slug: { eq: $nextSlug } }
    ) {
      fields {
        title
        slug
      }
    }
  }
`
