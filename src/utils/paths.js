import toSlug from './toSlug'

// eslint-disable-next-line import/prefer-default-export
export const tagPath = tag => `/tags/${toSlug(tag)}`
