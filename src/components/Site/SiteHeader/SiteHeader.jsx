import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SiteLogoLink from './SiteLogoLink';
import SiteTitle from './SiteTitle';
import SiteNav from './SiteNav';
import flexVertical from '../../../styles/mixins/flexVertical';
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV';
import api from '../../../styles/api';

const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV('1ru')};
  align-items: center;
  width: 100%;
  ${api({
    padding: '4ru 0 0.5ru',
  })};

  ${SiteTitle} {
    ${api({
      marginBottom: '0.5ru',
    })};
  }
`;

const SiteHeader = ({ title }) => (
  <Layout>
    <SiteLogoLink />
    <SiteTitle>{title}</SiteTitle>
    <SiteNav />
  </Layout>
);

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SiteHeader;
