import { concat, over, lensProp } from 'ramda'

// eslint-disable-next-line import/prefer-default-export
export const addTitleToMetadata = (metadata, tag) =>
  over(lensProp(`title`), concat(tag), metadata)
