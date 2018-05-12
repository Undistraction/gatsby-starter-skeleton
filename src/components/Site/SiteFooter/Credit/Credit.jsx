import { api } from 'cssapi'
import React from 'react'
import styled from 'styled-components'
import HLayout from '../../../shared/layouts/HLayout'
import TextLink from '../../../shared/links/TextLink'
import circle from '../../../styles/mixins/circle'

const CreditIcon = styled.span`
  position: relative;
  ${circle([8, 8, 12])};

  // visually adjust circle
  ${api({
    top: [0, 0, `2px`],
  })};
`

const Layout = styled(HLayout)`
  align-items: baseline;
  justify-content: center;
`

const Credit = () => (
  <Layout spacing="tiny">
    <div>Built by</div>
    <CreditIcon />
    <TextLink to="http://undistraction.com">
      <div>Undistraction</div>
    </TextLink>
  </Layout>
)

export default Credit
