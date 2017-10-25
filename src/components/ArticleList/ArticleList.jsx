import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { map, addIndex } from 'ramda';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import styles from './ArticleList.module.css';

const mapIndexed = addIndex(map);
const renderArticles = mapIndexed((article, key) => (
  <li key={key}>
    <ArticleListItem article={article} />
  </li>
));

const ArticleList = ({ articles }) => (
  <ul styleName="base">{renderArticles(articles)}</ul>
);

ArticleList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
};

export default CSSModules(ArticleList, styles);
