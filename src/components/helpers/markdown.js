import { view, lensPath, lensProp, compose, pluck } from 'ramda'

// -----------------------------------------------------------------------------
// Lenses
// -----------------------------------------------------------------------------

const lMarkdownItem = lensProp(`markdownRemark`)
const lMarkdownItems = lensPath([`allMarkdownRemark`, `edges`])
const lFrontmatter = lensProp(`frontmatter`)
const lFields = lensProp(`fields`)
const lTitle = lensProp(`title`)
const lSlug = lensProp(`slug`)
const lMetadata = lensProp(`metadata`)
const lNext = lensProp(`next`)
const lPrevious = lensProp(`previous`)
const lMarkdownItemFields = compose(lMarkdownItem, lFields)
const lMarkdownItemMetadata = compose(lMarkdownItemFields, lMetadata)
const lMarkdownItemFrontmatter = compose(lMarkdownItem, lFrontmatter)
const lMarkdownItemTitle = compose(lMarkdownItemFrontmatter, lTitle)
const lImageSizes = lensPath([`image`, `childImageSharp`, `sizes`])

// -----------------------------------------------------------------------------
// Views
// -----------------------------------------------------------------------------

export const htmlText = view(compose(lMarkdownItem, lensProp(`html`)))
export const markdownItem = view(lMarkdownItem)
export const markdownItems = view(lMarkdownItems)
export const markdownItemNodes = compose(pluck(`node`), view(lMarkdownItems))
export const markdownItemFrontmatter = view(lMarkdownItemFrontmatter)
export const markdownItemMetadata = view(lMarkdownItemMetadata)
export const markdownItemTitle = view(lMarkdownItemTitle)
export const markdownItemImageSizes = view(
  compose(lMarkdownItemFrontmatter, lImageSizes)
)
export const frontmatterImageSizes = view(compose(lFrontmatter, lImageSizes))
export const frontmatterTitle = view(compose(lFrontmatter, lTitle))
export const fieldsSlug = view(compose(lFields, lSlug))
export const next = view(lNext)
export const previous = view(lPrevious)
