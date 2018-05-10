import styled from 'styled-components'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import uiList from '../../styles/mixins/uiList'

const HList = styled.ul`
  ${uiList};
  ${flexHorizontal};
  flex-wrap: wrap;
`

export default HList
