import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import api from '../../../../styles/api'
import linkProps from '../../../../styles/mixins/linkProps'
import Button from '../../../../shared/Button'

const Link = styled(Button).attrs({
  activeClassName: 'isActive',
})`
  ${linkProps('c:white', 'c:highlight')};
  letter-spacing: 0.5px;

  &.isActive {
    ${api({
      color: 'c:highlight',
    })};
  }
`

const SiteNavLink = ({ page }) => (
  <Link exact={page.path === '/'} to={page.path}>
    {page.title}
  </Link>
)

SiteNavLink.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  page: PropTypes.object.isRequired,
}

export default SiteNavLink