// eslint-disable react/no-danger

import PropTypes from 'prop-types'
import React from 'react'
import {
  fieldsSlug,
  fieldsTitle,
  markdownItem,
  markdownItemImageSizes,
  markdownItemMetadata,
  markdownItemTitle,
  next,
  previous,
} from '../helpers/markdown'
import Metadata from '../shared/Metadata'
import NextPreviousNav from '../shared/NextPreviousNav'
import Page from '../shared/Page'
import Project from './Project'

const ProjectPage = ({ data }) => {
  const previousProject = previous(data)
  const nextProject = next(data)

  const nav = (
    <NextPreviousNav
      previousLabel={fieldsTitle(previousProject)}
      nextLabel={fieldsTitle(nextProject)}
      previousPath={fieldsSlug(previousProject)}
      nextPath={fieldsSlug(nextProject)}
    />
  )

  return (
    <Page
      title={markdownItemTitle(data)}
      imageSizes={markdownItemImageSizes(data)}
      nav={nav}
    >
      <Metadata {...markdownItemMetadata(data)} />
      <Project project={markdownItem(data)} />
    </Page>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectPage
