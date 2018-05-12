import styled from 'styled-components'
import HList from './HList'

const CommaList = styled(HList)`
  > li {
    ::after {
      content: ',';
    }

    :last-child ::after {
      content: '';
    }
  }
`

export default CommaList
