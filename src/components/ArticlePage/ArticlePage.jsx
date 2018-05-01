import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import Article from './Article'
import {
  markdownItemFrontmatter,
  markdownItemMetadata,
  markdownItemTitle,
} from '../helpers/text'

const ArticlePage = ({ data }) => (
  <Page title={markdownItemTitle(data)}>
    <Metadata {...markdownItemMetadata(data)} />
    <Img sizes={markdownItemFrontmatter(data).image.childImageSharp.sizes} />
    <Article data={data} />
  </Page>
)

ArticlePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default ArticlePage
