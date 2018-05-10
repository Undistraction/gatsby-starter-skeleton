import { css } from 'styled-components'
import api from '../api'

const banner = (edge = `top`) => css`
  ::before {
    content: '';
    z-index: 1;
    ${api({
      background: `g:backgroundInverted`,
      width: `1.5ru`,
      height: `100%`,
      position: `absolute`,
      [edge]: `-0.2ru`,
      left: `-0.6ru`,
    })};
  }

  ::after {
    content: '';
    z-index: 1;
    ${api({
      background: `g:backgroundInverted`,
      width: `1.5ru`,
      height: `100%`,
      position: `absolute`,
      [edge]: `-0.2ru`,
      right: `-0.6ru`,
    })};
  }
`

export default banner
