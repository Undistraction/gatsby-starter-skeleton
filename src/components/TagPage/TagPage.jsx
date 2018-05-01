import React from 'react'
import PropTypes from 'prop-types'
import { pluck, concat, over, lensProp } from 'ramda'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import Tag from './Tag'

const buildMetadata = (metadata, tag) =>
  over(lensProp('title'), concat(tag), metadata)

const TagPage = ({ data, pathContext }) => {
  const metadata = data.site.siteMetadata.metadata.tag
  const taggedItems = pluck('node')(data.allMarkdownRemark.edges)
  const { tag, tags } = pathContext

  const augmentedMetadata = buildMetadata(metadata, tag)

  return (
    <Page title={tag} hasImage={false}>
      <Metadata {...augmentedMetadata} />
      <Tag taggedItems={taggedItems} tag={tag} tags={tags} />
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
