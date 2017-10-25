const createArticlesPage = require('./src/utils/createArticlesPage');
const createTagsPage = require('./src/utils/createTagsPage');
const addSlugToNode = require('./src/utils/addSlugToNode');
const addMetadataToNode = require('./src/utils/addMetadataToNode');
const addTagsToNode = require('./src/utils/addTagsToNode');
const { isTypeMarkdownRemark } = require('./src/utils/checkNodeType');

const ARTICLES_REGEX = /content\/articles\/./;

const isArticleByPath = filepath => ARTICLES_REGEX.test(filepath);
const isMarkdownArticle = node =>
  isTypeMarkdownRemark(node) && isArticleByPath(node.fileAbsolutePath);

// Called whenever a new node is created in the graph
// eslint-disable-next-line no-unused-vars
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  // Target only markdown files in the 'articles/' dir.
  if (isMarkdownArticle(node)) {
    addSlugToNode(node, createNodeField);
    addMetadataToNode(node, createNodeField);
    addTagsToNode(node, createNodeField);
  }
};

// Called when Gatsby creates the site pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const articlePages = createArticlesPage(graphql, createPage);
  const tagPages = createTagsPage(graphql, createPage);
  return Promise.all([articlePages, tagPages]);
};
