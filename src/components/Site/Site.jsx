import PropTypes from 'prop-types'
import { merge } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import api from '../styles/api'
import blockCenterH from '../styles/mixins/blockCenterH'
import flexVertical from '../styles/mixins/flexVertical'
import SiteBody from './SiteBody'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export const Header = styled.div``
export const Body = styled.div``
export const Footer = styled.div``

const Layout = styled.div`
  ${flexVertical};
  ${blockCenterH};

  ${api({
    minHeight: `100vh`,
    maxWidth: [1100],
  })};

  ${Header} {
    flex: 0 0 auto;
  }

  ${Body} {
    flex: 2 0 auto;
  }

  ${Footer} {
    flex: 0 0 auto;
    ${api({
      margin: `0 6ru`,
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
        <SiteBody>{children()}</SiteBody>
      </Body>
      <Footer>
        <SiteFooter {...{ owner, startYear, showCredit }} />
      </Footer>
    </Layout>
  )
}

Site.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default Site
