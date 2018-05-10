import styled from 'styled-components'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import uiList from '../../styles/mixins/uiList'

const VList = styled.ul`
  ${uiList};
  ${spaceChildrenV([`1ru`])};
`

export default VList
