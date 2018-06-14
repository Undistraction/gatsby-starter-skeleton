const reporter = require(`gatsby-cli/lib/reporter`)
const config = require(`../site-config`)

const toMessage = message => `${config.cli.emoji} ${message}`

module.exports = {
  success: message => reporter.success(toMessage(message)),
  error: message => reporter.error(toMessage(message)),
  log: message => reporter.log(toMessage(message)),
}
