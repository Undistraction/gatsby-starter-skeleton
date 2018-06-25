const { TAGS_PATH_ELEMENT } = require(`../const/urls`)
const { apply, pipe, flatten, path, map, uniq } = require(`ramda`)
const { appendFlipped } = require(`ramda-adjunct`)
const { toSlug } = require(`./url`)
const urlJoin = require(`url-join`)

const collectUniqueTags = pipe(
  map(path([`node`, `fields`, `tags`])),
  flatten,
  uniq
)

const toTagSlug = pipe(
  toSlug,
  appendFlipped([`/`, TAGS_PATH_ELEMENT]),
  apply(urlJoin)
)

module.exports = {
  collectUniqueTags,
  toTagSlug,
}
