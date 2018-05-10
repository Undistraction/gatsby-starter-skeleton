import { css } from 'styled-components'

const defaultBorder = api => css`
  border-image-slice: 30;
  border-style: solid;
  ${api({
    borderImageSource: `g:lightFade`,
  })};
`

export default defaultBorder
