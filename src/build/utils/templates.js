const path = require(`path`)

const TEMPLATES_DIR = `./src/components/templates/`

// eslint-disable-next-line import/prefer-default-export
const termplatePath = file => path.join(TEMPLATES_DIR, file)

module.exports = {
  termplatePath,
}
