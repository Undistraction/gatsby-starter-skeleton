const path = require('path');

const markdownNodes = data => data.allMarkdownRemark.edges;
const ARTICLE_TEMPLATE_PATH = './src/templates/article.jsx';

const createArticles = (graphql, createPage) =>
  new Promise(resolve =>
    graphql(`
      {
        allMarkdownRemark(
          filter: { fields: { slug: { regex: "/articles/./" } } }
        ) {
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
        markdownNodes(result.data).map(({ node }) => {
          // Build page
          createPage({
            path: node.fields.slug,
            component: path.resolve(ARTICLE_TEMPLATE_PATH),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          });
        });
        resolve();
      })
      .catch(error => {
        throw new Error(`Problem with page creation: ${error.message}`);
      })
  );

module.exports = createArticles;
