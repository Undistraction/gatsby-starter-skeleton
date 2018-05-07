import { api, scope } from 'cssapi'
import styled from 'styled-components'

const TitlePrimary = styled.h1`
  font-weight: bold;
  ${api({
    baseline: scope`s:primaryTitle`,
  })};
`

export default TitlePrimary
