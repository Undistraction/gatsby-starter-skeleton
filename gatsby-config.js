const validatedConfig = require('./src/config/validatedConfig');
const feed = require('./src/config/plugins/feed');
const favicon = require('./src/config/plugins/favicon');
const sourceFileSystem = require('./src/config/plugins/sourceFilesystem');
const googleAnalytics = require('./src/config/plugins/googleAnalytics');
const remark = require('./src/config/plugins/remark');

const config = validatedConfig();
const { meta, seo } = config;

const plugins = [
  // Use styled-components for CSS-in-JS
  'gatsby-plugin-styled-components',
  // Add react-helmet for changing tags in the page head
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-twitter',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  feed(),
  favicon(),
  sourceFileSystem('articles'),
  sourceFileSystem('pages'),
  remark(config),
];

const siteMetadata = {
  owner: meta.owner,
  // This will be used in the site title
  title: meta.title,
  // This will be used in the site copyright
  startYear: meta.startYear,
  description: 'A description of your site',
  siteUrl: 'http://your-site-here.com',
};

// Add support for Google analytics if a tracking code was defined
if (seo.googleTrackingID) {
  plugins.push(googleAnalytics(seo));
}

module.exports = {
  siteMetadata,
  plugins,
};
