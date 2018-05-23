const validatedConfig = require(`./src/config/validatedConfig`)
const feed = require(`./src/config/plugins/feed`)
const sitemap = require(`./src/config/plugins/sitemap`)
const robots = require(`./src/config/plugins/robots`)
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
  // SSR support for styled components
  `gatsby-plugin-styled-components`,
  // React Helmet support for managing page metadata via a component
  `gatsby-plugin-react-helmet`,
  // Automatically include JS for Twitter embeds
  `gatsby-plugin-twitter`,
  // Add Sharp image processing support
  `gatsby-plugin-sharp`,
  // Add support for image nodes using Sharp
  `gatsby-transformer-sharp`,
  // Support local links in markdown using pushstate
  `gatsby-plugin-catch-links`,
  // Remove trailing slashes from urls
  `gatsby-plugin-remove-trailing-slashes`,
  // Audit page for accessibility issues
  // Toggle to check for accessiblity issues
  `gatsby-plugin-accessibilityjs`,
  // Generate ./sitemap.xml for pages
  sitemap(),
  // Add robots.txt page
  robots(config.data.url),
  // Generate rss.xml for articles
  feed(),
  // Generate favicon from ./src/images/favicon/favicon.png
  favicon(),
  sourceFileSystem(config.structure.resources.articles.path),
  sourceFileSystem(config.structure.resources.projects.path),
  sourceFileSystem(`/pages`),
  remark(config),
]

// Add support for Google analytics if a tracking code was defined in
// site-config.js
if (seo.googleTrackingID) {
  plugins.push(googleAnalytics(seo))
}

module.exports = {
  // pathPrefix: '/example',
  siteMetadata: config,
  plugins,
}
