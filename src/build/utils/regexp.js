const { compose, join } = require(`ramda`)
const { ensureArray } = require(`ramda-adjunct`)

const toRegExpAlternatives = alternatives =>
  `(?:${compose(join(`|`), ensureArray)(alternatives)})`

module.exports = {
  toRegExpAlternatives,
}
