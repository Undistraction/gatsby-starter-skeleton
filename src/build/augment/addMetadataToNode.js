const { pipe, pick } = require(`ramda`)
const { mergeRight } = require(`ramda-adjunct`)
const DEFAULT_METADATA = require(`../const/defaultMetadata`)

const metadataFromFrontmatter = pipe(
  pick([`keywords`, `description`, `title`]),
  mergeRight(DEFAULT_METADATA)
)

const addMetadataToNode = (node, createNodeField) =>
  createNodeField({
    node,
    name: `metadata`,
    value: metadataFromFrontmatter(node.frontmatter),
  })

module.exports = addMetadataToNode
