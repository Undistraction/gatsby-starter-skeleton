const RESOURCE_TYPE = require(`../const/resourceType`)
const {
  pipe,
  path,
  view,
  lensIndex,
  lensPath,
  compose,
  pluck,
} = require(`ramda`)
const { inRange } = require(`ramda-adjunct`)
const config = require(`../../site-config`)
const { isTypeMarkdownRemark } = require(`./node`)

const { resources } = config.structure

const ARTICLES_REGEXP = new RegExp(`content/${resources.articles.directory}/`)
const PROJECT_REGEXP = new RegExp(`content/${resources.projects.directory}/`)
const PAGE_REGEXP = new RegExp(`pages/`)

const isArticleByPath = filepath => ARTICLES_REGEXP.test(filepath)
const isProjectByPath = filepath => PROJECT_REGEXP.test(filepath)
const isPageByPath = filepath => PAGE_REGEXP.test(filepath)

const nodeIsMarkdownArticle = node =>
  isTypeMarkdownRemark(node) && isArticleByPath(node.fileAbsolutePath)

const nodeIsMarkdownProject = node =>
  isTypeMarkdownRemark(node) && isProjectByPath(node.fileAbsolutePath)

const nodeIsMarkdownPage = node =>
  isTypeMarkdownRemark(node) && isPageByPath(node.fileAbsolutePath)

const resourceTypeForMarkdownNode = node => {
  if (nodeIsMarkdownArticle(node)) return RESOURCE_TYPE.ARTICLE
  if (nodeIsMarkdownProject(node)) return RESOURCE_TYPE.PROJECT
  if (nodeIsMarkdownPage(node)) return RESOURCE_TYPE.PAGE
  return `Unknown`
}

const lFieldsSlug = lensPath([`fields`, `slug`])

const markdownEdges = path([`allMarkdownRemark`, `edges`])

const markdownNodes = pipe(
  path([`allMarkdownRemark`, `edges`]),
  pluck(`node`)
)

const pluckNodes = pluck(`node`)

const slugOfItemAtIndex = (idx, nodes) => {
  if (!inRange(0, nodes.length, idx)) return null
  return view(
    compose(
      lensIndex(idx),
      lFieldsSlug
    )
  )(nodes)
}

module.exports = {
  isArticleByPath,
  nodeIsMarkdownArticle,
  nodeIsMarkdownProject,
  nodeIsMarkdownPage,
  markdownNodes,
  pluckNodes,
  markdownEdges,
  resourceTypeForMarkdownNode,
  slugOfItemAtIndex,
}
