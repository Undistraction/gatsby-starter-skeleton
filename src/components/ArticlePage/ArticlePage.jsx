import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import Article from './Article'
import {
  markdownItemMetadata,
  markdownItemTitle,
  markdownItemImageSizes,
} from '../helpers/markdown'

const ArticlePage = ({ data }) => (
  <Page title={markdownItemTitle(data)}>
    <Metadata {...markdownItemMetadata(data)} />
    <Img sizes={markdownItemImageSizes(data)} />
    <Article data={data} />
  </Page>
)

ArticlePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArticlePage
