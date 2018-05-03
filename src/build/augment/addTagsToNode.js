const { stringListToArray } = require(`../utils/string`)

const addTagsToNode = (node, createNodeField) =>
  createNodeField({
    node,
    name: `tags`,
    value: stringListToArray(node.frontmatter.keywords),
  })

module.exports = addTagsToNode
