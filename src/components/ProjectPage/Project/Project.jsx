// eslint-disable react/no-danger

import PropTypes from 'prop-types'
import React from 'react'
import HTMLText from '../../shared/HTMLText'

const Project = ({ project }) => (
  <React.Fragment>
    <HTMLText htmlAst={project.htmlAst} />
  </React.Fragment>
)

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export default Project
