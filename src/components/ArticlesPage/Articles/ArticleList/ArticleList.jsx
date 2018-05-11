import PropTypes from 'prop-types'
import React from 'react'
import renderListItems from '../../../helpers/renderListItems'
import VList from '../../../shared/lists/VList'
import ArticlesListItem from './ArticlesListItem'

const ArticlesList = ({ articles }) => (
  <VList>{renderListItems(ArticlesListItem, `article`, articles)}</VList>
)

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default ArticlesList
