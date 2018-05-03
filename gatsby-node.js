const RESOURCE_TYPE = require(`./src/build/const/resourceType`)
const addResourceTypeToNode = require(`./src/build/augment/addResourceTypeToNode`)

const { lensPath, set, pipe } = require(`ramda`)
const createTagsPage = require(`./src/build/create/createTagsPage`)
const createProjectPages = require(`./src/build/create/createProjectPages`)
const validatedConfig = require(`./src/config/validatedConfig`)
const createArticlePages = require(`./src/build/create/createArticlePages`)
const createPaginatedArticlesPages = require(`./src/build/create/createPaginatedArticlesPages`)
const createProjectsPage = require(`./src/build/create/createProjectsPage`)
const createTagPages = require(`./src/build/create/createTagPages`)
const addSlugToNode = require(`./src/build/augment/addSlugToNode`)
const addMetadataToNode = require(`./src/build/augment/addMetadataToNode`)
const addTagsToNode = require(`./src/build/augment/addTagsToNode`)
const {
  nodeIsMarkdownArticle,
  nodeIsMarkdownProject,
} = require(`./src/build/utils/resources`)

const { resources } = validatedConfig().structure

const augmentResource = (type, pathName, createNodeField, node) => {
  addSlugToNode(node, createNodeField, pathName)
  addMetadataToNode(node, createNodeField)
  addTagsToNode(node, createNodeField)
  addResourceTypeToNode(type, node, createNodeField)
}

const lDateFormat = lensPath([`context`, `dateFormat`])

// Decorate Gatsby's createPage, supplying config vars that we want available in
// page queries. This is the only way to get dynamic vars into the queries
// because interpolation isn't supported.
const createPageWithConfig = createPage =>
  pipe(set(lDateFormat, validatedConfig().data.dateFormat), createPage)

// -----------------------------------------------------------------------------
// Gatsby Callbacks
// -----------------------------------------------------------------------------

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (nodeIsMarkdownArticle(node)) {
    augmentResource(
      RESOURCE_TYPE.ARTICLE,
      resources.articles.path,
      createNodeField,
      node
    )
  } else if (nodeIsMarkdownProject(node)) {
    augmentResource(
      RESOURCE_TYPE.PROJECT,
      resources.projects.path,
      createNodeField,
      node
    )
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const decoratedCreatePage = createPageWithConfig(createPage)
  const taggedItemPaths = [
    resources.articles.directory,
    resources.projects.directory,
  ]

  const paginatedArticlePages = createPaginatedArticlesPages(
    graphql,
    decoratedCreatePage,
    resources.articles.groupSize,
    resources.articles.directory,
    resources.articles.path
  )

  const articlePages = createArticlePages(
    graphql,
    decoratedCreatePage,
    resources.articles.directory,
    resources.articles.path
  )

  const tagPages = createTagPages(graphql, decoratedCreatePage, taggedItemPaths)

  const projectsPage = createProjectsPage(
    graphql,
    decoratedCreatePage,
    resources.projects.directory,
    resources.projects.path
  )

  const projectPages = createProjectPages(
    graphql,
    decoratedCreatePage,
    resources.projects.directory,
    resources.projects.path
  )

  const tagsPage = createTagsPage(
    graphql,
    decoratedCreatePage,
    taggedItemPaths,
    resources.tags.path
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
