import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import ArrowButtonLink from '../shared/ArrowButtonLink'

export const LayoutPrevious = styled.div``
export const LayoutNext = styled.div``

const Layout = styled.nav`
  ${flexHorizontal};

  ${LayoutNext} {
    margin-left: auto;
  }

  ${LayoutPrevious} {
    margin-right: auto;
  }

  ${LayoutNext}, ${LayoutPrevious} {
    flex: 0 0 auto;
  }
`

const previousArticleMarkup = previousArticle =>
  previousArticle ? (
    <ArrowButtonLink to={previousArticle.fields.slug} direction="left">
      {previousArticle.frontmatter.title}
    </ArrowButtonLink>
  ) : (
    ''
  )

const nextArticleMarkup = nextArticle =>
  nextArticle ? (
    <ArrowButtonLink to={nextArticle.fields.slug} direction="right">
      {nextArticle.frontmatter.title}
    </ArrowButtonLink>
  ) : (
    ''
  )

const ArticleNav = ({ previousArticle, nextArticle }) => (
  <Layout>
    <LayoutPrevious>{previousArticleMarkup(previousArticle)}</LayoutPrevious>
    <LayoutNext>{nextArticleMarkup(nextArticle)}</LayoutNext>
  </Layout>
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
