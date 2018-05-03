import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../../styles/api'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import SiteLogoLink from './SiteLogoLink'
import SiteNav from './SiteNav'
import SiteTitle from './SiteTitle'

const Header = styled.div``

const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV(`0.5ru`)};
  align-items: center;
  width: 100%;
  ${api({
    padding: `2.5ru 0 1ru`,
  })};

  ${Header} {
    ${api({
      width: 100,
    })};
  }

  ${SiteTitle} {
    ${api({
      marginBottom: `0.5ru`,
    })};
  }
`

const SiteHeader = ({ title, pages }) => (
  <Layout>
    <Header>
      <SiteLogoLink />
    </Header>
    <SiteTitle>{title}</SiteTitle>
    <SiteNav pages={pages} />
  </Layout>
)

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired,

  pages: PropTypes.object.isRequired,
}

export default SiteHeader
