import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ArticleList from './ArticleList/ArticleList'
import nodesFrom from '../../../data/nodesFrom'
import api from '../../styles/api'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import ArticlesNav from './ArticlesNav'

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

const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV(`1ru`)};
`

const Articles = ({ articles, pagination }) => {
  const { total, startIndex, endIndex, previousPath, nextPath } = pagination

  return (
    <Layout>
      <Header>
        <ArticlesNav previousPath={previousPath} nextPath={nextPath} />
        <ArticlesInfo>
          {startIndex}–{endIndex} of {total}
          {` `}
        </ArticlesInfo>
      </Header>
      <ArticleList articles={nodesFrom(articles)} />
    </Layout>
  )
}

Articles.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pagination: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
}

export default Articles
