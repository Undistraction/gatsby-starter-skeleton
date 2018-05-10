import { api } from 'cssapi'
import styled from 'styled-components'
import TextLink from './TextLink'

// Filter out styled-component-specific props so they don't trigger Unknown Prop
// Warnings on wrapped React components
// eslint-disable-next-line no-unused-vars
const ContentLink = styled(TextLink)`
  ::before {
    content: '';
    position: absolute;

    ${api({
      height: `0.2em`,
      bottom: 0,
      left: 0,
      right: 0,
      background: `c:backgroundStart`,
    })};
  }
`

export default ContentLink
