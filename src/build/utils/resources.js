const validatedConfig = require('../../config/validatedConfig')
const { isTypeMarkdownRemark } = require('./node')

const { resources } = validatedConfig().structure

const ARTICLES_REGEXP = new RegExp(`content/${resources.articles.directory}/`)
const PROJECT_REGEXP = new RegExp(`content/${resources.projects.directory}/`)

const isArticleByPath = filepath => ARTICLES_REGEXP.test(filepath)
const isProjectByPath = filepath => PROJECT_REGEXP.test(filepath)

const nodeIsMarkdownArticle = node =>
  isTypeMarkdownRemark(node) && isArticleByPath(node.fileAbsolutePath)

const nodeIsMarkdownProject = node =>
  isTypeMarkdownRemark(node) && isProjectByPath(node.fileAbsolutePath)

module.exports = {
  nodeIsMarkdownArticle,
  nodeIsMarkdownProject,
}
