import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import PageHeader from '../PageHeader/PageHeader';
import PageBody from '../PageBody/PageBody';
import styles from './Page.module.css';

const Page = ({ title, children }) => {
  return (
    <div styleName="base">
      <PageHeader className={styles.header} title={title} />
      <PageBody className={styles.body}>{children}</PageBody>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Page.defaultProps = {
  children: [],
};

export default CSSModules(Page, styles);
