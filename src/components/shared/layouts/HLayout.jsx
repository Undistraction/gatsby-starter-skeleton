import { scope } from 'cssapi'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import spaceChildrenH from '../../styles/mixins/spaceChildrenH'

const spacingMap = {
  default: `1ru`,
  tiny: `0.25ru`,
  small: `0.5ru`,
  large: `2ru`,
  smallInverse: `-0.5ru`,
}

const HLayout = styled.div`
  ${flexHorizontal};
  ${p => spaceChildrenH(scope`${spacingMap[p.spacing]}`)(p)};
`

HLayout.propTypes = {
  spacing: PropTypes.oneOf([
    `default`,
    `small`,
    `large`,
    `smallInverse`,
    `space`,
    `tiny`,
  ]),
}

HLayout.defaultProps = {
  spacing: `default`,
}

export default HLayout
