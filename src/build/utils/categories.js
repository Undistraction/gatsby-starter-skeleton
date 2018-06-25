const { CATEGORIES_PATH_ELEMENT } = require(`../const/urls`)
const { UNCATEGORISED_CATEGORY } = require(`../const/strings`)
const { compact, appendFlipped } = require(`ramda-adjunct`)
const { apply, append, pipe, path, map, uniq } = require(`ramda`)
const { toSlug } = require(`./url`)
const urlJoin = require(`url-join`)

const collectUniqueCategories = pipe(
  map(path([`node`, `fields`, `category`])),
  compact,
  append(UNCATEGORISED_CATEGORY),
  uniq
)

const toCategorySlug = pipe(
  toSlug,
  appendFlipped([`/`, CATEGORIES_PATH_ELEMENT]),
  apply(urlJoin)
)

module.exports = {
  collectUniqueCategories,
  toCategorySlug,
}
