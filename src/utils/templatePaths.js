const path = require('path');

const TEMPLATES_DIR = './src/templates/';

const templatePathForFile = file => path.join(TEMPLATES_DIR, file);

const ARTICLE_PATH = templatePathForFile('article.jsx');
const TAG_PATH = templatePathForFile('tag.jsx');

const TEMPLATE_PATHS = {
  ARTICLE_PATH,
  TAG_PATH,
};

Object.freeze(TEMPLATE_PATHS);

module.exports = TEMPLATE_PATHS;
