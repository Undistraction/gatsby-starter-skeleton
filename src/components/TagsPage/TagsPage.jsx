import React from 'react'
import PropTypes from 'prop-types'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import Tags from './Tags'
import { tagsPageMetadata, tagsPageTitle } from '../helpers/siteMetadata'

const TagsPage = ({ data, pathContext }) => (
  <Page title={tagsPageTitle(data)} hasImage={false}>
    <Metadata {...tagsPageMetadata(data)} />
    <Tags tags={pathContext.tags} />
  </Page>
)

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,

  pathContext: PropTypes.object.isRequired,
}

export default TagsPage
