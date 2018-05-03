import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import scaleBounce from '../../styles/animations/scaleBounce'
import Logo from '../../shared/Logo'

const Wrapper = styled(Link)`
  &:hover {
    animation: ${scaleBounce()} 0.3s ease-in-out;
  }
`
const SiteLogoLink = () => (
  <Wrapper to="/">
    <Logo />
  </Wrapper>
)

export default SiteLogoLink
