const path = require(`path`)
const { pipe, map } = require(`ramda`)
const { reportCreatePageSuccess } = require(`../utils/reporter`)
const { throwBuildError } = require(`../utils/errors`)
const { collectUniqueTags, toTagSlug } = require(`../utils/tags`)
const { TAG_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryAllResourceNodes = require(`../queries/queryAllResourceNodes`)

const markdownNodes = data => data.allMarkdownRemark.edges

const createTagPage = (tag, tags, createPage) => {
  const slug = toTagSlug(tag)
  return new Promise((resolve, reject) => {
    try {
      createPage({
        path: slug,
        component: path.resolve(TAG_TEMPLATE_PATH),
        context: {
          tag,
          tags,
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
  queryAllResourceNodes(graphql, articlesDir)
    .then(result =>
      pipe(
        markdownNodes,
        collectUniqueTags,
        tags =>
          map(tag => {
            createTagPage(tag, tags, createPage)
          }, tags),
        Promise.all
      )(result.data)
    )
    .catch(throwBuildError(`Tag`))

module.exports = createTagPages
