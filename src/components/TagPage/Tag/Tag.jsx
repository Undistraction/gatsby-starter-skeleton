import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { pluraliseWithNumber } from '../../helpers/formatting'
import Articles from '../../shared/Articles/Articles'

const Meta = styled.header`
  text-align: center;
`

const Tag = ({ articles, articlesTitle, tag }) => (
  <React.Fragment>
    <React.Fragment>
      <Meta>
        {pluraliseWithNumber(articlesTitle, articles.length)} tagged with{` `}
        <i>{tag}</i>
      </Meta>
      <Articles articles={articles} />
    </React.Fragment>
  </React.Fragment>
)

Tag.propTypes = {
  articles: PropTypes.array,
  tag: PropTypes.string.isRequired,
  articlesTitle: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  articles: [],
}

export default Tag
