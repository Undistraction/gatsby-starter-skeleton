import PropTypes from 'prop-types'
import styled from 'styled-components'
import linkProps from '../styles/mixins/linkProps'
import underlineHover from '../styles/mixins/underlineHover'
import BaseLink from './BaseLink'

const TextLink = styled(BaseLink)`
  ${linkProps(`c:text`, `c:highlight`)};
  font-weight: bold;
  position: relative;
  display: inline-block;
  ${p => underlineHover(`c:text`, p.underlineType)};
`

TextLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  underlineType: PropTypes.string,
}

TextLink.defaultProps = {
  underlineType: `center`,
}

export default TextLink
