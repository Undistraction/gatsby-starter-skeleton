// -----------------------------------------------------------------------------
// Articles List > View
// -----------------------------------------------------------------------------

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import renderListItems from '../../helpers/renderListItems'
import api from '../../styles/api'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import uiList from '../../styles/mixins/uiList'
import ProjectsListItem from './ProjectsListItem'

const Layout = styled.ul`
  ${flexHorizontal};
  ${uiList};
  flex-wrap: wrap;
  ${api({
    padding: 0,
    margin: `-0.5ru`,
  })};

  & > * {
    width: 33.3%;
    ${api({
      padding: `0.5ru`,
    })};
  }
`

const ProjectList = ({ projects }) => (
  <Layout>{renderListItems(ProjectsListItem, `project`, projects)}</Layout>
)

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectList
