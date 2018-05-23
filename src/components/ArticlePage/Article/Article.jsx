import PropTypes from 'prop-types'
import React from 'react'
import ArticleHeadMeta from '../../shared/ArticleHeadMeta'
import ArticleFooterMeta from '../../shared/ArticleFooterMeta/ArticleFooterMeta'
import MarkdownContent from '../../shared/MarkdownContent'

const Article = ({ article }) => (
  <React.Fragment>
    <ArticleHeadMeta article={article} />
    <MarkdownContent htmlAst={article.htmlAst} />
    <ArticleFooterMeta article={article} />
  </React.Fragment>
)

Article.propTypes = {
  article: PropTypes.object.isRequired,
}

export default Article
