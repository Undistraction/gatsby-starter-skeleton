const { preventOrphans } = require(`../utils/string`)

const addOrphanlessTitleToNode = (node, createNodeField) =>
  createNodeField({
    node,
    name: `title`,
    value: preventOrphans(node.frontmatter.title),
  })

module.exports = addOrphanlessTitleToNode
