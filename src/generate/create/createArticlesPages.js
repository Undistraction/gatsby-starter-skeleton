const { map, compose } = require('ramda')
const path = require('path')
const reporter = require('../reporter')
const { prefixWithFSlash } = require('../utils/file')

const { ARTICLE_TEMPLATE_PATH } = require('../const/templatePaths')
const queryAllArticleNodes = require('../queries/queryAllArticleNodes')

const markdownNodes = data => data.allMarkdownRemark.edges

const createArticlePage = (slug, createPage) =>
  new Promise((resolve, reject) => {
    try {
      createPage({
        path: prefixWithFSlash(slug),
        component: path.resolve(ARTICLE_TEMPLATE_PATH),
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

const createArticlesPages = (graphql, createPage, articlesPath) =>
  queryAllArticleNodes(graphql, articlesPath)
    .then(result =>
      compose(
        Promise.all,
        map(({ node }) => createArticlePage(node.fields.slug, createPage))
      )(markdownNodes(result.data))
    )
    .catch(error => {
      throw new Error(`Articles Pages Couldn't Be Created: ${error}`)
    })

module.exports = createArticlesPages
