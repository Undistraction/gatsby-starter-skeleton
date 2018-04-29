import { css } from 'styled-components'
import api from '../api'

export default edge => {
  const helper = edge === 'top' ? 'borderTopRadius' : 'borderBottomRadius'
  return css`
    ${api({
      background: 'c:white',
      [helper]: '2ru',
    })};
  `
}
