import PropTypes from 'prop-types'
import React from 'react'
import { pluraliseWithNumber, tagTitle } from '../helpers/formatting'
import { markdownItemNodes } from '../helpers/markdown'
import { addTitleToMetadata } from '../helpers/metadata'
import { articlesResourceTitle, tagPageMetadata } from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import SearchResults from '../shared/SearchResults'

const TagPage = ({ data, pageContext }) => {
  const metadata = tagPageMetadata(data)
  const { tag } = pageContext
  const articles = markdownItemNodes(data)
  return (
    <Page title={tagTitle(tag)}>
      <Metadata {...addTitleToMetadata(metadata, tag)} />
      <SearchResults
        articles={articles}
        title={[
          `${pluraliseWithNumber(
            articlesResourceTitle(data),
            articles.length
          )} tagged with`,
          tag,
        ]}
      />
    </Page>
  )
}

TagPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default TagPage
