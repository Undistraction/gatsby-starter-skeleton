import { mixin } from 'cssapi'
import { css } from 'styled-components'

const arrow = (api, props) => (size = `16`, background = `red`) => {
  const translation = props.direction === `right` ? `50%` : `-50%`
  return css`
    ::after {
      content: '';
      z-index: -1;
      position: absolute;
      bottom: 50%;
      transform: translate(${translation}, 50%) rotate(45deg);

      ${props.direction}: 0;
      
      ${api({
        width: size,
        height: size,
        background,
      })};
    }
  `
}

export default mixin(arrow)
