import PropTypes from 'prop-types'
import React from 'react'
import { tagTitle } from '../helpers/formatting'
import { markdownItemNodes } from '../helpers/markdown'
import { addTitleToMetadata } from '../helpers/metadata'
import { articlesResourceTitle, tagPageMetadata } from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import Tag from './Tag'

const TagPage = ({ data, pathContext }) => {
  const metadata = tagPageMetadata(data)
  const { tag } = pathContext

  return (
    <Page title={tagTitle(tag)}>
      <Metadata {...addTitleToMetadata(metadata, tag)} />
      <Tag
        articles={markdownItemNodes(data)}
        articlesTitle={articlesResourceTitle(data)}
        tag={tag}
      />
    </Page>
  )
}

TagPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export default TagPage
