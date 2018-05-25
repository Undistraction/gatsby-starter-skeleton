import PropTypes from 'prop-types'
import React from 'react'
import { FourOhFourPageTitle } from '../helpers/siteMetadata'
import Page from '../shared/Page/Page'
import NotFoundMessage from './NotFoundMessage'

const FourOhFourPage = ({ data, location }) => (
  <Page title={FourOhFourPageTitle(data)}>
    <NotFoundMessage path={location.pathname} />
  </Page>
)

FourOhFourPage.propTypes = {
  location: PropTypes.object.isRequired,

  data: PropTypes.object.isRequired,
}

export default FourOhFourPage
