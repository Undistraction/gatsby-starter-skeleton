import { css } from 'styled-components'

const insetBorder = api => css`
  ::before {
    content: '';
    position: absolute;
    z-index: 0;
    ${api({
      offset: `0.5ru`,
      border: `1px solid c:borderColor`,
    })};
  }
`

export default insetBorder
