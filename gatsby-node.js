const createExperimentsPages = require('./src/utils/create/createExperimentsPages');
const validatedConfig = require('./src/config/validatedConfig');
const createArticlesPages = require('./src/utils/create/createArticlesPages');
const createPaginatedArticlesPages = require('./src/utils/create/createPaginatedArticlesPages');
const createLabPage = require('./src/utils/create/createLabPage');
const createTagsPages = require('./src/utils/create/createTagsPages');
const addSlugToNode = require('./src/utils/augment/addSlugToNode');
const addMetadataToNode = require('./src/utils/augment/addMetadataToNode');
const addTagsToNode = require('./src/utils/augment/addTagsToNode');
const { isTypeMarkdownRemark } = require('./src/utils/checkNodeType');

const { structure } = validatedConfig();

const ARTICLES_REGEX = new RegExp(`content/${structure.articles.directory}/`);
const LAB_REGEX = new RegExp(`content/${structure.lab.directory}/`);

const isArticleByPath = filepath => ARTICLES_REGEX.test(filepath);
const isLabByPath = filepath => LAB_REGEX.test(filepath);

// const isLabByPath = filepath => LAB_REGEX.test(filepath);

const nodeIsMarkdownArticle = node =>
  isTypeMarkdownRemark(node) && isArticleByPath(node.fileAbsolutePath);
const nodeIsMarkdownLab = node =>
  isTypeMarkdownRemark(node) && isLabByPath(node.fileAbsolutePath);

// eslint-disable-next-line no-unused-vars
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (nodeIsMarkdownArticle(node)) {
    addSlugToNode(node, createNodeField, structure.articles.path);
    addMetadataToNode(node, createNodeField);
    addTagsToNode(node, createNodeField);
  } else if (nodeIsMarkdownLab(node)) {
    addSlugToNode(node, createNodeField, structure.lab.path);
    addMetadataToNode(node, createNodeField);
  }
};

// // Called when Gatsby creates the site pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const paginatedArticlePages = createPaginatedArticlesPages(
    graphql,
    createPage,
    structure.articles.perPage,
    structure.articles.path
  );
  const articlePages = createArticlesPages(
    graphql,
    createPage,
    structure.articles.path
  );
  const tagPages = createTagsPages(
    graphql,
    createPage,
    structure.articles.path
  );
  const labPage = createLabPage(graphql, createPage, structure.lab.path);
  const experimentsPages = createExperimentsPages(
    graphql,
    createPage,
    structure.lab.path
  );
  return Promise.all([
    paginatedArticlePages,
    articlePages,
    tagPages,
    labPage,
    experimentsPages,
  ]);
};
