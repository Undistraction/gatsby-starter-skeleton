const { compose, reduce, uniq } = require('ramda')
const listToArray = require('../listToArray')

const findKeywords = node => node.node.frontmatter.keywords

const collectTagsFromNode = (acc, node) => {
  const keywords = findKeywords(node) || []
  return acc.concat(listToArray(keywords))
}

// eslint-disable-next-line import/prefer-default-export
module.exports = {
  collectTags: compose(uniq, reduce(collectTagsFromNode, [])),
}
