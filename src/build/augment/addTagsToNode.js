const listToArray = require('../listToArray')

const addTagsToNode = (node, createNodeField) => {
  const { frontmatter } = node
  const tags = frontmatter.keywords || ''

  createNodeField({
    node,
    name: 'tags',
    value: listToArray(tags),
  })
}

module.exports = addTagsToNode
