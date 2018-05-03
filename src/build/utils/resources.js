const { view, lensIndex, lensPath, compose, pluck } = require(`ramda`)
const { inRange } = require(`ramda-adjunct`)
const validatedConfig = require(`../../config/validatedConfig`)
const { isTypeMarkdownRemark } = require(`./node`)

const { resources } = validatedConfig().structure

const ARTICLES_REGEXP = new RegExp(`content/${resources.articles.directory}/`)
const PROJECT_REGEXP = new RegExp(`content/${resources.projects.directory}/`)

const isArticleByPath = filepath => ARTICLES_REGEXP.test(filepath)
const isProjectByPath = filepath => PROJECT_REGEXP.test(filepath)

const nodeIsMarkdownArticle = node =>
  isTypeMarkdownRemark(node) && isArticleByPath(node.fileAbsolutePath)

const nodeIsMarkdownProject = node =>
  isTypeMarkdownRemark(node) && isProjectByPath(node.fileAbsolutePath)

const lFieldsSlug = lensPath([`fields`, `slug`])

const markdownNodes = data => pluck(`node`, data.allMarkdownRemark.edges)

const slugOfItemAtIndex = (idx, nodes) => {
  if (!inRange(0, nodes.length, idx)) return null
  return view(compose(lensIndex(idx), lFieldsSlug))(nodes)
}

module.exports = {
  nodeIsMarkdownArticle,
  nodeIsMarkdownProject,
  markdownNodes,
  slugOfItemAtIndex,
}
