import { api, scope } from 'cssapi'
import styled from 'styled-components'
import elementBorder from '../../styles/mixins/elementBorder'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'

const UnorderedList = styled.ul`
  ${spaceChildrenV(`0.5rem`)};

  ${api({
    baseline: scope`s:body`,
    paddingLeft: scope`1ru`,
  })};

  li {
    position: relative;
    list-style: none;
    ${api({
      paddingLeft: scope`0.5ru`,
    })};

    &::before {
      content: '';
      position: absolute;
      ${api({
        left: scope`-1ru`,
        height: scope`1ru`,
      })};
      ${elementBorder()};
    }
  }
`

export default UnorderedList
