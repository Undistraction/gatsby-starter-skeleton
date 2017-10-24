import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import ArticleList from '../ArticleList/ArticleList';
import styles from './Articles.module.css';

const Articles = ({ itemCount, articles }) => (
  <div>
    <p styleName="base">This site supports many great Features out the box:</p>
    <header>{itemCount} Articles</header>
    <ArticleList articles={articles} />
  </div>
);

Articles.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
  itemCount: PropTypes.number,
};

Articles.defaultProps = {
  itemCount: 0,
};

export default CSSModules(Articles, styles);
