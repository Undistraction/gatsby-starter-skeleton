import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Articles from '../../shared/Articles/Articles'

const Meta = styled.header`
  text-align: center;
`

const SearchResults = ({ articles, title }) => (
  <React.Fragment>
    <React.Fragment>
      <Meta>
        {title[0]} <i>{title[1]}</i>
      </Meta>
      <Articles articles={articles} />
    </React.Fragment>
  </React.Fragment>
)

SearchResults.propTypes = {
  articles: PropTypes.array,
  title: PropTypes.array.isRequired,
}

SearchResults.defaultProps = {
  articles: [],
}

export default SearchResults
