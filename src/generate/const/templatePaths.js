const path = require('path')

const TEMPLATES_DIR = './src/templates/'

const templatePathForFile = file => path.join(TEMPLATES_DIR, file)

const ARTICLE_TEMPLATE_PATH = templatePathForFile('article.js')
const ARTICLES_TEMPLATE_PATH = templatePathForFile('articles.js')
const TAG_TEMPLATE_PATH = templatePathForFile('tag.js')
const TAGS_TEMPLATE_PATH = templatePathForFile('tags.js')
const PROJECTS_TEMPLATE_PATH = templatePathForFile('projects.js')
const PROJECT_TEMPLATE_PATH = templatePathForFile('project.js')

const TEMPLATE_TEMPLATE_PATHS = {
  ARTICLE_TEMPLATE_PATH,
  ARTICLES_TEMPLATE_PATH,
  TAG_TEMPLATE_PATH,
  TAGS_TEMPLATE_PATH,
  PROJECTS_TEMPLATE_PATH,
  PROJECT_TEMPLATE_PATH,
}

Object.freeze(TEMPLATE_TEMPLATE_PATHS)

module.exports = TEMPLATE_TEMPLATE_PATHS
