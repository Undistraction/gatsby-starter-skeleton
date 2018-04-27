import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageTitle from './PageTitle';
import api from '../../styles/api';

const Wrapper = styled.header`
  ${api({
    textAlign: ['center'],
  })};
`;

const PageHeader = ({ title }) => (
  <Wrapper>
    <PageTitle>{title}</PageTitle>
  </Wrapper>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
