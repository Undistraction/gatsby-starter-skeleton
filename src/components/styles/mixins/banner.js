import { mixin } from 'cssapi'
import { css } from 'styled-components'

const banner = api => (edge = `top`) => css`
  z-index: 1;
  position: relative;

  ${api({
    background: `g:backgroundInverted`,
    color: `c:textInverted`,
    borderRadius: `0.1ru`,
  })};

  ::before {
    content: '';
    z-index: -1;
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

export default mixin(banner)
