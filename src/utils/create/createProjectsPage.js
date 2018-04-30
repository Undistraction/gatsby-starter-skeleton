const path = require('path')
const { PROJECTS_PATH } = require('../templatePaths')
const queryAllProjectNodes = require('../queries/queryAllProjectNodes')
const reporter = require('../reporter')
const { prefixWithFSlash } = require('../fileUtils')

const markdownNodes = data => data.allMarkdownRemark.edges

const createProjectsPage = (graphql, createPage, projectPath) =>
  queryAllProjectNodes(graphql, projectPath)
    .then(result => {
      const edges = markdownNodes(result.data)
      const projectsCount = edges.length
      createPage({
        path: prefixWithFSlash(projectPath),
        component: path.resolve(PROJECTS_PATH),
        context: {
          projects: edges,
          projectsCount,
        },
      })
      reporter.success(`Created Projects Page with ${projectsCount} projects`)
      return Promise.resolve()
    })
    .catch(error => {
      throw new Error(`Projects Page Couldn't Be Created: ${error.toString()}`)
    })

module.exports = createProjectsPage
