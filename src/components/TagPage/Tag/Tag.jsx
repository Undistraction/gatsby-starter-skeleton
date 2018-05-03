import React from 'react'
import PropTypes from 'prop-types'
import { isEmptyArray } from 'ramda-adjunct'
import styled from 'styled-components'
import ResourceList from './ResourceList'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import TagList from '../../shared/TagList'

const Header = styled.header`
  ${flexVertical};
  ${spaceChildrenV(`2ru`)};
  text-align: center;
`

const Footer = styled.footer``

const Body = styled.div``

const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV(`2ru`)};
`

const Tag = ({ taggedItems, tag, tags }) => (
  <Layout>
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
        <Footer>
          <TagList tags={tags} />
        </Footer>
      </React.Fragment>
    )}
  </Layout>
)

Tag.propTypes = {
  taggedItems: PropTypes.array,
  tag: PropTypes.string.isRequired,

  tags: PropTypes.array,
}

Tag.defaultProps = {
  taggedItems: [],
  tags: [],
}

export default Tag
