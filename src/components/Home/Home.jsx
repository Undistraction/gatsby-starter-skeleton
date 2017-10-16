import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Home.module.css';
import ArticleList from '../ArticleList/ArticleList';

const Home = ({ itemCount, articles }) => {
  console.log('ART', articles);

  return (
    <div styleName="base">
      <header>{itemCount} Articles</header>
      <ArticleList articles={articles} />
    </div>
  );
};

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
  itemCount: PropTypes.number,
};

Home.defaultProps = {
  itemCount: 0,
};

export default CSSModules(Home, styles);
