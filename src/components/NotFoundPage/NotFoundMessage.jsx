import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TextLink from '../shared/TextLink'

const Layout = styled.div`
  text-align: center;
`

const NotFoundMessage = ({ path }) => (
  <Layout>
    <p>
      There was no page at <i>{path}</i>.
    </p>
    <p>
      Would you like to go to the <TextLink to="/">Home page</TextLink>?
    </p>
  </Layout>
)

NotFoundMessage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default NotFoundMessage
