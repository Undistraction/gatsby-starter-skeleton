const path = require('path');

const TEMPLATES_DIR = './src/templates/';

const templatePathForFile = file => path.join(TEMPLATES_DIR, file);

const ARTICLE_PATH = templatePathForFile('article.js');
const ARTICLES_PATH = templatePathForFile('articles.js');
const TAG_PATH = templatePathForFile('tag.js');
const PROJECTS_PATH = templatePathForFile('projects.js');
const PROJECT_PATH = templatePathForFile('project.js');

const TEMPLATE_PATHS = {
  ARTICLE_PATH,
  ARTICLES_PATH,
  TAG_PATH,
  PROJECTS_PATH,
  PROJECT_PATH,
};

Object.freeze(TEMPLATE_PATHS);

module.exports = TEMPLATE_PATHS;
