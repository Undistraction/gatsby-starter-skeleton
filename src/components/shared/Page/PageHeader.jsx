import { api } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import curvedInset from '../../styles/mixins/curvedInset'
import flexVertical from '../../styles/mixins/flexVertical'
import TitlePrimary from '../TitlePrimary'

const PageTitle = styled(TitlePrimary)`
  position: relative;
  text-align: center;
  z-index: 2;
  ${curvedInset(`bottom`)};

  ${api({
    padding: `0 2ru`,
  })};
`

const Wrapper = styled.header`
  ${flexVertical};
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;

  ${api({
    paddingH: `1ru`,
  })};
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
