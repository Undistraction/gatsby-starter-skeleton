const attachFields = require(`./src/attachFields`)

exports.onCreateNode = async (
  { node, boundActionCreators },
  { context, descriptors }
) => {
  const { createNodeField } = boundActionCreators
  if (descriptors) {
    attachFields(node, createNodeField, descriptors, context)
  }
}
