import { css } from 'styled-components'
import mixin from '../../helpers/mixin'

const circle = api => diameter => css`
  border-radius: 50%;

  ${api({
    background: `g:backgroundInverted`,
    width: diameter,
    height: diameter,
  })};
`

export default mixin(circle)
