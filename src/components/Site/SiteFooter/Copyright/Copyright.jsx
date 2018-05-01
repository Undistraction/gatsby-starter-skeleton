import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../../../styles/api'
import banner from '../../../styles/mixins/banner'

const Layout = styled.p`
  ${banner()};
  position: relative;
  ${api({
    padding: '1ru',
    background: 'c:black',
    color: 'c:white',
  })};
`

const Copyright = ({ owner, dateRange }) => (
  <Layout>
    Site and contents &copy; {owner} {dateRange}
  </Layout>
)

Copyright.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  owner: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
}

export default Copyright
