const { toSlug } = require('../utils/url')
const { joinWithFSlash } = require('../utils/file')

const addSlugToNode = (node, createNodeField, path) => {
  const { frontmatter } = node
  const fragment = frontmatter.slug || frontmatter.title
  const slug = joinWithFSlash([path, toSlug(fragment)])

  createNodeField({
    node,
    name: 'slug',
    value: slug,
  })
}

module.exports = addSlugToNode
