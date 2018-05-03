import React from 'react'
import PropTypes from 'prop-types'
import { inc } from 'ramda'
import styled from 'styled-components'
import ArticleList from './ArticleList/ArticleList'
import api from '../../styles/api'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import NextPreviousNav from '../../shared/NextPreviousNav'

const ArticlesInfo = styled.div`
  text-align: center;
`

const Header = styled.header`
  ${api({
    marginBottom: `1ru`,
  })};

  ${ArticlesInfo} {
    ${api({
      marginTop: `-1.5ru`,
    })};
  }
`

const Body = styled.div``

const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV(`1ru`)};
`

const Articles = ({ articles, pagination }) => {
  const { total, startIndex, endIndex, previousPath, nextPath } = pagination

  return (
    <Layout>
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
    </Layout>
  )
}

Articles.propTypes = {
  pagination: PropTypes.object.isRequired,

  articles: PropTypes.array.isRequired,
}

export default Articles
