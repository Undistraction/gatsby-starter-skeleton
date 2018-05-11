import { compose, join, lensIndex, over, toUpper } from 'ramda'
import { currentYear } from '../../../demo/project/src/components/helpers/date'

export const joinWithNoSpace = join(``)
export const joinWithEnDash = join(`–`)

export const firstToUpper = compose(
  joinWithNoSpace,
  over(lensIndex(0), toUpper)
)

export const dateRange = startYear => {
  const endYear = currentYear()
  return endYear === startYear ? endYear : joinWithEnDash([startYear, endYear])
}
