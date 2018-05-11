import { api, scope } from 'cssapi'
import styled from 'styled-components'
import elementBorder from '../styles/mixins/elementBorder'

const Blockquote = styled.blockquote`
  ${elementBorder()};
  ${api({
    paddingLeft: scope`0.5ru`,
  })};
`

export default Blockquote
