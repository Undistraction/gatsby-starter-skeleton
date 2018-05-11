import PropTypes from 'prop-types'
import React from 'react'
import { notFoundPageTitle } from '../helpers/siteMetadata'
import Page from '../shared/Page/Page'
import NotFoundMessage from './NotFoundMessage'

const NotFoundPage = ({ data, location }) => (
  <Page title={notFoundPageTitle(data)}>
    <NotFoundMessage path={location.pathname} />
  </Page>
)

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,

  data: PropTypes.object.isRequired,
}

export default NotFoundPage
