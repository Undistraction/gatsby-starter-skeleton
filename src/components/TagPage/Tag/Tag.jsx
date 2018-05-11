import PropTypes from 'prop-types'
import { isEmptyArray } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'
import ResourceList from './ResourceList'

const Header = styled.div`
  text-align: center;
`

const Tag = ({ taggedItems, tag }) => (
  <React.Fragment>
    {isEmptyArray(taggedItems) ? (
      <p>No tags found for: {tag}</p>
    ) : (
      <React.Fragment>
        <Header>
          {taggedItems.length} items are tagged with {tag}
        </Header>
        <ResourceList resources={taggedItems} />
      </React.Fragment>
    )}
  </React.Fragment>
)

Tag.propTypes = {
  taggedItems: PropTypes.array,
  tag: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  taggedItems: [],
}

export default Tag
