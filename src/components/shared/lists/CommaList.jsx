import { api, scope } from 'cssapi'
import styled from 'styled-components'

const CommaList = styled.ul`
  display: inline-block;

  > li {
    display: inline-block;

    ::after {
      ${api({
        marginRight: scope`0.25ru`,
      })};
      content: ', ';
    }

    :last-child ::after {
      content: '';
    }
  }
`

export default CommaList
