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

  const { tags } = article.fields
  return (
    <Layout>
      <NextPreviousNav
        previousLabel={frontmatterTitle(previousArticle)}
        nextLabel={frontmatterTitle(nextArticle)}
        previousPath={fieldsSlug(previousArticle)}
        nextPath={fieldsSlug(nextArticle)}
      />
      <HTMLText htmlText={article.html} />
      <TagList tags={tags} />
    </Layout>
  )
}

Article.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default Article
