const NODE_TYPE = require(`../const/nodeType`)

const isNodeType = (node, nodeType) => node.internal.type === nodeType

const isTypeMarkdownRemark = node => isNodeType(node, NODE_TYPE.MARKDOWN_REMARK)

module.exports = {
  isTypeMarkdownRemark,
}
