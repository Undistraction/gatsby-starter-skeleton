import PropTypes from 'prop-types'
import React from 'react'
import renderListItems from '../../helpers/renderListItems'
import HList from '../lists/HList'
import Tag from './Tag'

const TagList = ({ tags }) => {
  const tagsElements = renderListItems(Tag, `tag`, tags)
  return <HList size="tiny">{tagsElements}</HList>
}

TagList.propTypes = {
  tags: PropTypes.array,
}

TagList.defaultProps = {
  tags: [],
}

export default TagList
