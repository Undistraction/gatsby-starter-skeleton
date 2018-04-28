import React from 'react';
import styled from 'styled-components';
import Link from '../../../shared/Link';
import flexHorizontal from '../../../../styles/mixins/flexHorizontal';
import uiList from '../../../../styles/mixins/uiList';
import spaceChildrenH from '../../../../styles/mixins/spaceChildrenH';
import api from '../../../../styles/api';

const View = styled.nav`
  ${flexHorizontal};
  ${uiList};
  ${spaceChildrenH('1ru')};
  ${api({
    position: 'relative',
    backgroundColor: 'c:black',
    padding: ['0.75ru 1ru'],
    color: ['c:white'],
  })};

  &::before {
    content: '';
    z-index: 1;
    ${api({
      backgroundColor: ['c:black'],
      width: ['1.5ru'],
      height: ['100%'],
      position: ['absolute'],
      top: ['-0.5ru'],
      left: ['-1ru'],
    })};
  }

  &::after {
    content: '';
    z-index: 1;
    ${api({
      backgroundColor: ['c:black'],
      width: ['1.5ru'],
      height: ['100%'],
      position: ['absolute'],
      top: ['-0.5ru'],
      right: ['-1ru'],
    })};
  }
`;

const SiteNav = () => (
  <View>
    <Link to="/">Home</Link>
    <Link to="/articles">Articles</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/about">About</Link>
  </View>
);

export default SiteNav;
