import { css } from 'styled-components'
import api from '../api'

export default (edge = `right`, size = `16`, background = `red`) => {
  const translation = edge === `right` ? `50%` : `-50%`
  // const hyotenuse = Math.sqrt(size *)
  return css`
    ::after {
      content: '';
      z-index: -1;
      position: absolute;
      bottom: 50%;
      transform: translate(${translation}, 50%) rotate(45deg);

      ${edge}: 0;
      ${api({
        width: size,
        height: size,
        background,
      })};
    }
  `
}
