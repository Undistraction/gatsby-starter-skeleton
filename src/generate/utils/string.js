const { split, map, trim } = require('ramda')

const splitOnComma = split(',')
const trimAll = map(trim)

module.exports = {
  splitOnComma,
  trimAll,
}
