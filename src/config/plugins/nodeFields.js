const { mergeRight } = require(`ramda-adjunct`)
const { pick, path, apply, prop, either, pair, pipe } = require(`ramda`)
const { join } = require(`path`)
const moment = require(`moment`)
const { isTypeMarkdownRemark } = require(`../../build/utils/node`)
const { preventOrphans } = require(`../../build/utils/string`)
const { stringListToArray } = require(`../../build/utils/string`)
const {
  nodeIsMarkdownArticle,
  nodeIsMarkdownProject,
} = require(`../../build/utils/resources`)
const RESOURCE_TYPE = require(`../../build/const/resourceType`)
const config = require(`../../site-config`)

const { resources } = config.structure

const DEFAULT_METADATA = {
  title: ``,
  description: ``,
  keywords: ``,
}

const descriptors = [
  {
    predicate: isTypeMarkdownRemark,
    fields: [
      {
        name: `title`,
        getter: path([`frontmatter`, `title`]),
        transformer: preventOrphans,
      },
    ],
  },
  {
    predicate: either(nodeIsMarkdownArticle, nodeIsMarkdownProject),
    fields: [
      {
        name: `metadata`,
        getter: pipe(
          prop(`frontmatter`),
          pick([`keywords`, `description`, `title`])
        ),
        transformer: (value = {}) => mergeRight(value, DEFAULT_METADATA),
      },
      {
        name: `slug`,
        getter: path([`frontmatter`, `slug`]),
        default: prop(`title`),
        transformer: (value, node, context) => {
          const resourcePath = nodeIsMarkdownArticle(node)
            ? context.resources.articles.path
            : context.resources.projects.path
          return pipe(pair(resourcePath), apply(join))(value)
        },
      },
      {
        name: `type`,
        transformer: (value, node) =>
          nodeIsMarkdownArticle(node)
            ? RESOURCE_TYPE.ARTICLE
            : RESOURCE_TYPE.PROJECT,
      },
    ],
  },
  {
    predicate: nodeIsMarkdownArticle,
    fields: [
      {
        name: `date`,
        getter: path([`frontmatter`, `date`]),
        default: () => moment().format(`YYYY-MM-DD`),
      },
      {
        name: `author`,
        getter: path([`frontmatter`, `author`]),
        default: `Unknown`,
      },
      {
        name: `category`,
        getter: path([`frontmatter`, `category`]),
        default: `Uncategorised`,
      },
      {
        name: `tags`,
        getter: path([`frontmatter`, `keywords`]),
        default: ``,
        transformer: stringListToArray,
      },
    ],
  },
]

module.exports = () => ({
  resolve: `gatsby-plugin-node-fields`,
  options: {
    context: {
      resources,
    },
    descriptors,
  },
})
