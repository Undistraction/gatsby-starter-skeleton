import React from 'react'
import PropTypes from 'prop-types'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import Tag from './Tag'
import { markdownItemNodes } from '../helpers/markdown'
import { addTitleToMetadata } from '../helpers/metadata'

const TagPage = ({ data, pathContext }) => {
  const metadata = data.site.siteMetadata.metadata.tag
  const { tag, tags } = pathContext

  return (
    <Page title={tag} hasImage={false}>
      <Metadata {...addTitleToMetadata(metadata, tag)} />
      <Tag taggedItems={markdownItemNodes(data)} tag={tag} tags={tags} />
    </Page>
  )
}

TagPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
}

export default TagPage
