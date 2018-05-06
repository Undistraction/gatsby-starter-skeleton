import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { api } from 'cssapi'
import banner from '../../../styles/mixins/banner'

const Layout = styled.p`
  ${banner()};
  position: relative;
  ${api({
    padding: `1ru`,
    background: `g:backgroundInverted`,
    color: `c:textInverted`,
  })};
`

const Copyright = ({ owner, dateRange }) => (
  <Layout>
    Site and contents &copy; {owner} {dateRange}
  </Layout>
)

Copyright.propTypes = {
  owner: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
}

export default Copyright
