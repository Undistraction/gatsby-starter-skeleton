import { css } from 'styled-components'
import { mixin } from 'cssapi'

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

  &:hover {
    transition: all 0.5s ease-in-out;
    ${api({
      color: highlightColor,
    })};
  }
`

export default mixin(linkProps)
