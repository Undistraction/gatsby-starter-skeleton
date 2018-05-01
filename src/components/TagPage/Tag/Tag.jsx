import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TaggedItemList from './TaggedItemList'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import TagList from '../../shared/TagList'

const Header = styled.header`
  ${flexVertical};
  ${spaceChildrenV('2ru')};
  text-align: center;
`

const Footer = styled.footer``

const Body = styled.div``

const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV('2ru')};
`

const Tag = ({ taggedItems, tag, tags }) =>
  !taggedItems ? (
    <Layout>
      <p>No tags found for: {tag}</p>
    </Layout>
  ) : (
    <Layout>
      <Header>
        {taggedItems.length} items are tagged with {tag}
      </Header>
      <Body>
        <TaggedItemList items={taggedItems} />
      </Body>
      <Footer>
        <TagList tags={tags} />
      </Footer>
    </Layout>
  )

Tag.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  taggedItems: PropTypes.array,
  tag: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array,
}

Tag.defaultProps = {
  taggedItems: [],
  tags: [],
}

export default Tag
