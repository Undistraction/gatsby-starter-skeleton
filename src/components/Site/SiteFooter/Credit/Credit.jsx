import React from 'react'
import styled from 'styled-components'
import { api } from 'cssapi'
import circle from '../../../styles/mixins/circle'
import IconLink from '../../../shared/IconLink'

const CreditIcon = styled.span`
  display: inline-block;
  ${circle([12])};
`

const Layout = styled.p`
  ${CreditIcon} {
    ${api({
      position: `relative`,
      top: 2,
    })};
  }
`

const Credit = () => (
  <Layout>
    Built by{` `}
    <IconLink to="http://undistraction.com">
      <CreditIcon />
      <span>Undistraction</span>
    </IconLink>
  </Layout>
)

export default Credit
