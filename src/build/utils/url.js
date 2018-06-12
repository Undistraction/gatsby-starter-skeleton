const { curry } = require(`ramda`)
const slugify = require(`slugify`)
const { join } = require(`path`)

const toSlug = source => slugify(source, { lower: true })

const tagPath = tag => `/tags/${toSlug(tag)}`
const categoryPath = category => `/categories/${toSlug(category)}`

const indexedPagePath = curry(
  (name, pageIndex) => (pageIndex > 0 ? join(name, pageIndex.toString()) : name)
)

module.exports = {
  toSlug,
  tagPath,
  categoryPath,
  indexedPagePath,
}
