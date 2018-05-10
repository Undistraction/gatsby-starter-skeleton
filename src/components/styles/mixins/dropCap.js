import { scope } from 'cssapi'
import { css } from 'styled-components'

const dropCap = api => css`
  float: left;
  display: block;
  font-weight: normal;
  vertical-align: bottom;
  ${api({
    baseline: scope`s:primaryTitle`,
    background: `g:backgroundInverted`,
    marginRight: `0.3em`,
    padding: `0.2em 0.6em 0.1em`,
    color: `c:textInverted`,
  })};
`

export default dropCap
