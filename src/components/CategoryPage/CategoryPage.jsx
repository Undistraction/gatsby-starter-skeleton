import PropTypes from 'prop-types'
import React from 'react'
import { categoryTitle, pluraliseWithNumber } from '../helpers/formatting'
import { markdownItemNodes } from '../helpers/markdown'
import { addTitleToMetadata } from '../helpers/metadata'
import {
  articlesResourceTitle,
  categoryPageMetadata,
} from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page/Page'
import SearchResults from '../shared/SearchResults'

const CategoryPage = ({ data, pathContext }) => {
  const metadata = categoryPageMetadata(data)
  const { category } = pathContext

  console.log(`---------------------------------------------------------------`)
  console.log(`Data`, data)
  console.log(`Path Context`, pathContext)
  console.log(`---------------------------------------------------------------`)

  const articles = markdownItemNodes(data)

  return (
    <Page title={categoryTitle(category)}>
      <Metadata {...addTitleToMetadata(metadata, category)} />
      <SearchResults
        articles={articles}
        title={[
          `${pluraliseWithNumber(
            articlesResourceTitle(data),
            articles.length
          )} filed in`,
          category,
        ]}
      />
    </Page>
  )
}

CategoryPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export default CategoryPage
