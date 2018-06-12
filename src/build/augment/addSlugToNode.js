const { dispatch } = require(`ramda-adjunct`)
const { apply, pair, prop, pipe } = require(`ramda`)
const { toSlug } = require(`../utils/url`)
const { join } = require(`path`)

const slugFromFrontmatter = (path, frontmatter) =>
  pipe(
    dispatch([prop(`slug`), prop(`title`)]),
    toSlug,
    pair(path),
    apply(join)
  )(frontmatter)

const addSlugToNode = (node, createNodeField, path) =>
  createNodeField({
    node,
    name: `slug`,
    value: slugFromFrontmatter(path, node.frontmatter),
  })

module.exports = addSlugToNode
