const validatedConfig = require(`./src/config/validatedConfig`)
const feed = require(`./src/config/plugins/feed`)
const favicon = require(`./src/config/plugins/favicon`)
const sourceFileSystem = require(`./src/config/plugins/sourceFilesystem`)
const googleAnalytics = require(`./src/config/plugins/googleAnalytics`)
const remark = require(`./src/config/plugins/remark`)

const config = validatedConfig()
const { seo } = config

// -----------------------------------------------------------------------------
// Define Plugins Used
// -----------------------------------------------------------------------------

const plugins = [
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-twitter`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  feed(),
  favicon(),
  sourceFileSystem(config.structure.resources.articles.path),
  sourceFileSystem(`/pages`),
  sourceFileSystem(config.structure.resources.projects.path),
  remark(config),
]

// Add support for Google analytics if a tracking code was defined
if (seo.googleTrackingID) {
  plugins.push(googleAnalytics(seo))
}

module.exports = {
  // pathPrefix: '/example',
  siteMetadata: config,
  plugins,
}
