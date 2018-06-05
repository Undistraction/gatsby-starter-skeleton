import PropTypes from 'prop-types'
import React from 'react'
import { FourOhFourPageTitle } from '../helpers/siteMetadata'
import Page from '../shared/Page/Page'
import NotFoundMessage from './NotFoundMessage'

// Currently no theme is supplied to styled components in the 404 page so we
// need to do it explicitly here by wrapping it in a ThemeProvider.
const FourOhFourPage = props => (
  <Page title={FourOhFourPageTitle(props.data)}>
    <NotFoundMessage path={props.location.pathname} />
  </Page>
)

FourOhFourPage.propTypes = {
  location: PropTypes.object.isRequired,

  data: PropTypes.object.isRequired,
}

export default FourOhFourPage
