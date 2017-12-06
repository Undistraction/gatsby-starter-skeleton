const reporter = require('gatsby-cli/lib/reporter');
const config = require('../config');

module.exports = {
  success: message => reporter.success(`${config.cli.emoji} ${message}`),
};
