const createTagsPage = require('./src/utils/create/createTagsPage')
const createProjectsPages = require('./src/utils/create/createProjectsPages')
const validatedConfig = require('./src/config/validatedConfig')
const createArticlesPages = require('./src/utils/create/createArticlesPages')
const createPaginatedArticlesPages = require('./src/utils/create/createPaginatedArticlesPages')
const createProjectsPage = require('./src/utils/create/createProjectsPage')
const createTagsPages = require('./src/utils/create/createTagsPages')
const addSlugToNode = require('./src/utils/augment/addSlugToNode')
const addMetadataToNode = require('./src/utils/augment/addMetadataToNode')
const addTagsToNode = require('./src/utils/augment/addTagsToNode')
const { isTypeMarkdownRemark } = require('./src/utils/checkNodeType')

const { structure } = validatedConfig()

const ARTICLES_REGEXP = new RegExp(`content/${structure.articles.directory}/`)
const PROJECT_REGEXP = new RegExp(`content/${structure.projects.directory}/`)

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
    addSlugToNode(node, createNodeField, structure.articles.path)
    addMetadataToNode(node, createNodeField)
    addTagsToNode(node, createNodeField)
  } else if (nodeIsMarkdownProject(node)) {
    addSlugToNode(node, createNodeField, structure.projects.path)
    addMetadataToNode(node, createNodeField)
    addTagsToNode(node, createNodeField)
  }
}

// // Called when Gatsby creates the site pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const taggedItemPaths = [structure.articles.path, structure.projects.path]
  const paginatedArticlePages = createPaginatedArticlesPages(
    graphql,
    createPage,
    structure.articles.perPage,
    structure.articles.path
  )
  const articlePages = createArticlesPages(
    graphql,
    createPage,
    structure.articles.path
  )
  const tagPages = createTagsPages(graphql, createPage, taggedItemPaths)
  const projectsPage = createProjectsPage(
    graphql,
    createPage,
    structure.projects.path
  )
  const projectPages = createProjectsPages(
    graphql,
    createPage,
    structure.projects.path
  )
  const tagsPage = createTagsPage(
    graphql,
    createPage,
    structure.tags.path,
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
