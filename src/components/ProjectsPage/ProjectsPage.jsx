import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import ProjectsList from './ProjectsList'
import {
  projectsPageTitle,
  projectsPageMetadata,
} from '../helpers/siteMetadata'
import { markdownItemNodes } from '../helpers/markdown'

const ProjectsPage = ({ data }) => (
  <Page title={projectsPageTitle(data)} hasImage={false}>
    <Metadata {...projectsPageMetadata(data)} />
    <ProjectsList projects={markdownItemNodes(data)} />
  </Page>
)

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectsPage
