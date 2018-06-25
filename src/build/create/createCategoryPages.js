const path = require(`path`)
const { pipe, map } = require(`ramda`)
const { reportCreatePageSuccess } = require(`../utils/reporter`)
const { throwBuildError } = require(`../utils/errors`)
const {
  collectUniqueCategories,
  toCategorySlug,
} = require(`../utils/categories`)
const { CATEGORY_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryMarkdownNodesByDir = require(`../queries/queryMarkdownNodesByDir`)
const { markdownEdges } = require(`../utils/resources`)

const createCategoryPage = (category, categories, createPage) => {
  const slug = toCategorySlug(category)

  return new Promise((resolve, reject) => {
    try {
      createPage({
        path: slug,
        component: path.resolve(CATEGORY_TEMPLATE_PATH),
        context: {
          category,
        },
      })
    } catch (error) {
      reject(error)
    }
    reportCreatePageSuccess(`Category`, slug)
    resolve()
  })
}

const createCategoryPages = (graphql, createPage, articlesDir) =>
  queryMarkdownNodesByDir(graphql, articlesDir)
    .then(result => {
      const edges = markdownEdges(result.data)
      if (!edges) return null
      return pipe(
        collectUniqueCategories,
        categories =>
          map(category => {
            createCategoryPage(category, categories, createPage)
          }, categories),
        Promise.all
      )(edges)
    })
    .catch(throwBuildError(`Category`))

module.exports = createCategoryPages
