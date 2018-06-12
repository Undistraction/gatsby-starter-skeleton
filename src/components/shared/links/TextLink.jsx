import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import linkProps from '../../styles/mixins/linkProps'
import BaseLink from './BaseLink'

// Filter out styled-component-specific props so they don't trigger Unknown Prop
// Warnings on wrapped React components
// eslint-disable-next-line no-unused-vars
const TextLink = styled(({ underlineType, ...rest }) => <BaseLink {...rest} />)`
  ${linkProps(`c:text`, `c:highlight`)};
  font-weight: bold;
  position: relative;
  display: inline-block;
`

TextLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  underlineType: PropTypes.string,
}

TextLink.defaultProps = {
  underlineType: `center`,
}

TextLink.displayName = `TextLink`

export default TextLink
