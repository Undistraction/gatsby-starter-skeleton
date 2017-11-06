import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import SiteLogo from './SiteLogo';
import SiteTitle from './SiteTitle';
import SiteNav from './SiteNav';
import ViewWrapper from './ViewWrapper';

const View = ({ title }) => (
  <ViewWrapper>
    <Link to="/">
      <SiteLogo />
    </Link>
    <SiteTitle>{title}</SiteTitle>
    <SiteNav />
  </ViewWrapper>
);

View.propTypes = {
  title: PropTypes.string.isRequired,
};

View.displayName = 'SiteHeaderView';

export default View;
