import { scope } from 'cssapi'
import styled from 'styled-components'
import api from '../styles/api'

const TitleSecondary = styled.h2`
  font-weight: bold;
  ${api({
    baseline: scope`s:secondaryTitle`,
  })};
`

export default TitleSecondary
