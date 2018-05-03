import { lensPath, view, lensProp, compose } from 'ramda'

// -----------------------------------------------------------------------------
// Lenses
// -----------------------------------------------------------------------------

const lSiteMetadata = lensPath([`site`, `siteMetadata`])
const lStructure = lensPath([`structure`])
const lPageMetadata = compose(lSiteMetadata, lensPath([`metadata`]))
const lPageTitleForPage = name =>
  compose(lSiteMetadata, lStructure, lensPath([`pages`, name, `title`]))
const lPageTitleForResource = name =>
  compose(lSiteMetadata, lStructure, lensPath([`resources`, name, `title`]))
export const pageMetadata = name => view(compose(lPageMetadata, lensProp(name)))

// -----------------------------------------------------------------------------
// Views
// -----------------------------------------------------------------------------

const pageTitle = name => view(lPageTitleForPage(name))
const resourceTitle = name => view(lPageTitleForResource(name))

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

export const homePageTitle = pageTitle(`home`)
export const aboutPageTitle = pageTitle(`about`)
export const notFoundPageTitle = pageTitle(`notFound`)
export const articlesPageTitle = resourceTitle(`articles`)
export const projectsPageTitle = resourceTitle(`projects`)
export const tagsPageTitle = resourceTitle(`tags`)

export const homePageMetadata = pageMetadata(`home`)
export const aboutPageMetadata = pageMetadata(`about`)
export const articlesPageMetadata = pageMetadata(`articles`)
export const projectsPageMetadata = pageMetadata(`projects`)
export const tagsPageMetadata = pageMetadata(`tags`)
export const tagPageMetadata = pageMetadata(`tag`)
