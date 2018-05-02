import styled from 'styled-components'
import api from '../styles/api'
import linkProps from '../styles/mixins/linkProps'
import TextLink from '../shared/TextLink'

const Button = styled(TextLink)`
  ${linkProps(`c:white`, `c:highlight`)};
  font-weight: normal;
  display: block;
  ${api({
    color: `c:white`,
    backgroundColor: `c:black`,
  })};
`

export default Button
