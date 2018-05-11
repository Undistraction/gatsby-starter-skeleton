import PropTypes from 'prop-types'
import React from 'react'
import renderListItems from '../../../helpers/renderListItems'
import VList from '../../../shared/lists/VList'
import ResourceListItem from './ResourceListItem'

const ResourceList = ({ resources }) => (
  <VList>{renderListItems(ResourceListItem, `resource`, resources)}</VList>
)

ResourceList.propTypes = {
  resources: PropTypes.array.isRequired,
}

export default ResourceList
