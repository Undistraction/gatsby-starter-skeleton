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
import { mainImageSizes } from '../helpers/images'
import { mainText } from '../helpers/text'

const AboutPage = ({ data }) => {
  const title = aboutPageTitle(data)
  const metadata = aboutPageMetadata(data)
  return (
    <Page title={title}>
      <Metadata {...metadata} />
      <Img sizes={mainImageSizes(data)} />
      <HTMLText htmlText={mainText(data)} />
    </Page>
  )
}

AboutPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default AboutPage
