const path = require(`path`)
const { pipe, map } = require(`ramda`)
const { reportCreatePageSuccess } = require(`../utils/reporter`)
const { throwBuildError } = require(`../utils/errors`)
const { collectUniqueTags, toTagSlug } = require(`../utils/tags`)
const { TAG_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryMarkdownNodesByDir = require(`../queries/queryMarkdownNodesByDir`)

const markdownNodes = data => data.allMarkdownRemark.edges

const createTagPage = (tag, createPage) => {
  const slug = toTagSlug(tag)
  return new Promise((resolve, reject) => {
    try {
      createPage({
        path: slug,
        component: path.resolve(TAG_TEMPLATE_PATH),
        context: {
          tag,
        },
      })
    } catch (error) {
      reject(error)
    }
    reportCreatePageSuccess(`Tag`, slug)
    resolve()
  })
}

const createTagPages = (graphql, createPage, articlesDir) =>
  queryMarkdownNodesByDir(graphql, articlesDir)
    .then(result =>
      pipe(
        markdownNodes,
        collectUniqueTags,
        map(tag => {
          createTagPage(tag, createPage)
        }),
        Promise.all
      )(result.data)
    )
    .catch(throwBuildError(`Tag`))

module.exports = createTagPages
