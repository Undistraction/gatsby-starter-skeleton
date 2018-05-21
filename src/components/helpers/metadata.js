import { concat, lensProp, over } from 'ramda'

// eslint-disable-next-line import/prefer-default-export
export const addTitleToMetadata = (metadata, s) =>
  over(lensProp(`title`), concat(s), metadata)
