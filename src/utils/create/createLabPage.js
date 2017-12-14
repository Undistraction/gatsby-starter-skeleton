const path = require('path');
const { LAB_PATH } = require('../templatePaths');
const queryAllExperimentNodes = require('../queries/queryAllExperimentNodes');
const reporter = require('../reporter');

const markdownNodes = data => data.allMarkdownRemark.edges;

const createLabPage = (graphql, createPage, labPath) =>
  queryAllExperimentNodes(graphql, labPath)
    .then(result => {
      const edges = markdownNodes(result.data);
      const experimentsCount = edges.length;
      createPage({
        path: labPath,
        component: path.resolve(LAB_PATH),
        context: {
          experiments: edges,
          experimentsCount,
        },
      });
      reporter.success(
        `Created Labs Page with ${experimentsCount} experiments`
      );
      return Promise.resolve();
    })
    .catch(error => {
      throw new Error(`Labs Page Couldn't Be Created: ${error.toString()}`);
    });

module.exports = createLabPage;
