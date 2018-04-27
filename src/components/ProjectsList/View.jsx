// -----------------------------------------------------------------------------
// Articles List > View
// -----------------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import { mapIndexed } from 'ramda-adjunct';
import PropTypes from 'prop-types';
import ProjectsListItem from './ProjectsListItem';
import flexHorizontal from '../../styles/mixins/flexHorizontal';
import uiList from '../../styles/mixins/uiList';
import api from '../../styles/api';

const Wrapper = styled.ul`
  ${flexHorizontal};
  ${uiList};
  list-style: none;
  flex-wrap: wrap;
  ${api({
    padding: [0],
    margin: ['-0.5ru'],
  })};

  & > * {
    width: 33.3%;
    ${api({
      padding: ['0.5ru'],
    })};
  }
`;

const renderArticles = mapIndexed((project, key) => (
  <li key={key}>
    <ProjectsListItem project={project} />
  </li>
));

const View = ({ projects }) => <Wrapper>{renderArticles(projects)}</Wrapper>;

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.array.isRequired,
};

View.displayName = 'ArticlesList';

export default View;
