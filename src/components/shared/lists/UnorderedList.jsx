import { api, scope } from 'cssapi'
import styled from 'styled-components'
import elementBorder from '../../styles/mixins/elementBorder'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'

const UnorderedList = styled.ul`
  ${spaceChildrenV(`0.5rem`)};

  ${api({
    baseline: scope`s:body`,
    paddingLeft: `1ru`,
  })};

  li {
    position: relative;
    list-style: none;
    ${api({
      paddingLeft: `0.5ru`,
    })};

    &::before {
      content: '';
      position: absolute;
      ${api({
        left: `-1ru`,
        height: `1ru`,
      })};
      ${elementBorder()};
    }
  }
`

export default UnorderedList
