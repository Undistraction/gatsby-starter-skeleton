import PropTypes from 'prop-types'
import React from 'react'
import renderListItems from '../../../helpers/renderListItems'
import VList from '../../../shared/VList'
import ResourceListItem from './ResourceListItem'

const Layout = VList

const ResourceList = ({ resources }) => (
  <Layout>{renderListItems(ResourceListItem, `resource`, resources)}</Layout>
)

ResourceList.propTypes = {
  resources: PropTypes.array.isRequired,
}

export default ResourceList
