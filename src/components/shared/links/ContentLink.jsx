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
    transition: all 1s ease-in-out;

    ${api({
      height: `0.2em`,
      bottom: 0,
      left: 0,
      right: 0,
      background: `c:backgroundStart`,
    })};
  }

  &:hover ::before {
    left: 50%;
    right: 50%;
    transition: all 0.5s ease-in-out;
  }
`

export default ContentLink
