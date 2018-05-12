import PropTypes from 'prop-types'
import React from 'react'
import { pluralise } from '../helpers/formatting'
import { tagsPageMetadata, tagsResourceTitle } from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import TagList from '../shared/TagList'

const TagsPage = ({ data, pathContext }) => (
  <Page title={pluralise(tagsResourceTitle(data))}>
    <Metadata {...tagsPageMetadata(data)} />
    <TagList tags={pathContext.tags} />
  </Page>
)

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export default TagsPage
