import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import ArticleList from '../ArticleList/ArticleList';
import styles from './Tags.module.css';

const Tags = ({ itemCount, articles }) => (
  <div>
    <header>{itemCount} Articles</header>
    <ArticleList articles={articles} />
  </div>
);

Tags.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
  itemCount: PropTypes.number,
};

Tags.defaultProps = {
  itemCount: 0,
};

export default CSSModules(Tags, styles);
