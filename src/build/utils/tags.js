const { pair, pipe, flatten, path, map, uniq } = require(`ramda`)
const { prefixWithFSlash, joinWithFSlash } = require(`./file`)
const { toSlug } = require(`./url`)

const collectUniqueTags = pipe(
  map(path([`node`, `fields`, `tags`])),
  flatten,
  uniq
)

const toTagSlug = pipe(toSlug, pair(`tags`), joinWithFSlash, prefixWithFSlash)

// eslint-disable-next-line import/prefer-default-export
module.exports = {
  collectUniqueTags,
  toTagSlug,
}
