const { resolve } = require(`path`)
const { throwBuildError } = require(`../utils/errors`)
const { reportCreatePaginatedPageSuccess } = require(`../utils/reporter`)
const { indexedPagePath } = require(`../utils/url`)
const { createPagination } = require(`../utils/pagination`)
const { markdownEdges } = require(`../utils/resources`)
const { compose, splitEvery } = require(`ramda`)
const { mapIndexed } = require(`ramda-adjunct`)
const { ARTICLES_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryMarkdownNodesByDir = require(`../queries/queryMarkdownNodesByDir`)

const createArticlesPage = (createPage, groupSize, articlesPath, total) => (
  group,
  groupIndex,
  allGroups
) => {
  const articlePagePath = indexedPagePath(articlesPath)
  const pagination = createPagination(
    articlePagePath,
    total,
    groupSize,
    group,
    groupIndex,
    allGroups
  )
  const pagePath = articlePagePath(groupIndex)

  const page = createPage({
    path: pagePath,
    component: resolve(ARTICLES_TEMPLATE_PATH),
    context: {
      ...pagination,
    },
  })
  reportCreatePaginatedPageSuccess(
    `Articles`,
    pagePath,
    groupIndex,
    allGroups.length
  )
  return page
}

const createArticlesPages = (
  graphql,
  createPage,
  groupSize,
  articlesDir,
  articlesPath
) =>
  queryMarkdownNodesByDir(graphql, articlesDir)
    .then(result => {
      const edges = markdownEdges(result.data)
      if (!edges) return null
      const groupedPages = splitEvery(groupSize, edges)
      return compose(
        Promise.all,
        mapIndexed(
          createArticlesPage(createPage, groupSize, articlesPath, edges.length)
        )(groupedPages)
      )
    })
    .catch(throwBuildError(`Articles`))

module.exports = createArticlesPages
