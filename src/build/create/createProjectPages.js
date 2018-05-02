const { map, compose } = require(`ramda`)
const path = require(`path`)
const reporter = require(`../reporter`)
const { PROJECT_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryAllResourceNodes = require(`../queries/queryAllResourceNodes`)

const markdownNodes = data => data.allMarkdownRemark.edges

const createProjectPage = (node, createPage) =>
  new Promise((resolve, reject) => {
    const { fields } = node
    const { slug } = fields
    try {
      createPage({
        path: slug,
        component: path.resolve(PROJECT_TEMPLATE_PATH),
        // Slug is used to find this article in ArticleTempalte GraphQL query
        context: {
          slug,
        },
      })
    } catch (error) {
      reject(error)
    }
    reporter.success(`Created Project Page at slug '${slug}'.`)
    resolve()
  })

const createProjectPages = (graphql, createPage, projectsDir) =>
  queryAllResourceNodes(graphql, projectsDir)
    .then(result =>
      compose(
        Promise.all,
        map(({ node }) => createProjectPage(node, createPage))
      )(markdownNodes(result.data))
    )
    .catch(error => {
      throw new Error(`Projects Pages Couldn't Be Created: ${error.toString()}`)
    })

module.exports = createProjectPages
