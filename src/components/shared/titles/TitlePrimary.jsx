import { api, scope } from 'cssapi'
import styled from 'styled-components'

const TitlePrimary = styled.h1`
  ${api({
    fontFamily: `f:title`,
    baseline: scope`s:primaryTitle`,
  })};
`

export default TitlePrimary
