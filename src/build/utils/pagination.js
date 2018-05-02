const { curry, inc, dec } = require('ramda')
const { isZero } = require('./predicates')
const { joinWithFSlash } = require('./file')

const isFirstPage = isZero
const isLastPage = (index, total) => index === dec(total)
const fromItemIndex = (perPage, index) => index * inc(perPage) || 1
const toItemIndex = (perPage, index, groupLength) =>
  index * perPage + groupLength

const pagePath = curry(
  (name, pageIndex) =>
    pageIndex > 0 ? joinWithFSlash([name, pageIndex]) : name
)

const createPagination = (
  articlePagePath,
  itemsCount,
  perPage,
  group,
  groupIndex,
  allGroups
) => {
  const groupsCount = allGroups.length
  const groupLength = group.length
  const pageIndex = inc(groupIndex)
  return {
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
  }
}

module.exports = {
  pagePath,
  createPagination,
}
