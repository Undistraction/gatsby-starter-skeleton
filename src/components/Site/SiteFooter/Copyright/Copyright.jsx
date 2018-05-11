import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import banner from '../../../styles/mixins/banner'

const Layout = styled.p`
  ${banner()};
  position: relative;
  text-align: center;
  ${api({
    padding: scope`1ru`,
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
