import { compose, join, lensIndex, over, toUpper } from 'ramda'

// eslint-disable-next-line import/prefer-default-export
export const firstToUpper = compose(join(``), over(lensIndex(0), toUpper))
