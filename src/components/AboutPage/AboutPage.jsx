// -----------------------------------------------------------------------------
// About Page > View >
// -----------------------------------------------------------------------------

import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import HTMLText from '../../components/shared/HTMLText'
import { htmlAst, markdownItemImageSizes } from '../helpers/markdown'
import { aboutPageMetadata, aboutPageTitle } from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'

const AboutPage = ({ data }) => (
  <Page title={aboutPageTitle(data)}>
    <Metadata {...aboutPageMetadata(data)} />
    <Img sizes={markdownItemImageSizes(data)} />
    <HTMLText htmlAst={htmlAst(data)} />
  </Page>
)

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage
