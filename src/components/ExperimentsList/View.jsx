// -----------------------------------------------------------------------------
// Articles List > View
// -----------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { map, addIndex } from 'ramda';
import ExperimentsListItem from './ExperimentsListItem';

const mapIndexed = addIndex(map);
const renderArticles = mapIndexed((experiment, key) => (
  <li key={key}>
    <ExperimentsListItem experiment={experiment} />
  </li>
));

const View = ({ experiments }) => <ul>{renderArticles(experiments)}</ul>;

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  experiments: PropTypes.array.isRequired,
};

View.displayName = 'ArticlesList';

export default View;
