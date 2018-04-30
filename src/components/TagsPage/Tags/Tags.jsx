import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import flexVertical from '../../../styles/mixins/flexVertical'
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV'
import TagList from '../../shared/TagList'

const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV('2ru')};
`

const Tags = ({ tags }) => (
  <Layout>
    <TagList tags={tags} />
  </Layout>
)

Tags.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array,
}

Tags.defaultProps = {
  tags: [],
}

export default Tags
