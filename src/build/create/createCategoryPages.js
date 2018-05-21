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

const markdownNodes = data => data.allMarkdownRemark.edges

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
    .then(result =>
      pipe(
        markdownNodes,
        collectUniqueCategories,
        categories =>
          map(category => {
            createCategoryPage(category, categories, createPage)
          }, categories),
        Promise.all
      )(result.data)
    )
    .catch(throwBuildError(`Category`))

module.exports = createCategoryPages
