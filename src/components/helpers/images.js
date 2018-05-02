import { lensPath } from 'ramda'

// eslint-disable-next-line import/prefer-default-export
export const lImageSizes = lensPath([`image`, `childImageSharp`, `sizes`])
