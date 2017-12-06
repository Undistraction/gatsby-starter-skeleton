const reporter = require('gatsby-cli/lib/reporter');
const validatedConfig = require('../config/validatedConfig');

module.exports = {
  success: message =>
    reporter.success(`${validatedConfig().cli.emoji} ${message}`),
};
