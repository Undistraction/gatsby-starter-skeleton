import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageHeader from './PageHeader';
import PageBody from './PageBody';
import flexVertical from '../../styles/mixins/flex-vertical';
import api from '../../styles/api';

export const LayoutHeader = styled.div``;
export const LayoutBody = styled.div``;

const Layout = styled.div`
  ${flexVertical};

  ${LayoutHeader} {
    ${api({
      flex: ['0 0 auto'],
      marginBottom: ['0.5ru'],
    })};
  }

  ${LayoutBody} {
    flex: 1 0 auto;
  }
`;

const Page = ({ title, children }) => (
  <Layout>
    <LayoutHeader>
      <PageHeader title={title} />
    </LayoutHeader>
    <LayoutBody>
      <PageBody>{children}</PageBody>
    </LayoutBody>
  </Layout>
);

Page.displayName = 'Page';

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Page.defaultProps = {
  children: [],
};

export default Page;
