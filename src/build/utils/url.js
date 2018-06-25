const { curry } = require(`ramda`)
const slugify = require(`slugify`)
const urlJoin = require(`url-join`)
const { TAGS_PATH_ELEMENT, CATEGORIES_PATH_ELEMENT } = require(`../const/urls`)

const toSlug = source => slugify(source, { lower: true })

const tagPath = tag => urlJoin(`/`, TAGS_PATH_ELEMENT, toSlug(tag))

const categoryPath = category =>
  urlJoin(`/`, CATEGORIES_PATH_ELEMENT, toSlug(category))

const indexedPagePath = curry(
  (name, pageIndex) =>
    pageIndex > 0 ? urlJoin(name, pageIndex.toString()) : name
)

module.exports = {
  toSlug,
  tagPath,
  categoryPath,
  indexedPagePath,
}
