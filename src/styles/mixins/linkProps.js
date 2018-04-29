import { css } from 'styled-components'
import api from '../api'

export default (defaultColor = 'red', highlightColor = 'blue') => css`
  font-weight: bold;
  ${api({
    color: defaultColor,
  })} color: inherit;
  text-decoration: none;

  &:link,
  &:visited,
  &:active {
    ${api({
      color: defaultColor,
    })};
  }

  &:hover {
    ${api({
      color: highlightColor,
    })};
  }
`
