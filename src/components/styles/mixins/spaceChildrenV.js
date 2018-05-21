import { css } from 'styled-components'
import { mixin } from 'cssapi'

const spaceChildrenV = api => values => css`
  & > * + * {
    ${api({ marginTop: values })};
  }
`

export default mixin(spaceChildrenV)
