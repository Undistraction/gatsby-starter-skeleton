const parseFrontmatter = require(`./src/build/augment/parseFrontmatter`)
const createCategoryPages = require(`./src/build/create/createCategoryPages`)
const createResourcePages = require(`./src/build/create/createResourcePages`)
const RESOURCE_TYPE = require(`./src/build/const/resourceType`)
const { reportConfigWasValid } = require(`./src/build/utils/reporter`)
const addResourceTypeToNode = require(`./src/build/augment/addResourceTypeToNode`)
const { lensPath, set, pipe } = require(`ramda`)
const config = require(`./src/site-config`)
const validateConfig = require(`./src/config/validateConfig`)
const createArticlesPages = require(`./src/build/create/createArticlesPages`)
const createProjectsPage = require(`./src/build/create/createProjectsPage`)
const createTagPages = require(`./src/build/create/createTagPages`)
const addSlugToNode = require(`./src/build/augment/addSlugToNode`)
const addMetadataToNode = require(`./src/build/augment/addMetadataToNode`)
const addOrphanlessTitleToNode = require(`./src/build/augment/addOrphanlessTitleToNode`)
const {
  nodeIsMarkdownArticle,
  nodeIsMarkdownProject,
} = require(`./src/build/utils/resources`)
const {
  ARTICLE_TEMPLATE_PATH,
  PROJECT_TEMPLATE_PATH,
} = require(`./src/build/const/templatePaths`)
const { isTypeMarkdownRemark } = require(`./src/build/utils/node`)

const { resources } = config.structure

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

const augmentArticle = (type, pathName, createNodeField, node) => {
  addMetadataToNode(node, createNodeField)
}

const augmentProject = (type, pathName, createNodeField, node) => {
  addSlugToNode(node, createNodeField, pathName)
  addMetadataToNode(node, createNodeField)
  addResourceTypeToNode(type, node, createNodeField)
}

const lDateFormat = lensPath([`context`, `dateFormat`])

// Decorate Gatsby's createPage, supplying config vars that we want available in
// page queries. This is the only way to get dynamic vars into the queries
// because interpolation isn't supported.
const createPageWithConfig = createPage =>
  pipe(set(lDateFormat, config.data.dateFormat), createPage)

// -----------------------------------------------------------------------------
// Gatsby Callbacks
// -----------------------------------------------------------------------------

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (nodeIsMarkdownArticle(node)) {
    parseFrontmatter(node, createNodeField, {
      type: RESOURCE_TYPE.ARTICLE,
      path: resources.articles.path,
    })
    augmentArticle(
      RESOURCE_TYPE.ARTICLE,
      resources.articles.path,
      createNodeField,
      node
    )
    console.log(node)
  } else if (nodeIsMarkdownProject(node)) {
    augmentProject(
      RESOURCE_TYPE.PROJECT,
      resources.projects.path,
      createNodeField,
      node
    )
  }
  if (isTypeMarkdownRemark(node)) {
    addOrphanlessTitleToNode(node, createNodeField)
  }
}

exports.onPreBootstrap = () => {
  validateConfig(config)
  reportConfigWasValid()
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const decoratedCreatePage = createPageWithConfig(createPage)

  const paginatedArticlePages = createArticlesPages(
    graphql,
    decoratedCreatePage,
    resources.articles.groupSize,
    resources.articles.directory,
    resources.articles.path
  )

  const articlePages = createResourcePages(
    `Article`,
    ARTICLE_TEMPLATE_PATH,
    graphql,
    decoratedCreatePage,
    resources.articles.directory,
    resources.articles.path
  )

  const tagPages = createTagPages(
    graphql,
    decoratedCreatePage,
    resources.articles.directory
  )

  const categoryPages = createCategoryPages(
    graphql,
    decoratedCreatePage,
    resources.articles.directory
  )

  const projectsPage = createProjectsPage(
    graphql,
    decoratedCreatePage,
    resources.projects.directory,
    resources.projects.path
  )

  const projectPages = createResourcePages(
    `Project`,
    PROJECT_TEMPLATE_PATH,
    graphql,
    decoratedCreatePage,
    resources.projects.directory,
    resources.projects.path
  )

  return Promise.all([
    paginatedArticlePages,
    articlePages,
    tagPages,
    categoryPages,
    projectsPage,
    projectPages,
  ])
}
