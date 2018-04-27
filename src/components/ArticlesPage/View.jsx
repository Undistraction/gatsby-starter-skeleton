import React from 'react';
import PropTypes from 'prop-types';
import ArticlesNav from '../ArticlesNav';
import Page from '../../components/Page';
import ArticleList from '../../components/ArticleList';
import Metadata from '../../components/Metadata';
import loadMetadata from '../../utils/loadMetadata';
import nodesFrom from '../../data/nodesFrom';
import config from '../../config';

const View = ({ pathContext }) => {
  const {
    items,
    itemsCount,
    fromItemIndex,
    toItemIndex,
    pageIndex,
    pageCount,
    previousPath,
    nextPath,
  } = pathContext;

  return (
    <Page title={config.structure.articles.name}>
      <Metadata metadata={loadMetadata('articles')} />
      <header>
        Page {pageIndex} of {pageCount}
        <br />
        {fromItemIndex}–{toItemIndex} of {itemsCount}{' '}
        {config.structure.articles.name}
        <ArticlesNav previousPath={previousPath} nextPath={nextPath} />
      </header>
      <ArticleList articles={nodesFrom(items)} />
    </Page>
  );
};

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
};

View.displayName = 'ArticlesPageView';

export default View;
