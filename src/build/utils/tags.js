const { pipe, flatten, path, map, uniq } = require(`ramda`)
const { toSlug } = require(`./url`)

const collectTags = pipe(map(path([`node`, `fields`, `tags`])), flatten, uniq)

const toTagSlug = tag => `tags/${toSlug(tag)}`

// eslint-disable-next-line import/prefer-default-export
module.exports = {
  collectTags,
  toTagSlug,
}
