import PropTypes from 'prop-types'
import React from 'react'
import {
  fieldsSlug,
  fieldsTitle,
  markdownItem,
  markdownItemImageSizes,
  markdownItemMetadata,
  markdownItemTitle,
  next,
  previous,
} from '../helpers/markdown'
import Metadata from '../shared/Metadata'
import NextPreviousNav from '../shared/NextPreviousNav'
import Page from '../shared/Page'
import Article from './Article'

const ArticlePage = ({ data }) => {
  const previousArticle = previous(data)
  const nextArticle = next(data)

  const nav = (
    <NextPreviousNav
      previousLabel={fieldsTitle(previousArticle)}
      nextLabel={fieldsTitle(nextArticle)}
      previousPath={fieldsSlug(previousArticle)}
      nextPath={fieldsSlug(nextArticle)}
    />
  )

  return (
    <Page
      title={markdownItemTitle(data)}
      imageSizes={markdownItemImageSizes(data)}
      nav={nav}
    >
      <Metadata {...markdownItemMetadata(data)} />
      <Article article={markdownItem(data)} />
    </Page>
  )
}
ArticlePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArticlePage
