import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './PageHeader.module.css';
import PageTitle from '../PageTitle/PageTitle';

const PageHeader = ({ title, className }) => (
  <header className={className} styleName="base">
    <PageTitle title={title} className={styles.title} />
  </header>
);

PageHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
};

export default CSSModules(PageHeader, styles);
