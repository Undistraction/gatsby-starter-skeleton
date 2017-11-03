const { split, map, trim, compose } = require('ramda');

const splitOnComma = split(',');
const trimAll = map(trim);

const listToArray = compose(trimAll, splitOnComma);

module.exports = listToArray;
