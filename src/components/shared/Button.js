import { api } from 'cssapi'
import styled from 'styled-components'
import BaseLink from '../shared/BaseLink'
import linkProps from '../styles/mixins/linkProps'

const Button = styled(BaseLink)`
  ${linkProps(`c:textInverted`, `c:highlight`)};
  font-weight: normal;
  display: block;
  ${api({
    color: `c:textInverted`,
    background: `g:backgroundInverted`,
  })};
`

export default Button
