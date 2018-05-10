import { api, scope } from 'cssapi'
import styled from 'styled-components'

const ContentTitleTertiary = styled.h4`
  font-weight: bold;
  ${api({
    baseline: scope`s:contentTertiaryTitle`,
  })};
`

export default ContentTitleTertiary
