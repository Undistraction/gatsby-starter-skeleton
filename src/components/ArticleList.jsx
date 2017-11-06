import React from 'react';
import PropTypes from 'prop-types';
import { map, addIndex } from 'ramda';
import ArticleListItem from './ArticleListItem';

const mapIndexed = addIndex(map);
const renderArticles = mapIndexed((article, key) => (
  <li key={key}>
    <ArticleListItem article={article} />
  </li>
));

const ArticleList = ({ articles }) => <ul>{renderArticles(articles)}</ul>;

ArticleList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
};

export default ArticleList;
