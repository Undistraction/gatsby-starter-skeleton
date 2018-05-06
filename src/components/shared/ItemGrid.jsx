import styled from 'styled-components'
import api from '../styles/api'
import flexHorizontal from '../styles/mixins/flexHorizontal'
import uiList from '../styles/mixins/uiList'

const ItemGrid = styled.ul`
  ${flexHorizontal};
  ${uiList};
  flex-wrap: wrap;
  ${api({
    padding: 0,
    margin: `-0.5ru`,
  })};

  & > * {
    width: 33.3%;
    ${api({
      padding: `0.5ru`,
    })};
  }
`

export default ItemGrid
