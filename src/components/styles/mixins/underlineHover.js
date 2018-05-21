import { mixin } from 'cssapi'
import { cond, equals } from 'ramda'
import { css } from 'styled-components'

const startProps = cond([
  [
    equals(`center`),
    () => css`
      left: 50%;
      right: 50%;
    `,
  ],
  [
    equals(`left`),
    () => css`
      left: 0;
      right: 100%;
    `,
  ],
  [
    equals(`right`),
    () => css`
      left: 100%;
      right: 0;
    `,
  ],
])

const underlineHover = api => (color, type = `center`) => css`
  position: relative;
  ::after {
    content: '';
    transition: all 1s ease-in-out;
    z-index: 2;
    position: absolute;
    ${startProps(type)};

    ${api({
      height: `0.2em`,
      bottom: 0,
      background: color,
    })};
  }

  html.feat-no-touchevents &:hover::after {
    left: 0;
    right: 0;
    transition: all 0.5s ease-in-out;
  }
`
export default mixin(underlineHover)
