import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Home.module.css';
import heroImage from '../../images/2400x1440.png';

const Home = () => (
  <div styleName="base">
    <img src={heroImage} alt="Hero" />
  </div>
);

export default CSSModules(Home, styles);
