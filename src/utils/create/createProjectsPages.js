const { map, compose } = require('ramda');
const path = require('path');
const reporter = require('../reporter');
const { prefixWithFSlash } = require('../fileUtils');

const { PROJECT_PATH } = require('../templatePaths');
const queryAllProjectNodes = require('../queries/queryAllProjectNodes');

const markdownNodes = data => data.allMarkdownRemark.edges;

const createExperimentPage = (node, createPage) =>
  new Promise((resolve, reject) => {
    const { fields } = node;
    const { slug } = fields;
    try {
      createPage({
        path: prefixWithFSlash(slug),
        component: path.resolve(PROJECT_PATH),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug,
        },
      });
    } catch (error) {
      reject(error);
    }
    reporter.success(`Created Experiment Page at slug '${slug}'.`);
    resolve();
  });

const createProjectsPages = (graphql, createPage, projectsPath) =>
  queryAllProjectNodes(graphql, projectsPath)
    .then(result =>
      compose(
        Promise.all,
        map(({ node }) => createExperimentPage(node, createPage))
      )(markdownNodes(result.data))
    )
    .catch(error => {
      throw new Error(
        `Experiments Pages Couldn't Be Created: ${error.toString()}`
      );
    });

module.exports = createProjectsPages;
