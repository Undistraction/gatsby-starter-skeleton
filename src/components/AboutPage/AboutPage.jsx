// -----------------------------------------------------------------------------
// About Page > View >
// -----------------------------------------------------------------------------

import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import HTMLText from '../../components/shared/HTMLText'
import mainImageSizesFrom from '../../data/mainImageSizesFrom'
import mainTextFrom from '../../data/mainTextFrom'
import titleFrom from '../../data/titleFrom'
import loadMetadata from '../../build/loadMetadata'

const AboutPage = ({ data }) => (
  <Page title={titleFrom(data)}>
    <Metadata {...loadMetadata('about')} />
    <Img sizes={mainImageSizesFrom(data)} />
    <HTMLText htmlText={mainTextFrom(data)} />
  </Page>
)

AboutPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default AboutPage
