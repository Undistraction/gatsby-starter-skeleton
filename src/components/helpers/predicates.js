import { test } from 'ramda'

// eslint-disable-next-line import/prefer-default-export
export const isInternalLink = test(/^\/(?!\/)/)
