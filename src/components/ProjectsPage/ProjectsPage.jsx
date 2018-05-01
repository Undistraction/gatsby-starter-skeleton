import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import ProjectsList from './ProjectsList'
import nodesFrom from '../../data/nodesFrom'

const ProjectsPage = ({ data, pathContext }) => {
  const metadata = data.site.siteMetadata.metadata.projects
  const { title } = data.site.siteMetadata.structure.resources.projects
  const { projects } = pathContext

  return (
    <Page title={title} hasImage={false}>
      <Metadata {...metadata} />
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
