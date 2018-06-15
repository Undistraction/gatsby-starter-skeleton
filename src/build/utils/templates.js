const path = require(`path`)
const { TEMPLATES_DIR } = require(`../const/paths`)

const termplatePath = file => path.join(TEMPLATES_DIR, file)

module.exports = {
  termplatePath,
}
