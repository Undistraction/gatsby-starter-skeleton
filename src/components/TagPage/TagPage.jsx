import React from 'react'
import PropTypes from 'prop-types'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import Tag from './Tag'
import { markdownItemNodes } from '../helpers/markdown'
import { addTitleToMetadata } from '../helpers/metadata'

const tagTitle = tag => `Tag ${tag}`

const TagPage = ({ data, pathContext }) => {
  const metadata = data.site.siteMetadata.metadata.tag
  const { tag, tags } = pathContext

  return (
    <Page title={tagTitle(tag)} hasImage={false}>
      <Metadata {...addTitleToMetadata(metadata, tag)} />
      <Tag taggedItems={markdownItemNodes(data)} tag={tag} tags={tags} />
    </Page>
  )
}

TagPage.propTypes = {
  data: PropTypes.object.isRequired,

  pathContext: PropTypes.object.isRequired,
}

export default TagPage
