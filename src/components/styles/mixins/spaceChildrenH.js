import { css } from 'styled-components'
import api from '../api'

const spaceChildrenH = values => css`
  & > * + * {
    ${api({ marginLeft: values })};
  }
`

export default spaceChildrenH
