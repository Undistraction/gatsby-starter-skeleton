import styled from 'styled-components'
import uiList from '../../styles/mixins/uiList'
import HLayout from '../layouts/HLayout'

const HList = styled(HLayout.withComponent(`ul`))`
  ${uiList};
  flex-wrap: wrap;
`

export default HList
