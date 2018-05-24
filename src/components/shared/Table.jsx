import { api } from 'cssapi'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;

  thead {
    ${api({
      background: `c:backgroundInvertedStart`,
      color: `c:textInverted`,
      borderColor: `c:textInverted`,
    })};
  }

  th {
    font-weight: normal;
  }
`

export default Table
