const path = require(`path`)
const { reportCreatePageSuccess } = require(`../utils/reporter`)
const { throwBuildError } = require(`../utils/errors`)
const { PROJECTS_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryMarkdownNodesByDir = require(`../queries/queryMarkdownNodesByDir`)

const markdownNodes = data => data.allMarkdownRemark.edges

const createProjectsPage = (graphql, createPage, projectDir, projectPath) =>
  queryMarkdownNodesByDir(graphql, projectDir)
    .then(result => {
      const edges = markdownNodes(result.data)
      const projectsCount = edges.length
      createPage({
        path: projectPath,
        component: path.resolve(PROJECTS_TEMPLATE_PATH),
        context: {
          projects: edges,
          projectsCount,
        },
      })
      reportCreatePageSuccess(`Projects`, projectPath)
      return Promise.resolve()
    })
    .catch(throwBuildError(`Projects`))
module.exports = createProjectsPage
