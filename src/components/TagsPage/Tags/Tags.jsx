import React from 'react'
import PropTypes from 'prop-types'
import TagList from '../../shared/TagList'

const Tags = ({ tags }) => <TagList tags={tags} />

Tags.propTypes = {
  tags: PropTypes.array,
}

Tags.defaultProps = {
  tags: [],
}

export default Tags
