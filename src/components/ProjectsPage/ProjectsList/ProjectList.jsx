// -----------------------------------------------------------------------------
// Articles List > View
// -----------------------------------------------------------------------------

import PropTypes from 'prop-types'
import React from 'react'
import renderListItems from '../../helpers/renderListItems'
import ItemGrid from '../../shared/ItemGrid'
import ProjectsListItem from './ProjectsListItem'

const Layout = ItemGrid

const ProjectList = ({ projects }) => (
  <Layout>{renderListItems(ProjectsListItem, `project`, projects)}</Layout>
)

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectList
