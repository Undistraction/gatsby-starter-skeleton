import { api, scope } from 'cssapi'
import styled from 'styled-components'

export default styled.h2`
  ${api({
    fontFamily: `f:title`,
    baseline: scope`s:megaTitle`,
    letterSpacing: 1,
  })};
`
