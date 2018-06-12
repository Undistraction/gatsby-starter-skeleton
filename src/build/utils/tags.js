const { apply, pair, pipe, flatten, path, map, uniq } = require(`ramda`)
const { prefixWithFSlash } = require(`./file`)
const { toSlug } = require(`./url`)
const { join } = require(`path`)

const collectUniqueTags = pipe(
  map(path([`node`, `fields`, `tags`])),
  flatten,
  uniq
)

const toTagSlug = pipe(toSlug, pair(`tags`), apply(join), prefixWithFSlash)

// eslint-disable-next-line import/prefer-default-export
module.exports = {
  collectUniqueTags,
  toTagSlug,
}
