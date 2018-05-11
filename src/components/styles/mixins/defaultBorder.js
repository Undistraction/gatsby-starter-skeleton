import { map } from 'ramda'
import { css } from 'styled-components'
import mixin from '../../helpers/mixin'

const defaultBorder = api => (edges = [`top`]) => css`
  border-image-slice: 30;
  border-style: solid;
  border-width: 0;
  ${map(edge => `border-${edge}-width: 1px;`, edges)};
  ${api({
    borderImageSource: `g:lightFade`,
  })};
`

export default mixin(defaultBorder)
