import { css } from 'styled-components'
import mixin from '../../helpers/mixin'

const elementBorder = api => () => css`
  ${api({
    borderLeft: `1ru solid c:text`,
  })};
`

export default mixin(elementBorder)
