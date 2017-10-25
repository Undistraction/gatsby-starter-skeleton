const addMetadataToNode = (node, createNodeField) => {
  // Create a slug using the fronmatter of the doc
  const { frontmatter } = node;
  // Create metadata object
  const metadata = {
    keywords: frontmatter.keywords || '',
    description: frontmatter.description || '',
    title: frontmatter.title || '',
  };
  createNodeField({
    node,
    name: 'metadata',
    value: metadata,
  });
};

module.exports = addMetadataToNode;
