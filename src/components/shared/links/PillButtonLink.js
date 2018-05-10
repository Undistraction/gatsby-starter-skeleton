import { api, scope } from 'cssapi'
import styled from 'styled-components'
import Button from './ButtonLink'

const PillButtonLink = styled(Button)`
  ${api({
    baseline: scope`s:smallprint`,
    borderRadius: `1ru`,
    padding: `0 0.5ru`,
  })};
`

export default PillButtonLink
