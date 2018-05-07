import { api, scope } from 'cssapi'
import styled from 'styled-components'
import Button from './Button'

const PillButton = styled(Button)`
  ${api({
    fontSize: scope`s:smallprint`,
    borderRadius: `1ru`,
    padding: `0.25ru 0.5ru`,
  })};
`

export default PillButton
