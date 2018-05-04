import { css } from 'styled-components'
import api from '../api'

export default (defaultColor = `red`, highlightColor = `blue`) => css`
  ${api({
    color: defaultColor,
  })};
  color: inherit;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

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
