import PropTypes from 'prop-types'
import React from 'react'
import renderListItems from '../../../helpers/renderListItems'
import VList from '../../../shared/VList'
import ArticlesListItem from './ArticlesListItem'

const Layout = VList

const ArticlesList = ({ articles }) => (
  <Layout>{renderListItems(ArticlesListItem, `article`, articles)}</Layout>
)

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default ArticlesList
