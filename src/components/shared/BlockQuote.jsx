import { api } from 'cssapi'
import styled from 'styled-components'
import elementBorder from '../styles/mixins/elementBorder'

const Blockquote = styled.blockquote`
  ${p => elementBorder(p.theme.api)};
  ${api({
    paddingLeft: `0.5ru`,
  })};
`

export default Blockquote
