const { equals } = require('ramda')
// eslint-disable-next-line import/prefer-default-export
const isZero = equals(0)

module.exports = {
  isZero,
}
