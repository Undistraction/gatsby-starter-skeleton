import PropTypes from 'prop-types'
import { inc } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import ArticleList from './ArticleList/ArticleList'

const ArticlesInfo = styled.div`
  text-align: center;
`

const Articles = ({ articles, pagination }) => {
  const { total, startIndex, endIndex } = pagination

  return (
    <React.Fragment>
      <ArticlesInfo>
        {inc(startIndex)}–{endIndex} of {total}
      </ArticlesInfo>
      <ArticleList articles={articles} />
    </React.Fragment>
  )
}

Articles.propTypes = {
  pagination: PropTypes.object.isRequired,

  articles: PropTypes.array.isRequired,
}

export default Articles
