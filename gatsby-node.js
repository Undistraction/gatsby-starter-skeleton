const createCategoryPages = require(`./src/build/create/createCategoryPages`)
const createResourcePages = require(`./src/build/create/createResourcePages`)
const {
  reportConfigWasValid,
  reportBuildError,
  reportBuildSuccess,
} = require(`./src/build/utils/reporter`)
const { lensPath, set, pipe } = require(`ramda`)
const config = require(`./src/site-config`)
const validateConfig = require(`./src/build/config/validateConfig`)
const createArticlesPages = require(`./src/build/create/createArticlesPages`)
const createProjectsPage = require(`./src/build/create/createProjectsPage`)
const createTagPages = require(`./src/build/create/createTagPages`)

const {
  ARTICLE_TEMPLATE_PATH,
  PROJECT_TEMPLATE_PATH,
} = require(`./src/build/const/templatePaths`)

const { resources } = config.structure

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

const lDateFormat = lensPath([`context`, `dateFormat`])

// Decorate Gatsby's createPage, supplying config vars that we want available in
// page queries. This is the only way to get dynamic vars into the queries
// because interpolation isn't supported.
const createPageWithConfig = createPage =>
  pipe(
    set(lDateFormat, config.data.dateFormat),
    createPage
  )

// -----------------------------------------------------------------------------
// Validate Site Config
// -----------------------------------------------------------------------------

exports.onPreBootstrap = () => {
  validateConfig(config)
  reportConfigWasValid()
}

// -----------------------------------------------------------------------------
// Create Site Pages
// -----------------------------------------------------------------------------

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const decoratedCreatePage = createPageWithConfig(createPage)

  // ---------------------------------------------------------------------------
  // Articles
  // ---------------------------------------------------------------------------

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

  // ---------------------------------------------------------------------------
  // Projects
  // ---------------------------------------------------------------------------

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

  // ---------------------------------------------------------------------------
  // Meta
  // ---------------------------------------------------------------------------

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

  // ---------------------------------------------------------------------------

  return Promise.all([
    paginatedArticlePages,
    articlePages,
    tagPages,
    categoryPages,
    projectsPage,
    projectPages,
  ])
    .then(reportBuildSuccess)
    .catch(reportBuildError)
}
