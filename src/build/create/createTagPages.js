const { collectTags, toTagSlug } = require(`../utils/tags`)
const { pipe, map } = require(`ramda`)
const path = require(`path`)
const reporter = require(`../reporter`)
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
    reporter.success(`Created Tag Page for '${tag}' at slug '${slug}'.`)
    resolve()
  })
}

const createTagPages = (graphql, createPage, taggedItemPaths) =>
  queryAllResourceNodes(graphql, taggedItemPaths)
    .then(result =>
      pipe(
        markdownNodes,
        collectTags,
        tags =>
          map(tag => {
            createTagPage(tag, tags, createPage)
          }, tags),
        Promise.all
      )(result.data)
    )
    .catch(error => {
      throw new Error(`Problem with page creation: ${error.toString()}`)
    })

module.exports = createTagPages
