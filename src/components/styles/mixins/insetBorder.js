import { css } from 'styled-components'

const insetBorder = api => css`
  ::before {
    content: '';
    position: absolute;
    ${api({
      offset: `0.5ru`,
      border: `1px solid c:backgroundStart`,
    })};
  }
`

export default insetBorder
