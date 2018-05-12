import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import elementBorder from '../../styles/mixins/elementBorder'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'

const scaleMap = {
  default: `body`,
  small: `smallprint`,
}

const UnorderedList = styled.ul`
  ${spaceChildrenV(`0.5rem`)};

  ${p =>
    api({
      baseline: scope`s:${scaleMap[p.size]} 1`,
      paddingLeft: scope`1ru`,
    })(p)};

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

UnorderedList.propTypes = {
  size: PropTypes.string,
}

UnorderedList.defaultProps = {
  size: `default`,
}

export default UnorderedList
