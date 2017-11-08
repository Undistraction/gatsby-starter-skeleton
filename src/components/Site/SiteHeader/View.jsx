import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import SiteLogo from './SiteLogo';
import SiteTitle from './SiteTitle';
import SiteNav from './SiteNav';
import Layout from './Layout';

const View = ({ title }) => (
  <Layout>
    <Link to="/">
      <SiteLogo />
    </Link>
    <SiteTitle>{title}</SiteTitle>
    <SiteNav />
  </Layout>
);

View.propTypes = {
  title: PropTypes.string.isRequired,
};

View.displayName = 'SiteHeaderView';

export default View;
