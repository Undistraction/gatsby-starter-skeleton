const toSlug = require('../toSlug');
const { joinWithFSlash } = require('../fileUtils');

const addSlugToNode = (node, createNodeField, path) => {
  const { frontmatter } = node;
  const fragment = frontmatter.slug || frontmatter.title;
  const slug = joinWithFSlash([path, toSlug(fragment)]);
  createNodeField({
    node,
    name: 'slug',
    value: slug,
  });
};

module.exports = addSlugToNode;
