import PropTypes from 'prop-types'
import { findIndex, pathEq } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import TagList from '../../shared/TagList'
import HTMLText from '../../shared/HTMLText'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import {
  markdownItem,
  markdownItems,
  frontmatterTitle,
  fieldsSlug,
} from '../../helpers/markdown'
import NextPreviousNav from '../../shared/NextPreviousNav'

const nodeIdPath = pathEq([`node`, `id`])

const previousArticle = (article, articles) => {
  const currentId = article.id
  const currentIndex = findIndex(nodeIdPath(currentId))(articles)
  return currentIndex > 0 ? articles[currentIndex - 1].node : null
}

const nextArticle = (article, articles) => {
  const currentId = article.id
  const currentIndex = findIndex(nodeIdPath(currentId))(articles)
  return currentIndex < articles.length - 1
    ? articles[currentIndex + 1].node
    : null
}

const Layout = styled.article`
  ${flexVertical};
  ${spaceChildrenV(`1ru`)};
`
const Article = ({ data }) => {
  const article = markdownItem(data)
  const articles = markdownItems(data)
  const next = nextArticle(article, articles)
  const previous = previousArticle(article, articles)

  const { tags } = article.fields
  return (
    <Layout>
      <NextPreviousNav
        previousLabel={frontmatterTitle(previous)}
        nextLabel={frontmatterTitle(next)}
        previousPath={fieldsSlug(previous)}
        nextPath={fieldsSlug(next)}
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
