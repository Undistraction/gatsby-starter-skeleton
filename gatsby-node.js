const slugify = require('slugify');
const path = require('path');

const ARTICLE_TEMPLATE = './src/templates/article.jsx';
const ARTICLES_REGEX = /articles\/./;

const toSlug = source => slugify(source, { lower: true });
const isArticle = filepath => ARTICLES_REGEX.test(filepath);

// Called whenever a new node is created in the graph
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  // Target only nodes created by Markdown Remark from markdown docs.
  if (
    node.internal.type === 'MarkdownRemark' &&
    isArticle(node.fileAbsolutePath)
  ) {
    // Create a slug using the fronmatter of the doc
    const { frontmatter } = node;
    const slugSource = frontmatter.slug || frontmatter.title;
    const slug = `articles/${toSlug(slugSource)}`;
    // Add a slug field to the MarkdownRemark node.
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
    // Create metadata fields
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
  }
};

// Called when Gatsby creates the site pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  // Create a promise that runs the query for all MarkdownRemark nodes
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.fields && isArticle(node.fields.slug)) {
            // Build page
            createPage({
              path: node.fields.slug,
              component: path.resolve(ARTICLE_TEMPLATE),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            });
          }
        });
        resolve();
      })
      .catch(error => {
        throw new Error(`Problem with page creation: ${error.message}`);
      });
  });
};
