import { mixin, scope } from 'cssapi'
import { css } from 'styled-components'

const dropCap = api => () => css`
  float: left;
  display: block;
  font-weight: normal;

  ${api({
    baseline: scope`s:primaryTitle`,
    background: `g:backgroundInverted`,
    marginRight: `0.2em`,
    padding: [`0.2em 0.4em 0.1em`, `0.2em 0.4em 0.1em`, `0.15em 0.42em 0.08em`],
    color: `c:textInverted`,
  })};
`

export default mixin(dropCap)
