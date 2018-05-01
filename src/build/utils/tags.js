const { lensPath, view } = require('ramda')

const { concat, compose, reduce, uniq, defaultTo } = require('ramda')
const { stringListToArray } = require('../utils/string')

const lKeywords = lensPath(['node', 'frontmatter', 'keywords'])

const collectTagsFromNode = (acc, node) =>
  compose(concat(acc), stringListToArray, defaultTo([]), view(lKeywords))(node)

// eslint-disable-next-line import/prefer-default-export
module.exports = {
  collectTags: compose(uniq, reduce(collectTagsFromNode, [])),
}
