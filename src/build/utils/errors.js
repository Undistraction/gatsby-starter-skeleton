const { curry } = require(`ramda`)

const throwBuildError = curry((name, error) => {
  throw new Error(`${name} Pages Couldn't Be Created: ${error.toString()}`)
})

module.exports = {
  throwBuildError,
}
