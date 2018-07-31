import PropTypes from 'prop-types'
import React from 'react'
import { pluralise } from '../helpers/formatting'
import { tagsPageMetadata, tagsResourceTitle } from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import TagList from '../shared/TagList'

const TagsPage = ({ data, pageContext }) => (
  <Page title={pluralise(tagsResourceTitle(data))}>
    <Metadata {...tagsPageMetadata(data)} />
    <TagList tags={pageContext.tags} />
  </Page>
)

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default TagsPage
