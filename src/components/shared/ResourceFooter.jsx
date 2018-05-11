import { api, scope } from 'cssapi'
import styled from 'styled-components'
import defaultBorder from '../styles/mixins/defaultBorder'
import VLayout from './layouts/VLayout'

const ResourceFooter = styled(VLayout.withComponent(`footer`))`
  ${defaultBorder()};
  ${api({
    paddingV: scope`1ru`,
  })};
`

export default ResourceFooter
