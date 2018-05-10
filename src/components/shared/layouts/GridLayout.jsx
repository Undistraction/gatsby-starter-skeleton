import { api } from 'cssapi'
import styled from 'styled-components'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import uiList from '../../styles/mixins/uiList'

const GridLayout = styled.div`
  ${flexHorizontal};
  ${uiList};
  flex-wrap: wrap;
  ${api({
    padding: 0,
    margin: `-0.5ru`,
  })};

  & > * {
    width: 33.333333333%;
    ${api({
      padding: `0.5ru`,
    })};
  }
`

export default GridLayout
