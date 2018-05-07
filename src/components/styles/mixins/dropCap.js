import { scope } from 'cssapi'
import { css } from 'styled-components'

const dropCap = api => css`
  float: left;
  display: block;
  width: 200px;
  min-height: 100px;
  font-weight: normal;
  color: white;
  vertical-align: bottom;
  ${api({
    baseline: scope`s:megaTitle`,
    background: `g:backgroundInverted`,
    marginRight: `0.3em`,
    padding: `0.2em 0.6em 0.1em`,
  })};
`

export default dropCap
