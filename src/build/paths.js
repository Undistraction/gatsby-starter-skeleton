const { toSlug } = require('./utils/url')

// eslint-disable-next-line import/prefer-default-export
export const tagPath = tag => `/tags/${toSlug(tag)}`
