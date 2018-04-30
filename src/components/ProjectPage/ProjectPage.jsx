// eslint-disable react/no-danger

import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import Project from './Project'

const ProjectPage = ({ data }) => {
  const project = data.markdownRemark
  const { metadata } = project.fields
  const { frontmatter } = project

  return (
    <Page title={frontmatter.title}>
      <Metadata {...metadata} />
      <Img sizes={frontmatter.image.childImageSharp.sizes} />
      <Project data={data} />
    </Page>
  )
}

ProjectPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default ProjectPage
