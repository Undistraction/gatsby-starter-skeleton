import { api } from 'cssapi'
import PropTypes from 'prop-types'
import { test } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import { isHomePage } from '../../../../helpers/paths'
import Button from '../../../../shared/links/ButtonLink'
import linkProps from '../../../../styles/mixins/linkProps'

const articlesIsActive = (match, location) =>
  match || test(/(categories|tags)/, location.pathname)

const Link = styled(Button).attrs({
  activeClassName: `isActive`,
})`
  ${linkProps(`c:textInverted`, `c:highlightInverted`)};
  background: transparent;
  letter-spacing: 0.5px;
  z-index: 2;

  &.isActive {
    ${api({
      color: `c:activeInverted`,
    })};
  }
`

const SiteNavLink = ({ page }) => {
  const isActive = page.navTitle === `Articles` ? articlesIsActive : null
  return (
    <Link exact={isHomePage(page.path)} to={page.path} isActive={isActive}>
      {page.navTitle}
    </Link>
  )
}

SiteNavLink.propTypes = {
  page: PropTypes.object.isRequired,
}

export default SiteNavLink
