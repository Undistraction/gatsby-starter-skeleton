const { pipe, pick } = require('ramda')
const { mergeRight } = require('ramda-adjunct')
const DEFAULT_METADATA = require('../const/defaultMetadata')

const addMetadataToNode = (node, createNodeField) => {
  const { frontmatter } = node

  const metadata = pipe(
    pick(['keywords', 'description', 'title']),
    mergeRight(DEFAULT_METADATA)
  )(frontmatter)

  createNodeField({
    node,
    name: 'metadata',
    value: metadata,
  })
}

module.exports = addMetadataToNode
