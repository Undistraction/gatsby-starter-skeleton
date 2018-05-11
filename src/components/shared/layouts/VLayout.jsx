import { scope } from 'cssapi'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'

const sizeMap = {
  default: `1ru`,
  small: `0.5ru`,
  large: `2ru`,
  smallInverse: `-0.5ru`,
}

const VLayout = styled.div`
  ${flexVertical};
  ${p => spaceChildrenV(scope`${sizeMap[p.size]}`)(p)};
`

VLayout.propTypes = {
  size: PropTypes.oneOf([`default`, `small`, `large`, `smallInverse`]),
}

VLayout.defaultProps = {
  size: `default`,
}

export default VLayout
