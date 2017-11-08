// -----------------------------------------------------------------------------
// Articles List > View
// -----------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { map, addIndex } from 'ramda';
import ArticlesListItem from './ArticlesListItem';

const mapIndexed = addIndex(map);
const renderArticles = mapIndexed((article, key) => (
  <li key={key}>
    <ArticlesListItem article={article} />
  </li>
));

const View = ({ articles }) => <ul>{renderArticles(articles)}</ul>;

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
};

View.displayName = 'ArticlesList';

export default View;
