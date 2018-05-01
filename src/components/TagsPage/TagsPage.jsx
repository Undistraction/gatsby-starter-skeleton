import React from 'react'
import PropTypes from 'prop-types'
import Metadata from '../shared/Metadata'
import loadMetadata from '../../generate/loadMetadata'
import config from '../../config'
import Page from '../shared/Page/Page'
import Tags from './Tags'

const TagsPage = ({ pathContext }) => {
  const { tags } = pathContext
  return (
    <Page title={config.structure.tags.name} hasImage={false}>
      <Metadata {...loadMetadata('tags')} />
      <Tags tags={tags} />
    </Page>
  )
}

TagsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
}

export default TagsPage
