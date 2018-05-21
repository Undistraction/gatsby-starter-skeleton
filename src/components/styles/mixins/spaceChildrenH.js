import { mixin } from 'cssapi'
import { css } from 'styled-components'

const spaceChildrenH = api => values => css`
  & > * + * {
    ${api({ marginLeft: values })};
  }
`

export default mixin(spaceChildrenH)
