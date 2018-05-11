// eslint-disable react/no-danger

import PropTypes from 'prop-types'
import React from 'react'
import { fieldsTags } from '../../helpers/markdown'
import HTMLText from '../../shared/HTMLText'
import ResourceFooter from '../../shared/ResourceFooter'
import TagList from '../../shared/TagList'

const Project = ({ project }) => (
  <React.Fragment>
    <HTMLText htmlAst={project.htmlAst} />
    <ResourceFooter>
      <TagList tags={fieldsTags(project)} />
    </ResourceFooter>
  </React.Fragment>
)

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export default Project
