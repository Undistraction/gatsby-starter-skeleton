import { api, scope } from 'cssapi'
import styled from 'styled-components'

const ContentTitleSecondary = styled.h3`
  font-weight: bold;
  ${api({
    baseline: scope`s:contentSecondaryTitle`,
  })};
`

export default ContentTitleSecondary
