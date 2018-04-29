import React from 'react'
import styled from 'styled-components'
import api from '../../../../styles/api'
import banner from '../../../../styles/mixins/banner'
import flexHorizontal from '../../../../styles/mixins/flexHorizontal'
import linkProps from '../../../../styles/mixins/linkProps'
import spaceChildrenH from '../../../../styles/mixins/spaceChildrenH'
import uiList from '../../../../styles/mixins/uiList'
import Button from '../../../shared/Button'

const SiteNavLink = styled(Button).attrs({
  activeClassName: 'isActive',
})``

const View = styled.nav`
  ${flexHorizontal};
  ${uiList};
  ${spaceChildrenH('1ru')};
  ${banner('bottom')}
  ${api({
    position: 'relative',
    backgroundColor: 'c:black',
    padding: ['0.75ru 1ru'],
    color: ['c:white'],
  })};

  ${SiteNavLink} {
    ${linkProps('c:white', 'c:highlight')}
    z-index: 1;
    letter-spacing: 0.5px;
    &.isActive {
      ${api({
        color: ['c:highlight'],
      })};
    }
  }}
`

const SiteNav = () => (
  <View>
    <SiteNavLink to="/" exact>
      Home
    </SiteNavLink>
    <SiteNavLink to="/articles">Articles</SiteNavLink>
    <SiteNavLink to="/projects">Projects</SiteNavLink>
    <SiteNavLink to="/about">About</SiteNavLink>
  </View>
)

export default SiteNav
