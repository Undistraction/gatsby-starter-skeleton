const { join, concat } = require('ramda');

const joinWithFSlash = join('/');
const prefixWithFSlash = concat('/');

module.exports = {
  joinWithFSlash,
  prefixWithFSlash,
};
