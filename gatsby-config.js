const validatedConfig = require('./src/config/validatedConfig');
const feed = require('./src/config/plugins/feed');
const favicon = require('./src/config/plugins/favicon');
const sourceFileSystem = require('./src/config/plugins/sourceFilesystem');
const googleAnalytics = require('./src/config/plugins/googleAnalytics');
const remark = require('./src/config/plugins/remark');

const config = validatedConfig();
const { meta, seo } = config;

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
  sourceFileSystem('lab'),
  remark(config),
];

const siteMetadata = {
  owner: meta.owner,
  // This will be used in the site title
  title: meta.title,
  description: meta.description,
  siteUrl: meta.url,
  // This will be used in the site copyright
  startYear: meta.startYear,
};

// Add support for Google analytics if a tracking code was defined
if (seo.googleTrackingID) {
  plugins.push(googleAnalytics(seo));
}

module.exports = {
  siteMetadata,
  plugins,
};
