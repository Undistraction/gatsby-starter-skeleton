const { curry } = require(`ramda`)

// eslint-disable-next-line import/prefer-default-export
const throwBuildError = curry((name, error) => {
  throw new Error(`${name} Pages Couldn't Be Created: ${error.toString()}`)
})

module.exports = {
  throwBuildError,
}
