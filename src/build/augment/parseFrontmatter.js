const {
  isNil,
  apply,
  identity,
  __,
  ifElse,
  forEach,
  curry,
  prop,
  pair,
  find,
  applyTo,
  pipe,
} = require(`ramda`)
const { join } = require(`path`)

const { isFunction, isNotNil } = require(`ramda-adjunct`)
const moment = require(`moment`)
const { stringListToArray } = require(`../utils/string`)
const { nodeIsMarkdownArticle } = require(`../utils/resources`)

const DESCRIPTORS = [
  {
    predicate: nodeIsMarkdownArticle,
    fields: [
      {
        name: `date`,
        getter: node => node.frontmatter.date,
        default: () => moment().format(`YYYY-MM-DD`),
      },
      {
        name: `author`,
        getter: node => node.frontmatter.author,
        default: `Unknown`,
      },
      {
        name: `category`,
        getter: node => node.frontmatter.category,
        default: `Uncategorised`,
      },
      {
        name: `tags`,
        getter: node => node.frontmatter.keywords,
        default: ``,
        parser: stringListToArray,
      },
      {
        name: `slug`,
        getter: node => node.frontmatter.slug,
        default: prop(`title`),
        parser: (value, node, context) =>
          pipe(pair(context.path), apply(join))(value),
      },
      {
        name: `type`,
        getter: () => null,
        parser: (value, node, context) => context.type,
      },
    ],
  },
]

const throwUndefinedFieldError = fieldName => {
  throw new Error(
    `Required Field '${fieldName}' was nil. Did you mean to set a default value`
  )
}

const getDefault = (node, context, descriptor) =>
  ifElse(isFunction, apply(__, [node, context]), identity)(descriptor)

const parseNodeFrontmatterField = curry(
  (node, createNodeField, context, descriptor) => {
    const fieldName = descriptor.name
    const fieldValue =
      descriptor.getter(node) || getDefault(node, context, descriptor.default)

    if (isNil(fieldValue) && node.isRequired) {
      throwUndefinedFieldError(fieldName)
    }

    const value = descriptor.parser
      ? descriptor.parser(fieldValue, node, context)
      : fieldValue

    createNodeField({
      node,
      name: fieldName,
      value,
    })
  }
)

const parseNodeFrontmatter = curry(
  (descriptor, node, createNodeField, context) => {
    forEach(
      parseNodeFrontmatterField(node, createNodeField, context),
      descriptor.fields
    )
  }
)

const doesDescriptorDescribeNode = curry((value, descriptor) =>
  pipe(prop(`predicate`), applyTo(value))(descriptor)
)

const parseFrontmatter = (node, createNodeField, context) => {
  const descriptor = find(doesDescriptorDescribeNode(node), DESCRIPTORS)
  if (descriptor) {
    parseNodeFrontmatter(descriptor, node, createNodeField, context)
  }
}

module.exports = parseFrontmatter
