import { scope } from 'cssapi'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../../styles/api'
import defaultBorder from '../../styles/mixins/defaultBorder'
import VLayout from '../layouts/VLayout'
import TitlePrimary from '../titles/TitlePrimary'
import DefaultLayout from '../../layouts/DefaultLayout'

export const Body = styled(VLayout)`
  position: relative;
  ${api({
    paddingH: [`1ru`, `1ru`, `1ru`, 0],
  })};
`

export const NavWrapper = styled.div``

const PageTitle = styled(TitlePrimary)`
  text-align: center;
  ${defaultBorder([`top`, `bottom`])};
  ${api({
    paddingV: scope`1ru`,
  })};
`

const Page = ({ title, children, imageSizes, nav }) => (
  <DefaultLayout>
    <VLayout>
      {imageSizes && <Img fluid={imageSizes} />}
      {nav && <NavWrapper>{nav}</NavWrapper>}
      <Body>
        <PageTitle>{title}</PageTitle>
        {children}
      </Body>
      {nav && <NavWrapper>{nav}</NavWrapper>}
    </VLayout>
  </DefaultLayout>
)

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  imageSizes: PropTypes.object,
  nav: PropTypes.node,
}

Page.defaultProps = {
  children: [],
  imageSizes: null,
  nav: null,
}

export default Page
