const path = require(`path`)
const { reportCreatePageSuccess } = require(`../utils/reporter`)
const { throwBuildError } = require(`../utils/errors`)
const { PROJECTS_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryMarkdownNodesByDir = require(`../queries/queryMarkdownNodesByDir`)
const { markdownEdges } = require(`../utils/resources`)

const createProjectsPage = (graphql, createPage, projectDir, projectPath) =>
  queryMarkdownNodesByDir(graphql, projectDir)
    .then(result => {
      const edges = markdownEdges(result.data)
      if (!edges) return null
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
