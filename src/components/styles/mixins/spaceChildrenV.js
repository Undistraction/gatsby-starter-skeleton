import { css } from 'styled-components'
import api from '../api'

const spaceChildrenV = values => css`
  & > * + * {
    ${api({ marginTop: values })};
  }
`

export default spaceChildrenV
