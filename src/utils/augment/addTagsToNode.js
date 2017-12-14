const listToArray = require('../listToArray');

const addTagsToNode = (node, createNodeField) => {
  // Create tags using the frontmatter keywords
  const { frontmatter } = node;
  const tags = frontmatter.keywords || '';
  createNodeField({
    node,
    name: 'tags',
    value: listToArray(tags),
  });
};

module.exports = addTagsToNode;
