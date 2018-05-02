import React from 'react'
import PropTypes from 'prop-types'
import Page from '../shared/Page/Page'
import NotFoundMessage from './NotFoundMessage'
import { notFoundPageTitle } from '../helpers/siteMetadata'

const NotFoundPage = ({ data, location }) => (
  <Page title={notFoundPageTitle(data)} hasImage={false}>
    <NotFoundMessage pathname={location.pathname} />
  </Page>
)

NotFoundPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default NotFoundPage
