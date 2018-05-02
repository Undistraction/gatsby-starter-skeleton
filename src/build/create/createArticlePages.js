const { map, compose } = require(`ramda`)
const path = require(`path`)
const reporter = require(`../reporter`)

const { ARTICLE_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryAllResourceNodes = require(`../queries/queryAllResourceNodes`)

const markdownNodes = data => data.allMarkdownRemark.edges

const createArticlePage = (slug, createPage) =>
  new Promise((resolve, reject) => {
    try {
      createPage({
        path: slug,
        component: path.resolve(ARTICLE_TEMPLATE_PATH),
        // Slug is used to find this article in ArticleTempalte GraphQL query
        context: {
          slug,
        },
      })
    } catch (error) {
      reject(error)
    }
    reporter.success(`Created Article Page at slug '${slug}'.`)
    resolve()
  })

const createArticlePages = (graphql, createPage, articlesDir) =>
  queryAllResourceNodes(graphql, articlesDir)
    .then(result =>
      compose(
        Promise.all,
        map(({ node }) => createArticlePage(node.fields.slug, createPage))
      )(markdownNodes(result.data))
    )
    .catch(error => {
      throw new Error(`Articles Pages Couldn't Be Created: ${error}`)
    })

module.exports = createArticlePages
