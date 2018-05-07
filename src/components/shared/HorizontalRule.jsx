import { api } from 'cssapi'
import styled from 'styled-components'

const HorizontalRule = styled.hr`
  border: none;
  position: relative;
  margin-bottom: 0;
  ${api({
    borderTop: `1px solid c:lightGrey`,
  })};
`

export default HorizontalRule
