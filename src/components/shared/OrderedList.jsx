import { api } from 'cssapi'
import styled from 'styled-components'
import UnorderedList from './UnorderedList'

const OrderedList = styled(UnorderedList)`
  counter-reset: olItem;

  li:before {
    counter-increment: olItem;
    content: counter(olItem);
    position: absolute;
    text-align: center;
    ${api({
      color: `c:textInverted`,
      width: `1ru`,
      left: `-1ru`,
    })};
  }
`

export default OrderedList
