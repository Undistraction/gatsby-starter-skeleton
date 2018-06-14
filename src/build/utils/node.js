const NODE_TYPE = require(`../const/nodeType`)
const { curry, equals } = require(`ramda`)

const isNodeType = curry((nodeType, node) =>
  equals(node.internal.type, nodeType)
)

const isTypeMarkdownRemark = isNodeType(NODE_TYPE.MARKDOWN_REMARK)

module.exports = {
  isTypeMarkdownRemark,
}
