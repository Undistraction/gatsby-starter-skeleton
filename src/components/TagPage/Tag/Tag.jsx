import PropTypes from 'prop-types'
import { isEmptyArray } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import ResourceList from './ResourceList'

const Header = styled.header`
  ${flexVertical};
  ${spaceChildrenV(`2ru`)};
  text-align: center;
`

const Body = styled.div``

const Tag = ({ taggedItems, tag }) => (
  <React.Fragment>
    {isEmptyArray(taggedItems) ? (
      <p>No tags found for: {tag}</p>
    ) : (
      <React.Fragment>
        <Header>
          {taggedItems.length} items are tagged with {tag}
        </Header>
        <Body>
          <ResourceList resources={taggedItems} />
        </Body>
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
  tags: [],
}

export default Tag
