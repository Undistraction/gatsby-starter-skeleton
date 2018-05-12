import { scope } from 'cssapi'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'

const spacingMap = {
  default: `1ru`,
  none: `0`,
  small: `0.5ru`,
  large: `2ru`,
  smallInverse: `-0.5ru`,
}

const VLayout = styled.div`
  ${flexVertical};
  ${p => spaceChildrenV(scope`${spacingMap[p.spacing]}`)(p)};
`

VLayout.propTypes = {
  spacing: PropTypes.oneOf([
    `default`,
    `none`,
    `small`,
    `large`,
    `smallInverse`,
  ]),
}

VLayout.defaultProps = {
  spacing: `default`,
}

export default VLayout
