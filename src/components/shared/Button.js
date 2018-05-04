import styled from 'styled-components'
import BaseLink from '../shared/BaseLink'
import api from '../styles/api'
import linkProps from '../styles/mixins/linkProps'

const Button = styled(BaseLink)`
  ${linkProps(`c:white`, `c:highlight`)};
  font-weight: normal;
  display: block;
  ${api({
    color: `c:white`,
    background: `g:backgroundInverted`,
  })};
`

export default Button
