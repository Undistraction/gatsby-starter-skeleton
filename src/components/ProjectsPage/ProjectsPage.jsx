import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import ProjectsList from './ProjectsList'
import nodesFrom from '../../data/nodesFrom'
import {
  projectsPageTitle,
  projectsPageMetadata,
} from '../helpers/siteMetadata'

const ProjectsPage = ({ data, pathContext }) => {
  const { projects } = pathContext

  return (
    <Page title={projectsPageTitle(data)} hasImage={false}>
      <Metadata {...projectsPageMetadata} />
      <ProjectsList projects={nodesFrom(projects)} />
    </Page>
  )
}

ProjectsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
}

export default ProjectsPage
