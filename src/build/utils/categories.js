const { compact } = require(`ramda-adjunct`)
const { pair, pipe, path, map, uniq } = require(`ramda`)
const { prefixWithFSlash, joinWithFSlash } = require(`./file`)
const { toSlug } = require(`./url`)

const collectUniqueCategories = pipe(
  map(path([`node`, `frontmatter`, `category`])),
  compact,
  uniq
)
const toCategorySlug = pipe(
  toSlug,
  pair(`categories`),
  joinWithFSlash,
  prefixWithFSlash
)

// eslint-disable-next-line import/prefer-default-export
module.exports = {
  collectUniqueCategories,
  toCategorySlug,
}
