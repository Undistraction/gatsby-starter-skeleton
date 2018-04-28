import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mapIndexed } from 'ramda-adjunct';
import Tag from './Tag';
import flexHorizontal from '../../styles/mixins/flexHorizontal';
import uiList from '../../styles/mixins/uiList';
import spaceChildrenH from '../../styles/mixins/spaceChildrenH';

const Layout = styled.ul`
  ${flexHorizontal};
  ${uiList};
  ${spaceChildrenH('1ru')};
`;

const buildTags = mapIndexed((tag, key) => (
  <li key={key}>
    <Tag tag={tag} />
  </li>
));

const TagList = ({ tags }) => {
  const tagsElements = buildTags(tags);
  return <Layout>{tagsElements}</Layout>;
};

TagList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array.isRequired,
};

export default TagList;
