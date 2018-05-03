const { termplatePath } = require(`../utils/templates`)

const ARTICLE_TEMPLATE_PATH = termplatePath(`article.js`)
const PAGINATED_ARTICLES_TEMPLATE_PATH = termplatePath(`paginatedArticles.js`)
const TAG_TEMPLATE_PATH = termplatePath(`tag.js`)
const TAGS_TEMPLATE_PATH = termplatePath(`tags.js`)
const PROJECTS_TEMPLATE_PATH = termplatePath(`projects.js`)
const PROJECT_TEMPLATE_PATH = termplatePath(`project.js`)

const TEMPLATE_TEMPLATE_PATHS = Object.freeze({
  ARTICLE_TEMPLATE_PATH,
  PAGINATED_ARTICLES_TEMPLATE_PATH,
  TAG_TEMPLATE_PATH,
  TAGS_TEMPLATE_PATH,
  PROJECTS_TEMPLATE_PATH,
  PROJECT_TEMPLATE_PATH,
})

module.exports = TEMPLATE_TEMPLATE_PATHS
