const { pipe, compose, split, map, trim, when, defaultTo } = require(`ramda`)
const { isString } = require(`ramda-adjunct`)

const splitOnComma = split(`,`)

const trimAll = map(trim)

const stringListToArray = pipe(
  when(isString, compose(trimAll, splitOnComma)),
  defaultTo([])
)

module.exports = {
  splitOnComma,
  trimAll,
  stringListToArray,
}
