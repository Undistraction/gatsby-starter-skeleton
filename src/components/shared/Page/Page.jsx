import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../../styles/api'
import flexVertical from '../../styles/mixins/flexVertical'
import PageBody from './PageBody'
import PageHeader from './PageHeader'

export const Header = styled.div``
export const Body = styled.div``

const Layout = styled.div`
  ${flexVertical};

  ${Header} {
    ${({ hasImage }) =>
      api({
        flex: `0 0 auto`,
        marginBottom: hasImage ? 0 : `3ru`,
      })};
  }

  ${Body} {
    flex: 1 0 auto;
  }
`

const Page = ({ title, children, hasImage }) => (
  <Layout hasImage={hasImage}>
    <Header>
      <PageHeader title={title} />
    </Header>
    <Body>
      <PageBody>{children}</PageBody>
    </Body>
  </Layout>
)

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  hasImage: PropTypes.bool,
}

Page.defaultProps = {
  children: [],
  hasImage: true,
}

export default Page
