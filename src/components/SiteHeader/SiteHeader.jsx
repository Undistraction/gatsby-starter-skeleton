import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import SiteTitle from '../SiteTitle/SiteTitle';
import SiteNav from '../SiteNav/SiteNav';
import styles from './SiteHeader.module.css';

const SiteHeader = ({ className, title }) => (
  <header className={className} styleName="base">
    <SiteTitle className={styles.title} title={title} />
    <SiteNav className={styles.nav} />
  </header>
);

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CSSModules(SiteHeader, styles);
