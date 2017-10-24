import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import CSSModules from 'react-css-modules';

import styles from './Home.module.css';

const Home = ({ mainImageSizes, mainText }) => (
  <div styleName="base">
    <Img sizes={mainImageSizes} />
    <div dangerouslySetInnerHTML={{ __html: mainText }} />
  </div>
);

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mainImageSizes: PropTypes.object.isRequired,
  mainText: PropTypes.string.isRequired,
};

export default CSSModules(Home, styles);
