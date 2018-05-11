import styled from 'styled-components'
import uiList from '../../styles/mixins/uiList'
import VLayout from '../layouts/VLayout'

const VList = styled(VLayout.withComponent(`ul`))`
  ${uiList};
`

export default VList
