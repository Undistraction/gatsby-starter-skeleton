import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageText = styled.div`
  p:first-child {
    font-weight: bold;
  }
`;

const HTMLText = ({ htmlText }) => (
  // eslint-disable-next-line react/no-danger
  <PageText dangerouslySetInnerHTML={{ __html: htmlText }} />
);

HTMLText.propTypes = {
  htmlText: PropTypes.string.isRequired,
};

export default HTMLText;
