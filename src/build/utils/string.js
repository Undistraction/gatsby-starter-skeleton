const { pipe, compose, split, map, trim, when, replace } = require(`ramda`)
const { isNonEmptyString, isNotArray, stubArray } = require(`ramda-adjunct`)
const { RE_LAST_SPACE } = require(`../const/regExp`)

const splitOnComma = split(`,`)

const trimAll = map(trim)

const stringListToArray = pipe(
  when(
    isNonEmptyString,
    compose(
      trimAll,
      splitOnComma
    )
  ),
  when(isNotArray, stubArray)
)

const preventOrphans = replace(RE_LAST_SPACE, `\u00a0`)

module.exports = {
  splitOnComma,
  trimAll,
  stringListToArray,
  preventOrphans,
}
