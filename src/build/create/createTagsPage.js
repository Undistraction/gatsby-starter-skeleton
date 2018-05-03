const path = require(`path`)
const { pipe, defaultTo } = require(`ramda`)
const { collectUniqueTags } = require(`../utils/tags`)
const { TAGS_TEMPLATE_PATH } = require(`../const/templatePaths`)
const queryAllResourceNodes = require(`../queries/queryAllResourceNodes`)
const { reportCreatePageSuccess } = require(`../utils/reporter`)
const { throwBuildError } = require(`../utils/errors`)

const markdownNodes = data => data.allMarkdownRemark.edges

const createTagsPage = (graphql, createPage, taggedItemPaths, tagsPath) =>
  queryAllResourceNodes(graphql, taggedItemPaths)
    .then(result => {
      const tags = pipe(markdownNodes, collectUniqueTags, defaultTo([]))(
        result.data
      )
      createPage({
        path: tagsPath,
        component: path.resolve(TAGS_TEMPLATE_PATH),
        context: {
          tags,
        },
      })
      reportCreatePageSuccess(`Tags`, tagsPath)
      return Promise.resolve()
    })
    .catch(throwBuildError(`Tags`))

module.exports = createTagsPage
