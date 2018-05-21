const { termplatePath } = require(`../utils/templates`)

const ARTICLE_TEMPLATE_PATH = termplatePath(`article.js`)
const ARTICLES_TEMPLATE_PATH = termplatePath(`articles.js`)
const TAG_TEMPLATE_PATH = termplatePath(`tag.js`)
const CATEGORY_TEMPLATE_PATH = termplatePath(`category.js`)
const PROJECTS_TEMPLATE_PATH = termplatePath(`projects.js`)
const PROJECT_TEMPLATE_PATH = termplatePath(`project.js`)

const TEMPLATE_TEMPLATE_PATHS = Object.freeze({
  ARTICLE_TEMPLATE_PATH,
  ARTICLES_TEMPLATE_PATH,
  TAG_TEMPLATE_PATH,
  CATEGORY_TEMPLATE_PATH,
  PROJECTS_TEMPLATE_PATH,
  PROJECT_TEMPLATE_PATH,
})

module.exports = TEMPLATE_TEMPLATE_PATHS
