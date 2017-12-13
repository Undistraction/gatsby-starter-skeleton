import React from 'react';
import PropTypes from 'prop-types';
import ArticlesNav from '../ArticlesNav';
import Page from '../../components/Page';
import ArticleList from '../../components/ArticleList';
import Metadata from '../../components/Metadata';
import loadMetadata from '../../utils/loadMetadata';
import articlesFrom from '../../data/articlesFrom';

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
    <Page title="Articles">
      <Metadata metadata={loadMetadata('articles')} />
      <header>
        Page {pageIndex} of {pageCount}
        <br />
        {fromItemIndex}–{toItemIndex} of {itemsCount} Articles
        <ArticlesNav previousPath={previousPath} nextPath={nextPath} />
      </header>
      <ArticleList articles={articlesFrom(items)} />
    </Page>
  );
};

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
};

View.displayName = 'ArticlesPageView';

export default View;
