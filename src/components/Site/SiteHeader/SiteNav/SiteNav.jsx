import { api } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import banner from '../../../styles/mixins/banner'
import flexHorizontal from '../../../styles/mixins/flexHorizontal'
import spaceChildrenH from '../../../styles/mixins/spaceChildrenH'
import uiList from '../../../styles/mixins/uiList'
import SiteNavLink from './SiteNavLink/SiteNavLink'

const Wrapper = styled.nav``

const Layout = styled.div`
  ${flexHorizontal};
  ${spaceChildrenH([`0.75ru`, `1ru`])};
  ${uiList};
  position: relative;
  z-index: 99;
  ${banner(`bottom`)};
  ${api({
    padding: [`0.5ru`, `0.75ru 1.25ru`],
  })};
`

const SiteNav = ({ pages }) => (
  <Wrapper>
    <Layout>
      <SiteNavLink page={pages.home} />
      <SiteNavLink page={pages.articles} />
      <SiteNavLink page={pages.projects} />
      <SiteNavLink page={pages.about} />
    </Layout>
  </Wrapper>
)

SiteNav.propTypes = {
  pages: PropTypes.object.isRequired,
}

export default SiteNav
