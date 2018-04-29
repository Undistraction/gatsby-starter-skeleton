import React from 'react'
import styled from 'styled-components'
import api from '../../../../styles/api'
import circle from '../../../../styles/mixins/circle'
import IconLink from '../../../shared/IconLink'

const CreditIcon = styled.span`
  display: inline-block;
  ${circle([12])};
`

const View = styled.p`
  ${CreditIcon} {
    ${api({
      position: 'relative',
      top: 2,
    })};
  }
`

const Credit = () => (
  <View>
    Built by{' '}
    <IconLink href="http://undistraction.com">
      <CreditIcon />
      <span>Undistraction</span>
    </IconLink>
  </View>
)

export default Credit
