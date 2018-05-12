import PropTypes from 'prop-types'
import React from 'react'
import ArticleList from './ArticleList/ArticleList'

const Articles = ({ articles }) => (
  <React.Fragment>
    <ArticleList articles={articles} />
  </React.Fragment>
)

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default Articles
