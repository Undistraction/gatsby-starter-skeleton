const createTagsPage = require('./src/build/create/createTagsPage')
const createProjectPages = require('./src/build/create/createProjectPages')
const validatedConfig = require('./src/config/validatedConfig')
const createArticlePages = require('./src/build/create/createArticlePages')
const createPaginatedArticlesPages = require('./src/build/create/createPaginatedArticlesPages')
const createProjectsPage = require('./src/build/create/createProjectsPage')
const createTagPages = require('./src/build/create/createTagPages')
const addSlugToNode = require('./src/build/augment/addSlugToNode')
const addMetadataToNode = require('./src/build/augment/addMetadataToNode')
const addTagsToNode = require('./src/build/augment/addTagsToNode')
const {
  nodeIsMarkdownArticle,
  nodeIsMarkdownProject,
} = require('./src/build/utils/resources')

const { resources } = validatedConfig().structure

const augmentResource = (pathName, createNodeField, node) => {
  addSlugToNode(node, createNodeField, pathName)
  addMetadataToNode(node, createNodeField)
  addTagsToNode(node, createNodeField)
}

// -----------------------------------------------------------------------------
// Gatsby Callbacks
// -----------------------------------------------------------------------------

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (nodeIsMarkdownArticle(node)) {
    augmentResource(resources.articles.path, createNodeField, node)
  } else if (nodeIsMarkdownProject(node)) {
    augmentResource(resources.projects.path, createNodeField, node)
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const taggedItemPaths = [
    resources.articles.directory,
    resources.projects.directory,
  ]

  const paginatedArticlePages = createPaginatedArticlesPages(
    graphql,
    createPage,
    resources.articles.perPage,
    resources.articles.directory,
    resources.articles.path
  )

  const articlePages = createArticlePages(
    graphql,
    createPage,
    resources.articles.directory,
    resources.articles.path
  )

  const tagPages = createTagPages(graphql, createPage, taggedItemPaths)

  const projectsPage = createProjectsPage(
    graphql,
    createPage,
    resources.projects.directory,
    resources.projects.path
  )

  const projectPages = createProjectPages(
    graphql,
    createPage,
    resources.projects.directory,
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
