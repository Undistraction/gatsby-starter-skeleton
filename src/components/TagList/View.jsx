import React from 'react';
import PropTypes from 'prop-types';
import { map, addIndex } from 'ramda';
import Tag from './Tag';
import Layout from './Layout';

const mapIndexed = addIndex(map);
const buildTags = mapIndexed((tag, key) => (
  <li key={key}>
    <Tag tag={tag} />
  </li>
));

const View = ({ tags }) => {
  const tagsElements = buildTags(tags);
  return <Layout>{tagsElements}</Layout>;
};

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array.isRequired,
};

View.displayName = 'TagList';

export default View;
