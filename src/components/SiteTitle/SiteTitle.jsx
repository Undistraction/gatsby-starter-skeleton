import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Link from 'gatsby-link';
import styles from './SiteTitle.module.css';

const SiteTitle = ({ title, className }) => (
  <Link styleName="base" className={className} to="/">
    <div styleName="title">{title}</div>
  </Link>
);

SiteTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CSSModules(SiteTitle, styles);
