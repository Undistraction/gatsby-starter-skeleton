const { map, compose, addIndex, splitEvery, join, inc, dec } = require('ramda');
const path = require('path');
const { ARTICLES_PATH } = require('./templatePaths');
const queryAllArticleNodes = require('./queries/queryAllArticleNodes');
const reporter = require('./reporter');

const mapWithIndex = addIndex(map);
const PREFIX = 'articles';
const joinWithFSlash = join('/');

const markdownNodes = data => data.allMarkdownRemark.edges;
const isFirstPage = index => index === 0;
const isLastPage = (index, total) => index === dec(total);
const fromItemIndex = (perPage, index) => index * inc(perPage);
const toItemIndex = (perPage, index, groupLength) =>
  index * perPage + groupLength;

const pagePath = (name, pageIndex) =>
  pageIndex > 0 ? joinWithFSlash([name, pageIndex]) : name;

const createPaginatedArticlesPage = (createPage, perPage, itemsCount) => (
  group,
  groupIndex,
  allGroups
) => {
  const groupsCount = allGroups.length;
  const groupLength = group.length;
  const pageIndex = inc(groupIndex);
  const page = createPage({
    path: pagePath(PREFIX, groupIndex),
    component: path.resolve(ARTICLES_PATH),
    context: {
      items: group,
      itemsCount,
      fromItemIndex: fromItemIndex(perPage, groupIndex),
      toItemIndex: toItemIndex(perPage, groupIndex, groupLength),
      pageIndex,
      pageCount: groupsCount,
      previousPath: !isFirstPage(groupIndex)
        ? pagePath(PREFIX, dec(groupIndex))
        : null,
      nextPath: !isLastPage(groupIndex, groupsCount)
        ? pagePath(PREFIX, inc(groupIndex))
        : null,
    },
  });
  reporter.success(
    `Created Paginated Articles Page ${pageIndex} of ${groupsCount}`
  );
  return page;
};

const createPaginatedArticlesPages = (graphql, createPage, perPage = 10) =>
  queryAllArticleNodes(graphql)
    .then(result => {
      const edges = markdownNodes(result.data);
      const groupedPages = splitEvery(perPage, edges);
      return compose(
        Promise.all,
        mapWithIndex(
          createPaginatedArticlesPage(createPage, perPage, edges.length)
        )(groupedPages)
      );
    })
    .catch(error => {
      throw new Error(
        `Articles Pages Couldn't Be Created: ${error.toString()}`
      );
    });

module.exports = createPaginatedArticlesPages;
