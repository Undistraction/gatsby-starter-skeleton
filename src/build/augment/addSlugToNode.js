const { dispatch } = require(`ramda-adjunct`)
const { pair, prop, pipe } = require(`ramda`)
const { toSlug } = require(`../utils/url`)
const { joinWithFSlash } = require(`../utils/file`)

const slugFromFrontmatter = (path, frontmatter) =>
  pipe(
    dispatch([prop(`slug`), prop(`title`)]),
    toSlug,
    pair(path),
    joinWithFSlash
  )(frontmatter)

const addSlugToNode = (node, createNodeField, path) =>
  createNodeField({
    node,
    name: `slug`,
    value: slugFromFrontmatter(path, node.frontmatter),
  })

module.exports = addSlugToNode
