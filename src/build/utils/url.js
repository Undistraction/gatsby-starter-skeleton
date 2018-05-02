const { curry } = require(`ramda`)
const slugify = require(`slugify`)
const { joinWithFSlash } = require(`./file`)

const toSlug = source => slugify(source, { lower: true })

const tagPath = tag => `/tags/${toSlug(tag)}`

const indexedPagePath = curry(
  (name, pageIndex) =>
    pageIndex > 0 ? joinWithFSlash([name, pageIndex]) : name
)

module.exports = {
  toSlug,
  tagPath,
  indexedPagePath,
}
