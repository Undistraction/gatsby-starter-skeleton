import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './PageTitle.module.css';

const PageTitle = ({ title, className }) => (
  <h2 className={className} styleName="base">
    {title}
  </h2>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CSSModules(PageTitle, styles, { allowMultiple: true });
