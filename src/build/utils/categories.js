const { compact } = require(`ramda-adjunct`)
const { apply, pair, pipe, path, map, uniq } = require(`ramda`)
const { prefixWithFSlash } = require(`./file`)
const { toSlug } = require(`./url`)
const { join } = require(`path`)

const collectUniqueCategories = pipe(
  map(path([`node`, `frontmatter`, `category`])),
  compact,
  uniq
)
const toCategorySlug = pipe(
  toSlug,
  pair(`categories`),
  apply(join),
  prefixWithFSlash
)

// eslint-disable-next-line import/prefer-default-export
module.exports = {
  collectUniqueCategories,
  toCategorySlug,
}
