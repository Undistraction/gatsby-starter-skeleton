import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Page from '../shared/Page'
import HTMLText from '../../components/shared/HTMLText'
import Metadata from '../shared/Metadata'
import { mainImageSizes } from '../helpers/images'
import { mainText } from '../helpers/text'
import { homePageTitle, homePageMetadata } from '../helpers/siteMetadata'

const HomePage = ({ data }) => {
  const title = homePageTitle(data)
  const metadata = homePageMetadata(data)

  return (
    <Page title={title}>
      <Metadata {...metadata} />
      <Img sizes={mainImageSizes(data)} />
      <HTMLText htmlText={mainText(data)} />
    </Page>
  )
}

HomePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default HomePage
