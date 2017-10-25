const { reduce, compose, uniq, map } = require('ramda');
const path = require('path');
const toSlug = require('./toSlug');
const { TAG_PATH } = require('./templatePaths');
const queryAllArticleNodes = require('./queries/queryAllArticleNodes');

const markdownNodes = data => data.allMarkdownRemark.edges;
const findKeywords = node => node.node.frontmatter.keywords;

const collectTagsFromNode = (acc, node) => {
  const keywords = findKeywords(node) || [];
  return acc.concat(keywords.split(','));
};

const collectTags = compose(uniq, reduce(collectTagsFromNode, []));

const createTagsPage = (graphql, createPage) =>
  new Promise(resolve =>
    queryAllArticleNodes(graphql)
      .then(result => {
        const nodes = markdownNodes(result.data);
        const tags = collectTags(nodes);
        map(tag => {
          const slug = `tags/${toSlug(tag)}`;
          createPage({
            path: slug,
            component: path.resolve(TAG_PATH),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              tag,
            },
          });
        })(tags);
        resolve();
      })
      .catch(error => {
        throw new Error(`Problem with page creation: ${error.message}`);
      })
  );

module.exports = createTagsPage;
