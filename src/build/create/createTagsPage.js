const path = require('path')
const { join, pipe, defaultTo } = require('ramda')
const { collectTags } = require('../utils/tags')
const { TAGS_TEMPLATE_PATH } = require('../const/templatePaths')
const queryAllResourceNodes = require('../queries/queryAllResourceNodes')
const reporter = require('../reporter')

const markdownNodes = data => data.allMarkdownRemark.edges

const createTagsPage = (graphql, createPage, tagsPath, taggedItemPaths) =>
  queryAllResourceNodes(graphql, join('|', taggedItemPaths))
    .then(result => {
      const tags = pipe(markdownNodes, collectTags, defaultTo([]))(result.data)
      createPage({
        path: tagsPath,
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
