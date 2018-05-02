// -----------------------------------------------------------------------------
// About Page > View >
// -----------------------------------------------------------------------------

import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import HTMLText from '../../components/shared/HTMLText'
import { aboutPageTitle, aboutPageMetadata } from '../helpers/siteMetadata'
import { markdownItemImageSizes, htmlText } from '../helpers/markdown'

const AboutPage = ({ data }) => (
  <Page title={aboutPageTitle(data)}>
    <Metadata {...aboutPageMetadata(data)} />
    <Img sizes={markdownItemImageSizes(data)} />
    <HTMLText htmlText={htmlText(data)} />
  </Page>
)

AboutPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default AboutPage
