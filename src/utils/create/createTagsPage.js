const { join, pipe, defaultTo } = require('ramda')
const { collectTags } = require('../tags')
const path = require('path')
const { TAGS_PATH } = require('../templatePaths')
const queryAllTaggedNodes = require('../queries/queryAllTaggedNodes')
const reporter = require('../reporter')
const { prefixWithFSlash } = require('../fileUtils')

const markdownNodes = data => data.allMarkdownRemark.edges

const createTagsPage = (graphql, createPage, tagsPath, taggedItemPaths) =>
  queryAllTaggedNodes(graphql, join('|', taggedItemPaths)).then(result => {
    const tags = pipe(markdownNodes, collectTags, defaultTo([]))(result.data)
    console.log('TAGS', tagsPath, TAGS_PATH)
    createPage({
      path: prefixWithFSlash(tagsPath),
      component: path.resolve(TAGS_PATH),
      context: {
        tags,
      },
    })
    reporter.success(`Created Projects Page with ${tags.length} tags`)
    return Promise.resolve()
  })
// .catch(error => {
//   throw new Error(`Projects Page Couldn't Be Created: ${error.toString()}`);
// });

module.exports = createTagsPage
