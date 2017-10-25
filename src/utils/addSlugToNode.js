const toSlug = require('./toSlug');

const addSlugToNode = (node, createNodeField) => {
  // Create a slug using the fronmatter of the doc
  const { frontmatter } = node;
  const fragment = frontmatter.slug || frontmatter.title;
  const slug = `articles/${toSlug(fragment)}`;
  // Add a slug field to the MarkdownRemark node.
  createNodeField({
    node,
    name: 'slug',
    value: slug,
  });
};

module.exports = addSlugToNode;
