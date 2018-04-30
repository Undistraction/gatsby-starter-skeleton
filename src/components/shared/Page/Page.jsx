import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../../../styles/api'
import flexVertical from '../../../styles/mixins/flexVertical'
import PageBody from './PageBody'
import PageHeader from './PageHeader'

export const LayoutHeader = styled.div``
export const LayoutBody = styled.div``

const Layout = styled.div`
  ${flexVertical};

  ${LayoutHeader} {
    ${({ hasImage }) =>
      api({
        flex: '0 0 auto',
        marginBottom: hasImage ? 0 : '3ru',
      })};
  }

  ${LayoutBody} {
    flex: 1 0 auto;
  }
`

const Page = ({ title, children, hasImage }) => (
  <Layout hasImage={hasImage}>
    <LayoutHeader>
      <PageHeader title={title} />
    </LayoutHeader>
    <LayoutBody>
      <PageBody>{children}</PageBody>
    </LayoutBody>
  </Layout>
)

Page.displayName = 'Page'

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
