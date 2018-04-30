// -----------------------------------------------------------------------------
// Articles List > View
// -----------------------------------------------------------------------------

import React from 'react'
import styled from 'styled-components'
import { mapIndexed } from 'ramda-adjunct'
import PropTypes from 'prop-types'
import ProjectsListItem from './ProjectsListItem'
import flexHorizontal from '../../../styles/mixins/flexHorizontal'
import uiList from '../../../styles/mixins/uiList'
import api from '../../../styles/api'

const Layout = styled.ul`
  ${flexHorizontal};
  ${uiList};
  flex-wrap: wrap;
  ${api({
    padding: [0],
    margin: ['-0.5ru'],
  })};

  & > * {
    width: 33.3%;
    ${api({
      padding: ['0.5ru'],
    })};
  }
`

const renderListItems = mapIndexed((project, key) => (
  <li key={key}>
    <ProjectsListItem project={project} />
  </li>
))

const ProjectList = ({ projects }) => (
  <Layout>{renderListItems(projects)}</Layout>
)

ProjectList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.array.isRequired,
}

ProjectList.displayName = 'ArticlesList'

export default ProjectList
