const { stringListToArray } = require(`../utils/string`)

const addTagsToNode = (node, createNodeField) => {
  const { frontmatter } = node
  const tags = frontmatter.keywords || ``

  createNodeField({
    node,
    name: `tags`,
    value: stringListToArray(tags),
  })
}

module.exports = addTagsToNode
