const { inc } = require(`ramda`)

const reporter = require(`../reporter`)

const reportCreatePageSuccess = (name, path) =>
  reporter.success(`Created ${name} Page at ${path}`)

const reportCreatePaginatedPageSuccess = (name, path, idx, total) =>
  reporter.success(
    `Created Paginated ${name} Page ${inc(idx)} of ${total} at ${path}`
  )

module.exports = {
  reportCreatePageSuccess,
  reportCreatePaginatedPageSuccess,
}
