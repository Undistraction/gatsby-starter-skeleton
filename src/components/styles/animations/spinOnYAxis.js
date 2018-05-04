import { keyframes } from 'styled-components'

const spinOnYAxis = times => keyframes`
	0% {
		transform: rotateY(0);
  }
  100% {
		transform: rotateY(${times * 360}deg);
  }
`

export default spinOnYAxis
