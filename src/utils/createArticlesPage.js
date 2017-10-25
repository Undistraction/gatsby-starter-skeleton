const path = require('path');
const { ARTICLE_PATH } = require('./templatePaths');
const queryAllArticleNodes = require('./queries/queryAllArticleNodes');

const markdownNodes = data => data.allMarkdownRemark.edges;

const createArticlesPage = (graphql, createPage) =>
  new Promise(resolve =>
    queryAllArticleNodes(graphql)
      .then(result => {
        const pages = markdownNodes(result.data).map(({ node }) =>
          createPage({
            path: node.fields.slug,
            component: path.resolve(ARTICLE_PATH),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        );

        resolve();
        return Promise.all(pages);
      })
      .catch(error => {
        throw new Error(`Problem with page creation: ${error.message}`);
      })
  );

module.exports = createArticlesPage;
