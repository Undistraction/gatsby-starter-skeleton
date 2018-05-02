import styled from 'styled-components'
import spaceChildrenH from '../styles/mixins/spaceChildrenH'
import TextLink from './TextLink'

const IconLink = styled(TextLink)`
  ${spaceChildrenH([`0.25em`])};
`

export default IconLink
