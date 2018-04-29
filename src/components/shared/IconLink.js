import styled from 'styled-components'
import linkProps from '../../styles/mixins/linkProps'
import spaceChildrenH from '../../styles/mixins/spaceChildrenH'

const IconLink = styled.a`
  ${linkProps('c:black', 'c:white')};
  ${spaceChildrenH(['0.25em'])};
`

export default IconLink
