import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../../styles/api'
import curvedInset from '../../styles/mixins/curvedInset'
import transformCenterH from '../../styles/mixins/transformCenterH'

const PageTitle = styled.h1`
  font-weight: bold;
  ${curvedInset('bottom')};
  ${api({
    padding: '0.2ru 2ru',
    baseline: 's:primaryTitle',
  })};
`

const Wrapper = styled.header`
  position: relative;
  ${api({
    textAlign: 'center',
  })};

  ${PageTitle} {
    ${transformCenterH};
    position: absolute;
    z-index: 2;
    ${api({
      bottom: '-1.5ru',
    })};
  }
`

const PageHeader = ({ title }) => (
  <Wrapper>
    <PageTitle>{title}</PageTitle>
  </Wrapper>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageHeader
