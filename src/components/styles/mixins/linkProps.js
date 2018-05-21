import { mixin } from 'cssapi'
import { css } from 'styled-components'

const linkProps = api => (defaultColor = `red`, highlightColor = `blue`) => css`
  ${api({
    color: defaultColor,
  })};
  color: inherit;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:link,
  &:visited,
  &:active {
    ${api({
      color: defaultColor,
    })};
  }

  html.feat-no-touchevents &:hover {
    transition: all 0.5s ease-in-out;
    ${api({
      color: highlightColor,
    })};
  }
`

export default mixin(linkProps)
