import React from 'react'
import PropTypes from 'prop-types'
import Page from '../shared/Page/Page'
import NotFoundMessage from './NotFoundMessage'
import { notFoundPageTitle } from '../helpers/siteMetadata'

const NotFoundPage = ({ data, location }) => (
  <Page title={notFoundPageTitle(data)} hasImage={false}>
    <NotFoundMessage path={location.pathname} />
  </Page>
)

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,

  data: PropTypes.object.isRequired,
}

export default NotFoundPage
