import { keyframes } from 'styled-components'
import api from '../api'

const directionBounce = direction => keyframes`
	0% {
		${direction}: 0;
  }
  60% {
    ${api({
      [direction]: `-0.5rem`,
    })}
  }

  85% {
    ${api({
      [direction]: `0.2rem`,
    })}
  }

  100% {
		${direction}: 0;
	}
`

export default directionBounce
