const {
  map,
  curry,
  compose,
  addIndex,
  splitEvery,
  inc,
  dec,
} = require('ramda');
const { joinWithFSlash } = require('../fileUtils');
const path = require('path');
const { ARTICLES_PATH } = require('../templatePaths');
const queryAllArticleNodes = require('../queries/queryAllArticleNodes');
const reporter = require('../reporter');

const mapWithIndex = addIndex(map);

const markdownNodes = data => data.allMarkdownRemark.edges;
const isFirstPage = index => index === 0;
const isLastPage = (index, total) => index === dec(total);
const fromItemIndex = (perPage, index) => index * inc(perPage) || 1;
const toItemIndex = (perPage, index, groupLength) =>
  index * perPage + groupLength;

const pagePath = curry((name, pageIndex) => {
  const p = pageIndex > 0 ? joinWithFSlash([name, pageIndex]) : name;
  return `/${p}`;
});

const createPaginatedArticlesPage = (
  createPage,
  perPage,
  articlesPath,
  itemsCount
) => (group, groupIndex, allGroups) => {
  const groupsCount = allGroups.length;
  const groupLength = group.length;
  const pageIndex = inc(groupIndex);
  const articlePagePath = pagePath(articlesPath);
  const page = createPage({
    path: articlePagePath(groupIndex),
    component: path.resolve(ARTICLES_PATH),
    context: {
      items: group,
      itemsCount,
      fromItemIndex: fromItemIndex(perPage, groupIndex),
      toItemIndex: toItemIndex(perPage, groupIndex, groupLength),
      pageIndex,
      pageCount: groupsCount,
      previousPath: !isFirstPage(groupIndex)
        ? articlePagePath(dec(groupIndex))
        : null,
      nextPath: !isLastPage(groupIndex, groupsCount)
        ? articlePagePath(inc(groupIndex))
        : null,
    },
  });
  reporter.success(
    `Created Paginated Articles Page ${pageIndex} of ${groupsCount}`
  );
  return page;
};

const createPaginatedArticlesPages = (
  graphql,
  createPage,
  perPage,
  articlesPath
) =>
  queryAllArticleNodes(graphql, articlesPath)
    .then(result => {
      const edges = markdownNodes(result.data);
      const groupedPages = splitEvery(perPage, edges);
      return compose(
        Promise.all,
        mapWithIndex(
          createPaginatedArticlesPage(
            createPage,
            perPage,
            articlesPath,
            edges.length
          )
        )(groupedPages)
      );
    })
    .catch(error => {
      throw new Error(
        `Articles Pages Couldn't Be Created: ${error.toString()}`
      );
    });

module.exports = createPaginatedArticlesPages;
