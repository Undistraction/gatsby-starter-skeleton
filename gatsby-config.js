const validatedConfig = require('./src/config/validatedConfig')
const feed = require('./src/config/plugins/feed')
const favicon = require('./src/config/plugins/favicon')
const sourceFileSystem = require('./src/config/plugins/sourceFilesystem')
const googleAnalytics = require('./src/config/plugins/googleAnalytics')
const remark = require('./src/config/plugins/remark')

const config = validatedConfig()
const { meta, seo } = config
const { site: siteMeta } = meta

// -----------------------------------------------------------------------------
// Define Plugins Used
// -----------------------------------------------------------------------------

const plugins = [
  'gatsby-plugin-styled-components',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-twitter',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  feed(),
  favicon(),
  sourceFileSystem('articles'),
  sourceFileSystem('pages'),
  sourceFileSystem('projects'),
  remark(config),
]

const siteMetadata = {
  // This will be used in the site title
  title: siteMeta.title,
  // Used in the copyright
  owner: siteMeta.owner,
  startYear: siteMeta.startYear,
  // Used in the RSS feed
  description: siteMeta.description,
  siteUrl: siteMeta.url,
}

// Add support for Google analytics if a tracking code was defined
if (seo.googleTrackingID) {
  plugins.push(googleAnalytics(seo))
}

module.exports = {
  siteMetadata,
  plugins,
}
