const fs = require('fs-extra')
const reporter = require('./reporter')

module.exports = (fromPath, toPath) =>
  fs
    .copy(fromPath, toPath)
    .then(() => {
      reporter.success(`Copied file from '${fromPath}' to '${toPath}'`)
      return Promise.resolve()
    })
    .catch(error =>
      Promise.reject(
        new Error(
          `Error copying file from '${fromPath}' to '${toPath}': ${error}`
        )
      )
    )
