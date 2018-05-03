import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import linkProps from '../styles/mixins/linkProps'
import { isInternalLink } from '../helpers/predicates'

const linkStyles = `
  font-weight: bold;
  position: relative;
  ${linkProps(`c:black`, `c:highlight`)};
`

const ExternalLink = styled.a`
  ${linkStyles};
`

const InternalLink = styled(Link)`
  ${linkStyles};
`

const TextLink = ({ children, to, ...rest }) =>
  isInternalLink(to) ? (
    <InternalLink to={to} {...rest}>
      {children}
    </InternalLink>
  ) : (
    <ExternalLink {...rest} href={to}>
      {children}
    </ExternalLink>
  )

TextLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default TextLink
