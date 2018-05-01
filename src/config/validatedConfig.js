const { once } = require('ramda')
const config = require('../site-config')
const validate = require('./validate')

module.exports = () => once(validate)(config)
