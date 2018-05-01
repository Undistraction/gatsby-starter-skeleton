import React from 'react'
import PropTypes from 'prop-types'
import { assoc, pluck } from 'ramda'
import Metadata from '../shared/Metadata'
import loadMetadata from '../../generate/loadMetadata'
import Page from '../shared/Page/Page'
import Tag from './Tag'

const metadata = tag => assoc('title', `Tag: ${tag}`, loadMetadata('tags'))

const TagPage = ({ data, pathContext }) => {
  console.log(pathContext)
  const taggedItems = pluck('node')(data.allMarkdownRemark.edges)
  const { tag, tags } = pathContext

  return (
    <Page title={tag} hasImage={false}>
      <Metadata {...metadata(tag)} />
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
