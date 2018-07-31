import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Logo from '../../shared/Logo'
import scaleBounce from '../../styles/animations/scaleBounce'

const Wrapper = styled(Link)`
  html.feat-no-touchevents &:hover {
    animation: ${scaleBounce()} 0.3s ease-in-out;
  }
`
const SiteLogoLink = () => (
  <Wrapper to="/">
    <Logo />
  </Wrapper>
)

export default SiteLogoLink
