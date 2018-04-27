import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageText = styled.div`
  p:first-child {
    font-weight: bold;
  }

  p:first-child:first-letter {
    float: left;
    font-size: 1.7em;
    font-weight: normal;
    margin-right: 0.3em;
    padding: 12px 10px 6px;
    background: black;
    color: white;
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
