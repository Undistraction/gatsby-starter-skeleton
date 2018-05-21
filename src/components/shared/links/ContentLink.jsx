import { api } from 'cssapi'
import styled from 'styled-components'
import TextLink from './TextLink'

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

  html.feat-no-touchevents &:hover::before {
    left: 50%;
    right: 50%;
    transition: all 0.5s ease-in-out;
  }
`

export default ContentLink
