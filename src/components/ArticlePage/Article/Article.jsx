import PropTypes from 'prop-types'
import React from 'react'
import {
  fieldsSlug,
  fieldsTags,
  fieldsTitle,
  markdownItem,
  next,
  previous,
} from '../../helpers/markdown'
import HTMLText from '../../shared/HTMLText'
import NextPreviousNav from '../../shared/NextPreviousNav'
import TagList from '../../shared/TagList'

const Article = ({ data }) => {
  const article = markdownItem(data)
  const previousArticle = previous(data)
  const nextArticle = next(data)

  return (
    <React.Fragment>
      <NextPreviousNav
        previousLabel={fieldsTitle(previousArticle)}
        nextLabel={fieldsTitle(nextArticle)}
        previousPath={fieldsSlug(previousArticle)}
        nextPath={fieldsSlug(nextArticle)}
      />
      <HTMLText htmlText={article.html} />
      <TagList tags={fieldsTags(article)} />
    </React.Fragment>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Article
