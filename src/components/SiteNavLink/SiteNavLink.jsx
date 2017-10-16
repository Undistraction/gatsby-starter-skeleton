import React from 'react';
import Link from 'gatsby-link';
import CSSModules from 'react-css-modules';
import styles from './SiteNavLink.module.css';

const SiteNavLink = () => (
  <Link styleName="base" to="/">
    Home
  </Link>
);

export default CSSModules(SiteNavLink, styles);
