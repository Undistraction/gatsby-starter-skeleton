import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './About.module.css';

const About = () => (
  <div>
    <p styleName="base">
      This is a bare-bones skeleton of a static site built with{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby</a>. Please see the project
      README for deails.
    </p>
    <p>
      Made by <a href="http://undistraction.com">Undistraction</a>.
    </p>
  </div>
);

export default CSSModules(About, styles);
