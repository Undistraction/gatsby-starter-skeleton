import styled from 'styled-components'
import api from '../styles/api'
import Button from './Button'

const PillButton = styled(Button)`
  ${api({
    fontSize: 's:smallprint',
    borderRadius: '1ru',
    padding: '0.3ru 0.5ru',
  })};
`

export default PillButton
