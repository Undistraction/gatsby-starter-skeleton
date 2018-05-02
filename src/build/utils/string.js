const { compose, split, map, trim } = require(`ramda`)

const splitOnComma = split(`,`)

const trimAll = map(trim)

const stringListToArray = compose(trimAll, splitOnComma)

module.exports = {
  splitOnComma,
  trimAll,
  stringListToArray,
}
