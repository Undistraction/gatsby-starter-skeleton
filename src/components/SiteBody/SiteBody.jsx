import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './SiteBody.module.css';

const SiteBody = ({ children, className }) => (
  <main className={className} styleName="base">
    {children}
  </main>
);

SiteBody.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default CSSModules(SiteBody, styles);
