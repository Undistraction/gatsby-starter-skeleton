import { api, scope } from 'cssapi'
import styled from 'styled-components'

const ContentTitleSecondary = styled.h3`
  ${api({
    baseline: scope`s:contentSecondaryTitle`,
  })};
`

export default ContentTitleSecondary
