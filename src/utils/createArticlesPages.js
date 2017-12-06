const { map, compose } = require('ramda');
const path = require('path');
const reporter = require('./reporter');

const { ARTICLE_PATH } = require('./templatePaths');
const queryAllArticleNodes = require('./queries/queryAllArticleNodes');

const markdownNodes = data => data.allMarkdownRemark.edges;

const createArticlesPage = (slug, createPage) =>
  new Promise((resolve, reject) => {
    try {
      createPage({
        path: slug,
        component: path.resolve(ARTICLE_PATH),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug,
        },
      });
    } catch (error) {
      reject(error);
    }
    reporter.success(`Created Articles Page at slug '${slug}'.`);
    resolve();
  });

const createArticlesPages = (graphql, createPage) =>
  queryAllArticleNodes(graphql)
    .then(result =>
      compose(
        Promise.all,
        map(({ node }) => createArticlesPage(node.fields.slug, createPage))
      )(markdownNodes(result.data))
    )
    .catch(error => {
      throw new Error(
        `Articles Pages Couldn't Be Created: ${error.toString()}`
      );
    });

module.exports = createArticlesPages;
