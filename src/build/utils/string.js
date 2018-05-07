const {
  pipe,
  compose,
  split,
  map,
  trim,
  when,
  defaultTo,
  replace,
} = require(`ramda`)
const { isString } = require(`ramda-adjunct`)
const { RE_LAST_SPACE } = require(`../const/regExp`)

const splitOnComma = split(`,`)

const trimAll = map(trim)

const stringListToArray = pipe(
  when(isString, compose(trimAll, splitOnComma)),
  defaultTo([])
)

const preventOrphans = replace(RE_LAST_SPACE, `\u00a0`)

module.exports = {
  splitOnComma,
  trimAll,
  stringListToArray,
  preventOrphans,
}
