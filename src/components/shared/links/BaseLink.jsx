import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { isInternalLink } from '../../helpers/predicates'

const ExternalLink = styled.a``

const InternalLink = styled(Link)``

const BaseLink = ({ children, to, href, ...rest }) => {
  // The link could be external, internal or within the page, using an anchor id
  // (as used with markdown footnotes). If it is an internal link it will
  const path = to || href
  return isInternalLink(path) ? (
    <InternalLink to={path} {...rest}>
      {children}
    </InternalLink>
  ) : (
    <ExternalLink {...rest} href={path} test={path}>
      {children}
    </ExternalLink>
  )
}
BaseLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
}

BaseLink.defaultProps = {
  to: null,
  href: null,
}

export default BaseLink
