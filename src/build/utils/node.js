const NODE_TYPES = require(`../const/nodeTypes`)

const isNodeType = (node, nodeType) => node.internal.type === nodeType

const isTypeMarkdownRemark = node =>
  isNodeType(node, NODE_TYPES.MARKDOWN_REMARK)

module.exports = {
  isTypeMarkdownRemark,
}
