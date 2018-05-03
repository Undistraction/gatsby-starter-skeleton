const { compose, split, map, trim, defaultTo } = require(`ramda`)

const splitOnComma = split(`,`)

const trimAll = map(trim)

const stringListToArray = compose(trimAll, splitOnComma, defaultTo(``))

module.exports = {
  splitOnComma,
  trimAll,
  stringListToArray,
}
