const path = require(`path`)
const { compose } = require(`ramda`)
const { mapIndexed } = require(`ramda-adjunct`)
const { throwBuildError } = require(`../utils/errors`)
const { reportCreatePageSuccess } = require(`../utils/reporter`)
const { markdownNodes, slugOfItemAtIndex } = require(`../utils/resources`)
const queryAllResourceNodes = require(`../queries/queryAllResourceNodes`)

const createResourcePage = (slug, idx, nodes, createPage, name, template) => {
  console.log(`----------------------------------------------`)
  console.log(nodes)
  console.log(`----------------------------------------------`)
  console.log(slug)
  console.log(slugOfItemAtIndex(idx - 1, nodes), `<-`)
  console.log(`<-`, slugOfItemAtIndex(idx + 1, nodes))
  return new Promise((resolve, reject) => {
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
}

const createResourcePages = (
  name,
  template,
  graphql,
  createPage,
  articlesDir
) =>
  queryAllResourceNodes(graphql, articlesDir)
    .then(result => {
      const nodes = markdownNodes(result.data)
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
