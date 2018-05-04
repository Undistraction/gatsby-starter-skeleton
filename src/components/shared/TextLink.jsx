import PropTypes from 'prop-types'
import styled from 'styled-components'
import linkProps from '../styles/mixins/linkProps'
import underlineHover from '../styles/mixins/underlineHover'
import BaseLink from './BaseLink'

const TextLink = styled(BaseLink)`
  ${linkProps(`c:black`, `c:highlight`)};
  font-weight: bold;
  position: relative;
  display: inline-block;
  ${underlineHover(`c:black`)};
`

TextLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default TextLink
