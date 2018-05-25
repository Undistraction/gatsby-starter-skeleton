const path = require(`path`)
const { compose } = require(`ramda`)
const { mapIndexed } = require(`ramda-adjunct`)
const { throwBuildError } = require(`../utils/errors`)
const { reportCreatePageSuccess } = require(`../utils/reporter`)
const {
  markdownEdges,
  pluckNodes,
  slugOfItemAtIndex,
} = require(`../utils/resources`)
const queryMarkdownNodesByDir = require(`../queries/queryMarkdownNodesByDir`)

const createResourcePage = (slug, idx, nodes, createPage, name, template) =>
  new Promise((resolve, reject) => {
    try {
      createPage({
        path: slug,
        component: path.resolve(template),
        context: {
          slug,
          previousSlug: slugOfItemAtIndex(idx - 1, nodes),
          nextSlug: slugOfItemAtIndex(idx + 1, nodes),
        },
      })
    } catch (error) {
      reject(error)
    }
    reportCreatePageSuccess(name, slug)
    resolve()
  })

const createResourcePages = (
  name,
  template,
  graphql,
  createPage,
  articlesDir
) =>
  queryMarkdownNodesByDir(graphql, articlesDir)
    .then(result => {
      const edges = markdownEdges(result.data)
      if (!edges) return null
      const nodes = pluckNodes(edges)
      return compose(
        Promise.all,
        mapIndexed((node, idx) =>
          createResourcePage(
            node.fields.slug,
            idx,
            nodes,
            createPage,
            name,
            template
          )
        )
      )(nodes)
    })
    .catch(throwBuildError(name))

module.exports = createResourcePages
