import { api, scope } from 'cssapi'
import styled from 'styled-components'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import uiList from '../../styles/mixins/uiList'

const GridLayout = styled.div`
  ${flexHorizontal};
  ${uiList};
  flex-wrap: wrap;
  justify-content: space-around;

  & > * {
    ${api({
      width: [`100%`, `calc(50% - (2ru / 2))`, `calc(33.333333% - (2ru / 3))`],
      marginBottom: scope`1ru`,
    })};
  }
`

export default GridLayout
