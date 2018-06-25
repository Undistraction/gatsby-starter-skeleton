const { CATEGORIES_PATH_ELEMENT } = require(`../const/urls`)
const { compact, appendFlipped } = require(`ramda-adjunct`)
const { apply, pipe, path, map, uniq } = require(`ramda`)
const { toSlug } = require(`./url`)
const urlJoin = require(`url-join`)

const collectUniqueCategories = pipe(
  map(path([`node`, `fields`, `category`])),
  compact,
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
