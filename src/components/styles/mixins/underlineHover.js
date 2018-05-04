import { css } from 'styled-components'
import api from '../api'

const underlineHover = color => css`
  position: relative;
  ::after {
    content: '';
    transition: all 1s ease-in-out;
    z-index: 2;
    position: absolute;
    left: 50%;
    right: 50%;

    ${api({
      height: `0.3em`,
      bottom: `-0.3em`,
      background: color,
    })};
  }

  :hover::after {
    left: 0;
    right: 0;
    transition: all 0.5s ease-in-out;
  }
`
export default underlineHover
