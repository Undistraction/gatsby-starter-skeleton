import { mixin, scope } from 'cssapi'
import { css } from 'styled-components'

const elementBorder = api => () => css`
  ${api({
    borderLeft: scope`1ru solid c:text`,
  })};
`

export default mixin(elementBorder)
