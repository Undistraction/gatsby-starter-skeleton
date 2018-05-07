import { api } from 'cssapi'
import styled from 'styled-components'

const BlockQuote = styled.blockquote`
  ${api({
    borderLeft: `1ru solid c:text`,
    paddingLeft: `0.5ru`,
    marginH: `2ru`,
  })};
`

export default BlockQuote
