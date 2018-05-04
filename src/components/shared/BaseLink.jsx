import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { isInternalLink } from '../helpers/predicates'

const ExternalLink = styled.a``

const InternalLink = styled(Link)``

const BaseLink = ({ children, to, ...rest }) =>
  isInternalLink(to) ? (
    <InternalLink to={to} {...rest}>
      {children}
    </InternalLink>
  ) : (
    <ExternalLink {...rest} href={to}>
      {children}
    </ExternalLink>
  )

BaseLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default BaseLink
