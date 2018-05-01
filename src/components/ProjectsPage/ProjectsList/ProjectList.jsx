// -----------------------------------------------------------------------------
// Articles List > View
// -----------------------------------------------------------------------------

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProjectsListItem from './ProjectsListItem'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import uiList from '../../styles/mixins/uiList'
import api from '../../styles/api'
import renderListItems from '../../helpers/renderListItems'

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

const ProjectList = ({ projects }) => (
  <Layout>{renderListItems(ProjectsListItem, 'project', projects)}</Layout>
)

ProjectList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.array.isRequired,
}

export default ProjectList
