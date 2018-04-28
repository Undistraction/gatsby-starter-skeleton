import React from 'react';
import styled from 'styled-components';
import { mapIndexed } from 'ramda-adjunct';
import PropTypes from 'prop-types';
import ArticlesListItem from './ArticlesListItem';
import uiList from '../../styles/mixins/uiList';
import spaceChildrenV from '../../styles/mixins/spaceChildrenV';

const renderListItems = mapIndexed((article, key) => (
  <li key={key}>
    <ArticlesListItem article={article} />
  </li>
));

const View = styled.ul`
  ${uiList};
  ${spaceChildrenV(['1ru'])};
`;

const ArticlesList = ({ articles }) => <View>{renderListItems(articles)}</View>;

ArticlesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
};

ArticlesList.displayName = 'ArticlesList';

export default ArticlesList;
