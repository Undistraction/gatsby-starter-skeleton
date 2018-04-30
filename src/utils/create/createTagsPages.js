const { collectTags } = require('../tags')
const { join, pipe, map } = require('ramda')
const path = require('path')
const reporter = require('../reporter')
const toSlug = require('../toSlug')
const { TAG_PATH } = require('../templatePaths')
const { prefixWithFSlash } = require('../fileUtils')
const queryAllTaggedNodes = require('../queries/queryAllTaggedNodes')

const markdownNodes = data => data.allMarkdownRemark.edges

const createTagPage = (tag, tags, slug, createPage) =>
  new Promise((resolve, reject) => {
    try {
      createPage({
        path: prefixWithFSlash(slug),
        component: path.resolve(TAG_PATH),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
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
const createTagsPages = (graphql, createPage, taggedItemPaths) =>
  queryAllTaggedNodes(graphql, join('|', taggedItemPaths))
    .then(result =>
      pipe(
        markdownNodes,
        collectTags,
        tags =>
          map(tag => {
            const slug = `tags/${toSlug(tag)}`
            createTagPage(tag, tags, slug, createPage)
          }, tags),
        Promise.all
      )(result.data)
    )
    .catch(error => {
      throw new Error(`Problem with page creation: ${error.toString()}`)
    })

module.exports = createTagsPages
