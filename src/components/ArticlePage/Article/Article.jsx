import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import TagList from '../../shared/TagList'
import HTMLText from '../../shared/HTMLText'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import {
  markdownItem,
  next,
  previous,
  frontmatterTitle,
  fieldsSlug,
  fieldsTags,
} from '../../helpers/markdown'
import NextPreviousNav from '../../shared/NextPreviousNav'

const Layout = styled.article`
  ${flexVertical};
  ${spaceChildrenV(`1ru`)};
`
const Article = ({ data }) => {
  const article = markdownItem(data)
  const previousArticle = previous(data)
  const nextArticle = next(data)

  return (
    <Layout>
      <NextPreviousNav
        previousLabel={frontmatterTitle(previousArticle)}
        nextLabel={frontmatterTitle(nextArticle)}
        previousPath={fieldsSlug(previousArticle)}
        nextPath={fieldsSlug(nextArticle)}
      />
      <HTMLText htmlText={article.html} />
      <TagList tags={fieldsTags(article)} />
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Article
