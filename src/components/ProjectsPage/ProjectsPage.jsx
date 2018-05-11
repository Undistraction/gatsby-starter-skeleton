import PropTypes from 'prop-types'
import React from 'react'
import { markdownItemNodes } from '../helpers/markdown'
import {
  projectsPageMetadata,
  projectsPageTitle,
} from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import ProjectsList from './ProjectsList'

const ProjectsPage = ({ data }) => (
  <Page title={projectsPageTitle(data)}>
    <Metadata {...projectsPageMetadata(data)} />
    <ProjectsList projects={markdownItemNodes(data)} />
  </Page>
)

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectsPage
