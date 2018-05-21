import { scope } from 'cssapi'
import { css } from 'styled-components'
import { mixin } from 'cssapi'

const elementBorder = api => () => css`
  ${api({
    borderLeft: scope`1ru solid c:text`,
  })};
`

export default mixin(elementBorder)
