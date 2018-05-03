const addResourceTypeToNode = (type, node, createNodeField) => {
  createNodeField({
    node,
    name: `type`,
    value: type,
  })
}

module.exports = addResourceTypeToNode
