const reporter = require('gatsby-cli/lib/reporter');
const validatedConfig = require('../config/validatedConfig');

const toMessage = message => `${validatedConfig().cli.emoji} ${message}`;

module.exports = {
  success: message => reporter.success(toMessage(message)),
  log: message => reporter.log(toMessage(message)),
};
