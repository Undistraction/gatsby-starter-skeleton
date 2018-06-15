const { inc } = require(`ramda`)
const reporter = require(`../reporter`)

const reportConfigWasValid = () => reporter.success(`site-config.js was valid`)

const reportCreatePageSuccess = (name, path) =>
  reporter.success(`Created ${name} Page at ${path}`)

const reportCreatePaginatedPageSuccess = (name, path, idx, total) =>
  reporter.success(
    `Created Paginated ${name} Page ${inc(idx)} of ${total} at ${path}`
  )

const reportBuildSuccess = () => reporter.success(`Site was built successfully`)

const reportBuildError = error => reporter.error(`Site build Failed: `, error)

module.exports = {
  reportConfigWasValid,
  reportCreatePageSuccess,
  reportCreatePaginatedPageSuccess,
  reportBuildSuccess,
  reportBuildError,
}
