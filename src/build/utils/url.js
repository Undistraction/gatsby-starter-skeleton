const slugify = require('slugify')

const toSlug = source => slugify(source, { lower: true })

const tagPath = tag => `/tags/${toSlug(tag)}`

module.exports = {
  toSlug,
  tagPath,
}
