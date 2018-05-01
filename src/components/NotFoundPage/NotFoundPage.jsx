import React from 'react'
import PropTypes from 'prop-types'
import Page from '../shared/Page/Page'
import NotFoundMessage from './NotFoundMessage'

const NotFoundPage = ({ location }) => (
  <Page title="Page Doesn't Exist" hasImage={false}>
    <NotFoundMessage pathname={location.pathname} />
  </Page>
)

NotFoundPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
}

export default NotFoundPage
