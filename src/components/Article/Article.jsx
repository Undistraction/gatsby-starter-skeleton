// eslint-disable react/no-danger

import PropTypes from 'prop-types'
import { findIndex, pathEq } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import ArticleNav from '../../components/ArticleNav'
import TagList from '../../components/TagList'
import HTMLText from '../../components/shared/HTMLText'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'

const nodeIdPath = pathEq(['node', 'id'])

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
const ArticleHeader = styled.header``
const ArticleBody = styled.div``
const ArticleFooter = styled.footer``

const Layout = styled.article`
  ${flexVertical};
  ${spaceChildrenV('1ru')};
`
const Article = ({ data }) => {
  const article = data.markdownRemark
  const articles = data.allMarkdownRemark.edges
  const { tags } = article.fields
  return (
    <Layout>
      <ArticleHeader>
        <ArticleNav
          previousArticle={previousArticle(article, articles)}
          nextArticle={nextArticle(article, articles)}
        />
      </ArticleHeader>
      <ArticleBody>
        <HTMLText htmlText={article.html} />
      </ArticleBody>
      <ArticleFooter>
        <TagList tags={tags} />
      </ArticleFooter>
    </Layout>
  )
}

Article.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default Article
