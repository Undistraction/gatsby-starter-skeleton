const { map, split, trim, compose } = require('ramda');

const splitOnComma = split(',');
const trimAll = map(trim);

const addTagsToNode = (node, createNodeField) => {
  // Create a slug using the fronmatter of the doc
  const { frontmatter } = node;
  const tags = frontmatter.keywords || '';
  console.log('****', compose(trimAll, splitOnComma)(tags));
  createNodeField({
    node,
    name: 'tags',
    value: compose(trimAll, splitOnComma)(tags),
  });
};

module.exports = addTagsToNode;
