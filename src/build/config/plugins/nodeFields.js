const { mergeRight } = require(`ramda-adjunct`)
const { pick, path, apply, prop, either, pair, pipe } = require(`ramda`)
const { join } = require(`path`)
const moment = require(`moment`)
const { isTypeMarkdownRemark } = require(`../../utils/node`)
const { preventOrphans } = require(`../../utils/string`)
const { stringListToArray } = require(`../../utils/string`)
const {
  nodeIsMarkdownArticle,
  nodeIsMarkdownProject,
  resourceTypeForMarkdownNode,
} = require(`../../utils/resources`)
const config = require(`../../../site-config`)

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
      {
        name: `type`,
        defaultValue: resourceTypeForMarkdownNode,
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
        defaultValue: prop(`title`),
        transformer: (value, node, context) => {
          const resourcePath = nodeIsMarkdownArticle(node)
            ? context.resources.articles.path
            : context.resources.projects.path
          return pipe(pair(resourcePath), apply(join))(value)
        },
      },
    ],
  },
  {
    predicate: nodeIsMarkdownArticle,
    fields: [
      {
        name: `date`,
        getter: path([`frontmatter`, `date`]),
        defaultValue: () => moment().format(`YYYY-MM-DD`),
      },
      {
        name: `author`,
        getter: path([`frontmatter`, `author`]),
        defaultValue: `Unknown`,
      },
      {
        name: `category`,
        getter: path([`frontmatter`, `category`]),
        defaultValue: `Uncategorised`,
      },
      {
        name: `tags`,
        getter: path([`frontmatter`, `keywords`]),
        defaultValue: ``,
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