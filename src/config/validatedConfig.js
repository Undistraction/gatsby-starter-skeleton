const { once } = require('ramda')
const config = require('../config')
const validate = require('./validate')

module.exports = () => once(validate)(config)
