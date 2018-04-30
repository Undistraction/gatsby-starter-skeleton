import { keyframes } from 'styled-components'

const scaleBounce = (max = 1.1, min = 0.95) => keyframes`
	0% {
		transform: scale(1);
  }
  60% {
		transform: scale(${max});
  }

  85% {
		transform: scale(${min});
  }

  100% {
		transform: scale(1);
	}
`

export default scaleBounce
