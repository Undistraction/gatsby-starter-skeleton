import PropTypes from 'prop-types'
import React from 'react'
import { fieldsTags, markdownItem } from '../../helpers/markdown'
import HTMLText from '../../shared/HTMLText'
import TagList from '../../shared/TagList'

const Article = ({ data }) => {
  const article = markdownItem(data)
  return (
    <React.Fragment>
      <HTMLText htmlAst={article.htmlAst} />
      <TagList tags={fieldsTags(article)} />
    </React.Fragment>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Article
