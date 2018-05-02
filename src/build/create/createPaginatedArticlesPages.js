const path = require('path')
const { createPagination, pagePath } = require('../utils/pagination')
const { inc, compose, splitEvery } = require('ramda')
const { mapIndexed } = require('ramda-adjunct')
const { PAGINATED_ARTICLES_TEMPLATE_PATH } = require('../const/templatePaths')
const queryAllResourceNodes = require('../queries/queryAllResourceNodes')
const reporter = require('../reporter')

const markdownNodes = data => data.allMarkdownRemark.edges

const createPaginatedArticlesPage = (
  createPage,
  perPage,
  articlesPath,
  itemsCount
) => (group, groupIndex, allGroups) => {
  const articlePagePath = pagePath(articlesPath)
  const pagination = createPagination(
    articlePagePath,
    itemsCount,
    perPage,
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
  perPage,
  articlesDir,
  articlesPath
) =>
  queryAllResourceNodes(graphql, articlesDir)
    .then(result => {
      const edges = markdownNodes(result.data)
      const groupedPages = splitEvery(perPage, edges)
      return compose(
        Promise.all,
        mapIndexed(
          createPaginatedArticlesPage(
            createPage,
            perPage,
            articlesPath,
            edges.length
          )
        )(groupedPages)
      )
    })
    .catch(error => {
      throw new Error(`Articles Pages Couldn't Be Created: ${error.toString()}`)
    })

module.exports = createPaginatedArticlesPages
