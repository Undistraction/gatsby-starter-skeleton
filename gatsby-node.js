const createArticles = require('./src/utils/createArticles');
const addSlugToNode = require('./src/utils/addSlugToNode');
const { isTypeMarkdownRemark } = require('./src/utils/checkNodeType');

const ARTICLES_REGEX = /articles\/./;

const isArticleByPath = filepath => ARTICLES_REGEX.test(filepath);
const isMarkdownArticle = node =>
  isTypeMarkdownRemark(node) && isArticleByPath(node.fileAbsolutePath);

// Called whenever a new node is created in the graph
// eslint-disable-next-line no-unused-vars
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  // Target only markdown files in the 'articles/' dir.
  if (isMarkdownArticle(node)) addSlugToNode(node, createNodeField);
};

// Called when Gatsby creates the site pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return createArticles(graphql, createPage);
};
