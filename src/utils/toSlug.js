const slugify = require('slugify');

module.exports = source => slugify(source, { lower: true });
