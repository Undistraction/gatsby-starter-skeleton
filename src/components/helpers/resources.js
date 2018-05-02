import { test } from 'ramda'

// eslint-disable-next-line import/prefer-default-export
export const resourceType = slug =>
  test(/articles\//, slug) ? `Article` : `Project`
