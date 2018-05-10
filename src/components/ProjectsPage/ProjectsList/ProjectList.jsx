// -----------------------------------------------------------------------------
// Articles List > View
// -----------------------------------------------------------------------------

import PropTypes from 'prop-types'
import React from 'react'
import renderListItems from '../../helpers/renderListItems'
import GridLayout from '../../shared/layouts/GridLayout'
import ProjectsListItem from './ProjectsListItem'

const Layout = GridLayout.withComponent(`ul`)

const ProjectList = ({ projects }) => (
  <Layout>{renderListItems(ProjectsListItem, `project`, projects)}</Layout>
)

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectList
