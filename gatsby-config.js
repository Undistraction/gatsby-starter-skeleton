const config = require(`./src/site-config`)
const feed = require(`./src/build/config/plugins/feed`)
const sitemap = require(`./src/build/config/plugins/sitemap`)
const robots = require(`./src/build/config/plugins/robots`)
const favicon = require(`./src/build/config/plugins/favicon`)
const sourceFileSystem = require(`./src/build/config/plugins/sourceFilesystem`)
const googleAnalytics = require(`./src/build/config/plugins/googleAnalytics`)
const remark = require(`./src/build/config/plugins/remark`)
const nodeFields = require(`./src/build/config/plugins/nodeFields`)
const pageCreator = require(`./src/build/config/plugins/pageCreator`)

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
  // Set directory for pages
  ...pageCreator([`${__dirname}/src/components/pages`]),
  // Generate ./sitemap.xml for pages
  sitemap(),
  // Add robots.txt page
  robots(config.data.url),
  // Generate rss.xml for articles
  feed(),
  // Generate favicon from ./src/images/favicon/favicon.png
  favicon(),
  // Add directories
  sourceFileSystem(config.structure.resources.articles.path),
  sourceFileSystem(config.structure.resources.projects.path),
  sourceFileSystem(`/pages`),
  // Markdown related plugins
  remark(config),
  // Attach and transform fields to nodes
  nodeFields(),
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
