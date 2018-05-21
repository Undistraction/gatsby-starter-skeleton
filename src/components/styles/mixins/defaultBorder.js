import { map } from 'ramda'
import { ensureArray } from 'ramda-adjunct'
import { css } from 'styled-components'
import { mixin } from 'cssapi'

const defaultBorder = api => (edges = [`top`]) => css`
  border-image-slice: 30;
  border-style: solid;
  border-width: 0;
  ${map(edge => `border-${edge}-width: 1px;`, ensureArray(edges))};
  ${api({
    borderImageSource: `g:lightFade`,
  })};
`

export default mixin(defaultBorder)
