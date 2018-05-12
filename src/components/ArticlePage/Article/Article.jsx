import PropTypes from 'prop-types'
import React from 'react'
import ArticleHeadMeta from '../../shared/ArticleHeadMeta'
import ArticleFooterMeta from '../../shared/ArticleFooterMeta/ArticleFooterMeta'
import HTMLText from '../../shared/HTMLText'

const Article = ({ article }) => (
  <React.Fragment>
    <ArticleHeadMeta article={article} />
    <HTMLText htmlAst={article.htmlAst} />
    <ArticleFooterMeta article={article} />
  </React.Fragment>
)

Article.propTypes = {
  article: PropTypes.object.isRequired,
}

export default Article
