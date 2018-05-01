const { join, pipe, defaultTo } = require('ramda')
const { collectTags } = require('../utils/tags')
const path = require('path')
const { TAGS_TEMPLATE_PATH } = require('../const/templatePaths')
const queryAllTaggedNodes = require('../queries/queryAllTaggedNodes')
const reporter = require('../reporter')
const { prefixWithFSlash } = require('../utils/file')

const markdownNodes = data => data.allMarkdownRemark.edges

const createTagsPage = (graphql, createPage, tagsPath, taggedItemPaths) =>
  queryAllTaggedNodes(graphql, join('|', taggedItemPaths))
    .then(result => {
      const tags = pipe(markdownNodes, collectTags, defaultTo([]))(result.data)
      createPage({
        path: prefixWithFSlash(tagsPath),
        component: path.resolve(TAGS_TEMPLATE_PATH),
        context: {
          tags,
        },
      })
      reporter.success(`Created Projects Page with ${tags.length} tags`)
      return Promise.resolve()
    })
    .catch(error => {
      throw new Error(`Projects Page Couldn't Be Created: ${error.toString()}`)
    })

module.exports = createTagsPage
