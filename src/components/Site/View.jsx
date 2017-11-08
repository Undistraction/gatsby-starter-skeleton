import React from 'react';
import PropTypes from 'prop-types';

import Layout, { LayoutHeader, LayoutBody, LayoutFooter } from './Layout';
import SiteHeader from './SiteHeader';
import SiteBody from './SiteBody';
import SiteFooter from './SiteFooter';

const View = ({ children, data }) => {
  const { siteMetadata: metadata } = data.site;
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
  );
};

View.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default View;
