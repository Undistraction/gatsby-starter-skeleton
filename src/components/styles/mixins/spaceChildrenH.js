import { css } from 'styled-components'
import mixin from '../../helpers/mixin'

const spaceChildrenH = api => values => css`
  & > * + * {
    ${api({ marginLeft: values })};
  }
`

export default mixin(spaceChildrenH)
