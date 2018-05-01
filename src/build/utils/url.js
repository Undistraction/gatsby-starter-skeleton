const slugify = require('slugify')

const toSlug = source => slugify(source, { lower: true })

module.exports = {
  toSlug,
}
