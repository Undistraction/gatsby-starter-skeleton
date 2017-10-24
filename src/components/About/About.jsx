import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './About.module.css';

const About = ({ mainText }) => (
  <div dangerouslySetInnerHTML={{ __html: mainText }} />
);

About.propTypes = {
  mainText: PropTypes.string.isRequired,
};

export default CSSModules(About, styles);
