import { api } from 'cssapi'
import PropTypes from 'prop-types'
import { inc } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import NextPreviousNav from '../../shared/NextPreviousNav'
import ArticleList from './ArticleList/ArticleList'

const ArticlesInfo = styled.div`
  text-align: center;
`

const Header = styled.header`
  ${api({
    marginBottom: `1ru`,
  })};

  ${ArticlesInfo} {
  }
`

const Body = styled.div``

const Articles = ({ articles, pagination }) => {
  const { total, startIndex, endIndex, previousPath, nextPath } = pagination

  return (
    <React.Fragment>
      <Header>
        <NextPreviousNav
          previousLabel="Newer"
          previousPath={previousPath}
          nextLabel="Older"
          nextPath={nextPath}
        />
        <ArticlesInfo>
          {inc(startIndex)}–{endIndex} of {total}
        </ArticlesInfo>
      </Header>
      <Body>
        <ArticleList articles={articles} />
      </Body>
    </React.Fragment>
  )
}

Articles.propTypes = {
  pagination: PropTypes.object.isRequired,

  articles: PropTypes.array.isRequired,
}

export default Articles
