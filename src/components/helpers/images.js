import { view, lensPath } from 'ramda'

const lMainImageSizes = lensPath([`mainImageSizes`, `childImageSharp`, `sizes`])

// eslint-disable-next-line import/prefer-default-export
export const mainImageSizes = view(lMainImageSizes)
