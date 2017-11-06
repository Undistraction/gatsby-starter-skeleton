import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page';
import ArticleList from '../../components/ArticleList';
import Metadata from '../../components/Metadata';
import loadMetadata from '../../utils/loadMetadata';
import articlesFrom from '../../data/articlesFrom';
import itemCountFrom from '../../data/itemCountFrom';

const View = ({ data }) => (
  <Page title="Articles">
    <Metadata metadata={loadMetadata('articles')} />

    <p>This site supports many great Features out the box:</p>
    <header>{itemCountFrom(data)} Articles</header>
    <ArticleList articles={articlesFrom(data)} />
  </Page>
);

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

View.displayName = 'ArticlesPageView';

export default View;
