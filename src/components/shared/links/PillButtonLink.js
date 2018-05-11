import { api, scope } from 'cssapi'
import styled from 'styled-components'
import Button from './ButtonLink'

const PillButtonLink = styled(Button)`
  ${api({
    baseline: scope`s:smallprint`,
    borderRadius: scope`1ru`,
    padding: scope`0.25ru 0.5ru`,
  })};
`

export default PillButtonLink
