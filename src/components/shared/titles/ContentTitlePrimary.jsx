import { api, scope } from 'cssapi'
import styled from 'styled-components'

const ContentTitlePrimary = styled.h2`
  font-weight: bold;
  ${api({
    baseline: scope`s:contentPrimaryTitle`,
  })};
`

export default ContentTitlePrimary
