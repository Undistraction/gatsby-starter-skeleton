import { css } from 'styled-components'
import api from '../api'

export default diameter => css`
  border-radius: 50%;

  ${api({
    background: `g:backgroundInverted`,
    width: diameter,
    height: diameter,
  })};
`
