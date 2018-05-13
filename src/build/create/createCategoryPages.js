const path = require(`path`)
const { pipe, map } = require(`ramda`)
const { reportCreatePageSuccess } = require(`../utils/reporter`)
const { throwBuildError } = require(`../utils/errors`)
const {
  collectUniqueCategories,
  toCategorySlug,
} = require(`../utils/categories`)
const { TAG_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryAllResourceNodes = require(`../queries/queryAllResourceNodes`)

const markdownNodes = data => data.allMarkdownRemark.edges

const createCategoryPage = (category, categories, createPage) => {
  const slug = toCategorySlug(category)

  return new Promise((resolve, reject) => {
    try {
      createPage({
        path: slug,
        component: path.resolve(TAG_TEMPLATE_PATH),
        context: {
          tag: category,
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
  queryAllResourceNodes(graphql, articlesDir)
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
