import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TextLink from '../shared/TextLink'

const Layout = styled.div`
  text-align: center;
`

const NotFoundMessage = ({ pathname }) => (
  <Layout>
    <p>
      There was no page at <i>{pathname}</i>.
    </p>
    <p>
      Would you like to go to the <TextLink to="/">Home page</TextLink>?
    </p>
  </Layout>
)

NotFoundMessage.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default NotFoundMessage
