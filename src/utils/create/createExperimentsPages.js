const { map, compose } = require('ramda');
const path = require('path');
const reporter = require('../reporter');
const { prefixWithFSlash } = require('../fileUtils');

const { EXPERIMENT_PATH } = require('../templatePaths');
const queryAllExperimentNodes = require('../queries/queryAllExperimentNodes');

const markdownNodes = data => data.allMarkdownRemark.edges;

const createExperimentPage = (node, createPage) =>
  new Promise((resolve, reject) => {
    const { fields } = node;
    const { slug } = fields;
    try {
      createPage({
        path: prefixWithFSlash(slug),
        component: path.resolve(EXPERIMENT_PATH),
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

const createExperimentsPages = (graphql, createPage, labPath) =>
  queryAllExperimentNodes(graphql, labPath)
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

module.exports = createExperimentsPages;
