import styled from 'styled-components'
import { api } from 'cssapi'

export default styled.h2`
  ${api({
    fontFamily: `f:title`,
    baseline: `s:megaTitle`,
    letterSpacing: 1,
  })};
`
