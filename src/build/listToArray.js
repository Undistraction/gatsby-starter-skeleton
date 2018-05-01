const { compose } = require('ramda')
const { trimAll, splitOnComma } = require('./utils/string')

const listToArray = compose(trimAll, splitOnComma)

module.exports = listToArray
