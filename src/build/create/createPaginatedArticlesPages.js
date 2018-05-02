const path = require(`path`)
const { indexedPagePath } = require(`../utils/url`)
const { createPagination } = require(`../utils/pagination`)
const { inc, compose, splitEvery } = require(`ramda`)
const { mapIndexed } = require(`ramda-adjunct`)
const { PAGINATED_ARTICLES_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryAllResourceNodes = require(`../queries/queryAllResourceNodes`)
const reporter = require(`../reporter`)

const markdownNodes = data => data.allMarkdownRemark.edges

const createPaginatedArticlesPage = (
  createPage,
  groupSize,
  articlesPath,
  total
) => (group, groupIndex, allGroups) => {
  const articlePagePath = indexedPagePath(articlesPath)
  const pagination = createPagination(
    articlePagePath,
    total,
    groupSize,
    group,
    groupIndex,
    allGroups
  )

  const page = createPage({
    path: articlePagePath(groupIndex),
    component: path.resolve(PAGINATED_ARTICLES_TEMPLATE_PATH),
    context: {
      ...pagination,
    },
  })
  reporter.success(
    `Created Paginated Articles Page ${inc(groupIndex)} of ${allGroups.length}`
  )
  return page
}

const createPaginatedArticlesPages = (
  graphql,
  createPage,
  groupSize,
  articlesDir,
  articlesPath
) =>
  queryAllResourceNodes(graphql, articlesDir).then(result => {
    const edges = markdownNodes(result.data)
    const groupedPages = splitEvery(groupSize, edges)
    return compose(
      Promise.all,
      mapIndexed(
        createPaginatedArticlesPage(
          createPage,
          groupSize,
          articlesPath,
          edges.length
        )
      )(groupedPages)
    )
  })
// .catch(error => {
//   throw new Error(`Articles Pages Couldn't Be Created: ${error.toString()}`)
// })

module.exports = createPaginatedArticlesPages
