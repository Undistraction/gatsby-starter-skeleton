// eslint-disable react/no-danger

import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import Project from './Project'
import {
  markdownItemMetadata,
  markdownItemTitle,
  markdownItemImageSizes,
} from '../helpers/markdown'

const ProjectPage = ({ data }) => (
  <Page title={markdownItemTitle(data)}>
    <Metadata {...markdownItemMetadata(data)} />
    <Img sizes={markdownItemImageSizes(data)} />
    <Project data={data} />
  </Page>
)

ProjectPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default ProjectPage
