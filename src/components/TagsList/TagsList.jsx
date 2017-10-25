import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { map, addIndex } from 'ramda';
import styles from './TagsList.module.css';
import Tag from '../Tag/Tag';

const mapIndexed = addIndex(map);
const buildTags = mapIndexed((tag, key) => (
  <li key={key}>
    <Tag tag={tag} />
  </li>
));

const TagsList = ({ tags }) => {
  const tagsElements = buildTags(tags);
  return <ul styleName="base">{tagsElements}</ul>;
};

TagsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array.isRequired,
};

export default CSSModules(TagsList, styles);
