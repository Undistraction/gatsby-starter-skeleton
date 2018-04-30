import React from 'react'
import PropTypes from 'prop-types'
import { path } from 'ramda'
import NextPreviousNav from '../../../shared/NextPreviousNav'

const ArticleNav = ({ previousArticle, nextArticle }) => (
  <NextPreviousNav
    previousLabel={path(['frontmatter', 'title'], previousArticle)}
    nextLabel={path(['frontmatter', 'title'], nextArticle)}
    previousPath={path(['fields', 'slug'], previousArticle)}
    nextPath={path(['fields', 'slug'], nextArticle)}
  />
)

ArticleNav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  previousArticle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  nextArticle: PropTypes.object,
}

ArticleNav.defaultProps = {
  previousArticle: null,
  nextArticle: null,
}

export default ArticleNav
