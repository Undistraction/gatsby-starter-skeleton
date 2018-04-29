import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../../../../styles/api'
import banner from '../../../../styles/mixins/banner'

const View = styled.p`
  ${banner()};
  position: relative;
  ${api({
    padding: '1ru',
    background: 'c:black',
    color: 'c:white',
  })};
`

const Copyright = ({ owner, dateRange }) => (
  <View>
    Site and contents &copy; {owner} {dateRange}
  </View>
)

Copyright.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  owner: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
}

export default Copyright
