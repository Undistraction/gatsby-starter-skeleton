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
import { markdownItemNodes } from '../helpers/text'

const ProjectsPage = ({ data }) => (
  <Page title={projectsPageTitle(data)} hasImage={false}>
    <Metadata {...projectsPageMetadata(data)} />
    <ProjectsList projects={markdownItemNodes(data)} />
  </Page>
)

ProjectsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default ProjectsPage
