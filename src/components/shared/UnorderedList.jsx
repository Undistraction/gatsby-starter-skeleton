import { api, scope } from 'cssapi'
import styled from 'styled-components'
import spaceChildrenV from '../styles/mixins/spaceChildrenV'

const UnorderedList = styled.ul`
  ${spaceChildrenV(`0.5rem`)};

  ${api({
    baseline: scope`s:body`,
    paddingH: `2ru`,
  })};

  li {
    position: relative;
    list-style: none;
    ${api({
      borderLeft: `1ru solid c:text`,
      paddingLeft: `0.5ru`,
    })};
  }
`

export default UnorderedList
