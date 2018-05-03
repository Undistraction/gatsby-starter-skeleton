import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV'
import uiList from '../../../styles/mixins/uiList'
import ResourceListItem from './ResourceListItem'
import renderListItems from '../../../helpers/renderListItems'

const Layout = styled.ul`
  ${uiList};
  ${spaceChildrenV([`1ru`])};
`

const ResourceList = ({ resources }) => (
  <Layout>{renderListItems(ResourceListItem, `resource`, resources)}</Layout>
)

ResourceList.propTypes = {
  resources: PropTypes.array.isRequired,
}

export default ResourceList
