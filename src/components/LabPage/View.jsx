import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page';
import ArticleList from '../../components/ArticleList';
import Metadata from '../../components/Metadata';
import loadMetadata from '../../utils/loadMetadata';
import nodesFrom from '../../data/nodesFrom';

const View = ({ pathContext }) => {
  const { experiments } = pathContext;

  return (
    <Page title="Lab">
      <Metadata metadata={loadMetadata('lab')} />
      <ArticleList articles={nodesFrom(experiments)} />
    </Page>
  );
};

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
};

View.displayName = 'ArticlesPageView';

export default View;
