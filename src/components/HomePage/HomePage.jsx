import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Page from '../shared/Page'
import HTMLText from '../../components/shared/HTMLText'
import Metadata from '../shared/Metadata'
import { htmlText, markdownItemImageSizes } from '../helpers/markdown'
import { homePageTitle, homePageMetadata } from '../helpers/siteMetadata'

const HomePage = ({ data }) => (
  <Page title={homePageTitle(data)}>
    <Metadata {...homePageMetadata(data)} />
    <Img sizes={markdownItemImageSizes(data)} />
    <HTMLText htmlText={htmlText(data)} />
  </Page>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage
