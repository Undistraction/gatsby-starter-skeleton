const { mapIndexed, inRange } = require(`ramda-adjunct`)
const { view, lensIndex, lensPath, compose, pluck } = require(`ramda`)
const path = require(`path`)
const reporter = require(`../reporter`)

const { ARTICLE_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryAllResourceNodes = require(`../queries/queryAllResourceNodes`)

const markdownNodes = data => pluck(`node`, data.allMarkdownRemark.edges)
const lFieldsSlug = lensPath([`fields`, `slug`])

const slugOfItemAtIndex = (idx, nodes) => {
  if (!inRange(0, nodes.length, idx)) return null
  return view(compose(lensIndex(idx), lFieldsSlug))(nodes)
}

const createArticlePage = (slug, idx, nodes, createPage) =>
  new Promise((resolve, reject) => {
    try {
      createPage({
        path: slug,
        component: path.resolve(ARTICLE_TEMPLATE_PATH),
        context: {
          slug,
          nextSlug: slugOfItemAtIndex(idx + 1, nodes),
          previousSlug: slugOfItemAtIndex(idx - 1, nodes),
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
    .then(result => {
      const nodes = markdownNodes(result.data)
      return compose(
        Promise.all,
        mapIndexed((node, idx) =>
          createArticlePage(node.fields.slug, idx, nodes, createPage)
        )
      )(nodes)
    })
    .catch(error => {
      throw new Error(`Articles Pages Couldn't Be Created: ${error}`)
    })

module.exports = createArticlePages
