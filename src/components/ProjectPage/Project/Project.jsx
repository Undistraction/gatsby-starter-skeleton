// eslint-disable react/no-danger

import PropTypes from 'prop-types'
import React from 'react'
import MarkdownContent from '../../shared/MarkdownContent'

const Project = ({ project }) => (
  <React.Fragment>
    <MarkdownContent htmlAst={project.htmlAst} />
  </React.Fragment>
)

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export default Project
