const Joi = require(`joi`)
const schema = require(`./schema`)

module.exports = config =>
  Joi.validate(config, schema, { convert: false }, (error, value) => {
    if (error) {
      throw new Error(`Config Validation Failed: ${error.toString()}`)
    }
    return value
  })
