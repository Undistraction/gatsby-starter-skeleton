import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './PageBody.module.css';

const PageBody = ({ children }) => <div styleName="base">{children}</div>;

PageBody.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default CSSModules(PageBody, styles);
