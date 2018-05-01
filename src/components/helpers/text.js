import { view, lensPath, lensProp, compose } from 'ramda'

const lMainText = lensPath(['mainText', 'childMarkdownRemark', 'html'])
const lMarkdownItem = lensProp('markdownRemark')
const lMarkdownItems = lensPath(['allMarkdownRemark', 'edges'])
const lFrontmatter = lensProp('frontmatter')
const lFields = lensProp('fields')
const lTitle = lensProp('title')
const lMetadata = lensProp('metadata')
const lMarkdownItemFields = compose(lMarkdownItem, lFields)
const lMarkdownItemMetadata = compose(lMarkdownItemFields, lMetadata)
const lMarkdownItemFrontmatter = compose(lMarkdownItem, lFrontmatter)
const lMarkdownItemTitle = compose(lMarkdownItemFrontmatter, lTitle)
const lMainImageSizes = lensPath(['image', 'childImageSharp', 'sizes'])

export const mainText = view(lMainText)
export const markdownItem = view(lMarkdownItem)
export const markdownItems = view(lMarkdownItems)
export const markdownItemFrontmatter = view(lMarkdownItemFrontmatter)
export const markdownItemMetadata = view(lMarkdownItemMetadata)
export const markdownItemTitle = view(lMarkdownItemTitle)
export const markdownItemImageSizes = view(
  lMarkdownItemFrontmatter,
  lMainImageSizes
)
