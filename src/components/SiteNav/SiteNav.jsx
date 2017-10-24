import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import CSSModules from 'react-css-modules';
import styles from './SiteNav.module.css';

const SiteNav = ({ className }) => (
  <nav styleName="base" className={className}>
    <Link to="/">Home</Link>
    <Link to="/articles">Articles</Link>
    <Link to="/fonts">Fonts</Link>
    <Link to="/about">About</Link>
  </nav>
);

SiteNav.propTypes = {
  className: PropTypes.string.isRequired,
};

export default CSSModules(SiteNav, styles, { allowMultiple: true });
