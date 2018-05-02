const { multiply, inc, dec } = require(`ramda`)
const { isZero } = require(`./predicates`)

const isFirstPage = isZero

const isLastPage = (index, total) => index === dec(total)

const startIndex = (groupSize, groupIndex) => multiply(groupSize, groupIndex)

const endIndex = (groupSize, index, groupLength) =>
  index * groupSize + groupLength

const previousPath = (articlePagePath, groupIndex) =>
  !isFirstPage(groupIndex) ? articlePagePath(dec(groupIndex)) : null

const nextPath = (articlePagePath, groupIndex, groupTotal) =>
  !isLastPage(groupIndex, groupTotal) ? articlePagePath(inc(groupIndex)) : null

const createPagination = (
  articlePagePath,
  total,
  groupSize,
  group,
  groupIndex,
  groups
) => {
  const groupTotal = groups.length
  const thisGroupSize = group.length

  return {
    total,
    startIndex: startIndex(groupSize, groupIndex),
    endIndex: endIndex(groupSize, groupIndex, thisGroupSize),
    groupIndex,
    groupTotal,
    thisGroupSize,
    previousPath: previousPath(articlePagePath, groupIndex),
    nextPath: nextPath(articlePagePath, groupIndex, groupTotal),
  }
}

module.exports = {
  createPagination,
}
