import PropTypes from 'prop-types'
import React from 'react'
import renderListItems from '../../helpers/renderListItems'
import CommaList from '../lists/CommaList'
import Tag from './Tag'

const TagList = ({ tags }) => {
  const tagsElements = renderListItems(Tag, `tag`, tags)
  return <CommaList spacing="tiny">{tagsElements}</CommaList>
}

TagList.propTypes = {
  tags: PropTypes.array,
}

TagList.defaultProps = {
  tags: [],
}

export default TagList
