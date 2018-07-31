import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import { merge } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import globalStyles from '../styles/globalStyles'
import blockCenterH from '../styles/mixins/blockCenterH'
import flexVertical from '../styles/mixins/flexVertical'
import SiteBody from './SiteBody'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export const Header = styled.div``
export const Body = styled.div``
export const Footer = styled.div``

const Layout = styled.div`
  ${globalStyles()};

  ${flexVertical};
  ${blockCenterH};
  ${api({
    minHeight: `100vh`,
    maxWidth: 1100,
    minWidth: 300,
  })};

  ${Header}, ${Footer} {
    flex: 0 0 auto;
  }

  ${Body} {
    flex: 2 0 auto;
  }

  ${Footer} {
    ${api({
      padding: scope`3ru 0 2ru`,
    })};
  }
`

const Site = ({ data, children }) => {
  const {
    data: { title, owner, startYear, showCredit },
    structure: { pages, resources },
  } = data.site.siteMetadata

  const pagesData = merge(pages, resources)

  return (
    <Layout>
      <Header>
        <SiteHeader title={title} pages={pagesData} />
      </Header>
      <Body>
        <SiteBody>{children}</SiteBody>
      </Body>
      <Footer>
        <SiteFooter {...{ owner, startYear, showCredit }} />
      </Footer>
    </Layout>
  )
}

Site.propTypes = {
  children: PropTypes.func.isRequired,

  data: PropTypes.object.isRequired,
}

export default Site
