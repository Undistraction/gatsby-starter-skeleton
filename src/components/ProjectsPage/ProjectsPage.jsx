import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import ProjectsList from './ProjectsList'
import config from '../../config'
import nodesFrom from '../../data/nodesFrom'
import loadMetadata from '../../utils/loadMetadata'

const ProjectsPage = ({ pathContext }) => {
  const { projects } = pathContext

  return (
    <Page title={config.structure.projects.name} hasImage={false}>
      <Metadata {...loadMetadata('projects')} />
      <ProjectsList projects={nodesFrom(projects)} />
    </Page>
  )
}

ProjectsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
}

export default ProjectsPage
