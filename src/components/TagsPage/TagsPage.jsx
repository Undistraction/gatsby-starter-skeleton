import React from 'react'
import PropTypes from 'prop-types'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import Tags from './Tags'

const TagsPage = ({ data, pathContext }) => {
  const metadata = data.site.siteMetadata.metadata.tags
  const { title } = data.site.siteMetadata.structure.resources.tags
  const { tags } = pathContext
  return (
    <Page title={title} hasImage={false}>
      <Metadata {...metadata} />
      <Tags tags={tags} />
    </Page>
  )
}

TagsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
}

export default TagsPage
