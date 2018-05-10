import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../../styles/api'
import defaultBorder from '../../styles/mixins/defaultBorder'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import TitlePrimary from '../titles/TitlePrimary'

export const Header = styled.div`
  position: relative;
`

const PageTitle = styled(TitlePrimary)`
  text-align: center;
  ${api({
    borderWidth: `1px 0`,
    paddingV: `1ru`,
  })};
  ${p => defaultBorder(p.theme.api)};
`

const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV(`1ru`)};
`

const Page = ({ title, children, imageSizes, nav }) => (
  <Layout>
    {imageSizes && <Img sizes={imageSizes} />}
    {nav}
    <PageTitle>{title}</PageTitle>
    {children}
  </Layout>
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
