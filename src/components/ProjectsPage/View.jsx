import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectsList from '../../components/ProjectsList';
import Metadata from '../../components/Metadata';
import loadMetadata from '../../utils/loadMetadata';
import nodesFrom from '../../data/nodesFrom';
import config from '../../config';

const View = ({ pathContext }) => {
  const { projects } = pathContext;

  return (
    <Page title={config.structure.projects.name}>
      <Metadata metadata={loadMetadata('projects')} />
      <ProjectsList projects={nodesFrom(projects)} />
    </Page>
  );
};

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
};

View.displayName = 'ArticlesPageView';

export default View;
