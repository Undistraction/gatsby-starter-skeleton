// -----------------------------------------------------------------------------
// About Page > View >
// -----------------------------------------------------------------------------

import PropTypes from 'prop-types'
import React from 'react'
import MarkdownContent from '../shared/MarkdownContent'
import {
  markdownItemHTMLAst,
  markdownItemImageSizes,
} from '../helpers/markdown'
import { aboutPageMetadata, aboutPageTitle } from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'

const AboutPage = ({ data }) => (
  <Page title={aboutPageTitle(data)} imageSizes={markdownItemImageSizes(data)}>
    <Metadata {...aboutPageMetadata(data)} />
    <MarkdownContent htmlAst={markdownItemHTMLAst(data)} />
  </Page>
)

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage
