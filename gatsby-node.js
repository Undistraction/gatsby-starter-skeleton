const createTagsPage = require('./src/build/create/createTagsPage')
const createProjectsPages = require('./src/build/create/createProjectsPages')
const validatedConfig = require('./src/config/validatedConfig')
const createArticlesPages = require('./src/build/create/createArticlesPages')
const createPaginatedArticlesPages = require('./src/build/create/createPaginatedArticlesPages')
const createProjectsPage = require('./src/build/create/createProjectsPage')
const createTagsPages = require('./src/build/create/createTagsPages')
const addSlugToNode = require('./src/build/augment/addSlugToNode')
const addMetadataToNode = require('./src/build/augment/addMetadataToNode')
const addTagsToNode = require('./src/build/augment/addTagsToNode')
const { isTypeMarkdownRemark } = require('./src/build/utils/node')

const { resources } = validatedConfig().structure

const ARTICLES_REGEXP = new RegExp(`content/${resources.articles.directory}/`)
const PROJECT_REGEXP = new RegExp(`content/${resources.projects.directory}/`)

const isArticleByPath = filepath => ARTICLES_REGEXP.test(filepath)
const isProjectByPath = filepath => PROJECT_REGEXP.test(filepath)

const nodeIsMarkdownArticle = node =>
  isTypeMarkdownRemark(node) && isArticleByPath(node.fileAbsolutePath)
const nodeIsMarkdownProject = node =>
  isTypeMarkdownRemark(node) && isProjectByPath(node.fileAbsolutePath)

// eslint-disable-next-line no-unused-vars
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (nodeIsMarkdownArticle(node)) {
    addSlugToNode(node, createNodeField, resources.articles.path)
    addMetadataToNode(node, createNodeField)
    addTagsToNode(node, createNodeField)
  } else if (nodeIsMarkdownProject(node)) {
    addSlugToNode(node, createNodeField, resources.projects.path)
    addMetadataToNode(node, createNodeField)
    addTagsToNode(node, createNodeField)
  }
}

// // Called when Gatsby creates the site pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const taggedItemPaths = [resources.articles.path, resources.projects.path]
  const paginatedArticlePages = createPaginatedArticlesPages(
    graphql,
    createPage,
    resources.articles.perPage,
    resources.articles.path
  )
  const articlePages = createArticlesPages(
    graphql,
    createPage,
    resources.articles.path
  )
  const tagPages = createTagsPages(graphql, createPage, taggedItemPaths)
  const projectsPage = createProjectsPage(
    graphql,
    createPage,
    resources.projects.path
  )
  const projectPages = createProjectsPages(
    graphql,
    createPage,
    resources.projects.path
  )
  const tagsPage = createTagsPage(
    graphql,
    createPage,
    resources.tags.path,
    taggedItemPaths
  )
  return Promise.all([
    paginatedArticlePages,
    articlePages,
    tagPages,
    projectsPage,
    projectPages,
    tagsPage,
  ])
}
