const { reduce, compose, uniq, map } = require('ramda');
const path = require('path');
const reporter = require('./reporter');
const toSlug = require('./toSlug');
const { TAG_PATH } = require('./templatePaths');
const queryAllArticleNodes = require('./queries/queryAllArticleNodes');
const listToArray = require('./listToArray');

const markdownNodes = data => data.allMarkdownRemark.edges;
const findKeywords = node => node.node.frontmatter.keywords;

const collectTagsFromNode = (acc, node) => {
  const keywords = findKeywords(node) || [];
  return acc.concat(listToArray(keywords));
};

const collectTags = compose(uniq, reduce(collectTagsFromNode, []));

const createTagPage = (tag, slug, createPage) =>
  new Promise((resolve, reject) => {
    try {
      createPage({
        path: slug,
        component: path.resolve(TAG_PATH),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          tag,
        },
      });
    } catch (error) {
      reject(error);
    }
    reporter.success(`Creating Tag Page for '${tag}' at slug '${slug}'.`);
    resolve();
  });

const createTagsPages = (graphql, createPage) =>
  queryAllArticleNodes(graphql)
    .then(result =>
      compose(
        Promise.all,
        map(tag => {
          const slug = `tags/${toSlug(tag)}`;
          createTagPage(tag, slug, createPage);
        }),
        collectTags,
        markdownNodes
      )(result.data)
    )
    .catch(error => {
      throw new Error(`Problem with page creation: ${error.toString()}`);
    });

module.exports = createTagsPages;
