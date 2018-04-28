import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArticlesNav from '../ArticlesNav';
import Page from '../../components/Page';
import ArticleList from '../../components/ArticleList';
import Metadata from '../../components/Metadata';
import loadMetadata from '../../utils/loadMetadata';
import nodesFrom from '../../data/nodesFrom';
import config from '../../config';
import api from '../../styles/api';

const ArticlesPage = ({ pathContext }) => {
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

  const Header = styled.header`
    ${api({
      borderBottom: ['1 c:black solid'],
      marginBottom: ['1ru'],
    })};
  `;

  return (
    <Page title={config.structure.articles.name}>
      <Metadata metadata={loadMetadata('articles')} />
      <Header>
        Page {pageIndex} of {pageCount}
        <br />
        {fromItemIndex}–{toItemIndex} of {itemsCount}{' '}
        {config.structure.articles.name}
        <ArticlesNav previousPath={previousPath} nextPath={nextPath} />
      </Header>
      <ArticleList articles={nodesFrom(items)} />
    </Page>
  );
};

ArticlesPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
};

export default ArticlesPage;
