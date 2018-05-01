import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../styles/api'
import blockCenterH from '../styles/mixins/blockCenterH'
import flexVertical from '../styles/mixins/flexVertical'
import SiteBody from './SiteBody'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export const LayoutHeader = styled.div``
export const LayoutBody = styled.div``
export const LayoutFooter = styled.div``

const Layout = styled.div`
  ${flexVertical};
  ${blockCenterH};

  ${api({
    minHeight: '100vh',
    maxWidth: [1100],
  })};

  ${LayoutHeader} {
    flex: 0 0 auto;
  }

  ${LayoutBody} {
    flex: 2 0 auto;
  }

  ${LayoutFooter} {
    flex: 0 0 auto;
    ${api({
      margin: '0 6ru',
    })};
  }
`

const Site = ({ children, data }) => {
  const { siteMetadata: metadata } = data.site
  return (
    <Layout>
      <LayoutHeader>
        <SiteHeader title={metadata.title} />
      </LayoutHeader>
      <LayoutBody grow="1">
        <SiteBody>{children()}</SiteBody>
      </LayoutBody>
      <LayoutFooter>
        <SiteFooter metadata={metadata} />
      </LayoutFooter>
    </Layout>
  )
}

Site.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default Site