import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Site.module.css';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteBody from '../SiteBody/SiteBody';
import SiteFooter from '../SiteFooter/SiteFooter';

const Site = ({ children, data }) => {
  const { siteMetadata: metadata } = data.site;
  return (
    <div styleName="base">
      <SiteHeader className={styles.header} title={metadata.title} />
      <SiteBody className={styles.body}>{children()}</SiteBody>
      <SiteFooter className={styles.footer} metadata={metadata} />
    </div>
  );
};

Site.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default CSSModules(Site, styles);
