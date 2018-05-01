import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import api from '../../../styles/api'
import banner from '../../../styles/mixins/banner'
import flexHorizontal from '../../../styles/mixins/flexHorizontal'
import spaceChildrenH from '../../../styles/mixins/spaceChildrenH'
import uiList from '../../../styles/mixins/uiList'
import SiteNavLink from './SiteNavLink/SiteNavLink'

const Layout = styled.nav`
  ${flexHorizontal};
  ${uiList};
  ${spaceChildrenH('1ru')};
  ${banner('bottom')}
  ${api({
    position: 'relative',
    backgroundColor: 'c:black',
    padding: '0.75ru 1ru',
    color: 'c:white',
  })};

  * > {
    z-index: 1;
  }}
`

const SiteNav = ({ pages }) => (
  <Layout>
    <SiteNavLink page={pages.home} />
    <SiteNavLink page={pages.articles} />
    <SiteNavLink page={pages.projects} />
    <SiteNavLink page={pages.tags} />
    <SiteNavLink page={pages.about} />
  </Layout>
)

SiteNav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pages: PropTypes.object.isRequired,
}

export default SiteNav
