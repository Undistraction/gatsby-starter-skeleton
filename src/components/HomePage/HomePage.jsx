import PropTypes from 'prop-types'
import React from 'react'
import HTMLText from '../../components/shared/HTMLText'
import { htmlAst, markdownItemImageSizes } from '../helpers/markdown'
import { homePageMetadata, homePageTitle } from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'

const HomePage = ({ data }) => (
  <Page title={homePageTitle(data)} imageSizes={markdownItemImageSizes(data)}>
    <Metadata {...homePageMetadata(data)} />
    <HTMLText htmlAst={htmlAst(data)} />
  </Page>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage
