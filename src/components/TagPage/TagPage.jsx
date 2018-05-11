import PropTypes from 'prop-types'
import React from 'react'
import { markdownItemNodes } from '../helpers/markdown'
import { addTitleToMetadata } from '../helpers/metadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import Tag from './Tag'

const tagTitle = tag => `Tag ${tag}`

const TagPage = ({ data, pathContext }) => {
  const metadata = data.site.siteMetadata.metadata.tag
  const { tag } = pathContext

  return (
    <Page title={tagTitle(tag)}>
      <Metadata {...addTitleToMetadata(metadata, tag)} />
      <Tag taggedItems={markdownItemNodes(data)} tag={tag} />
    </Page>
  )
}

TagPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export default TagPage
