import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import linkProps from '../styles/mixins/linkProps'
import underlineHover from '../styles/mixins/underlineHover'
import BaseLink from './BaseLink'

// Filter out styled-component-specific props so they don't trigger Unknown Prop
// Warnings on wrapped React components
// eslint-disable-next-line no-unused-vars
const TextLink = styled(({ underlineType, ...rest }) => <BaseLink {...rest} />)`
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
