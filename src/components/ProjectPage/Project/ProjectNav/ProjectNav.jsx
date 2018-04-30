import React from 'react'
import PropTypes from 'prop-types'
import { path } from 'ramda'
import NextPreviousNav from '../../../shared/NextPreviousNav'

const ProjectNav = ({ previousProeject, nextProeject }) => (
  <NextPreviousNav
    previousLabel={path(['frontmatter', 'title'], previousProeject)}
    nextLabel={path(['frontmatter', 'title'], nextProeject)}
    previousPath={path(['fields', 'slug'], previousProeject)}
    nextPath={path(['fields', 'slug'], nextProeject)}
  />
)

ProjectNav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  previousProeject: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  nextProeject: PropTypes.object,
}

ProjectNav.defaultProps = {
  previousProeject: null,
  nextProeject: null,
}

export default ProjectNav
