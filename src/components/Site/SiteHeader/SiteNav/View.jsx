import React from 'react';
import Link from 'gatsby-link';
import HBox from '../../../shared/HBox';

const SiteNav = () => (
  <HBox>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/about">About</Link>
    </nav>
  </HBox>
);

export default SiteNav;
